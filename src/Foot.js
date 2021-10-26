import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reactDom from "react-dom";

function Footer() {
  return (
    <footer class="p-4 footer bg-base-300 text-base-content footer-center absolute">
      <div>
        <p>Made by Arinjay and Vikram</p>
      </div>
    </footer>
  );
}

export default Footer;
