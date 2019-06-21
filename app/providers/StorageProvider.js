import AsyncStorage from '@react-native-community/async-storage';

class StorageProvider {
	static setMatchsCount = async (count) => {
		try {
			await AsyncStorage.setItem('@TicTacToe_MatchCount', count.toString());
		} catch (e) {
			console.log(e);
		}
	};

	static getMatchsCount = async () => {
		try {
			const value = await AsyncStorage.getItem('@TicTacToe_MatchCount');
			if (value !== null) {
				return parseInt(value, 10);
			}
			return 0;
		} catch (e) {
			console.log(e);
		}
	};
}

export default StorageProvider;
