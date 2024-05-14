import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screens/Start/StartScreen";
import LoginScreen from "../screens/Login/Login";
import SignUp from "../screens/Signup/Signup";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import SuccessfullCreatedUser from "../screens/SuccessfullCreatedUser/SuccessfullCreatedUser";
import { useAuth } from "../context/AuthContext";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
    const { success } = useAuth();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                success &&
                <Screen name="successfull" component={SuccessfullCreatedUser} />
            }
            <Screen name="start" component={StartScreen} />
            <Screen name="login" component={LoginScreen} />
            <Screen name="signup" component={SignUp} />
            <Screen name="forgot" component={ForgotPassword} />
        </Navigator>
    );
}