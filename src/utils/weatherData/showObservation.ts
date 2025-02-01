import type {Observation} from "@/core/types/Observation.tsx";

export function showObservation(value: Observation|null): string {
  if (value) {
    return value.message;
  }

  return '-';
}
