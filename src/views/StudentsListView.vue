<template>
  <div class="students-container">
    <h1 class="page-title">Lista de Estudiantes</h1>
    <StudentsList />
  </div>
</template>

<script setup>
import StudentsList from '@/components/StudentsList.vue'
</script>

<style>
  .students-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
</style>
