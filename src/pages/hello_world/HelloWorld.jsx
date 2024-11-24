import {Helmet} from "react-helmet";

const HelloWorld = () => {
    return(
        <>
            <Helmet>
                <title>{`${document.title} | Hello, World!`}</title>
            </Helmet>
            <h1>Hello, World!</h1>
        </>
    )
}

export default HelloWorld