'use strict';
import React from 'react';

import {
  StyleSheet, 
  Dimensions, 
  Text
} from 'react-native';

import SunColors from './SunColors';

export function SunText({style, ...props}: Object) {
  return <Text style={[styles.font, style]} {...props} />;
}

export function Heading1({style, ...props}: Object) {
  return <Text style={[styles.font, styles.h1, style]} {...props} />;
}

export function Paragraph({style, ...props}: Object) {
  return <Text style={[styles.font, styles.p, style]} {...props} />;
}

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  font: {
    // fontFamily: require('../env').fontFamily,
  },
  h1: {
    fontSize: normalize(24),
    lineHeight: normalize(27),
    color: SunColors.darkText,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(23),
    color: SunColors.lightText,
  },
});
