import styled from 'styled-components';

export const HeaderContent = styled.header`
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #000000;
    
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`;

export const HeaderLogo = styled.div`
    color: #FFFFFF;
    font-size: 20px;
    margin-left: 25px;
    cursor: pointer;
    height: 24px;
    text-align: center;
    width: 240px;
    overflow: hidden;
    
    @media screen and (max-width: 767px) {
        margin: 0;
    }
`;