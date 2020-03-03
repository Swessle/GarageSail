import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import {TextField} from './components/textField';
import {TestButton} from './components/testButton'

export default function App() {
  return (
		<>
			<View style={styles.container1}>
				<Text h2 style={styles.heading}>Ditch The Signs</Text>
				<Text h2>Attract a Crowd</Text>
			</View>
			<View style={styles.container3}>
				<TextField
						placeholder='Email Address'
						style={styles.input}
				/>
			</View>
			<View style={styles.container2}>
				<TestButton
					title='Get Started'
				/>
			</View>
		</>
  );
}

const styles = StyleSheet.create({
	container1: {
		flex: 8,
		alignItems: "center",
		justifyContent: "center"
	},
	container2: {
		flex: 2,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	container3: {
		alignItems: "center",
		justifyContent: "center"
	},
	heading: {
		color: 'black'
	},
	input:{
		paddingBottom: '3px'
	}
});
