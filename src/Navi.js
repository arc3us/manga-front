import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./Auth";
import reactDom from "react-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Topbar() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="Topbar">
      <div className="navbar bg-neutral text-neutral-content shadow-lg">
        <div className="navbar-start mx-4">
          <Link to="/" className="text-lg">
            Manga
          </Link>
        </div>

        <div className="navbar-center w-1/2">
          <div class="flex-1 flex-grow">
            <div class="form-control ">
              <input
                type="text"
                placeholder="Search"
                class="input bg-base-100 input-ghost placeholder-neutral-content text-lg"
              />
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div class="flex items-stretch">
            {/* <div className="">
              <select data-choose-theme className="btn btn-ghost btn-sm rounded-btn dropdown">
                <option value="light" className="">Light</option>
                <option value="dark">Dark</option>
                <option value="dracula">Dracula</option>
                <option value="fantasy">Fantasy</option>
                <option value="synthwave">Synthwave</option>
              </select>
            </div> */}
            <div class="dropdown">
              <div tabindex="0" class="btn btn-ghost btn-sm rounded-btn">
                Genres
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52"
              >
                <li>
                  <a>Thriller</a>
                </li>
                <li>
                  <a>Mystery</a>
                </li>
                <li>
                  <a>Fantasy</a>
                </li>
                <li>
                  <a>Adventure</a>
                </li>
                <li>
                  <a>Action</a>
                </li>
                <li>
                  <a>Crime</a>
                </li>
                <li>
                  <a>Mecha</a>
                </li>
              </ul>
            </div>
            <Link to="/Lists" class="btn btn-ghost btn-sm rounded-btn">
              Lists
            </Link>
            <Link to="/Auth" class="btn btn-ghost btn-sm rounded-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
