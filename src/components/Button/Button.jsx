import React from "react";
import './Button.css'
export default function Button({buttonText, className}){
    return(
        <button className={className}>{buttonText}</button>
    )
}