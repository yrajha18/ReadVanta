import { API_URL } from "./api";

const API = `${API_URL}/auth`;

export const signupUser = async (formData) => {
  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  localStorage.setItem("token", data.token);

  return data;
};


export const loginUser = async (formData) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message);

  localStorage.setItem("token", data.token);

  return data;
};


// 🔐 Get current user
export const getMe = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};