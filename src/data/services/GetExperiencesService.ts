import { Experience, GetExperiencesUseCase } from "@/domain";
import { ExperienceRepository } from "../repositories/ExperienceRepository";
import { ExperienceDtoMapper } from "../dto/ExperienceDto";

export class GetExperiencesService implements GetExperiencesUseCase {
    constructor(private repository: ExperienceRepository){

    }
    async execute(): Promise<Experience[]> {
        const dtos = await this.repository.get();

        return dtos.map(ExperienceDtoMapper.toExperience)
    }
    
}