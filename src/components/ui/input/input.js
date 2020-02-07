import React from 'react';
export const Input = (props) => {
    return (
        <div class="form-group">
            <label htmlFor={props.name} class="form-label">{props.title}</label>
            {props.type !== 'textarea' && <input
                class="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                {...( props.type === 'number' && { min: props.min, max: props.max} ) }
                {...( props.type === 'text' && { minlength: props.min, maxlength: props.max} ) }
                onChange={props.handleChange}
                placeholder={props.placeholder}
                required={props.required || false}    
            />
            }
            {props.type === 'textarea' && <textarea
                class="form-input"
                id={props.name}
                name={props.name}
                value={props.value}
                // minlength={props.min}
                // maxlength={props.max}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                required={props.required || false}    
            />
            }
        </div>
    )
}