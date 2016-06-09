'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  RefreshControl,
  Text,
} from 'react-native';

import {fetchSpotList} from '../actions/spot';
import SpotCard from '../components/SpotCard';

class SpotGrid extends Component {

    constructor(props) {
      super(props);

      this.state = {};
    }

    shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    componentDidMount() {
        this.refreshSpotList();
    }

    renderSpots(start, end) {
        // const aas = [1,22,2,2,3,2]
        const {spot} = this.props;
        const result = [];

        const spotCards = spot.dataList.map((spot, index) => {
            var heights = [400, 380, 350, 300];

            let randomHeight = Math.floor(Math.random() * (4 - 0));
            let height = this.shuffle(heights)[randomHeight];

          return (
              <SpotCard key={index} style={{marginTop: 6, height: height}} />
          );
        });
        return spotCards;
    }

    renderContent(){
        if (this.props.spot.isLoading) {
            return ( 
             <View>
                 <Text>正在加载中....</Text>
             </View>
             );
        } else {
            return (
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View style={{width: 700, flex: 1, padding: 5}}>
                        {this.renderSpots(0, 0)}
                    </View>

                      <View style={{width: 700, flex: 1, padding: 5}}>
                        {this.renderSpots(0, 0)}
                      </View>
                </View>
            );
        }
    }

    refreshSpotList() {
        const {dispatch} = this.props;
        dispatch(fetchSpotList());
    }

  render() {
    return (
        <ScrollView style={{flex: 1}}
            refreshControl={
              <RefreshControl
                refreshing={this.props.spot.isLoading}
                onRefresh={this.refreshSpotList.bind(this)}
                tintColor="#ff0000"
                title="Loading..."
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }
        >
            {this.renderContent()}
        </ScrollView>
    );
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