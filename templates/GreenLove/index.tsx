import Head from 'next/head';
import { Link } from 'react-scroll';
import tw from 'twin.macro';
import Countdown from './components/Countdown';
import { HeroShape, IntroduceShape } from './components/shapes';
import styles, { Button } from './styles';

export default function GreenLove(): JSX.Element {
  return (
    <>
      <Head>
        <title>Green Love Template</title>
      </Head>

      {/* HERO */}
      <div css={styles.heroCover({ coverImg: './assets/templates/greenlove/herocover.jpg' })}>
        <HeroShape />
        <div tw="absolute z-index[10] p-2">
          <h1 tw="font-family['Tinos', 'serif'] font-size[42px] md:font-size[52px] font-thin text-center">
            Wedding Invitation
          </h1>
          <div tw="relative my-8 flex items-center justify-center">
            <h1 tw="absolute text-center font-family['Italiana'] font-size[42px] md:font-size[52px]">
              Firmansyah
              <br />
              <span tw="color[#2EB8BF]">&</span>
              <br />
              Sandra
            </h1>
            <img src="./assets/templates/greenlove/circle-stack.svg" tw="width[85%] sm:width[70%] mx-auto" alt="Circle Stack" />
          </div>
          <div tw="text-center py-4">
            <Link to="content" smooth duration={1000}>
              <Button>
                Open Invitation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="content" css={tw`relative`}>

        {/* INTRODUCE */}
        <div css={[styles.introduce, tw`overflow-hidden`]}>
          <IntroduceShape />
          <div tw="relative width[90%] sm:width[75%] mx-auto py-10 z-index[10]">
            <h1 tw="font-size[32px] md:font-size[38px] text-center">Selamat Datang</h1>
            <div tw="flex flex-col mt-10">
              <div tw="flex flex-col md:flex-row my-6">
                <div css={[styles.personImgWrapped({ xs: '170px', md: '200px' }), tw`mx-auto md:mx-0`]}>
                  <img src="./assets/templates/greenlove/groom.png" alt="Circle Stack" />
                </div>
                <div tw="flex-1 lg:(width[60%] flex-none) py-5 md:(py-0 px-5)">
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                  </p>
                  <h2 tw="mt-3 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                    Firmansyah Adit, S.Akt.
                  </h2>
                </div>
              </div>
              <div tw="flex flex-col md:(flex-row-reverse my-6)">
                <div css={[styles.personImgWrapped({ xs: '185px', md: '200px', borderPos: 'right' }), tw`mx-auto md:mx-0`]}>
                  <img src="./assets/templates/greenlove/bride.png" alt="Circle Stack" />
                </div>
                <div tw="flex-1 lg:(width[60%] flex-none) py-5 md:(text-right py-0 px-5)">
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                  </p>
                  <h2 tw="mt-3 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                    Sandra Utami, .S.Kep.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div css={styles.countdown}>
          <div css={tw`absolute top-2 left-2 flex justify-start`}>
            <img src="./assets/templates/greenlove/countdown-shape.svg" tw="width[50%] lg:width[75%]" alt="Left Shape" />
          </div>
          <div css={tw`absolute bottom-2 right-2 rotate-180 flex justify-start`}>
            <img src="./assets/templates/greenlove/countdown-shape.svg" tw="width[50%] lg:width[75%]" alt="Left Shape" />
          </div>
          <div tw="width[90%] mx-auto grid gap-y-4 grid-cols-2 md:(flex justify-evenly) text-center py-14 sm:py-5">
            <Countdown value={9} unit="DAY" />
            <Countdown value={13} unit="HOUR" />
            <Countdown value={30} unit="MINUTE" />
            <Countdown value={45} unit="SECOND" />
          </div>
        </div>
      </div>
    </>
  );
}
