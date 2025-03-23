import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API;

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  roles?: string[]; // Optional: Assign user roles during registration
}

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });

    if (response.status === 200) {
      return response.data; // IAM Service returns access & refresh token
    }
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Register Response:", response); // Debugging log

    if (response.status === 200 || response.status === 201) {
      return response.data; // Directly return the response data
    }

    throw new Error("Unexpected response from server");
  } catch (error: any) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};


