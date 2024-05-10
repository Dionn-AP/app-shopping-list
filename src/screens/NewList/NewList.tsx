import {
    ContainerNewList,
    ContainerContentNewList,
    InputSearchItems,
    ContainerInputsSearchItems,
    ButtonSearchAdd,
    styles
} from './styles';

import { Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from "../../components/Header/Header";
import PoweredBy from '../../components/PoweredBy/PoweredBy';
import theme from '../../styles/theme';

const NewList = () => {
    return (
        <ContainerNewList>
            <Header title='Criar lista' />
            <ContainerContentNewList>

                <ContainerInputsSearchItems>
                    <InputSearchItems
                        placeholder="Adicione um produto à sua lista"
                    />
                    <ButtonSearchAdd activeOpacity={0.8}>
                        <MaterialCommunityIcons
                            name="plus-circle"
                            size={36}
                            color={theme.colors.background} />
                    </ButtonSearchAdd>
                </ContainerInputsSearchItems>

            </ContainerContentNewList>

            <PoweredBy />
        </ContainerNewList>
    );
}

export default NewList;