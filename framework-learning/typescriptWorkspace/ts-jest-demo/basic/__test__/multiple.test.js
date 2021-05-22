const multiple = require('../src/multiple');

test('adds 1 * 2 to equal 2', () => {
  expect(multiple(1, 2)).toBe(2);
});