import React from "react";
import './App.css'

function Topbar() {
    return(
        <div className="Topbar">
      <div className="navbar bg-neutral text-neutral-content shadow-lg">
        <div className="navbar-start mx-4">
          <span className="text-lg">Manga</span>
        </div>

        <div className="navbar-center w-1/2">
          <div class="flex-1 flex-grow">
            <div class="form-control ">
              <input
                type="text"
                placeholder="Search"
                class="input bg-base-100 input-ghost placeholder-white text-lg"
              />
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn">Genres</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Lists</a>
            <a class="btn btn-ghost btn-sm rounded-btn">Login</a>
          </div>
        </div>
      </div>
    </div>
    );
    
}

export default Topbar;