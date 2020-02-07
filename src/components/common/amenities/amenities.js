import React from 'react';
import './amenities.scss';
import { FiltersData } from '../../../data/filters-data';
export const Amenities = ({amenities}) => {    
    const amenData = FiltersData.amenities;
    return (
        <div>
            {
                amenities.map((data, i) => {
                    const amenObj = amenData.find(d => data === d.value)
                    return <span key={i} class="amenities"><i class={'fa fa-' + amenObj.iconName +' amen-icon'}></i><span class="amen-text">{amenObj.label}</span></span>
                })
            }
        </div>
    )
}