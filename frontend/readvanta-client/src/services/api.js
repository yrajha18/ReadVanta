import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
export const API_URL = `${BASE_URL}/api`;

// Create axios instance with interceptor for token
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getBooks = async (search = '', category = 'All') => {
  const response = await api.get('/books', { params: { search, category } });
  return response.data;
};

export const getBookById = async (id) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

export const getClubs = async () => {
  const response = await api.get('/clubs');
  return response.data;
};

export const getClubById = async (id) => {
  const response = await api.get(`/clubs/${id}`);
  return response.data;
};

export const joinClub = async (id) => {
  const response = await api.post(`/clubs/${id}/join`);
  return response.data;
};

export const generateSummary = async (bookData) => {
  const response = await api.post('/ai/summary', bookData);
  return response.data;
};

export const sendAiChat = async (prompt) => {
  const response = await api.post('/ai/chat', { prompt });
  return response.data;
};

export default api;
