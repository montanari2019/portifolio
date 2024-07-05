import { Experience } from "@/domain";

export interface ExperienceDto {
  id: string;
  startDate: string;
  endDate: string;
  company: string;
  description: string;
}

export class ExperienceDtoMapper {
  static toExperience({ startDate, endDate, ...rest }: ExperienceDto): Experience {
    return {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      ...rest,
    } as Experience;
  }
}
