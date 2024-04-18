<template>
    <div class="form-container">
        <form @submit.prevent="addStudent" class="form">
            <div class="form-group">
                <label for="name" class="label">Nombre:</label>
                <input type="text" id="name" v-model="newStudent.name" placeholder="Ingrese su nombre" required />
            </div>
            <div class="form-group">
                <label for="email" class="label">Email:</label>
                <input type="email" id="email" v-model="newStudent.email" placeholder="Ingrese su correo electrónico" required />
            </div>
            <div class="form-group">
                <label for="group" class="label">Grupo:</label>
                <input type="text" id="group" v-model="newStudent.group" placeholder="Ingrese su grupo" required />
            </div>
            <button type="submit" class="submit-btn">Agregar Estudiante</button>
        </form>
        <router-link to="/List" class="back-link">Volver a la lista</router-link>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStudentsStore } from '@/stores/StudentStore'

const studentsStore = useStudentsStore()
const newStudent = reactive({
    name: '',
    email: '',
    group: ''
})

const addStudent = async () => {
    await studentsStore.createStudent(newStudent)
    newStudent.name = ''
    newStudent.email = ''
    newStudent.group = ''
    window.alert('Alumno Registrado Correctamente.')
    await studentsStore.getStudents()
}
</script>

<style scoped>
.label {
    color: #333; 
}

.form-container {
    max-width: 400px;
    margin: 0 auto;
}

.form {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

input::placeholder { 
    color: #666;
}

.submit-btn {
    background-color: #41b883;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #32a672; 
}

.back-link {
    display: block;
    margin-top: 10px;
    color: #666;
    text-decoration: none;
    font-size: 14px;
}

.back-link:hover {
    color: #333;
}
</style>
