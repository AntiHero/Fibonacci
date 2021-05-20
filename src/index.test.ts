import fibonacci from './'

it('fibonacci(10) return 55', () => {
  expect(fibonacci(10)).toBe(55)
})

it('fibonacci(10) return 55', () => {
  expect(fibonacci(-10)).toBe('number should be more than 0')
})