import React from 'react';
import './occupency.scss';
const Occupency = ({ noOfPersons }) => {
    return (
        <span class="occupency-icons">
            {Array(noOfPersons).fill(1).map((data, index) => (
                <i class="fa fa-male" key={index}></i>
            ))}
        </span>
        
    )
}

export default Occupency;