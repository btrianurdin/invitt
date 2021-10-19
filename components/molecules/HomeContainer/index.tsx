import HomePage from '../../organisms/HomePage';
import RoutePrivate from '../../organisms/Route/RoutePrivate';

export default function HomeContainer(): JSX.Element {
  return <RoutePrivate component={HomePage} />;
}
