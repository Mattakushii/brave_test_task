import React, { useState, useContext} from 'react'
import {Context} from '../Context' 
import { TileContainer } from "../components/OperatorsListStyled";
import OperatorTile from "../components/operatorTileComponent/OperatorTile";

const MainPage = ({data}) => {
    //исправить все стили
    const [operatorsList, setOperatorsList] = useState(data);

    return (
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
                        />
                    )
                })
                }
        </TileContainer>
    )
}

MainPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/operators');
    const data = await  res.json();
    return {data: data}
}

export default MainPage