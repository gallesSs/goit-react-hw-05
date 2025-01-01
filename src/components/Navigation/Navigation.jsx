import s from "./Navigation.module.css";
import { NavLink } from "react-router";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.isactive);
};
const Navigation = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
