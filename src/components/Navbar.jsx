import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {

const navstyle = ({ isActive }) => {
    return {
        color: isActive ? "green" : "blue",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "underline" : "none"
    }
}

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "lightgray",
            padding: "10px"
        }} >
            <nav style = {{ display: "flex", gap: "50px", fontSize: "20px" }} >
                <NavLink style={navstyle} to="/">
                    Home
                </NavLink>
                <NavLink style={navstyle} to="/about">
                    About
                </NavLink>
                <NavLink style={navstyle} to="/products">
                    Products
                </NavLink>
                <NavLink style={navstyle} to="/signup">
                    Signup
                </NavLink>

            </  nav>
        </div>
    )
}

export default Navbar
