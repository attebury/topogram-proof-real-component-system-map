import assert from "node:assert/strict";
import { test } from "node:test";
import { componentRegistry, designTokens } from "../component-library/src/components.js";
import dataGridMeta from "../component-library/src/DataGrid.stories.js";

test("component registry exposes stable refs", () => {
  assert.deepEqual(Object.keys(componentRegistry).sort(), ["acme.actionToolbar", "acme.alertBanner", "acme.cardList", "acme.dataGrid", "acme.filterPanel", "acme.timeline"]);
});

test("storybook metadata starts as design-system evidence only", () => {
  assert.equal(dataGridMeta.parameters.componentRef, "acme.dataGrid");
  assert.equal(dataGridMeta.parameters.styleRef, "acme.grid.compact");
  assert.equal(dataGridMeta.parameters.topogram, undefined);
});

test("tokens use stable design identities", () => {
  assert.equal(designTokens.typography.body, "acme.type.body");
});
