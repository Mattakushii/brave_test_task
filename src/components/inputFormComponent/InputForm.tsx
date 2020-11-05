import React, {useState} from "react";
import {InputBlock, Input, ErrorMessage} from "./InputFormStyled";

export interface InputFormProps {
    id: string,
    name: string,
    type: string,
    placeholder: string,
    callbackValueState(value:string): void,
    callbackValidState(isValid: boolean): void,
}

const InputForm = (props:InputFormProps) => {
    const [inputValue, setInputValue] = useState('');
    const [inputValid, setInputValid] = useState(false);
    const [inputError, setInputError] = useState({
        error: 'Поле должно быть заполнено',
    });

    const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
    const paymentRegexp = /^\d+$/;
    const letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

    function handleUserInput(e : React.ChangeEvent<HTMLInputElement>) {
        const inputName = e.target.name;
        const value = e.target.value;
        setInputValue(value);
        validate(inputName, value);
    }

    function validate(inputName: string, value : string) : void{
        const validationError : any = inputError
        let isValidValue : boolean = inputValid;
        switch (inputName) {
            case 'phone':
                if(value.length < inputValue.length) {
                    setInputValue(value);
                    props.callbackValidState(false);
                    validationError.error = 'Поле должно быть заполено';
                }else {
                    let val = [...value];
                    if(value.length === 7) {
                        val.splice(6, 0, ')', '-');
                        setInputValue(val.join(''))
                    }
                    if(value.length === 12) {
                        val.splice(11, 0, '-');
                        setInputValue(val.join(''))
                    }
                    if(value.length === 15) {
                        val.splice(14, 0, '-');
                        setInputValue(val.join(''))
                    }
                    if(value.length >= 17) {
                        const blockedValue = value.slice(0, 17)
                        setInputValue(blockedValue)
                    }
                }
                if(phoneRegexp.test(value)) {
                    isValidValue = true;
                    validationError.error = ''
                } else if(value.match(letterRegexp)){
                    isValidValue = false;
                    validationError.error = 'Поле должно содержать только цифры'
                } else{
                    isValidValue= false;
                    validationError.error = 'Поле должно быть заполено'
                }
                console.log(isValidValue, inputValue, validationError)
                break;
            case 'payment':
                if(value === '') {
                    isValidValue = false;
                    validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)'
                } else if (paymentRegexp.test(value)) {
                    const val = parseInt(value);
                    if (val >= 1 && val <= 1000) {
                        isValidValue = true;
                        validationError.error = ''
                    } else {
                        isValidValue = false;
                        validationError.error = 'Введите сумму в заданных границах (от 1р до 1000р)'
                    }
                } else {
                    isValidValue = false;
                    validationError.error = 'Поле содержит недопустимые символы'
                }
                break;
            default:
                break;
        }
        setInputValid(isValidValue);
        setInputError(validationError);
        props.callbackValueState(value);
        props.callbackValidState(isValidValue)
    }

    function passFirstValue() : void {
        if(inputValue.length === 0 && props.name === 'phone') {
            setInputValue('+7(');
        }
    }



    return(
        <InputBlock>
            <label htmlFor={props.name}/>
            <Input
                id={props.id}
                name={props.name}
                type={props.type}
                value={inputValue}
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