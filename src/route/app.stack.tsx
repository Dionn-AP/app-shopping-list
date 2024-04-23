import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login/Login";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="login" component={LoginScreen} />
        </Navigator>
    );
};

export default AppStack;