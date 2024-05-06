import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerHome = styled.View`
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

export const ContainerContentHome = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    padding: 0 4%;
    width: 100%;
    gap: 26px;
`

export const OptionScreen = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    gap: 14px;
`

export const OptionItem = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: ${theme.colors.background};
    margin-bottom: 4px;
`

export const CircleIcon = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 47px;
    width: 47px;
    border-radius: 50px;
    background-color: ${theme.colors.background};
`

export const styles = StyleSheet.create({
    container_icon: {
        display: "flex",
        position: 'relative',
        alignItems: "center",
        justifyContent: "center",
        elevation: 25,
        borderRadius: 50,
        height: 44,
        width: 44,
        backgroundColor: 'white',
        shadowColor: '#171717',
    }
});