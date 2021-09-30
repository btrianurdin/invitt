import { FiCalendar, FiMap, FiMapPin } from 'react-icons/fi';
import tw from 'twin.macro';
import { TitleLine } from '../styles';

type DateDetailProps = {
  title: string;
  placeName: string;
  date: string;
  location: string;
}

const dateDetailStyle = tw`
  background-color[rgba(57, 62, 70, 0.5)] py-6 px-3 mx-auto width[100%] 
  sm:width[85%] lg:width[55%] font-family['Poppins'] rounded-lg
`;

export default function DateDetail({
  title, placeName, date, location,
}: DateDetailProps): JSX.Element {
  return (
    <>
      <div css={dateDetailStyle}>
        <TitleLine>{title}</TitleLine>
        <div tw="mt-4" />
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
        <a href="#" tw="font-thin underline">open map</a>
      </div>
    </>
  );
}
