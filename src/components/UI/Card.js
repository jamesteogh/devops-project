import React from 'react'
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}
// props.children allows attributes within wrapper <Card /> to be available here. 

export default Card