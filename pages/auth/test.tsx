import PageLoading from '../../components/atoms/PageLoading';
import { LayoutAuth } from '../../components/organisms/Layout';

export default function Test(): JSX.Element {
  return (
    <LayoutAuth>
      <PageLoading w={42} h={42} />
    </LayoutAuth>
  );
}
