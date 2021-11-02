import Head from 'next/head';
import { useState } from 'react';
import tw from 'twin.macro';
import Button from '../../components/atoms/Button';
import ChooseTemplate from '../../components/molecules/ChooseTemplate';
import CompleteProfileForm from '../../components/molecules/CompleteProfileForm';
import { LayoutAuth } from '../../components/organisms/Layout';
import RouteRegister from '../../components/organisms/Route/RouteRegister';
import { titleName } from '../../constants/commons';
import styles from './styles';

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
