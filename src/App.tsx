import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from 'react-avatar'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar twitterHandle="kevin___chau" githubHandle="kevin-chau" size="320" round="160px" />
        <p>
          Hi, I'm Kevin Chau
        </p>
      </header>
    </div>
  );
}

export default App;
