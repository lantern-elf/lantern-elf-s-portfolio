import {Helmet} from "react-helmet";

const NotFound = () => {
    return(
        <>
            <Helmet>
                <title>{`Lantern Elf | Not Found`}</title>
            </Helmet>
            <h1>Not Found</h1>
        </>
    )
}

export default NotFound