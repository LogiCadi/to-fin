/** convert to 2 decimal amount numbers and fix JS accuracy problems */
export default function toFin(num: number | string) {
  /** correct number */
  const strip = (n: number | string) => Number(Number(n).toPrecision(15));
  return strip(Math.floor(strip(strip(num) * 100)) / 100);
}
