import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native'

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import SpotContainer from '../containers/SpotContainer';

export default class PenButton extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  openSpotCreator() {
    console.log('open spot creator for add a new spot');
    const {navigator} = this.props;
    navigator.push({
          component: SpotContainer,
          name: 'SpotCreator'
        })
  }

  render() {
    return (
            <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={this.openSpotCreator.bind(this)}>
                <Icon name="ios-add" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
        );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
