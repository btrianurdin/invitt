import Head from 'next/head';
import tw from 'twin.macro';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import AuthBox from '../../components/molecules/AuthBox';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePublic from '../../components/organisms/Route/RoutePublic';
import { titleName } from '../../constants/commons';
import { setForgotPassword } from '../../services/auth';

export default function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabledForm, setDisabledForm] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    if (email.trim().length < 1) {
      toast.error('Email is required!');
    } else {
      const res = await setForgotPassword({ email });

      if (res.status === 'error') {
        toast.error('Email is not found');
      } else {
        toast.success('Please check your email!');
        setDisabledForm(true);
      }
    }
    setLoading(false);
  };

  return (
    <LayoutAuth>
      <RoutePublic>
        <Head>
          <title>{ titleName('Forgot Password') }</title>
        </Head>
        <AuthBox header="Forgot Password">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="Email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabledForm}
            />

            <Button
              text="Send Request"
              typeSubmit
              color="pink"
              block
              tw="px-3.5 py-2.5"
              isLoading={loading}
              disabled={disabledForm || loading}
            />
          </form>
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
