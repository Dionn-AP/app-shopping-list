import { Text } from 'react-native';

import GoBackButton from '../../components/GoBack/GoBack';
import {
    ContainerStart,
    ContainerInputsSignUp,
    ButtonRegister,
    ButtonRegisterText,
    styles
} from './styles';

import InputDefault from '../../components/InputDefault/InputDefault';


const SignUp = () => {
    return (
        <ContainerStart>
            <GoBackButton screen="start" />
            <Text style={styles.text_header} >Por favor, informe os seus dados.</Text>

            <ContainerInputsSignUp>
                <InputDefault placeholderValue="Nome"></InputDefault>
                <InputDefault placeholderValue='Sobrenome'></InputDefault>
                <InputDefault placeholderValue='E-mail'></InputDefault>
                <InputDefault placeholderValue='Senha'></InputDefault>
                <InputDefault placeholderValue='Confirme a senha'></InputDefault>
            </ContainerInputsSignUp>

            <Text style={styles.text_footer} >Eu aceito os termos de politica e privacidade.</Text>

            <ButtonRegister activeOpacity={0.8}>
                <ButtonRegisterText>Cadastrar</ButtonRegisterText>
            </ButtonRegister>
        </ContainerStart>
    );
}

export default SignUp;