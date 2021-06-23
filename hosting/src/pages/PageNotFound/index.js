import React from 'react'
import {Main, Message} from './PageNotFound.js'; 

const PageNotFound: React.FC = () => {

    return (      
        <Main>

            <Message>
                404 - Page Not Found
            </Message>
            <p></p>
            <a href="/">Voltar para página inicial</a>

        </Main> 
    )
}

export default PageNotFound;