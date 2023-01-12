import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from 'react-query';

type Props = {
  children: ReactNode;
  config?: QueryClientProviderProps;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const APIConfigProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default APIConfigProvider;