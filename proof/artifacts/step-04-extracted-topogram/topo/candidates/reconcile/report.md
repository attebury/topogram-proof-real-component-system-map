# Reconcile Report

## Promoted

- None

## Skipped

- None

## Adoption

- Plan: `candidates/reconcile/adoption-plan.json`
- Selector: `none`
- Write mode: no
- Approved items: 0
- Applied items: 0
- Skipped items: 0
- Blocked items: 1
- Canonical files: 0
- Refreshed canonical files: 0
- Approved review groups: 0
- Surface-dependent items: 0
- Surface review groups: 0
- UI review groups: 1
- Workflow review groups: 0

## Next Best Action

- Bundle: `widget-command-toolbar`
- Action: Review this bundle next
- Why now: Component mapping candidate command_toolbar_web_action_toolbar references missing design_language design_acme_ops. Author or adopt the design language before adopting the realization set.
- Selector: `bundle-review:widget-command-toolbar`
- Safe to adopt now: 0 approved item(s)
- Unlock review group: `ui_review:missing_design_language:design_acme_ops`
- Unlock selector: `ui-review:missing_design_language:design_acme_ops`

## Approved Review Groups

- None

## Surface Review Groups

- None

## UI Review Groups

- `undefined` (undefined) <- `component_map_acme_ops_widgets`

## Workflow Review Groups

- None

## Bundle Blockers

- `widget-command-toolbar`: blocked=1, approved=0, applied=0, pending=1, dependencies=`ui_review:missing_design_language:design_acme_ops`

## Bundle Priorities

- `widget-command-toolbar`: action=`bundle-review:widget-command-toolbar`, why=Component mapping candidate command_toolbar_web_action_toolbar references missing design_language design_acme_ops. Author or adopt the design language before adopting the realization set., safe-now=0

## Suppressed Noise Bundles

- None

## Surface Dependencies

- None

## Blocked Adoption Items

- `component_map_acme_ops_widgets`

## Candidate Model Bundles

- `widget-command-toolbar` (0 actors, 0 roles, 0 entities, 0 enums, 0 capabilities, 0 shapes, 1 widgets, 1 component mappings, 0 CLI surfaces, 0 screens, 0 UI flows, 0 workflows, 0 docs)
  - primary concept `entity_widget-command-toolbar`
  - participants _none_
  - main capabilities _none_
  - main widgets `widget_command_toolbar`
  - main routes _none_
  - candidate maintained seam mappings _none_
  - permission hints _none_
  - auth claims _none_
  - ownership hints _none_
  - auth role guidance _none_
  - auth closure no auth hints (adopted=0, deferred=0, unresolved=0)
    - why This bundle exists because UI widget evidence converges on the same widget command toolbar concept.

## Candidate Model Files

- `candidates/reconcile/model/bundles/widget-command-toolbar/README.md`
- `candidates/reconcile/model/bundles/widget-command-toolbar/component-mappings/component_map_acme_ops_widgets.tg`
- `candidates/reconcile/model/bundles/widget-command-toolbar/widgets/widget_command_toolbar.tg`

## Canonical Outputs

- None
