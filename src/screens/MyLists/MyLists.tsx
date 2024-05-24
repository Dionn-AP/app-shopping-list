import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Header from "../../components/Header/Header";
import PoweredBy from '../../components/PoweredBy/PoweredBy';
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

import { ListItem } from '../../@types';


const MyLists = () => {
  const nav = useNavigation();
  const [lists, setLists] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [accessList, setAccessList] = useState(0);
  const { authData } = useAuth();

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      setLoading(true);
      const response = await api.get('/lists', getHeaders(authData?.token));

      const sortedList = response.data.sort((a: ListItem, b: ListItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      setLists(sortedList);

      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.error('Erro ao buscar listas:', error);
      // Trate o erro conforme necessário
    }
  };

  const enterList = (idList: number, status: string) => {
    setAccessList(idList);
    const list = lists.find(list => list.id === idList)

    if (status === "Aberta") {
      nav.navigate('listoppened', { itemsList: lists.find(list => list.id === idList) || { id: 0, name: "", createdAt: "", statusList: "", items: [] } })
    } else {
      nav.navigate('listfinished', { itemsList: lists.find(list => list.id === idList) || { id: 0, name: "", createdAt: "", statusList: "", items: [] } })
    }
  }

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

        {
          loading ?
            <LoadingIn colorLoading={theme.colors.background} />
            :
            (
              lists.map(list => (
                <TouchableOpacity onPress={() => enterList(list.id, list.statusList)} activeOpacity={0.7} key={list.id} style={styles.card_list}>
                  <ContainerList>
                    <ContainerListLeft>
                      <NameList>{list.name}</NameList>
                      <CreatedAndStatusList>Criado em</CreatedAndStatusList>
                      <CreatedAndStatusList>Status</CreatedAndStatusList>
                    </ContainerListLeft>

                    <ContainerListRight>
                      <TotalPriceList>R$ {totalForList(list.id)}</TotalPriceList>
                      <DateAndStatus>{formatDate(list.createdAt)}</DateAndStatus>
                      <DateAndStatus style={list.statusList === "Finalizada" ? styles.status_list_finished : styles.status_list_oppened}>{list.statusList}</DateAndStatus>
                    </ContainerListRight>
                  </ContainerList>
                </TouchableOpacity>
              ))
            )}

        {(!lists.length && loading) &&
          <TextContentTop>
            Sem listas salvas no momento. Deseja{' '}
            <Text onPress={() => nav.navigate('newlist')} style={styles.text_entry_content_top}>
              criar
            </Text>{' '}
            uma?
          </TextContentTop>
        }

      </ContainerContentMyLists>

      <PoweredBy />
    </ContainerMyLists>
  );
}

export default MyLists;

