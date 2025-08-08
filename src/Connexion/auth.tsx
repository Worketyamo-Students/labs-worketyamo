import api from "../connectapi/api.tsx";
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}