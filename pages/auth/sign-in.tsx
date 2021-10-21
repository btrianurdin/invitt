import tw from 'twin.macro';
import Head from 'next/head';
import Link from 'next/link';
import { LayoutAuth } from '../../components/organisms/Layout';
import AuthBox from '../../components/molecules/AuthBox';
import SignInForm from '../../components/molecules/SignInForm';
import RoutePublic from '../../components/organisms/Route/RoutePublic';
import { titleName } from '../../constants/commons';

export default function SignIn(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePublic>
        <Head>
          <title>{ titleName('Sign In') }</title>
        </Head>
        <AuthBox header="Sign In">
          <SignInForm />
          <div css={tw`mt-7 font-light flex justify-center mb-5`}>
            <p>Don&apos;t have an account yet? </p>
            <Link href="/auth/sign-up">
              <a tw="underline cursor-pointer ml-1"> Sign Up</a>
            </Link>
          </div>
        </AuthBox>
      </RoutePublic>
    </LayoutAuth>
  );
}
