import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './Contacts.module.css'

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
    console.log(this.props.ingredients)
  }

  render() {
    return (
      <div className={classes.Contacts}>
        <h4>Please, enter Your Contact Data</h4>
        <form>
          <input type='text' name='name' placeholder='Your Name' />
          <input type='email' name='email' placeholder='Your Email' />
          <input type='text' name='street' placeholder='Street' />
          <input type='text' name='postal' placeholder='Postal code' />
          <Button buttonType='Success' clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    )
  }
}

export default Contacts
