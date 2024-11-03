import axios from 'axios';

// Configure a URL base para a API
const apiClient = axios.create({
  baseURL: 'http://localhost:5067/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getUsuarios = async () => {
  try {
    const response = await apiClient.get('/usuarios');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

export const createUsuario = async (usuario) => {
  try {
    const response = await apiClient.post('/usuarios', usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};
