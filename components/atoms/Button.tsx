import { HTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  text: string;
  color: 'default' | 'pink' | 'danger' | 'success';
  outline?: boolean;
  typeSubmit?: boolean;
  block?: boolean;
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
  `,
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    outline = false, color, text, block = false, typeSubmit = false, ...rest
  } = props;

  return (
    <button
      css={[btn[outline ? 'outline' : 'default']({ color }), block ? tw`w-full` : '', btn.commonStyle]}
      type={typeSubmit ? 'submit' : 'button'}
      {...rest}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  block: false,
  typeSubmit: false,
};
