import tw from 'twin.macro';

type CountdownProps = {
  value: string | number;
  unit: string;
}

export default function Countdown({ value, unit }: CountdownProps): JSX.Element {
  return (
    <div>
      <h1 css={tw`font-size[38px] md:font-size[42px] font-bold`}>{value}</h1>
      <h3 css={tw`font-size[20px] md:font-size[24px]`}>{unit}</h3>
    </div>
  );
}
