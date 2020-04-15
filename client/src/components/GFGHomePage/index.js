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
              image: 'https://i.imgur.com/ZXBtVw7.jpg',
              user: 'GoodsforGood',
              userProfile: 'favicon.ico'
          },
          {
              title: 'Tortor Dapibus Commodo Aenean Quam',
              description:
                  'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
              button: 'Discover',
              image: 'https://i.imgur.com/DCdBXcq.jpg',
              user: 'Erich Behrens',
              userProfile: 'https://i.imgur.com/0Clfnu7.png'
          },
          {
              title: 'Phasellus volutpat metus',
              description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
              button: 'Buy now',
              image: 'https://i.imgur.com/DvmN8Hx.jpg',
              user: 'Bruno Vizovskyy',
              userProfile: 'https://i.imgur.com/4KeKvtH.png'
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