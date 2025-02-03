export function showRoundValue(value: number): number|string {
  if (value) {
    return Math.round(value);
  }

  return '-';
}
