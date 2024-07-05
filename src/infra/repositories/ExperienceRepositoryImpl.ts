import { ExperienceDto, ExperienceRepository } from "@/data";
import { FAKE_DB } from "../datasource/fake-db";

export class ExperienceRepositoryImpl implements ExperienceRepository {
  get(): Promise<ExperienceDto[]> {
    return Promise.resolve(FAKE_DB);
  }
}
