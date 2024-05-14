import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerSignupSuccessFully = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.background};
    height: 100%;
    width: 100%;
    padding: 5%;
    gap: 0;
    justify-content: center;   
`


export const styles = StyleSheet.create({
    text_header_successfully: {
        textAlign: "center",
        fontSize: 20,
        color: theme.colors.color_light,
        fontWeight: "500",
        position: "absolute",
        top: "15%"
    }
});