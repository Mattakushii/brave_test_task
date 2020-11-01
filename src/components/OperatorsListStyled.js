import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const TileContainer = styled.div`
    width: 980px;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

export const Input = styled(InputMask)`
    width: 200px;
    padding: 10px 25px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    text-align:center;
`;

export const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

