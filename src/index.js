import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import Dashboard from "./routes/dashboard/Dashboard";
import { ChatPage } from "./routes/chatpage/ChatPage";
import RootLayout from "./layouts/rootLayout/RootLayout";
import DashBoardLayout from "./layouts/rootLayout/dashboardlayout/DashBoardLayout";
import { SignIn } from "@clerk/clerk-react";
import SignInPage from "./routes/signinpage/SignInPage";
import SignUpPage from "./routes/signuppage/SignUpPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashBoardLayout />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/dashboard/chats", element: <ChatPage /> },
        ],
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
