# Context Slice: widget `widget_command_toolbar` — Command Toolbar

## Summary
- Type: context_slice
- Status: active
- Description: Primary and bulk action toolbar.

## Review Boundary
- Automation class: review_required
- Reasons: `widget_surface`

## Slice Manifest
- Detail level: compact
- Read order: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Proof sections: `verification_targets`
- `focus` (must_read) — Focus
  - The selected graph surface this packet is scoped to.
  - Items: 4
- `summary` (must_read) — Summary
  - The shortest human-readable description of the selected work or surface.
  - Items: 18
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
  - Items: 13
- `depends_on` (reference) — Depends On
  - IDs that define the semantic closure without embedding every full record.
  - Items: 6
- `related_summary` (reference) — Related Summary
  - Compact counts and IDs for related records omitted from compact detail.
  - Items: 2
- `verification_targets` (proof) — Verification Targets
  - Smallest verification set recommended for this change.
  - Items: 4

## Agent Guidance
- Mode: implementation
- Read first: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Read order: `focus`, `summary`, `agent_guidance`, `review_boundary`, `ownership_boundary`, `write_scope`, `ui_agent_packet`
- Next queries:
  - `topogram query slice ./topo --mode implementation --surface proj_web --widget widget_command_toolbar --detail compact --json`
  - `topogram query single-agent-plan ./topo --mode implementation --surface proj_web --widget widget_command_toolbar --json`
- Required commands:
  - `topogram query sdlc-proof-gaps ./topo --json`
  - `topogram check . --json`
  - `topogram sdlc check . --strict`
  - `topogram sdlc prep commit . --json`
- Completion command: topogram sdlc prep commit . --json
- Write scope summary: Edit the canonical Topogram source and project-owned files only; generated-owned outputs should be regenerated.

## UI Work Map
### Readiness
- Status: ready_with_review
- Ready to edit: true
- Human review needed:
  - Widget 'widget_command_toolbar' has no android design realization in 'design_acme_ops'.
  - Widget 'widget_command_toolbar' has no ios design realization in 'design_acme_ops'.
  - Realization 'command_toolbar_web' is 'contract_only'.
  - Behavior 'bulk_action' is 'contract_only'.
  - Widget 'widget_command_toolbar' has no authored accessibility obligation.
  - Widget 'widget_command_toolbar' has no authored accessibility obligation.
  - Widget 'widget_command_toolbar' has no authored message key.
  - Widget 'widget_command_toolbar' has no authored message key.
  - ... 4 more
- Change targets:
  - `widget:widget_command_toolbar`
    - Focused UI work-map node.
  - `widget_binding:intake_commands` widget `widget_command_toolbar`
    - Widget binding is the work leaf where data, action, region, and design obligations meet.
### Work Map Chain
### Design Review
- Status: review_required
- Gaps: missing_platforms: 2, missing_states: 4, missing_accessibility: 2, missing_i18n: 2, behavior_review_items: 1
- Review rows:
  - Widget 'widget_command_toolbar' has no android design realization in 'design_acme_ops'.
  - Widget 'widget_command_toolbar' has no ios design realization in 'design_acme_ops'.
  - Realization 'command_toolbar_web' is 'contract_only'.
  - Behavior 'bulk_action' is 'contract_only'.
  - Widget 'widget_command_toolbar' has no authored accessibility obligation.
  - Widget 'widget_command_toolbar' has no authored accessibility obligation.
  - ... 6 more
- Design proof commands:
  - `topogram query ui-design-coverage ./topo --surface proj_web --widget widget_command_toolbar --json`
  - `topogram query ui-design-coverage ./topo --surface proj_web --widget widget_command_toolbar --format markdown`
  - `topogram emit ui-realization-report ./topo --surface proj_web --json`
### Accessibility And I18n
- Accessibility: semantic_context_only
- I18n: semantic_context_only

## Depends On
- shapes: `shape_alert_banner`
- surfaces: `proj_semantic_ui`, `proj_web`

## Verification Targets
- Rationale: Widget changes affect every related surface, so verification should follow the widget contract closure.
- Generated checks: `compile-check`

## Write Scope
- Safe to edit: `topo/**`, `candidates/**`
- Generator owned: `artifacts/**`, `apps/**`
- Human owned review required: `examples/maintained/proof-app/**`
- Out of bounds: `.git/**`, `node_modules/**`
