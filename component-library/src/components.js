import { designTokens } from "./tokens.js";
export { designTokens };
export const componentRegistry = {
  "acme.dataGrid": { name: "DataGrid", pattern: "data_grid_view", styleRefs: [designTokens.style.compactGrid], states: ["loading", "empty", "error", "selected"], behaviors: ["selection", "sorting", "filtering"] },
  "acme.cardList": { name: "CardList", pattern: "resource_cards", styleRefs: [designTokens.style.mobileCards], states: ["loading", "empty", "selected"], behaviors: ["selection"] },
  "acme.filterPanel": { name: "FilterPanel", pattern: "filter_panel", styleRefs: ["acme.filters.compact"], states: ["empty"], behaviors: ["filtering"] },
  "acme.actionToolbar": { name: "ActionToolbar", pattern: "action_bar", styleRefs: ["acme.toolbar.primary"], states: ["default"], behaviors: ["bulk_action"] },
  "acme.alertBanner": { name: "AlertBanner", pattern: "empty_state_panel", styleRefs: [designTokens.style.criticalAlert], states: ["critical", "warning", "success"], behaviors: ["dismiss"] },
  "acme.timeline": { name: "Timeline", pattern: "timeline_view", styleRefs: [designTokens.style.timelineDense], states: ["loading", "empty"], behaviors: ["expand"] }
};
export function DataGrid({ rows = [] } = {}) { return { componentRef: "acme.dataGrid", rowCount: rows.length }; }
export function CardList({ items = [] } = {}) { return { componentRef: "acme.cardList", itemCount: items.length }; }
export function FilterPanel({ filters = [] } = {}) { return { componentRef: "acme.filterPanel", filterCount: filters.length }; }
export function ActionToolbar({ actions = [] } = {}) { return { componentRef: "acme.actionToolbar", actionCount: actions.length }; }
export function AlertBanner({ severity = "warning" } = {}) { return { componentRef: "acme.alertBanner", severity }; }
export function Timeline({ events = [] } = {}) { return { componentRef: "acme.timeline", eventCount: events.length }; }
