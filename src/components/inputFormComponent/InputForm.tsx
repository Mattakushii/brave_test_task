import React, {useEffect, useState} from "react";
import {InputBlock, Input, ErrorMessage, Label} from "./InputFormStyled";

interface InputFormProps {
    id: string,
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
        error: 'Поле должно быть заполнено',
    });

    const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
    const paymentRegexp = /^\d+$/;
    const letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

    function handleUserInput(e : React.ChangeEvent<HTMLInputElement>) {
        const inputName = e.target.name;
        const value = e.target.value;
        props.callbackValueState(value);
        validate(inputName, value);
    }

    function validate(inputName: string, value : string) : void{
        const validationError = inputError;
        let isValidValue = props.inputValid;
        switch (inputName) {
            case 'phone':
                if(value.length < props.inputValue.length ) {
                    props.callbackValueState(value);
                    props.callbackValidState(false);
                    validationError.error = 'Поле должно быть заполнено';
                }else {
                    let val = [...value];
                    if(value.length === 7) {
                        val.splice(6, 0, ')', '-');
                        props.callbackValueState(val.join(''));
                        console.log(val.join(''), value)
                    }
                    if(value.length === 12) {
                        val.splice(11, 0, '-');
                        props.callbackValueState(val.join(''));
                        console.log(val)
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
                if(phoneRegexp.test(value)) {
                    isValidValue = true;
                    validationError.error = ''
                } else if(value.match(letterRegexp)){
                    isValidValue = false;
                    validationError.error = 'Поле содержит недопустимые символы';
                } else{
                    isValidValue= false;
                    validationError.error = 'Поле должно быть заполено';
                }
                break;
            case 'payment':
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

    function passFirstValue() : void {
        if(props.inputValue?.length === 0 && props.name === 'phone') {
            props.callbackValueState('+7(');
        }
    }

    return(
        <InputBlock>
            <Label htmlFor={props.name}>{props.labelContent}:</Label>
            <Input
                valid={props.inputValid}
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.inputValue}
                placeholder={props.placeholder}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleUserInput(e)}}
                onClick={()=> {passFirstValue()}}
                onFocus={()=> {passFirstValue()}}
            />
            <ErrorMessage>{inputError.error}</ErrorMessage>
        </InputBlock>
    )
}

export default InputForm