import tw from 'twin.macro';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import Button from '../../atoms/Button';
import ProfileArea from './ProfileArea';
import { weddingdateConvert } from '../../../services/utils';
import { useInvitationContext } from '../../../context/InvitationContext';

export default function PageHome(): JSX.Element {
  const linkRef = useRef(null);
  const { invitation, isLoading, weddingDate } = useInvitationContext();

  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText((linkRef.current as any).value);
      toast.success('Link has been copy');
    }
  };

  return (
    <div css={tw`my-5 font-family['Poppins']`}>
      <ProfileArea
        isLoading={isLoading}
        groom_fullname={invitation?.groom_fullname || '-'}
        bride_pic={invitation?.bride_pic}
        groom_pic={invitation?.groom_pic}
        bride_fullname={invitation?.bride_fullname || '-'}
      />
      <div tw="mt-7">
        <div tw="width[250px] mx-auto">
          <div tw="flex items-center my-4">
            <FiCalendar tw="text-2xl mr-2 width[20px]" />
            <p tw="flex-1">
              {isLoading ? 'loading...' : weddingdateConvert(weddingDate?.[0].date)}
            </p>
          </div>
          <div tw="flex items-center my-4">
            <FiMapPin tw="text-2xl mr-2 width[20px]" />
            <p tw="flex-1">{isLoading ? 'loading...' : weddingDate?.[0].place_name}</p>
          </div>
        </div>
        <p tw="text-center">Your invitation link:</p>
        <div tw="mx-auto width[300px]">
          <input
            type="text"
            name="link"
            tw="py-2 px-3 box-border w-full border border-blue-600 focus:outline-none rounded-md my-3"
            value={isLoading ? 'loading...' : `https://invitt.com/${invitation?.web_url}`}
            readOnly
            ref={linkRef}
          />
          <div tw="grid grid-cols-2 gap-5">
            <Button text="Copy" color="purple" onClick={handleCopy} />
            <Button text="Open Web" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
}
