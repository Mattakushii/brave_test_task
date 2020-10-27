const Payment = ({...props}) => {
    console.log(props.data.id)
    if(props && props.data.id) {
        return (
            <>  
            <h1>Оплата {props.data.operatorName}</h1>    
                <form method="POST" action="">
                    <label htmlFor="phone">Номер телефона</label>
                    <input id="phone" type="text"></input>
                    <label htmlFor="payment">Сумма платежа</label>
                    <input id="payment" type="text"></input>
                    <button>go</button>
                </form>
            </>
        )
    } else {
        return <h1>404</h1>
    }
}

export default Payment