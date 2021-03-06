import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './Contacts.module.css'
import axios from './../../../axios-order'
import Spinner from '../../../components/UI/Spinner/Spinner'

class Contacts extends Component {
  state = {
    name: '',
    email: '',
    address: {
      city: '',
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    console.log(this.props.ingredients)
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Vasyl Meleshyn',
        street: 'Nalyvaika 13',
        city: 'Lviv',
        country: 'Ukraine',
        email: 'vasyl@gmail.com',
      },
      deliveryMethod: 'fast',
    }

    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState({ loading: false })
      })
  }

  render() {
    let form = (
      <form>
        <input type='text' name='name' placeholder='Your Name' />
        <input type='email' name='email' placeholder='Your Email' />
        <input type='text' name='street' placeholder='Street' />
        <input type='text' name='postal' placeholder='Postal code' />
        <Button buttonType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={classes.Contacts}>
        <h4>Please, enter Your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default Contacts
