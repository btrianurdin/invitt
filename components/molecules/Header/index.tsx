import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import LogoInvitt from '../../atoms/LogoInvitt';
import navbars from '../../../constants/navbars';
import Button from '../../atoms/Button';
import { ROUTE_SIGNIN } from '../../../constants/api-paths';

const styles = {
  navbarContainer: tw`relative z-index[2] flex container mx-auto p-3 items-center justify-between font-family["Poppins"]`,
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
  const [logoutLoading, setlogoutLoading] = useState(false);

  const signOutHandler = () => {
    setlogoutLoading(true);
    const checkCookies = Cookies.get('inv_token');
    console.log(logoutLoading);

    if (checkCookies) {
      Cookies.remove('inv_token');

      setTimeout(() => {
        if (window) {
          window.location.assign(ROUTE_SIGNIN);
        } else {
          router.reload();
        }
      }, 500);
    }
  };

  return (
    <div css={styles.navbarContainer}>
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
              <Button
                text="Sign Out"
                color="pink"
                onClick={signOutHandler}
                isLoading={logoutLoading}
                disabled={logoutLoading}
              />
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
