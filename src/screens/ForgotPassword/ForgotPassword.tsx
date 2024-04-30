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
    CodeInput,
    ContainerCodeAndTimer,
    ContainerInputsPassword,
    InputNewPassword,
    InputConfirmPassword,
    ButtonConfirmNewPassword,
    ButtonSendNewPassword
} from './styles';

import InputDefault from '../../components/InputDefault/InputDefault';
import GoBackButton from '../../components/GoBack/GoBack';
import { SafeAreaView, TextInput } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Timer from '../../components/Timer/Timer';
import EyeIcon from '../../components/EyeIcon/EyeIcon';

import IconSuccess from '../../assets/success-icon.svg';
import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';
import theme from '../../styles/theme';

const ForgotPassword = () => {
    const nav = useNavigation();

    const [inputEmail, setInputEmail] = useState("");
    const [password, setPasssword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabledCode, setDisabledCode] = useState(false);
    const [passwordScreen, setPasswordScreen] = useState(false);
    const [successNewPassword, setSuccessNewPassword] = useState(false);
    const [codeScreen, setCodeScreen] = useState(false);
    const [code, setCode] = useState(['', '', '', '']);
    const [open, setOpen] = useState(false);
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

    const handlePasswordScreen = () => {
        setPasswordScreen(true);
    }

    const handleSucessNewPassword = () => {
        setSuccessNewPassword(true);
        setCodeScreen(false);
        setPasswordScreen(false);
    }

    useEffect(() => {
        const empty = code.some((str) => str === '');
        !empty ? setDisabledCode(true) : setDisabledCode(false);
    }, [code])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ContainerForgotPassword style={{ justifyContent: successNewPassword ? "center" : "space-between" }}>
                {
                    !successNewPassword && <GoBackButton screen="login" />
                }

                <ContainerContentTop style={successNewPassword && styles.position_absolute}>

                    <ForgotPasswordTextHeader style={{ fontFamily: "Montserrat_600SemiBold" }}>
                        {
                            successNewPassword ? "Nova senha cadastrada com sucesso!" :
                                passwordScreen ? "Cadastre abaixo a sua nova senha."
                                    :
                                    codeScreen ?
                                        "Confirme abaixo o código recebdo no seu e-mail."
                                        :
                                        "Informe o e-mail cadastrado na conta e iremos lhe enviar um código para redefinir a sua senha."
                        }
                    </ForgotPasswordTextHeader>

                    {
                        successNewPassword ? null :
                            passwordScreen ?

                                <ContainerInputsPassword>
                                    <InputNewPassword>
                                        <InputDefault
                                            setValue={setPasssword}
                                            stateValue={password}
                                            placeholderType="Nova senha"
                                            security={!open ? true : false}
                                        ></InputDefault>
                                        <EyeIcon
                                            setOpen={setOpen}
                                            open={open}
                                        />
                                    </InputNewPassword>

                                    <InputConfirmPassword>
                                        <InputDefault
                                            setValue={setConfirmPassword}
                                            stateValue={confirmPassword}
                                            placeholderType="Confirme a nova senha"
                                            security={!open ? true : false}
                                        ></InputDefault>
                                        <EyeIcon
                                            setOpen={setOpen}
                                            open={open}
                                        />
                                    </InputConfirmPassword>

                                </ContainerInputsPassword>
                                :
                                codeScreen ?
                                    <ContainerCodeAndTimer>
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
                                        <Timer />
                                    </ContainerCodeAndTimer>
                                    :
                                    <InputDefault
                                        setValue={setInputEmail}
                                        stateValue={inputEmail}
                                        placeholderType="E-mail"
                                    ></InputDefault>
                    }


                </ContainerContentTop>

                {
                    successNewPassword &&
                    <IconSuccess style={{ marginBottom: 20 }} />
                }

                {
                    successNewPassword ?
                        <ButtonDefault
                            text="Login"
                            colorButton={theme.button_login.color}
                            bgColor={theme.button_login.background}
                            screen="login"
                            positionButton="absolute"
                        />
                        :
                        passwordScreen ?
                            <ButtonConfirmNewPassword
                                style={(!password.length || !confirmPassword.length) && styles.disabled_button}
                                disabled={!disabledCode}
                                activeOpacity={0.8}
                                onPress={handleSucessNewPassword}
                            >
                                <ButtonSendNewPassword>Enviar</ButtonSendNewPassword>
                            </ButtonConfirmNewPassword>
                            :
                            codeScreen ?
                                <ButtonSendCode
                                    style={!disabledCode && styles.disabled_button}
                                    disabled={!disabledCode}
                                    activeOpacity={0.8}
                                    onPress={handlePasswordScreen}
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