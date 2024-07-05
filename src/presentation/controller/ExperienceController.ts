import { Experience, GetExperiencesUseCase } from "@/domain";

export class ExperienceLazyController {
  private listeners: ExperienceObserver[] = [];

  constructor(private useCase: GetExperiencesUseCase) {}

  public async list(): Promise<void> {
    try {
      this.listeners.map((item) => item.onLoadingStatusChange(true));
      const data = await this.useCase.execute();
      this.listeners.map((item) => item.onSuccess(data));
    } catch (error) {
      this.listeners.map((item) => item.onError(error as Error));
    } finally {
      this.listeners.map((item) => item.onLoadingStatusChange(false));
    }
  }

  subscribeListener(listener: ExperienceObserver) {
    this.listeners.push(listener);
  }

  unsubscribeListener(listener: ExperienceObserver) {
    this.listeners = this.listeners.filter((q) => q !== listener);
  }
}

export class ExperienceController {
  constructor(private useCase: GetExperiencesUseCase) {}

  public async list(): Promise<Experience[]> {
    return await this.useCase.execute();
  }
}

type ExperienceObserver = {
  onSuccess(data: Experience[]): void;
  onError(error: Error): void;
  onLoadingStatusChange(status: boolean): void;
};
