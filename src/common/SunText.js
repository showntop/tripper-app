'use strict';

import React, {StyleSheet, Dimensions} from 'react-native';
import F8Colors from 'F8Colors';

export function Text({style, ...props}: Object): ReactElement {
  return <React.Text style={[styles.font, style]} {...props} />;
}

export function Heading1({style, ...props}: Object): ReactElement {
  return <React.Text style={[styles.font, styles.h1, style]} {...props} />;
}

export function Paragraph({style, ...props}: Object): ReactElement {
  return <React.Text style={[styles.font, styles.p, style]} {...props} />;
}

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  font: {
    fontFamily: require('../env').fontFamily,
  },
  h1: {
    fontSize: normalize(24),
    lineHeight: normalize(27),
    color: F8Colors.darkText,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(23),
    color: F8Colors.lightText,
  },
});
