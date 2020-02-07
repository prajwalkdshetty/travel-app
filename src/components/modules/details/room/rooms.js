import React, { Component } from 'react';
import './rooms.scss';
import Occupency from '../../../common/occupency/occupency';

class Rooms extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { roomDetails } = this.props;
        return (
            <div class="rooms-list box">
                <div class="rooms-col-1">
                    <h4>
                        {roomDetails.name}
                    </h4>
                    <div class="occupency"><Occupency noOfPersons={roomDetails.max_occupancy} /></div>
                    <p class="desc">
                        {roomDetails.description}
                        {
                            this.props.index < 2 && <span class="more" onClick={this.showMore}>Show more</span>
                        }
                    </p>
                </div>
                <div class="rooms-col-2">
                    <div class="title">Price</div><div class="value">${roomDetails.price_in_usd}</div>
                    <button onClick={() => this.props.book(roomDetails)} 
                        class="button button-1">Book Now</button>
                </div>
            </div>
        );
    }

    showMore(event) {
        const element = event.target;
        if(element.parentNode.classList.contains("expanded")) {
            element.parentNode.classList.remove('expanded');
            element.textContent = "Show More";
        } else {
            element.parentNode.classList.add('expanded');
            element.textContent = "Hide More";
        }
    }
}

export default Rooms;
