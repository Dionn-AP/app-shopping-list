import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import theme from "../../styles/theme";

import {
    TextGetStarted,
    ContainerFooter
} from './styles';
import { CheckBox } from "@rneui/themed";

interface IPropsPages {
    text?: string;
    step: number;
}

const GetStartedPage: React.FC<IPropsPages> = ({ text, step }) => {
    const [checked, setChecked] = useState(false);
    const [notTutorial, setNotTutorial] = useState(true);

    const handleTutorial = () => {
        setChecked(true);

        if(checked) {
            setNotTutorial(false);
        }
    }

    return (
        <>
            {(step === 5 && <Text style={[styles.text_header, { fontFamily: "Montserrat_600SemiBold" }]}>{text}</Text>)}

            {
                (step < 5) &&
                <TextGetStarted style={{ fontFamily: "Montserrat_600SemiBold" }}>{text}</TextGetStarted>
            }

            {
                (step === 5) &&

                <ContainerFooter>
                    <CheckBox
                        checked={checked}
                        containerStyle={styles.checkbox_background}
                        checkedColor={theme.colors.tertiary}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={() => handleTutorial()}
                    />
                    <Text numberOfLines={2} style={[styles.text_footer, { fontFamily: "Montserrat_400Regular" }]}>Marque aqui, se não deseja mais ver esse tutorial.</Text>
                </ContainerFooter>

            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
        height: "70%",
        width: '100%'
    },
    text_header: {
        fontSize: 20,
        fontWeight: "600",
        color: theme.colors.color_light
    },
    text_footer: {
        fontSize: 12,
        width: "90%",
        fontWeight: "400",
        color: theme.colors.color_light,
    },
    checkbox_background: {
        padding: 0,
        margin: 0,
        backgroundColor: theme.colors.background,
    }
});

export default GetStartedPage;