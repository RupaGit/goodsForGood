import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default class Myform extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
