import { useRouter } from 'next/router';
import {
  ROUTE_HOME, ROUTE_SIGNIN, USER_COMPLETE, USER_INCOMPLETE,
} from '../../../constants/api-paths';
import { useAuthContext } from '../../../context/AuthContext';
import PageLoading from '../../atoms/PageLoading';

interface RouterPrivateProps {
  children: React.ReactNode;
  redirectPath?: string;
}

export default function RouteRegister({
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

  if (user && user.status === USER_COMPLETE) {
    router.push(ROUTE_HOME);
  }

  if (user && user.status === USER_INCOMPLETE) {
    return <>{children}</>;
  }

  return <PageLoading w={42} h={42} />;
}

RouteRegister.defaultProps = {
  redirectPath: ROUTE_SIGNIN,
};
