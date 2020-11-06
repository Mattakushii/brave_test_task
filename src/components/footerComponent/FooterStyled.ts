import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #d6d6d6;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media screen and (max-width: 991px) {
        display: none
    }
`;

export const CenterBlock = styled.div`
    text-align: center;
`;
