import { useAtom } from 'jotai';
import { useEffect } from 'react';
import tw from 'twin.macro';
import { weddingDateDummy } from '../../../constants/dummy-data';
import useInvitation from '../../../hooks/useInvitation';
import { invitationAtom, weddingDateAtom } from '../../../store';
import GreenLove from '../../../templates/GreenLove';
import PageLoading from '../../atoms/PageLoading';
import InvitationEditForm from './InvitationEditForm';
import InvitationEditHeader from './InvitationEditHeader';

export default function InvitationEdit(): JSX.Element {
  const {
    invitation, gallery, weddingDate, isLoading,
  } = useInvitation();
  const [inv, setInv] = useAtom(invitationAtom);
  const [weddDate, setWeddDate] = useAtom(weddingDateAtom);

  useEffect(() => {
    setInv({...inv, ...invitation});
    setWeddDate(weddingDate);
  }, [invitation, weddingDate]);
  
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
                weddingDates={weddDate}
              />
            </>
          )
      }
    </>
  );
}
