import {
    ContainerHeader,
    TitleScreen,
    ButtonLogout,
    styles
} from './styles';

import GoBackButton from '../GoBack/GoBack';

import { useNavigation, useRoute } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

import { useAuth } from '../../context/AuthContext';
import api from '../../services/axios';
import theme from '../../styles/theme';

interface IPropsTextHeader {
    title?: string;
}

const Header = ({ title }: IPropsTextHeader) => {
    const nav = useNavigation();
    const { logout } = useAuth();
    const route = useRoute();


    return (
        <ContainerHeader style={styles.shadow_header}>
            {
                route.name !== "home" &&
                <GoBackButton screen='home' />
            }

            <TitleScreen>{title}</TitleScreen>

            {
                (route.name === "home" || route.name === "userinfo") &&

                <ButtonLogout
                    onPress={() => (route.name === "home") && nav.navigate("userinfo")}
                    activeOpacity={0.8}
                >
                    <FontAwesome
                        name="user-circle-o"
                        size={38}
                        color={theme.colors.color_light} />
                    {/* <MaterialCommunityIcons name="logout" size={30} color={theme.colors.color_light} /> */}
                </ButtonLogout>
            }
        </ContainerHeader>
    );
}

export default Header;