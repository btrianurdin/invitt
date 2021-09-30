import { InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const STYLES = {
  input: tw`w-full p-2.5 focus:(outline-none) text-black border-2 
    border-color[#fff] transition-colors duration-500 rounded-sm`,
  label: tw`inline-block font-medium mb-1`,
};

export default function Input(props: InputProps): JSX.Element {
  const { label, id } = props;
  return (
    <div tw="text-left font-family['Poppins']">
      <label htmlFor={id} css={STYLES.label}>{label}</label>
      <input {...props} id={id} css={STYLES.input} spellCheck={false} />
    </div>
  );
}
