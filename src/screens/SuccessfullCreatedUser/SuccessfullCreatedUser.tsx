import {
    ContainerSignupSuccessFully,
    styles
} from './styles';

import theme from '../../styles/theme';

import { Text } from 'react-native';

import ButtonDefault from '../../components/ButtonDefault/ButtonDefault';

import ImageSuccessfully from '../../assets/image-register-successfully.svg';

const SuccessfullCreatedUser = () => {
    return(

        <ContainerSignupSuccessFully>
        <Text style={[styles.text_header_successfully, { fontFamily: "Montserrat_600SemiBold" }]} >Parabéns. Usuário cadastrado com sucesso!</Text>
        <ImageSuccessfully />

        <ButtonDefault
            text="Login"
            colorButton={theme.button_login.color}
            bgColor={theme.button_login.background}
            screen="login"
            positionButton="absolute"
        />

    </ContainerSignupSuccessFully>
    );
}

export default SuccessfullCreatedUser;