import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerListFinished = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding: 0 0 30px;
    background-color: ${theme.colors.color_light};
`

export const ContainerList = styled.View`
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 0 4% 110px;
`

export const ContainerContentList = styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.accent};
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
    margin-bottom: 10px;
`

export const NameItem = styled(NameList)`
    font-size: 16px;
    color: ${theme.colors.color_text_default};
`

export const Items = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.background};
`

export const TotalPrice = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    padding: 14px 18px;
    position: absolute;
    bottom: 0;
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
    scrollview_container: {
        paddingBottom: 120,
        gap: 10
    },
    fontsize_total_price: {
        fontWeight: 'bold',
        color: theme.colors.tertiary
    },
    box_shadow: {
        backgroundColor: theme.colors.color_light,
        shadowColor: theme.colors.color_text_default,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Sombras para Android
        elevation: 3,
    }
})