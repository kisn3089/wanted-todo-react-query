import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const RequiredAuth = ({ children }: { children: ReactElement }) => {
  // return isToken ? <Navigate to="/login" replace /> : children;
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
