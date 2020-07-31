import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './style.css';

class HomepageHeading extends Component {

    render() {
        const slides = [
            {
                title: 'Goods for Good',
                description:
                    'Trade The Goods You Need With Your Local Community',
                button: 'Read More',
                image: 'https://images.unsplash.com/photo-1584472376859-889e77a8ccac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
                user: 'GoodsforGood',
                userProfile: 'favicon.ico'
            },
            {
                title: 'Inspiration',
                description:
                    'The global pandemic of 2020 that affected billions of people all over the world, created a situation where locating and purchasing essential items became difficult and dangerous. With Goods for Good, we wanted to create an app to make it easy and safe to find essential items in your local community and trade with others. Goods for Good uses your location to show you local trades and lets you create and post your own trades. We hope you enjoy it and find the goods you need!',
                button: 'Discover',
                image: 'https://images.unsplash.com/photo-1550505393-2c5dbec5de87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                user: 'GoodsforGood',
                userProfile: 'favicon.ico'
            },
            {
                title: 'Meet The Team',
                names: 'Swarupa Popuri, Guy Yaffe Ermoza, and Javits Arias',
                description: 'are graduates of the Columbia Engineering Full Stack Software Engineering Bootcamp. They come from different backgrounds but wanted to create an app that will bring people together to help each other in difficult times.',
                button: 'Add them on LinkedIn to learn more!',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
                user: 'GoodsforGood',
                userProfile: 'favicon.ico'
            }
        ];
        return (
            <Slider className="slider-wrapper">
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center`, height: '100%' }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.names}</p>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                        <section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        )
    }
}

export default HomepageHeading