export = function fibonacci(num = 0, memo = {}): number | string {
  if (num < 0) return 'number should be more than 0';

  if (memo[num]) return memo[num];

  if (num === 1) return 1;

  if (num === 0) return 0;

  return memo[num] = (fibonacci(num - 1) as number) + (fibonacci(num - 2) as number)
}