import tw from 'twin.macro';

type CountdownProps = {
  value: string | number;
  unit: string;
}

export default function Countdown({ value, unit }: CountdownProps): JSX.Element {
  return (
    <div css={tw`flex flex-col items-center py-3 md:py-0`}>
      <div css={tw`relative width[80px] height[80px] flex items-center justify-center`}>
        <div css={tw`absolute background-color[#FF94B6] w-full h-full top-0 left-0 opacity-30 rounded-full`} />
        <h1 css={tw`font-size[38px] md:font-size[42px] font-bold opacity-100 z-index[10]`}>{value}</h1>
      </div>
      <h1 css={tw`font-size[20px] md:font-size[24px] font-bold`}>{unit}</h1>
    </div>
  );
}
