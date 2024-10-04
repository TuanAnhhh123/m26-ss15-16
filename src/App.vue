<template>
  <div>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{name :'about'}">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav> -->
  <!-- <nav>
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>
    <button @click="gotoContact">Contact</button>
  </nav> -->
   <router-view/>
  </div>
</template>

<script setup>
  // import { useRouter } from 'vue-router';
  // const router = useRouter();
  // console.log(router);
  
  // const goToHome = ()=>{
  //   router.push("/")
  // };
  // const goToAbout = ()=>{
    
  //   router.push({name: "about"})
  // };
  // const gotoContact = ()=>{
  //   router.replace({name:"contact"})
  // };

</script>

<style>
 /* nav{
  display: flex;
  gap: 20px;
 } */
</style>