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
      <div tw="relative min-h-screen overflow-hidden">
        <div tw="absolute -top-10 -left-10 z-index[1]">
          <img src="/assets/svg/shape-bg-top.svg" tw="width[70%] md:width[80%]" alt="" />
        </div>
        <Header />
        <div css={isFullContent ? tw`p-3` : tw`container mx-auto p-3`} tw="relative z-index[2]">
          {children}
        </div>
        <div tw="absolute -bottom-5 -right-5 z-index[1] flex justify-end">
          <img src="/assets/svg/shape-bg-bottom.svg" tw="width[80%] md:width[70%]" alt="" />
        </div>
      </div>
    </AuthProvider>
  );
}

LayoutAuth.defaultProps = {
  isFullContent: false,
};
