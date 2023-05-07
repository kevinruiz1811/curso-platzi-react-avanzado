import React from "react";
import { PhotoCardWithQuery } from "../../container/PhotoCardWithQuery";
import { Layout } from "../Layout";

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);
