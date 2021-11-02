import tw from 'twin.macro';
import Link from 'next/link';
import Head from 'next/head';
import { LayoutAuth } from '../../components/organisms/Layout';
import AuthBox from '../../components/molecules/AuthBox';
import SignUpForm from '../../components/molecules/SignUpForm';
import RoutePublic from '../../components/organisms/Route/RoutePublic';
import { titleName } from '../../constants/commons';

export default function SignUp(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePublic>
        <Head><title>{ titleName('Sign Up') }</title></Head>
        <AuthBox header="Sign Up">
          <SignUpForm />

          <div css={tw`mt-7 font-light flex justify-center mb-5`}>
            <p>Have an account? </p>
            <Link href="/auth/sign-in">
              <a tw="underline cursor-pointer ml-1"> Sign In</a>
            </Link>
          </div>
        </AuthBox>
      </RoutePublic>
    </LayoutAuth>
  );
}
