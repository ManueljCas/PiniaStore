<template>
    <div class="details-container">
      <h1 class="page-title">Detalles del Estudiante</h1>
      <StudentDetails />
    </div>
  </template>
  
  <script setup>
  import StudentDetails from '@/components/StudentComponents.vue'
  </script>
  
  <style>
    .details-container {
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
  