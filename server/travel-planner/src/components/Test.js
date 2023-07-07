import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    date: ''
  
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.01:5000/travellers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('traveller created successfully');
        // Reset the form data
        setFormData({
          name: '',
          gender: '',
          email: '',
          date: '',
      
        });

      } else {
        console.log('traveller creation failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Traveller</h2>
      <form onSubmit= {handleSubmit}>
        <label htmlFor="name"> name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required/>

        <label htmlFor="gender">gender</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required/>

        <label htmlFor="email">email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

        <label htmlFor="date">date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required/>


        <button type="submit">Create Traveller</button>
      </form>
    </div>
  );
};

export default Test;