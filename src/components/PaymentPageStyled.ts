import styled from 'styled-components'

export const PaymentContainer = styled.div`
    width: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 991px) {
        width: 760px;
    }
    
    @media screen and (max-width: 767px){
        width: 470px;
    }
    
    @media screen and (max-width: 479px){
        width: 320px;
    }
    
`;

export const PaymentForm = styled.form`
    width: 760px;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 767px){
        width: 470px;
    }
    
    @media screen and (max-width: 479px){
        width: 310px;
    }
`;

export const FormHeader = styled.div`
    width: 100%;
    height: 35px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const SubmitButton = styled.button`
    width: 160px;
    height: 40px;
    align-self: center;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    background-color: #000000;
    color: #FFFFFF;
    border-radius: 5px;
    transition: all 1s cubic-bezier(.25,.8,.25,1);
    
    &:disabled {
        background-color: #404040;
        color: #9e9e9e;
    }
`;

export const ErrorMessage = styled.div` 
    height: 25px;
    color: #D30000;
`;
