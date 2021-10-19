import { IUser } from '../../../interfaces';

export default function HomePage({ user }: { user: IUser }): JSX.Element {
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
