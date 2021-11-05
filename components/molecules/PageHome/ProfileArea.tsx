import tw, { css } from 'twin.macro';
import { dummyImg } from '../../../constants/commons';

const styles = {
  images: css`
    ${tw`width[200px] height[200px] overflow-hidden rounded-full inline-block`}
    & img{
      width: 200px;
    }
  `,
  nameText: tw`text-2xl font-family['Dancing Script']`,
};

export default function ProfileArea(): JSX.Element {
  return (
    <div tw="relative">
      <img src="/assets/svg/line-arrow.png" alt="arrow" tw="absolute width[160px] top[130px] hidden md:block" />
      <img src="/assets/svg/line-arrow.png" alt="arrow" tw="absolute width[160px] top[130px] right-0 hidden md:block" />
      <div tw="width[60%] mx-auto">
        <h2 css={styles.nameText}>Baggi Hatti Immani</h2>
        <div tw="my-3 text-center">
          <div css={styles.images} tw="-mr-2.5 relative">
            <img src={dummyImg.groomPic} alt="Bride Pic" />
          </div>
          <div css={styles.images} tw="-ml-2.5">
            <img src={dummyImg.bridePic} alt="Bride Pic" />
          </div>
        </div>
        <h2 css={styles.nameText} tw="text-right">Dinda Zahra</h2>
      </div>
    </div>
  );
}
