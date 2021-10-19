import HomeContainer from '../../components/molecules/HomeContainer';
import { LayoutAuth } from '../../components/organisms/Layout';

export default function Home(): JSX.Element {
  return (
    <LayoutAuth>
      <HomeContainer />
    </LayoutAuth>
  );
}
