import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './style.css';
import GFGContainer from "../GFGContainer/index";


class HomepageHeading extends Component {

    render() {
      const { mobile, isLoggedIn } = this.props;
      const slides = [
          {
              title: 'Goods for Good',
              description:
                  'Trade The Goods You Need With Your Local Community',
              button: 'Read More',
              image: 'https://images.unsplash.com/photo-1550505393-2c5dbec5de87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
              user: 'GoodsforGood',
              userProfile: 'favicon.ico'
          },
          {
              title: 'Tortor Dapibus Commodo Aenean Quam',
              description:
                  'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
              button: 'Discover',
              image: 'https://i.imgur.com/DCdBXcq.jpg',
              user: 'GoodsforGood',
              userProfile: 'favicon.ico'
          },
          {
              title: 'Meet The Team',
              names:'Swarupa Popuri, Guy Yaffe Ermoza, and Javits Arias',
                description:'are graduates of the Columbia Engineering Full Stack Software Engineering Bootcamp. They come from different backgrounds but wanted to create an app that will bring people together to help each other in difficult times.',
              button: 'Add them on LinkedIn to learn more!',
              image: 'https://i.imgur.com/DvmN8Hx.jpg',
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
                style={{ background: `url('${item.image}') no-repeat center center` }}
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
      )}
        }

  export default HomepageHeading