import { View, Text, StyleSheet } from "react-native";
import theme from "../../styles/theme";


const PoweredBy = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text_first, { fontFamily: "Montserrat_300Light" }]}>Powered by </Text>
            <Text style={[styles.text_second, { fontFamily: "Montserrat_300Light" }]}>Dionnatan</Text>
        </View>
    );
}

export default PoweredBy;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 15
    },
    text_first: {
        fontSize: 10,
        fontWeight: "300",
        color: theme.colors.color_light,
        opacity: 0.7
    },
    text_second: {
        fontSize: 10,
        fontWeight: "bold",
        color: theme.colors.color_light,
        opacity: 0.7
    }
});