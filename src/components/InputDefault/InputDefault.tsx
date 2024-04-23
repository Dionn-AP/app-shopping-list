import styled from "styled-components/native";
import theme from "../../styles/theme";
import React from 'react';

interface PropsPlaceholder {
    placeholderValue: string;
    security?: boolean;
}

export const InputModel = styled.TextInput`
    height: 55px;
    width: 100%;
    border-radius: 30px;
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

const InputDefault = ( {placeholderValue, security}: PropsPlaceholder ) => {
    return(
        <><InputModel 
        placeholder={placeholderValue}
        secureTextEntry={security}
        ></InputModel></>
    )
}

export default InputDefault;