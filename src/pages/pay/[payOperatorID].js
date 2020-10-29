import {PaymentContainer} from '../../components/PaymentPageStyled'
import InputMask from "react-input-mask";


const PaymentPage = ({data}) => {

    //написать валидацию для полей
    if(data && data.id) {
        return (
            <PaymentContainer>  
                <h1>Оплата {data.operatorName}</h1>    
                <form method="POST" action="">
                    <div>
                        <label htmlFor="phone">Номер телефона</label>
                        <InputMask mask='+7(999)999-99-99' id="phone" type="text"></InputMask>
                    </div>
                    <div>
                        <label htmlFor="payment">Сумма платежа</label>
                        <input id="payment" type="text"></input>    
                    </div>
                    <button onClick={()=> {}}>go</button>
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