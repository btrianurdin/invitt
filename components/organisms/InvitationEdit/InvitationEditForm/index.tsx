import { useState } from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import tw, { css } from 'twin.macro';
import { colorTheme } from '../../../../constants/commons';
import Button from '../../../atoms/Button';
import InvitationGalleries from './InvitationGalleries';
import InvitationGeneral from './InvitationGeneral';
import InvitationUploadPic from './InvitationUploadPic';
import InvitationWeddingDates from './InvitationWeddingDates/invitationWeddingDates';

const styles = {
  editingForm: css`
    ${tw`fixed bottom-2 right-2 z-index[1000] height[80%] transform[translateX(360px)] 
    transition-transform duration-300 ease-out`}
  `,
  showEditingForm: tw`transform[translateX(0)] transition-transform duration-300 ease-in`,
  toggleButton: tw`m-0 p-1.5 absolute bg-white border-none text-pink-500 margin-left[-42px] mt-12
  rounded-none text-3xl shadow-md`,
  tab: tw`width[350px] h-full bg-white shadow-md rounded overflow-hidden`,
  tabHeader: css`
    ${tw`flex justify-between border-b py-3 px-5`}
    & > button{
      ${tw`transition-colors duration-200`}
      &.active{
        color: ${colorTheme.pink};
      }
    }
  `,
  tabBody: tw`px-5 height[calc(100% - 50px)] overflow-x-auto`,
  tabContent: css`
    display: none;
    &.active{
      display: block;
    }
  `,
};

export default function InvitationEditForm(): JSX.Element {
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleTab, setToggleTab] = useState(1);

  const activeClass = (index: number, className: string) => (toggleTab === index ? className : '');

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
      <div css={styles.tab}>
        <div css={styles.tabHeader}>
          <button type="button" onClick={() => setToggleTab(1)} className={activeClass(1, 'active')}>Pictures</button>
          <button type="button" onClick={() => setToggleTab(2)} className={activeClass(2, 'active')}>General</button>
          <button type="button" onClick={() => setToggleTab(3)} className={activeClass(3, 'active')}>Dates</button>
          <button type="button" onClick={() => setToggleTab(4)} className={activeClass(4, 'active')}>Galleries</button>
        </div>
        <div css={styles.tabBody}>
          <div css={styles.tabContent} className={activeClass(1, 'active')}>
            <InvitationUploadPic />
          </div>
          <div css={styles.tabContent} className={activeClass(2, 'active')}>
            <InvitationGeneral />
          </div>
          <div css={styles.tabContent} className={activeClass(3, 'active')}>
            <InvitationWeddingDates />
          </div>
          <div css={styles.tabContent} className={activeClass(4, 'active')}>
            <InvitationGalleries />
          </div>
        </div>
      </div>
    </div>
  );
}
