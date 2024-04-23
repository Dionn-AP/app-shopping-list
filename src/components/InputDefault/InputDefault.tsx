import styled from "styled-components/native";
import theme from "../../styles/theme";
import React from 'react';

interface PropsPlaceholder {
    placeholderType: string;
    security?: boolean;
}

export const InputModel = styled.TextInput`
    height: 55px;
    width: 100%;
    border-radius: 30px;
    color: ${theme.colors.color_text_default};
    background-color: ${theme.colors.color_light};
    padding: 0 20px;
`

const InputDefault = ( {placeholderType, security}: PropsPlaceholder ) => {
    return(
        <><InputModel 
        placeholder={placeholderType}
        secureTextEntry={security}
        ></InputModel></>
    )
}

export default InputDefault;