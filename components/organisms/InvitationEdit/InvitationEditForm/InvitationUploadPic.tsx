import { useAtom } from 'jotai';
import { useState } from 'react';
import tw from 'twin.macro';
import { toast } from 'react-toastify';
import { invitationAtom } from '../../../../store';
import InputFile from '../../../atoms/InputFile';
import { removeInvitationPic, setInvitationPic } from '../../../../services/invitation';

const allowedExtention = ['jpg', 'png', 'jpeg'];

const fileToBase64 = async (file: any) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (e) => reject(e);
});

export default function InvitationUploadPic(): JSX.Element {
  const [inv, setInv] = useAtom(invitationAtom);
  const [uploadLoading, setUploadLoading] = useState({
    groom: false,
    bride: false,
  });

  const picUploadChange = async (e: any, pic: 'bride' | 'groom') => {
    setUploadLoading({ ...uploadLoading, [pic]: true });
    const file = e.target.files[0];
    const ext = e.target.files[0]?.name.split('.').pop();
    if (!file) return;
    if (!allowedExtention.includes(ext)) {
      toast.error('Picture extention not valid');
    } else {
      const invPublicPic = inv ? (inv as any)[`${pic}_pic`] : null;
      if (invPublicPic.public_name) {
        await removeInvitationPic({ field: pic });
      }
      const base64: any = await fileToBase64(file);
      const res = await setInvitationPic({ field: pic, content: base64 });
      if (res.status !== 'error') {
        setInv({ ...inv, [`${pic}_pic`]: res[`${pic}_pic`] });
        toast.success('successfull upload picture');
      }
    }
    setUploadLoading({ ...uploadLoading, [pic]: false });
  };

  return (
    <div css={tw`mt-4`}>
      <div tw="bg-yellow-400 px-3 py-2 rounded-sm">
        <small>Allowed Extention: .jpg, .png, .jpeg</small>
      </div>
      <div tw="bg-yellow-400 px-3 py-2 rounded-sm mt-3">
        <small>Recommended photo with ratio 1:1</small>
      </div>
      <div tw="flex flex-col items-center">
        <InputFile
          label="Groom Picture"
          text="upload"
          onChange={(e) => picUploadChange(e, 'groom')}
          isLoading={uploadLoading.groom}
          disabled={uploadLoading.groom}
        />
      </div>
      <div tw="flex flex-col items-center mb-5">
        <InputFile
          label="Bride Picture"
          text="upload"
          onChange={(e) => picUploadChange(e, 'bride')}
          isLoading={uploadLoading.bride}
          disabled={uploadLoading.bride}
        />
      </div>
    </div>
  );
}
