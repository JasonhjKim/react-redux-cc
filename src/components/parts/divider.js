import React, { Component } from 'react';
import styled from 'styled-components';

export default class Divider extends Component {
	render() {
		const Container = styled.div `
			height: 100px;
			width: 100%;
		`
		return(
			<Container style={{backgroundColor: this.props.primary[0]}} />
		)
	}
}