import { InputHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import { FiCheck } from 'react-icons/fi';
import { colorTheme } from '../../../../constants/commons';

interface TemplateItemProps extends InputHTMLAttributes<HTMLInputElement>{
  labelName: string;
  image: string;
  id: string;
  selected: string | null;
}

const styles = {
  container: css`
    display: block;
    position: relative;
    & > input[type=radio] {
      display: none;
    }
    & label {
      cursor: pointer;
      display: block;
      position: relative;
    }
    & input[type=radio]:checked ~ label .label-bg{
      ${tw`content absolute w-full h-full top-0 left-0`};
      background: rgb(2,0,36);
      background: linear-gradient(180deg, rgba(2,0,36,0) 38%, rgba(1,0,12,0.5998774509803921) 63%, rgba(0,0,0,1) 100%);
    }
    & label > .label-icon{
      ${tw`absolute bottom-4 w-full z-index[2] hidden`};
      & > * {
        color: ${colorTheme.pink};
      }
    }
    & input[type=radio]:checked ~ label > .label-icon{
      ${tw`block!`};
    }
  `,
  displayName: css`
    color: ${colorTheme.pink};
    ${tw`bottom-1 z-index[3] w-full text-center p-1.5 block`};
  `,
};

export default function TemplateItem(props: TemplateItemProps): JSX.Element {
  const {
    labelName, image, id, selected, ...rest
  } = props;
  return (
    <div css={styles.container}>
      <input type="radio" checked={selected === id} id={id} {...rest} />
      <label htmlFor={id}>
        <img src={image} alt="template" />
        <div className="label-bg" />
        <div className="label-icon">
          <FiCheck tw="text-2xl mx-auto" strokeWidth="4" />
        </div>
      </label>
      <small css={styles.displayName}>{labelName}</small>
    </div>
  );
}
