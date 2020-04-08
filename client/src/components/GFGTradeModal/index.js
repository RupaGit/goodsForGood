import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'


class MyTradeModal extends React.Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {

        const { open } = this.state

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                trigger={this.props.children}
            >
                <Modal.Content >
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Enter the item you want to trade' placeholder='Item you want' />
                            <Form.Input fluid label='Quantity of the item you want to trade' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='Enter the item you are trading for' placeholder='Item you want' />
                            <Form.Input fluid label='Quantity of the item you are trading for' />
                        </Form.Group>
                        <Button onClick={this.close} type='submit'>Create Trade</Button>
                    </Form>
                </Modal.Content>
            </Modal>)
    }
}

export default MyTradeModal