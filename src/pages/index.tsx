import React, { useState } from 'react'
import { TileContainer } from "../components/OperatorsListStyled";
import OperatorTile from "../components/operatorTileComponent/OperatorTile";

interface MainPageProps {
    data: OperatorsList[] | undefined
}

const MainPage = ({data} : MainPageProps) => {
    const [operatorsList, setOperatorsList] = useState(data);

    return (
            <TileContainer>
                {
                operatorsList?.map((operator : OperatorsList, index: number)=> {
                    return (
                        <OperatorTile
                            key={index}
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

export interface OperatorsList {
    id: string,
    operatorName: string,
    operatorLink: string,
    imgUrl?: string
}

MainPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/operators');
    const data : Array<OperatorsList> | undefined  = await  res.json();
    return {data: data}
}

export default MainPage