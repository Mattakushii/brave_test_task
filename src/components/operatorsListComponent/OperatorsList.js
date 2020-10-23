import React, { useState } from 'react'
import { TileContainer, Button } from "./OperatorsListStyled";
import OperatorTile from "../operatorTileComponent/OperatorTile";

const OperatorsList = ({...props}) => {
    const newOperator = {
        "id": "4",
        "operatorName": "Yota",
        "operatorLink": "yota",
        "slogan": "ya yo ta"
    }
    const [operatorsList, setOperatorsList] = useState(props.dataList);

    function handleChange() {
        setOperatorsList(
        operatorsList => {
            return [...operatorsList, newOperator]
        });
    }

       return(
        <TileContainer>
            {
            operatorsList.map((operator)=> {
                return (
                    <OperatorTile
                        key={operator.id}
                        id={operator.id}
                        name={operator.operatorName}
                        link={operator.operatorLink}
                        imgUrl={operator.imgUrl}
                        slogan={operator.slogan}
                    />
                )
            })
            }
            <Button onClick={()=> handleChange()}>+++</Button>
        </TileContainer>
    )
}


export default OperatorsList