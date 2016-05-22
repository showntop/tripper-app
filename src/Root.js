'use strict';
import React, { Component, PropTypes } from 'react';

import { Provider } from "react-redux"

import configureStore from "./store/configureStore"

import App from "./containers/App"

class Root extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

      render() {
        //need to fetch user and env before render the launching view
        return (
            <Provider store={ this.state.store }>
                <App/>
            </Provider>
        );
      }
}

export default Root;