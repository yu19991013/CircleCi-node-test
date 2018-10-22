/** mainPage Routing */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import React from 'react';

import GamesScreen from './games'
import NotificationScreen from './notification'
import SettingScreen from './setting'
import UserScreen from './user'

export default createBottomTabNavigator(
{
	GamesScreen: {screen: GamesScreen},
  UserScreen: {screen: UserScreen},
  SettingScreen: {screen: SettingScreen},
  NotificationScreen: {screen: NotificationScreen}
},
{
	tabBarPosition: "bottom",
	initialRouteName: 'GamesScreen',
	tabBarComponent : props => {
		return (
			<View style={styles.footer}>
				<TouchableOpacity onPress={() => props.navigation.navigate("UserScreen")}>
					<Text style={styles.footerText} >マイページ</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate("GamesScreen")}>
					<Text style={styles.footerText} >大会一覧</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate("NotificationScreen")}>
					<Text style={styles.footerText} >通知</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate("SettingScreen")}>
					<Text style={styles.footerText} >設定</Text>
				</TouchableOpacity>
			</View>
		)
	}
})

const styles = StyleSheet.create ({
	footer: {
		height: 70,
		backgroundColor: '#dedede',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 30,
		paddingRight: 30,
	},
	footerText: {
		fontSize: 15
	}
})