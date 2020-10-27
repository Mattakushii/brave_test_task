import React, { useState } from 'react'
import { TileContainer, Button, Test } from "./OperatorsListStyled";
import OperatorTile from "../operatorTileComponent/OperatorTile";

const OperatorsList = ({...props}) => {
    const newOperator = {
        "id": "4",
        "operatorName": "Yota",
        "operatorLink": "yota",
        "slogan": "ya yo ta"
    }

    const [isVisible, setIsVisible] = useState(false);
    const [operatorsList, setOperatorsList] = useState(props.dataList);

    async function handleChange() {
        const response = await fetch(
        'http://localhost:3000/api/operators/addOperator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(newOperator)
        })
        const result = await response.json();
        setOperatorsList(
        operatorsList => {
            return [...operatorsList, result]
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
            <Button onClick={()=> setIsVisible(!isVisible)}>sssss</Button>
            <Test visible={isVisible}>{`${isVisible}`}</Test>
        </TileContainer>
    )

}


export default OperatorsList