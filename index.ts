const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Color converter from decimal to RGB</h1>`;

/** 
 * Based on given decimal variable we can change document's background color. 
 * Before that converter changes decimal number to RGB which CSS understands.
*/

const decimal: number = 10526800;
const decimalConverterToRgb = (decimal: number): string => {
  const r = decimal & 0xFF;
  const g = decimal >> 8 & 0xFF;
  const b = decimal >> 16 & 0xFF;
  return `rgb(${r},${g},${b})`;
}
const setBackgroundColor = (decimal: number): void => {
  decimalConverterToRgb(decimal);
  document.body.style.backgroundColor = decimalConverterToRgb(decimal);
}
setBackgroundColor(decimal);
