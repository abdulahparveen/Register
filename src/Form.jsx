import React, { useState } from "react";
import "./App.css";

function LoginForm({ onSwitch }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful!");
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit" className="btn">Login</button>
      <p>
        Don’t have an account?{" "}
        <button type="button" onClick={onSwitch} className="link-btn">
          Register here
        </button>
      </p>
    </form>
  );
}

function RegisterForm({ onSwitch }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful!");
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Register Form</h2>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <button type="submit" className="btn">Register</button>
      <p>
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="link-btn">
          Login here
        </button>
      </p>
    </form>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="form-wrapper">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
