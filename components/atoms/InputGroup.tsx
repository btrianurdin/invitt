import { InputHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
  groupText: string;
}

const styles = {
  inputGroup: ({ isError }: { isError: boolean }) => css`
    ${tw`flex items-center rounded-sm justify-between`};
    & input{
      ${tw`focus:(outline-none bg-white) rounded-br-sm rounded-tr-sm px-3.5 py-2.5 box-border w-full bg-gray-100`}
      border: 1px solid ${isError ? colorTheme.danger : '#ababab'};
    }
    input:focus{
      border: 1px solid ${colorTheme.pink}
    }
    & span{
      margin-left: -0.5px;
      border-top: 1px solid ${isError ? colorTheme.danger : '#ababab'};
      border-left: 1px solid ${isError ? colorTheme.danger : '#ababab'};
      border-bottom: 1px solid ${isError ? colorTheme.danger : '#ababab'};
      ${tw`inline-block bg-gray-200 px-3.5 py-2.5 flex-1 rounded-tl-sm rounded-bl-sm`}
    }
  `,
  label: tw`inline-block mb-1`,
};

export default function InputGroup({
  label, id, isError = false, required, groupText, ...rest
}: InputProps): JSX.Element {
  return (
    <div tw="text-left font-family['Poppins'] my-5">
      <label htmlFor={id} css={styles.label}>
        {label}
        {required && <span tw="text-red-700">*</span>}
      </label>
      <div css={styles.inputGroup({ isError })} className="input-group">
        <span>{groupText}</span>
        <input id={id} {...rest} />
      </div>
    </div>
  );
}

InputGroup.defaultProps = {
  isError: false,
};
