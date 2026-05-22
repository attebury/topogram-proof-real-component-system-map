import assert from "node:assert/strict";
import { componentRegistry, designTokens } from "../component-library/src/components.js";
import * as dataGridStory from "../component-library/src/DataGrid.stories.js";
import * as cardListStory from "../component-library/src/CardList.stories.js";
import * as filterPanelStory from "../component-library/src/FilterPanel.stories.js";
import * as actionToolbarStory from "../component-library/src/ActionToolbar.stories.js";
import * as alertBannerStory from "../component-library/src/AlertBanner.stories.js";
import * as timelineStory from "../component-library/src/Timeline.stories.js";

const expectedRefs = ["acme.dataGrid", "acme.cardList", "acme.filterPanel", "acme.actionToolbar", "acme.alertBanner", "acme.timeline"];
for (const ref of expectedRefs) assert.ok(componentRegistry[ref], "Missing component ref " + ref);
assert.equal(designTokens.color.statusCritical, "acme.color.status.critical");
for (const story of [dataGridStory, cardListStory, filterPanelStory, actionToolbarStory, alertBannerStory, timelineStory]) {
  assert.ok(story.default.parameters?.componentRef, "Story must expose a stable componentRef");
  assert.ok(story.default.parameters?.styleRef, "Story must expose a stable styleRef");
}
console.log("Component build check passed.");
