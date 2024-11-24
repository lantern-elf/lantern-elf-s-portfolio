import {Helmet} from "react-helmet";

const Home = () => {
    return(
        <>
            <Helmet>
                <title>{`${document.title} | Home`}</title>
            </Helmet>
            
        </>
    )
}

export default Home