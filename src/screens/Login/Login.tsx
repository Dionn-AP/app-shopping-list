import {
    ContainerHome,
    ContainerInputsLogin,
    ButtonEntry,
    ButtonEntryText,
    ForgotPassword,
    ForgotPasswordText,
    styles
} from './styles';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import GoBackButton from '../../components/GoBack/GoBack';
import Logo from '../../assets/logo.svg';
import InputDefault from '../../components/InputDefault/InputDefault';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';

import theme from '../../styles/theme';

const LoginScreen = () => {
    const nav = useNavigation();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    return (
        <ContainerHome>
            <GoBackButton screen="start" />

            <Logo style={styles.logo} />
            <ContainerInputsLogin>
                <InputDefault
                    setValue={setInputEmail}
                    stateValue={inputEmail}
                    placeholderType="E-mail"></InputDefault>
                <InputDefault
                    setValue={setInputPassword}
                    stateValue={inputPassword}
                    placeholderType="Senha"
                    security={true}>
                </InputDefault>
            </ContainerInputsLogin>

            <ButtonDefault
                text="Entrar"
                colorButton={theme.button_login.color}
                bgColor={theme.button_login.background}
                screen="getstarted"
                positionButton="absolute"
            />

            <ForgotPassword onPress={() => nav.navigate("forgot")} activeOpacity={1}>
                <ForgotPasswordText style={{ fontFamily: "Montserrat_500Medium" }}>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
        </ContainerHome>
    )
};

export default LoginScreen;