
import React, { Component } from 'react';
import './add-items.scss';
import AddHotel from './../add-hotel/add-hotel';
import AddRoom from './../add-room/add-room';
import AddedRooms from './../added-rooms/added-rooms';

class AddItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelAdded: false,
            hotelDetails: {},
            roomsAdded: []
        }

        this.onHotelAdded = this.onHotelAdded.bind(this);
        this.onRoomAdded = this.onRoomAdded.bind(this);
    }
    render() {

        return (
            <section id="add-items" class="wrapper app-spacing app-offset">
                <AddHotel onHotelAdded={this.onHotelAdded} roomsAdded={this.state.roomsAdded} />
                {this.state.hotelAdded &&
                    <AddRoom hotelDetails={this.state.hotelDetails} roomsAdded={this.state.roomsAdded} onRoomAdded={this.onRoomAdded} />}
                {this.state.roomsAdded.length > 0 && <AddedRooms roomsAdded={this.state.roomsAdded} />}
            </section>
        );
    }

    onHotelAdded(data) {
        this.setState({
            hotelAdded: true,
            hotelDetails: data
        });
    }


    onRoomAdded(data) {
        this.setState({
            ...this.state,
            roomsAdded: data
        });
    }
}

export default AddItems;