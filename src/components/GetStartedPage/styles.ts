import styled from "styled-components/native";
import theme from "../../styles/theme";


export const TextGetStarted = styled.Text`
    color: ${theme.colors.color_light};
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    text-align: center;
`

export const ContainerFooter = styled.View`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    min-height: 60px;
    width: 92%;
`
