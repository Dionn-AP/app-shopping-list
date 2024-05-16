import styled from "styled-components/native";
import theme from "../../styles/theme";
import { StyleSheet } from "react-native";

export const ContainerUserInfo = styled.View`
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

export const ContainerInfo = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    padding: 0 4%;
    width: 100%;
    gap: 36px;
`

export const ContentInfo = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    gap: 14px;
`

export const NameUserText = styled.Text`
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: ${theme.colors.background};
`

export const EmailUserText = styled(NameUserText)``

export const PhoneUserText = styled(NameUserText)``

export const ExitApp = styled(NameUserText)``

export const InputNameUser = styled.TextInput`
    height: 55px;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    border-radius: 30px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

export const InputPhoneUser = styled(InputNameUser)``

export const InputEmailUser = styled(InputNameUser)``

export const ContainerButtonBottom = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    position: absolute;
    bottom: 3%;
`

export const ButtonEditInfo = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 40%;
    border-radius: 30px;
    background-color: ${theme.colors.background};
`

export const TextButtonEditInfo = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.color_light};
`

export const ButtonSendUpdate = styled(ButtonEditInfo)`
    background-color: ${theme.colors.tertiary};
    width: 92%;
    margin-top: 10px;
`

export const TextButtonUpdate = styled(TextButtonEditInfo)`
    color: ${theme.colors.background};
` 

export const ContainerModal = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 5%;
    background-color: "rgba(37, 38, 39, 0.5)";
`

export const ContainerContentModal = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 370px;
    max-height: 400px;
    width: 100%;
    padding: 45px 15px 26px;
    border-radius: 16px;
    background-color: ${theme.colors.accent};
`

export const ContentInfoModal = styled(ContainerInfo)`
    justify-content: center;
    margin-bottom: 32px;
    flex-direction: column;
    gap: 18px;
`

export const ButtonCloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 12px;
    right: 12px;
`

export const ButtonLogout = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    gap: 14px;
`

export const BoxMessage = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    position: absolute;
    top: 15%;
`

export const MessageUpdatedUserInfo = styled.Text`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: ${theme.colors.color_light};
`


export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.color_text_default
    },
    disabled_button: {
        backgroundColor: 'rgba(179, 233, 199, 0.7)'
    },
    scroll: {
        height: "100%",
    }
});