import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../components/Header/Header";
import { LinearGradient } from 'expo-linear-gradient';
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
  const [selectedLists, setSelectedLists] = useState<number[]>([]);
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

  const handleLongPress = (id: number) => {
    setSelectedLists((prevSelectedLists) => {
      if (prevSelectedLists.includes(id)) {
        return prevSelectedLists.filter(listId => listId !== id);
      } else {
        return [...prevSelectedLists, id];
      }
    });
  };

  const deleteSelectedLists = () => {
    Alert.alert(
      'Excluir Listas',
      'Tem certeza de que deseja excluir as listas selecionadas?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              const promises = selectedLists.map(id => api.delete(`/lists/${id}`, getHeaders(authData?.token)));
              await Promise.all(promises);
              fetchLists(); // Atualiza a lista de compras após a exclusão
              setSelectedLists([]); // Limpa as listas selecionadas
            } catch (error) {
              console.error('Erro ao excluir listas:', error);
            }
          },
          style: 'destructive',
        },
      ],
    );
  };

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
                <TouchableOpacity
                  onPress={() => enterList(list.id, list.statusList)}
                  onLongPress={() => handleLongPress(list.id)}
                  activeOpacity={0.7} key={list.id}
                  style={styles.card_list}
                >
                  <LinearGradient
                    colors={[theme.colors.white, theme.colors.background]} // Gradiente diferente quando selecionado
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.1, 1]}
                    style={[styles.card_list_gradient, selectedLists.includes(list.id) && styles.card_list_selected]} // Estilo para indicar seleção
                  >
                    <ContainerList
                      style={selectedLists.includes(list.id) && styles.card_list_selected}
                    >
                      <ContainerListLeft>
                        <NameList>{list.name}</NameList>
                        <CreatedAndStatusList>Criado em</CreatedAndStatusList>
                        <CreatedAndStatusList>Status</CreatedAndStatusList>
                      </ContainerListLeft>

                      <ContainerListRight>
                        <TotalPriceList>R$ {totalForList(list.id)}</TotalPriceList>
                        <DateAndStatus 
                        style={selectedLists.includes(list.id) && styles.card_list_selected_text_date}>
                          {formatDate(list.createdAt)}
                          </DateAndStatus>
                        <DateAndStatus style={list.statusList === "Finalizada" ? styles.status_list_finished : styles.status_list_oppened}>{list.statusList}</DateAndStatus>
                      </ContainerListRight>
                    </ContainerList>
                  </LinearGradient>
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

      {selectedLists.length > 0 && (
        <View style={styles.deleteButtonContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={deleteSelectedLists} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Excluir Selecionados</Text>
          </TouchableOpacity>
        </View>
      )}

    </ContainerMyLists>
  );
}

export default MyLists;

