import { HTMLAttributes, HTMLProps } from 'react';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  text: string;
  color: 'default' | 'pink' | 'danger' | 'success';
  outline?: boolean;
  block?: boolean;
}

const btn = {
  default: ({ color }: { color: string}) => [
    css`
      box-sizing: border-box;
      background-color: ${(colorTheme as any)[color]};
      border: 2px solid ${(colorTheme as any)[color]};
      color: white;
      padding: 5px 20px;
      border-radius: 8px;
    `,
  ],
  outline: ({ color }: { color: string }) => [
    css`
      background-color: transparent;
      box-sizing: border-box;
      border: 2px solid ${(colorTheme as any)[color]};
      color: ${(colorTheme as any)[color]};
      padding: 5px 20px;
      border-radius: 8px;
    `,
  ],
};

export default function Button(props: ButtonProps): JSX.Element {
  const {
    outline = false, color, text, block = false, ...rest
  } = props;

  return (
    <button
      css={[btn[outline ? 'outline' : 'default']({ color }), block ? tw`w-full` : '']}
      type="button"
      {...rest}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
  block: false,
};
