import { React, useEffect } from "react";
import sasha1 from "../images/sasha1.jpg";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="page home">
      <section>
        <h1>ABOUT</h1>
        <p>
          Alexandra Rosser, who goes by Sasha, is a data scientist and stand-up
          comedian with a background in in computational physics,
          neuroeconomics, neurogenetic bioinformatics, and learning science. She
          received her BS in neuroscience from George Mason University in 2011
          and is an alumnus of NIH's Postbaccalaureate IRTA Fellowship program,
          where she studied the genes underlying addiction.{" "}
        </p>
        <p>
          In her free time, Sasha produces electronic music under the pseudonym
          exandroid and draws creepy pictures. Sometimes, she guest-lectures at
          colleges about neuroscience and science writing and has been known to
          drive around with human brains in her trunk, which she shows to
          children in the name of scientific literacy. She is also an ordained
          minister and has given sermons on such topics as the neuroscience of
          music perception and the ways in which video games bring us together.
        </p>
        <p>
          Sasha also regularly embarrasses herself in public by telling jokes
          and producing comedy shows under Cheshire Cat Comedy, which she
          founded in 2022. Sasha has toured clubs and festivals across North
          America and was selected to perform in Kenan Thompson's Ultimate
          Comedy Showcase, Comedians You Should Know, and Comedy on State's Best
          of the Midwest showcase.
        </p>
      </section>
      <img src={sasha1} alt="Sasha Rosser" className="big-pic mobile-pic" />
    </main>
  );
}
