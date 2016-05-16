'use strict';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Provider } from "react-redux"

import configureStore from "./store/configureStore"

import MainScreen from "./MainScreen"

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
                <MainScreen/>
            </Provider>
        );
      }
}

const styles = StyleSheet.create({

});


export default Root;