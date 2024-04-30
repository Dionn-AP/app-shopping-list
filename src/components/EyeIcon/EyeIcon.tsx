import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../styles/theme';
const windowWidth = Dimensions.get('window').width;

interface IPropsEyeIcon {
    open: boolean;
    setOpen: (arg0: boolean) => void;
}

const EyeIcon = ({ open, setOpen }: IPropsEyeIcon) => {
    return (
        <>
            <MaterialCommunityIcons
                onPress={() => setOpen(!open)}
                name={open ? "eye" : "eye-off"}
                size={24}
                color={theme.colors.color_text_default}
                style={styles.icon_eye}
            />
        </>
    );
}

export default EyeIcon;

const styles = StyleSheet.create({
    icon_eye: {
        position: "absolute",
        top: 14,
        right: 14,
    }
});