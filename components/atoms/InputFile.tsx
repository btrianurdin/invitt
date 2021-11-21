import { InputHTMLAttributes } from 'react';
import { FiUpload } from 'react-icons/fi';
import tw, { css } from 'twin.macro';

const buttonUpload = css`
  ${tw`rounded-sm bg-gray-100 px-3.5 py-2.5 text-center flex justify-center items-center cursor-pointer`};
  border: 1px solid #ababab;
  & input{
    width: 100%;
    display: none;
  }
`;

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  text: string;
  isLoading?: boolean;
}

export default function InputFile({
  label, text, isLoading, ...rest
}: InputFileProps): JSX.Element {
  return (
    <div tw="my-3 w-full">
      <label tw="mb-1 inline-block">{label}</label>
      <label css={buttonUpload}>
        {
          !isLoading ? (
            <>
              <FiUpload tw="inline text-lg mr-1" />
              {' '}
              {text}
            </>
          ) : (
            <svg tw="animate-spin -ml-1 mr-3 h-6 w-6 text-pink-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle tw="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path tw="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )
        }
        <input type="file" {...rest} />
      </label>
    </div>
  );
}

InputFile.defaultProps = {
  isLoading: false,
};
