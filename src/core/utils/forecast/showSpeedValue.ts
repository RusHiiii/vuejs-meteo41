export function showSpeedValue(value: number): string|number {
  if (value) {
    return (value * 3.6).toFixed(1);
  }

  return '-';
}
