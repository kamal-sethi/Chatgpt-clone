import React from "react";
import "./rootLayout.css";
import { Link, Outlet } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";



if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/homepage" className="logo">
            <img src="/logo.png" />
            <span>YOUR AI</span>
          </Link>
          <div className="user">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
