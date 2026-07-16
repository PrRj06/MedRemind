import { createContext, useState, useEffect, useCallback } from "react";
import {
  loginRequest,
  registerRequest,
  logoutRequest,
  getCurrentUserRequest,
} from "../services/auth.service";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = useCallback(async () => {
    try {
      const currentUser = await getCurrentUserRequest();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const login = useCallback(async (credentials) => {
    await loginRequest(credentials);
    const currentUser = await getCurrentUserRequest();
    setUser(currentUser);
    return currentUser;
  }, []);

  const register = useCallback(async (payload) => {
    await registerRequest(payload);
  }, []);

  const logout = useCallback(async () => {
    await logoutRequest();
    setUser(null);
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}