
import Navbar from "./comp/Navbar";
import Herosection from "../app/comp/homepage/herosection/Herosection"
import Aboutpage from "./comp/homepage/about/aboutpage"
import Experience from "./comp/homepage/experience/experience";
import Skills from "./comp/homepage/skills/skills"
import Project from "./comp/homepage/projects/project"
import Contact from "./comp/homepage/contact/Contact";



export default function Home() {
  return (
    <div >
      <Navbar/>
      <Herosection/>
     <Aboutpage/>
     <Experience/>
     <Skills/>
     <Project/>
     <Contact/>

      
    </div>
  );
}
