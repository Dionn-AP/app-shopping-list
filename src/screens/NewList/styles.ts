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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0 4%;
    width: 100%;
`

export const ContainerInputsSearchItems = styled.View`
    position: relative;
    height: auto;
    width: 100%;
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


export const styles = StyleSheet.create({
    text_entry_content_top: {
        fontWeight: "700",
        textDecorationLine: "underline"
    },
    icon_search: {
        position: "absolute",
        right: 0
    }
});