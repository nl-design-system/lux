import { describe, expect, it } from "vitest";
import {
  findTokenSetsNotInAnyTheme,
  reconcileTokenSetOrder,
  validateBaseTokenSets,
} from "./validate-token-sets.mts";

const baseTokens = {
  $metadata: { tokenSetOrder: ["brand/color", "components/button"] },
  $themes: [{ id: "rhc-theme", name: "RHC Theme" }],
  "brand/color": { color: { primary: { $type: "color", $value: "#123456" } } },
  "components/button": {
    button: { background: { $type: "color", $value: "{color.primary}" } },
  },
};

describe("validateBaseTokenSets", () => {
  it("reports nothing when all base token sets match", () => {
    const tokens = {
      $metadata: { tokenSetOrder: [] },
      $themes: [],
      "brand/color": structuredClone(baseTokens["brand/color"]),
      "components/button": structuredClone(baseTokens["components/button"]),
      "overrides/local": { extra: { $type: "color", $value: "#ffffff" } },
    };

    expect(validateBaseTokenSets(tokens, baseTokens)).toEqual({
      changedTokenSets: [],
      missingTokenSets: [],
    });
  });

  it("reports base token sets that were changed locally", () => {
    const tokens = {
      "brand/color": {
        color: { primary: { $type: "color", $value: "#654321" } },
      },
      "components/button": structuredClone(baseTokens["components/button"]),
    };

    expect(validateBaseTokenSets(tokens, baseTokens)).toEqual({
      changedTokenSets: ["brand/color"],
      missingTokenSets: [],
    });
  });

  it("reports base token sets that are missing", () => {
    const tokens = {
      "brand/color": structuredClone(baseTokens["brand/color"]),
    };

    expect(validateBaseTokenSets(tokens, baseTokens)).toEqual({
      changedTokenSets: [],
      missingTokenSets: ["components/button"],
    });
  });

  it("ignores $metadata, $themes and team-managed token sets", () => {
    const tokens = {
      $metadata: { tokenSetOrder: ["something", "entirely", "different"] },
      $themes: [{ id: "own-theme", name: "Own Theme" }],
      "brand/color": structuredClone(baseTokens["brand/color"]),
      "components/button": structuredClone(baseTokens["components/button"]),
      "overrides/anything": { foo: { $type: "color", $value: "#000000" } },
      "local-components/bar": { bar: { $type: "sizing", $value: "1rem" } },
    };

    expect(validateBaseTokenSets(tokens, baseTokens)).toEqual({
      changedTokenSets: [],
      missingTokenSets: [],
    });
  });
});

describe("reconcileTokenSetOrder", () => {
  it("reports nothing when tokenSetOrder matches the token sets", () => {
    const tokens = {
      $metadata: { tokenSetOrder: ["brand/color", "components/button"] },
      $themes: [],
      "brand/color": {},
      "components/button": {},
    };

    expect(reconcileTokenSetOrder(tokens)).toEqual({
      fixedTokenSetOrder: ["brand/color", "components/button"],
      missingSets: [],
      staleEntries: [],
    });
  });

  it("drops stale entries while preserving the order of the rest", () => {
    const tokens = {
      $metadata: {
        tokenSetOrder: [
          "removed/set",
          "brand/color",
          "gone/too",
          "components/button",
        ],
      },
      "brand/color": {},
      "components/button": {},
    };

    expect(reconcileTokenSetOrder(tokens)).toEqual({
      fixedTokenSetOrder: ["brand/color", "components/button"],
      missingSets: [],
      staleEntries: ["removed/set", "gone/too"],
    });
  });

  it("reports token sets that are missing from tokenSetOrder", () => {
    const tokens = {
      $metadata: { tokenSetOrder: ["brand/color"] },
      $themes: [],
      "brand/color": {},
      "components/button": {},
      "overrides/local": {},
    };

    expect(reconcileTokenSetOrder(tokens)).toEqual({
      fixedTokenSetOrder: ["brand/color"],
      missingSets: ["components/button", "overrides/local"],
      staleEntries: [],
    });
  });

  it("treats every token set as missing when tokenSetOrder is absent", () => {
    const tokens = {
      "brand/color": {},
    };

    expect(reconcileTokenSetOrder(tokens)).toEqual({
      fixedTokenSetOrder: [],
      missingSets: ["brand/color"],
      staleEntries: [],
    });
  });
});

describe("findTokenSetsNotInAnyTheme", () => {
  it("reports nothing when every token set is used in a theme", () => {
    const tokens = {
      $metadata: { tokenSetOrder: [] },
      $themes: [
        { name: "One", selectedTokenSets: { "brand/color": "enabled" } },
        { name: "Two", selectedTokenSets: { "components/button": "enabled" } },
      ],
      "brand/color": {},
      "components/button": {},
    };

    expect(findTokenSetsNotInAnyTheme(tokens, {})).toEqual([]);
  });

  it("reports token sets that no theme selects", () => {
    const tokens = {
      $themes: [
        { name: "One", selectedTokenSets: { "brand/color": "enabled" } },
      ],
      "brand/color": {},
      "overrides/unused": {},
    };

    expect(findTokenSetsNotInAnyTheme(tokens, {})).toEqual([
      "overrides/unused",
    ]);
  });

  it("counts source token sets as used, but not disabled ones", () => {
    const tokens = {
      $themes: [
        {
          name: "One",
          selectedTokenSets: {
            "brand/color": "source",
            "components/button": "disabled",
          },
        },
      ],
      "brand/color": {},
      "components/button": {},
    };

    expect(findTokenSetsNotInAnyTheme(tokens, {})).toEqual([
      "components/button",
    ]);
  });

  it("reports every token set when there are no themes", () => {
    const tokens = {
      "brand/color": {},
    };

    expect(findTokenSetsNotInAnyTheme(tokens, {})).toEqual(["brand/color"]);
  });

  it("does not report unused base token sets from the RHC package", () => {
    const tokens = {
      $themes: [
        { name: "One", selectedTokenSets: { "overrides/used": "enabled" } },
      ],
      "brand/color": {},
      "components/button": {},
      "overrides/used": {},
      "overrides/unused": {},
    };

    expect(findTokenSetsNotInAnyTheme(tokens, baseTokens)).toEqual([
      "overrides/unused",
    ]);
  });
});
