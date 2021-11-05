import PageHome from '../../components/molecules/PageHome';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePrivate from '../../components/organisms/Route/RoutePrivate';

export default function Home(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePrivate>
        <PageHome />
      </RoutePrivate>
    </LayoutAuth>
  );
}
