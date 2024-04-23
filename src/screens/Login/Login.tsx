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

const LoginScreen = () => {
    return (
        <ContainerHome>
            <GoBackButton screen="start" />

            <Logo style={styles.logo} />
            <ContainerInputsLogin>
                <InputDefault placeholderValue="E-mail"></InputDefault>
                <InputDefault
                    placeholderValue="Senha"
                    security={true}>
                </InputDefault>
            </ContainerInputsLogin>

            <ButtonEntry activeOpacity={0.8}>
                <ButtonEntryText>Entrar</ButtonEntryText>
            </ButtonEntry>
            <ForgotPassword activeOpacity={1}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
        </ContainerHome>
    )
};

export default LoginScreen;