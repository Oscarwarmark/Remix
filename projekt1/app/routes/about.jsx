import AboutStyles from "~/styles/about.css";

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>Undrar du vad klockan är? Då har du hittat rätt!</p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: AboutStyles }];
}
