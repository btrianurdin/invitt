import { useAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import tw, { css } from 'twin.macro';
import debounce from 'lodash.debounce';
import { invitationAtom } from '../../../../store';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';

const styles = {
  editingForm: css`
    ${tw`fixed width[350px] height[80%] bg-white bottom-2 right-2 z-index[1000] shadow-md rounded
    transform[translateX(360px)] transition-transform duration-300 ease-out`}
  `,
  showEditingForm: tw`transform[translateX(0)] transition-transform duration-300 ease-in`,
  toggleButton: tw`m-0 p-1.5 absolute bg-white border-none text-pink-500 margin-left[-42px] mt-4
  rounded-none text-3xl shadow-md`,
};

function useDebounce(callback: any, delay: any) {
	// Memoizing the callback because if it's an arrow function
	// it would be different on each render
	const memoizedCallback = useCallback(callback, []);
	const debouncedFn = useRef(debounce(memoizedCallback, delay));

	useEffect(() => {
		debouncedFn.current = debounce(memoizedCallback, delay);
	}, [memoizedCallback, debouncedFn, delay]);

	return debouncedFn.current;
}

export default function InvitationEditForm(): JSX.Element {
  const [toggleEdit, setToggleEdit] = useState(true);
  const [inv, setInv] = useAtom(invitationAtom);

  return (
    <div css={[styles.editingForm, toggleEdit ? styles.showEditingForm : '']}>
      <div tw="relative">
        <Button
          text={toggleEdit ? <FiChevronsRight /> : <FiChevronsLeft />}
          color="default"
          css={styles.toggleButton}
          onClick={() => setToggleEdit(!toggleEdit)}
        />
      </div>
      <div tw="px-5">
        <Input
          label="Groom Shortname"
          value={inv?.groom_shortname}
          onChange={(e) => setInv({...inv, groom_shortname: e.target.value})}
        />
        <Input
          label="Bride Shortname"
          value={inv?.bride_shortname}
          onChange={(e) => setInv({...inv, bride_shortname: e.target.value})}
        />
      </div>
    </div>
  );
}
