import { SRLWrapper } from 'simple-react-lightbox';

export default function Gallery({ images }: { images: Array<string>}): JSX.Element {
  return (
    <>
      <SRLWrapper>
        {
          images?.map((image) => (
            <a key={image} href={image}>
              <img src={image} alt="Wedding Gallery" />
            </a>
          ))
        }
      </SRLWrapper>
    </>
  );
}
