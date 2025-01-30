import type {Observation} from "@/common/types/Observation.tsx";

export function showObservation(value: Observation|null): string {
  if (value) {
    return value.message;
  }

  return '-';
}
