import { HeaderContent, HeaderLogo } from './HeaderStyled';
import React from "react";

const Header: React.FunctionComponent = () => {

    return (
        <HeaderContent>
            <HeaderLogo>
                <div>Brave developers terminal</div>
            </HeaderLogo>
        </HeaderContent>
    )
}

export default Header