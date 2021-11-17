import { useAtom } from 'jotai';
import { invitationAtom } from '../../../../store';
import Input from '../../../atoms/Input';

export default function InvitationEditor(): JSX.Element {
  const [inv, setInv] = useAtom(invitationAtom);

  return (
    <div>
      <Input
        label="Groom Shortname"
        value={inv?.groom_shortname}
        onChange={(e) => setInv({ ...inv, groom_shortname: e.target.value })}
      />
      <Input
        label="Bride Shortname"
        value={inv?.bride_shortname}
        onChange={(e) => setInv({ ...inv, bride_shortname: e.target.value })}
      />
      <Input
        label="Bride Shortname"
        value={inv?.bride_shortname}
        onChange={(e) => setInv({ ...inv, bride_shortname: e.target.value })}
      />
      <Input
        label="Bride Shortname"
        value={inv?.bride_shortname}
        onChange={(e) => setInv({ ...inv, bride_shortname: e.target.value })}
      />
      <Input
        label="Bride Shortname"
        value={inv?.bride_shortname}
        onChange={(e) => setInv({ ...inv, bride_shortname: e.target.value })}
      />
    </div>
  );
}
