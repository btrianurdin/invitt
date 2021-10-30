import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { ROUTE_HOME } from '../../../constants/api-paths';
import { useAuthContext } from '../../../context/AuthContext';
import PageLoading from '../../atoms/PageLoading';

interface RouterPrivateProps {
  redirectPath?: string;
  children: ReactNode;
}

export default function RoutePublic({
  children,
  redirectPath = ROUTE_HOME,
}: RouterPrivateProps): JSX.Element {
  const { isLoading, isLogin } = useAuthContext();
  const router = useRouter();

  if (isLoading) {
    return (
      <PageLoading w={42} h={42} />
    );
  }

  if (!isLoading && isLogin) {
    router.push(redirectPath);
  }

  if (!isLoading && !isLogin) {
    return <>{children}</>;
  }
  return <PageLoading w={42} h={42} />;
}

RoutePublic.defaultProps = {
  redirectPath: ROUTE_HOME,
};
