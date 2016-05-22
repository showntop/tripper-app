import React from 'react';

import {fetchReddit} from '../actions/reddit';
import  {
  StyleSheet,
  PropTypes,
  ListView,
  View,
  InteractionManager
  }  from 'react-native';

import LoadingView from './LoadingView'
import {ToastShort} from '../utils/ToastUtils';
import * as Urls from '../constants/Urls';
import * as Alias from '../constants/Alias';

var canLoadMore;
var _typeIds = new Array();
var loadMoreTime = 0;

export default class SpotList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    canLoadMore = false;
  }

  componentWillReceiveProps (nextProps) {
    // const {reddit} = {isLoadMore: false};
    // if (reddit.isLoadMore && !nextProps.reddit.isLoadMore && !nextProps.reddit.isRefreshing) {
    //   if (nextProps.reddit.noMore) {
    //     ToastShort('没有更多数据了');
    //   }
    // }
  }
  
  componentDidMount () {
    const {dispatch} = this.props;
    InteractionManager.runAfterInteractions(() => {
      _typeIds = [1, 2, 3, 4];
      _typeIds.forEach((typeId) => {
        dispatch(fetchReddit(false, true, typeId));
      });
    });

  }

  onScroll () {
    if (!canLoadMore) {
      canLoadMore = true;
    }
  }

  onEndReached (typeId) {
    let time = Date.parse(new Date()) / 1000;
    const {reddit} = this.props;
    if (canLoadMore && time - loadMoreTime > 1) {
      const {dispatch} = this.props;
      dispatch(fetchReddit(false, false, typeId, true, 25, reddit.redditAfter[typeId]));
      canLoadMore = false;
      loadMoreTime = Date.parse(new Date()) / 1000;
    }
  }

  onRefresh (typeId) {
    const {dispatch} = this.props;
    canLoadMore = false;
    dispatch(fetchReddit(true, false, typeId));
  }

  render() {
    // var lists = [];
    // _typeIds.forEach((typeId) => {
      // lists.push(
      let typeId = 10;
      let reddit = Object;
   return (<View
          key={typeId}
          tabLabel={Alias.CATEGORIES[typeId]}
          style={{flex: 1}}
        >
          {this.renderContent(this.state.dataSource.cloneWithRows( [] ), typeId)}
        </View>);
    // });

    // return lists;
  }

  renderFooter () {
    const {reddit} = this.props;
    if (reddit.isLoadMore) {
      return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <ProgressBarAndroid styleAttr='Inverse' color='#3e9ce9'/>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            加载中…
          </Text>
        </View>
      );
    }
  }

  renderContent (dataSource, typeId) {
    // const {reddit} = this.props;
    let reddit = {loading: true}
    if (reddit.loading) {
      return <LoadingView/>;
    }
    let isEmpty = reddit.redditList[typeId] == undefined || reddit.redditList[typeId].length == 0;
    if (isEmpty) {
      return (
        <ScrollView
          automaticallyAdjustContentInsets={false}
          horizontal={false}
          contentContainerStyle={styles.no_data}
          style={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={reddit.isRefreshing}
              onRefresh={this.onRefresh.bind(this, typeId)}
              title="Loading..."
              colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            />
          }
        >
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>
              正在与网络撕扯...
            </Text>
          </View>
        </ScrollView>
      );
    }
    return (
      <ListView
        initialListSize={1}
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={styles.listView}
        onEndReached={this.onEndReached.bind(this, typeId)}
        onEndReachedThreshold={10}
        onScroll={this.onScroll}
        renderFooter={this.renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={reddit.isRefreshing}
            onRefresh={this.onRefresh.bind(this, typeId)}
            title="Loading..."
            colors={['#ff0000', '#ff0000', '#ff0000', '#ff0000']}
          />
        }
      />
    );
  }
}
