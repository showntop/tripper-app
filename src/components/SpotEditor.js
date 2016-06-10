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

var ImagePickerManager = require('NativeModules').ImagePickerManager;

export default class SpotEditor extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      coverSource: null
    }
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
        dispatch(fetchLocation(lastPosition));
      });
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }

    selectTag(){
      alert('hi');
    }

    selectCover(){
      var options = {
        title: '选择封面', // specify null or empty string to remove the title
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
        chooseFromLibraryButtonTitle: '从相册中选择', // specify null or empty string to remove this button
        customButtons: {
          // 'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
        },
        cameraType: 'front', // 'front' or 'back'
        mediaType: 'photo', // 'photo' or 'video'
        videoQuality: 'high', // 'low', 'medium', or 'high'
        durationLimit: 10, // video recording max time in seconds
        maxWidth: 100, // photos only
        maxHeight: 100, // photos only
        aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
        aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
        quality: 0.2, // 0 to 1, photos only
        angle: 0, // android only, photos only
        allowsEditing: true, // Built in functionality to resize/reposition the image after selection
        noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
        storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
          skipBackup: true, // ios only - image will NOT be backed up to icloud
          path: 'images' // ios only - will save image at /Documents/images rather than the root
        }
      };

      /**
      * The first arg will be the options object for customization, the second is
      * your callback which sends object: response.
      *
      * See the README for info about the response
      */

      ImagePickerManager.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePickerManager Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          // You can display the image using either data:
          const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

          // // uri (on iOS)
          // const source = {uri: response.uri.replace('file://', ''), isStatic: true};
          // // uri (on android)
          // const source = {uri: response.uri, isStatic: true};

          this.setState({
            coverSource: source
          });
        }
      });
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
                  source={ this.state.coverSource || require('../images/default_cover.jpg')}
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
                        <TouchableOpacity onPress ={() => this.selectTag(2)}  style={{flexDirection: 'row',  alignItems: 'center'}}>
                          <Icon name='tag' size={25}  style={{color: 'black'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={() => this.selectCover(2)}  style={{flexDirection: 'row',  alignItems: 'center'}}>
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

