import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const ButtonEntry = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 3%;
`

export const ButtonEntryText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.button_login.color};
`