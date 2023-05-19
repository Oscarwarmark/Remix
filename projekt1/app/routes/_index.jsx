import { Link } from "@remix-run/react";

import homeStyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1>Vill du veta vad klockan är?</h1>

      <p id="cta">
        <Link to="/clock">Klicka här!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
