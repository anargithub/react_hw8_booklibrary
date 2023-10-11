import React from "react"
import "./Button.css"

export default function Button({buttonValue, onClick}) {
    return (
     <button
        onClick={onClick}
        >{buttonValue} </button>
    )
}