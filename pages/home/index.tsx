import Head from 'next/head';
import PageHome from '../../components/molecules/PageHome';
import { LayoutAuth } from '../../components/organisms/Layout';
import RoutePrivate from '../../components/organisms/Route/RoutePrivate';
import { titleName } from '../../constants/commons';

export default function Home(): JSX.Element {
  return (
    <LayoutAuth>
      <RoutePrivate>
        <Head>
          <title>{titleName('Home')}</title>
        </Head>
        <PageHome />
      </RoutePrivate>
    </LayoutAuth>
  );
}
