import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default (props: any) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>ヘッダー</Text>
  </View>
)
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#e85a14',
		height: 50,
		position: 'absolute',
		top: 30,
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  headerText: {
    position: 'relative',
    top: 30,
    left: 0,
    right: 0,
  }
});