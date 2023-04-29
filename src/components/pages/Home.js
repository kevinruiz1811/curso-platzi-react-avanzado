import React, { Fragment } from "react";
import { ListOfCategories } from "../ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";

export const Home = ({ id }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};
