import styled from "styled-components/native";
import theme from "../../styles/theme";
import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');


export const ContainerGetStarted = styled.View`
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

export const FooterTabView = styled.View`
    width: ${width}px; 
    flex-direction: row; 
    justify-content: center; 
    position: absolute; 
    bottom: 3%;
`

export const TextGetStarted = styled.Text`
    color: ${theme.colors.color_light};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export const ContainerFooter = styled.View`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    min-height: 60px;
    width: 92%;
`

export const ButtonTabView = styled.TouchableOpacity`
    width: 12px; 
    height: 12px; 
    border-radius: 6px; 
    margin: 6px;
    background-color: #7B5BF2;
`

export const ButtonDirectionLogin = styled.TouchableOpacity`
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

export const ButtonDirectionLoginText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.background};
    text-transform: uppercase;
`

export const styles = StyleSheet.create({
    text_header: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: theme.colors.color_light
    }
})