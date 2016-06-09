import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import AttachesEditor from '../components/AttachesEditor'
import EditorNavBar from '../components/EditorNavBar'

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
            <EditorNavBar/>
            <View style={{ height: 200}} >
                <Image 
                  resizeMode="stretch"
                  style={{flex: 1, width: Dimensions.get('window').width, justifyContent: 'space-between'}}
                  source={require('../images/default_cover.jpg')}
                >
                    <View style={{paddingHorizontal: 10}} >
                        <View style={{borderBottomColor: '#8B7E66', borderBottomWidth: 1, alignItems: 'flex-end', paddingBottom: 0}}>
                            <TextInput style={{flex:1, height: 40, paddingBottom: 0}} placeholder="写个标题吧" underlineColorAndroid= "transparent"/>
                        </View>
                        <View style={{}}>
                            <TextInput style={{height: 120}} placeholder="您还可以写个简述" underlineColorAndroid= "transparent"/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'flex-end', backgroundColor: 'white', opacity: 0.5}}>
                       <TouchableOpacity activeOpacity={0.1} onPress ={() => this.tabColor(1)} style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                            <Icon name='archive' size={25} style={{color: 'black'}} />
                            <Text style={{color: 'black'}} >亲人</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={() => this.tabColor(2)}  style={{}}>
                            <Icon name='tags' size={25}  style={{color: 'black'}} />
                        </TouchableOpacity>
                    </View>
                </Image>
                </View>
            
            <AttachesEditor {...this.props} style={{flex: 1, backgroundColor: 'white'}} />
        </View>
    );
  }
}

