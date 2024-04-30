import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const ContainerForgotPassword = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.background};
    height: 100%;
    width: 100%;
    padding: 25% 5% 5%;
`

export const ContainerContentTop = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
`

export const ForgotPasswordTextHeader = styled.Text`
    color: ${theme.colors.color_light};
    text-align: center;
    font-size: 16px;
    margin-bottom: 40px;
`

export const ButtonSendEmail = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 100%;
    border-radius: 30px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.secondary};
    text-transform: uppercase;
    position: absolute;
    bottom: 5%;
`

export const ButtonSendEmailText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const ButtonSendCode = styled(ButtonSendEmail)``

export const ButtonSendCodeText = styled(ButtonSendEmailText)``

export const ContainerCode = styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 14px;
`

export const ContainerCodeAndTimer = styled(ContainerCode)`
    flex-direction: column;
` 

export const CodeInput = styled.TextInput`
    height: 55px;
    width: 38px;
    border-radius: 10px;
    text-align: center;
    padding: 2px;
    font-size: 20px;
    background-color: ${theme.colors.color_light};
`

export const ContainerInputsPassword = styled(ContainerContentTop)`
    gap: 20px;
`

export const InputNewPassword = styled.View`
    position: relative;
    height: auto;
    width: 100%;
`

export const InputConfirmPassword = styled(InputNewPassword)``

export const ButtonConfirmNewPassword = styled(ButtonSendEmail)``

export const ButtonSendNewPassword = styled(ButtonSendEmailText)``

export const styles = StyleSheet.create({
    disabled_button: {
        backgroundColor: 'rgba(179, 233, 199, 0.7)'
    },
    position_absolute: {
        position: "absolute",
        top: 100
    }
});