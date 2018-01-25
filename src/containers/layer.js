import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import Option from './option';

export default class Layer extends Component {
	constructor() {
		super();
		this.state = {childData: ""}
		this.getChild = this.getChild.bind(this);
	}

	getChild(data) {
		this.setState({childData: data})
	}
	render() {
		const Container  = styled.div `
		`
		console.log(this.state.childData);
		return (
			<Container>
				<h5>Layer 1:</h5>
				<Option getData={this.getChild}/>
				<div>
					{this.state.childData}
				</div>
			</Container>
		)
	}
}