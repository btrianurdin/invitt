import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

const styles = {
  tab: tw`md:width[600px] bg-white shadow-lg mx-auto my-12 rounded-sm font-family['Poppins']`,
  tabMenu: css`
    ${tw`w-full border-b flex flex-col md:flex-row`};
    & button{
      ${tw`p-5 flex-1`}
      &:hover{
        ${tw`bg-gray-200`}
      }
      &.active{
        ${tw`transition-colors duration-300`};
        background-color: ${colorTheme.pink};
        color: #fff;
      }
    }
  `,
  tabBody: css`
    ${tw`p-5`};
    & > h3{
      ${tw`text-2xl py-3 text-center`};
      color: ${colorTheme.pink};
    }
  `,
  tabContent: css`
    ${tw`hidden py-3`};
    &.active{
      ${tw`block`}
    }
  `,
  btnDisabled: tw`cursor-not-allowed`,
};

export default styles;
