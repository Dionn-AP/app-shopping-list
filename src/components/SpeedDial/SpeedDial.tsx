import React from 'react';
import { SpeedDial } from '@rneui/themed';
import theme from '../../styles/theme';

import {
    styles
} from '../../screens/ListOppened/styles';
import { StyleSheet } from 'react-native';

interface PropsSpeedDial {
    updateItems: () => Promise<void>;
    setVisibleCheckedItem: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SpeedDialButton = ({ updateItems, setVisibleCheckedItem, open, setOpen }: PropsSpeedDial) => {

    const updateList = () => {
        updateItems();
        setOpen(false);
    }

    const visitblecheckBoxItems = () => {
        setVisibleCheckedItem(true);
        setOpen(false);
    }

    return (
        <SpeedDial
            isOpen={open}
            icon={{ name: 'menu', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            color={theme.colors.background}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            style={styles.box_update_list}
        >
            <SpeedDial.Action
                icon={{ name: 'add', color: '#fff' }}
                title="Adicionar itens"
                titleStyle={stylesSpeedDial.title_style}
                color={theme.colors.tertiary}
            />
            <SpeedDial.Action
                icon={{ name: 'edit', color: '#fff' }}
                title="Atualizar itens"
                titleStyle={stylesSpeedDial.title_style}
                color={theme.colors.background}
                onPress={updateList}
            />
            <SpeedDial.Action
                icon={{ name: 'check', color: '#344966' }}
                title="Finalizar lista"
                titleStyle={stylesSpeedDial.title_style}
                color={theme.colors.color_light}
            />
            <SpeedDial.Action
                icon={{ name: 'delete', color: '#fff' }}
                title="Excluir itens"
                titleStyle={stylesSpeedDial.title_style}
                color={theme.colors.accent}
                onPress={visitblecheckBoxItems}
                

            />
        </SpeedDial>
    );
};

export default SpeedDialButton;

const stylesSpeedDial = StyleSheet.create({
    title_style: {
        color: theme.colors.background,
        backgroundColor: theme.colors.color_light
    },
    icons: {
        height: 30,
        width: 30
    }
})