export function beaufortScaleToText(value: number): string {
  let valueToText = [
    'Calme',
    'Très légère brise',
    'Légère brise',
    'Petite brise',
    'Jolie brise',
    'Bonne brise',
    'Vent frais',
    'Grand frais',
    'Coup de vent',
    'Fort coup de vent',
    'Tempête',
    'Violente tempête',
    'Bombe météorologique',
  ];

  return valueToText[value];
}
