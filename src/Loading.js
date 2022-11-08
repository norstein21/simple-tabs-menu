import React from "react";
import './loader.css'

const Loader = () =>{
    return (
        <div class="loader">
            <div class="circles">
                <span class="one"></span>
                <span class="two"></span>
                <span class="three"></span>
            </div>
            <div class="pacman">
                <span class="top"></span>
                <span class="bottom"></span>
                <span class="left"></span>
                <div class="eye"></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <h2 style={{color:"yellowgreen"}}>Loading...</h2>
            </div>
            </div>
    );
}

export default Loader;