import { ActivityIndicator, View, StyleSheet } from "react-native";
import theme from "../../styles/theme";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="#B3E9C7"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    }
});