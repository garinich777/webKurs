<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  
</template>

<style>
  header {
    font-size: 2em;
    font-weight: 500;
  }
  main {
    margin: 5%;
  }

  img {
    max-width: 80%;
    max-height: 700px;
    display: inline-block;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
    color: #cfded0;
    background-color: #202020;
  }

  a {
    color: #25b6ff;
  }

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

  .container {
    max-width: 100%;
    max-height: 700px;
    display:flex;
    justify-content:left;
    align-items:left;
    margin-bottom: 2%;
    margin-top: 2%;
  }

  .table {
    max-width: 100%;
    font-size: 0.7em;
    font-weight: bold;
  }

  .table-header {
    display:flex;
    width:100%;    
    background:#e1e1e1;
    padding: 36px 0;
    border:1px solid white;
    color: black;
  }

  .table-row {
    display:flex;
    border: 1px solid black;
    width:100%;
    background: white;
    vertical-align: middle;
    padding: 36px 0;
  }

  .table-data, .header__item {
    flex: 1 1 20%;
    text-align:center;
    vertical-align: middle;
  }

  .table-data {
    color: black;
    overflow-wrap: break-word;
  }

  .main-section {
    width: 100%;
    margin-bottom: 2%;
    margin-top: 2%;
  }
  
</style>