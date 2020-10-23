import {useRouter} from 'next/router'


const PaymentPage = () => {
    const router = useRouter();
    const { payOperatorID } = router.query;
    return (
        <div>
            <h1>
                {payOperatorID}
            </h1>
        </div>
    )
}

export default PaymentPage