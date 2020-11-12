import styled from 'styled-components';

interface TitleProps {
    readonly valid  : boolean;
};

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
    width: 250px;
    height: 19px;
    overflow: hidden;
`;

export const Input = styled.input<TitleProps>`
    width: 200px;
    padding: 10px 25px;
    margin-top: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: 0.5s;
    color: ${props => props.valid ? "#000000" : "#D30000"};
    box-shadow: ${props => props.valid ? "inset 0 0 5px rgba(0,211,0,0.5)": "inset 0 0 5px rgba(211,0,0,0.5)"}
`;

export const ErrorMessage = styled.div`
    height: 40px;
    color: #D30000;
    margin-top: 10px;
    
    @media screen and (max-width: 991px) {
        width: 760px;
    }
    
     @media screen and (max-width: 767px){
        width: 470px;
    }
    
    @media screen and (max-width: 479px){
        width: 310px;
    }
`;
