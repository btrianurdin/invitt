import Head from 'next/head';
import RoutePrivate from '../../../components/organisms/Route/RoutePrivate';
import { titleName } from '../../../constants/commons';
import { AuthProvider } from '../../../context/AuthContext';
import GreenLove from '../../../templates/GreenLove';

export default function InvEdit(): JSX.Element {
  return (
    <AuthProvider>
      <RoutePrivate>
        <Head>
          <title>{titleName('Edit Invitation')}</title>
        </Head>
        <GreenLove invitation={{ web_url: 'tes' }} />
      </RoutePrivate>
    </AuthProvider>
  );
}
