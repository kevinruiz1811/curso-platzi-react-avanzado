import React, { Fragment } from "react";
import { FavsWithQuery } from "../../container/getFavorites";
import { Helmet } from "react-helmet";

export default () => (
  <Fragment>
    <Helmet>
      <title>Petgram - Tus favoritos</title>
      <meta
        name="description"
        content="Con petgram podrás encontrar fotos de mascotas"
      />
    </Helmet>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
);
