import Link from 'next/link'
import { Tile, OperatorImg, OperatorName} from "./OperatorTileStyled";
import React from "react";

export interface operatorTileProps {
    id: string,
    name: string,
    link: string,
    imgUrl: string | undefined,
}


const OperatorTile = ({ ...props } : operatorTileProps) => {

    if(props.imgUrl !== undefined) {
        return(
            <Link as={`/pay/${props.link}`} href={`/pay/[payOperatorID]`}>
                <Tile>
                    <OperatorImg src={`${props.imgUrl}`} alt="Лого оператора"/>
                </Tile>
            </Link>
        )
    } else {
        return (
            <Link as={`/pay/${props.link}`} href={`/pay/[payOperatorID]`}>
                <Tile>
                    <OperatorName>{props.name}</OperatorName>
                </Tile>
            </Link>
        )
    }
}

export default OperatorTile