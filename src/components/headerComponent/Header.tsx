import { HeaderContent, HeaderLogo } from './HeaderStyled';
import React from "react";
import Link from "next/link";

const Header: React.FunctionComponent = () => {

    return (
        <HeaderContent>
            <Link href="/">
                <HeaderLogo>
                    <div>Brave developers terminal</div>
                </HeaderLogo>
            </Link>

        </HeaderContent>
    )
}

export default Header