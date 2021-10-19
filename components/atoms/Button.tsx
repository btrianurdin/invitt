import { ButtonHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  color: 'default' | 'pink' | 'danger' | 'success';
  outline?: boolean;
  typeSubmit?: boolean;
  block?: boolean;
  isLoading?: boolean;
}

const btn = {
  default: ({ color }: { color: string}) => [
    css`
      box-sizing: border-box;
      background-color: ${(colorTheme as any)[color]};
      border: 2px solid ${(colorTheme as any)[color]};
      color: white;
    `,
  ],
  outline: ({ color }: { color: string }) => [
    css`
      background-color: transparent;
      box-sizing: border-box;
      border: 2px solid ${(colorTheme as any)[color]};
      color: ${(colorTheme as any)[color]};
    `,
  ],
  commonStyle: css`
    padding: 5px 20px;
    border-radius: 8px;
    &:disabled {
      border: 2px solid #959595;
      background-color: #959595;
      cursor: not-allowed;
    }
  `,
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    outline = false, color, text, block = false, typeSubmit = false, isLoading = false, ...rest
  } = props;

  return (
    <button
      css={[btn[outline ? 'outline' : 'default']({ color }), block ? tw`w-full` : '', btn.commonStyle]}
      type={typeSubmit ? 'submit' : 'button'}
      disabled={isLoading}
      {...rest}
    >
      {
        !isLoading ? text : (
          <svg tw="animate-spin -ml-1 mr-3 h-6 w-6 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle tw="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path tw="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )
      }
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  block: false,
  typeSubmit: false,
  isLoading: false,
};
