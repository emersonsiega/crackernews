import React from 'react'
import { ApolloProvider as Provider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

// Subscriptions
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

import { AUTH_TOKEN } from '../constants'

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000`,
    options: {
        reconnect: true,
        connectionParams: {
            authToken: localStorage.getItem(AUTH_TOKEN),
        }
    }
})

//split “route” a request to a specific middleware link
const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
)

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

const ApolloProvider = (props) =>
    <Provider client={ client }>
        {props.children}
    </Provider>

export default ApolloProvider