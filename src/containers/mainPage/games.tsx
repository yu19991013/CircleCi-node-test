import { FlatList, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import React, {Component} from 'react';

import GamesDetailScreen from '../gameDetail'
import Header from '../../components/Header';

// import Header from '../../components/header'

// type Props = {navigation: any};
class GamesScreen extends Component<{navigation: any}> {
	state = {
		games:[
		{name: '荒野ハイ1'},
		{name: '荒野ハイ2'},
		{name: '荒野ハイ3'},
		{name: '荒野ハイ4'},
		]
	}
	text = () => {
		console.log('text')
		console.log(this.props)
		return 'text'
	}
  render() {
		console.log(this.state.games)
    return (
      <View style={styles.container}>
				<Header/>
				<Text style={styles.lavel}>大会一覧</Text>
				<FlatList
					style={styles.gamelist}
				  data={this.state.games}
					keyExtractor={(item, index) => index.toString()}
				  renderItem={({item}) => (
						<View>
							<Text onPress={() => this.props.navigation.navigate("GamesDetailScreen")}>
								{item.name}
							</Text>
						</View>
					)}
				/>
      </View>
    );
  }
}
export default createStackNavigator(
{
  GamesScreen: { screen: GamesScreen },
  GamesDetailScreen: { screen: GamesDetailScreen },
},
{
  initialRouteName: "GamesScreen",
	headerMode: 'none'
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
	lavel: {
		fontSize: 20,
	},
	gamelist: {
		textAlign: 'center',
		backgroundColor: 'rgb(236, 236, 236)',
		marginLeft: 10,
		marginRight: 10
	}
});
