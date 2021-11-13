import Head from 'next/head';
import InvitationEdit from '../../../components/organisms/InvitationEdit';
import RoutePrivate from '../../../components/organisms/Route/RoutePrivate';
import { titleName } from '../../../constants/commons';
import { AuthProvider } from '../../../context/AuthContext';

export default function InvEdit(): JSX.Element {
  return (
    <AuthProvider>
      <RoutePrivate>
        <Head>
          <title>{titleName('Edit Invitation')}</title>
        </Head>
        <InvitationEdit />
      </RoutePrivate>
    </AuthProvider>
  );
}
