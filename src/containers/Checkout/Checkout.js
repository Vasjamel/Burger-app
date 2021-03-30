import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import Contacts from './Contacts/Contacts'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }
    this.setState({ ingredients: ingredients })
  }

  checkoutContinue = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  checkoutCancel = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancel}
          checkoutContinue={this.checkoutContinue}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={() => <Contacts ingredients={this.state.ingredients} />}
        />
      </div>
    )
  }
}

export default Checkout
