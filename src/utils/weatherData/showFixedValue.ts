export function showFixedValue(value: number|null, precision: number = 1): string {
    if (value) {
      return value.toFixed(precision);
    }

    return '-';
}
