import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { setColor } from '../actions/index'

/*Not using this yet, going to implement HEX => RGB => HSL*/

class Color extends Component {
	constructor() {
		super();
		this.state = {
			"red": 255,
			"blue": 255,
			"green": 255,
			"alpha": 1.00
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(color, e) {
		var newState = {};
		newState[color] = Number(e.target.value);
		this.setState(newState);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.setColor(this.getCombineValue());
	}

	toHex(str) {
		var hex = parseInt(str, 10).toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	getCombineValue() {
		var rr = this.toHex(this.state.red),
			bb = this.toHex(this.state.blue),
			gg = this.toHex(this.state.green);

		return "#" + rr + bb + gg;
	}

	render() {
		var rr = this.toHex(this.state.red),
			bb = this.toHex(this.state.blue),
			gg = this.toHex(this.state.green);

		var hexedValue = "#" + rr + bb + gg;
		const Container = styled.div `
			display: flex;
			flex-direction: column;
		`
		const ColorDisplay = styled.div `
			display: flex;
			flex-direction: row;
		`

		const ColorDiv = styled.div `
			flex: 1;
		`

		const Label = styled.label `
			margin-bottom: 0;
		`
		return(
			<Container>
				<ColorDisplay>
					<input type="text" value={hexedValue} style={{backgroundColor: hexedValue}} onChange={this.handleChange}/>
				</ColorDisplay>
				<div style={{display:"flex"}}>
					<Label>R  </Label>
					<input type="range" 
						min="0" 
						max="255" 
						step="1" 
						value={this.state.red} 
						onChange={this.handleChange.bind(this, "red")}
						onInput={this.handleChange.bind(this,"red")}
						style={{flex: 5}}
						/>
				</div>
				<div style={{display:"flex"}}>
					<Label>B  </Label>
					<input type="range" 
						min="0" 
						max="255" 
						step="1" 
						value={this.state.blue} 
						onChange={this.handleChange.bind(this, "blue")}
						onInput={this.handleChange.bind(this, "blue")}
						style={{flex: 5}}
						/>
				</div>
				<div style={{display:"flex"}}>
					<Label>G  </Label>
					<input type="range" 
						min="0" 
						max="255" 
						step="1" 
						value={this.state.green	} 
						onChange={this.handleChange.bind(this, "green")}
						onInput={this.handleChange.bind(this, "green")}
						style={{flex: 5}}
						/>
				</div>
				<div style={{display:"flex"}}>
					<Label>A  </Label>
					<input type="range"
						min="0"
						max="1"
						step="0.1"
						onChange={this.handleChange.bind(this, "alpha")}
						onInput={this.handleChange.bind(this, "alpha")}
						value={this.state.alpha}
						style={{flex:5}}
						/>
				</div>
				<button className="btn btn-block btn-primary"onClick={this.handleClick}>Set Color</button>
			</Container>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setColor }, dispatch);
}

export default connect(null, mapDispatchToProps)(Color);