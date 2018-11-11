import React from 'react'
import { render } from 'react-dom'

import './styles/index.css'
import App from './components/App'
import ApolloProvider from './provider/ApolloProvider'


render(
    <ApolloProvider>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)