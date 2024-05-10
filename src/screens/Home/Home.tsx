import {
    ContainerHome,
    ContainerContentHome,
    OptionScreen,
    OptionItem,
    CircleIcon,
    styles
} from './styles';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header/Header';
import PoweredBy from '../../components/PoweredBy/PoweredBy';

import Wave from '../../assets/wave.svg';

import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
    const nav = useNavigation();
    const { authData } = useAuth();

    return (
        <ContainerHome>
            <Header
                title={`Olá, ${authData?.user.username?.split(" ")[0]}`}
            />
            <ContainerContentHome>
                <OptionScreen
                    onPress={() => nav.navigate("newlist")}
                    activeOpacity={0.8}>
                    <CircleIcon>
                        <FontAwesome6
                            name="plus"
                            size={30}
                            color={theme.colors.color_light} />
                    </CircleIcon>
                    <OptionItem>Criar nova lista</OptionItem>
                </OptionScreen>
                <OptionScreen
                    onPress={() => nav.navigate("mylists")}
                    activeOpacity={0.8}>
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
            <Wave style={styles.wave} />
            <PoweredBy />
        </ContainerHome>
    );
}

export default Home;