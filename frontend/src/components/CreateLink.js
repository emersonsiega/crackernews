import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

const CreateLink = (props) => {
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleDescription = e => {
        e.preventDefault()
        setDescription( e.target.value )
    }

    const handleUrl = e => {
        e.preventDefault()
        setUrl(e.target.value)
    }

    return <div>
        <div className="flex flex-column mt3">
            <input
                className="mb2"
                value={description}
                onChange={handleDescription}
                type="text"
                placeholder="A description for the link"
            />
            <input
                className="mb2"
                value={url}
                onChange={handleUrl}
                type="text"
                placeholder="The URL for the link"
            />
        </div>
        <Mutation 
            mutation={POST_MUTATION} 
            variables={{ description, url }}
            onCompleted={() => props.history.push('/')}
        >
            { postMutation => <button onClick={postMutation}>Submit</button> }
        </Mutation>
    </div>
}

export default CreateLink