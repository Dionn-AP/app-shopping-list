import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth.stack";
import { useAuth } from "../context/AuthContext";
import { View, Text } from "react-native";
import AppStack from "./app.stack";
import theme from "../styles/theme";
import LoadingIn from "../components/LoadingIn/LoadingIn";
import Loading from "../components/Loading/Loading";

export function RootRoutes() {
  const { authData, loading } = useAuth();
  if (loading) {
    return (
      <Loading />
    )
  } else
    return (
      <NavigationContainer>
        {authData ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    );
}