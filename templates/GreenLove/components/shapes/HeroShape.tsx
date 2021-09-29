import tw from 'twin.macro';

export default function HeroShape(): JSX.Element {
  return (
    <>
      <div css={tw`absolute top-0 left-0 flex justify-start`}>
        <img src="./assets/templates/greenlove/hero-shape-op.svg" tw="width[50%] md:width[75%]" alt="Left Shape" />
      </div>
      <div css={tw`absolute bottom-0 right-0 flex justify-start rotate-180`}>
        <img src="./assets/templates/greenlove/hero-shape-op.svg" tw="width[50%] md:width[75%]" alt="Left Shape" />
      </div>
    </>
  );
}
