import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "./nav"

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class="component">
        <h1>Renaming Index</h1>
          <div class="file-name">app.jsx</div>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}