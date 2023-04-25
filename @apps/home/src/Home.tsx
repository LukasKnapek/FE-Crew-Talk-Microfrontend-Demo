import React from "react";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

import useMfeNavigate from "@common/hooks/useMfeNavigate";

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
  const navigate = useMfeNavigate();

  return (
    <div className={import.meta.env.VITE_MFE_DEBUG && css.home}>
      <Hero />

      <Introduction />

      {import.meta.env.MODE !== "standalone" && (
        <>
          <div className={css.title}>
            <h2>Latest products</h2>
            <a onClick={() => navigate("/catalogue")}>
              <h3>{"See all products >>>"}</h3>
            </a>
          </div>

          <LazyCatalogue nImages={5} />
        </>
      )}

      {import.meta.env.MODE !== "standalone" && (
        <>
          <div className={css.title}>
            <h2>Latest blog posts</h2>
            <a onClick={() => navigate("/posts")}>
              <h3>{"See all posts >>>"}</h3>
            </a>
          </div>

          <LazyPosts nPosts={5} />
        </>
      )}
    </div>
  );
};

export default Home;
