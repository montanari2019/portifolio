import { useRef } from "react";
import Container from "typedi";

export const useDI = <T extends unknown>(name: string) => {
  return useRef<T>(Container.get(name)).current;
};
