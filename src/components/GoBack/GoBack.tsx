import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';
import React from 'react';

type GoBackButtonProps = {
    screen: keyof ReactNavigation.RootParamList;
  };

const GoBackButton: React.FC<GoBackButtonProps> = ({screen}) => {
    const nav = useNavigation();

    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => nav.navigate(screen)}
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