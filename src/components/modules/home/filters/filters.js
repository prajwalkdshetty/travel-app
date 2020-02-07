import React, { Component } from 'react';
import './filters.scss';
import Slider from '../../../ui/slider/slider';
import { Checkbox } from '../../../ui/checkbox/checkbox';
import { FiltersData } from '../../../../data/filters-data';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        return (
            <div id="filter-container" ref="filterContainer">
                <h3>Filters</h3>
                <div class="fa fa-close close" onClick={() => this.close()}></div>
                <div class="filters">
                    <div class="filter-type">
                        <h5>Ratings</h5>
                        <div class="filter-items">
                                <Checkbox
                                    title={'Rating'}
                                    options={FiltersData.rating}
                                    handleChange={this.handleInputChange}
                                    hideLabel={true}
                                />
                        </div>
                    </div>
                    <div class="filter-type">
                        <h5>Amenities</h5>
                        <div class="filter-items">
                        <Checkbox
                                    title={'Amenities'}
                                    options={FiltersData.amenities}
                                    handleChange={this.handleInputChange}
                                    hideLabel={true}
                                />
                        </div>
                    </div>
                    <div class="filter-type">
                        <h5>Distance</h5>
                        <div class="filter-items distance-slider">
                            <Slider min="0" max="10000" value="5000" name="distanceRange" handleChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div class="filter-type">
                        <h5>Price Category</h5>
                        <div class="filter-items">
                        <Checkbox
                                    title={'Amenities'}
                                    options={FiltersData.price_category}
                                    handleChange={this.handleInputChange}
                                    hideLabel={true}
                                />                            
                        </div>
                    </div>
                </div>
                <div class="apply-button">
                    <button class="button button-1">Reset</button>
                    <button class="button button-1">Apply</button>
                </div>
            </div>
        )
    }

    handleInputChange() {

    }

    close() {
        this.refs.filterContainer.classList.remove('open');
        document.body.classList.remove('scroll-hidden');
        document.getElementById('overlay').classList.remove("showOnFilter");
    }

    toggleFilter() {
        const classes = this.refs.filterContainer.classList;
        if(classes.contains('open')) {
            this.close();
        } else {
            classes.add('open');
            document.getElementById('overlay').classList.add("showOnFilter");
            document.body.classList.add('scroll-hidden');
        }
    }
}



export default Filters;