import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";  // redirect after signup
    } catch (err) {
      alert(err.response.data.msg || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
