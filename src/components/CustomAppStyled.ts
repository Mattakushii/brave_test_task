import styled from 'styled-components'

interface Props {
    readonly visible  : boolean;
};

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

export const BackgroundPopup = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.5);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    display: ${props => props.visible ? "block" : "none"};
`;


