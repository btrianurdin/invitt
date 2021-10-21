import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import AuthBox from '../../components/molecules/AuthBox';
import { LayoutAuth } from '../../components/organisms/Layout';
import { ROUTE_SIGNIN } from '../../constants/api-paths';
import { capitalize, titleName } from '../../constants/commons';
import { setResetPassword, setResetPasswordCheck } from '../../services/auth';

interface ResetPasswordProps {
  token: string;
}

export default function ResetPassword({ token }: ResetPasswordProps): JSX.Element {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    if (password.trim().length < 1 || confirmPassword.trim().length < 1) {
      toast.error('Password is required');
    } else if (password !== confirmPassword) {
      toast.error('Confirm password is wrong');
    } else {
      const res = await setResetPassword(token, { newPassword: password });

      if (res.status === 'error') {
        toast.error(capitalize(res.message));
      } else {
        toast.success('Successfully reset your password');

        route.push(ROUTE_SIGNIN);
      }
    }
  };

  return (
    <LayoutAuth>
      <Head>
        <title>{ titleName('Forgot Password') }</title>
      </Head>
      <AuthBox header="Reset Password">
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            label="New Password"
            required
            id="newPassword"
            placeholder="New password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            label="Confirm Password"
            required
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            text="Send Request"
            typeSubmit
            color="pink"
            block
            tw="px-3.5 py-2.5"
            isLoading={loading}
          />
        </form>
        <div css={tw`mb-2`} />
      </AuthBox>
    </LayoutAuth>
  );
}

interface IReqQuery {
  token: string | undefined;
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { token } = req.query as unknown as IReqQuery;

  const checkToken = await setResetPasswordCheck(token || 'notoken');

  if (!token || token === '' || checkToken.status === 'error') {
    return {
      redirect: {
        destination: ROUTE_SIGNIN,
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
};
