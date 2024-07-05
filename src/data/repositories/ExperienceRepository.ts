import { ExperienceDto } from "../dto/ExperienceDto";

export interface ExperienceRepository {
  get(): Promise<ExperienceDto[]>;
}
