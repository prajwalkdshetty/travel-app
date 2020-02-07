import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search-list.scss';
import Ratings from '../../../common/ratings/ratings';
import {Amenities} from '../../../common/amenities/amenities';

class SearchList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { hotels } = this.props;
        return (
            <section class="wrapper">
                <div id="search-lists">
                {
                    hotels.map((data, index) => (
                        <div key={index} class="list box"> 
                            <div class="search-list-col-1">
                                <img src={data.images[0]} alt={data.name + ' image'}/>
                            </div>
                            <div class="search-list-col-2">
                                <div class="search-list-subcol-1">  
                                    <h3>{data.name}</h3>
                                    <Ratings rating={data.rating} />
                                    <div class="distance">{data.distance_to_venue} meters from City Center Leipzig</div>
                                    <div class="description"><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</span></div>
                                    <div class="amenities-container">
                                        <Amenities amenities={data.amenities}/>
                                    </div>
                                </div>
                                <div class="search-list-subcol-2">
                                    <div class="title">Price Category</div><div class="value">{data.price_category}</div>
                                    <Link onClick={() => this.props.setHotel(data)} to="details" class="button button-1">Choose Room</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default SearchList;