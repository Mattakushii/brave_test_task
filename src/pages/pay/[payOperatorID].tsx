import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {NextPageContext} from 'next';
import {
    FormHeader,
    PaymentContainer,
    PaymentForm,
    SubmitButton,
} from '../../components/PaymentPageStyled';
import InputForm from "../../components/inputFormComponent/InputForm";
import Popup from "../../components/popupComponent/Popup";
import { PAGE_URL } from "../../../public/CONSTANTS"

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
    const [popupFlag, setPopupFlag] = useState(false);

    console.log(phone)

    useEffect(()=> {
        if(validPhone && validPayment) {
            setIsValidForm(true);
        } else {
            setIsValidForm(false);
        }
    });

    async function sendData(e: React.FormEvent){
        e.preventDefault();
        const phoneArr : RegExpMatchArray | null = phone.match(/\d/g);
        const validPhone = phoneArr?.join('');
        const reqBody : SendingData = {
            phoneNumber: validPhone,
            payment: payment,
            operatorName: operatorData?.data.operatorName
        }
        setPopupFlag(true);
        setResponseData({
            result: false,
            message: 'Обработка платежа...'
        })
        const req = await fetch(
            `${PAGE_URL}/api/pay`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(reqBody)
            });
        const res = await req.json();
        setResponseData(res);
        setTimeout(() => {
            setPopupFlag(false);
            redirect(res.result);
        }, 2000);
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
                <PaymentForm>
                    <FormHeader>Оплата {operatorData.data.operatorName}</FormHeader>
                    <InputForm
                        id={"phone"}
                        name={"phone"}
                        type={"tel"}
                        placeholder={"+7(999)-999-99-99"}
                        labelContent={"Номер телефона"}
                        callbackValueState={setPhone}
                        callbackValidState={setIsValidPhone}
                        inputValid={validPhone}
                        inputValue={phone}
                    />
                    <InputForm
                        id={"payment"}
                        name={"payment"}
                        type={"text"}
                        placeholder={"Введите сумму"}
                        labelContent={"Сумма платежа"}
                        callbackValueState={setPayment}
                        callbackValidState={setIsValidPayment}
                        inputValid={validPayment}
                        inputValue={payment}
                    />
                    <SubmitButton disabled={!validForm} onClick={(e)=> {sendData(e)}}>Оплатить</SubmitButton>
                </PaymentForm>
                <Popup
                    popupFlag={popupFlag}
                    message={responseData.message}
                />
            </PaymentContainer>
        )
    } else {
        return <h1>{operatorData?.errMessage}</h1>
    }
}

interface OperatorData {
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
    const res = await fetch(`${PAGE_URL}/api/operators/${ctx.query.payOperatorID}`);
    const data : OperatorData | undefined = await res.json();
    return { operatorData: data }
}

export default PaymentPage