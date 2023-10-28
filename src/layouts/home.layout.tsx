import { Link, NavLink, Outlet } from "react-router-dom";
import DropdownLang from "../components/dropdown/dropdown-lang";
import InputSearch from "../components/inputs/input-search";

const HomeLayout = () => {

  return (
    <>
      <nav className="border-gray-200 bg-gray-900 fixed w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Langs App
            </span>
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/counter"
                  className={({ isActive }) => `block ${isActive ? 'text-blue-700 hover:text-white' : 'text-white hover:text-blue-700'} capitalize `}
                >
                  contador
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `block ${isActive ? 'text-blue-700 hover:text-white' : 'text-white hover:text-blue-700'} capitalize  `}
                >
                  contactanos
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center  space-x-2">
            <InputSearch />
            <DropdownLang />
          </div>
        </div>
      </nav>
      <div className="bg-gray-900 text-white">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
