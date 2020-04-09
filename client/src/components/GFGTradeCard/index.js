import React from 'react'
import { Card } from 'semantic-ui-react'

class MyTradeCard extends React.Component {
    render() {
        const { username, itemToTrade, itemTradingFor, quantity1, quantity2 } = this.props;
        return (
            <Card>
                <Card.Content header={username} />
                <Card.Content description={itemToTrade} />
                <Card.Content description>
                    Quantity: {quantity1}
                </Card.Content>
                <Card.Content description={itemTradingFor} />
                <Card.Content description>
                    Quantity: {quantity2}
                </Card.Content>
            </Card>
        )
    }
}

export default MyTradeCard