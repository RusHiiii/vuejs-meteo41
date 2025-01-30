export function showOptionnalSensor(value: number|null, unit: string|null, precision: number = 1): string {
  if (value !== null) {
    return `${value.toFixed(precision)} ${unit}`;
  }

  return '-';
}
