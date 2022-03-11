import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
