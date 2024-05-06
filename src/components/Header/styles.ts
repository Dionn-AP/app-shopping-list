import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 14px 5%;
    background-color: ${theme.colors.background};
    height: 124px;
    width: 100%;
    margin-bottom: 40px;
`

export const ButtonLogout = styled.TouchableOpacity`


`

export const NameUser = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.color_light};
`

export const styles = StyleSheet.create({
    shadow_header: {
        elevation: 25,
        shadowColor: theme.colors.color_text_default,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});