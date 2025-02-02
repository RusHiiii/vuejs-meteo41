export function showFixedValue(value: number|undefined, precision: number = 1): string {
  if (value === undefined || value === null) {
    return '-';
  }

  return value.toFixed(precision);
}
