import React, { Component } from 'react';
import './remove-items.scss';
import { Input } from '../../../ui/input/input';
import { Checkbox } from '../../../ui/checkbox/checkbox';
import { api } from '../../../../api/api';

class RemoveItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            hotelsForView: [],
            selectedHotels: []
        }
        this.searchHotel = this.searchHotel.bind(this);
        this.hotelSelection = this.hotelSelection.bind(this);
        this.removeHotels = this.removeHotels.bind(this);
    }
    render() {
        return (
            <div id="remove-items" class="wrapper app-spacing app-offset">
                <div class="box">
                    <h4>Select hotels to Delete</h4>
                    <form onSubmit={this.removeHotels}>
                        <div id="search-hotels">
                            <Input type={'text'}
                                title={'Search'}
                                name={'name'}
                                placeholder={'Hotel Name'}
                                required={false}
                            />
                            <span class="fa fa-search search-icon" onClick={this.searchHotel}></span>
                        </div>
                        <div class="hotels-list">
                            <Checkbox
                                title={'Hotels'}
                                options={this.state.hotelsForView}
                                handleChange={this.hotelSelection}
                                hideLabel={false}
                                selectedOptions={this.state.selectedHotels}
                            />
                        </div>
                        <div class="remove-btn">
                            <button disabled={!this.state.selectedHotels.length} type="button" onClick={this.clearSelection} class="button button-2">Clear Selected</button>
                            <button type="submit" class="button button-1">Remove</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getHotels();
    }

    clearSelection = () => {
        this.setState({
            selectedHotels: []
        });
    }

    searchHotel = (event) => {
        const searchVal =  event.target.parentNode.querySelector("input").value;
        const { hotels } = this.state;
        const filteredData = hotels.filter(data => data.label.includes(searchVal));
        this.setState({
            hotelsForView: [...filteredData]
        });
    }

    hotelSelection = (event) => {
        const name = event.target.name;
        let data = [...this.state.selectedHotels];
        if (event.target.checked) {
            data.push(name);
        } else {
            const index = data.findIndex(data => data === name);
            data.splice(index, 1);
        }
        this.setState({
            selectedHotels: data
        });
    }

    removeHotels = (event) => {
        event.preventDefault();
        const promises = [];
        this.state.selectedHotels.forEach(data => {
            promises.push(this.requestPromise(data));
        });

        Promise.all(promises).then(values => {
            alert("Hotels deleted successfully!");
            this.clearSelection();
            this.getHotels();
        });
    }

    getHotels() {
        api.get('hotels').then(({ data }) => {
            const hotels = data.map(hotel => ({ label: hotel.name, value: hotel.id }));
            this.setState({
                hotels,
                hotelsForView: hotels
            });
        });
    }
    requestPromise(id) {
        return new Promise(function(resolve, reject) {
            api.delete('hotels/'+id).then(({ data }) => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
        });
    }

}

export default RemoveItems;