import { NavigationContainer } from "@react-navigation/native";
//import { View, Text } from "react-native";
//import { useAuth } from "../context/Auth";
import AppStack from "./app.stack";
import AuthStack from "./auth.stack";

export function RootRoutes() {
  //const { authData, loading } = useAuth();
//   if (loading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: "#09184D",
//         }}>
//         <Text 
//         style={{ 
//           color: "#EDF2FA",
//           fontSize: 20
//           }}>Aguarde...</Text>
//       </View>
//     )
//   } else
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
}