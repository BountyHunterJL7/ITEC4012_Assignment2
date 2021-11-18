import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";


export const HomeComp1 = (props) => {

        return (
            // "home-comp1-card"
            <div className={props.color}>
                <img className="home-comp1-image-card" src={props.image} alt={props.name + "photo"}/>

                <h2 className = "home-comp1-name-card"> {props.name} </h2>

                <div className = "home-comp1-name-card"> {props.desc} </div>

                {/* <div className = "home-comp1-name-arrow"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </div> */}
            </div>
        );
}