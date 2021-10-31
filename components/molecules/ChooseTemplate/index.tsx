import tw from 'twin.macro';
import { templateList } from '../../../constants/commons';
import TemplateItem from './TemplateItem';

interface ChooseTemplateProps {
  template: string | null;
  change: (e: any) => void;
}

export default function ChooseTemplate({ template, change }: ChooseTemplateProps): JSX.Element {
  return (
    <div css={tw`grid grid-cols-4 gap-5`}>
      {
        templateList.map((list) => (
          <TemplateItem
            key={list.name}
            labelName={list.displayName}
            id={list.name}
            image={list.image}
            selected={template}
            onChange={change}
          />
        ))
      }
    </div>
  );
}
