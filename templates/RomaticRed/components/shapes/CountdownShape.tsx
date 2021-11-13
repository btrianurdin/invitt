import tw from 'twin.macro';

export default function CountdownShape(): JSX.Element {
  return (
    <>
      <div css={tw`absolute left-0 width[28%] md:width[15%] z-index[0]`}>
        <img src="/assets/templates/romanticred/wheel-flower.svg" alt="Coundown Shape" />
      </div>
      <div css={tw`absolute bottom-0 right-0 rotate-180 z-index[0] width[28%] md:width[15%]`}>
        <img src="/assets/templates/romanticred/wheel-flower.svg" alt="Coundown Shape" />
      </div>
    </>
  );
}
