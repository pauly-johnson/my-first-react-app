import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-loggin">
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <button>Sign Up</button>
      </header>
    </div>
  );
}

export default App;
