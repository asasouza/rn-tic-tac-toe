// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Constants
import { colors } from '../constants/Styles';

class TopBar extends PureComponent {
	_renderLabel = () => {
		const { gameStarted, playerOneTurn } = this.props;
		const { player } = styles;

		if (!gameStarted) {
			return (
				<Text style={player}>
					<Text style={{ color: colors.primary }}>Tic</Text>
					<Text style={{ color: colors.secondary }}>Tac</Text>
					<Text style={{ color: colors.primary }}>Toe</Text>
				</Text>
			);
		}

		return (
			<Text 
				style={[
					player,
					{ color: playerOneTurn ? colors.primary : colors.secondary }
				]}
			>
				{playerOneTurn ? 'Player One Turn' : 'Player Two Turn'}
			</Text>
		);
	}

	_renderPlayerLabel = () => {
		const { gameStarted, playerOneTurn } = this.props;
		const { playerCharacterContainer, playerCharacterText } = styles;
		return (
			<View style={[playerCharacterContainer, { backgroundColor: gameStarted ? '#eee' : 'transparent' }]}>
				{ gameStarted &&
					<Text style={[playerCharacterText, { color: playerOneTurn ? colors.primary : colors.secondary }]}>
						{playerOneTurn ? 'O' : 'X'}
					</Text>
				}
			</View>
		);
	}

	render() {
		const { container, counter, counterContainer, topContainer } = styles;
		const { matchsCount } = this.props;
		return (
			<View style={container}>

				<View style={topContainer}>
					{this._renderPlayerLabel()}
					<View style={counterContainer}>
						<Text style={counter}>Games Played</Text>
						<Text style={counter}>{matchsCount}</Text>
					</View>
				</View>

				{this._renderLabel()}
				
			</View>
		);
	}
}

TopBar.propTypes = {
	matchsCount: PropTypes.number,
	gameStarted: PropTypes.bool.isRequired,
	playerOneTurn: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 5,
	},
	counterContainer: {
		alignSelf: 'flex-end',
		alignItems: 'center',
		marginBottom: 15
	},
	counter: {
		color: '#9A9894',
		fontSize: 12,
		fontWeight: 'bold'
	},
	player: {
		alignSelf: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	playerCharacterContainer: {
		alignItems: 'center', 
		borderRadius: 5, 
		height: 40, 
		justifyContent: 'center', 
		width: 40, 
	},
	playerCharacterText: {
		fontSize: 20, 
		fontWeight: 'bold'
	},
	topContainer: {
		flexDirection: 'row', 
		justifyContent: 'space-between'
	}
});

export default TopBar;
