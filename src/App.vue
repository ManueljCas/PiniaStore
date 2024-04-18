<template>
  <div id="app" class="app-container">
    <nav class="primary-nav">
      <h1 class="nav-title">Gestor estudiantil</h1>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/List" class="nav-link">Lista de estudiantes nuevos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Agregar estudiantes</router-link>
        </li>
      </ul>
    </nav>
    <router-view class="main-content" />
  </div>
</template>

<style>
  .primary-nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  .nav-title {
    text-align: center;
    margin: 0;
    font-size: 24px;
  }

  .nav-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    display: inline;
    margin-right: 20px;
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .main-content {
    padding: 20px;
  }
</style>
