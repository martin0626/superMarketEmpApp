import { NavLink } from 'react-router-dom';

export default function Navigation(){
  return (
    <nav className={"navbar"}>
      <div className={"logo"}>MyApp</div>
      <ul className={"navItems"}>
        <li className="navItem">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${"link"} ${"active"}` : "link"
            }
          >
            Products
          </NavLink>
        </li>
        <li className={"navItem"}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${"link"} ${"active"}` : "link"
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
