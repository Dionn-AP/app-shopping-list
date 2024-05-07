import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerMyLists = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding: 0;
    background-color: ${theme.colors.color_light};
`

export const ContainerContentMyLists = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 4%;
    width: 100%;
`

export const TextContentTop = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.background};
    text-align: center;
`


export const styles = StyleSheet.create({
    wave: {
        position: "absolute",
        left: -70,
        bottom: 0
    },
    text_entry_content_top: {
        fontWeight: "700",
        textDecorationLine: "underline"
    }
});