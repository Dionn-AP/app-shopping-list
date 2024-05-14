import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerSignup = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
    height: 100%;
    width: 100%;
`

export const ContainerSignupData = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${theme.colors.background};
    height: 100%;
    width: 100%;
    padding: 25% 5% 0;
    gap: 30px;
`

export const ContainerSignupSuccessFully = styled(ContainerSignupData)`
    padding-top: 0;
    gap: 0;
    justify-content: center;   
`

export const ContainerInputsSignUp = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const ButtonRegister = styled.TouchableOpacity`
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

export const ButtonRegisterText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const ContainerFooter = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: auto;
    width: 100%;
`

export const styles = StyleSheet.create({
    text_header: {
        fontSize: 16,
        color: theme.colors.color_light,
        fontWeight: "500"
    },
    text_footer: {
        fontSize: 12,
        fontWeight: "400",
        color: theme.colors.color_light
    },
    checkbox_background: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.colors.background,
    },
    disabled_button: {
        backgroundColor: 'rgba(179, 233, 199, 0.7)'
    }
});