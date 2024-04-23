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

    return (
        <ContainerSignup>

            {
                !success ?

                    <ContainerSignupData>

                        <GoBackButton screen="start" />
                        <Text style={styles.text_header} >Por favor, informe os seus dados.</Text>

                        <ContainerInputsSignUp>
                            <InputDefault placeholderType="Nome"></InputDefault>
                            <InputDefault placeholderType='Sobrenome'></InputDefault>
                            <InputDefault placeholderType='E-mail'></InputDefault>
                            <InputDefault placeholderType='Senha'></InputDefault>
                            <InputDefault placeholderType='Confirme a senha'></InputDefault>
                        </ContainerInputsSignUp>

                        <ContainerFooter>
                            <CheckBox
                                containerStyle={styles.checkbox_background}
                                checked={checked}
                                checkedColor={theme.colors.tertiary}
                                onPress={() => setChecked(!checked)}
                            />
                            <Text style={styles.text_footer} >Eu aceito os termos de politica e privacidade.</Text>
                        </ContainerFooter>

                        <ButtonRegister
                            style={!checked && styles.disabled_button}
                            disabled={!checked}
                            activeOpacity={0.8}
                            onPress={() => setSuccess(true)}
                        >
                            <ButtonRegisterText>Cadastrar</ButtonRegisterText>
                        </ButtonRegister>
                    </ContainerSignupData>

                    :

                    <ContainerSignupSuccessFully>
                        <Text style={styles.text_header_successfully} >Parabéns. Usuário cadastrado com sucesso!</Text>
                        <ImageSuccessfully />

                        <ButtonDirectionLogin onPress={() => nav.navigate("login")}>
                            <ButtonDirectionLoginText>Login</ButtonDirectionLoginText>
                        </ButtonDirectionLogin>

                    </ContainerSignupSuccessFully>

            }

        </ContainerSignup>
    );
}

export default SignUp;