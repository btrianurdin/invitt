import tw, { css } from 'twin.macro';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../../context/AuthContext';
import LogoInvitt from '../../atoms/LogoInvitt';
import navbars from '../../../constants/navbars';

const styles = {
  navUl: css`
    ${tw`flex`}
    & li{
      ${tw`p-4`}
    }
  `,
  navActive: tw`color[#F037A5]`,
};

export default function Header(): JSX.Element {
  const { isLogin } = useAuthContext();
  const router = useRouter();

  return (
    <div css={tw`flex container mx-auto p-3 items-center font-family["Poppins"]`}>
      <div tw="flex items-center">
        <div tw="md:mr-4">
          <LogoInvitt fill="#F037A5" tw="h-7 -ml-5" />
        </div>
        {
          isLogin && (
          <ul css={styles.navUl}>
            {
              navbars.map((navbar) => (
                <li key={navbar.name}>
                  <a href={navbar.path} css={router.pathname === navbar.path ? styles.navActive : ''}>
                    {navbar.name}
                  </a>
                </li>
              ))
            }
          </ul>
          )
        }
      </div>
      <div>
        123
      </div>
    </div>
  );
}
