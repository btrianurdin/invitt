import tw, { css } from 'twin.macro';
import Link from 'next/link';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { LayoutAuth } from '../../components/organisms/Layout';
import { colorTheme } from '../../constants/commons';

const styles = {
  loginBox: tw`bg-white shadow-lg md:width[450px] mx-auto mt-12 font-family["Poppins"] rounded-sm`,
  loginText: css`
    ${tw`text-center text-3xl font-medium py-3`}
    color: ${colorTheme.pink}
  `,
};

export default function Login(): JSX.Element {
  return (
    <LayoutAuth>
      <div css={styles.loginBox}>
        <div tw="p-5">
          <h1 css={styles.loginText}>Sign In</h1>
          <div tw="border-b border-gray-200" />
          <div tw="mt-5">
            <Input type="email" label="Email" id="email" placeholder="Your email" />
            <Input type="password" label="Password" id="password" placeholder="Your Password" />
            <p tw="-mt-3 mb-5 font-light text-sm">
              <Link href="/forgot-password">
                <a tw="underline cursor-pointer">forgot password</a>
              </Link>
            </p>

            <Button text="Sign In" color="pink" block tw="px-3.5 py-2.5" />

            <p tw="mt-7 font-light flex justify-center mb-5">
              <p>Don&apos;t have an account yet? </p>
              <Link href="/forgot-password">
                <a tw="underline cursor-pointer ml-1"> Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
