import * as Styled from './PageHeader.styles';

type Props = {
  title: string;
};

const PageHeader = ({ title }: Props) => (
  <Styled.PageHeader gutterBottom variant="h5" data-testit="page-header">
    {title}
  </Styled.PageHeader>
);

export default PageHeader;