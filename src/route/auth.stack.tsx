import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "../screens/Start/StartScreen";
import LoginScreen from "../screens/Login/Login";
import SignUp from "../screens/Signup/Signup";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import GetStarted from "../screens/GetStarted/GetStarted";
import Home from "../screens/Home/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="start" component={StartScreen} />
            <Screen name="login" component={LoginScreen} />
            <Screen name="getstarted" component={GetStarted} />
            <Screen name="home" component={Home} />
            <Screen name="signup" component={SignUp} />
            <Screen name="forgot" component={ForgotPassword} />
        </Navigator>
    );
}