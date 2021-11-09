import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

const spinnerStyles = ({ h, w }: SpinnerProps) => css`
  ${tw`animate-spin rounded-full border-b-2`};
  border-color: ${colorTheme.pink};
  width: ${w}px;
  height: ${h}px;
`;

interface SpinnerProps {
  w: string | number;
  h: string | number;
}

export default function Spinner({ w, h }: SpinnerProps): JSX.Element {
  return (
    <div tw="flex justify-center items-center">
      <div
        css={spinnerStyles({ w, h })}
      />
    </div>
  );
}
