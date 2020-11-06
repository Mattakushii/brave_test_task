import styled from 'styled-components'

export const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 50px;
    
    @media screen and (max-width: 991px) {
        grid-template-rows: 60px 1fr;
    }
`;

export const MainContainer = styled.main`
   display: flex;
   justify-content: center;
`;

