import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TouchableOpacity, Alert, Modal, View } from 'react-native';
import { formatNumber, formatPrice } from '../../utils/formats';
import { useAuth } from '../../context/AuthContext';
import {
    ContainerContentList,
    ContainerListInto,
    Items,
    NameList,
    ContainerListLeft,
    ContainerListRight,
    styles,
    NameItem,
    ContainerIcons,
    TotalItems,
    InputPrice,
    ContainerInputPrice,
    ContainerListOppened,
    TotalPrice,
    TotalPriceText,
    TotalPriceTextNumber,
    ContainerContentItems,
    ContainerItemsList,
    ContainerList,
    ButtonDeleteItems,
    ContainerSelect,
    ContainerSelectItems
} from './styles';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../styles/theme';

import { ListItem } from '../../@types';
import { useRoute, RouteProp } from '@react-navigation/native';
import api from '../../services/axios';
import { getHeaders } from '../../utils/token';
import LoadingIn from '../../components/LoadingIn/LoadingIn';
import Header from '../../components/Header/Header';
import SpeedDialButton from '../../components/SpeedDial/SpeedDial';
import { CheckBox } from '@rneui/base';
import { FontAwesome5 } from '@expo/vector-icons';

type RootStackParamList = {
    listoppened: { itemsList: ListItem };
}

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'listoppened'>;

const InputPriceComponet: React.FC<{ value: string, onChangeText: (value: string) => void }> = ({ value, onChangeText }) => {
    const [formattedValue, setFormattedValue] = useState(formatNumber(value));

    const handleChangeText = (text: string) => {
        setFormattedValue(formatNumber(text));
        onChangeText(text);
    };

    return (
        <InputPrice
            value={formattedValue}
            placeholder={value || "0.00"}
            onChangeText={handleChangeText}
            keyboardType="numeric"
        />
    );
};

const ListOppened = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const { itemsList: initialItemsList } = route.params;
    const { total, setTotal, authData } = useAuth();
    const [load, setLoad] = useState(false);
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [itemPrices, setItemPrices] = useState<{ [id: number]: number }>({});
    const [itemQuantities, setItemQuantities] = useState<{ [id: number]: number }>({});
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [visibleCheckedItem, setVisibleCheckedItem] = useState(false);
    const [itemsList, setItemsList] = useState<ListItem>(initialItemsList);

    useEffect(() => {
        calculateTotalPriceOfItems();
    }, [itemPrices, itemQuantities, itemsList]);

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
                }, 2000);
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

    const handleToggleItemCheckbox = (index: number) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(itemIndex => itemIndex !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    }

    const deleteItems = async () => {
        if (selectedItems.length === 0) {
            Alert.alert("Excluir item", "Você precisa selecionar oelo menos um item");
            return;
        }

        const findedItemsforDelete = {
            itemIds: selectedItems
        }


        try {
            setLoad(true);

            const response = await api.delete(`/lists/${itemsList.id}/items/delete`, { headers: { ...getHeaders(authData?.token).headers }, data: findedItemsforDelete })

            setItemsList(prevItemsList => ({
                ...prevItemsList,
                items: prevItemsList.items.filter(item => !selectedItems.includes(item.id!))
            }));

            setSelectedItems([]);
            setSuccess(true);
            setOpen(false);
            setVisibleCheckedItem(false);

            setTimeout(() => {
                setSuccess(false);
                setLoad(false);
            }, 2000);

        } catch (error) {
            setSuccess(false);
            setLoad(false);
            console.error('Erro ao deletar itens da lista:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao deletar itens da lista');
        }
    }

    const hidenvisibleCheckedItems = () => {
        setVisibleCheckedItem(false);
        setSelectedItems([]);
    }

    return (
        <ContainerListOppened>
            <Header title={`Lista - ${itemsList.name}`} />
            {
                visibleCheckedItem &&
                <ContainerSelectItems>
                    <ContainerSelect onPress={hidenvisibleCheckedItems}>
                        <CheckBox
                            checked={visibleCheckedItem}
                            containerStyle={styles.checkbox_wrapper}
                            center
                            checkedTitle={
                                (selectedItems.length > 0 && selectedItems.length < 2) ?
                                    `${selectedItems.length} Selecionado` :
                                    `${selectedItems.length} Selecionados`
                            }
                            textStyle={styles.checkbox_title_checked}
                            title="Selecionar itens"
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            checkedColor={theme.colors.background}
                        />
                    </ContainerSelect>
                </ContainerSelectItems>
            }

            <ContainerListInto>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollview_container}
                >
                    <ContainerContentItems>
                        <ContainerList>
                            {itemsList.items.map(item => (
                                <ContainerItemsList key={item.id}>
                                    {
                                        visibleCheckedItem &&
                                        <CheckBox
                                            checked={selectedItems.includes(item.id!)}
                                            containerStyle={styles.checkbox_wrapper}
                                            center
                                            size={28}
                                            checkedColor={theme.colors.tertiary}
                                            onPress={() => handleToggleItemCheckbox(item.id!)}
                                            iconType="material-community"
                                            checkedIcon="checkbox-outline"
                                            uncheckedIcon={'checkbox-blank-outline'}
                                            uncheckedColor={theme.colors.background}
                                        />
                                    }
                                    <ContainerContentList style={styles.container_content_list}>

                                        <ContainerListLeft>
                                            <NameItem>{item.name}</NameItem>
                                            <Items>Total: <Text style={styles.fontsize_total_price}>{ item.price ? `R$ ${item.quantity! > 0 ? (item.price * item.quantity!).toFixed(2) : "0.00"}` : formatPrice(itemPrices[item.id!], itemQuantities[item.id!])?.toFixed(2) || 0}</Text></Items>
                                        </ContainerListLeft>
                                        <ContainerListRight>
                                            <ContainerInputPrice>
                                                <Items>Preço: R$ </Items>
                                                <InputPriceComponet
                                                    value={itemPrices[item.id!] ? itemPrices[item.id!].toString() : (item.price?.toString() || '0.00')}
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
                                                        color={theme.colors.accent}
                                                    />
                                                </TouchableOpacity>

                                                <TotalItems>{itemQuantities[item.id!] || item.quantity || 0}</TotalItems>

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
                                </ContainerItemsList>
                            ))
                            }
                        </ContainerList>
                    </ContainerContentItems>
                </ScrollView>

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
                                <LoadingIn colorLoading={theme.colors.tertiary} />
                        }

                    </View>
                </Modal>

            </ContainerListInto >

            {
                selectedItems.length > 0 ?
                    <ButtonDeleteItems
                        activeOpacity={0.8}
                        onPress={deleteItems}
                    >
                        <FontAwesome5 name="trash-alt" size={26} color={theme.colors.color_light} />
                    </ButtonDeleteItems>
                    :
                    <SpeedDialButton
                        open={open}
                        setOpen={setOpen}
                        updateItems={updateItems}
                        setVisibleCheckedItem={setVisibleCheckedItem}
                    />
            }


            <TotalPrice>
                <TotalPriceText>Total</TotalPriceText>
                <TotalPriceTextNumber>R$ {total.toFixed(2)}</TotalPriceTextNumber>
            </TotalPrice>

        </ContainerListOppened>
    );
}

export default ListOppened;
