import { ReactElement } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

const boxStyle = css`
  ${tw`py-2 px-5 absolute text-white right-12 top-1 rounded-sm`};
  background-color: ${colorTheme.pink};
`;

export default function EditNotif(): ReactElement {
  return (
    <>

      <div css={boxStyle}>
        Edit your invitation!
      </div>
      <div css={[
        css`
          border-top: 13px solid transparent;
          border-left: 15px solid ${colorTheme.pink};
          border-bottom: 13px solid transparent;
        `,
        tw`absolute right-9 top-3`,
      ]}
      />
    </>
  );
}
