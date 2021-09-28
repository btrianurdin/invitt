import {
  FiImage, FiCalendar, FiMessageSquare, FiBook,
} from 'react-icons/fi';
import tw, { css } from 'twin.macro';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const styles = {
  navbar: (): any => [
    css`
      background-color: #ff6675;
      z-index: 1200;
      ${tw`w-full p-1.5 font-family["Poppins"] text-white shadow-xl fixed bottom-0 justify-evenly items-center flex md:(top-0 sticky p-3)`}
      & > h1 {
        ${tw`font-size[22px] font-bold`}
      }
      & > ul {
        ${tw`flex width[100%] md:width[60%] lg:width[55%] justify-between items-center`}
        & li {
          ${tw`px-1.5 pt-1 cursor-pointer rounded-md transition-colors duration-200 ease-linear text-xs font-light md:(px-4 py-2 text-base font-medium)`}
          &:hover {
            background-color: #e95362;
          }
          & span {
            ${tw`flex items-center justify-center pb-1 md:hidden`}
          }
        }
      }
    `,
  ],
};

export default function Navbar(): JSX.Element {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY));
    return () => window.removeEventListener('scroll', () => setScrollY(window.scrollY));
  }, [scrollY]);

  return (
    <>
      {
      scrollY > 20
      && (
      <div css={styles.navbar}>
        <h1 css={tw`hidden md:block`}>A&S</h1>
        <ul>
          <li>
            <Link to="">
              <span><FiImage tw="h-6 w-6" /></span>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="">
              <span><FiCalendar tw="h-6 w-6" /></span>
              Date
            </Link>
          </li>
          <li>
            <Link to="">
              <span><FiMessageSquare tw="h-6 w-6" /></span>
              Messages
            </Link>
          </li>
          <li>
            <Link to="">
              <span><FiBook tw="h-6 w-6" /></span>
              Guest Book
            </Link>
          </li>
        </ul>
      </div>
      )
    }
    </>
  );
}
