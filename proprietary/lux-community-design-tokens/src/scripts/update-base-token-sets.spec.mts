import { describe, expect, it } from "vitest";
import {
  applyBaseUpdate,
  diffBaseTokenSets,
  insertDeprecatedSetIntoOrder,
  insertIntoTokenSetOrder,
  updateThemes,
} from "./update-base-token-sets.mts";

const token = (value: string) => ({ $type: "color", $value: value });

describe("diffBaseTokenSets", () => {
  it("returns an empty diff for identical bases", () => {
    const base = {
      $metadata: { tokenSetOrder: ["brand/color"] },
      $themes: [],
      "brand/color": { color: { primary: token("#111111") } },
    };

    expect(diffBaseTokenSets(base, structuredClone(base))).toEqual({
      addedSets: [],
      deprecatedTokens: {},
      removedSets: [],
    });
  });

  it("captures the old value of a changed token", () => {
    const oldBase = {
      "brand/color": {
        color: { primary: token("#111111"), other: token("#222222") },
      },
    };
    const newBase = {
      "brand/color": {
        color: { primary: token("#999999"), other: token("#222222") },
      },
    };

    expect(diffBaseTokenSets(oldBase, newBase).deprecatedTokens).toEqual({
      color: { primary: token("#111111") },
    });
  });

  it("captures removed tokens and removed groups", () => {
    const oldBase = {
      "brand/color": {
        color: { primary: token("#111111") },
        gone: { deep: token("#333333") },
      },
    };
    const newBase = {
      "brand/color": { color: { primary: token("#111111") } },
    };

    expect(diffBaseTokenSets(oldBase, newBase).deprecatedTokens).toEqual({
      gone: { deep: token("#333333") },
    });
  });

  it("captures the contents of a removed set and reports added/removed sets", () => {
    const oldBase = {
      "brand/color": { color: { primary: token("#111111") } },
      "components/legacy": { legacy: { size: token("1rem") } },
    };
    const newBase = {
      "brand/color": { color: { primary: token("#111111") } },
      "components/shiny": { shiny: { size: token("2rem") } },
    };

    expect(diffBaseTokenSets(oldBase, newBase)).toEqual({
      addedSets: ["components/shiny"],
      deprecatedTokens: { legacy: { size: token("1rem") } },
      removedSets: ["components/legacy"],
    });
  });

  it("does not capture tokens that are only added in the new version", () => {
    const oldBase = {
      "brand/color": { color: { primary: token("#111111") } },
    };
    const newBase = {
      "brand/color": {
        color: { primary: token("#111111"), fresh: token("#444444") },
      },
    };

    expect(diffBaseTokenSets(oldBase, newBase).deprecatedTokens).toEqual({});
  });

  it("resolves path collisions between sets by the old tokenSetOrder", () => {
    const oldBase = {
      $metadata: { tokenSetOrder: ["low/set", "high/set"] },
      "high/set": { color: { primary: token("#high-old") } },
      "low/set": { color: { primary: token("#low-old") } },
    };
    const newBase = {
      $metadata: { tokenSetOrder: ["low/set", "high/set"] },
      "high/set": { color: { primary: token("#high-new") } },
      "low/set": { color: { primary: token("#low-new") } },
    };

    // "high/set" comes later in tokenSetOrder, so its old value wins the collision
    expect(diffBaseTokenSets(oldBase, newBase).deprecatedTokens).toEqual({
      color: { primary: token("#high-old") },
    });
  });
});

describe("insertIntoTokenSetOrder", () => {
  const packageOrder = [
    "brand/color",
    "components/alert",
    "components/button",
    "components/card",
  ];

  it("inserts an added set after its nearest preceding package neighbor", () => {
    const appOrder = [
      "brand/color",
      "components/alert",
      "components/card",
      "overrides/own",
    ];

    expect(
      insertIntoTokenSetOrder(appOrder, ["components/button"], packageOrder),
    ).toEqual([
      "brand/color",
      "components/alert",
      "components/button",
      "components/card",
      "overrides/own",
    ]);
  });

  it("skips package neighbors the app does not list", () => {
    const appOrder = ["brand/color", "overrides/own"];

    expect(
      insertIntoTokenSetOrder(appOrder, ["components/card"], packageOrder),
    ).toEqual(["brand/color", "components/card", "overrides/own"]);
  });

  it("inserts at the start when the added set has no preceding neighbor", () => {
    const appOrder = ["components/alert", "overrides/own"];

    expect(
      insertIntoTokenSetOrder(appOrder, ["brand/color"], packageOrder),
    ).toEqual(["brand/color", "components/alert", "overrides/own"]);
  });

  it("appends added sets that are not in the package order", () => {
    const appOrder = ["brand/color"];

    expect(
      insertIntoTokenSetOrder(appOrder, ["unknown/set"], packageOrder),
    ).toEqual(["brand/color", "unknown/set"]);
  });

  it("keeps consecutive added sets together in package order", () => {
    const appOrder = ["brand/color", "components/card"];

    expect(
      insertIntoTokenSetOrder(
        appOrder,
        ["components/button", "components/alert"],
        packageOrder,
      ),
    ).toEqual([
      "brand/color",
      "components/alert",
      "components/button",
      "components/card",
    ]);
  });
});

describe("insertDeprecatedSetIntoOrder", () => {
  it("appends at the end when there are no older pins", () => {
    expect(
      insertDeprecatedSetIntoOrder(
        ["brand/color", "overrides/own"],
        "overrides/deprecated changes/12.0.0",
      ),
    ).toEqual([
      "brand/color",
      "overrides/own",
      "overrides/deprecated changes/12.0.0",
    ]);
  });

  it("inserts before older deprecated-changes pins so those keep winning", () => {
    expect(
      insertDeprecatedSetIntoOrder(
        ["brand/color", "overrides/deprecated changes/11.1.0"],
        "overrides/deprecated changes/12.0.0",
      ),
    ).toEqual([
      "brand/color",
      "overrides/deprecated changes/12.0.0",
      "overrides/deprecated changes/11.1.0",
    ]);
  });

  it("does not duplicate an already listed deprecated set", () => {
    expect(
      insertDeprecatedSetIntoOrder(
        ["brand/color", "overrides/deprecated changes/11.1.0"],
        "overrides/deprecated changes/11.1.0",
      ),
    ).toEqual(["brand/color", "overrides/deprecated changes/11.1.0"]);
  });
});

describe("updateThemes", () => {
  it("enables the deprecated set in every theme and strips removed sets", () => {
    const themes = [
      {
        id: "one",
        name: "One",
        selectedTokenSets: {
          "brand/color": "enabled",
          "components/legacy": "enabled",
        },
      },
      {
        id: "two",
        name: "Two",
        selectedTokenSets: { "brand/color": "source" },
      },
    ];

    expect(
      updateThemes(themes, "overrides/deprecated changes/11.1.0", [
        "components/legacy",
      ]),
    ).toEqual([
      {
        id: "one",
        name: "One",
        selectedTokenSets: {
          "brand/color": "enabled",
          "overrides/deprecated changes/11.1.0": "enabled",
        },
      },
      {
        id: "two",
        name: "Two",
        selectedTokenSets: {
          "brand/color": "source",
          "overrides/deprecated changes/11.1.0": "enabled",
        },
      },
    ]);
  });

  it("leaves themes unchanged apart from removals when there is no deprecated set", () => {
    const themes = [
      {
        name: "One",
        selectedTokenSets: { "brand/color": "enabled", "gone/set": "enabled" },
      },
    ];

    expect(updateThemes(themes, null, ["gone/set"])).toEqual([
      { name: "One", selectedTokenSets: { "brand/color": "enabled" } },
    ]);
  });
});

describe("applyBaseUpdate", () => {
  it("updates base sets, order, and themes in one pass", () => {
    const tokens = {
      $themes: [
        {
          name: "Theme",
          selectedTokenSets: {
            "brand/color": "enabled",
            "components/legacy": "enabled",
            "overrides/own": "enabled",
          },
        },
      ],
      $metadata: {
        tokenSetOrder: ["brand/color", "components/legacy", "overrides/own"],
      },
      "brand/color": { color: { primary: token("#111111") } },
      "components/legacy": { legacy: { size: token("1rem") } },
      "overrides/own": { own: token("#aaaaaa") },
    };
    const newBase = {
      $metadata: { tokenSetOrder: ["brand/color", "components/shiny"] },
      "brand/color": { color: { primary: token("#999999") } },
      "components/shiny": { shiny: { size: token("2rem") } },
    };
    const diff = diffBaseTokenSets(
      {
        "brand/color": tokens["brand/color"],
        "components/legacy": tokens["components/legacy"],
      },
      newBase,
    );

    applyBaseUpdate(tokens, {
      deprecatedSetName: "overrides/deprecated changes/11.1.0",
      diff,
      newBase,
    });

    expect(tokens["brand/color"]).toEqual({
      color: { primary: token("#999999") },
    });
    expect(tokens).not.toHaveProperty(["components/legacy"]);
    expect(tokens).toHaveProperty(["components/shiny"]);
    expect(tokens["overrides/own"]).toEqual({ own: token("#aaaaaa") });
    expect(tokens["overrides/deprecated changes/11.1.0"]).toEqual({
      color: { primary: token("#111111") },
      legacy: { size: token("1rem") },
    });
    expect(tokens.$metadata.tokenSetOrder).toEqual([
      "brand/color",
      "components/shiny",
      "overrides/own",
      "overrides/deprecated changes/11.1.0",
    ]);
    expect(tokens.$themes[0].selectedTokenSets).toEqual({
      "brand/color": "enabled",
      "overrides/own": "enabled",
      "overrides/deprecated changes/11.1.0": "enabled",
    });
  });
});
