import styled from 'styled-components'

export const InputBlock = styled.div`
        display: flex;
        flex-direction: column;
`;

export const Input = styled.input<TitleProps>`
    width: 200px;
    padding: 10px 25px;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: 0.5s;
    color: ${props => props.valid ? "#000000" : "#D30000"};
    box-shadow: ${props => props.valid ? "none": "inset 0 0 5px rgba(211,0,0,0.5)"}
`;

export const ErrorMessage = styled.div` 
    width: 500px;
    height: 25px;
    color: #D30000;
`;
