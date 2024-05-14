import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
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
import theme from '../../styles/theme';

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
    items: Item[]; // items é um array de Item
}

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
    const { setTotal } = useAuth();
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
            const itemTotalPrice = (itemPrices[item.id] || 0) * (itemQuantities[item.id] || 0);
            totalPrice += itemTotalPrice;
        });

        totalPrice = totalPrice*10;

        setTotal(totalPrice);
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollview_container}
        >
            <ContainerList>
                <NameList>{itemsList.name}</NameList>
                {itemsList.items.map(item => (
                    <ContainerContentList key={item.id}>
                        <ContainerListLeft>
                            <NameItem>{item.name}</NameItem>
                            <Items>Total: <Text style={styles.fontsize_total_price}>R$ {formatPrice(itemPrices[item.id], itemQuantities[item.id])?.toFixed(2) || 0}</Text></Items>
                        </ContainerListLeft>
                        <ContainerListRight>
                            <ContainerInputPrice>
                                <Items>Preço: R$</Items>
                                <InputPriceComponet
                                    value={itemPrices[item.id] ? itemPrices[item.id].toString() : ''}
                                    onChangeText={(text: string) => updatePrice(item.id, text)}
                                />
                            </ContainerInputPrice>

                            <ContainerIcons>

                                <TouchableOpacity
                                    onPress={() => decreaseTotal(item.id)}
                                    activeOpacity={0.7}>
                                    <Entypo
                                        name="circle-with-minus"
                                        size={26}
                                        color={theme.colors.color_error}
                                    />
                                </TouchableOpacity>

                                <TotalItems>{itemQuantities[item.id] || 0}</TotalItems>

                                <TouchableOpacity
                                    onPress={() => increaseTotal(item.id)}
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
                ))}
            </ContainerList>

        </ScrollView>
    );
}

export default ListOppened;
