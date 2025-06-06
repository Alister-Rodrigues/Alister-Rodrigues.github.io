import ItemCard from "../components/Card/ItemCard";
import Container from "../components/UI/Container";
import classes from "./portfolio.module.sass";

function Projects() {
  const projects = [
    {
      title: 'Music Recommendation System',
      description: 'Designed and developed a music recommendation system using Hadoop, PySpark and machine learning'
    },
    {
      title: 'Simple Google Login',
      description: 'Developed a Kotlin application to gather the location of a user on login and send it to a server'
    },
    {
      title: 'Frontend Admin Consoles',
      description: "Developed multiple frontend admin consoles based on designs provided by the client and rendered using figma. These admin consoles allow the admin team to manage users and the application's media content, capabilities and mail newsletters."
    },
    {
      title: 'JavaScript Web Components',
      description: 'Developed JavaScript web components with native rendering. This library is currently used for refactoring multiple projects across the company, with reduced debugging time and improved code quality.'
    },
    {
      title: 'Custom Authenticator App',
      description: 'Designed and developed a custom web login in ASP.NET C# and mobile app for Passwordless Authentication to enhance the AuthN/AuthZ experience for a custom application.'
    }
  ];
  return (
    <>
      <h1>Projects</h1>
      <Container className="card-container internal-padding-2">
        {projects.map(project =>
          <ItemCard>
            <h3 key={project.title}>{project.title}</h3>
            <p key={project.description} className={classes.descriptionText}>{project.description}</p>
          </ItemCard>
        )}
      </Container>
    </>
  );
}

export default Projects;