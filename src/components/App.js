import React, { Component } from 'react';
import styled from 'styled-components';
import Body from '../containers/body'
import Sidebar from '../containers/sidebar'

class App extends Component {
  render() {
  	const Container = styled.div `
  		display: flex;
  		flex-direction: row;
  		height: 100%;
  	`
    return (
    	<Container>
        <Sidebar>
        </Sidebar>
    		<Body>
    		</Body>
    	</Container>
    );
  }
}

export default App;
