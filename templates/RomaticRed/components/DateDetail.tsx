import { FiCalendar, FiMap, FiMapPin } from 'react-icons/fi';
import tw from 'twin.macro';
import { TitleLine } from '../styles';

type DateDetailProps = {
  title: string;
  placeName: string;
  date: string;
  location: string;
}

export default function DateDetail({
  title, placeName, date, location,
}: DateDetailProps): JSX.Element {
  return (
    <>
      <TitleLine>{title}</TitleLine>
      <div tw="text-center width[85%] sm:width[75%] lg:width[55%] mx-auto py-6 font-family['Poppins']">
        <div css={tw`flex items-center flex-col py-2`}>
          <FiMapPin tw="w-7 h-7" />
          <h5 tw="font-size[16px] md:font-size[18px] font-medium py-2">{placeName}</h5>
        </div>
        <div css={tw`flex items-center flex-col py-2`}>
          <FiCalendar tw="w-7 h-7" />
          <h5 tw="font-size[16px] md:font-size[18px] font-medium py-2">{date}</h5>
        </div>
        <div css={tw`flex items-center flex-col py-2`}>
          <FiMap tw="w-7 h-7" />
          <h5 tw="font-size[16px] md:font-size[18px] font-medium py-2">
            {location}
          </h5>
        </div>
      </div>
    </>
  );
}
