# Work Map

A readable map of where UI work belongs. This is a report, not a renderer.

## Overview

Surfaces: 1
Screens: 1
Layouts: 2
Regions: 6
Widgets: 4
Widget bindings: 4
Component maps: 0
Gaps: 4

Highest-priority gaps:
- review: design_coverage_widget_unmapped for `widget_alert_banner` - Widget 'widget_alert_banner' on 'proj_web' has no component mapping.
- review: design_coverage_widget_unmapped for `widget_command_toolbar` - Widget 'widget_command_toolbar' on 'proj_web' has no component mapping.
- review: design_coverage_widget_unmapped for `widget_filter_panel` - Widget 'widget_filter_panel' on 'proj_web' has no component mapping.
- review: design_coverage_widget_unmapped for `widget_intake_grid` - Widget 'widget_intake_grid' on 'proj_web' has no component mapping.

## Screens

| Screen | Surface | Route | Layout | Regions | Widget Bindings |
| --- | --- | --- | --- | --- | --- |
| `intake_queue` | `proj_web` | /intake | `layout_intake_workspace` (collection_workspace) | header/page_header, nav/global_navigation, content/primary_work_area, commands/command_area, filters/filter_area, results/primary_work_area, alerts/status_feedback | intake_filters: widget_filter_panel, intake_commands: widget_command_toolbar, intake_results_grid: widget_intake_grid, intake_alerts: widget_alert_banner |

## Layouts

| Layout | Pattern | Slots | Screens |
| --- | --- | --- | --- |
| `layout_intake_workspace` | collection_workspace | commands/command_area, filters/filter_area, results/primary_work_area, alerts/status_feedback | intake_queue |
| `layout_ops_shell` | app_shell | header/page_header, nav/global_navigation, content/primary_work_area | intake_queue |

## Regions

| Region | Pattern | Slot Roles | Style Intent | Widget Bindings |
| --- | --- | --- | --- | --- |
| `region_alerts` | empty_state_panel | status_feedback | status_visible | intake_alerts: widget_alert_banner |
| `region_app_header` | app_header | page_header | brand, persistent |  |
| `region_command_bar` | action_bar | command_area | actionable, compact | intake_commands: widget_command_toolbar |
| `region_filter_panel` | filter_panel | filter_area | collapsible | intake_filters: widget_filter_panel |
| `region_global_nav` | primary_navigation | global_navigation | persistent |  |
| `region_results` | data_grid_view | primary_work_area | scannable, structured | intake_results_grid: widget_intake_grid, intake_results_grid: widget_intake_grid |

## Widgets

| Widget | Patterns | Bindings | Component Refs | Style Intent |
| --- | --- | --- | --- | --- |
| `widget_alert_banner` | empty_state_panel | intake_alerts@intake_queue |  | status_visible |
| `widget_command_toolbar` | action_bar | intake_commands@intake_queue |  | actionable, compact |
| `widget_filter_panel` | filter_panel | intake_filters@intake_queue |  | collapsible |
| `widget_intake_grid` | data_grid_view | intake_results_grid@intake_queue |  | scannable, structured |

## Component Maps

| Component Map | Design Language | Platforms | Component Refs | Mappings |
| --- | --- | --- | --- | --- |

## Gaps

| Severity | Code | Widget | Platform | Message |
| --- | --- | --- | --- | --- |
| review | design_coverage_widget_unmapped | widget_alert_banner | web | Widget 'widget_alert_banner' on 'proj_web' has no component mapping. |
| review | design_coverage_widget_unmapped | widget_command_toolbar | web | Widget 'widget_command_toolbar' on 'proj_web' has no component mapping. |
| review | design_coverage_widget_unmapped | widget_filter_panel | web | Widget 'widget_filter_panel' on 'proj_web' has no component mapping. |
| review | design_coverage_widget_unmapped | widget_intake_grid | web | Widget 'widget_intake_grid' on 'proj_web' has no component mapping. |

## Next Commands

- `topogram query work-map ./topo --surface proj_web --format markdown`
- `topogram query work-map ./topo --surface proj_web --json`
- `topogram query slice ./topo --surface proj_web --detail compact --format markdown`
- `topogram query ui-design-coverage ./topo --surface proj_web --format markdown`
- `topogram emit ui-realization-report ./topo --surface proj_web --json`
- `topogram widget check ./topo --surface proj_web --json`
- `topogram emit work-map-report ./topo --surface proj_web --format markdown --write --out-dir ./artifacts`
