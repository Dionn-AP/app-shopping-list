import { useNavigation } from "@react-navigation/native";
import {
    ButtonEntry,
    ButtonEntryText
} from './styles';

import { IPropsUser } from "../../@types";
import { useAuth } from "../../context/AuthContext";

interface IPropsButton {
    login?: (email: string, password: string) => Promise<void>;
    dataUser?: IPropsUser | undefined;
    text: string;
    colorButton: string;
    bgColor: string;
    positionButton?: 'absolute' | 'initial';
    screen: keyof ReactNavigation.RootParamList;
}

const ButtonDefault = ({ text, colorButton, bgColor, screen, positionButton, dataUser }: IPropsButton) => {
    const nav = useNavigation();
    const { login } = useAuth();

    return (
        <ButtonEntry
            onPress={() => dataUser ? login(dataUser!.user.email, dataUser!.user.password) : nav.navigate(screen)}
            activeOpacity={0.8}
            style={{ position: positionButton, backgroundColor: bgColor }}>
            <ButtonEntryText style={{ color: colorButton, fontFamily: "Montserrat_600SemiBold" }}>{text}</ButtonEntryText>
        </ButtonEntry>
    );
}

export default ButtonDefault;