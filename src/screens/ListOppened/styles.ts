import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';
import { ButtonDelete, ContainerUnitAndSelect } from '../NewList/styles';

export const ContainerListOppened = styled.View`
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

export const ContainerListInto = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 20px 4% 110px;
    width: 100%;
`

export const ContainerContentItems = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
`

export const ContainerItemsList = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    width: 100%;
`

export const ContainerList = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 0 110px;
    width: 100%;
    gap: 10px;
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
    border: 1px solid ${theme.colors.background};
    flex-grow: 1;
    flex-shrink: 1;
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
    background-color: ${theme.colors.accent};
    z-index: 5;
`

export const TotalPriceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: ${theme.colors.background};
`

export const TotalPriceTextNumber = styled(TotalPriceText)`
    text-align: right;
    font-size: 18px;
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

export const ButtonDeleteItems = styled(ButtonDelete)`
    right: 4.3%;
    bottom: 7.7%;
    height: 55px;
    width: 55px;
`

export const ContainerSelect = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    width: fit-content;
    margin: 0;
    padding: 0;
`

export const ContainerSelectItems = styled(ContainerUnitAndSelect)`
    margin-bottom: 0;
    padding-left: 0;
    justify-content: flex-end;
    align-items: flex-end;
`

export const styles = StyleSheet.create({
    scrollview_container: {
        paddingBottom: 120,
        gap: 10,
        width: "100%"
    },
    fontsize_total_price: {
        fontWeight: 'bold'
    },
    save_list_text: {
        fontSize: 10,
        color: theme.colors.background
    },
    box_update_list: {
        bottom: "4%",
        right: 0,
        marginBottom: 15
    },
    background_opacity: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    success_create: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: theme.colors.background
    },
    checkbox_wrapper: {
        height: "auto",
        padding: 0,
        margin: 0,
        backgroundColor: theme.colors.color_light
    },
    container_content_list: {
        flexShrink: 1
    },
    checkbox_title: {
        fontSize: 12,
        color: theme.colors.gray_medium
    },
    checkbox_title_checked: {
        fontSize: 16,
        color: theme.colors.background
    }
})