import { Experience } from "../entities/Experience";

export interface GetExperiencesUseCase {
  execute(): Promise<Experience[]>;
}
