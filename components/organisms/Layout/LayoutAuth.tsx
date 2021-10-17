import { ReactNode } from 'react';
import tw from 'twin.macro';
import { AuthProvider } from '../../../context/AuthContext';
import Header from '../../molecules/Header';

interface LayoutAuthProps {
  children: ReactNode;
  isFullContent?: boolean;
}

export default function LayoutAuth({ children, isFullContent }: LayoutAuthProps): JSX.Element {
  return (
    <AuthProvider>
      <Header />
      <div css={isFullContent ? tw`p-3` : tw`container mx-auto p-3`}>
        {children}
      </div>
    </AuthProvider>
  );
}

LayoutAuth.defaultProps = {
  isFullContent: false,
};
