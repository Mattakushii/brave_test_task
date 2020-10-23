import OperatorsList from "../components/operatorsListComponent/OperatorsList"
import db from "../../public/db.json";

const MainPage = ({data}) => {

    return (
        <>
            <OperatorsList dataList={data}/>
        </>
    )
}

MainPage.getInitialProps = async () => {
    const res = db;
    return {data: res}
}


export default MainPage