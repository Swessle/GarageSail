import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
		<>
			<View style={styles.container1}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
			<View style={styles.container2}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		</>
  );
}

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	container2: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
