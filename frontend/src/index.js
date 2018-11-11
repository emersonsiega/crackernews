import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'
import App from './components/App'
import ApolloProvider from './provider/ApolloProvider'


render(
    <BrowserRouter>
        <ApolloProvider>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)