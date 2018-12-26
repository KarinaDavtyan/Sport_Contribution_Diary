import React, { Component} from 'react';
import './App.css';
import { hot } from 'react-hot-loader';
import styled from '@emotion/styled';

const Button = styled.button`
  color: hotpink;
`;

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Button>This is a hotpink button.</Button>
      </div>
    );
  }
}

export default hot(module)(App);
