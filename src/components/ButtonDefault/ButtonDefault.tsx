import { useNavigation } from "@react-navigation/native";
import {
    ButtonEntry,
    ButtonEntryText
} from './styles';

interface IPropsButton {
    text: string;
    colorButton: string;
    bgColor: string;
    positionButton?: 'absolute' | 'initial';
    screen: keyof ReactNavigation.RootParamList;
}

const ButtonDefault = ({ text, colorButton, bgColor, screen, positionButton }: IPropsButton) => {
    const nav = useNavigation();

    return (
        <ButtonEntry
            onPress={() => nav.navigate(screen)}
            activeOpacity={0.8}
            style={{ position: positionButton, backgroundColor: bgColor }}>
            <ButtonEntryText style={{ color: colorButton, fontFamily: "Montserrat_600SemiBold" }}>{text}</ButtonEntryText>
        </ButtonEntry>
    );
}

export default ButtonDefault;