import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuthContext } from '../../../context/AuthContext';
import LogoInvitt from '../../atoms/LogoInvitt';
import navbars from '../../../constants/navbars';
import Button from '../../atoms/Button';

const styles = {
  navUl: css`
    ${tw`flex`}
    & li{
      ${tw`p-4`}
      & a:hover{
        ${tw`cursor-pointer text-gray-600`}
      }
    }
  `,
  navActive: tw`color[#F037A5] hover:color[#F037A5]!`,
};

export default function Header(): JSX.Element {
  const { isLogin } = useAuthContext();
  const router = useRouter();

  return (
    <div css={tw`relative z-index[2] flex container mx-auto p-3 items-center justify-between font-family["Poppins"]`}>
      <div tw="flex items-center">
        <div tw="md:mr-4">
          <LogoInvitt fill="#F037A5" tw="h-8 -ml-3" />
        </div>
        {
          isLogin && (
          <ul css={styles.navUl}>
            {
              navbars.map((navbar) => (
                <li key={navbar.name}>
                  <Link href={navbar.path}>
                    <a css={router.pathname === navbar.path ? styles.navActive : ''}>
                      {navbar.name}
                    </a>
                  </Link>
                </li>
              ))
            }
          </ul>
          )
        }
      </div>
      <div>
        {
          isLogin
            ? (
              <Button text="Logout" color="pink" />
            ) : (
              <>
                <Button text="Sign In" color="pink" outline tw="mr-5" onClick={() => router.push('/auth/sign-in')} />
                <Button text="Sign Up" color="pink" onClick={() => router.push('/auth/sign-up')} />
              </>
            )
        }
      </div>
    </div>
  );
}
