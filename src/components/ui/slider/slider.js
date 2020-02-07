import React from 'react';
import './slider.scss';
const Slider = (props) => {
    const slider = React.createRef();
    return (
        <div class="slidecontainer">
            <input type="range" id={props.name} value={undefined} name={props.name} class="slider" ref={slider} 
                min={props.min} max={props.max} onChange={props.handleChange } onChange={(e) => (e.target.parentNode.getElementsByClassName('max-value')[0].innerHTML = e.target.value)}/>
            <div>0 to <span class="max-value">{props.value}</span></div>
        </div>
    )
}
export default Slider;