# Context Slice: screen `intake_queue` — Intake Queue

## Summary
- Type: context_slice
- Description: UI screen 'intake_queue' in surface 'proj_web'.

## Review Boundary
- Automation class: review_required
- Reasons: `ui_screen_surface`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 3
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 4
- `agent_guidance` (must_read) — Agent Guidance
  - Mode, read order, follow-up queries, and required proof commands.
  - Items: 10
- `review_boundary` (must_read) — Review Boundary
  - Automation and human-review expectations for this scope.
  - Items: 2
- `ownership_boundary` (must_read) — Ownership Boundary
  - Generated, maintained, and human-owned boundaries that constrain edits.
  - Items: 4
- `write_scope` (must_read) — Write Scope
  - Files and surfaces that are safe, risky, or out of bounds to edit.
  - Items: 4
- `ui_agent_packet` (must_read) — UI Agent Packet
  - Screen, layout, region, widget, accessibility, i18n, design-token, and UI proof context for UI slices.
  - Items: 21
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 5
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 4
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --surface proj_web --screen intake_queue --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --surface proj_web --screen intake_queue --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## UI Work Map
### Readiness
- Status: ready
- Ready to edit: true
- Change targets:
  - `screen:intake_queue`
    - Focused UI work-map node.
  - `widget_binding:intake_filters` widget `widget_filter_panel`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_commands` widget `widget_command_toolbar`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_results_grid` widget `widget_intake_grid`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
  - `widget_binding:intake_alerts` widget `widget_alert_banner`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
### Work Map Chain
- Surface: `proj_web` (web)
- Screen: `intake_queue` — Intake Queue (list)
- Route: `/intake`
- Layout: `layout_intake_workspace` — Intake Workspace, pattern `collection_workspace`
  - Inherits: `layout_ops_shell` -> `layout_intake_workspace`
- Regions:
  - `header` role `page_header` pattern `app_header` uses `region_app_header`
  - `nav` role `global_navigation` pattern `primary_navigation` uses `region_global_nav`
  - `content` role `primary_work_area` pattern `data_grid_view` uses `region_results`
  - `commands` role `command_area` pattern `action_bar` uses `region_command_bar`
  - `filters` role `filter_area` pattern `filter_panel` uses `region_filter_panel`
  - `results` role `primary_work_area` pattern `data_grid_view` uses `region_results`
  - `alerts` role `status_feedback` pattern `empty_state_panel` uses `region_alerts`
### Widget Bindings
- `intake_filters`: widget `widget_filter_panel` in region `filters`
  - Intent: Filter intake items by status, priority, and assignee.
  - Priority: `high`
  - Slot role: `filter_area`
  - Data: `filters from shape shape_intake_filter`
- `intake_commands`: widget `widget_command_toolbar` in region `commands`
  - Intent: Expose queue actions and bulk operations.
  - Priority: `high`
  - Slot role: `command_area`
  - Events: `acknowledge_alert action cap_acknowledge_alert`
- `intake_results_grid`: widget `widget_intake_grid` in region `results`
  - Intent: Review and select intake rows.
  - Priority: `high`
  - Slot role: `primary_work_area`
  - Data: `rows from capability cap_list_intake`
  - Events: `row_select navigate intake_queue`
- `intake_alerts`: widget `widget_alert_banner` in region `alerts`
  - Intent: Show operational alerts and live review feedback.
  - Priority: `medium`
  - Slot role: `status_feedback`
  - Data: `alert from shape shape_alert_banner`
  - Events: `acknowledge action cap_acknowledge_alert`
### Design Review
- Status: unmapped
- Design proof commands:
  - `topogram query ui-design-coverage ./topo --surface proj_web --json`
  - `topogram query ui-design-coverage ./topo --surface proj_web --format markdown`
  - `topogram emit ui-realization-report ./topo --surface proj_web --json`
### Accessibility And I18n
- Accessibility: authored_contract
  - Obligations: `screen:intake_queue main`, `widget:widget_intake_grid grid`, `widget:widget_alert_banner status`
- I18n: authored_contract
  - Message keys: `intake.title`, `intake.grid.label`, `alerts.label`

## Depends On
- surfaces: `proj_web`
- capabilities: `cap_acknowledge_alert`, `cap_list_intake`
- shapes: `shape_alert_banner`, `shape_intake_filter`, `shape_intake_row`
- widgets: `widget_alert_banner`, `widget_command_toolbar`, `widget_filter_panel`, `widget_intake_grid`

## Verification Targets
- Rationale: Screen slices should prove UI contract, realization coverage, widget behavior, and generated/maintained app checks for the selected surface.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
