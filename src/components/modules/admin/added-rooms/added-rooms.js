import React from 'react';
import './added-rooms.scss';

const AddedRooms = ({roomsAdded}) => {
    return (
        <div id="added-room" class="box">
            <h4>Added Rooms</h4>
            {roomsAdded.map(data => ( 
                <div class="rooms-added">
                    <h5>{data.name}</h5>
                    <p class="description">{data.description}</p>
                    <div class="price">Price: {data.price_in_usd}</div><div class="occupency">Max Occupancy : {data.max_occupancy}</div>
                </div>
            ))}
        </div>
    )
}

export default AddedRooms;