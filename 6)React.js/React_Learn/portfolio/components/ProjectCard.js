export default function ProjectCard({ title, description, tech }) {
  return (
    <article className="projectCard">
      <p className="projectTech">{tech}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
