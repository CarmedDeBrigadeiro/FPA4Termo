
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5067/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  async login(email, password) {
    try {
      const response = await apiClient.post('/login', { email, password });
      return response.data; 
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  
  async register(userData) {
    try {
      const response = await apiClient.post('/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};