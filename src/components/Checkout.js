import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeApiKey = "pk_test_VZzNAtT2avTk4BW59v0fU0sf";
const checkoutUrl = "/charge";

class Checkout extends Component {

    handleToken = (token) => {
        console.log(token);
        fetch(checkoutUrl, {
            method: "POST",
            body: JSON.stringify(token),
            mode: "cors"
        })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <StripeCheckout 
                stripeKey={stripeApiKey}
                token={this.handleToken}
                name="会費"
                amount={1000}
                panelLabel="{{amount}}支払う"
                currency="JPY"
                locale="ja"
            />
        );
    }
}

export default Checkout;
