import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import './codes.css'

const Codes = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | Codes`}</title>
            </Helmet>
            <Navbar
                menuState1={false}
                menuState2={false}
                menuState3={true}
                menuState4={false}
            />
        </>
    )
}

export default Codes