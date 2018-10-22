import { Text, View } from 'react-native';
import React from 'react';

export default class NotificationScreen extends React.Component<{}> {
	render() {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		    <Text>通知ページ</Text>
		  </View>
		)
	}
}