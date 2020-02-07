import React, { Component } from 'react';
import './add-hotel.scss';
import { FiltersData } from '../../../../data/filters-data';
import { Input } from '../../../ui/input/input';
import { Select } from '../../../ui/select/select';
import { Checkbox } from '../../../ui/checkbox/checkbox';
import { api } from '../../../../api/api';
import { uuidv4 } from '../../../../utils/utils';
class AddHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            distance_to_venue: 0,
            price_category: '',
            amenities: [],
            rating: -1,
            images: [],
            roomAdded: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        if(this.state.roomAdded) {
            return (
                <div class="box" id="hotel-added-message">
                    <h3>Please add rooms for <b>{this.state.name}</b></h3>
                </div>
            )
        } else {
            return (
                <div class="box">
                    <h2>Add a new Hotel</h2>
                    <form onSubmit={this.handleFormSubmit}>
                        <div id="addHotelsForm">
                            <Input type={'text'}
                                title={'Name'}
                                name={'name'}
                                placeholder={'Hotel Name'}
                                handleChange={this.handleInputChange}
                                required={true}
                            />
                            <Input type={'textarea'}
                                title={'Description'}
                                name={'description'}
                                min={50}
                                placeholder={'Hotel Description'}
                                handleChange={this.handleInputChange}
                                required={true}
                            />
                            <Input type={'number'}
                                title={'Distance'}
                                name={'distance_to_venue'}
                                placeholder={'Distance'}
                                handleChange={this.handleInputChange}
                                required={true}
                            />
                            <Select
                                options={FiltersData.price_category}
                                title={'Price Category'}
                                name={'price_category'}
                                handleChange={this.handleInputChange}
                                required={true}
                            />
                            <Checkbox
                                title={'Amenities'}
                                name={'amenities'}
                                options={FiltersData.amenities}
                                handleChange={this.handleInputChange}
                            />
                        </div>
                        <div id="add-hotel-btn">
                            <button type="submit" class="button button-1">Add Hotel</button>
                        </div>
                    </form>
                </div>
            );
        }
    }

    handleInputChange(event) {
        const type = event.target.type;
        const name = event.target.name;
        switch (type) {
            case 'text':
            case 'number':
            case 'textarea':
            case 'select-one':
                this.setState({
                    [name]: event.target.value
                });
                break;
            case 'checkbox':
                let data = [...this.state.amenities];
                if (event.target.checked) {
                    data.push(name);
                } else {
                    const index = data.findIndex(data => data === name);
                    data.splice(index, 1);
                }
                this.setState({
                    amenities: data
                });
                break;
            default:
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const newHotel = this.state;
        newHotel.id = uuidv4();
        newHotel.images = [
            "http://via.placeholder.com/140x100",
            "http://via.placeholder.com/100x140",
            "http://via.placeholder.com/140x140"
        ];
        api.post('hotels', newHotel).then(({ data }) => {
            alert("Hotel added successfully!");
            this.props.onHotelAdded(data);
            this.setState({
                ...this.state,
                roomAdded: true
            });
        })
    }

}

export default AddHotel;