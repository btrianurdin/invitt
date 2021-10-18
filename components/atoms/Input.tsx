import { InputHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const styles = {
  input: css`
    ${tw`focus:(outline-none bg-white) px-3.5 py-2.5 box-border w-full rounded-sm 
      bg-gray-100`}
    border: 1px solid #ababab;
    &:focus{
      border: 1px solid ${colorTheme.pink}
    }
  `,
  label: tw`inline-block mb-1`,
};

export default function Input(props: InputProps): JSX.Element {
  const { label, id } = props;
  return (
    <div tw="text-left font-family['Poppins'] my-5">
      <label htmlFor={id} css={styles.label}>{label}</label>
      <input {...props} id={id} css={styles.input} spellCheck={false} />
    </div>
  );
}
