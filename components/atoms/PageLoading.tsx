import tw, { css } from 'twin.macro';
import { colorTheme } from '../../constants/commons';

interface PageLoadingProps {
  w: number;
  h: number;
}

const styles = {
  loadingSpin: css`
    ${tw`animate-ping absolute inline-flex h-full w-full rounded-full`}
    opacity: 0.75;
    background-color: ${colorTheme.pink};
  `,
  loadingFixed: ({ w, h }: PageLoadingProps) => css`
    ${tw`relative inline-flex rounded-full h-8 w-8`}
    background-color: ${colorTheme.pink};
    width: ${w}px;
    height: ${h}px;
  `,
  loadingContainer: ({ w, h }: PageLoadingProps) => css`
    ${tw`relative flex`}
    width: ${w}px;
    height: ${h}px;
  `,
};

export default function PageLoading({ w, h }: PageLoadingProps): JSX.Element {
  return (
    <div tw="h-screen flex w-full text-center justify-center items-center">
      <span css={styles.loadingContainer({ w, h })}>
        <span css={styles.loadingSpin} />
        <span css={styles.loadingFixed({ w, h })} />
      </span>
    </div>
  );
}
