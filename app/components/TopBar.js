// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Constants
import { colors } from '../constants/Styles';

class TopBar extends PureComponent {
	render() {
		const { container, counter, counterContainer, player } = styles;
		const { gameStarted, matchsCount, playerOneTurn } = this.props;
		return (
			<View style={container}>
				{ gameStarted &&
					<Text 
						style={[
							player,
							{ color: playerOneTurn ? colors.primary : colors.secondary }
						]}
					>
						{ playerOneTurn ? 'Player One Turn' : 'Player Two Turn' }
					</Text>
				}

				<View style={counterContainer}>
					<Text style={counter}>Games Played</Text>
					<Text style={counter}>{matchsCount}</Text>
				</View>
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
		alignItems: 'center',
		// backgroundColor: '#FFF',
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 5,
		justifyContent: 'flex-end'
	},
	player: {
		alignSelf: 'center',
		color: colors.primary,
		fontSize: 25,
		fontWeight: 'bold',
	},
	counterContainer: {
		alignItems: 'center',
		marginLeft: 20,
	},
	counter: {
		fontSize: 10,
		color: '#000',
		flexWrap: 'wrap'
	}
});

export default TopBar;
