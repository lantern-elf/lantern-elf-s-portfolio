import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import './arts.css'

const Arts = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | Arts`}</title>
            </Helmet>
            <Navbar
                menuState1={false}
                menuState2={true}
                menuState3={false}
                menuState4={false}
            />
        </>
    )
}

export default Arts