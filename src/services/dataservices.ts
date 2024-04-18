import axios from 'axios';
import type IStudent from '@/interfaces/IStudent';

const API_URL = 'https://65e8dab54bb72f0a9c508303.mockapi.io/dev/apy/Alumnos';

export async function fetchStudents(): Promise<IStudent[]> {
  const response = await axios.get<IStudent[]>(API_URL);
  return response.data;
}

export async function fetchStudent(id: number): Promise<IStudent> {
  const response = await axios.get<IStudent>(`${API_URL}/${id}`); 
  return response.data; 
}

export async function createStudent(studentData: IStudent): Promise<void> {
  await axios.post(API_URL, studentData);
}

export async function deleteStudent(id: number): Promise<void> {
  await axios.delete(`${API_URL}/${id}`);
}
