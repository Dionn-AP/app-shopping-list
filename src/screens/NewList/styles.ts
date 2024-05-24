import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const ContainerNewList = styled.View`
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

export const ContainerContentNewList = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 4% 80px;
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

export const ContainerInputsSearchItems = styled.View`
    position: relative;
    height: auto;
    width: 100%;
    margin-bottom: 18px;
`

export const InputSearchItems = styled.TextInput`
    height: 55px;
    width: 100%;
    border-radius: 30px;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.color_text_default};
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

export const ButtonSearchAdd = styled.TouchableOpacity`
    position: absolute;
    top: 8px;
    right: 8px;
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

export const ContainerUnitAndSelect = styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
    padding-left: 12px;
`

export const ContainerUnit = styled.View`
    display: flex;
    flex-direction: row;
    height: auto;
    width: 45%;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`

export const ContentUnit = styled.TouchableOpacity`
    display: flex;
    height: auto;
    width: fit-content;
    padding: 3px 12px;
    border-radius: 12px;
`

export const TextUnit = styled.Text`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`

export const ContainerSelect = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: auto;
    width: 55%;
    margin: 0;
    padding: 0;
`

export const ButtonDelete = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    position: absolute;
    bottom: 5%;
    right: 6%;
    background-color: ${theme.colors.color_error};
    border-radius: 50px;
`

export const SaveList = styled(ButtonDelete)`
    height: 58px;
    width: 58px;
    background-color: ${theme.colors.tertiary};
`

export const MessageBoxItemsDeleted = styled.View`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 55px;
    width: 100%;
    background-color: ${theme.colors.tertiary};
    position: absolute;
    padding: 10px 0 0;
    bottom: 0;
`

export const MessageBoxItemsDeletedText = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.background};
    text-align: left;
    margin-left: 16px;
`


export const styles = StyleSheet.create({
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
    },
    text_new_list: {
        fontSize: 16,
        fontWeight: "700",
        textDecorationLine: "underline"
    },
    container_items_left: {
        gap: 4
    },
    container_content_list: {
        flexShrink: 1
    },
    checkbox_title: {
        fontSize: 12,
        color: theme.colors.gray_medium
    },
    checkbox_title_checked: {
        fontSize: 12,
        color: theme.colors.background
    },
    checkbox_wrapper: {
        height: "auto",
        padding: 0,
        margin: 0,
        backgroundColor: theme.colors.color_light
    },
    text_entry_content_top: {
        fontWeight: "700",
        textDecorationLine: "underline"
    },
    icon_search: {
        position: "absolute",
        right: 0
    },
    scrollview_container: {
        marginTop: 0,
        paddingBottom: 120,
        paddingTop: 20,
        width: "100%"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingHorizontal: 30
    },
    modalView: {
        margin: 20,
        backgroundColor: theme.colors.background,
        borderRadius: 20,
        padding: 35,
        width: "100%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 20,
        fontSize: 16,
        textAlign: "center",
        color: theme.colors.color_light
    },
    button_modal: {
        height: 50,
        width: 150,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: theme.colors.tertiary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    text_button_modal: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
        color: theme.colors.background
    },
    input: {
        height: 50,
        borderColor: theme.colors.color_light,
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 25,
        width: "100%",
        paddingHorizontal: 15,
        color: theme.colors.color_light
    },
    color_unit_selected: {
        color: theme.colors.color_light
    },
    background_unit_selected: {
        backgroundColor: theme.colors.tertiary
    },
    color_unit_unselected: {
        color: theme.colors.gray_medium
    },
    background_unit_unselected: {
        backgroundColor: theme.colors.gray_light
    },
    name_item_unit: {
        fontSize: 14,
        marginBottom: 0,
        fontWeight: "400"
    },
    name_item: {
        marginBottom: 0,
    },
    container_name_list: {
        display: "flex",
        textAlign: "center",
        paddingBottom: 14,
        height: "auto",
        width: "100%",
        borderBottomColor: theme.colors.gray_light,
        borderBottomWidth: 1,
    },
    itemContainer: {
        backgroundColor: '#EDEDED',
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    box_create_newlist: {
        paddingTop: 13,
        alignItems: "center"
    },
    save_list_text: {
        fontSize: 10,
        color: theme.colors.background
    },
    text_top_new_lists: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "500",
        color: theme.colors.background
    }
});