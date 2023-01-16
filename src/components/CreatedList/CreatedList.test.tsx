import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import CreatedList from './CreatedList';
import { CREATED_LIST_TYPE } from './CreatedList.models';
import { renderWithProviders } from '../../utils/test-utils';

const CreteadListMockProps = {
  header: "Created List Header",
  listType: CREATED_LIST_TYPE.FAVORITE,
}

it('Created List renders', () => {
  renderWithProviders(<CreatedList {...CreteadListMockProps}/>);

  waitFor(() => expect(screen.queryByTestId('created-list-container')).toBeInTheDocument());
});