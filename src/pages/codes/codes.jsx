import { Helmet } from "react-helmet"
import Navbar from "../../components/navbar/Navbar"
import './codes.css'
import ContentCard from "../../components/content_card/ContentCard"
import codesData from "../../data/code.json"

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
            <main className="codeWrapper">
                <div>Not Available Yet!</div>
            </main>
        </>
    )
}

export default Codes