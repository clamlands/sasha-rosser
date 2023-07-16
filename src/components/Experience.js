import { React, useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="page experience">
      <h1>Experience</h1>
      <h2>EDUCATION</h2>
      2020 - 2023 MS, Applied Data Science | Syracuse University 2007 - 2011 BS,
      Neuroscience | George Mason University
      <h2>RESEARCH EXPERIENCE</h2>
      <div className="exp">
        <div>2021 - 2022</div>
        <div>Data Scientist II | Department of Surgery | WiSOR</div>
        <div>
          University of Wisconsin-Madison School of Medicine and Public Health
        </div>
      </div>
      <div className="exp">
        <div>2017 - 2021</div>
        <div>Research Specialist | Department of Surgery | WiSOR</div>
        <div>
          University of Wisconsin-Madison School of Medicine and Public Health
        </div>
      </div>
      <div className="exp">
        <div>2016 - 2017</div>
        <div>Research Specialist | Epistemic Games Group</div>
        <div>Wisconsin Center for Education Research</div>
      </div>
      <div className="exp">
        <div>2014 - 2015</div>
        <div>Graduate Research Assistant | Neuroscience Training Program</div>
        <div>University of Wisconsin-Madison</div>
      </div>
      <div className="exp">
        <div>2012 - 2014</div>
        <div>Research Fellow | NIAAA Section on Human Neurogenetics</div>
        <div>National Institutes of Health</div>
      </div>
      <div className="exp">
        <div>2009 - 2012</div>
        <div>
          Lab Manager, Research Assistant | Center for the Study of
          Neuroeconomics
        </div>
        <div>George Mason University</div>
      </div>
      <div className="exp">
        <div>2010 - 2011</div>
        <div>
          Undergraduate Researcher | Krasnow Institute for Advanced Study
        </div>
        <div>George Mason University</div>
      </div>
      <div className="exp">
        <div>2007</div>
        <div>Research Intern | Computational Materials Science Center</div>
        <div>George Mason University</div>
      </div>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="exp">
        <div>2022 -</div>
        <div>Founder, Producer | Cheshire Cat Comedy</div>
      </div>
      <div className="exp">
        <div>2020 - 2021</div>
        <div>Data Analyst, Independent Contractor| Insights Analytics</div>
      </div>
      <div className="exp">
        <div>2015 - 2016</div>
        <div>
          Genetic Identity QA Specialist, Statistical Consultant | Promega
          Corporation
        </div>
      </div>
      <div className="exp">
        <div>2012</div>
        <div>Writer, Software Tester | Siber Systems, Inc.</div>
      </div>
      <h2>TEACHING EXPERIENCE</h2>
      <div className="exp">
        <div>2014 - 2019</div>
        <div>
          Volunteer Neuroscience Educator | Neuroscience Training Program
          Outreach
        </div>
        <div>University of Wisconsin-Madison</div>
      </div>
      <div className="exp">
        <div>2019</div>
        <div>Guest Lecturer | Introduction to Psychology (PSYCH 20809231)</div>
        <div>Madison Area Technical College</div>
      </div>
      <div className="exp">
        <div>2018</div>
        <div>Guest Lecturer | College Writing (ENGL 113)</div>
        <div>Springfield College</div>
      </div>
      <div className="exp">
        <div>2016</div>
        <div>Guest Lecturer | College Writing (ENG 112)</div>
        <div>University of Massachusetts Amherst</div>
      </div>
      <div className="exp">
        <div>2013</div>
        <div>Volunteer Genomics Educator | Museum of Natural History</div>
        <div>Smithsonian Institution</div>
      </div>
      <h2>OTHER EXPERIENCE</h2>
      <div className="exp">
        <div>2022-Present</div>
        <div>Co-Founder, Producer</div>
        <div>Cheshire Cat Comedy</div>
      </div>
      <div className="exp">
        <div>2021-2022</div>
        <div>Co-Founder, Producer</div>
        <div>Madison Indie Comedy</div>
      </div>
      <div className="exp">
        <div>2015</div>
        <div>Host, Producer | BRAIN Initiative Hangouts OnAir</div>
        <div>Neuroscience Knowledge Network</div>
      </div>
      <div className="exp">
        <div>2013</div>
        <div>
          Grant Reviewer | Alessandro Liberati Call for Young Investigators
        </div>
        <div>Emilia-Romagna Regional Health Authority</div>
      </div>
      <div className="exp">
        <div>2011</div>
        <div>Secretary, Web Admin | Women in Neuroscience</div>
        <div>George Mason University</div>
      </div>
    </main>
  );
}
