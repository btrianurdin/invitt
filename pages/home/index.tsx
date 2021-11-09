import PageHome from '../../components/molecules/PageHome';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePrivate from '../../components/organisms/Route/RoutePrivate';
import { InvitationProvider } from '../../context/InvitationContext';

export default function Home(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePrivate>
        <InvitationProvider>
          <PageHome />
        </InvitationProvider>
      </RoutePrivate>
    </LayoutAuth>
  );
}
