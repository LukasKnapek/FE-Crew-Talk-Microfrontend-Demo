import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import css from "./Layout.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const onRouteNavigate = (event: CustomEvent) => {
    navigate(event.detail.path);
  };

  useEffect(() => {
    window.addEventListener("mfe__navigate", onRouteNavigate);
    return () => window.removeEventListener("mfe__navigate", onRouteNavigate);
  }, []);

  return (
    <div className={import.meta.env.VITE_MFE_DEBUG && css.navbar_mfe}>
      <nav className={css.navbar}>
        <h1>Applifting Microfrontends Demo</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalogue">Catalogue</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
