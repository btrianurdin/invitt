import { TextareaHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isError?: boolean;
}

const styles = {
  input: ({ isError }: { isError: boolean }) => [
    tw`focus:(outline-none bg-white) px-3.5 py-2.5 box-border w-full rounded-sm bg-gray-100`,
    css`
      border: 1px solid ${isError ? colorTheme.danger : '#ababab'};
      &:focus{
        border: 1px solid ${isError ? colorTheme.danger : colorTheme.pink}
      }
    `,
  ],
  label: tw`inline-block mb-1`,
};

export default function TextArea({
  label, id, isError = false, required, ...rest
}: TextAreaProps): JSX.Element {
  return (
    <div tw="text-left font-family['Poppins'] my-5">
      <label htmlFor={id} css={styles.label}>
        {label}
        {required && <span tw="text-red-700">*</span>}
      </label>
      <textarea id={id} css={styles.input({ isError })} spellCheck="false" {...rest} />
    </div>
  );
}

TextArea.defaultProps = {
  isError: false,
};
