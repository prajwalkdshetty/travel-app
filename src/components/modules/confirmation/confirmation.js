import React, { Component } from 'react';
import './confirmation.scss';
import History from './history/history';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Confirmation extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const {hotel, room} = this.props.location.state.bookingDetails;
        const { hotel, room, user, bookingInfo } = this.props;
        return (
            <div id="confirmation-container" class="wrapper app-spacing app-offset">
                <div id="confirmation-details" class="box">
                    <h2>Congratulations! Your booking in <b class="capitalize">{hotel.name}</b> is confirmed.</h2>
                    
                    <h3>Booking Details</h3>
                    <div id="details">
                        <div class="label">Hotel</div><div class="value capitalize">{bookingInfo.hotelName}</div>
                        <div class="label">Booking Name</div><div class="value">{user.firstname}  {user.lastname}</div>
                        <div class="label">Room Type</div><div class="value">{room.name}</div>
                        <div class="label">Booking Number</div><div class="value">{bookingInfo.bookingNumber}</div>
                        <div class="label">Booking Nights</div><div class="value">{bookingInfo.nights}</div>
                        <div class="label">Check-In</div><div class="value">{bookingInfo.checkIn}</div>
                        <div class="label">Check-Out</div><div class="value">{bookingInfo.checkOut}</div>
                        <div class="label">Price</div><div class="value">{bookingInfo.price}</div>
                    </div>

                    <p class="details-messages"><i class="fa fa-check"></i><span>We have sent confirmation email to <b>{user.email}.</b></span></p>
                    <p class="details-messages"><i class="fa fa-check"></i><span>You can amend the booking in booking history in <b>my bookings</b> section.</span></p>
                    <div class="text-right confirmation-buttons">
                        <button class="button button-1" onClick={window.print}>Print</button>
                        <button class="button button-1 not-allowed">Modify</button>
                    </div>
                </div>
                <br/>
                <div class="box"><History /></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        hotel: state.app.selectedHotel,
        user: state.app.user,
        room: state.app.roomSelected,
        bookingInfo: state.app.bookingInfo
    }
};

export default withRouter(connect(mapStateToProps)(Confirmation));
