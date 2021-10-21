import tw from 'twin.macro';
import Link from 'next/link';
import Head from 'next/head';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { LayoutAuth } from '../../components/organisms/Layout';
import Select from '../../components/atoms/Select';
import AuthBox from '../../components/molecules/AuthBox';

export default function SignUp(): JSX.Element {
  return (
    <LayoutAuth>
      <Head><title>Sign Up | invitt - create your invitation website</title></Head>
      <AuthBox header="Sign Up">
        <Input type="email" label="Email" id="email" placeholder="Your email" />
        <Input type="text" label="Fullname" id="fullname" placeholder="Your fullname" />
        <Input type="password" label="Password" id="password" placeholder="Your password" />
        <Select label="Gender">
          <option disabled defaultValue="man">Select gender</option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </Select>
        <Input type="text" label="Phone Number" id="phoneNumber" placeholder="Your phone number" />
        <Button text="Sign Up" color="pink" block tw="px-3.5 py-2.5" />

        <div css={tw`mt-7 font-light flex justify-center mb-5`}>
          <p>Have an account? </p>
          <Link href="/auth/sign-in">
            <a tw="underline cursor-pointer ml-1"> Sign In</a>
          </Link>
        </div>
      </AuthBox>
    </LayoutAuth>
  );
}
