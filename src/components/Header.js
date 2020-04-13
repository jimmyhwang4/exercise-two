import React, { useEffect, useState } from "react";
import '../App.css';

function Header() {

    return (
        <div className="Header">
            <h2>Weather</h2>
            <div className="CitiesNav">
                <a href={"?city=New York City"}><p><strong>New York City</strong></p></a>
                <a href={"?city=Los Angeles"}><p><strong>Los Angeles</strong></p></a>
                <a href={"?city=Seoul"}><p><strong>Seoul</strong></p></a>
                <a href={"?city=Incheon"}><p><strong>Incheon</strong></p></a>
            </div>
        </div>
    )
}

export default Header;