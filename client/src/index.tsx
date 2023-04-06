import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { AuthContextProvider } from "./store/AuthContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <AuthContextProvider>
        <GlobalStyle />
        <App />
      </AuthContextProvider>
    </Router>
  </QueryClientProvider>
);
