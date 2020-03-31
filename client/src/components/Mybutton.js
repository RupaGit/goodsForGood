import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

export default class Mybutton extends Component {
    render() {
        return (
            <Button>
                {this.props.children}
            </Button>
        )
    }
}
