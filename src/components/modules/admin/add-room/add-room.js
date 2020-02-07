import React, { Component } from 'react';
import './add-room.scss';
import { Input } from '../../../ui/input/input';
import { api } from '../../../../api/api';
import { uuidv4 } from '../../../../utils/utils';

class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            max_occupancy: 0,
            price_in_usd: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.onRoomAddSuccess = this.onRoomAddSuccess.bind(this);
    }

    render() {
        return (
            <div id="add-room" class="box ">
                <h2>Add a new room</h2>
                <form onSubmit={this.handleFormSubmit} >
                    <div id="addRoomsForm">
                        <Input type={'text'}
                            title={'Name'}
                            name={'name'}
                            placeholder={'Room Name'}
                            value={this.state.name}
                            handleChange={this.handleInputChange}
                            required={true}
                        />
                        <Input type={'textarea'}
                            title={'Description'}
                            name={'description'}
                            min={50}
                            placeholder={'Room Description'}
                            value={this.state.description}
                            handleChange={this.handleInputChange}
                            required={true}
                        />
                        <Input type={'number'}
                            title={'Max Occupency'}
                            name={'max_occupancy'}
                            max={4}
                            min={1}
                            placeholder={'Max Occupency'}
                            value={this.state.max_occupancy}
                            handleChange={this.handleInputChange}
                            required={true}
                        />
                        <Input type={'number'}
                            title={'Price (in USD)'}
                            name={'price_in_usd'}
                            placeholder={'Price'}
                            value={this.state.price_in_usd}
                            handleChange={this.handleInputChange}
                            required={true}
                        />
                    </div>
                    <div id="add-room-btn">
                        <button type="submit" class="button button-1">Add Room</button>
                    </div>
                </form>
            </div>
        );
    }
    

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newRoom = this.state;
        newRoom.id = uuidv4();
        const { hotelDetails } = this.props;
        const roomsAdded = this.props.roomsAdded;
        const noOfItems = roomsAdded.length;
        roomsAdded.push(newRoom);
        const self = this;
        if(noOfItems === 0) {
            api.post('rooms', { id: hotelDetails.id, "rooms": roomsAdded}).then(() => {
                self.onRoomAddSuccess(roomsAdded);
                alert("Room added successfully!");
            });
        } else {
            api.put('rooms/'+hotelDetails.id, { id: hotelDetails.id, "rooms": roomsAdded}).then(() => {
                self.onRoomAddSuccess(roomsAdded);
                alert("Room added successfully!");
            });
        }
    }

    onRoomAddSuccess(roomsAdded) {
        this.props.onRoomAdded(roomsAdded);
        this.setState({
            name: "",
            description: "",
            max_occupancy: 0,
            price_in_usd: 0
        });
    }

}

export default AddRoom;