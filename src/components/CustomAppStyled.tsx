import styled from 'styled-components'

   export const AppContainer = styled.div`
        height: 100vh;
        width: 100%;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    export const MainContainer = styled.main`
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    export const Background = styled.div`
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.15);
        display: ${props => props.visible ? "block" : "none"};
    `;

