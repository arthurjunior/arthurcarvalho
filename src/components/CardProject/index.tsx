import { Container, ProjectContainer, ProjectsContent, Title } from "./styles";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import code from "../../../public/skills/codeTwo.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Projects {
  id: number;
  url: string;
  img: string;
  title: string;
  type: string;
  icon: string;
  github: string;
  web: string;
  tablet: string;
  mobile: string;
}

export default function CardProject() {
  return (
    <Container>
      <Title>
        Projetos
        <span>
          <HiOutlineDesktopComputer /> Projects
        </span>
        <img src={code} alt="" />
      </Title>
      <ProjectContainer>
        {projects.slice(0, 9).map((project) => {
          return (
            <Link to={`/project/${project.url}`} key={project.id}>
              <ProjectsContent>
                <img src={project.img} alt={project.title} className="banner" />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>

                  <div className="tags">
                    {project.tags.map((tag) => {
                      return (
                        <img
                          src={tag.icon}
                          alt={tag.name}
                          key={tag.name}
                          className="tagsImg"
                        />
                      );
                    })}
                  </div>
                </div>
              </ProjectsContent>
            </Link>
          );
        })}
      </ProjectContainer>
    </Container>
  );
}
