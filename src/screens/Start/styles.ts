import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerStart = styled.View`
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

export const ContainerButtonsStart = styled.View`
    display: flex;
    align-items: center;
    position: absolute;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    bottom: 5%;
`

export const ButtonLogin = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 100%;
    border-radius: 30px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.secondary};
    text-transform: uppercase;
`

export const ButtonLoginText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const ButtonSignup = styled(ButtonLogin)`
    background-color: ${theme.button_signup.background};
`

export const ButtonSignupText = styled(ButtonLoginText)`
`

export const styles = StyleSheet.create({
    logo: {
        marginRight: 10
    },
    text_midle: {
        fontSize: 16,
        fontWeight: "500",
        color: theme.colors.color_light
    }
})