// src/services/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com/api', // Substitua pela URL base do seu backend
});

export default {
  getUser(userId) {
    return api.get(`/users/${userId}`);
  },
  updateUserProfile(userId, profileData) {
    return api.put(`/users/${userId}`, profileData);
  },
};
