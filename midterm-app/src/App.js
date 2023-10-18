/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
      </header>
    </div>
  );
}
*/

import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* ... (input fields, buttons, and labels go here) */}
      </form>
    </div>
  );
}

export default App;
