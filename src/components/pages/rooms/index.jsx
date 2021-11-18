import "./styles.css";
import React from "react";
import {RoomCard} from "../../../components/room-card/index";
import { RecentlyViewed } from "../../recently-viewed";
import RoomData from "../../../database.json";
import { useState } from 'react';

export const Rooms = () => {
    
    const [roomArray, setRoomArray ] = useState([]);

    let currentclick;

    const addToRecent = (idValue) => {
        console.log("PUSHED WA");
        currentclick = Number(idValue);

        let prevArray  = roomArray;
       const room = RoomData.find((room) => room.id == idValue);
        prevArray.push(room)
        prevArray.reverse();
        setRoomArray([...prevArray]);

        // for (var i = roomArray.length; i >= 0; i--) {
        //     if (i === 0){
        //         roomArray[i] = currentclick;
        //     } else {
        //         roomArray[i] = roomArray[i-1];
        //     }
        // }
        console.log (roomArray)
    }   

    return (
        <div className="room-card-wrapper">
            <div className="rooms-heading">
                <div className="rooms-title">
                    Rooms
                    <h1>Rooms</h1>
                </div>
            </div>
            <div className="room-card-list">
                { 
                    RoomData.map(post => {
                        return(
                            <RoomCard key={post.id} image={post.image} name={post.name} id={post.id}  addToRecent={addToRecent}></RoomCard>
                        )}) 

                   
                } 

            </div>
            <div>
                <RecentlyViewed viewedItems={roomArray}></RecentlyViewed>
            </div>
        </div>
    );
}