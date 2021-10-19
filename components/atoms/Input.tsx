import { InputHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
}

const styles = {
  input: ({ isError }: { isError: boolean }) => [
    tw`focus:(outline-none bg-white) px-3.5 py-2.5 box-border w-full rounded-sm bg-gray-100`,
    css`
      border: 1px solid ${isError ? colorTheme.danger : '#ababab'};
      &:focus{
        border: 1px solid ${colorTheme.pink}
      }
    `,
  ],
  label: tw`inline-block mb-1`,
};

export default function Input(props: InputProps): JSX.Element {
  const {
    label, id, isError = false, ...rest
  } = props;
  return (
    <div tw="text-left font-family['Poppins'] my-5">
      <label htmlFor={id} css={styles.label}>{label}</label>
      <input {...rest} id={id} css={styles.input({ isError })} spellCheck={false} />
    </div>
  );
}

Input.defaultProps = {
  isError: false,
};
