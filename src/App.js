import React, { Suspense, useContext } from "react";
import { GlobalStyle } from "./styles/GlobalSyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

import { Home } from "./components/pages/Home";
import { Detail } from "./components/pages/Detail";
// import { Favs } from "./pages/Favs";

import { User } from "./components/pages/User";
import { NotRegisteredUser } from "./components/pages/NotRegisteredUser";
import { NotFound } from "./components/pages/NotFound";

import { Router, Redirect } from "@reach/router";
import { Context } from "./Context";

const Favs = React.lazy(() => import("./components/pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};
