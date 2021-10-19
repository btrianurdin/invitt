import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { ROUTE_SIGNIN } from '../../../constants/api-paths';
import { useAuthContext } from '../../../context/AuthContext';
import { IUser } from '../../../interfaces';
import PageLoading from '../../atoms/PageLoading';

interface RouterPrivateProps {
  component(props: { user: IUser | null }): ReactElement;
  redirectPath?: string;
}

export default function RoutePrivate({
  component: Component,
  redirectPath = ROUTE_SIGNIN,
}: RouterPrivateProps): JSX.Element {
  const { user, isLoading, isLogin } = useAuthContext();
  const router = useRouter();

  if (isLoading) {
    return (
      <PageLoading w={42} h={42} />
    );
  }

  if (!isLoading && !isLogin) {
    router.push(redirectPath);
  }

  return <Component user={user} />;
}

RoutePrivate.defaultProps = {
  redirectPath: ROUTE_SIGNIN,
};
