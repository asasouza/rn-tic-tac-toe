// Modules
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import Cell from '../components/Cell';
import GameController from '../components/GameController';
import TopBar from '../components/TopBar';
// Providers
import StorageProvider from '../providers/StorageProvider';

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameStarted: false,
			matchResult: null,
			matchsCount: 0,
			playerOneCells: {},
			playerOneTurn: true,
			playerTwoCells: {},
			table: {},
		};
	}

	async componentDidMount() {
		const matchsCount = await StorageProvider.getMatchsCount();
		this.setState({
			matchsCount
		});
	}

	_checkWinner = (cellsObject) => {
		if (Object.keys(cellsObject).length >= 3) {
			if (cellsObject[0]) {
				if (cellsObject[1] && cellsObject[2]) {
					return this._setWinner();
				}
				if (cellsObject[3] && cellsObject[6]) {
					return this._setWinner();
				}
				if (cellsObject[4] && cellsObject[8]) {
					return this._setWinner();
				}
			}
			if (cellsObject[8]) {
				if (cellsObject[6] && cellsObject[7]) {
					return this._setWinner();
				}
				if (cellsObject[2] && cellsObject[5]) {
					return this._setWinner();
				}
			}
			if (cellsObject[4]) {
				if (cellsObject[1] && cellsObject[7]) {
					return this._setWinner();
				}
				if (cellsObject[3] && cellsObject[5]) {
					return this._setWinner();
				}
				if (cellsObject[6] && cellsObject[2]) {
					return this._setWinner();
				}
			}
		}
		if (Object.keys(this.state.table).length === 9 && !this.state.matchResult) {
			this._setWinner('tie');
		}
	}

	_setWinner = (tie) => {
		const { matchsCount, playerOneTurn } = this.state;
		let matchResult = '';
		if (tie) {
			matchResult = 'It\'s a Tie!';
		} else {
			matchResult = playerOneTurn ? 'Player Two Wins' : 'Player One Wins';
		}
		StorageProvider.setMatchsCount(matchsCount + 1);
		this.setState({
			gameStarted: false,
			matchResult,
			matchsCount: matchsCount + 1
		});
	}

	_changeCellValue = async (cellIndex) => {
		const { gameStarted, playerOneTurn, playerOneCells, playerTwoCells, table } = this.state;
		if (gameStarted) {
			const playerValue = playerOneTurn ? 'O' : 'X';
			await this.setState({
				playerOneTurn: !playerOneTurn,
				table: { ...table, [cellIndex]: playerValue },
				playerOneCells: playerOneTurn ? { ...playerOneCells, [cellIndex]: playerValue } : playerOneCells,
				playerTwoCells: !playerOneTurn ? { ...playerTwoCells, [cellIndex]: playerValue } : playerTwoCells,
			});

			this._checkWinner(playerOneTurn ? this.state.playerOneCells : this.state.playerTwoCells);
		}
	}

	_cleanTable = (startGame) => {
		this.setState({
			gameStarted: startGame,
			table: [],
			playerOneTurn: true,
			playerOneCells: [],
			playerTwoCells: [],
			matchResult: null
		});
	}

	_renderMatchResult = () => {
		const { matchResult } = this.state;
		if (!matchResult) { return null; }
		return (
			<Text style={{ alignSelf: 'center', fontSize: 20 }}>{matchResult}</Text>
		);
	}

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
		const { gameStarted, matchsCount, playerOneTurn } = this.state;

		return (
			<View style={container}>

				<TopBar 
					matchsCount={matchsCount}
					gameStarted={gameStarted}
					playerOneTurn={playerOneTurn} 
				/>

				<View style={cellsContainer}>
					{this._renderCells()}
				</View>

				{this._renderMatchResult()}

				<GameController 
					gameStarted={gameStarted}
					cleanTable={this._cleanTable}
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

