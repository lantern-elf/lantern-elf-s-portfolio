import {Helmet} from "react-helmet";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return(
        <>
            <Helmet>
                <title>{`${document.title} | Home`}</title>
            </Helmet>
            <Navbar/>
        </>
    )
}

export default Home