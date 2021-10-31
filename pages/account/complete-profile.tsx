import { useState } from 'react';
import ChooseTemplate from '../../components/molecules/ChooseTemplate';
import { LayoutAuth } from '../../components/organisms/Layout';
import RouteRegister from '../../components/organisms/Route/RouteRegister';
import styles from './styles';

export default function CompleteProfile(): JSX.Element {
  const [tabToggle, setTabToggle] = useState(1);
  const [template, setTemplate] = useState<string | null>(null);

  const getActiveClass = (index: number, className: string) => (tabToggle === index ? className : '');

  return (
    <LayoutAuth>
      <RouteRegister>
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
              onClick={() => setTabToggle(2)}
            >
              Complete Profile
            </button>
          </div>
          <div css={styles.tabBody}>
            <h3>Choose Template</h3>
            <div tw="border-b border-gray-200" />
            <div css={styles.tabContent} className={getActiveClass(1, 'active')}>
              <ChooseTemplate template={template} change={(e: any) => setTemplate(e.target.id)} />
            </div>
            <div css={styles.tabContent} className={getActiveClass(2, 'active')}>
              Tab nomor 2
            </div>
          </div>
        </div>
      </RouteRegister>
    </LayoutAuth>
  );
}
