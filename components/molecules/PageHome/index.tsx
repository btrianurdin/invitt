import tw from 'twin.macro';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../../context/AuthContext';
import Button from '../../atoms/Button';
import ProfileArea from './ProfileArea';

export default function PageHome(): JSX.Element {
  const { user } = useAuthContext();
  const linkRef = useRef(null);

  const handleCopy = () => {
    if (navigator) {
      navigator.clipboard.writeText((linkRef.current as any).value);
      toast.success('Link has been copy');
    }
  };

  return (
    <div css={tw`my-5 font-family['Poppins']`}>
      <ProfileArea />
      <div tw="mt-7">
        <div tw="width[250px] mx-auto">
          <div tw="flex items-center my-4">
            <FiCalendar tw="text-2xl mr-2 width[20px]" />
            <p tw="flex-1">Wednesday, Juni 26, 2021</p>
          </div>
          <div tw="flex items-center my-4">
            <FiMapPin tw="text-2xl mr-2 width[20px]" />
            <p tw="flex-1">Gedung Pancasila, Jakarta</p>
          </div>
        </div>
        <p tw="text-center">Your invitation link:</p>
        <div tw="mx-auto width[300px]">
          <input
            type="text"
            name="link"
            tw="py-2 px-3 box-border w-full border border-blue-600 focus:outline-none rounded-md my-3"
            value="https://invitt.com/alex-maemun"
            readOnly
            ref={linkRef}
          />
          <div tw="grid grid-cols-2 gap-5">
            <Button text="Copy" color="purple" onClick={handleCopy} />
            <Button text="Share" color="success" />
          </div>
        </div>
      </div>
    </div>
  );
}
