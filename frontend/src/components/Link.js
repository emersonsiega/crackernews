import React from 'react'

const Link = (props) =>
    <>
        <div>
            {props.link.description} ({props.link.url})
        </div>
    </>
 
export default Link