import styled from 'styled-components/native';
import theme from '../../styles/theme';

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
    width: 100%;
    gap: 20px;
`

export const OptionScreen = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    padding: 0 4%;
    gap: 10px;
`

export const OptionItem = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: ${theme.colors.background};
    margin-bottom: 4px;
`
