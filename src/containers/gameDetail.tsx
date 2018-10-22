import { Text, View } from 'react-native';
import React from 'react';

export default class GamedetailScreen extends React.Component<{navigation: any}> {
	render() {
		return (
		  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		    <Text onPress={() => this.props.navigation.navigate('GamesScreen')}>ゲーム詳細ページ{console.log( this.props.navigation )}</Text>
		  </View>
		)
	}
}