import React from 'react'

const Scroll = (props) =>  (
    <div style={{overflowY: 'scroll', height: '600px', paddingBottom: '8rem'}}>
        {props.children}
    </div>
)

export default Scroll;