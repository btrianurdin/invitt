import tw, { css, styled } from 'twin.macro';

type personImgProps = {
  xs: any;
  md: any;
  borderPos?: string;
};

const styles = {
  heroCover: ({ coverImg }: { coverImg: string }): any => [
    css`
      ${tw`bg-cover h-screen bg-center bg-no-repeat relative flex z-index[2] flex-col justify-center
      text-white items-center`}
      background-image: url("${coverImg}");
      &:before {
        content: "";
        background: rgb(0, 0, 0);
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.908000700280112) 0%,
          rgba(0, 0, 0, 0.25253851540616246) 100%,
          rgba(0, 0, 0, 0) 100%
        );
        ${tw`block w-full h-full`}
      }
    `,
  ],
  introduce: css`
    background: rgb(46, 184, 191);
    background: linear-gradient(
      216deg,
      rgba(46, 184, 191, 1) 0%,
      rgba(57, 62, 70, 1) 100%
    );
    ${tw`min-h-screen relative text-white font-family['Poppins']`}
  `,
  personImgWrapped: ({ xs, md, borderPos = 'left' }: personImgProps): any => [
    css`
      width: ${xs};
      height: ${xs};
      ${tw`relative`}
      & > img {
        width: ${xs};
        height: ${xs};
      }
      @media (min-width: 768px) {
        width: ${md};
        height: ${md};
        & > img {
          width: ${md};
          height: ${md};
        }
      }
      &:before {
        ${borderPos === 'left' ? tw`-left-4 -top-4` : tw`-top-4 -right-4`}
        ${tw`absolute content h-full w-full border-4 border-color[#E5E5E5] z-index[10]`}
      }
    `,
  ],
  countdown: css`
    background: rgb(57, 62, 70);
    background: linear-gradient(
      270deg,
      rgba(57, 62, 70, 1) 0%,
      rgba(46, 184, 191, 1) 100%
    );
    ${tw`relative text-white font-family['Poppins']`}
  `,
  datePage: css`
    background-image: url("/assets/templates/greenlove/date-bg.svg");
    ${tw`bg-cover lg:(h-screen flex items-center) bg-center min-h-screen overflow-hidden`}
  `,
  galleryPage: css`
    background: rgb(57, 62, 70);
    background: linear-gradient(
      90deg,
      rgba(57, 62, 70, 1) 0%,
      rgba(46, 184, 191, 1) 100%
    );
    ${tw`min-h-screen text-white`}
  `,
  photoGallery: css`
    & div {
      ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 content-center my-12 mx-auto`}
      & a {
        ${tw`max-height[300px] overflow-hidden `}
        & img {
          ${tw`mx-auto w-full object-cover h-full`}
        }
      }
    }
  `,
  greeting: css`
    ${tw`background-color[#2EB8BF] relative text-center text-white font-family['Poppins']`}
  `,
  guestBook: css`
    background: rgb(57, 62, 70);
    background: linear-gradient(
      270deg,
      rgba(57, 62, 70, 1) 0%,
      rgba(46, 184, 191, 1) 100%
    );
    ${tw`min-h-screen relative text-white font-family['Poppins']`}
  `,
  credit: tw`background-color[#00ADB5] font-family['Poppins'] color[#fff] pt-10 pb-16`,
};

export const Button = styled.button`
  background-color: #2eb8bf;
  font-family: "Poppins", Arial;
  ${tw`py-1.5 px-8 rounded-full font-thin`}
  &:hover {
    background-color: #40cad1;
  }
`;

export const TitleLine = styled.h1`
  ${tw`font-size[38px] md:font-size[42px] font-family['Italiana'] relative inline-block z-index[20]`}
  &:before {
    border-bottom: 1px solid white;
    left: 0;
    right: 0;
    ${tw`content absolute width[50%] height[100%] mx-auto z-index[-1]`}
  }
`;

export default styles;
