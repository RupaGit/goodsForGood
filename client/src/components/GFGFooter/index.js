import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'
import './style.css';


class Footer extends Component {
  render() {
    const { mobile, isLoggedIn } = this.props;
    const contextRef = createRef()
    return (
      // <div className="footer" >
      // <div class="ui fixed bottom sticky" style={{width:"100vw" ,flexDirection:'column',background:"white"}} id="footerShadow">
      //  {/* <Divider inverted /> */}
      //  <Container textAlign='center' style={{paddingTop:'15px',background:'white',width:'100wh'}}>
      //   <Grid divided inverted stackable>
      //       <Grid.Column width={7}>
      //            </Grid.Column>
      //   </Grid>
      //   <Image centered size='mini' src=' favicon.ico' />
      //   <List  horizontal inverted divided link size='small'>
      //     <List.Item  as='a' href='#'>
      //       Site Map
      //     </List.Item>
      //     <List.Item  as='a' href='#'>
      //       Contact Us
      //     </List.Item>
      //     <List.Item  as='a' href='#'>
      //       Terms and Conditions
      //     </List.Item>
      //     <List.Item  as='a' href='#'>
      //       Privacy Policy
      //     </List.Item>
      //   </List>
      //   </Container>
      //   </div>
      // </div>
            <div className="footer" >
            <Sticky context={this.contextRef} pushing>
            <Container id="footerShadow"  textAlign='center' style={{paddingTop: '15px', background: 'white', width: '100wh'}}>
              <Image centered size='mini' src=' favicon.ico' />
              <Grid divided inverted stackable>
                <Grid.Column width={8}>
                </Grid.Column>
              </Grid>
              <Ref innerRef={this.contextRef}>
              <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                  Site Map
          </List.Item>
                <List.Item as='a' href='#'>
                  Contact Us
          </List.Item>
                <List.Item as='a' href='#'>
                  Terms and Conditions
         </List.Item>
                <List.Item as='a' href='#'>
                  Privacy Policy
         </List.Item>
              </List>
      </Ref> 
    </Container>
    </Sticky>
  </div>
  
      )
  }
}
export default Footer