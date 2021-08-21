import React, {Component} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

/*
    There is not API to get stories format trought Unsplash.
    Created a static section.
*/
const storiescounter = 5;
let stories = Array.from(Array(storiescounter).keys());

class Stories extends Component {
    render() {
        var renderedStories = stories.map(index => 
            <SwiperSlide className="story" key={index}>
                <img src={process.env.PUBLIC_URL + '/media/images/profilo_' + (index + 1) + '.png'} alt={'Name ' + (index + 1)}/>
                <p>Name {index + 1}</p>
            </SwiperSlide>
        );

        return (
            <section className="contain stories">
                <Swiper
                    spaceBetween = {30}
                    slidesPerView = {5}
                    breakpoints = {
                        {
                            991: {
                                slidesPerView: 10
                            }
                        }
                    }
                >
                    {renderedStories}
                </Swiper>
            </section>
        );
    }
}

export default Stories;