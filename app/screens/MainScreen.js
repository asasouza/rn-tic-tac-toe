// Modules
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Confetti from 'react-native-confetti';
// Components
import Cell from '../components/Cell';
import GameController from '../components/GameController';
import TopBar from '../components/TopBar';
// Providers
import StorageProvider from '../providers/StorageProvider';

class MainScreen extends Component {
	constructor(props) {
		super(props);

		this.confetti = React.createRef();

		this.state = {
			gameStarted: false,
			matchResult: null,
			matchsCount: 0,
			playerOneCells: {},
			playerOneTurn: true,
			playerTwoCells: {},
			table: {},
			winnerCells: {}
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
					return this._setWinner([0, 1, 2]);
				}
				if (cellsObject[3] && cellsObject[6]) {
					return this._setWinner([0, 3, 6]);
				}
				if (cellsObject[4] && cellsObject[8]) {
					return this._setWinner([0, 4, 8]);
				}
			}
			if (cellsObject[8]) {
				if (cellsObject[6] && cellsObject[7]) {
					return this._setWinner([8, 6, 7]);
				}
				if (cellsObject[2] && cellsObject[5]) {
					return this._setWinner([8, 2, 5]);
				}
			}
			if (cellsObject[4]) {
				if (cellsObject[1] && cellsObject[7]) {
					return this._setWinner([4, 1, 7]);
				}
				if (cellsObject[3] && cellsObject[5]) {
					return this._setWinner([4, 3, 5]);
				}
				if (cellsObject[6] && cellsObject[2]) {
					return this._setWinner([4, 6, 2]);
				}
			}
		}
		if (Object.keys(this.state.table).length === 9 && !this.state.matchResult) {
			this._setWinner([], 'tie');
		}
	}

	_setWinner = (winnerCells, tie) => {
		const { matchsCount, playerOneTurn } = this.state;
		let matchResult = '';
		if (tie) {
			matchResult = 'It\'s a Tie!';
		} else {
			this.confetti.current.startConfetti();
			matchResult = playerOneTurn ? 'Player Two Wins' : 'Player One Wins';
			this.setState({ winnerCells: { [winnerCells[0]]: true, [winnerCells[1]]: true, [winnerCells[2]]: true } });
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

	_cleanTable = () => {
		this.setState({
			gameStarted: true,
			matchResult: null,
			playerOneCells: {},
			playerOneTurn: true,
			playerTwoCells: {},
			table: {},
			winnerCells: {},
		});
	}

	_renderCells = () => {
		return [0, 1, 2, 3, 4, 5, 6, 7, 8].map(cell => {
			return (
				<Cell 
					key={cell}
					onPress={() => this._changeCellValue(cell)} 
					value={this.state.table[cell]} 
					winnerCell={this.state.winnerCells[cell]}
				/>
			);
		});
	}

	render() {
		const { cellsContainer, container } = styles;
		const { gameStarted, matchsCount, matchResult, playerOneTurn } = this.state;
		
		return (
			<View style={container}>

				<TopBar 
					gameStarted={gameStarted}
					matchsCount={matchsCount}
					playerOneTurn={playerOneTurn} 
				/>

				<View style={cellsContainer}>
					{this._renderCells()}
				</View>

				<GameController 
					cleanTable={this._cleanTable}
					gameStarted={gameStarted}
					matchResult={matchResult}
				/>
				
				<Confetti 
					bsize={2}
					confettiCount={20}
					ref={this.confetti} 
					size={1.5}
					timeout={0}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	cellsContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		padding: 10,
	}
});

export default MainScreen;

