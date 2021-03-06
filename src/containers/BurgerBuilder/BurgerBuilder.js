import React, { Component } from 'react'
import BuildControl from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import OrderSummary from '../../components/Burger/OrderSumary/OrderSumary'
import Hoc from '../../hoc/Hoc'
import Modal from './../../components/UI/Modal/Modal'
import axios from './../../axios-order'
import Spinner from './../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandle'

const PRICES = {
  salad: 1,
  cheese: 2,
  bacon: 3,
  meat: 6,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 6,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    console.log(this.props)
    axios
      .get('/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data })
      })
      .catch((error) => {
        this.setState({ error: true })
      })
  }

  updatePurchaseble = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    updatedIngredients[type] = updatedCount
    const priceAdd = PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAdd

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseble(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    updatedIngredients[type] = updatedCount
    const priceRemove = PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceRemove

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    this.updatePurchaseble(updatedIngredients)
  }

  purchaseHanler = () => {
    this.setState({ purchasing: true })
  }

  purchaseContinueHanler = () => {
    const queryParams = []
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      )
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null

    let burger = this.state.error ? (
      <p>Ingredients cannot be loaded</p>
    ) : (
      <Spinner />
    )

    if (this.state.ingredients) {
      burger = (
        <Hoc>
          <Burger ingredients={this.state.ingredients} />
          <BuildControl
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabled={this.disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHanler}
          />
        </Hoc>
      )
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseContinue={this.purchaseContinueHanler}
          purchaseCancel={this.purchaseCancelHandler}
          price={this.state.totalPrice}
        />
      )
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Hoc>
        <Modal
          showModal={this.state.purchasing}
          hideModal={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Hoc>
    )
  }
}

export default ErrorHandler(BurgerBuilder, axios)
