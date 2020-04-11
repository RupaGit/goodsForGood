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
import MyTradeModal from '../GFGModal/index'

class HomepageHeading extends Component {

    render() {
      const { mobile, isLoggedIn } = this.props;
      return (
        <Container text>
          <Header
            as='h1'
            content='Goods for Good'
            inverted
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile ? '1.5em' : '3em',
            }}
          />
          <Header
            as='h2'
            content='Trade The Goods You Need With Your Local Community.'
            inverted
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
  
          <MyTradeModal >
            {isLoggedIn ? (<Button primary size='huge' >
  
              Start Trading
              <Icon name='right arrow' />
            </Button>) : null}
          </MyTradeModal>
        </Container>)
    }
  }
  export default HomepageHeading