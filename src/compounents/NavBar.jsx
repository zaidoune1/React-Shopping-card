import { Link } from "react-router-dom"
import "../compounents/style.css"
import { HookContext } from "../context/ContextProvider";
import {ImCart} from 'react-icons/im';
import Cards from "./Cards"
import { useState } from "react";

    const NavBar = () => {

        const {card} = HookContext();
    return (

        <nav className="nev-container">
            <Link className="home" to="/">Home</Link>
            <Link className="about" to="/about">About</Link>
            {card.length > 0 ? <Link className="myCards" to="/cards"> <ImCart/>{card.length > 0 && <span className="span-card-length">{card.length}</span>}</Link> : <Link className="myCards"><ImCart/></Link>}</nav>
    )
    }

    export default NavBar