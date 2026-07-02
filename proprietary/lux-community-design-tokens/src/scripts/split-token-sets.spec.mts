import { describe, expect, it } from "vitest";
import { extractTokenOverrides } from "./split-token-sets.mts";

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
    expect(result).toEqual(mergedTokenSet);
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

  it("should keep $themes in overrides while validating base token sets", () => {
    const mergedWithThemes = {
      ...mergedTokenSet,
      $themes: [{ id: "theme-a" }],
    };
    const baseWithThemes = {
      ...baseTokenSet,
      $themes: [{ id: "base-theme" }],
    };

    expect(extractTokenOverrides(mergedWithThemes, baseWithThemes)).toEqual({
      overwrite: {
        color: {
          primary: "red",
        },
        icon: {
          smile: ":)",
        },
      },
      $themes: [{ id: "theme-a" }],
    });
  });

  it("should maintain the order of keys in the overrides", () => {
    const mergedWithOrder = {
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
      anotherOverride: {
        size: {
          sm: "1px",
        },
      },
      $themes: [{ id: "theme-a" }, { id: "theme-b" }],
    };

    const baseWithOrder = {
      rhc: {
        color: {
          primary: "blue",
        },
      },
      $themes: [{ id: "theme-a" }],
    };

    const result = extractTokenOverrides(mergedWithOrder, baseWithOrder);
    expect(Object.keys(result)).toEqual([
      "overwrite",
      "anotherOverride",
      "$themes",
    ]);
  });

  it("should preserve nested key order in override token sets", () => {
    const mergedWithNestedOrder = {
      rhc: {
        color: {
          primary: "blue",
        },
      },
      overwrite: {
        component: {
          button: {
            $type: "color",
            $value: "{rhc.color.blue.500}",
          },
          badge: {
            $type: "color",
            $value: "{rhc.color.red.500}",
          },
        },
      },
    };

    const result = extractTokenOverrides(mergedWithNestedOrder, baseTokenSet);

    expect(Object.keys(result)).toEqual(["overwrite"]);
    expect(
      Object.keys(
        (result["overwrite"] as { component: Record<string, unknown> })
          .component,
      ),
    ).toEqual(["button", "badge"]);
  });

  it("should keep $themes after overrides even when merged file has $themes first", () => {
    const mergedWithThemesFirst = {
      $themes: [{ id: "theme-a" }],
      rhc: {
        color: {
          primary: "blue",
        },
      },
      overwrite: {
        color: {
          primary: "red",
        },
      },
    };

    const result = extractTokenOverrides(mergedWithThemesFirst, baseTokenSet);

    expect(Object.keys(result)).toEqual(["overwrite", "$themes"]);
  });
});
