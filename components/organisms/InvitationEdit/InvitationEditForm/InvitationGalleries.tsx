import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import { allowedExtention, fileToBase64 } from '../../../../constants/commons';
import { removeGallery, setGallery } from '../../../../services/gallery';
import { weddingGalleryAtom } from '../../../../store';
import Button from '../../../atoms/Button';
import InputFile from '../../../atoms/InputFile';

export default function InvitationGalleries(): JSX.Element {
  const [galleries, setGalleries] = useAtom(weddingGalleryAtom);
  const [loading, setLoading] = useState(false);

  const galleryUpdateChange = async (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const ext = e.target.files[0]?.name.split('.').pop();
    if (file) {
      if (!allowedExtention.includes(ext)) {
        toast.error('Picture extention not valid');
      } else {
        const base64photo: string = await fileToBase64(file);

        const res: any = await setGallery(base64photo);
        if (res?.error) toast.error('Failed to upload photo');
        else setGalleries([...galleries!, res]);
      }
    }
    setLoading(false);
  };

  const deleteHandler = async (id: string) => {
    const temp = [...galleries!].filter((gallery) => gallery._id !== id);

    const res = await removeGallery(id);

    if (res?.error) toast.error('failed to remove photo');
    else setGalleries(temp);
  };

  return (
    <div css={tw`my-5`}>
      <div tw="-mt-6 mb-6">
        {
          galleries && galleries.length <= 6
             && (
             <InputFile
               label=""
               tw=""
               text="upload"
               onChange={galleryUpdateChange}
               isLoading={loading}
               disabled={loading}
             />
             )
        }
      </div>
      <div tw="mt-5">
        {
          galleries && galleries.length > 0
            ? (
              <div tw="grid grid-cols-2 gap-5">
                {
                  galleries.map((gallery) => (
                    <div key={gallery._id}>
                      <div tw="max-h-20 overflow-hidden">
                        <img src={gallery.url} alt="gallery" />
                      </div>
                      <Button
                        text="Delete"
                        color="danger"
                        tw="mt-3"
                        onClick={() => deleteHandler(gallery._id!)}
                        block
                      />
                    </div>
                  ))
                }
              </div>
            )
            : <h1 tw="text-center">No galleries available!</h1>
        }
      </div>
    </div>
  );
}
