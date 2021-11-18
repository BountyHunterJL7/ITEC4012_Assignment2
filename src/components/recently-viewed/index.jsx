import "./styles.css";
import React, { useState } from "react";
import RoomData from "../../database.json";
import { PropTypes } from 'react'
import {ViewedRoom} from "../../components/viewed-room/index";

export const RecentlyViewed = (props) => {
        console.log ("from the recently viewed" ,props.viewedItems)

        const [items, setItems] = useState(props.viewedItems);

        return (
            <div className="recent-view-room-wrapper">
                <div className="recent-heading">
                    <div className="recent-title">
                        <h1>Your recently viewed products</h1>
                    </div>
                </div>
                
                <div className="viewed-room-card-wrapper">
                    { 
                        props.viewedItems.map((room) => {
                            return(
                                <ViewedRoom key={room.id} image={room.image} name={room.name} id={room.id}></ViewedRoom>
                            )}) 
                    
                    } 
                </div>
            </div>
        );
    
}