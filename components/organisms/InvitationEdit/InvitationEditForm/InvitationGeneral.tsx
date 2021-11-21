import { useAtom } from 'jotai';
import { useState } from 'react';
import { toast } from 'react-toastify';
import tw from 'twin.macro';
import { setGeneralInvitation } from '../../../../services/invitation';
import { invitationAtom } from '../../../../store';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import TextArea from '../../../atoms/TextArea';

export default function InvitationGeneral(): JSX.Element {
  const [inv, setInv] = useAtom(invitationAtom);
  const [saveLoading, setSaveLoading] = useState(false);

  const saveGeneralHandler = async () => {
    setSaveLoading(true);

    delete inv?.web_url;

    const res = await setGeneralInvitation(inv);
    if (res.status === 'error') {
      toast.error(res?.messsage || 'Failed to save');
    } else {
      toast.success('general saved');
    }

    setSaveLoading(false);
  };

  return (
    <div>
      <Button
        text="Save Ganeral"
        color="pink"
        tw="mt-5"
        block
        onClick={saveGeneralHandler}
        isLoading={saveLoading}
        disabled={saveLoading}
      />
      <Input
        label="Hero Title"
        id="hero"
        value={inv?.hero_title || ''}
        onChange={(e) => setInv({ ...inv, hero_title: e.target.value })}
      />
      <Input
        label="Groom Short Name"
        id="groom shortname"
        value={inv?.groom_shortname || ''}
        onChange={(e) => setInv({ ...inv, groom_shortname: e.target.value })}
      />
      <Input
        label="Groom Short Name"
        id="bride shortname"
        value={inv?.bride_shortname || ''}
        onChange={(e) => setInv({ ...inv, bride_shortname: e.target.value })}
      />
      <Input
        label="Introduce Title"
        id="intro title"
        value={inv?.introduce_title || ''}
        onChange={(e) => setInv({ ...inv, introduce_title: e.target.value })}
      />
      <Input
        label="Groom Fullname"
        id="groom fullname"
        value={inv?.groom_fullname || ''}
        onChange={(e) => setInv({ ...inv, groom_fullname: e.target.value })}
      />
      <Input
        label="Bride Fullname"
        id="bride fullname"
        value={inv?.bride_fullname || ''}
        onChange={(e) => setInv({ ...inv, bride_fullname: e.target.value })}
      />
      <TextArea
        label="Groom Text"
        id="groom text"
        value={inv?.groom_text || ''}
        onChange={(e) => setInv({ ...inv, groom_text: e.target.value })}
      />
      <TextArea
        label="Bride Text"
        id="bride text"
        value={inv?.bride_text || ''}
        onChange={(e) => setInv({ ...inv, bride_text: e.target.value })}
      />
      <TextArea
        label="Greeting"
        id="greeting"
        value={inv?.greeting || ''}
        onChange={(e) => setInv({ ...inv, greeting: e.target.value })}
      />
      <div css={tw`mt-8`} />
    </div>
  );
}
