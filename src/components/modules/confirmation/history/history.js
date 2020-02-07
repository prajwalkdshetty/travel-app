import React, { Component } from 'react';
import './history.scss';
import { api } from '../../../../api/api';
class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }
    render() {
        const {bookings} = this.state;
        return (
            <div id="history-container">
                <h4>Booking History</h4>
                <span id="totalBooking">Total Bookings: {bookings.length}</span>
                {bookings.map(data => (
                    <div key={data.id} class="history-list">
                        <h5 class="capitalize">{data.hotelName}</h5>
                        <div class="booking-details">
                            <div class="booking-date">Booking Date: {data.bookingDate}</div>
                            <div>Location: {data.location}</div>
                        </div>
                        <button class="button button-2 not-allowed">View Details</button>
                    </div>
                ))}
            </div>
        )
    }

    componentDidMount() {
        api.get('bookings').then(({data}) => {
            this.setState({
                ...this.state,
                bookings: data
            })
        })
    }
}

export default History;