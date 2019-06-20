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
					onPress: this.props.restartGame
				}
			]
		);
	}

	render() {
		const { buttonContainer, buttonStart, buttonRestart, buttonText, container } = styles;
		const { gameStarted, startGame } = this.props;

		return (
			<View style={container}>
				<TouchableOpacity
					activeOpacity={0.5}
					style={[buttonContainer, gameStarted ? buttonRestart : buttonStart]}
					onPress={gameStarted ? this._onPressReset : startGame}
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
	gameStarted: PropTypes.bool.isRequired,
	startGame: PropTypes.func.isRequired,
	restartGame: PropTypes.func.isRequired,
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
		backgroundColor: '#bbb',
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

});

export default GameController;
