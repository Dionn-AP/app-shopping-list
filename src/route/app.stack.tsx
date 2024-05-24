import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../screens/GetStarted/GetStarted";

import Home from "../screens/Home/Home";
import MyLists from "../screens/MyLists/MyLists";
import NewList from "../screens/NewList/NewList";

import { useAuth } from "../context/AuthContext";

import AsyncStorage from "@react-native-async-storage/async-storage";
import UserInfo from "../screens/UserInfo/UserInfo";
import ListOppened from "../screens/ListOppened/ListOppened";
import ListFinished from "../screens/ListFinished/ListFinished";

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
            <Screen name="listoppened" component={ListOppened} />
            <Screen name="listfinished" component={ListFinished} />
        </Navigator>
    );
};

export default AppStack;