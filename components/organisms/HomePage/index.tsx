import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ROUTE_COMPLETE_PROFILE, USER_VAR_STATUS } from '../../../constants/api-paths';
import { IUser } from '../../../interfaces';

export default function HomePage({ user }: { user: IUser }): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div>
      {
        user && (
          'haloo'
        )
      }
    </div>
  );
}
