import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TodoList />
        </header>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
