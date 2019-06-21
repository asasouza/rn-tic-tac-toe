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
			animation: null,
			iterationCount: 1,
			prevValue: null,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.value && !this.props.value) {
			this.setState({ animation: 'bounceOut', prevValue: prevProps.value });
			setTimeout(() => this.setState({ animation: null, prevValue: null }), 500);
		}
		if (this.props.winnerCell && this.props.value) {
			this.setState({ animation: 'pulse', iterationCount: 'infinite' });
		}
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
		const { animation, iterationCount, prevValue } = this.state;
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
					iterationCount={iterationCount}
					style={[
						text, 
						{ color: value === 'O' || prevValue === 'O' ? colors.primary : colors.secondary } 
					]}
					useNativeDriver
				>
					{value || prevValue}
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
		backgroundColor: '#F8E7D9',
		borderColor: '#F1D3B9',
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

