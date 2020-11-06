import styled, {keyframes} from 'styled-components'

interface Props {
    readonly visible: boolean,
}

const animation = keyframes`
    0% {
        transform: scale(1, 1);
        opacity: 1;
    }
    
    50%{
        transform: scale(0,0);
        opacity: 0
    }
    
    100%{
        transform: scale(1, 1);
        opacity: 1;
    }
`

export const OperationResult = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 1s cubic-bezier(.48,0,0,1.01));
    
`

export const PopupContainer = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props=> props.visible ? "1" : "0"};
    visibility: ${props=> props.visible ? "visible" : "hidden"};
    transition: all .8s cubic-bezier(.25,.8,.25,1);
`;

export const Preloader = styled.span`
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #000000;
    animation: ${animation} 1s linear infinite;
`;

export const PreloaderText = styled.div`
    font-size: 18px;
    font-weight: 500;
`;
