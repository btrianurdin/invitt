import { LayoutAuth } from '../../components/organisms/Layout';
import { useAuthContext } from '../../context/AuthContext';

const Test = (): JSX.Element => {
  const { user, isLoading } = useAuthContext();

  return (
    <div>
      {
        user?.fullname
      }
    </div>
  );
};

export default function Login(): JSX.Element {
  return (
    <LayoutAuth>
      <Test />
    </LayoutAuth>
  );
}
