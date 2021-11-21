import { useAtom } from 'jotai';
import { useEffect } from 'react';
import tw from 'twin.macro';
import useInvitation from '../../../hooks/useInvitation';
import { invitationAtom } from '../../../store';
import GreenLove from '../../../templates/GreenLove';
import PageLoading from '../../atoms/PageLoading';
import InvitationEditForm from './InvitationEditForm';
import InvitationEditHeader from './InvitationEditHeader';

export default function InvitationEdit(): JSX.Element {
  const {
    invitation, gallery, weddingDate, isLoading,
  } = useInvitation();
  const [inv, setInv] = useAtom(invitationAtom);

  useEffect(() => {
    setInv({...inv, ...invitation});
  }, [invitation]);

  return (
    <>
      <InvitationEditHeader />
      <div css={tw`mt-11`} />
      {
        isLoading ? <PageLoading w={30} h={30} />
          : (
            <>
              <InvitationEditForm />
              <GreenLove
                invitation={inv}
              />
            </>
          )
      }
    </>
  );
}
