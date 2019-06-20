// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// Constants
import { colors } from '../constants/Styles';

class Cell extends PureComponent {
	render() {
		const { container, text } = styles;
		const { onPress, value } = this.props;
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={onPress}
				style={container}
			>
				<Text style={text}>
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
		backgroundColor: '#f4ead6',
		borderRadius: 10,
		height: 100,
		justifyContent: 'center',
		marginBottom: 10,
		padding: 20,
		width: '30%',

	},
	text: {
		fontSize: 90,
		color: colors.primary,
	}
});

export default Cell;
