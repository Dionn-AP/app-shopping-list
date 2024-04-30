import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const ContainerTimer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TextTimer = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    color: ${theme.colors.tertiary};
`

export const TextMessageErro = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    color: ${theme.colors.color_error};
`

export const ButtonResend = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: auto;
    padding: 4px 12px;
    border-radius: 30px;
    background-color: ${theme.colors.primary};
    margin-top: 16px;
`

export const TextButtonResend = styled.Text`
    font-size: 12px;
    color: ${theme.colors.color_text_default};
    text-align: center;
`