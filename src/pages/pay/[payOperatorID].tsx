import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {NextPageContext} from 'next';
import {
    PaymentContainer,
    InputBlock,
    ErrorMessage,
    Input,
} from '../../components/PaymentPageStyled';
import InputForm from "../../components/inputFormComponent/InputForm";

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
    const [responseData, setResponseData] = useState({
        result: false,
        message:''
    })


    useEffect(()=> {
        if(validPhone && validPayment) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
        console.log(validForm, validPhone, validPayment)
    })

    //сделать useEffect и обновлять кнопку формы

    async function sendData(e: React.FormEvent){
        e.preventDefault();
        const phoneArr : RegExpMatchArray | null = phone.match(/\d/g);
        const validPhone = phoneArr?.join('');
        const reqBody : SendingData = {
            phoneNumber: validPhone,
            payment: payment,
            operatorName: operatorData?.data.operatorName
        }
        console.log(reqBody)
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
                    <InputForm
                        id={"phone"}
                        name={"phone"}
                        type={"tel"}
                        placeholder={"+7(999)-999-99-99"}
                        callbackValueState={setPhone}
                        callbackValidState={setIsValidPhone}
                    />
                    <InputForm
                        id={"payment"}
                        name={"payment"}
                        type={"text"}
                        placeholder={"Введите сумму"}
                        callbackValueState={setPayment}
                        callbackValidState={setIsValidPayment}
                    />
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