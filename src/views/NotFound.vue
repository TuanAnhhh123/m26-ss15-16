<template>
    <div class="not-found-container">
      <h2>Page Not Found</h2>
      <p>404</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style>
  .not-found-container {
    text-align: center;
    margin-top: 50px;
  }
  
  h2 {
    font-size: 2em;
    color: #ff6b6b;
  }
  
  p {
    margin: 20px 0;
  }
  
  a {
    text-decoration: none;
    color: #007bff;
  }
  
  a:hover {
    color: #0056b3;
  }
  </style>
  