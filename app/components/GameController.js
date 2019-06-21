// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class GameController extends PureComponent {

	_onPressReset = () => {
		Alert.alert(
			'Reset Game',
			'Do you want to restart the game?',
			[
				{
					text: 'Cancel',
					onPress: () => {}
				},
				{
					text: 'OK',
					onPress: () => this.props.cleanTable(false)
				}
			]
		);
	}

	render() {
		const { buttonContainer, buttonStart, buttonRestart, buttonText, container, resultText } = styles;
		const { cleanTable, gameStarted, matchResult } = this.props;

		return (
			<View style={container}>
				
				<Text style={resultText}>{matchResult}</Text>

				<TouchableOpacity
					activeOpacity={0.5}
					style={[buttonContainer, gameStarted ? buttonRestart : buttonStart]}
					onPress={gameStarted ? this._onPressReset : () => cleanTable(true)}
				>
					<Text style={buttonText}>
						{gameStarted ? 'Restart Game' : 'Start New Game'}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

GameController.propTypes = {
	cleanTable: PropTypes.func.isRequired,
	gameStarted: PropTypes.bool.isRequired,
	matchResult: PropTypes.string,
};

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
		borderRadius: 20,
		height: 50,
		justifyContent: 'center',
		width: 200,
	},
	buttonStart: {
		backgroundColor: '#8abd98',
	},
	buttonRestart: {
		backgroundColor: '#2D3142',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 20,
		fontWeight: 'bold'
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	resultText: {
		fontSize: 20,
		marginBottom: 10,
		fontWeight: 'bold'
	}

});

export default GameController;
