import { ReactNode } from 'react';
import tw from 'twin.macro';
import { AuthProvider } from '../../../context/AuthContext';

interface LayoutAuthProps {
  children: ReactNode;
}

export default function LayoutAuth({ children }: LayoutAuthProps): JSX.Element {
  return (
    <AuthProvider>
      <div css={tw`container`}>
        {children}
      </div>
    </AuthProvider>
  );
}
