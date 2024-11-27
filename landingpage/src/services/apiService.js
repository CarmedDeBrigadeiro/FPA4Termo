import axios from 'axios';

// Configuração do axios com baseURL
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5067/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores para tratar erros e resposta
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Lógica para lidar com erro de autenticação (se necessário)
      console.error('Erro de autenticação. Redirecionando para login...');
      // Você pode redirecionar para uma página de login ou mostrar uma mensagem de erro aqui
    }
    return Promise.reject(error);
  }
);

// Função para buscar usuários
export const getUsuarios = async () => {
  try {
    const response = await apiClient.get('/usuarios');
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Erro desconhecido';
    console.error('Erro ao buscar usuários:', errorMessage);
    throw new Error(errorMessage);
  }
};

// Função para criar um novo usuário
export const createUsuario = async (usuario) => {
  try {
    const response = await apiClient.post('/usuarios', usuario);
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Erro desconhecido';
    console.error('Erro ao criar usuário:', errorMessage);
    throw new Error(errorMessage);
  }
};

// Função para buscar um usuário por ID
export const getUsuarioById = async (id) => {
  try {
    const response = await apiClient.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Erro desconhecido';
    console.error(`Erro ao buscar usuário com ID ${id}:`, errorMessage);
    throw new Error(errorMessage);
  }
};

// Função para atualizar um usuário existente
export const updateUsuario = async (id, usuario) => {
  try {
    const response = await apiClient.put(`/usuarios/${id}`, usuario);
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Erro desconhecido';
    console.error(`Erro ao atualizar usuário com ID ${id}:`, errorMessage);
    throw new Error(errorMessage);
  }
};

// Função para excluir um usuário
export const deleteUsuario = async (id) => {
  try {
    const response = await apiClient.delete(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'Erro desconhecido';
    console.error(`Erro ao excluir usuário com ID ${id}:`, errorMessage);
    throw new Error(errorMessage);
  }
};

// Exportando o serviço de usuário
export const UserService = {
  getUsuarios,
  createUsuario,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};
