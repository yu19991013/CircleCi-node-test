import { Text, View } from 'react-native';
import React from 'react';

export default class SettingScreen extends React.Component<{}> {
	render() {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		    <Text>設定ページ</Text>
		  </View>
		)
	}
}