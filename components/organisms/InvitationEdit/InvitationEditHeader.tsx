import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import tw, { css } from 'twin.macro';
import { ROUTE_HOME } from '../../../constants/api-paths';
import { colorTheme } from '../../../constants/commons';
import Button from '../../atoms/Button';

const headerStyle = css`
  ${tw`flex justify-between font-family['Poppins'] items-center px-3 py-2 fixed bg-white w-full 
    top-0 left-0 z-index[1000] shadow-md`}
  & *{
    color: ${colorTheme.pink};
  }
`;

export default function InvitationEditHeader(): JSX.Element {
  const router = useRouter();

  return (
    <div css={headerStyle}>
      <Button
        text={<FiArrowLeft tw="text-lg" />}
        color="default"
        tw="p-0 m-0"
        onClick={() => router.push(ROUTE_HOME)}
      />
      <h1 tw="text-lg font-semibold">Invitt.</h1>
      <div tw="bg-pink-500 rounded-full animate-pulse text-white w-4 h-4 hidden sm:block" />
    </div>
  );
}
