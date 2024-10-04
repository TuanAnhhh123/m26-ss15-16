<template>
    <div class="login-container">
      <h2>Login account</h2>
      <form>
        <div class="form-group">
          <label for="email">Your email</label>
          <input type="email" id="email" placeholder="name@company.com" />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="*********" />
        </div>
  
        <button type="submit">Login an account</button>
      </form>
      <p>
        Already have an account? 
        <a href="/register">Register here</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
  };
  </script>
  
  <style>
  .login-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 10px;
  }
  </style>
  