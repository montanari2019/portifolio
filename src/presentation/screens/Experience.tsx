import Container from "typedi";
import { ExperienceController } from "../controller/ExperienceController";

export async function Experience() {
  const controller = Container.get<ExperienceController>(
    "ExperienceController"
  );

  const renderList = async () => {
    try {
      const experiences = await controller.list();
      return (
        <ul>
          {experiences.map((experience) => (
            <li key={`experience-${experience.id}`}>
              {JSON.stringify(experience)}
            </li>
          ))}
        </ul>
      );
    } catch (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
  };

  const content = await renderList();

  return (
    <main>
      <h1>Experience</h1>
      <section>{content}</section>
    </main>
  );
}
