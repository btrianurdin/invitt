import { InputHTMLAttributes, ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: ReactNode;
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

export default function Select(props: InputProps): JSX.Element {
  const {
    label, id, children, required,
  } = props;
  return (
    <div tw="text-left font-family['Poppins'] my-5">
      <label htmlFor={id} css={styles.label}>
        {label}
        {required && <span tw="text-red-700">*</span>}
      </label>
      <select {...props} id={id} css={styles.input}>
        {children}
      </select>
    </div>
  );
}
