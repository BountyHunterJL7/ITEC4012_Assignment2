import "./styles.css";
import React, { Component } from "react";


export const HomepageBreak = (props) => {

        return (
            <div className={props.colorId}>

                <h2 className = "homepage-break-name-card"> {props.name} </h2>

                <div className = "homepage-break-name-card break-desc"> {props.desc} </div>

                <button className = "homepage-break-button">{props.button}</button>

            </div>
        );
}