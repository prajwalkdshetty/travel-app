import React from 'react';
export const Select = (props) => {
    return (
        <div class="form-group">
            <label htmlFor={props.name} class="form-label">{props.title}</label>
            <select
                class="form-select"
                id={props.name}
                name={props.name}
                value={props.selected}
                onChange={props.handleChange}
                required={props.required || false}    
            >
                <option value="">Select</option>
                {
                    props.options.map((data, index) => (
                        <option key={index} value={data.value}>{data.label}</option>
                    ))}
            </select>
        </div>
    )
}