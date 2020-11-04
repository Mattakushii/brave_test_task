import styled, { css, keyframes } from 'styled-components'

    export const OperatorImg = styled.img`
        width: 150px;
        transition: 1s;
    `;

    export const OperatorName = styled.div`
        width: 80%;
        overflow: hidden;
        font-size: 32px;
        text-align: center;
        font-weight: bold;
        transition: 1s;
    `;

    export const Tile = styled.div`
        width: 300px;
        height: 150px;
        border-radius: 6px;
        margin-right: 12px;
        margin-bottom: 15px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items:center; 
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.15s cubic-bezier(.25,.8,.25,1);
        
        &:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.18), 0 6px 5px rgba(0,0,0,0.15);
        }
        &:hover ${OperatorImg} {
            transform: scale(1.05,1.05);
        }
        &:hover ${OperatorName} {
            transform: scale(1.05,1.05);
        }
    `;