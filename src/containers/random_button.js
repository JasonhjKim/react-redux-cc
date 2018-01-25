import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setPrimary, setSecondary } from '../actions/index';
import { bindActionCreators } from 'redux';

class RandomButton extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const r1 = Math.floor(Math.random() * 19);
		var r2 = Math.floor(Math.random() * 19);
		if (r1 === r2) {
			r2 = Math.floor(Math.random() * 19);
		}
		this.props.setPrimary([this.props.colorList[r1]["700"], this.props.colorList[r1]["500"], this.props.colorList[r1]["100"]]);
		this.props.setSecondary([this.props.colorList[r2]["700"], this.props.colorList[r2]["500"], this.props.colorList[r2]["100"]]);
	}

	render() {
		const Container = styled.div `
		`
		const Button = styled.button `
			border-radius: 8px;
			background: white;
			border: 2px solid bluegray;
			width: 100%;
			margin-top: 0.25em;
		`
		return(
			<Container>
				<Button onClick={this.handleClick}>Random Color</Button>
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
	return bindActionCreators({ setPrimary, setSecondary }, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomButton)