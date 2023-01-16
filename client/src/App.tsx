import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { RequiredAuth } from "./lib/util/RequiredAuth";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";
import AuthContext from "./store/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
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
          <Route path="/todos/:id" element={<Todo />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
