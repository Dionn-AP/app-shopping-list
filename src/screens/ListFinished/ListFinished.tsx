import { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { formatPrice } from '../../utils/formats';
import { useAuth } from '../../context/AuthContext';
import { useRoute, RouteProp } from '@react-navigation/native';
import {
    ContainerContentList,
    ContainerList,
    Items,
    NameList,
    ContainerListLeft,
    ContainerListRight,
    styles,
    NameItem,
    ContainerListFinished,
    TotalPrice,
    TotalPriceText,
    TotalPriceTextNumber
} from './styles';

import { ListItem } from '../../@types';
import Header from '../../components/Header/Header';

type RootStackParamList = {
    listfinished: { itemsList: ListItem };
}

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'listfinished'>;

const ListFinished = () => {
    const { total, setTotal } = useAuth();
    const route = useRoute<DetailsScreenRouteProp>();
    const { itemsList } = route.params;

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
    useEffect(() => {
        const totalPrice = totalPricesList();

        setTotal(totalPrice!); // Atualizando o total no contexto de autenticação
    }, []);

    return (
        <ContainerListFinished>
            <Header title={`Lista - ${itemsList.name}`} />
            <ContainerList>
                {/* <NameList>{itemsList.name}</NameList> */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollview_container}
                >
                    {itemsList.items.map(item => (
                        <ContainerContentList key={item.id} style={styles.box_shadow}>
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
                </ScrollView>
            </ContainerList>
            <TotalPrice>
                <TotalPriceText>Total</TotalPriceText>
                <TotalPriceTextNumber>R$ {total.toFixed(2)}</TotalPriceTextNumber>
            </TotalPrice>
        </ContainerListFinished>
    );
}

export default ListFinished;
