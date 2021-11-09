import tw, { css } from 'twin.macro';
import { dummyImg } from '../../../constants/commons';
import { IPicData } from '../../../interfaces';
import Spinner from '../../atoms/Spinner';

const styles = {
  images: css`
    ${tw`width[200px] height[200px] overflow-hidden rounded-full inline-block`}
    & img{
      width: 200px;
    }
  `,
  nameText: tw`text-2xl font-family['Dancing Script']`,
};

interface ProfileAreaProps {
  isLoading: boolean;
  groom_fullname: string;
  bride_fullname: string;
  bride_pic: IPicData | undefined;
  groom_pic: IPicData | undefined;
}

export default function ProfileArea({
  isLoading, groom_fullname, bride_fullname, bride_pic, groom_pic,
}: ProfileAreaProps): JSX.Element {
  const getPic = (pic: IPicData | undefined, name: string) => (
    pic ? pic?.url : (dummyImg as any)[name]
  );

  return (
    <div tw="relative">
      <img src="/assets/svg/line-arrow.png" alt="arrow" tw="absolute width[160px] top[130px] hidden md:block" />
      <img src="/assets/svg/line-arrow.png" alt="arrow" tw="absolute width[160px] top[130px] right-0 hidden md:block" />
      <div tw="width[60%] mx-auto">
        <h2 css={styles.nameText}>{groom_fullname}</h2>
        <div tw="my-3 text-center">
          {
            isLoading
              ? <Spinner w={120} h={120} />
              : (
                <>
                  <div css={styles.images} tw="-mr-2.5 relative">
                    <img src={getPic(groom_pic, 'groom')} alt="Groom Pic" />
                  </div>
                  <div css={styles.images} tw="-ml-2.5">
                    <img src={getPic(bride_pic, 'bride')} alt="Bride Pic" />
                  </div>
                </>
              )
          }
        </div>
        <h2 css={styles.nameText} tw="text-right">{bride_fullname}</h2>
      </div>
    </div>
  );
}
