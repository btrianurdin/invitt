import tw from 'twin.macro';
import {
  FiCalendar, FiMapPin, FiSettings,
} from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Button from '../../atoms/Button';
import ProfileArea from './ProfileArea';
import { weddingdateConvert } from '../../../services/utils';
import useInvitation from '../../../hooks/useInvitation';
import EditNotif from '../../atoms/EditNotif';
import { ROUTE_INVITATION_EDIT } from '../../../constants/api-paths';

export default function PageHome(): JSX.Element {
  const [editTooltip, setEditTooltip] = useState(true);
  const linkRef = useRef(null);
  const { invitation, isLoading, weddingDate } = useInvitation();
  const router = useRouter();

  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText((linkRef.current as any).value);
      toast.success('Link has been copy');
    }
  };

  useEffect(() => {
    setTimeout(() => { setEditTooltip(false); }, 5000);
  }, []);

  return (
    <div css={tw`my-5 font-family['Poppins']`}>
      <div tw="flex justify-end py-3 relative">
        <Button
          text={<FiSettings tw="text-xl text-blue-700 cursor-pointer" />}
          color="default"
          tw="p-0"
          onMouseOver={() => setEditTooltip(true)}
          onMouseOut={() => setEditTooltip(false)}
          onClick={() => router.push(ROUTE_INVITATION_EDIT)}
        />
        {
          editTooltip && <EditNotif />
        }
      </div>
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
            <Button text="Copy" color="purple" onClick={handleCopy} disabled={isLoading} />
            <Button text="Open Web" color="success" disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}
