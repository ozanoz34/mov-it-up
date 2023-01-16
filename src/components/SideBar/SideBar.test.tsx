import '@testing-library/jest-dom';
import { screen, fireEvent, waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test-utils';
import SideBar from '.';

it('Sidebar renders', () => {
  renderWithProviders(<SideBar />);
  const openIcon = screen.queryByTestId('sidebar-open-icon');
  const closeIcon = screen.queryByTestId('sidebar-close-icon');
  const linkList = screen.queryByTestId('sidebar-link-list');

  expect(openIcon).toBeInTheDocument();
  waitFor(() => expect(linkList).toBeInTheDocument());
  waitFor(() => expect(closeIcon).toBeInTheDocument());
});

it('Sidebar open icon does not render on opened sidebar', () => {
  renderWithProviders(<SideBar />);
  const openIcon = screen.queryByTestId('sidebar-open-icon') as HTMLElement;
  const closeIcon = screen.queryByTestId('sidebar-close-icon');
  const linkList = screen.queryByTestId('sidebar-link-list');

  fireEvent.click(openIcon);

  expect(openIcon).not.toBeInTheDocument();
  waitFor(() => expect(linkList).toBeInTheDocument());
  waitFor(() => expect(closeIcon).toBeInTheDocument());
});