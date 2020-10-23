import Link from 'next/link'
import { Tile, OperatorImg, OperatorName} from "./OperatorTileStyled";


const OperatorTile = ({ ...props }) => {

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