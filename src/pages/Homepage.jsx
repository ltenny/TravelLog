import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          Travel Log keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <h3>
          <i>
            <p>
              This is my React portfolio site. <b>Travel Log</b>, is my latest
              portfolio project.
            </p>
            <p>
              This is a sample application is for demo purposes only. The code
              is available at my respository on{" "}
              <a href="https://github.com/ltenny/TravelLog">Github</a>.
            </p>
            <p>Just accept the default user "Jack" at login and enjoy!</p>
          </i>
        </h3>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
