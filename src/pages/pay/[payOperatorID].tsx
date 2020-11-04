import React, {useState} from 'react';
import {useRouter} from "next/router";
import {NextPageContext} from 'next';
import {
    PaymentContainer,
    InputBlock,
    ErrorMessage,
    Input,
} from '../../components/PaymentPageStyled';

interface PaymentProps {
    operatorData: OperatorData | undefined
}

interface SendingData {
    phoneNumber: string | undefined,
    payment: string,
    operatorName: string | undefined
}

const PaymentPage = ({operatorData}: PaymentProps) => {
    const router = useRouter();

    const [phone, setPhone] = useState('');
    const [validPhone, setIsValidPhone] = useState(false);
    const [payment, setPayment] = useState('');
    const [validPayment, setIsValidPayment] = useState(false);
    const [validForm, setIsValidForm] = useState(false);
    const [errors, setErrors] = useState({
        phone: '',
        payment: '',
    })
    const [responseData, setResponseData] = useState({
        result: false,
        message:''
    })

    function handleUserInput(e : React.ChangeEvent<HTMLInputElement>) {
        const inputName = e.target.name;
        const value = e.target.value;
        switch(inputName) {
            case 'phone':
                setPhone(value);
                validateFields(inputName, value);
                break;
            case 'payment':
                setPayment(value);
                validateFields(inputName, value);
                break;
            default:
                break;
        }
    }

    function validateFields(fieldName: string, value : string ) {
        let validationErrors = errors;
        let isValidPhone = validPhone;
        let isValidPayment = validPayment;
        const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
        const paymentRegexp = /^\d+$/;
        const letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/;

        switch(fieldName) {
            case 'phone':
                if(value.length < phone.length) {
                    setPhone(value);
                    setIsValidPhone(false);
                    validationErrors.phone = 'Поле должно быть заполено';
                }else {
                    let val = [...value];
                    if(value.length === 7) {
                        val.splice(6, 0, ')', '-');
                        setPhone(val.join(''))
                    }
                    if(value.length === 12) {
                        val.splice(11, 0, '-');
                        setPhone(val.join(''))
                    }
                    if(value.length === 15) {
                        val.splice(14, 0, '-');
                        setPhone(val.join(''))
                    }
                    if(value.length >= 17) {
                        const blockedValue = value.slice(0, 17)
                        setPhone(blockedValue)
                    }
                }
                if(phoneRegexp.test(value)) {
                    isValidPhone = true;
                    validationErrors.phone = ''
                } else if(value.match(letterRegexp)){
                    isValidPhone = false;
                    validationErrors.phone = 'Поле должно содержать только цифры'
                } else{
                    isValidPhone = false;
                    validationErrors.phone = 'Поле должно быть заполено'
                }
                break;
            case 'payment':
                if(value === '') {
                    isValidPayment = false;
                    validationErrors.payment = 'Введите сумму в заданных границах (от 1р до 1000р)'
                } else if (paymentRegexp.test(value)) {
                    const val = parseInt(value);
                    if (val >= 1 && val <= 1000) {
                        isValidPayment = true;
                        validationErrors.payment = ''
                    } else {
                        isValidPayment = false;
                        validationErrors.payment = 'Введите сумму в заданных границах (от 1р до 1000р)'
                    }
                } else {
                    isValidPayment = false;
                    validationErrors.payment = 'Поле содержит недопустимые символы'
                }
                break;
            default:
                break;
        }
        setIsValidPhone(isValidPhone);
        setIsValidPayment(isValidPayment);
        setErrors(validationErrors);
        if(isValidPhone && isValidPayment) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
    }

    function passFirstValue() : void {
        if(phone.length === 0) {
            setPhone('+7(')
        }
    }

    async function sendData(e: React.FormEvent){
        e.preventDefault();
        const phoneArr : RegExpMatchArray | null = phone.match(/\d/g);
        const validPhone = phoneArr?.join('');
        let test = router.query.payOperatorID;
        console.log(test)
        const reqBody : SendingData = {
            phoneNumber: validPhone,
            payment: payment,
            operatorName: operatorData?.data.operatorName
        }
        setResponseData({
            result: false,
            message: 'Обработка платежа...'
        })
        const req = await fetch(
            `http://localhost:3000/api/pay`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            });
        const res = await req.json();
        setResponseData(res);
        setTimeout(() => {
            redirect(res.result)
        }, 1000);
        return res
    }

    function redirect(result : object) {
        if(result) {
            router.replace('/');
        } else {
            setPhone('');
            setIsValidPhone(false);
            setPayment('');
            setIsValidPayment(false);
            setIsValidForm(false);
        }
    }
    
    if (operatorData && operatorData.data.id) {
        return (
            <PaymentContainer>
                <form>
                    <h1>Оплата {operatorData.data.operatorName}</h1>
                    <InputBlock>
                        <label htmlFor="phone">Номер телефона</label>
                        <Input
                            valid={validPhone}
                            id="phone"
                            name="phone"
                            value={phone} 
                            type="tel"
                            placeholder="+7(999)-999-99-99"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> handleUserInput(e)}
                            onClick={()=> passFirstValue()}
                            onFocus={()=> passFirstValue()}
                        />
                        <ErrorMessage>{errors.phone}</ErrorMessage>
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="payment">Сумма платежа</label>
                        <Input
                            valid={validPayment}
                            id="payment"
                            name="payment"
                            value={payment} 
                            type="text"
                            placeholder="Сумма от 1 до 1000р"
                            onChange={(e : React.ChangeEvent<HTMLInputElement>)=> handleUserInput(e)}
                        />
                        <ErrorMessage>{errors.payment}</ErrorMessage>
                    </InputBlock>
                    
                    <input disabled={!validForm} type="submit" value="Отправить" onClick={(e)=> {sendData(e)}}/>
                </form>
                <div>{responseData.message}</div>
            </PaymentContainer>
        )
    } else {
        return <h1>{operatorData?.errMessage}</h1>
    }
}

export interface OperatorData {
    data: {
        id: string,
        operatorName: string,
        operatorLink: string,
        imgUrl?: string
    },
    errMessage: string,
    ok: boolean
}

PaymentPage.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch(`http://localhost:3000/api/operators/${ctx.query.payOperatorID}`);
    const data : OperatorData | undefined = await res.json();
    return { operatorData: data }
}

export default PaymentPage