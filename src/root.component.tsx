import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navbar";

export default function Root() {
  return (
    <Router>
      <React.StrictMode>
        <Route>
          <Navbar />
        </Route>
      </React.StrictMode>
    </Router>
  );
}
