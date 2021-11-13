import { Link } from 'react-scroll';
import tw from 'twin.macro';
import SimpleReactLightbox from 'simple-react-lightbox';
import Countdown from './components/Countdown';
import DateDetail from './components/DateDetail';
import Gallery from './components/Gallery';
import { HeroShape, IntroduceShape } from './components/shapes';
import styles, { Button, TitleLine } from './styles';
import Input from '../Components/atoms/Input';
import Select from '../Components/atoms/Select';
import TextArea from '../Components/atoms/TextArea';
import LogoInvitt from '../../components/atoms/LogoInvitt';
import { ITemplateProps } from '../../interfaces';
import { invitationPrint } from '../../constants/commons';

export default function GreenLove({ invitation }: ITemplateProps): JSX.Element {
  return (
    <SimpleReactLightbox>
      {/* HERO */}
      <div css={styles.heroCover({ coverImg: '/assets/templates/greenlove/herocover.jpg' })}>
        <HeroShape />
        <div tw="absolute z-index[10] p-2">
          <h1 tw="font-family['Tinos', 'serif'] font-size[42px] md:font-size[52px] font-thin text-center">
            Wedding Invitation
          </h1>
          <div tw="relative my-8 flex items-center justify-center">
            <h1 tw="absolute text-center font-family['Italiana'] font-size[42px] md:font-size[52px]">
              {invitationPrint('groom_shortname', invitation)}
              <br />
              <span tw="color[#2EB8BF]">&</span>
              <br />
              {invitationPrint('bride_shortname', invitation)}
            </h1>
            <img src="/assets/templates/greenlove/circle-stack.svg" tw="width[85%] sm:width[70%] mx-auto" alt="Circle Stack" />
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
            <h1 tw="font-size[32px] md:font-size[38px] text-center">
              {invitationPrint('introduce_title', invitation)}
            </h1>
            <div tw="flex flex-col mt-10">
              <div tw="flex flex-col md:flex-row my-6">
                <div css={[styles.personImgWrapped({ xs: '170px', md: '200px' }), tw`mx-auto md:mx-0`]}>
                  <img src={invitationPrint('groom_pic', invitation).url} alt="Circle Stack" />
                </div>
                <div tw="flex-1 lg:(width[60%] flex-none) py-5 md:(py-0 px-5)">
                  <p>
                    {invitationPrint('groom_text', invitation)}
                  </p>
                  <h2 tw="mt-3 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                    {invitationPrint('groom_fullname', invitation)}
                  </h2>
                </div>
              </div>
              <div tw="flex flex-col md:(flex-row-reverse my-6)">
                <div css={[styles.personImgWrapped({ xs: '185px', md: '200px', borderPos: 'right' }), tw`mx-auto md:mx-0`]}>
                  <img src={invitationPrint('bride_pic', invitation).url} alt="Circle Stack" />
                </div>
                <div tw="flex-1 lg:(width[60%] flex-none) py-5 md:(text-right py-0 px-5)">
                  <p>
                    {invitationPrint('bride_text', invitation)}
                  </p>
                  <h2 tw="mt-3 font-size[38px] md:font-size[42px] font-family['Dancing Script']">
                    {invitationPrint('bride_fullname', invitation)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div css={styles.countdown}>
          <div css={tw`absolute top-2 left-2 flex justify-start`}>
            <img src="/assets/templates/greenlove/countdown-shape.svg" tw="width[50%] lg:width[75%]" alt="Left Shape" />
          </div>
          <div css={tw`absolute bottom-2 right-2 rotate-180 flex justify-start`}>
            <img src="/assets/templates/greenlove/countdown-shape.svg" tw="width[50%] lg:width[75%]" alt="Left Shape" />
          </div>
          <div tw="width[90%] mx-auto grid gap-y-4 grid-cols-2 md:(flex justify-evenly) text-center py-14 sm:py-5">
            <Countdown value={9} unit="DAY" />
            <Countdown value={13} unit="HOUR" />
            <Countdown value={30} unit="MINUTE" />
            <Countdown value={45} unit="SECOND" />
          </div>
        </div>

        {/* DATE */}
        <div css={styles.datePage}>
          <div tw="py-14 sm:px-10 flex flex-col md:flex-row width[90%] mx-auto text-center text-white">
            <div tw="flex-1 my-5">
              <DateDetail
                title="Akad Nikah"
                placeName="Balai Makarti Muktitama"
                date="Senin, 20 September 2021"
                location="Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran,
                  Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750"
              />
            </div>
            <div tw="flex-1 my-5">
              <DateDetail
                title="Acara Resepsi"
                placeName="Balai Makarti Muktitama"
                date="Senin, 20 September 2021"
                location="Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran,
                  Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750"
              />
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div css={styles.galleryPage}>
          <div tw="text-center py-10">
            <TitleLine>Gallery</TitleLine>
            <div css={styles.photoGallery}>
              <Gallery images={[
                '/assets/images/wedding-1.jpg',
                '/assets/images/wedding-2.jpg',
                '/assets/images/wedding-3.png',
                '/assets/images/wedding-4.jpg',
                '/assets/images/wedding-5.jpg',
                '/assets/images/wedding-6.jpg',
              ]}
              />
            </div>
          </div>
        </div>

        {/* Greeting */}
        <div css={styles.greeting}>
          <div css={tw`absolute top-0 left-0 flex justify-start`}>
            <img src="/assets/templates/greenlove/greeting-shape.svg" tw="width[60%] md:width[75%]" alt="Left Shape" />
          </div>
          <div css={tw`absolute bottom-0 right-0 rotate-180 flex justify-start`}>
            <img src="/assets/templates/greenlove/greeting-shape.svg" tw="width[60%] md:width[75%]" alt="Left Shape" />
          </div>
          <div tw="padding[80px 20px] width[90%] md:width[80%] mx-auto">
            <h1 tw="font-size[28px] md:font-size[36px] font-bold">
              It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its layout.
            </h1>
          </div>
        </div>

        {/* Guest Book */}
        <div css={styles.guestBook}>
          <div tw="text-center py-10">
            <TitleLine>Guest Book</TitleLine>
            <div tw="width[90%] sm:width[400px] mx-auto my-14">
              <form>
                <div tw="my-6">
                  <Input label="Nama Tamu" placeholder="Masukkan nama Anda" tw="focus:border-color[#00ADB5]" />
                </div>
                <div tw="my-6">
                  <Select label="Kehadiran" tw="focus:border-color[#00ADB5]" />
                </div>
                <div tw="my-6">
                  <TextArea label="Ucapan" placeholder="Sampaikan Ucapan" rows={3} tw="focus:border-color[#00ADB5]" />
                </div>
                <Button>Kirim ucapan</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Credit */}
        <div css={styles.credit}>
          <div tw="width[100px] mx-auto">
            <p tw="font-size[14px] md:font-size[16px]">created in</p>
            <a href="#">
              <LogoInvitt fill="#fff" tw="width[100px] md:width[133px]" />
            </a>
          </div>
        </div>
      </div>
    </SimpleReactLightbox>
  );
}
