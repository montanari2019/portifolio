import { GetExperiencesService } from "@/data";
import { ExperienceRepositoryImpl } from "@/infra";
import { ExperienceController } from "@/presentation/controller/ExperienceController";
import Container from "typedi";

export class DIConfig {
  static config() {
    const experienceRepository = new ExperienceRepositoryImpl();
    const getExperiencesUseCase = new GetExperiencesService(
      experienceRepository
    );

    Container.set("ExperienceRepository", experienceRepository);
    Container.set("GetExperiencesUseCase", getExperiencesUseCase);
    Container.set(
      "ExperienceController",
      new ExperienceController(getExperiencesUseCase)
    );
    console.log("injetou")
  }
}
