'use strict';

import React from 'react';

import SunColors from './SunColors';
import Image from 'Image';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from 'StyleSheet';
import { SunText } from './SunText';
import TouchableOpacity from 'TouchableOpacity';
import View from 'View';

class SunButton extends React.Component {
  props: {
    type: 'primary' | 'secondary' | 'bordered';
    icon: number;
    caption: string;
    style: any;
    onPress: () => void;
  };

  render() {
    const caption = this.props.caption.toUpperCase();
    let icon;
    if (this.props.icon) {
      icon = <Image source={this.props.icon} style={styles.icon} />;
    }
    let content;
    if (this.props.type === 'primary' || this.props.type === undefined) {
      content = (
        <LinearGradient
          start={[0.5, 1]} end={[1, 1]}
          colors={['#000000', '#6F86D9']}
          style={[styles.button, styles.primaryButton]}>
          {icon}
          <SunText style={[styles.caption, styles.primaryCaption]}>
            {caption}
          </SunText>
        </LinearGradient>
      );
    } else {
      var border = this.props.type === 'bordered' && styles.border;
      content = (
        <View style={[styles.button, border]}>
          {icon}
          <SunText style={[styles.caption, styles.secondaryCaption]}>
            {caption}
          </SunText>
        </View>
      );
    }
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.container, this.props.style]}>
        {content}
      </TouchableOpacity>
    );
  }
}

const HEIGHT = 50;

var styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    // borderRadius: HEIGHT / 2,
    // borderWidth: 1 / PixelRatio.get(),
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  border: {
    borderWidth: 1,
    borderColor: SunColors.lightText,
    borderRadius: HEIGHT / 2,
  },
  primaryButton: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 12,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 12,
  },
  primaryCaption: {
    color: 'red',
  },
  secondaryCaption: {
    color: SunColors.lightText,
  }
});

export default SunButton;
