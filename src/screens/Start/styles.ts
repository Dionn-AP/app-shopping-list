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
    bottom: 5%;
    gap: 8px;
`

export const styles = StyleSheet.create({
    logo: {
        marginBottom: "30%",
        marginRight: 10
    },
    text_midle: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        color: theme.colors.color_light,
        marginBottom: 10
    }
})