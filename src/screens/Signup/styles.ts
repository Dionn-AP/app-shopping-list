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
    gap: 30px;
`

export const ContainerInputsSignUp = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`

export const InputFirstName = styled.TextInput`
    height: 55px;
    width: 100%;
    border-radius: 30px;
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

export const InputLastName = styled(InputFirstName)``

export const InputEmail = styled(InputFirstName)``

export const InputPassword = styled(InputFirstName)``

export const InputConfirmPassword = styled(InputFirstName)``

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
`

export const ButtonRegisterText = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const styles = StyleSheet.create({
    text_header: {
        fontSize: 16,
        color: theme.colors.color_light,
        fontWeight: "500"
    },
    text_footer: {
        fontSize: 14,
        color: theme.colors.color_light,
        fontWeight: "400"
    }
})