import tw from 'twin.macro';
import { templateList } from '../../../constants/commons';
import TemplateItem from './TemplateItem';

interface ChooseTemplateProps {
  template: string | undefined;
  change: (e: any) => void;
}

export default function ChooseTemplate({ template, change }: ChooseTemplateProps): JSX.Element {
  return (
    <div css={tw`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 my-5`}>
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
