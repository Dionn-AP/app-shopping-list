import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Header from "../../components/Header/Header";
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import ListFinished from '../../components/ListFinished/ListFinished';
import LoadingIn from '../../components/LoadingIn/LoadingIn';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/axios';
import { formatDate } from '../../utils/formats';
import { getHeaders } from '../../utils/token';
import { useAuth } from '../../context/AuthContext';
import theme from '../../styles/theme';

import {
  ContainerMyLists,
  ContainerContentMyLists,
  TextContentTop,
  ContainerList,
  NameList,
  CreatedAndStatusList,
  ContainerListLeft,
  ContainerListRight,
  TotalPriceList,
  DateAndStatus,
  styles
} from './styles';

import { TotalPrice, TotalPriceText, TotalPriceTextNumber } from '../../components/ListFinished/styles';
import ListOppened from '../../components/ListOppened/ListOppened';

interface Item {
  id: number;
  name: string;
  quantity?: number;
  unit?: string;
  price?: number;
  status?: string;
}

interface ListItem {
  id: number;
  name: string;
  createdAt: string;
  statusList: string;
  items: Item[]; // Alterado para ser um array de Item
}


const MyLists = () => {
  const nav = useNavigation();
  const [lists, setLists] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [accessList, setAccessList] = useState(0);
  const [status, setStatus] = useState("");
  const { total, authData } = useAuth();

  useEffect(() => {
    fetchLists();


  }, []);

  const fetchLists = async () => {
    try {
      const response = await api.get('/lists', getHeaders(authData?.token));
      setLists(response.data);

      setLoading(true);


    } catch (error) {
      console.error('Erro ao buscar listas:', error);
      // Trate o erro conforme necessário
    }
  };

  const enterList = (idList: number) => {
    setAccessList(idList);
    const list = lists.find(list => list.id === idList)
    setStatus(list!.statusList)
  };

  const totalForList = (listId: number) => {
    const listFinded = lists.find(list => list.id === listId);
    const totalList = listFinded?.items.reduce((acc, item) => {
      // Calcular o preço total do item
      const itemTotalPrice = (item.price || 0) * (item.quantity || 0); // Multiplica preço pela quantidade

      // Somar o preço total do item ao acumulador
      return acc + itemTotalPrice;
    }, 0);

    return totalList?.toFixed(2);
  }

  return (
    <ContainerMyLists>
      <Header title='Minhas listas' />
      <ContainerContentMyLists>

        {!loading && <LoadingIn colorLoading={theme.colors.background} />}

        {loading &&
          accessList > 0 ? status === "Finalizada" ? 

          <ListFinished
            itemsList={lists.find(list => list.id === accessList) || { id: 0, name: "", createdAt: "", statusList: "", items: [] }}
          />
          :
          <ListOppened
            itemsList={lists.find(list => list.id === accessList) || { id: 0, name: "", createdAt: "", statusList: "", items: [] }}
          />
         : (
          lists.map(list => (
        <TouchableOpacity onPress={() => enterList(list.id)} activeOpacity={0.7} key={list.id} style={styles.card_list}>
          <ContainerList>
            <ContainerListLeft>
              <NameList>{list.name}</NameList>
              <CreatedAndStatusList>Criado em</CreatedAndStatusList>
              <CreatedAndStatusList>Status</CreatedAndStatusList>
            </ContainerListLeft>

            <ContainerListRight>
              <TotalPriceList>R$ {totalForList(list.id)}</TotalPriceList>
              <DateAndStatus>{formatDate(list.createdAt)}</DateAndStatus>
              <DateAndStatus>{list.statusList}</DateAndStatus>
            </ContainerListRight>
          </ContainerList>
        </TouchableOpacity>
        ))
        )}

        {!lists.length &&
          <TextContentTop>
            Sem listas salvas no momento. Deseja{' '}
            <Text onPress={() => nav.navigate('newlist')} style={styles.text_entry_content_top}>
              criar
            </Text>{' '}
            uma?
          </TextContentTop>
        }

      </ContainerContentMyLists>

      {
        accessList > 0  &&
        <TotalPrice>
          <TotalPriceText>Total</TotalPriceText>
          <TotalPriceTextNumber>R$ {total.toFixed(2)}</TotalPriceTextNumber>
        </TotalPrice>
      }

      <PoweredBy />
    </ContainerMyLists>
  );
}

export default MyLists;

