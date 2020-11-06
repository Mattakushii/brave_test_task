import {OperationResult, PopupContainer, Preloader, PreloaderText} from "./PopupStyled";
import React, {useState} from "react";

interface PopupProps {
    popupFlag: boolean,
    message: string,
}

const Popup = (props:PopupProps) => {
    return(
        <PopupContainer visible={props.popupFlag}>
            <OperationResult>
                <Preloader/>
                <PreloaderText>{props.message}</PreloaderText>
            </OperationResult>
        </PopupContainer>
    )
}

export default Popup