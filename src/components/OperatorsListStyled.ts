import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars'

export const TileContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
`;

export const Scrollbar = styled(Scrollbars)`
    display: flex;
    justify-content: center;
`;

export const ScrollBarContainer = styled.div`
    width:980px;

    @media screen and (max-width: 991px) {
        width: 660px;
    }
    @media screen and (max-width: 991px) {
        width: 660px;
    }
    @media screen and (max-width: 660px) {
        width: 100%;
    }
`;


