import React, { Component } from 'react';
import './home.scss';
import BookingHeader from './booking-header/booking-header';
import SearchList from './search-list/search-list';
import SearchResultsHeader from './search-results-header/search-results-header';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setHotel, setSearch } from '../../../store/actions/appActions';
import { api } from '../../../api/api';
import { customSort } from '../../../utils/utils';
import { Select } from '../../ui/select/select';
import { FiltersData } from '../../../data/filters-data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            sortBy: 'price_category_a'
        }
    }

    render() {
        return (
            <div class="home-container">
                <BookingHeader {...this.props} />
                <section class="search-results">
                    <SearchResultsHeader hotels={this.state.hotels} />
                    {
                        this.state.hotels && this.state.hotels.length > 0 &&
                        <div id="sort-by" class="wrapper">
                            <Select
                                options={FiltersData.sortBy}
                                title={'Sort By'}
                                name={'sortBy'}
                                selected={this.state.sortBy}
                                handleChange={this.onSorting}
                            />
                        </div>
                    }
                    <SearchList hotels={this.state.hotels} setHotel={this.props.setHotel} />
                </section>
            </div>
        );
    }
    componentDidMount() {
        api.get('hotels').then(({ data }) => {
            this.onSorting(this.state.sortBy, data);
        })
    }

    onSorting = (event, data) => {
        const dataForSort = data || this.state.hotels;
        let value = typeof event === 'string' ? event : event.target.value;
        let code = '';
        let sortBy = value;
        let dec = false;
        if (dataForSort && dataForSort.length > 0) {
            if (value === 'price_category_a' || value === 'price_category_d') {
                code = {
                    low: 'a',
                    medium: 'b',
                    high: 'c'
                };
                sortBy = 'price_category';
            }
            if (value === 'rating' || value === 'price_category_d') {
                dec = true;
            }
            const hotel = customSort(dataForSort, sortBy, dec, code);
            this.setState({
                ...this.state,
                hotels: hotel,
                sortBy: value
            })
        }
    }
}

const dispatchActions = (dispatch) => {
    return {
        setHotel: (data) => dispatch(setHotel(data)),
        setSearch: (data) => dispatch(setSearch(data))
    }
};
export default withRouter(connect(null, dispatchActions)(Home));
