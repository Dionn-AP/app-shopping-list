import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth.stack";
import { useAuth } from "../context/AuthContext";
import { View, Text } from "react-native";
import AppStack from "./app.stack";
import theme from "../styles/theme";

export function RootRoutes() {
  const { authData, loading } = useAuth();
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}>
        <Text
          style={{
            color: theme.colors.color_light,
            fontSize: 20
          }}>Aguarde...</Text>
      </View>
    )
  } else
    return (
      <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
}