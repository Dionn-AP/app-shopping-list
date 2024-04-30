import {
    ContainerContentTop,
    ContainerForgotPassword,
    ForgotPasswordTextHeader,
    ButtonSendEmail,
    ButtonSendCode,
    ButtonSendCodeText,
    ButtonSendEmailText,
    styles,
    ContainerCode,
    CodeInput
} from './styles';

import InputDefault from '../../components/InputDefault/InputDefault';
import GoBackButton from '../../components/GoBack/GoBack';
import { SafeAreaView, TextInput } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const nav = useNavigation();
    
    const [inputEmail, setInputEmail] = useState("");
    const [disabledCode, setDisabledCode] = useState(false);
    const [codeScreen, setCodeScreen] = useState(false);
    const [code, setCode] = useState(['', '', '', '']);
    const inputs = useRef<(TextInput | null)[]>([null, null, null, null]);

    const handleInputChange = (text: string, index: number) => {
        if (text.length <= 1) {
            const newCode = [...code];
            newCode[index] = text;
            setCode(newCode);

            if (text.length === 0 && index > 0) {
                inputs.current[index - 1]?.focus();
            } else if (text.length === 1 && index < 3 && inputs.current[index + 1]) {
                inputs.current[index + 1]?.focus();
            }
        }
    };

    useEffect(() => {
        const empty = code.some((str) => str === '');
        !empty ? setDisabledCode(true) : setDisabledCode(false);
    }, [code])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ContainerForgotPassword>
                <GoBackButton screen="login" />
                <ContainerContentTop>
                    {
                        codeScreen ?
                            <ForgotPasswordTextHeader style={{ fontFamily: "Montserrat_600SemiBold" }}>Confirme abaixo o código recebdo no seu e-mail.</ForgotPasswordTextHeader>
                            :
                            <ForgotPasswordTextHeader style={{ fontFamily: "Montserrat_600SemiBold" }}>Informe o e-mail cadastrado na conta e iremos lhe enviar um código para redefinir a sua senha.</ForgotPasswordTextHeader>
                    }

                    {
                        codeScreen ?
                            <ContainerCode>
                                {code.map((digit, index) => (
                                    <CodeInput
                                        key={index}
                                        style={{ fontFamily: "Montserrat_600SemiBold" }}
                                        onChangeText={(text: string) => handleInputChange(text, index)}
                                        value={digit}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        ref={(ref: TextInput | null) => (inputs.current[index] = ref)}
                                    />
                                ))}
                            </ContainerCode>
                            :
                            <InputDefault
                                setValue={setInputEmail}
                                stateValue={inputEmail}
                                placeholderType="E-mail"
                            ></InputDefault>
                    }


                </ContainerContentTop>

                {
                    codeScreen ?
                        <ButtonSendCode
                            style={!disabledCode && styles.disabled_button}
                            disabled={!disabledCode}
                            activeOpacity={0.8}
                            onPress={() => nav.navigate("login")}
                        >
                            <ButtonSendCodeText>Confirmar</ButtonSendCodeText>
                        </ButtonSendCode>
                        :
                        <ButtonSendEmail
                            style={!inputEmail && styles.disabled_button}
                            disabled={!inputEmail}
                            activeOpacity={0.8}
                            onPress={() => setCodeScreen(true)}
                        >
                            <ButtonSendEmailText>Enviar</ButtonSendEmailText>
                        </ButtonSendEmail>
                }

            </ContainerForgotPassword>

        </SafeAreaView>
    );
}

export default ForgotPassword;