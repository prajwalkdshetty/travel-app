import React from 'react';
import './hotel-description.scss';
import Ratings from '../../../common/ratings/ratings';
import { Amenities } from '../../../common/amenities/amenities';
import Carousel from '../../../common/carousel/carousel';

const HotelDescription = ({ selectedHotel }) => {
    return (
        <div id="hotel-decription" class="box">

            <h2>{selectedHotel.name}</h2>
            <Ratings rating={selectedHotel.rating} />
            <div class="distance">{selectedHotel.distance_to_venue} meters from City Center Leipzig</div>
            <div class="img-desc">
                <div class="description-col-1">
                    <div id="carousel">
                        <Carousel carousalData={selectedHotel.images} />
                    </div>
                </div>
                <div class="description-col-2">
                    <p>{selectedHotel.description}</p>
                </div>
            </div>

            <div class="amenities-container">
                <Amenities amenities={selectedHotel.amenities} />
            </div>
        </div>
    )
}

export default HotelDescription;