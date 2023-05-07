import React, { Fragment } from "react";
import { ListOfCategories } from "../ListOfCategories";
import { ListOfPhotoCards } from "../../container/ListOfPhotoCard";
import { Helmet } from "react-helmet";

export const Home = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con petgram podrás encontrar fotos de mascotas"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};
