import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const storeTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set("access_token", accessToken, { expires: 1, secure: true });
  Cookies.set("refresh_token", refreshToken, { expires: 7, secure: true });
};

export const getAccessToken = (): string | null => {
  return Cookies.get("access_token") || null;
};

export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Check if token is expired
  } catch (error) {
    return false;
  }
};

export const logout = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
  window.location.href = "/login";
};
