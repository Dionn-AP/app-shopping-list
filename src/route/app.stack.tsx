import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted/GetStarted";

import Home from "../screens/Home/Home";
import MyLists from "../screens/MyLists/MyLists";
import NewList from "../screens/NewList/NewList";

import { useAuth } from "../context/AuthContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import UserInfo from "../screens/UserInfo/UserInfo";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    const { authData } = useAuth();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                authData?.user.tutorial &&
                <Screen name="getstarted" component={GetStarted} />
            }
            <Screen name="home" component={Home} />
            <Screen name="mylists" component={MyLists} />
            <Screen name="newlist" component={NewList} />
            <Screen name="userinfo" component={UserInfo} />
        </Navigator>
    );
};

export default AppStack;