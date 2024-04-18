<template>
    <div class="add-student-container">
      <h1 class="page-title">Agregar Estudiante</h1>
      <AddStudent />
    </div>
  </template>
  
  <script setup>
  import AddStudent from '@/components/CreateStudent.vue'
  </script>
  
  <style>
    .add-student-container {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-top: 20px;
    }
  
    .page-title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
  </style>
  