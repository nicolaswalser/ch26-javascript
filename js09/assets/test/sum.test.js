const { sum } = require("../scripts/sum");

test("TEST 1 + 3 = 4", () => {
  expect(sum(1, 3)).toBe(4);
});
