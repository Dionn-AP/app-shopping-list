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

export const ContainerList = styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    padding: 12px 14px;
    border-radius: 12px;
    border: 1.5px solid ${theme.colors.accent};
    background-color: ${theme.colors.primary};
`

export const ContainerListLeft = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    gap: 20px;
`

export const ContainerListRight = styled(ContainerListLeft)`
    align-items: flex-end;
    justify-content: flex-end;
`

export const NameList = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: ${theme.colors.background};
`

export const CreatedAndStatusList = styled(NameList)`
    font-size: 14px;
    font-weight: normal;
    color: ${theme.colors.accent};
`
export const DateAndStatus = styled(CreatedAndStatusList)`
    color: ${theme.colors.color_text_default};
`


export const TotalPriceList = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    color: ${theme.colors.color_text_default};
`


export const TotalPrice = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    position: fixed;
    bottom: 20%;
    background-color: ${theme.colors.tertiary};
    z-index: 5;
`

export const TotalPriceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: ${theme.colors.color_text_default};
`

export const TotalPriceTextNumber = styled(TotalPriceText)`
    text-align: right;
    color: ${theme.colors.background};
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