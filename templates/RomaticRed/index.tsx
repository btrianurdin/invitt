import tw from 'twin.macro';
import { Link } from 'react-scroll';
import SimpleReactLightbox from 'simple-react-lightbox';
import styles, { Button, TitleLine } from './styles';
import Navbar from './components/Navbar';
import { HeroShape, CountdownShape, IntroduceShape } from './components/shapes';
import Countdown from './components/Countdown';
import DateDetail from './components/DateDetail';
import Gallery from './components/Gallery';
import Input from './components/atoms/Input';
import Select from './components/atoms/Select';
import TextArea from './components/atoms/TextArea';
import { ITemplateProps } from '../../interfaces';
import { invitationPrint } from '../../constants/commons';

export default function RomanticRed({
  invitation,
  weddingDates,
  galleries,
}: ITemplateProps): JSX.Element {
  return (
    <SimpleReactLightbox>
      <div tw="text-white">
        <div css={styles.heroCover({ coverimg: '/assets/templates/romanticred/cover.png' })}>
          <div tw="absolute z-index[10] p-2">
            <h1 tw="font-family['Dancing Script'] font-size[42px] md:font-size[52px] font-bold text-center">
              {invitationPrint('hero_title', invitation)}
            </h1>
            <div css={tw`flex justify-center mt-12 mb-8 md:(mt-10 mb-6)`}>
              <div css={[tw`-mr-2.5 z-index[2]`, styles.personImgWrapped({ xs: '125px', md: '145px' })]}>
                <img src="/assets/templates/romanticred/groom-pic.jpg" alt="Groom" css={styles.personImg({ xs: '125px', md: '145px' })} />
              </div>
              <div css={[tw`-ml-2.5`, styles.personImgWrapped({ xs: '125px', md: '145px' })]}>
                <img src="/assets/templates/romanticred/bride-pic.jpg" alt="Groom" css={styles.personImg({ xs: '125px', md: '145px' })} />
              </div>
            </div>
            <div tw="p-2 mb-3 md:mb-0">
              <img src="/assets/templates/romanticred/divider-hero.svg" alt="hero divider" />
            </div>
            <h1 tw="font-family['Dancing Script'] font-size[42px] md:font-size[52px] font-bold text-center">
              {invitationPrint('groom_shortname', invitation)}
              {' '}
              &
              {' '}
              {invitationPrint('bride_shortname', invitation)}
            </h1>
            <div tw="text-center mt-7 md:mt-4 mb-10">
              <Link to="content" smooth spy duration={1000}>
                <Button>
                  Open Invitation
                </Button>
              </Link>
            </div>
          </div>
          <HeroShape />
        </div>
      </div>

      {/* CONTENT */}
      <div id="content" css={tw`relative`}>

        {/* NAVBAR */}
        {/* <Navbar /> */}
        {/* <Navbar /> */}

        {/* SECTION 2 (INTRODUCE) */}
        <div css={styles.introduce}>
          {/* SHAPE BACKGOUND */}
          <IntroduceShape />

          {/* INTRODUCE CONTENT */}
          <div css={styles.introduceContent}>
            <h1 tw="font-size[32px] md:font-size[38px]">{invitationPrint('introduce_title', invitation)}</h1>
            <div tw="flex width[90%] flex-col md:flex-row px-2 py-3 mt-8">
              <div tw="flex-1">
                <div css={[styles.personImgWrapped({ xs: '145px', md: '165px' }), tw`mx-auto relative`]}>
                  <img src={invitationPrint('groom_pic', invitation).url} alt="Groom" css={styles.personImg({ xs: '145px', md: '165px' })} />
                  <div tw="width[160px] height[160px] md:(width[181px] height[181px]) border-4 border-color[#FACFE2] absolute -top-2 -left-2 rounded-full" />
                </div>
                <h2 tw="text-center mt-4 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                  {invitationPrint('groom_fullname', invitation)}
                </h2>
                <p tw="text-center md:width[75%] mx-auto mt-4 font-light">
                  {invitationPrint('groom_text', invitation)}
                </p>
              </div>
              <div tw="flex-1 mt-10 md:mt-0">
                <div css={[styles.personImgWrapped({ xs: '145px', md: '165px' }), tw`mx-auto relative`]}>
                  <img src={invitationPrint('bride_pic', invitation).url} alt="Groom" css={styles.personImg({ xs: '145px', md: '165px' })} />
                  <div tw="width[160px] height[160px] md:(width[181px] height[181px]) border-4 border-color[#FACFE2] absolute -top-2 -left-2 rounded-full" />
                </div>
                <h2 tw="text-center mt-4 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                  {invitationPrint('bride_fullname', invitation)}
                </h2>
                <p tw="text-center md:width[75%] mx-auto mt-4 font-light">
                  {invitationPrint('bride_text', invitation)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div id="countdown" tw="background-color[#FF6675] relative">
          <CountdownShape />
          <div css={styles.countdownContent}>
            <Countdown value={10} unit="DAY" />
            <Countdown value={5} unit="HOUR" />
            <Countdown value={30} unit="MINUTE" />
            <Countdown value={28} unit="SECOND" />
          </div>
        </div>

        {/* DATE */}
        {
          weddingDates && weddingDates.length !== 0 && (
            <div id="date" css={styles.dateSection}>
              <div css={tw`absolute top-10 left-6 width[40%] md:width[20%] z-index[0]`}>
                <img src="/assets/templates/romanticred/rose-white.svg" alt="Left Shape" />
              </div>
              <div css={tw`absolute left-0 top[40%] width[150%] sm:top[10%] md:width[100%] z-index[0]`}>
                <img src="/assets/templates/romanticred/twig.svg" alt="Coundown Shape" />
              </div>
              <div tw="flex flex-col width[100%] md:(flex-row width[80%]) items-center justify-center relative padding-top[64px] h-full text-center mx-auto">
                {
                  weddingDates?.map((wd) => (
                    <div tw="flex-1" key={`wd.title${Math.floor(Math.random() * 99)}`}>
                      <DateDetail
                        title={wd?.title || '-'}
                        placeName={wd?.place_name || '-'}
                        date={wd?.date || '-'}
                        location={wd?.location || '-'}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }

        {/* Gallery */}
        {
          galleries && galleries.length !== 0 && (
            <div id="gallery" css={styles.gallerySection}>
              <div css={tw`absolute -top-14 right-0 width[30%] md:width[20%] z-index[0]`}>
                <img src="/assets/templates/romanticred/rose-white.svg" alt="Left Shape" />
              </div>
              <div tw="relative text-center padding-top[64px] pb-14">
                <TitleLine>Gallery</TitleLine>
                <div css={styles.photoGallery}>
                  <Gallery images={galleries
                      && (galleries as any).map((gallery: { url: string; }) => gallery.url)}
                  />
                </div>
              </div>
            </div>
          )
        }

        {/* Greetings */}
        <div id="greetings" css={styles.greetings}>
          <div css={tw`absolute top-0 right-0 flex justify-end z-index[0]`}>
            <img src="/assets/templates/romanticred/greeting-shape-right.svg" tw="width[60%] md:width[85%]" alt="Right Shape" />
          </div>
          <div css={tw`absolute bottom-0 left-0 rotate-180 flex justify-end z-index[0]`}>
            <img src="/assets/templates/romanticred/greeting-shape-right.svg" tw="width[60%]  md:width[85%]" alt="Left Shape" />
          </div>
          <div className="greetings-content">
            {invitationPrint('greeting', invitation)}
          </div>
        </div>

        {/* Guest Book */}
        <div id="guestbook" css={styles.guestBook}>
          <div tw="text-center pb-10 text-white padding-top[64px]">
            <TitleLine>Guest Book</TitleLine>
            <div tw="width[400px] mx-auto my-10">
              <form>
                <Input label="Nama Tamu" placeholder="Masukkan nama Anda" />
                <Select label="Kehadiran" />
                <TextArea label="Ucapan" placeholder="Sampaikan Ucapan" rows={3} />
              </form>
            </div>
          </div>
        </div>

        {/* Credit */}
        <div css={styles.credit}>
          <div tw="width[100px] mx-auto">
            <p tw="font-size[14px] md:font-size[16px]">created in</p>
            <a href="#">
              <img src="/assets/svg/invitt-logo.svg" tw="text-center mx-auto sm:w-auto" alt="Invitt Logo" />
            </a>
          </div>
        </div>
      </div>
    </SimpleReactLightbox>
  );
}
