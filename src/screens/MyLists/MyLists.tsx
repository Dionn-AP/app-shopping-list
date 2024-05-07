import {
    ContainerMyLists,
    ContainerContentMyLists,
    TextContentTop,
    styles
} from './styles';

import { Text } from 'react-native';

import Header from "../../components/Header/Header";
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import { useNavigation } from '@react-navigation/native';

const MyLists = () => {
    const nav = useNavigation();
    return (
        <ContainerMyLists>
            <Header title='Minhas listas'/>
            <ContainerContentMyLists>
                <TextContentTop>
                    Sem listas salvas no momento. Deseja <Text onPress={() => nav.navigate("newlist")} style={styles.text_entry_content_top}>criar</Text> uma?
                </TextContentTop>
            </ContainerContentMyLists>

            
            <PoweredBy />
        </ContainerMyLists>
    );
}

export default MyLists;