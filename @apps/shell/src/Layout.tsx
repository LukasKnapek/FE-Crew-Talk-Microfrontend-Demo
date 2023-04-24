import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.scss";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
