import React, { useState } from 'react';
import {SETTINGS} from '../SETTINGS';
import { TileContainer, ScrollBarContainer, Scrollbar } from "../components/OperatorsListStyled";
import OperatorTile from "../components/operatorTileComponent/OperatorTile";

interface MainPageProps {
    data: OperatorsList[] | undefined
}

const MainPage = ({data} : MainPageProps) => {
    const [operatorsList, setOperatorsList] = useState(data);

    return (
        <ScrollBarContainer>
            <Scrollbar universal>
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
            </Scrollbar>
        </ScrollBarContainer>
    )
}

export interface OperatorsList {
    id: string,
    operatorName: string,
    operatorLink: string,
    imgUrl?: string
}

MainPage.getInitialProps = async () => {
    const res = await fetch(`http://${SETTINGS.URL}/api/operators`);
    const data : Array<OperatorsList> | undefined  = await  res.json();
    return {data: data}
}

export default MainPage