import Head from 'next/head';
import tw from 'twin.macro';
import EditPassword from '../../components/organisms/EditPassword';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePrivate from '../../components/organisms/Route/RoutePrivate';
import { titleName } from '../../constants/commons';

export default function EditPasswordPage(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePrivate>
        <Head>
          <title>{titleName('Edit Your Password')}</title>
        </Head>
        <div css={tw`my-5 font-family['Poppins'] md:(grid grid-cols-2 gap-14)`}>
          <EditPassword />
        </div>
      </RoutePrivate>
    </LayoutAuth>
  );
}
