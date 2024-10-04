<template>
    <div class="register-container">
      <h2>Create account</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Your email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="name@company.com"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="********"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="confirm-password">Confirm password</label>
          <input
            v-model="confirmPassword"
            type="password"
            id="confirm-password"
            placeholder="********"
            required
          />
        </div>
  
        <button type="submit" class="submit-btn">Create an account</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
  
      const register = () => {
        if (password.value !== confirmPassword.value) {
          alert('Passwords do not match')
          return
        }
  
        alert(`Account created for ${email.value}`)
      }
  
      return { email, password, confirmPassword, register }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 20px;
  }
  </style>
  