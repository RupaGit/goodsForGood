import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class Trademodal extends Component {

    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state
        const { firstButton, innerDescription } = this.props

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size='small'
                trigger={
                    <Button primary icon>
                        {firstButton} <Icon name='right chevron' />
                    </Button>
                }
            >
                {/* <Modal.Header>Modal #2</Modal.Header> */}
                <Modal.Content>
                    <p>{innerDescription}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button icon='check' content='All Done' onClick={this.close} />
                </Modal.Actions>
            </Modal>
        )
    }
}

const MyModal = (props) => (
    <Modal trigger={props.children}>
        {/* <Modal.Header>Modal #1</Modal.Header> */}
        <Modal.Content image>
            {/* <div className='image'>
                <Icon name='right arrow' />
            </div> */}
            <Modal.Description>
                <p>{props.modalDescription1}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Trademodal
                innerDescription={props.modalDescription2}
                firstButton={props.buttonMessage}
            />
        </Modal.Actions>
    </Modal>
)

export default MyModal