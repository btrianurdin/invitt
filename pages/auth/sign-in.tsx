import tw from 'twin.macro';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { LayoutAuth } from '../../components/organisms/Layout';
import AuthBox from '../../components/molecules/AuthBox/AuthBox';

export default function SignIn(): JSX.Element {
  return (
    <LayoutAuth>
      <Head><title>Sign In | invitt - create your invitation website</title></Head>
      <AuthBox header="Sign In">
        <Input type="email" label="Email" id="email" placeholder="Your email" required />
        <Input type="password" label="Password" id="password" placeholder="Your Password" />
        <p tw="-mt-3 mb-5 font-light text-sm">
          <Link href="/forgot-password">
            <a tw="underline cursor-pointer">forgot password</a>
          </Link>
        </p>

        <Button text="Sign In" color="pink" block tw="px-3.5 py-2.5" />

        <div css={tw`mt-7 font-light flex justify-center mb-5`}>
          <p>Don&apos;t have an account yet? </p>
          <Link href="/auth/sign-up">
            <a tw="underline cursor-pointer ml-1"> Sign Up</a>
          </Link>
        </div>
      </AuthBox>
    </LayoutAuth>
  );
}
