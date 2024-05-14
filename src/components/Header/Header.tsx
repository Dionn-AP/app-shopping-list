import {
    ContainerHeader,
    TitleScreen,
    ButtonLogout,
    styles
} from './styles';

import GoBackButton from '../GoBack/GoBack';

import { useRoute } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../../context/AuthContext';
import theme from '../../styles/theme';

interface IPropsTextHeader {
    title?: string;
}

const Header = ({ title }: IPropsTextHeader) => {
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
                route.name === "home" &&
                <ButtonLogout
                    onPress={() => logout()}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons name="logout" size={30} color={theme.colors.color_light} />
                </ButtonLogout>
            }
        </ContainerHeader>
    );
}

export default Header;