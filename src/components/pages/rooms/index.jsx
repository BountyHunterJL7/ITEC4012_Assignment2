import "./styles.css";
import React from "react";
import {RoomCard} from "../../../components/room-card/index";
import { RecentlyViewed } from "../../recently-viewed";
import RoomData from "../../../database.json";

export const Rooms = () => {
    return (
        <div>
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
                            <RoomCard key={post.id} image={post.image} name={post.name} id={post.id} ></RoomCard>
                        )}) 

                   
                } 

            </div>
            <div>
                <RecentlyViewed></RecentlyViewed>
            </div>
        </div>
    );
}