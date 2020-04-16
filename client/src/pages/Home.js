import React, { Component } from 'react'
import {
  Responsive,
  Segment,
} from 'semantic-ui-react'
import HomepageHeading from '../components/GFGHomePage/index'

// import SliderComponant from '../components/GFG-slider/index'

import Footer from '../components/GFGFooter/index'

class DesktopContainer extends Component {
  state = {}
  
  render() {
    return (
      <div>
       {/* <Segment  inverted textAlign='center'style={{ minHeight: 700, padding: '0em 0em' }} vertical> */}
      <HomepageHeading isLoggedIn={this.props.isLoggedIn}/>
        {/* <Footer></Footer> */}
       {/* </Segment> */}
      </div>
    )
  }
}
export default DesktopContainer;