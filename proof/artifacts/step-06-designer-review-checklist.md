# Designer Review Checklist

> Review the matrix first; use graph records only when a row needs source detail.

## Accepted

| Widget | Platform | Component Ref | Decision |
| --- | --- | --- | --- |
| widget_intake_grid | web wide | acme.dataGrid | Accepted as rendered for sorting, filtering, and selection. |
| widget_command_toolbar | web narrow | acme.actionToolbar | Accepted from explicit Storybook metadata. |
| widget_alert_banner | web wide | acme.alertBanner | Accepted as rendered for the web proof. |

## Deferred

| Widget | Platform | Reason | Next Work |
| --- | --- | --- | --- |
| widget_intake_grid | web narrow | Card fallback is contract-only for sorting/filtering. | Front-end lead should prove behavior or mark implementation-owned. |
| widget_command_toolbar | web wide | Bulk action is contract-only in the hand-authored mapping. | Agent can implement proof markers or adjust the mapping. |

## Unsupported Or Missing

| Widget | Platform | Gap | Owner |
| --- | --- | --- | --- |
| widget_intake_grid | Android | Unsupported sorting/filtering. | Designer plus Android lead. |
| widget_filter_panel | iOS/Android | No platform mapping yet. | Design-system maintainer. |
| widget_alert_banner | iOS/Android | No platform mapping yet. | Design-system maintainer. |

## Agent Handoff

Agents should start with proof/artifacts/step-06-screen-slice.md for screen context and proof/artifacts/step-06-widget-slice.md for the accepted ActionToolbar mapping. The graph remains a work map, not a render tree.
