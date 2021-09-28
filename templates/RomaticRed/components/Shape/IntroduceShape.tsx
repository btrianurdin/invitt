import tw from 'twin.macro';

export default function IntroduceShape(): JSX.Element {
  return (
    <>
      <div css={tw`absolute -top-7 left-0 width[50%] md:width[40%] xl:width[29%] z-index[0]`}>
        <img src="./assets/templates/romanticred/left-introduce.svg" alt="Left Shape" />
      </div>
      <div css={tw`absolute top-2 left-0 width[20%] z-index[0]`}>
        <img src="./assets/templates/romanticred/rose.svg" alt="Left Shape" />
      </div>
      <div css={tw`absolute bottom-0 right-0 width[80%] md:width[60%] lg:width[50%] z-index[0]`}>
        <img src="./assets/templates/romanticred/right-introduce.svg" alt="Right Shape" />
      </div>
      <div css={tw`absolute bottom-2 right-0 text-right width[20%] z-index[0]`}>
        <img src="./assets/templates/romanticred/rose.svg" tw="absolute right-2 bottom-0" alt="Left Shape" />
      </div>
    </>
  );
}
