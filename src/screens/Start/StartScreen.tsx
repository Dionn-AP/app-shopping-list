import {
    ContainerStart,
    ContainerButtonsStart,
    styles
} from './styles';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo-start.svg';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';
import theme from '../../styles/theme';

const StartScreen = () => {
    const nav = useNavigation();

    return (
        <ContainerStart>

            <Logo style={styles.logo} />

            <ContainerButtonsStart>
                <ButtonDefault
                    text="Login"
                    colorButton={theme.button_login.color}
                    bgColor={theme.button_login.background}
                    screen="login"
                    positionButton="initial"
                />

                <Text style={[styles.text_midle, { fontFamily: "Montserrat_600SemiBold" }]}>ou</Text>

                <ButtonDefault
                    text="Cadastre-se"
                    colorButton={theme.button_signup.color}
                    bgColor={theme.button_signup.background}
                    screen="signup"
                    positionButton="initial"
                />
            </ContainerButtonsStart>

        </ContainerStart>
    );
}

export default StartScreen;