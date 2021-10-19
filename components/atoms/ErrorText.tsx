import tw from 'twin.macro';

interface ErrorTextProps {
  text: string;
}

export default function ErrorText({ text }: ErrorTextProps): JSX.Element {
  return (
    <span css={tw`text-red-600 block -mt-3 text-sm`}>{text}</span>
  );
}
