// Modules
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// Components
import Cell from '../components/Cell';
import GameController from '../components/GameController';
import TopBar from '../components/TopBar';

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameStarted: false,
			gamesPlayed: 0,
			table: [],
			playerOneTurn: true,
			playerOneCells: [],
			playerTwoCells: [],
		};
	}

	_checkWinner = () => {}

	_changeCellValue = (cellIndex) => {
		console.log(cellIndex);
	}

	_restartGame = () => {}

	_startGame = () => {}

	

	_renderCells = () => {
		return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(cell => {
			return (
				<Cell 
					key={cell}
					onPress={() => this._changeCellValue(cell)} 
					value={this.state.table[cell]} 
				/>
			);
		});
	}

	render() {
		const { cellsContainer, container } = styles;
		const { gameStarted, gamesPlayed, playerOneTurn } = this.state;

		return (
			<View style={container}>

				<TopBar 
					gamesPlayed={gamesPlayed}
					gameStarted={gameStarted}
					playerOneTurn={playerOneTurn} 
				/>

				<View style={cellsContainer}>
					{this._renderCells()}
				</View>

				<GameController 
					gameStarted={gameStarted}
					startGame={this._startGame}
					restartGame={this._restartGame}
				/>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'rgba(88, 107, 143, 0.3)',
		// backgroundColor: '#FFF',
		flex: 1,
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	cellsContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: 10
	}
});

export default MainScreen;

