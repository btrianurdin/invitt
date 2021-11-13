import tw from 'twin.macro';

export default function HeroShape(): JSX.Element {
  return (
    <>
      <div css={tw`absolute bottom-0 left-0 width[60%] xl:width[65%]`}>
        <img src="/assets/templates/romanticred/left-shape-hero.svg" alt="Left Shape" />
      </div>
      <div css={tw`absolute bottom-0 right-0 width[60%] xl:width[65%]`}>
        <img src="/assets/templates/romanticred/right-shape-hero.svg" alt="Right Shape" />
      </div>
    </>
  );
}
