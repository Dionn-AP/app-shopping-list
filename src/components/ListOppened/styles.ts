import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerList = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 0 110px;
    width: 100%;
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
    justify-content: space-between;
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
    color: ${theme.colors.accent};
`

export const Items = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.accent};
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

export const ContainerIcons = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    height: auto;
    width: 105px;
`

export const TotalItems = styled.Text`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: ${theme.colors.background};
`
export const ContainerInputPrice = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 120px;
`

export const InputPrice = styled.TextInput`
    font-size: 16px;
    color: ${theme.colors.background};
    border: none;
    padding: 0;
`

export const styles = StyleSheet.create({
    scrollview_container: {
        paddingBottom: 120,
        gap: 12
    },
    fontsize_total_price: {
        fontWeight: 'bold'
    },
    save_list_text: {
        fontSize: 10,
        color: theme.colors.background
    },
    box_update_list: {
        bottom: "15%",
        right: "1%"
    },
    background_opacity: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    success_create: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: theme.colors.background
    }
})