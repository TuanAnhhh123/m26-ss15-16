<template>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" class="user-card">
        <p><strong>Id:</strong> {{ user.id }}</p>
        <p><strong>UserName:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Address:</strong> {{ user.address }}</p>
        <button @click="viewDetails(user.id)">Xem chi tiết</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListUser',
    data() {
      return {
        users: [
          { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
          { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
          { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
        ],
      };
    },
    methods: {
      viewDetails(id) {
        this.$router.push({ path: `/user/${id}` });
      },
    },
  };
  </script>
  
  <style>
  .user-list {
    display: flex;
    gap: 20px;
  }
  
  .user-card {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    text-align: center;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  