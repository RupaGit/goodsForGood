import React,{Component} from 'react'
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
} from 'semantic-ui-react'
import './style.css';


class Footer extends Component {
  render() {
    const { mobile, isLoggedIn } = this.props;
    return (
      <div className="footer" >
        <div class="ui fixed bottom sticky" style={{width:"100vw",background:"white"}} id="footerShadow">
       {/* <Divider inverted /> */}
      <Container textAlign='center' style={{paddingTop:'15px'}}>
        <Grid divided inverted stackable>
            <Grid.Column width={7}>
                 </Grid.Column>
        </Grid>
        <Image centered size='mini' src=' favicon.ico' />
        <List  horizontal inverted divided link size='small'>
          <List.Item  as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item  as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item  as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item  as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
      </div>
      </div>
    )
  }
}
export default Footer