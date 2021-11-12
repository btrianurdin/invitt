import Head from 'next/head';
import { useState } from 'react';
import tw, { css } from 'twin.macro';
import Button from '../../components/atoms/Button';
import ChooseTemplate from '../../components/molecules/ChooseTemplate';
import CompleteProfileForm from '../../components/molecules/CompleteProfileForm';
import { LayoutAuth } from '../../components/organisms/Layout';
import RouteRegister from '../../components/organisms/Route/RouteRegister';
import { titleName, colorTheme } from '../../constants/commons';

const styles = {
  tab: tw`md:width[600px] bg-white shadow-lg mx-auto my-12 rounded-sm font-family['Poppins']`,
  tabMenu: css`
    ${tw`w-full border-b flex flex-col md:flex-row`};
    & button{
      ${tw`p-5 flex-1`}
      &:hover{
        ${tw`bg-gray-200`}
      }
      &.active{
        ${tw`transition-colors duration-300`};
        background-color: ${colorTheme.pink};
        color: #fff;
      }
    }
  `,
  tabBody: css`
    ${tw`p-5`};
    & > h3{
      ${tw`text-2xl py-3 text-center`};
      color: ${colorTheme.pink};
    }
  `,
  tabContent: css`
    ${tw`hidden py-3`};
    &.active{
      ${tw`block`}
    }
  `,
  btnDisabled: tw`cursor-not-allowed`,
};

export default function CompleteProfile(): JSX.Element {
  const [tabToggle, setTabToggle] = useState(1);
  const [template, setTemplate] = useState<string | undefined>(undefined);

  const getActiveClass = (index: number, className: string) => (tabToggle === index ? className : '');

  return (
    <LayoutAuth>
      <RouteRegister>
        <Head>
          <title>{ titleName('Complete Profile') }</title>
        </Head>
        <div css={styles.tab}>
          <div css={styles.tabMenu}>
            <button
              type="button"
              className={getActiveClass(1, 'active')}
              onClick={() => setTabToggle(1)}
            >
              Templates
            </button>
            <button
              type="button"
              className={getActiveClass(2, 'active')}
              css={(!template && styles.btnDisabled)}
              onClick={() => template && setTabToggle(2)}
            >
              Complete Profile
            </button>
          </div>
          <div css={styles.tabBody}>
            <h3>Choose Template</h3>
            <div tw="border-b border-gray-200" />
            <div css={styles.tabContent} className={getActiveClass(1, 'active')}>
              <ChooseTemplate template={template} change={(e: any) => setTemplate(e.target.id)} />

              <Button
                text="Next"
                color="pink"
                block
                css={tw`px-3.5 py-2.5 mt-3`}
                disabled={Boolean(template === undefined)}
                onClick={() => setTabToggle(2)}
              />
            </div>
            <div css={styles.tabContent} className={getActiveClass(2, 'active')}>
              <CompleteProfileForm templateData={template} />
            </div>
          </div>
        </div>
      </RouteRegister>
    </LayoutAuth>
  );
}
