import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { formatPrice } from '../../utils/formats';
import { useAuth } from '../../context/AuthContext';
import {
    ContainerContentList,
    ContainerList,
    Items,
    NameList,
    ContainerListLeft,
    ContainerListRight,
    styles,
    NameItem
} from './styles';

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

const ListFinished = ({ itemsList }: IPropsList) => {
    const { total, setTotal } = useAuth();

    const totalPricesList = () => {
        const totalPrice = itemsList.items.reduce((acc, item) => {
            // Calcular o preço total do item
            const itemTotalPrice = (item.price || 0) * (item.quantity || 0); // Multiplica preço pela quantidade
    
            // Somar o preço total do item ao acumulador
            return acc + itemTotalPrice;
        }, 0);
        return totalPrice;
    }

    // Adicionando um efeito para atualizar o total quando o componente for montado
    React.useEffect(() => {
        const totalPrice = totalPricesList();

        setTotal(totalPrice!); // Atualizando o total no contexto de autenticação
    }, []);

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
                            <Items>Preço: R$ {item.price?.toFixed(2)}</Items>
                        </ContainerListLeft>
                        <ContainerListRight>
                            <Items>Quant. {item.quantity} {item.unit}</Items>
                            <Items>Total: <Text style={styles.fontsize_total_price}>R$ {formatPrice(item.price!, item.quantity)?.toFixed(2)}</Text></Items>
                        </ContainerListRight>
                    </ContainerContentList>
                ))}
            </ContainerList>

        </ScrollView>
    );
}

export default ListFinished;
