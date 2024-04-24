import { Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import InputDefault from '../../components/InputDefault/InputDefault';
import GoBackButton from '../../components/GoBack/GoBack';
import theme from '../../styles/theme';

import ImageSuccessfully from '../../assets/image-register-successfully.svg'

import {
    ContainerSignup,
    ContainerInputsSignUp,
    ButtonRegister,
    ButtonRegisterText,
    ContainerFooter,
    ContainerSignupData,
    ContainerSignupSuccessFully,
    styles,
    ButtonDirectionLogin,
    ButtonDirectionLoginText,
} from './styles';

const SignUp = () => {
    const nav = useNavigation();

    const [checked, setChecked] = useState(false);
    const [success, setSuccess] = useState(false);
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    const verifyInputEmpty = () => {
        if(!inputFirstName || !inputLastName || !inputEmail || !inputPassword || !inputConfirmPassword) {
            return true;
        }
    }

    return (
        <ContainerSignup>

            {
                !success ?

                    <ContainerSignupData>

                        <GoBackButton screen="start" />
                        <Text style={[styles.text_header, { fontFamily: "Montserrat_600SemiBold" }]} >Por favor, informe os seus dados.</Text>

                        <ContainerInputsSignUp>
                            <InputDefault
                                setValue={setInputFirstName}
                                stateValue={inputFirstName}
                                placeholderType="Nome"></InputDefault>
                            <InputDefault
                                setValue={setInputLastName}
                                stateValue={inputLastName}
                                placeholderType='Sobrenome'></InputDefault>
                            <InputDefault
                                setValue={setInputEmail}
                                stateValue={inputEmail}
                                placeholderType='E-mail'></InputDefault>
                            <InputDefault
                                setValue={setInputPassword}
                                stateValue={inputPassword}
                                security={true}
                                placeholderType='Senha'></InputDefault>
                            <InputDefault
                                setValue={setInputConfirmPassword}
                                stateValue={inputConfirmPassword}
                                security={true}
                                placeholderType='Confirme a senha'></InputDefault>
                        </ContainerInputsSignUp>

                        <ContainerFooter>
                            <CheckBox
                                containerStyle={styles.checkbox_background}
                                checked={checked}
                                checkedColor={theme.colors.tertiary}
                                onPress={() => setChecked(!checked)}
                            />
                            <Text style={[styles.text_footer, { fontFamily: "Montserrat_400Regular" }]} >Eu aceito os termos de politica e privacidade.</Text>
                        </ContainerFooter>

                        <ButtonRegister
                            style={(!checked || verifyInputEmpty()) && styles.disabled_button}
                            disabled={!checked}
                            activeOpacity={0.8}
                            onPress={() => setSuccess(true)}
                        >
                            <ButtonRegisterText>Cadastrar</ButtonRegisterText>
                        </ButtonRegister>
                    </ContainerSignupData>

                    :

                    <ContainerSignupSuccessFully>
                        <Text style={[styles.text_header_successfully, { fontFamily: "Montserrat_600SemiBold" }]} >Parabéns. Usuário cadastrado com sucesso!</Text>
                        <ImageSuccessfully />

                        <ButtonDirectionLogin onPress={() => nav.navigate("login")}>
                            <ButtonDirectionLoginText style={{ fontFamily: "Montserrat_600SemiBold" }}>Login</ButtonDirectionLoginText>
                        </ButtonDirectionLogin>

                    </ContainerSignupSuccessFully>

            }

        </ContainerSignup>
    );
}

export default SignUp;