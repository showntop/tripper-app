'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import {fetchSpotList} from '../actions/spot';
import SpotCard from '../components/SpotCard';

class SpotGrid extends Component {

    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(fetchSpotList())
    }

    renderSpots(start, end) {
        const aas = [1,22,2,2,3,2]
        const result = [];

        const spotCards = aas.map((spot, index) => {
          return (
              <SpotCard key={index}/>
          );
        });
        debugger
        return spotCards;
    }

  render() {
    if (this.props.isLoading) {
        <View>
        <Text>正在加载中....</Text>
        </View>
    } else {
        return (
                <View style={styles.wrapper}>

                    <View style={styles.row}>
                    {this.renderSpots(0, 0)}
                    </View>

                      <View style={[styles.row, {marginRight: 0}]}>
                      {this.renderSpots(0, 0)}
                      </View>
                </View>
        );
    }
  }
}

const styles = StyleSheet.create({
    scrollStyle: {
           marginTop: 17
       },
       wrapper: {
            flex: 1,
           flexDirection: 'row',
           flexWrap: 'wrap',
           marginRight: 5,
           marginLeft: 5
       },
     row: {
         flex: 1,
         flexDirection: 'column',
         flexWrap: 'wrap',
         width: 155,
         marginRight: 5
     }
});


export default SpotGrid;