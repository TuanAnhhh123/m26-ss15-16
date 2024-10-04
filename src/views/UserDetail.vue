<template>
    <div class="user-detail">
      <h2>Thông tin chi tiết</h2>
      <p><strong>Id:</strong> {{ user.id }}</p>
      <p><strong>UserName:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Address:</strong> {{ user.address }}</p>
      <button @click="goBack">Quay lại</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserDetail',
    props: ['id'],
    data() {
      return {
        user: null,
        users: [
          { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
          { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
          { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' },
        ],
      };
    },
    created() {
      this.user = this.users.find(u => u.id == this.id);
    },
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style>
  .user-detail {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 300px;
    margin: 50px auto;
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
  