import React, { Component } from 'react'
import {
  Responsive,
  Segment,
} from 'semantic-ui-react'
import HomepageHeading from '../components/GFGHomePage/index'
import Footer from '../components/GFGFooter/index'

class DesktopContainer extends Component {
  state = {}
  
  render() {
    return (
      <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical>
      <HomepageHeading isLoggedIn={this.props.isLoggedIn}/>
        <Footer></Footer>
      </Segment>
    )
  }
}
export default DesktopContainer;