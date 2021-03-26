import React from "react"
import spiderman from "../img/spiderman.png"

const Intro = () =>{
    return(
        <div>
            <img className="header-img" src={spiderman}></img>
            <h1 className="name">This is <span>Suraj Vishwakarma</span></h1>
            <h3 className="description">I am a programmer, Graphic Designer, Animator and an IT student.</h3>
        </div>
    )
}

export default Intro