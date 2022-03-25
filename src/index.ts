/** convert to 2 decimal amount numbers and fix JS accuracy problems */
export default function toFin(num: number) {
  const strip = Number(Number(num).toFixed(15));
  return Math.floor(strip * 10 ** 2) / 10 ** 2;
}
