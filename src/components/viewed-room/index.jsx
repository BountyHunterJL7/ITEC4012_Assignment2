import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";


export const ViewedRoom = (props) => {

        return (
            <div className="room-viewd">
                <img className="room-image-viewd" src={props.image} alt={props.name + "photo"}/>

                <h2 className = "room-name-viewd"> {props.name} </h2>

                <div className = "room-name-viewd"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </div>
            </div>
        );
}