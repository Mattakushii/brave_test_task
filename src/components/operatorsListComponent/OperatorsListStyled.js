import styled from 'styled-components'


export const TileContainer = styled.div`
    width: 960px;
    min-height: 100%;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    display: block;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 80%;
    left: 90%;
`;

export const Test = styled.div`
    width: 500px;
    height: 600px;
    position: absolute;
    background-color: green;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: ${props => props.visible ? "block" : "none"};
`;