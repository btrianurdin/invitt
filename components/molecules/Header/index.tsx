import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import LogoInvitt from '../../atoms/LogoInvitt';
import navbars from '../../../constants/navbars';
import Button from '../../atoms/Button';
import { ROUTE_SIGNIN } from '../../../constants/api-paths';

const styles = {
  navContainer: tw`relative z-index[10] flex flex-col md:flex-row container mx-auto p-3 items-center 
    justify-between font-family["Poppins"] `,
  navLogo: tw`flex w-full justify-between md:(mr-6 w-auto)`,
  navMenu: css`
    ${tw`mt-3 rounded-md hidden flex-col bg-white shadow-lg items-center justify-between absolute top-12
      width[95%]
      md:(relative flex flex-row bg-transparent mt-0 shadow-none h-full top-0 w-full)`}
    &.nav-open{
      ${tw`flex transition-all duration-300 ease-in-out`};
    }
  `,
  navUl: css`
    ${tw`flex flex-col text-center flex-1 md:flex-row`}
    & li{
      ${tw`py-3 px-6`}
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
  const [navOpen, setNavOpen] = useState(false);

  const signOutHandler = () => {
    setlogoutLoading(true);
    const checkCookies = Cookies.get('inv_token');

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
    <div css={styles.navContainer}>
      <div css={styles.navLogo}>
        <LogoInvitt fill="#F037A5" tw="h-8 -ml-3" />
        <button type="button" tw="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          <FiMenu tw="text-2xl" />
        </button>
      </div>
      <div css={styles.navMenu} className={navOpen ? 'nav-open' : ''}>
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
        <div tw="pt-4 pb-7 border-t w-full text-center md:(pt-0 pb-0 border-none text-right)">
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
                  <Button
                    text="Sign In"
                    color="pink"
                    outline
                    tw="mr-5"
                    onClick={() => router.push('/auth/sign-in')}
                  />
                  <Button text="Sign Up" color="pink" onClick={() => router.push('/auth/sign-up')} />
                </>
              )
        }
        </div>
      </div>
    </div>
  );
}
