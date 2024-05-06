import {
    ContainerHome,
    ContainerContentHome,
    OptionScreen,
    OptionItem,
    CircleIcon,
    styles
} from './styles';

import IconPlus from '../../assets/icon-plus.svg';
import IconList from '../../assets/icon-list.svg';
import IconReport from '../../assets/icon-report.svg';

import Header from '../../components/Header/Header';
import PoweredBy from '../../components/PoweredBy/PoweredBy';

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import theme from '../../styles/theme';

const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <ContainerContentHome>
                <OptionScreen activeOpacity={0.8}>
                    <CircleIcon>
                        <FontAwesome6
                            name="plus"
                            size={30}
                            color={theme.colors.color_light} />
                    </CircleIcon>
                    <OptionItem>Criar nova lista</OptionItem>
                </OptionScreen>
                <OptionScreen activeOpacity={0.8}>
                    <CircleIcon>
                        <FontAwesome5
                            name="list-ul"
                            size={24}
                            color={theme.colors.color_light} />
                    </CircleIcon>
                    <OptionItem>Minhas listas</OptionItem>
                </OptionScreen>
                <OptionScreen activeOpacity={0.8}>
                    <CircleIcon>
                        <Octicons name="checklist" size={24} color={theme.colors.color_light} />
                    </CircleIcon>
                    <OptionItem>Relatórios</OptionItem>
                </OptionScreen>
            </ContainerContentHome>
            <PoweredBy />
        </ContainerHome>
    );
}

export default Home;