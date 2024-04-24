import {
    ContainerHome,
    ContainerInputsLogin,
    ButtonEntry,
    ButtonEntryText,
    ForgotPassword,
    ForgotPasswordText,
    styles
} from './styles';

import GoBackButton from '../../components/GoBack/GoBack';
import Logo from '../../assets/logo.svg';
import InputDefault from '../../components/InputDefault/InputDefault';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

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

            <ButtonEntry activeOpacity={0.8}>
                <ButtonEntryText style={{ fontFamily: "Montserrat_600SemiBold" }}>Entrar</ButtonEntryText>
            </ButtonEntry>
            <ForgotPassword onPress={() => nav.navigate("forgot")} activeOpacity={1}>
                <ForgotPasswordText style={{ fontFamily: "Montserrat_500Medium" }}>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
        </ContainerHome>
    )
};

export default LoginScreen;