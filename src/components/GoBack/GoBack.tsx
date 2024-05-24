import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';
import React from 'react';
import { Item } from '../../@types';

type GoBackButtonProps = {
    screen: keyof ReactNavigation.RootParamList;
    items?: Item[]
};

const GoBackButton: React.FC<GoBackButtonProps> = ({ screen, items }) => {
    const nav = useNavigation();
    const route = useRoute();

    const navigationScreen = () => {
        if (route.name === "newlist" && items!.length > 0) {
            Alert.alert('Atenção', 'Se você retornar à tela anterior sem salvar esta lista, os dados serão perdidos')
            return
        } else {
            if (route.name === "listoppened" || route.name === "listfinished") {
                nav.navigate("mylists")
            }

            if (route.name === "signup" || route.name === "login") {
                nav.navigate("start");
            }

            if(route.name === "userinfo" || route.name === "mylists" || route.name === "newlist") {
                nav.navigate("home");
            }
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={navigationScreen}
            style={styles.button}
        >
            <AntDesign
                name='arrowleft'
                size={32}
                color={theme.colors.color_light}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 40,
        left: 18
    }
});

export default GoBackButton;