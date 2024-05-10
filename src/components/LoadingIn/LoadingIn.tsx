import { ActivityIndicator, View, StyleSheet } from "react-native";
import theme from "../../styles/theme";

interface IPropsLoading {
    colorLoading: string;
}

export default function LoadingIn({ colorLoading }: IPropsLoading) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={80} color={colorLoading} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: "100%"
    }
});