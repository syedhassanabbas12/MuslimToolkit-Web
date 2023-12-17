import React from "react";
import RouteList from "../../routes";
import { Link } from "react-router-dom";

const SideButton = () => (
  <div className="flex-none">
    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </label>
  </div>
);

const Logo = () => (
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Muslim Toolkit</a>
  </div>
);

const SearchBar = () => (
  <div className="form-control hidden lg:block">
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-24 md:w-auto"
    />
  </div>
);

const UserMenu = () => (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <a>Logout</a>
      </li>
    </ul>
  </div>
);

const DrawerSideBar = () => (
  <div className="drawer-side z-10">
    <label
      htmlFor="my-drawer-3"
      aria-label="close sidebar"
      className="drawer-overlay"
    ></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </ul>
  </div>
);

const SearchIcon = () => {
  return (
    <button className="btn btn-ghost btn-circle lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
};

const Header = () => {
  const listHeader = ["Home", "About", "Contact"];
  return (
    <>
      <div className="navbar bg-base-100">
        <SideButton />
        <Logo />
        <div className="flex-none gap-2">
          <SearchIcon />
          <SearchBar />
          <UserMenu />
        </div>
      </div>

      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <DrawerSideBar />
      </div>
    </>
  );
};

export default Header;
