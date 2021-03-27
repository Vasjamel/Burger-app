import React, { Component } from 'react'
import Modal from './../components/UI/Modal/Modal'
import Hoc from './Hoc'

const ErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null })
        return req
      })
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error })
        }
      )
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Hoc>
          <Modal
            showModal={this.state.error}
            hideModal={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Hoc>
      )
    }
  }
}
export default ErrorHandler
