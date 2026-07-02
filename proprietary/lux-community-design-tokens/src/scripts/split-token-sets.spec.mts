import { extractTokenOverrides } from "./split-token-sets.mts";
import { describe, expect, it } from "vitest";

const mergedTokenSet = {
  rhc: {
    color: {
      primary: "blue",
    },
  },
  overwrite: {
    color: {
      primary: "red",
    },
    icon: {
      smile: ":)",
    },
  },
};

const baseTokenSet = {
  rhc: {
    color: {
      primary: "blue",
    },
  },
};

const overrideTokenSet = {
  overwrite: {
    color: {
      primary: "red",
    },
    icon: {
      smile: ":)",
    },
  },
};

describe("extractTokenOverrides", () => {
  it("should extract token overrides correctly", () => {
    const result = extractTokenOverrides(mergedTokenSet, baseTokenSet);

    expect(result).toEqual(overrideTokenSet);
  });

  it("should return an empty object if there are no overrides", () => {
    const result = extractTokenOverrides(baseTokenSet, baseTokenSet);

    expect(result).toEqual({});
  });

  it("should return all keys if the base token set is empty", () => {
    const result = extractTokenOverrides(mergedTokenSet, {});
  });

  it("should error if the base token set does not match the structure of the merged token set", () => {
    const differentBaseTokenSet = {
      rhc: {
        color: {
          secondary: "green",
        },
      },
    };

    expect(() =>
      extractTokenOverrides(mergedTokenSet, differentBaseTokenSet),
    ).toThrow();
  });

  it("should pass even if base token set is in different order", () => {
    const shuffledBaseTokenSet = {
      rhc: {
        size: {
          sm: "1px",
        },
        color: {
          secondary: "blue",
        },
      },
    };

    const shuffledMergedTokenSet = {
      rhc: {
        color: {
          secondary: "blue",
        },
        size: {
          sm: "1px",
        },
      },
    };
    expect(() =>
      extractTokenOverrides(shuffledMergedTokenSet, shuffledBaseTokenSet),
    ).not.toThrow();
  });
});
