import styled from "styled-components/native";

interface ButtonContainerProps{
    margin?:string;
    
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    width: 184px;
    height: 51px;
    background-color:blue;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`