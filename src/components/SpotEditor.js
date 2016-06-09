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

import Icon from 'react-native-vector-icons/EvilIcons';

import AttachesEditor from '../components/AttachesEditor'
import EditorNavBar from '../components/EditorNavBar'

import {fetchLocation} from '../actions/spot';

export default class SpotEditor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const {dispatch} = this.props;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("current position:" + position);
          dispatch(fetchLocation(position));
        },
        (error) => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
      this.watchID = navigator.geolocation.watchPosition((lastPosition) => {
        console.log("lastPosition:" + lastPosition)
        // dispatch(fetchLocation(lastPosition));
      });
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

    switchCover(){
      debugger;
      this.refs.spotCover;
    }

  render() {
    return (
        <View style={{flex: 1}}>
            <EditorNavBar {...this.props}/>
            <View style={{ height: 200}} >
                <Image
                  ref="spotCover"
                  resizeMode="stretch"
                  style={{width: Dimensions.get('window').width, height: 200}}
                  source={require('../images/default_cover.jpg')}
                >
                    <View style={{paddingHorizontal: 10, height: 170}} >
                        <View style={{borderBottomColor: '#8B7E66', borderBottomWidth: 1, alignItems: 'flex-end', paddingBottom: 0}}>
                            <TextInput style={{flex:1, height: 40, paddingBottom: 0}} placeholder="写个标题吧" underlineColorAndroid= "transparent"/>
                        </View>
                        <View style={{}}>
                            <TextInput style={{height: 120}} placeholder="您还可以写个简述" underlineColorAndroid= "transparent"/>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' ,backgroundColor: '#BEBEBE', borderRadius: 5, width: 150,height: 18, position: 'relative', bottom: 12}} >
                          <Icon name="location" style={{marginTop: 2}}/>
                          <Text style={{fontSize: 10, width: 130}} numberOfLines={1}>{this.props.location.regeocode.formatted_address}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row',backgroundColor: 'white', opacity: 0.5, height: 30}}>
                       <TouchableOpacity activeOpacity={0.1} onPress ={() => this.tabColor(1)} style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                            <Icon name='user' size={25} style={{color: 'black'}} />
                            <Text style={{color: 'black'}} >亲人</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={() => this.switchCover(2)}  style={{flexDirection: 'row',  alignItems: 'center'}}>
                          <Icon name='tag' size={25}  style={{color: 'black'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={() => this.switchCover(2)}  style={{flexDirection: 'row',  alignItems: 'center'}}>
                            <Icon name='image' size={25}  style={{color: 'black'}} />
                        </TouchableOpacity>
                    </View>
                </Image>
                </View>
            
            <AttachesEditor {...this.props} style={{flex: 1, backgroundColor: 'white'}} />
        </View>
    );
  }
}

