import tw from 'twin.macro';
import useInvitation from '../../../hooks/useInvitation';
import GreenLove from '../../../templates/GreenLove';
import PageLoading from '../../atoms/PageLoading';
import InvitationEditForm from './InvitationEditForm';
import InvitationEditHeader from './InvitationEditHeader';

export default function InvitationEdit(): JSX.Element {
  const {
    invitation, gallery, weddingDate, isLoading,
  } = useInvitation();
  return (
    <>
      <InvitationEditHeader />
      <div css={tw`mt-11`} />
      <InvitationEditForm />
      {
        isLoading ? <PageLoading w={30} h={30} />
          : (
            <GreenLove
              invitation={invitation}
            />
          )
      }
    </>
  );
}
