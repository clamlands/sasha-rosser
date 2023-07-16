import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import sasha2 from "../images/sasha2.webp";

export default function Standup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="page standup">
      <section>
        <h1>STAND-UP</h1>
        <p>
          For upcoming shows, please visit Sasha's{" "}
          <Link to="/shows" className="inline-link">
            show page
          </Link>
          .
        </p>
        <div className="divider"></div>
        <p>
          Sasha Rosser is a Russian-American stand-up with a nerd's take on
          black and blue comedy. Covering everything from divorce to RoboCop to
          that time she was investigated by the FBI, her dark, irreverent act
          has been seen at clubs, corporate events, and comedy festivals across
          North America. She has performed with national headliners including
          Matteo Lane, Shane Torres, and Dave Attell. Sasha is a regular and
          headliner at Laugh Factory: Chicago and has been featured on Comedians
          You Should Know, Comedy on State's “Best of the Midwest” showcase, and
          Kenan Thompson's Ultimate Comedy Showcase. In 2022 she founded
          Cheshire Cat Comedy, a Madison-based production company that organizes
          stand-up and variety shows across Wisconsin, and in 2023 she was a
          finalist in Madison's Funniest Comic Competition. She was banned from
          Tinder in 2018.
        </p>

        <h3>Videos</h3>
        <a href="https://www.youtube.com/watch?v=c8rOjgIvKOY">
          Comedy at the Cabaret at North Street Cabaret (August 8, 2019)
        </a>
        <a href="https://youtu.be/ZO1exkYGV5o">
          Comedy on State (February 12, 2020) Comedy on State (March 10, 2021)
        </a>
        <a href="https://youtu.be/YdzABdjwUZE">
          The Tiny Cupboard (January 8, 2022)
        </a>
        <a href="https://www.youtube.com/watch?v=EZrmmCwuv-c">
          Comedy on State (August 31, 2022)
        </a>
        <a href="https://www.youtube.com/watch?v=YJf78E4YJ8E">
          Comedy on State (May 3, 2023)
        </a>
      </section>
      <img
        src={sasha2}
        alt="Sasha Rosser"
        width="1024"
        height="1365"
        className="big-pic mobile-pic"
      />
    </main>
  );
}
