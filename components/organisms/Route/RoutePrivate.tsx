import { useRouter } from 'next/router';
import {
  ROUTE_COMPLETE_PROFILE, ROUTE_SIGNIN, USER_COMPLETE, USER_INCOMPLETE,
} from '../../../constants/api-paths';
import { useAuthContext } from '../../../context/AuthContext';
import PageLoading from '../../atoms/PageLoading';

interface RouterPrivateProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export default function RoutePrivate({
  redirectPath = ROUTE_SIGNIN,
  children,
}: RouterPrivateProps): JSX.Element {
  const { user, isLoading, isLogin } = useAuthContext();
  const router = useRouter();

  if (isLoading) {
    return <PageLoading w={42} h={42} />;
  }

  if (!isLoading && !isLogin) {
    router.push(redirectPath);
  }

  if (user && user.status === USER_INCOMPLETE) {
    router.push(ROUTE_COMPLETE_PROFILE);
  }

  if (user && user.status === USER_COMPLETE) {
    return <>{children}</>;
  }

  return <PageLoading w={42} h={42} />;
}

RoutePrivate.defaultProps = {
  redirectPath: ROUTE_SIGNIN,
};
