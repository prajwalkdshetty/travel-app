import React from 'react';
import './checkbox.scss';

export const Checkbox = (props) => {

    return (<div class="form-group">
        {!props.hideLabel && <label htmlFor={props.title} className="form-label">{props.title}</label>}
        <div className="checkbox-group">
            {props.options && props.options.map((option, index) => {
                return (
                    <label key={index} class="checkbox-label">
                        <input
                            class="form-checkbox"
                            id={option.value}
                            name={option.value}
                            onChange={props.handleChange}
                            checked={props.selectedOptions && props.selectedOptions.indexOf(option.value) > -1}
                            type="checkbox" 
                            /> 
                            {option.label}
                    </label>
                );
            })}
        </div>
    </div>
    );

}









// export const Checkbox = (props) => {
//     return (
//         <label class="checkbox"><input type="checkbox" />{props.label}</label>
//     )
// }



