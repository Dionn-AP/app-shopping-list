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
import { SafeAreaView } from 'react-native';

import GoBackButton from '../../components/GoBack/GoBack';
import Logo from '../../assets/logo.svg';
import InputDefault from '../../components/InputDefault/InputDefault';

import { useAuth } from '../../context/AuthContext';

const LoginScreen = () => {
    const nav = useNavigation();
    const { login } = useAuth();

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");


    const handleLogin = (email: string, pass: string) => {
        if (!inputEmail.length || !inputPassword.length) {
            return;
        }

        login(email, pass);

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
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

                <ButtonEntry
                    onPress={() => handleLogin(inputEmail, inputPassword)}
                    activeOpacity={0.8}
                >
                    <ButtonEntryText>Entrar</ButtonEntryText>
                </ButtonEntry>

                <ForgotPassword onPress={() => nav.navigate("forgot")} activeOpacity={1}>
                    <ForgotPasswordText style={{ fontFamily: "Montserrat_500Medium" }}>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
            </ContainerHome>
        </SafeAreaView>
    )
};

export default LoginScreen;