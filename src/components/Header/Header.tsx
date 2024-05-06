import {
    ContainerHeader,
    NameUser,
    ButtonLogout,
    styles
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useAuth } from '../../context/AuthContext';
import theme from '../../styles/theme';

const Header = () => {
    const { authData, logout } = useAuth();

    return (
        <ContainerHeader style={styles.shadow_header}>
            <NameUser>{`Olá, ${authData?.user.username?.split(" ")[0]}`}</NameUser>
            <ButtonLogout
                onPress={() => logout()}
                activeOpacity={0.8}
            >
                <MaterialCommunityIcons name="logout" size={30} color={theme.colors.color_light} />
            </ButtonLogout>
        </ContainerHeader>
    );
}

export default Header;