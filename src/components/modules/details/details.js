import React, { Component } from 'react';
import './details.scss';
import Rooms from './room/rooms';
import HotelDescription from './hotel-description/hotel-description';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setRoom, setBookingInfo } from '../../../store/actions/appActions';
import { api } from '../../../api/api';
import { uuidv4 } from '../../../utils/utils';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            hotelId: ''
        }
        this.book = this.book.bind(this);
    }
    componentDidMount() {
        const {id} = this.props.selectedHotel;
        if(id) {
            api.get('rooms/'+id).then(({data}) => {
                this.setState({
                    ...this.state,
                    hotelId: id,
                    rooms: data.rooms
                })
            })
        }
    }

    render() {
        const { selectedHotel } = this.props;
        return (
            <div class="details-container wrapper">
                <HotelDescription selectedHotel={selectedHotel}/>
                {
                    this.state.rooms.map((data, index) => (
                        <Rooms key={index} index={index} roomDetails={data} book={this.book} />
                    ))}
            </div>
        );
    }

    book(data) {
        const props = this.props;
        props.setRoom(data);
        
        const booking = {
            hotelId: props.selectedHotel.id,
            hotelName: props.selectedHotel.name,
            roomId: data.id,
            roomName: data.name,
            userId: props.user.userId,
            bookingDate: this.getBookingTime(),
            nights: 1,
            price: '$'+data.price_in_usd,
            checkIn: props.searchData.checkIn,
            checkOut: props.searchData.checkOut,
            location: props.searchData.location,
            bookingNumber: this.getUniqueNumber(props.user.userId)
        }


        api.post('bookings', booking).then(({data}) => {
            props.setBookingInfo(data);
            props.history.push("/confirmation");
        })        
    }
    
    getUniqueNumber() {
        return 'bk'+ uuidv4();
    }
    getBookingTime() {
        const d = new Date();
        return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()+' '+(d.getHours() > 12 ? d.getHours() - 12 : d.getHours())+':'+d.getMinutes()+' '+(d.getHours() >= 12 ? "PM" : "AM");
    }
}

const mapStateToProps = (state) => {
    return { 
        selectedHotel: state.app.selectedHotel,
        user: state.app.user,
        searchData: state.app.searchData
    }
};

const dispatchActions = (dispatch) => {
    return {
        setRoom: (data) => dispatch(setRoom(data)),
        setBookingInfo: (data) => dispatch(setBookingInfo(data))
    }
};

export default withRouter(connect(mapStateToProps, dispatchActions)(Details));
