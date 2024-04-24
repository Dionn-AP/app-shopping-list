import {
    ContainerStart,
    ContainerButtonsStart,
    ButtonLogin,
    ButtonLoginText,
    ButtonSignup,
    ButtonSignupText,
    styles
} from './styles';

import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo-start.svg';

const StartScreen = () => {
    const nav = useNavigation();

    return (
        <ContainerStart>

            <Logo style={styles.logo} />

            <ContainerButtonsStart>
                <ButtonLogin
                    onPress={() => nav.navigate("login")}
                    activeOpacity={0.8}>
                    <ButtonLoginText style={{ fontFamily: "Montserrat_600SemiBold" }}>Entrar</ButtonLoginText>
                </ButtonLogin>

                <Text style={ [styles.text_midle, { fontFamily: "Montserrat_600SemiBold" }]}>ou</Text>

                <ButtonSignup
                    onPress={() => nav.navigate("signup")}
                    activeOpacity={0.8}>
                    <ButtonSignupText style={{ fontFamily: "Montserrat_600SemiBold" }}>Cadastre-se</ButtonSignupText>
                </ButtonSignup>
            </ContainerButtonsStart>

        </ContainerStart>
    );
}

export default StartScreen;