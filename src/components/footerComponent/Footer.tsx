import {CenterBlock, FooterContainer} from './FooterStyled'
import React from "react";

const Footer : React.FunctionComponent = () => {
    return (
        <FooterContainer>
            <div>#TypeScript #Next.js #React</div>
            <CenterBlock>
                <div>Test task by Vakhtel Maksim 2020</div>
                <div>Brave Terminal</div>
            </CenterBlock>
            <div>#TypeScript #Next.js #React</div>
        </FooterContainer>
    )
}
export default Footer