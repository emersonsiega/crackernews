import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from './Link'

const FEED_QUERY = gql`{
    feed {
        links {
            id
            createdAt
            url
            description
        }
    }
}`

const LinkList = (props) =>
    <Query query={FEED_QUERY}>
        {({loading, error, data}) => { 
            if (error) return <h3 color='#300'>Error</h3>

            return loading === true 
                ? <h3>Loading...</h3>
                : data.feed.links.map(link => <Link key={link.id} link={link} />)
        }}
    </Query>

export default LinkList