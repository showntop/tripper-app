'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

var ImagePickerManager = require('NativeModules').ImagePickerManager;

class AttachesEditor extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      attaches: []
    };
  }

  addAttach(){
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

    ImagePickerManager.showImagePicker(options, (response) => {
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
          attaches: this.state.attaches + source

        });
      }
    });
  }

  render() {
    return (
        <View style={[ this.props.style, {
            flex: 1,
            padding: 5
          }]}>
            <View ref="attachContainer">

            </View>
            <TouchableOpacity style={{
                flex: 0,
                width: 100,
                height: 100,
                borderWidth: 1,
                borderRadius: 5,
                borderStyle: 'dashed',
                justifyContent: 'center',
                alignItems: 'center',
            }} onPress={() => this.addAttach()}>
                <Icon name="paperclip" size={80} style={{color: 'green'}}/>            
            </TouchableOpacity>
        </View>

    );
  }
}

const styles = StyleSheet.create({

});


export default AttachesEditor;