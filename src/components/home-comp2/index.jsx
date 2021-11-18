import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";


export const HomeComp2 = (props) => {

        return (
            <div className="home-comp2-card">
                <img className="home-comp2-image-card" src={props.image} alt={props.name + "photo"}/>

                <h2 className = "home-comp2-name-card"> {props.name} </h2>

                {/* <div className = "home-comp1-name-arrow"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </div> */}
            </div>
        );
}