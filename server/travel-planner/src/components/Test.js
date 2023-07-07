import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    date: ''
    // description: '',
    // responsibility: '',
    // qualification: '',
    // employer_id: ''
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
          // created_at: new Date(),
          // description: '',
          // responsibility: '',
          // qualification: '',
          // employer_id: ''
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

        {/* <label htmlFor="created_at">created_at</label>
        <textarea
          name="time"
          value={formData.created_at}
          onChange={handleChange}
          required
        ></textarea> */}

        {/* <label htmlFor="responsibility">Responsibility</label>
        <textarea
          name="responsibility"
          value={formData.responsibility}
          onChange={handleChange}
          required
        ></textarea> */}

        {/* <label htmlFor="qualification">Qualification</label>
        <textarea
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        ></textarea> */}

        {/* <label htmlFor="employer_id">Employer ID</label>
        <input
          type="number"
          name="employer_id"
          value={formData.employer_id}
          onChange={handleChange}
          required
        /> */}

        <button type="submit">Create Traveller</button>
      </form>
    </div>
  );
};

export default Test;