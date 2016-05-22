import React from 'react';

export default class SpotItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  
  onPress (reddit) {
    const {navigator} = this.props;
    console.error('click:', reddit);
    InteractionManager.runAfterInteractions(() => {
      navigator.push({
        component: WebViewContainer,
        name: 'WebViewPage',
        reddit: reddit
      });
    });
  }

  render() {
    return (
      <div></div>
    );
  }

  renderItem (reddit, sectionID, rowID) {
    const thumbnail = reddit.data.thumbnail.lastIndexOf("http") >= 0 ? reddit.data.thumbnail : 'https://www.redditstatic.com/reddit404b.png';
    console.log('render', reddit.data.thumbnail.lastIndexOf("http"));
    return (
      <TouchableOpacity onPress={this.onPress.bind(this, reddit)}>
        <View style={styles.containerItem}>
          <Image
            style={{width: 88, height: 88, marginRight: 10,borderRadius:44}}
            source={{uri: thumbnail}}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.title}>
              {reddit.data.title}
            </Text>
            <View style={{flex:1,flexDirection:'row'}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{fontSize: 14, color: '#aaaaaa', marginTop: 5}}>
                  来自：
                </Text>
                <Text style={{flex: 1, fontSize: 14, color: '#ff0000', marginTop: 5, marginRight: 5}}>
                  {reddit.data.author}
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{fontSize: 14, color: '#aaaaaa', marginTop: 5}}>
                  赞：
                </Text>
                <Text style={{flex: 1, fontSize: 14, color: '#ff0000', marginTop: 5, marginRight: 5}}>
                  {reddit.data.ups}
                </Text>
              </View>
            </View>

          </View>
        </View>
      </TouchableOpacity>
    );
  }

}
