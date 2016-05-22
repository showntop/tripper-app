import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import MarkDownEditor from '../components/MarkDownEditor'
import EditorToolBar from '../components/EditorToolBar'

export default class SpotEditor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{flex: 1}}>
            <EditorToolBar {...this.props}/>
            <TextInput {...this.props} style={{height: 50}} placeholder="写个标题吧"/>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
               <TouchableOpacity activeOpacity={0.1} onPress ={() => this.tabColor(1)} style={{flexDirection: 'row', flex: 2, marginLeft: 5, marginRight: 5}}>
                    <Icon name='archive' size={25} />
                    <Text>随记</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => this.tabColor(2)}  style={{marginLeft: 5, marginRight: 5}}>
                    <Icon name='tags' size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress ={() => this.tabColor(2)}  style={{marginLeft: 5, marginRight: 5}}>
                    <Icon name='street-view' size={25} />
                </TouchableOpacity>
            </View>
            <MarkDownEditor {...this.props}/>
        </View>
    );
  }
}

