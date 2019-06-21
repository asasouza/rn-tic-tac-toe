// Modules
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text as AnimatedText } from 'react-native-animatable';
// Constants
import { colors } from '../constants/Styles';

class Cell extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			animation: null
		};
	}

	_onPress = () => {
		const { onPress, value } = this.props;
		setTimeout(() => this.setState({ animation: null }), 500);
		if (!value) {
			this.setState({ animation: 'bounceIn' });
			return onPress();
		}
		return this.setState({ animation: 'swing' });
	}

	render() {
		const { container, text } = styles;
		const { animation } = this.state;
		const { value } = this.props;

		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={this._onPress}
				style={container}
			>
				<AnimatedText 
					animation={animation}
					duration={500}
					easing='linear'
					style={[
						text, 
						{ color: value === 'O' ? colors.primary : colors.secondary } 
					]}
					useNativeDriver
				>
					{value}
				</AnimatedText>
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
		borderRadius: 10,
		borderWidth: 2,
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

