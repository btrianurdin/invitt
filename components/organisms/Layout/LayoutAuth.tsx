import { ReactNode } from 'react';
import { AuthProvider } from '../../../context/AuthContext';

interface LayoutAuthProps {
  children: ReactNode;
}

export default function LayoutAuth({ children }: LayoutAuthProps): JSX.Element {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
