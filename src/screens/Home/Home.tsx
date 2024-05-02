import {
    ContainerHome,
    ContainerContentHome,
    OptionScreen,
    OptionItem
} from './styles';

import IconPlus from '../../assets/icon-plus.svg';
import IconList from '../../assets/icon-list.svg';
import IconReport from '../../assets/icon-report.svg';

import Header from '../../components/Header/Header';
import PoweredBy from '../../components/PoweredBy/PoweredBy';

const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <ContainerContentHome>
                <OptionScreen activeOpacity={0.8}>
                    <IconPlus />
                    <OptionItem>Criar nova lista</OptionItem>
                </OptionScreen>
                <OptionScreen activeOpacity={0.8}>
                    <IconList />
                    <OptionItem>Minhas listas</OptionItem>
                </OptionScreen>
                <OptionScreen activeOpacity={0.8}>
                    <IconReport />
                    <OptionItem>Relatórios</OptionItem>
                </OptionScreen>
            </ContainerContentHome>
            <PoweredBy />
        </ContainerHome>
    );
}

export default Home;