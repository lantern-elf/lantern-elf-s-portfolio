import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import './about.css'

const About = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | About`}</title>
            </Helmet>
            <Navbar
                menuState1={false}
                menuState2={false}
                menuState3={false}
                menuState4={true}
            />
        </>
    )
}

export default About