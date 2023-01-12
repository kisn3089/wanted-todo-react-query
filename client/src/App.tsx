import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { RequiredAuth } from "./lib/util/RequiredAuth";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/todos"
            element={
              <RequiredAuth>
                <TodoPage />
              </RequiredAuth>
            }
          />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
