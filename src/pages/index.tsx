import React, { useState } from 'react';
import { TileContainer, ScrollBarContainer, Scrollbar } from "../components/OperatorsListStyled";
import OperatorTile from "../components/operatorTileComponent/OperatorTile";
import { PAGE_URL } from "../../public/CONSTANTS"
import { GetStaticProps } from 'next';

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

export const getStaticProps : GetStaticProps = async ctx => {
    const res = await fetch(`${PAGE_URL}/api/operators`);
    const data : Array<OperatorsList> | undefined  = await  res.json();
    return {props : {data}};
}

export default MainPage