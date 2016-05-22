'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class MarkDownEditor extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 5,
            borderStyle: 'dashed',
            padding: 5
          }}>
            <TextInput multiline={true}  style={{borderWidth: 0, borderStyle: null}}/>
        </View>
        <View style={{flexDirection: 'row', position: 'relative', bottom: 0, left: 0}}>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='bold' size={25} />
             </TouchableOpacity>            
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='italic' size={25} />
             </TouchableOpacity>            
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='underline' size={25} />
             </TouchableOpacity>           
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='list' size={25} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='eraser' size={25} />
             </TouchableOpacity>             
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='header' size={25} />
             </TouchableOpacity>             
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='strikethrough' size={25} />
             </TouchableOpacity>            
             <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={() => this.tabColor(1)}>
                 <Icon name='list' size={25} />
             </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    toolbar:{
        flex: 1
    },
    toolItem:{
        marginLeft: 5,
        marginRight: 5
    }
});


export default MarkDownEditor;