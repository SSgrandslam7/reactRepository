import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = 'Invalid email';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted (not actually sent)');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} onBlur={validate} />
      {errors.name && <span>{errors.name}</span>}
      <input name="email" placeholder="Email" onChange={handleChange} onBlur={validate} />
      {errors.email && <span>{errors.email}</span>}
      <textarea name="message" placeholder="Message" onChange={handleChange} onBlur={validate} />
      {errors.message && <span>{errors.message}</span>}
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;