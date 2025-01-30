export function showFixedValue(value: number|undefined, precision: number = 1): string {
  if (value) {
    return value.toFixed(precision);
  }

  return '-';
}
