import { ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../../constants/commons';

interface AuthBoxProps {
  header: string;
  children: ReactNode;
}

const styles = {
  loginBox: tw`bg-white shadow-lg md:width[450px] mx-auto my-12 font-family["Poppins"] rounded-sm`,
  loginText: css`
    ${tw`text-center text-3xl font-medium py-3`}
    color: ${colorTheme.pink}
  `,
};

export default function AuthBox({ header, children }: AuthBoxProps): JSX.Element {
  return (
    <div css={styles.loginBox}>
      <div tw="p-5">
        <h1 css={styles.loginText}>{header}</h1>
        <div tw="border-b border-gray-200" />
        <div tw="mt-5">
          {children}
        </div>
      </div>
    </div>
  );
}
