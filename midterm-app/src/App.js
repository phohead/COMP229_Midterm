import React, { useState } from 'react';

function App() {
  const defaultFormData = {
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  };

  const [formData, setFormData] = useState(defaultFormData);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertMessage =
    "Name: " + formData.name 
    + "\n" +
    "Description: " + formData.description 
    + "\n" +
    "Category: " + formData.category 
    + "\n" +
    "Quantity: " + formData.quantity 
    + "\n" +
    "Price: " + formData.price;

    window.alert(alertMessage);
    setFormData(defaultFormData);
  };

  const handleCancel = () => {
    setFormData(defaultFormData);
  };

  return (
    <div className='form-container'>
      <h1 className='form-header'>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label></label>
          <input placeholder='Name' type='text' name='name' value={formData.name} onChange={onInputChange} 
          className='form-control'/>

          <label></label>
          <input placeholder='Description' type='text' name='description' value={formData.description} onChange={onInputChange} 
          className='form-control'/>

          <label></label>
          <input placeholder='Category' type='text' name='category' value={formData.category} onChange={onInputChange}
          className='form-control'/>

          <label></label>
          <input placeholder='Quantity' type='text' name='quantity' value={formData.quantity} onChange={onInputChange}
          className='form-control'/>

          <label></label>
          <input placeholder='Price' type='text' name='price' value={formData.price} onChange={onInputChange}
          className='form-control'/>
        </div>
        <div>
          <button id='submit-button' type="submit">Submit</button>
          <button id='cancel-button' type='button' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default App;
