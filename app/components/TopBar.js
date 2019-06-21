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

	render() {
		const { container, counter, counterContainer } = styles;
		const { matchsCount } = this.props;
		return (
			<View style={container}>

				<View style={counterContainer}>
					<Text style={counter}>Games Played</Text>
					<Text style={counter}>{matchsCount}</Text>
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
	player: {
		alignSelf: 'center',
		fontSize: 30,
		fontWeight: 'bold',
	},
	counterContainer: {
		alignSelf: 'flex-end',
		alignItems: 'center',
		marginBottom: 15
	},
	counter: {
		color: '#2D3142',
		fontSize: 12,
		fontWeight: 'bold'
	}
});

export default TopBar;
