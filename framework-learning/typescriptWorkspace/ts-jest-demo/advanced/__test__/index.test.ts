import { Demo } from "@advanced/src/index";

const demo = new Demo();

test('demo.x to equal 1', () => {
  expect(demo.x).toBe(1);
});