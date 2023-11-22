export default function useSum() {
  const sum = (...numbers: number[]): number =>
    numbers.reduce((prev, curr) => prev + curr, 0);

  return {
    sum,
  };
}
