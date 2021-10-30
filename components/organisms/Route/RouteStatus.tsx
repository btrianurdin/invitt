import { useRouter } from 'next/router';
import { ROUTE_COMPLETE_PROFILE, USER_COMPLETE, USER_INCOMPLETE } from '../../../constants/api-paths';
import { IUser } from '../../../interfaces';
import PageLoading from '../../atoms/PageLoading';

interface RouteStatusProps {
  user: IUser;
  children: React.ReactNode;
}

export default function RouteStatus({ user, children }: RouteStatusProps): JSX.Element {
  const router = useRouter();

  if (!user) {
    return <PageLoading w={42} h={42} />;
  }

  if (user && user.status === USER_COMPLETE) {
    return <>{children}</>;
  }

  if (user && user.status === USER_INCOMPLETE) {
    router.push(ROUTE_COMPLETE_PROFILE);
  }

  return <PageLoading w={42} h={42} />;
}
