import React from "react"
import {Link} from "react-router-dom"
import './CustomLink.css'
export default function CustomLink({className, address, title}){
    return(
        <Link className={className} to={address}>{title}</Link>
    )
}