import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import { AuthContextProvider } from './store/AuthContext';
import { GlobalStyle } from './styles/GlobalStyle';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <GlobalStyle />
      <App />
    </AuthContextProvider>
  </QueryClientProvider>
);
