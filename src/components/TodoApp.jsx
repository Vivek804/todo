// import { useState } from "react";
import Login from "./Login";
import "./TodoApp.css";
import TodoListComponent from "./TodoList";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import Welcome from "./Welcome";
import ErrorPage from "./Error";
import LogoutPage from "./Logout";
import AuthProvider, { useAuth } from "./security/AuthContext";
import {
  BrowserRouter,
  Navigate,
  // Link,
  Route,
  Routes,
  // useNavigate,
  // useParams,
} from "react-router-dom";

function AuthenticationRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/welcome/:username"
              element={
                <AuthenticationRoute>
                  <Welcome />
                </AuthenticationRoute>
              }
            ></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="todo" element={
            <AuthenticationRoute>
              <TodoListComponent />
            </AuthenticationRoute>
            }></Route>
            <Route path="logout" element={<LogoutPage />}></Route>
          </Routes>
          {/* <FooterComponent /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
