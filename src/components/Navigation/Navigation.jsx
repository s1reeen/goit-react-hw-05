import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.container}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeNavLinkClass}>
        Movies
      </NavLink>
    </div>
  );
}
