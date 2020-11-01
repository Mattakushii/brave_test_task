import {useState} from 'react'; 
import {PaymentContainer, InputBlock, Input} from '../../components/PaymentPageStyled'; 

const PaymentPage = ({data}) => {
    //добавить логические состояния validphone validpayment чтобы включать выключать кнопку
    const [phone, setPhone] = useState('');
    const [validPhone, setIsValidPhone] = useState(false);
    const [payment, setPayment] = useState('');
    const [validPayment, setIsValidPayment] = useState(false);
    const [validForm, setIsValidForm] = useState(false);
    const [errors, setErrors] = useState({
        phone: '',
        payment: '',
    })
    //сделать логику для отключения кнопки

    function handleUserInput(e) {
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

    function validateFields(fieldName, value) {
        let validationErrors = errors;
        let isValidPhone = validPhone;
        let isValidPayment = validPayment;
        const phoneRegexp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)][-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/;
        const paymentRegexp = /\d/g;
        const letterRegexp = /[а-яА-ЯёЁa-zA-Z]+$/

        switch(fieldName) {
            case 'phone':
                if(value.length < phone.length) {
                    setPhone(value);
                    setIsValidPhone(false);
                    validationErrors.phone = 'Поле должно быть заполено'
                }else if(value.length == 7) {
                    let [...val] = value;
                    val.splice(6, 0, ')', '-');
                    setPhone(val.join(''))
                }
                if(value.length == 12) {
                    let [...val] = value;
                    val.splice(11, 0, '-');
                    setPhone(val.join(''))
                }
                if(value.length == 15) {
                    let [...val] = value;
                    val.splice(14, 0, '-');
                    setPhone(val.join(''))
                }
                if(value.length >= 17) {
                    const blockedValue = value.slice(0, 17)
                    setPhone(blockedValue)
                }
                if(phoneRegexp.test(value)) {
                    isValidPhone = true;
                    validationErrors.phone = ''
                } else if(value.match(letterRegexp)){
                    isValidPhone = false;
                    validationErrors.phone = 'Поле не должно содержать только цифры'
                } else{
                    isValidPhone = false;
                    validationErrors.phone = 'Поле должно быть заполено'
                }
                break;
            case 'payment':
                if(paymentRegexp.test(value)) {
                    const val = value*1;
                    if(val >= 1 && val <= 1000) {
                        isValidPayment = true;
                        validationErrors.payment = ''
                    } else {
                        isValidPayment = false;
                        validationErrors.payment = 'Введите сумму в заданных границах (от 1р до 1000р)'
                    }
                } else if(value == ''){
                    isValidPayment = false;
                    validationErrors.payment = 'Заполните поле'
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

    function passFirstValue() {
        if(phone.length == 0) {
            setPhone('+7(')
        }
    }

    function sendData(e) {
        //отправить данные на апи
        e.preventDefault();
    }
    
    if (data && data.id) {
        return (
            <PaymentContainer>  
                <h1>Оплата {data.operatorName}</h1>    
                <form>
                    <InputBlock>
                        <label htmlFor="phone">Номер телефона</label>
                        <Input 
                            id="phone"
                            name="phone"
                            value={phone} 
                            type="tel"
                            placeholder="+7(999)-999-99-99"
                            onChange={(e)=> handleUserInput(e)}
                            onClick={()=> passFirstValue()}
                            onFocus={()=> passFirstValue()}
                        ></Input>
                        <div>{errors.phone}</div>
                    </InputBlock>
                    <InputBlock>
                        <label htmlFor="payment">Сумма платежа</label>
                        <Input 
                            id="payment"
                            name="payment"
                            value={payment} 
                            type="text"
                            placeholder="Сумма от 1 до 1000р"
                            onChange={(e)=> handleUserInput(e)}
                        ></Input>
                        <div>{errors.payment}</div>
                    </InputBlock>
                    
                    <input disabled={!validForm} type="submit" value="Отправить" onClick={(e)=> {sendData(e)}}></input>
                </form>
            </PaymentContainer>
        )
    } else {
        return <h1>{data.errMessage}</h1>
    }
}

PaymentPage.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:3000/api/operators/${ctx.query.payOperatorID}`);
    const data = await res.json();
    return { data }
}

export default PaymentPage