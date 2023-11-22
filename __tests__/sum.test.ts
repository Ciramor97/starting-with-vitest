import useSum from "../composables/sum";
import { describe, it, expect } from "vitest";

const { sum } = useSum();

describe("sum", () => {
  it("returns correct result", () => {
    const result = sum(1, 2, 3);

    expect(result).toEqual(6);
  });
});
