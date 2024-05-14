import { Text, SafeAreaView } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useEffect, useState } from 'react';

import Loading from '../../components/Loading/Loading';

import InputDefault from '../../components/InputDefault/InputDefault';
import GoBackButton from '../../components/GoBack/GoBack';
import theme from '../../styles/theme';

import {
    ContainerSignup,
    ContainerInputsSignUp,
    ButtonRegister,
    ButtonRegisterText,
    ContainerFooter,
    ContainerSignupData,
    styles
} from './styles';

import { useAuth } from '../../context/AuthContext';
import { MessageError } from '../Login/styles';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const nav = useNavigation();
    const { signup, success, setSuccess, error, setError, loading } = useAuth();
    const [checked, setChecked] = useState(false);
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputConfirmPassword, setInputConfirmPassword] = useState("");

    setSuccess(false);
    setError("");

    const verifyInputEmpty = () => {
        if (!inputFirstName || !inputEmail || !inputPassword || !inputConfirmPassword) {
            return true;
        }
    };

    useEffect(() => {
        if (success) {
            nav.navigate("successfull");
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ContainerSignup>

                {
                    !loading ?

                        <ContainerSignupData>

                            <GoBackButton screen="start" />
                            <Text style={[styles.text_header, { fontFamily: "Montserrat_600SemiBold" }]} >Por favor, informe os seus dados.</Text>

                            <ContainerInputsSignUp>
                                <InputDefault
                                    setValue={setInputFirstName}
                                    stateValue={inputFirstName}
                                    placeholderType="Nome"></InputDefault>
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

                                {
                                    error &&
                                    <MessageError>{error}</MessageError>
                                }

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
                                onPress={() => signup(inputFirstName, inputEmail, inputPassword, inputConfirmPassword)}
                            >
                                <ButtonRegisterText>Cadastrar</ButtonRegisterText>
                            </ButtonRegister>
                        </ContainerSignupData>

                        :

                        <Loading />

                }

            </ContainerSignup>
        </SafeAreaView>
    );
}

export default SignUp;