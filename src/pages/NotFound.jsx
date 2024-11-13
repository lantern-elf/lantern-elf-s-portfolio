import React from 'react';
import { Helmet } from 'react-helmet';


const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Lantern Elf | Not Found!</title>
            </Helmet>
            <h1 className='notFound'>Not Found!</h1>
        </>
    )
}

export default NotFound