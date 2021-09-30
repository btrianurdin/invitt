import { TextareaHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const styles = {
  input: tw`w-full p-2.5 focus:(outline-none border-color[#FF6675]) text-black border-2 
    border-color[#fff] transition-colors duration-500 rounded-sm`,
  label: tw`inline-block font-medium mb-1`,
};

export default function TextArea(props: InputProps): JSX.Element {
  const { label, id } = props;
  return (
    <div tw="text-left font-family['Poppins']">
      <label htmlFor={id} css={styles.label}>{label}</label>
      <textarea {...props} id={id} css={styles.input} spellCheck={false} />
    </div>
  );
}
