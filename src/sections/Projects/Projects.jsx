import styles from "./ProjectsStyles.module.css";
import hospitalms from "../../assets/hospital-ms.jpeg";
import cafems from "../../assets/cafe-ms.jpeg";
import hom from "../../assets/ho-movies.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hospitalms}
          // link={"https://www.github.com"}
          // link={"/"}
          h3={"Pulse"}
          p={"Hospital Management System"}
        />
        <ProjectCard
          src={cafems}
          // link={"https://www.github.com"}
          h3={"CafeBytes"}
          p={"Cafe Management System"}
        />
        <ProjectCard
          src={hom}
          // link={"https://www.github.com"}
          h3={"House of Movies"}
          p={"Web-App for Latest Movies"}
        />
      </div>
    </section>
  );
}

export default Projects;
