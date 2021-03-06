import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render () {
        let summary = <Redirect to='/' />;

        if (this.props.ingr) {
            const purchasedRedirect = this.props.purchased ?
                    <Redirect to='/' /> : null;

            summary = (
                <div>
                    {purchasedRedirect}

                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.props.ingr} />;

                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return (
            <div>
                {summary}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingr: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);
