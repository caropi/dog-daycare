import React from 'react'

const CommonButton = (props) => {
    return (
        <button className={props.btnClass} >{props.text}</button>
    )
}

export default CommonButton
