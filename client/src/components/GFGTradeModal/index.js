import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'
import API from '../../utils/API'


class MyTradeModal extends React.Component {
    state = { open: false, reqItem: "", reqItemQty: 0, availItem: "", availItemQty: 0 }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        // console.log(this.state);
    };

    onClick = (event) => {
        const trade = {
            reqItem: this.state.reqItem,
            reqItemQty: this.state.reqItemQty,
            availItem: this.state.availItem,
            availItemQty: this.state.availItemQty,
            zipCode: this.props.zipCode,
            userId: this.props.userId
        }
        API.createTrade(trade)
            .then(res => {
                console.log(res.data)
                this.props.loadUserTrades()
                this.close()
            })
            .catch(err => console.log(err))
    }
    render() {
        const { open } = this.state
        console.log("Zip code of user ", this.props.zipCode)
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
                            <Form.Input onChange={this.handleInputChange} value={this.state.reqItem} name="reqItem" fluid label='Enter the item you want to trade' placeholder='Item you want' />
                            <Form.Input onChange={this.handleInputChange} value={this.state.reqItemQty} name="reqItemQty" fluid label='Quantity of the item you want to trade' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input onChange={this.handleInputChange} value={this.state.availItem} name="availItem" fluid label='Enter the item you are trading for' placeholder='Item you want' />
                            <Form.Input onChange={this.handleInputChange} value={this.state.availItemQty} name="availItemQty" fluid label='Quantity of the item you are trading for' />
                        </Form.Group>
                        <Button type='submit' onClick={this.onClick}>Create Trade</Button>
                        {/* onClick={this.close} */}
                    </Form>
                </Modal.Content>
            </Modal>)
    }
}

export default MyTradeModal