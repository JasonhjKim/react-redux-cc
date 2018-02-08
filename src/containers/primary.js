import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPrimary } from '../actions/index';

class Primary extends Component {
	handleClick(color, e) {
		const returnArr = [color["700"], color["500"], color["100"]];
		this.props.setPrimary(returnArr);
	}

	render() {
		const Container = styled.div `
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			font-size: 0.50em;
			justify-content: center;
		`
		const transformInCircle = keyframes `
			to {
				border-radius: 25px;
			}
		`
		const Color = styled.div `
			display: flex;
			width: 45px;
			height: 45px;
			margin: 1px;
			justify-content: center;
			align-items: center;
			vertical-align: middle;
			border: 2px solid #D0D0D0;
			border-radius: 10px;
			font-weight: 700;
			&:hover {
				animation: ${transformInCircle} 0.50s linear;
				animation-fill-mode: forwards;
			}
		`
		const primes = this.props.colorList.map((prime, i) => (
			<Color onClick={this.handleClick.bind(this, prime)}key={i} style={{backgroundColor:prime["500"]}} />
			))

		return(
			<Container>
				{primes}
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		colorList: state.colorList,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setPrimary }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Primary);