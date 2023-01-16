import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query';
import AppearanceProvider from '../appearance/components/AppearanceProvider/AppearanceProvider'

import type { RootState } from '../app/store'
// As a basic setup, import your same slice reducers
import moviesSlice from '../redux/Movies.redux';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: any;
}
const queryClient = new QueryClient();

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {} as RootState,
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { movies: moviesSlice }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppearanceProvider>
            {children}
          </AppearanceProvider>
        </Provider>
      </QueryClientProvider>)
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
};