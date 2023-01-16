import { Button } from '@mui/material';
import { PageHeader } from '../';

import * as Styled from './PageNotFound.styles';

const PageNotFound = () => (
  <Styled.PageNotFoundContainer data-testid="page-not-found">
    <PageHeader title="Page you are looking for doesn't exist" />
    <Button><a href="/">Click here to go back to the main page</a></Button>
  </Styled.PageNotFoundContainer>
);

export default PageNotFound;