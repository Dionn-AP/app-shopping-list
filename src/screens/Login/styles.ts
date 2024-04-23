import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const ContainerHome = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
    height: 100%;
    width: 100%;
    padding: 0 5%;
`

export const ContainerInputsLogin = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
`

export const GoBackButton = styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 18px;
`

export const InputEmail = styled.TextInput`
    height: 55px;
    width: 100%;
    border-radius: 30px;
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

export const ButtonEntry = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 100%;
    border-radius: 30px;
    background-color: ${theme.button_login.background};
    text-transform: uppercase;
    position: absolute;
    bottom: 3%;
`

export const ButtonEntryText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: ${theme.button_login.color};
`

export const InputPassword = styled(InputEmail)``

export const ForgotPassword = styled.TouchableOpacity``

export const ForgotPasswordText = styled.Text`
    color: ${theme.colors.color_light};
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
`

export const styles = StyleSheet.create({
    logo: {
        marginBottom: 40,
        marginRight: 20
    }
})