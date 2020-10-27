import OperatorsList from "../components/operatorsListComponent/OperatorsList"

const MainPage = ({data}) => {

    return (
        <>
            <OperatorsList dataList={data}/>
        </>
    )
}

MainPage.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/operators');
    const data = await  res.json();
    return {data: data}
}


export default MainPage