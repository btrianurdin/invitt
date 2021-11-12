import Head from 'next/head';
import tw from 'twin.macro';
import Button from '../../components/atoms/Button';
import EditAccount from '../../components/organisms/EditAccount';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePrivate from '../../components/organisms/Route/RoutePrivate';
import { titleName } from '../../constants/commons';

export default function Account(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePrivate>
        <Head>
          <title>{titleName('Home')}</title>
        </Head>
        <div css={tw`my-5 font-family['Poppins'] md:(grid grid-cols-2 gap-14)`}>
          <EditAccount />
          <div tw="mt-12 md:mt-0">
            <h1 tw="text-xl font-medium pb-1.5 border-b border-pink-400 inline-block">Change Password</h1>
            <br />
            <Button text="Change Password" color="pink" tw="my-6 px-6 py-2.5 " />
          </div>
        </div>
      </RoutePrivate>
    </LayoutAuth>
  );
}
