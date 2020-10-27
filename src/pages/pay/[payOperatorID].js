import {useRouter} from 'next/router'
import Payment from '../../components/paymentScreen/Payment';


const PaymentPage = ({data}) => {

    console.log({...data});

    return (
        <>
            <Payment
                data = {{...data}}
            />
        </>
    )
}

PaymentPage.getInitialProps = async (ctx) => {
    const res = await fetch(`http://localhost:3000/api/operators/${ctx.query.payOperatorID}`);
    const data = await res.json();
    return { data }
}

export default PaymentPage