import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import Planet from "./pages/planets";
import Characters from "./pages/characters";
import Films from "./pages/films";
import Vehicles from "./pages/vehicles";
import Starships from "./pages/starships.js";
import Species from "./pages/species.js";
import Detail from "./pages/detail";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Planet />} path="/planets" />
            <Route element={<Characters />} path="/people" />
            <Route element={<Films />} path="/films" />
            <Route element={<Vehicles />} path="/vehicles" />
            <Route element={<Starships />} path="/starships" />
            <Route element={<Species />} path="/species" />
            <Route element={<Detail />} path="/:element/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
