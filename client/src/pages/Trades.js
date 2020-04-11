import React, { Component } from "react";
import MyTradeCard from "../components/GFGTradeCard/index"
import { Card, Container } from "semantic-ui-react";


export default class Trades extends Component {
    render() {
        const { username, itemToTrade, quantity1, itemTradingFor, quantity2 } = this.props;
        const testTrades = [
            { myname: 'javits', item1: 'toilet paper', qty1: 5, item2: 'spoons', qty2: 12 },
            { myname: 'jimbo', item1: 'sugar', qty1: 5, item2: 'spoons', qty2: 12 },
            { myname: 'bobby', item1: 'soap bars', qty1: 5, item2: 'spoons', qty2: 12 },
            { myname: 'rupa', item1: 'light bulbs', qty1: 5, item2: 'spoons', qty2: 12 },
            { myname: 'guy', item1: 'toast', qty1: 5, item2: 'spoons', qty2: 12 },
            { myname: 'anna', item1: 'pickles', qty1: 5, item2: 'spoons', qty2: 12 }
        ]
        return (
            <Container style={{ marginTop: '25px' }}>
                <Card.Group centered>
                    {testTrades.map((newTrade) =>
                        <MyTradeCard
                            key={newTrade.myname} // this is just a place holder for the unique ID
                            username={newTrade.myname}
                            itemToTrade={newTrade.item1}
                            quantity1={newTrade.qty1}
                            itemTradingFor={newTrade.item2}
                            quantity2={newTrade.qty2}
                        />
                    )}

                </Card.Group>

            </Container>
        )
    }
}
