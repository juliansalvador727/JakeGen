import { useState } from "react";

import Title from "./components/Title";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ResumePreview from "./components/ResumePreview";

import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState({
    general: {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },

    education: [
      {
        university: "",
        degree: "",
        dates: "",
      },
    ],

    experience: [
      {
        role: "",
        company: "",
        location: "",
        dates: "",
        bullets: [""],
      },
    ],

    projects: [
      {
        name: "",
        technologies: "",
        dates: "",
        bullets: [""],
      },
    ],

    skills: {
      languages: "",
      frameworks: "",
      tools: "",
      libraries: "",
    },
  });
  return (
    <>
      <Title />
      <div className="container">
        <div className="left-side">
          <General
            data={resumeData.general}
            setData={(general) => setResumeData({ ...resumeData, general })}
          />
          <Education
            data={resumeData.education}
            setData={(education) => setResumeData({ ...resumeData, education })}
          />
          <Experience
            data={resumeData.experience}
            setData={(experience) =>
              setResumeData({ ...resumeData, experience })
            }
          />
          <Projects
            data={resumeData.projects}
            setData={(projects) => setResumeData({ ...resumeData, projects })}
          />
          <Skills
            data={resumeData.skills}
            setData={(skills) => setResumeData({ ...resumeData, skills })}
          />
        </div>
        <div className="right-side">
          <ResumePreview data={resumeData} />
        </div>
      </div>

      <h3 className="copyright">Made by Julian in React :) </h3>
    </>
  );
}

export default App;
