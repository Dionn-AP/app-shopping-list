import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted/GetStarted";
import Home from "../screens/Home/Home";

import { useAuth } from "../context/AuthContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    const { notTutorial } = useAuth();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                notTutorial &&
                <Screen name="getstarted" component={GetStarted} />
            }
            <Screen name="home" component={Home} />
        </Navigator>
    );
};

export default AppStack;