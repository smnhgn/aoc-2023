export function calibrate(input: string): number {
  const lines = input.split("\n");
  let sum = 0;

  for (const line of lines) {
    const [left, ...rest] = line.replaceAll(/\D/g, "");
    const right = rest.at(-1) ?? left;

    sum += +(left + right);
  }

  return sum;
}

