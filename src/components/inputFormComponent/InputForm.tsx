import React, { useState} from "react";
import {InputBlock, Input, ErrorMessage, Label} from "./InputFormStyled";
import { InputTypes } from '../../../public/types'

interface InputFormProps {
    name: string,
    type: string,
    placeholder: string,
    labelContent: string,
    callbackValueState(value:string): void,
    callbackValidState(isValid: boolean): void,
    inputValue: string,
    inputValid: boolean,
}

const InputForm = (props:InputFormProps) => {
    const [inputError, setInputError] = useState({
        error: '',
    });


    const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
    const paymentRegexp = /^\d+$/;
    const letterRegexp = /[а-яА-ЯёЁa-zA-Z]/g;

    function handleUserInput(e : React.ChangeEvent<HTMLInputElement>) : void {
        const value = e.target.value;
        props.callbackValueState(value);
        validate(props.name, value);
    }

    function validate(inputName: string, value : string) : void{
        const validationError = inputError;
        let isValidValue = props.inputValid;
        switch (inputName) {
            case InputTypes.phone:
                if(value.length < props.inputValue.length ) {
                    props.callbackValueState(value);
                    props.callbackValidState(false);
                    validationError.error = 'Поле должно быть заполнено';
                } else {
                    let val = [...value];
                    if(value.length === 7) {
                        val.splice(6, 0, ')', '-');
                        props.callbackValueState(val.join(''));
                    }
                    if(value.length === 12) {
                        val.splice(11, 0, '-');
                        props.callbackValueState(val.join(''));
                    }
                    if(value.length === 15) {
                        val.splice(14, 0, '-');
                        props.callbackValueState(val.join(''));
                    }
                    if(value.length >= 17) {
                        const blockedValue = value.slice(0, 17);
                        props.callbackValueState(blockedValue);
                    }
                }
                if(value.match(letterRegexp)) {
                    isValidValue = false;
                    validationError.error = 'Поле содержит недопустимые символы';
                } else if (phoneRegexp.test(value)) {
                    isValidValue = true;
                    validationError.error = ''
                } else {
                    isValidValue= false;
                    validationError.error = 'Поле должно быть заполено';
                }
                break;
            case InputTypes.payment:
                if(value === '') {
                    props.callbackValueState(value);
                    isValidValue = false;
                    validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
                } else if (paymentRegexp.test(value)) {
                    const val = parseInt(value);
                    if (val >= 1 && val <= 1000) {
                        isValidValue = true;
                        validationError.error = '';
                    } else {
                        isValidValue = false;
                        validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)';
                    }
                } else {
                    isValidValue = false;
                    validationError.error = 'Поле содержит недопустимые символы';
                }
                break;
            default:
                break;
        }
        setInputError(validationError);
        props.callbackValidState(isValidValue);
    }

    function checkFirstInput() : void {
        if(props.inputValue?.length === 0) {
            if(props.name === InputTypes.phone) {
                props.callbackValueState('+7(');
                setInputError({
                    error: 'Поле должно быть заполнено'
                });
            } else if(props.name === InputTypes.payment) {
                setInputError({
                    error: 'Введите сумму в заданных границах (от 1р до 1000р)'
                });
            }
        }
    }

    return(
        <InputBlock>
            <Label htmlFor={props.name}>{props.labelContent}:</Label>
            <Input
                valid={props.inputValid}
                name={props.name}
                type={props.type}
                value={props.inputValue}
                placeholder={props.placeholder}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleUserInput(e)}}
                onClick={()=> {checkFirstInput()}}
                onFocus={()=> {checkFirstInput()}}
            />
            <ErrorMessage>{inputError.error}</ErrorMessage>
        </InputBlock>
    )
}

export default InputForm