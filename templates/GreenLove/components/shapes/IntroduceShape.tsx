import tw from 'twin.macro';

export default function IntroduceShape(): JSX.Element {
  return (
    <>
      <div css={tw`absolute -top-2 right-0 flex justify-end`}>
        <img src="./assets/templates/greenlove/introduce-bg-rg.svg" tw="width[50%] md:width[75%]" alt="Left Shape" />
      </div>
      <div css={tw`absolute -bottom-8 left-0 flex justify-start`}>
        <img src="./assets/templates/greenlove/introduce-bg-lf.svg" tw="width[50%] md:width[75%]" alt="Left Shape" />
      </div>
    </>
  );
}
