import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted/GetStarted";

import Home from "../screens/Home/Home";
import MyLists from "../screens/MyLists/MyLists";
import NewList from "../screens/NewList/NewList";

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
            <Screen name="mylists" component={MyLists} />
            <Screen name="newlist" component={NewList} />
        </Navigator>
    );
};

export default AppStack;