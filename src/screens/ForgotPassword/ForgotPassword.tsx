import {
    ContainerContentTop,
    ContainerForgotPassword,
    ForgotPasswordTextHeader,
    ButtonSend,
    ButtonSendText,
    styles
} from './styles';

import InputDefault from '../../components/InputDefault/InputDefault';
import GoBackButton from '../../components/GoBack/GoBack';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';

const ForgotPassword = () => {
    const [inputEmail, setInputEmail] = useState("");

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ContainerForgotPassword>
                <GoBackButton screen="login" />
                <ContainerContentTop>
                    <ForgotPasswordTextHeader style={{ fontFamily: "Montserrat_600SemiBold" }}>Informe o e-mail cadastrado na conta e iremos lhe enviar um código para redefinir a sua senha.</ForgotPasswordTextHeader>
                    <InputDefault
                        setValue={setInputEmail}
                        stateValue={inputEmail}
                        placeholderType="E-mail"
                    ></InputDefault>
                </ContainerContentTop>

                <ButtonSend
                    style={!inputEmail && styles.disabled_button}
                    disabled={!inputEmail}
                    activeOpacity={0.8}
                >
                    <ButtonSendText>Cadastrar</ButtonSendText>
                </ButtonSend>

            </ContainerForgotPassword>

        </SafeAreaView>
    );
}

export default ForgotPassword;