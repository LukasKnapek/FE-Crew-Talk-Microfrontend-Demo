import React from "react";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

import css from "./Home.module.scss";

const LazyCatalogue =
  import.meta.env.MODE === "standalone"
    ? () => null
    : React.lazy(() => import("@apps/catalogue/Catalogue"));
const LazyPosts =
  import.meta.env.MODE === "standalone"
    ? () => null
    : React.lazy(() => import("@apps/posts/Posts"));

const Home = () => {
  return (
    <div className={css.home}>
      <Hero />

      <Introduction />

      {import.meta.env.MODE !== "standalone" && (
        <>
          <h2>Latest products</h2>
          <LazyCatalogue nImages={5} />
        </>
      )}

      {import.meta.env.MODE !== "standalone" && (
        <>
          <h2>Latest blog posts</h2>
          <LazyPosts nPosts={5} />
        </>
      )}
    </div>
  );
};

export default Home;
