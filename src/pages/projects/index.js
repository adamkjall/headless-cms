import { getAllProjects } from "@utils/getContent";

import ProjectCard from "@components/project/ProjectCard";

export default function Projects({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-10">
      {projects
        ?.sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
