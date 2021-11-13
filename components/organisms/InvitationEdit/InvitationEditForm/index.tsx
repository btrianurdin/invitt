import { useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import tw, { css } from 'twin.macro';
import Button from '../../../atoms/Button';

const styles = {
  editingForm: css`
    ${tw`fixed width[300px] height[80%] bg-white bottom-2 right-2 z-index[1000] shadow-md rounded
    transform[translateX(310px)] transition-transform duration-300 ease-out`}
  `,
  showEditingForm: tw`transform[translateX(0)] transition-transform duration-300 ease-in`,
  toggleButton: tw`m-0 p-1 absolute bg-white border-none text-pink-500 z-index[88] -ml-8 mt-4
  rounded-none text-2xl shadow-md`,
};

export default function InvitationEditForm(): JSX.Element {
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);

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
    </div>
  );
}
