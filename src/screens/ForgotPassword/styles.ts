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

export const ButtonSend = styled.TouchableOpacity`
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

export const ButtonSendText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const styles = StyleSheet.create({
    disabled_button: {
        backgroundColor: 'rgba(179, 233, 199, 0.7)'
    }
});