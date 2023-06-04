import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";

const Pagenotfound = () => {
  useEffect(() => {
    document.title = "Page not found";
  });
  return (
    <Layout>
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default Pagenotfound;
