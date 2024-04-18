<template>
    <div class="students-list-container">
        <ul class="students-list">
            <li v-for="student in students" :key="student.id" class="student-item">
                <div class="student-info">
                    {{ student.name }} - {{ student.email }} - {{ student.group }}
                </div>
                <div class="student-actions">
                    <button @click="deleteStudent(student.id)" class="delete-btn">Eliminar</button>
                    <router-link :to="{ name: 'Student', params: { id: student.id } }" class="details-link">Ver
                        Detalles</router-link>
                </div>
            </li>
        </ul>
        <router-link to="/create" class="add-link">Agregar Estudiante</router-link>
    </div>
</template>

<script setup>
import { useStudentsStore } from '@/stores/StudentStore'

const studentsStore = useStudentsStore()
const students = studentsStore.students

const deleteStudent = async (studentId) => {
    await studentsStore.deleteStudent(studentId)
    window.alert('Alumno Eliminado.')
}
</script>

<style scoped>
    .students-list-container {
        margin-top: 20px;
    }

    .students-list {
        list-style: none;
        padding: 0;
    }

    .student-item {
        margin-bottom: 20px;
    }

    .student-info {
        margin-right: 10px;
    }

    .delete-btn {
        background-color: #dc3545;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
    }

    .delete-btn:hover {
        background-color: #c82333;
    }

    .details-link {
        color: #41b883;
        text-decoration: none;
    }

    .add-link {
        display: block;
        margin-top: 20px;
        color: #41b883;
        text-decoration: none;
    }
</style>
