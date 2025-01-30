
export function showVariation(value: number|undefined, unit: string|undefined): string {
  if (value) {
    const sign = value > 0 ? '+' : '';

    return `${sign}${value.toFixed(1)} ${unit}`;
  }

  return '-';
}
