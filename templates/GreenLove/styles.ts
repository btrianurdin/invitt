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
};

export const Button = styled.button`
  background-color: #2eb8bf;
  font-family: "Poppins", Arial;
  ${tw`py-1.5 px-8 rounded-full font-thin`}
  &:hover {
    background-color: #40cad1;
  }
`;

export default styles;
