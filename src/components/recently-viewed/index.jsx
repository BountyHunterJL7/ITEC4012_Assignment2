import "./styles.css";
import React from "react";
import RoomData from "../../database.json";
import { PropTypes } from 'react'
import {RoomCard} from "../../components/room-card/index";

export const RecentlyViewed = () => {
    

    var roomArray = [];

    var currentclick;


    function addToRecent(idValue)  {
        console.log("PUSHED WA");
        currentclick = Number(idValue);

        for (var i = roomArray.length; i >= 0; i--) {
            if (i === 0){
                roomArray[i] = currentclick;
            } else {
                roomArray[i] = roomArray[i-1];
            }
        }
    }   
        return (
            <div>
                <div className="recent-heading">
                    <div className="recent-title">
                        <h1>Your recently viewed products</h1>
                    </div>
                </div>
                
                <div>
                    { 
                        // RoomData.map(post => {
                        //     return(
                        //         <RoomCard key={post.id} image={post.image} name={post.name} id={post.id}></RoomCard>
                        //     )}) 
                        roomArray.map((room) => {
                            return(
                                <RoomCard key={room.id} image={room.image} name={room.name} id={room.id} addToRecent={this.addToRecent}></RoomCard>
                            )}) 
                    
                    } 
                </div>
            </div>
        );
    
}