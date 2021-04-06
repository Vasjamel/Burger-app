import React, { Component } from 'react'
import axios from '../../axios-order'
import Order from '../../components/CheckoutSummary/Order/Order'

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

export default Orders
