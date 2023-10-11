<template>
  <nav class="navbar">
      <div class="navbar-menu">
        <div class="navbar-start">

          <router-link class="navbar-item" to="/">
            <img class="image" src="../../public/Logo_Center.png" alt="logo">
          </router-link>
          <router-link class="navbar-item" to="/">
            Главное
          </router-link>
          <router-link class="navbar-item" to="/about">
            О сайте
          </router-link>

          <!-- <a class="navbar-item" href="/about" >
            О нас
          </a> -->
        </div>
      </div>
    </nav>
</template>


<style scoped>
.image{
  padding: 5px;
  width: 100px;
}

.navbar {
  background-color: #363636;
}

.navbar-item {
  color: #fff;
  position: left;
  margin-left: 10px;
  margin-right: 10px;
  font: 50px sans-serif;
}

.navbar-burger {
  color: #fff;
}

</style>
