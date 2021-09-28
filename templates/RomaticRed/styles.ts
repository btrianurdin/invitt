import tw, { styled, css } from 'twin.macro';

type HeroCoverProps = {
  coverimg: string;
}

type personImgProps = {
  xs: any;
  md: any;
}

const styles = {
  heroCover: ({ coverimg }: HeroCoverProps): any => [
    css`
      ${tw`bg-cover h-screen bg-center bg-no-repeat relative flex flex-col justify-center items-center z-index[2]
      before:(content w-full h-full background-color[#FF6675] block opacity-20)`}
      background-image: url('${coverimg}');
    `,
  ],
  personImgWrapped: ({ xs, md }: personImgProps): any => [
    css`
      width: ${xs};
      height: ${tw`overflow-hidden rounded-full`} @media (min-width: 768px) {
        width: ${md};
        height: ${md};
      }
    `,
  ],
  personImg: ({ xs, md }: personImgProps): any => [
    css`
      width: ${xs};
      height: ${xs};
      ${tw`rounded-full`}
      @media (min-width: 768px) {
        width: ${md};
        height: ${md};
      }
    `,
  ],
  introduce: (): any => [
    css`
      background: rgb(255, 102, 117);
      background: linear-gradient(
        153deg,
        rgba(255, 102, 117, 0.8) 0%,
        rgba(255, 146, 134, 0.8) 72%,
        rgba(255, 148, 182, 0.8) 100%
      );
      ${tw`min-h-screen w-full relative text-white`}
    `,
  ],
  introduceContent: (): any => [
    tw`flex flex-col items-center font-family["Poppins"] relative w-full h-full py-10 z-index[10]`,
  ],
  countdownContent: tw`
    grid grid-cols-2 width[90%]  md:(flex width[75%]) lg:width[50%] mx-auto justify-between z-index[10] 
    relative text-center text-white p-5
  `,
  dateSection: css`
    background: rgb(255, 102, 117);
    background: linear-gradient(
      0deg,
      rgba(255, 102, 117, 1) 0%,
      rgba(255, 235, 222, 1) 100%
    );
    ${tw`min-h-screen lg:h-screen flex relative text-white overflow-x-hidden`}
  `,
  gallerySection: css`
    background: rgb(255, 102, 117);
    background: linear-gradient(
      180deg,
      rgba(255, 102, 117, 1) 0%,
      rgba(255, 235, 222, 1) 100%
    );
    ${tw`min-h-screen text-white relative mx-auto`}
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
  greetings: css`
    background-color: #ff6675;
    font-family: "Poppins", Arial;
    position: relative;
    & div.greetings-content {
      ${tw`text-center py-16 px-10 text-white width[100%] sm:width[80%] lg:width[70%] 
      font-medium mx-auto font-size[28px] md:font-size[32px]`}
    }
  `,
  guestBook: css`
    background: rgb(255, 102, 117);
    background: linear-gradient(
      180deg,
      rgba(255, 102, 117, 1) 0%,
      rgba(250, 207, 226, 1) 100%
    );
  `,
  credit: tw`background-color[#FACFE2] font-family['Poppins'] color[#F037A5] pt-10 pb-16`,
};

export const Button = styled.button`
  background-color: #ff6675;
  color: white;
  ${tw`rounded-full text-center py-1 px-5 shadow-lg font-extralight font-family['Poppins'] focus:outline-none`}
  &:hover {
    background-color: #e95362;
  }
`;

export const TitleLine = styled.h1`
  ${tw`font-size[38px] md:font-size[42px] font-family['Dancing Script'] relative inline-block z-index[10]`}
  &:before {
    border-bottom: 1px solid white;
    left: 0;
    right: 0;
    ${tw`content absolute width[50%] height[100%] mx-auto z-index[-1]`}
  }
`;

export default styles;
