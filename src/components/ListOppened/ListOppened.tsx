import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TouchableOpacity, Alert, Modal, View } from 'react-native';
import { formatNumber, formatPrice } from '../../utils/formats';
import { useAuth } from '../../context/AuthContext';
import {
    ContainerContentList,
    ContainerList,
    Items,
    NameList,
    ContainerListLeft,
    ContainerListRight,
    styles,
    NameItem,
    ContainerIcons,
    TotalItems,
    InputPrice,
    ContainerInputPrice
} from './styles';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../styles/theme';

import { ListItem } from '../../@types';
import api from '../../services/axios';
import { getHeaders } from '../../utils/token';
import { SaveList } from '../../screens/NewList/styles';
import LoadingIn from '../LoadingIn/LoadingIn';

interface IPropsList {
    itemsList: ListItem; // itemsList agora é do tipo ListItem ou null
}

const InputPriceComponet: React.FC<{ value: string, onChangeText: (value: string) => void }> = ({ value, onChangeText }) => {
    const [formattedValue, setFormattedValue] = useState(formatNumber(value));

    const handleChangeText = (text: string) => {
        setFormattedValue(formatNumber(text));
        onChangeText(text);
    };

    return (
        <InputPrice
            value={formattedValue}
            placeholder="0.00"
            onChangeText={handleChangeText}
            keyboardType="numeric"
        />
    );
};

const ListOppened = ({ itemsList }: IPropsList) => {
    const { setTotal, authData } = useAuth();
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);
    const [itemPrices, setItemPrices] = useState<{ [id: number]: number }>({});
    const [itemQuantities, setItemQuantities] = useState<{ [id: number]: number }>({});

    useEffect(() => {
        calculateTotalPriceOfItems();
    }, [itemPrices, itemQuantities]);

    const increaseTotal = (itemId: number) => {
        setItemQuantities(prevState => ({
            ...prevState,
            [itemId]: (prevState[itemId] || 0) + 1
        }));
    };

    const decreaseTotal = (itemId: number) => {
        setItemQuantities(prevState => {
            const updatedQuantity = Math.max((prevState[itemId] || 0) - 1, 0);
            return {
                ...prevState,
                [itemId]: updatedQuantity
            };
        });
    };

    const updatePrice = (itemId: number, price: string) => {
        setItemPrices(prevState => ({
            ...prevState,
            [itemId]: parseFloat(price.replace(',', '.')) // Converte a vírgula para ponto e faz o parse para float
        }));
    };

    const calculateTotalPriceOfItems = () => {
        let totalPrice = 0;

        itemsList.items.forEach(item => {
            const itemTotalPrice = (itemPrices[item.id!] || 0) * (itemQuantities[item.id!] || 0);
            totalPrice += itemTotalPrice;
        });

        totalPrice = totalPrice * 10;

        setTotal(totalPrice);
    };

    const updateItems = async () => {
        // Verifica se houve alguma alteração nos itens
        const itemsModified = itemsList.items.some(item => {
            const updatedQuantity = itemQuantities[item.id!] || item.quantity;
            const updatedPrice = itemPrices[item.id!] || item.price;

            return (
                updatedQuantity !== item.quantity ||
                updatedPrice !== item.price
            );
        });

        // Se nenhum item foi modificado, não faz a requisição
        if (!itemsModified) {
            Alert.alert('Aviso', 'Nenhuma alteração foi feita nos itens.');
            return;
        }

        try {
            setLoad(true);

            const updatedItems = itemsList.items.map(item => ({
                itemId: item.id!,
                name: item.name,
                quantity: itemQuantities[item.id!] || item.quantity,
                unit: item.unit,
                price: (itemPrices[item.id!] * 10) || item.price,
                status: item.status
            }));

            const response = await api.patch(`/lists/${itemsList.id}/items`, updatedItems, getHeaders(authData?.token));

            if (response.data) {
                setSuccess(true);

                setTimeout(() => {
                    setSuccess(false);
                    setLoad(false);
                }, 2000)
                //Alert.alert('Sucesso', 'A lista foi atualizada com sucesso!');
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao atualizar a lista.');
                setSuccess(false);
                setLoad(false);
            }
        } catch (error) {
            setSuccess(false);
            setLoad(false);
            console.error('Erro ao atualizar a lista:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar a lista.');
        }
    };

    return (
        <ContainerList>
            <NameList>{itemsList.name}</NameList>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollview_container}
            >
                {itemsList.items.map(item => (
                    <ContainerContentList key={item.id}>
                        <ContainerListLeft>
                            <NameItem>{item.name}</NameItem>
                            <Items>Total: <Text style={styles.fontsize_total_price}>R$ {formatPrice(itemPrices[item.id!], itemQuantities[item.id!])?.toFixed(2) || 0}</Text></Items>
                        </ContainerListLeft>
                        <ContainerListRight>
                            <ContainerInputPrice>
                                <Items>Preço: R$</Items>
                                <InputPriceComponet
                                    value={itemPrices[item.id!] ? itemPrices[item.id!].toString() : ''}
                                    onChangeText={(text: string) => updatePrice(item.id!, text)}
                                />
                            </ContainerInputPrice>

                            <ContainerIcons>

                                <TouchableOpacity
                                    onPress={() => decreaseTotal(item.id!)}
                                    activeOpacity={0.7}>
                                    <Entypo
                                        name="circle-with-minus"
                                        size={26}
                                        color={theme.colors.color_error}
                                    />
                                </TouchableOpacity>

                                <TotalItems>{itemQuantities[item.id!] || 0}</TotalItems>

                                <TouchableOpacity
                                    onPress={() => increaseTotal(item.id!)}
                                    activeOpacity={0.7}>
                                    <Entypo
                                        name="circle-with-plus"
                                        size={26}
                                        color={theme.colors.tertiary}
                                    />
                                </TouchableOpacity>

                            </ContainerIcons>

                        </ContainerListRight>
                    </ContainerContentList>

                ))
                }
            </ScrollView>

            <SaveList
                activeOpacity={0.8}
                style={styles.box_update_list}
                onPress={updateItems}
            >
                <Entypo name="shopping-cart" size={26} color={theme.colors.background} />
                <Text style={styles.save_list_text}>Salvar</Text>
            </SaveList>

            <Modal
                animationType="fade"
                transparent={true}
                visible={load}
                onRequestClose={() => {
                    setLoad(!load);
                }}
            >
                <View style={styles.background_opacity}>

                    {
                        success ?
                            <View style={styles.success_create}>
                                <AntDesign name="checkcircle" size={80} color={theme.colors.tertiary} />
                            </View>
                            :
                            <LoadingIn colorLoading={theme.colors.background} />
                    }

                </View>
            </Modal>

        </ContainerList >
    );
}

export default ListOppened;
