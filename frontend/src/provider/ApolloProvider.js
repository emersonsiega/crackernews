import React from 'react'
import { ApolloProvider as Provider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const ApolloProvider = (props) =>
    <Provider client={ client }>
        {props.children}
    </Provider>

export default ApolloProvider