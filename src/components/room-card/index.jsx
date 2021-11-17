import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export class RoomCard extends Component {

    //const {image, name, id} = props;
    constructor (props) {
        super (props);
    }

    handleRecent = () => {
        this.props.addToRecent(this.props.id);
    }

    render () {
        return (
            <div className="room-card" onClick={ () => this.handleRecent()}>
                <img className="room-image-card" src={this.props.image} alt={this.props.name + "photo"}/>

                <h2 className = "room-name-card"> {this.props.name} </h2>

                <div className = "room-name-card"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </div>
            </div>
        );
    }
}


// export const RoomCard = (props) => {

//     const {image, name, id} = props;

//     function handleRecent() {
//         this.props.addToRecent(id);
//     }

//     return (
//         <div className="room-card" onClick={ () => handleRecent()}>
//             <img className="room-image-card" src={image} alt={name + "photo"}/>

//             <h2 className = "room-name-card"> {name} </h2>

//             <div className = "room-name-card"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </div>
//         </div>
//     );
// }