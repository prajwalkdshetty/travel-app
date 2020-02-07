import React, { Component } from 'react';
import './carousel.scss';

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        }
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }
    render() {
        const carousalData = this.props.carousalData;
        return (
            <div ref="slideContainer" class="carousel">
                <div class="dots">
                    <span class="dot" onClick={() => this.currentSlide(1)}></span>
                    <span class="dot" onClick={() => this.currentSlide(2)}></span>
                    <span class="dot" onClick={() => this.currentSlide(3)}></span>
                </div>
                <div class="slideshow-container">
                    {carousalData.map((data, index) => (
                        <div class="mySlides fade" key={index}>
                            <img class="img" src={data} alt="img" />
                            {/* <img class="img" src="../../../img/img.jpg" alt="img" /> */}
                            <div class="img-overlay">
                                <div class="number-text">{index + 1} / {carousalData.length}</div>
                                <div class="text">{data}</div>
                            </div>
                        </div>
                    ))}
                    <a class="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a class="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }

    plusSlides(n) {

        const st = this.state.slideIndex + n;
        this.setState({
            slideIndex: st
        });
        this.showSlides(st);
    }

    currentSlide(n) {
        this.setState({
            slideIndex: n
        });
        this.showSlides(n);
    }

    showSlides(n) {
        let i;
        const slideContainer = this.refs.slideContainer;
        const slides = slideContainer.querySelectorAll(".mySlides");
        const dots = slideContainer.querySelectorAll(".dot");
        let slideIndex = n;
        if (n > slides.length) {
            this.setState({
                slideIndex: 1
            });
            slideIndex = 1
        }
        if (n < 1) {
            this.setState({
                slideIndex: slides.length
            });
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}

export default Carousel;