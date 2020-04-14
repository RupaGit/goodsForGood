import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'
import API from '../../utils/API'


class GFGEditTradeModal extends React.Component {
    state = { 
        open: false,
        reqItem: this.props.tradeToEdit.reqItem, 
        reqItemQty: this.props.tradeToEdit.reqItemQty, 
        availItem: this.props.tradeToEdit.availItem, 
        availItemQty: this.props.tradeToEdit.availItemQty }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    handleInputChange = (event) => {
        const { name, value, } = event.target;
        this.setState({
            [name]: value,
        });
        // console.log(this.state);
    };
    
    editTrade = (tradeId) => {
        const tradeToEdit = {
            reqItem: this.state.reqItem,
            reqItemQty: this.state.reqItemQty,
            availItem: this.state.availItem,
            availItemQty: this.state.availItemQty
                  }
            API.editUserTradeByID(tradeToEdit, tradeId)
            .then((res) => {
                console.log("editUserTradeByID",res);
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        const { open } = this.state
        const { tradeToEdit } = this.props
        console.log("State of the componenet is ", this.state);

        console.log("In modal componenet props are",this.props);
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
                        <Button type='submit' onClick={()=>this.editTrade(tradeToEdit._id)}>Edit Trade</Button>
                        {/* onClick={this.close} */}
                    </Form>
                </Modal.Content>
            </Modal>)
    }
}

export default GFGEditTradeModal