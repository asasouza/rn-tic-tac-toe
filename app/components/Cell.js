// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// Constants
import { colors } from '../constants/Styles';

class Cell extends PureComponent {
	_onPress = () => {
		const { onPress, value } = this.props;
		if (!value) {
			onPress();
		}
	}

	render() {
		const { container, text } = styles;
		const { value } = this.props;

		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={this._onPress}
				style={container}
			>
				<Text 
					style={[
						text, 
						{ color: value === 'O' ? colors.primary : colors.secondary } 
					]}
				>
					{value}
				</Text>
			</TouchableOpacity>
		);
	}
}

Cell.propTypes = {
	value: PropTypes.string,
	onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#F0CDAF',
		borderColor: '#E7AF80',
		borderWidth: 2,
		borderRadius: 10,
		height: 100,
		justifyContent: 'center',
		marginBottom: 10,
		padding: 20,
		width: '30%',

	},
	text: {
		fontSize: 85,
	}
});

export default Cell;

