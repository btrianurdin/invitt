import { useState } from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { ISignIn } from '../../../interfaces';
import { setSignIn } from '../../../services/auth';
import { ROUTE_HOME } from '../../../constants/api-paths';
import { capitalize } from '../../../constants/commons';

export default function SignInForm(): JSX.Element {
  const [signinData, setSigninData] = useState<ISignIn>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    if (signinData.email.trim() === '' || signinData.email.trim() === '') {
      toast.error('Email and password is required!');
    } else {
      const res = await setSignIn(signinData);

      if (res.status === 'error') {
        toast.error(capitalize(res.message));
      } else {
        const encodeToken = Buffer.from(res.token).toString('base64');
        Cookies.set('inv_token', encodeToken);

        router.push(ROUTE_HOME);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        label="Email"
        id="email"
        placeholder="Your email"
        required
        onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
      />
      <Input
        type="password"
        label="Password"
        id="password"
        placeholder="Your Password"
        required
        onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
      />
      <p css={tw`-mt-3 mb-5 font-light text-sm`}>
        <Link href="/auth/forgot-password">
          <a tw="underline cursor-pointer">forgot password</a>
        </Link>
      </p>

      <Button text="Sign In" typeSubmit color="pink" block tw="px-3.5 py-2.5" isLoading={loading} disabled={loading} />
    </form>
  );
}
