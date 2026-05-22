# Work Map

A readable map of where UI work belongs. This is a report, not a renderer.

## Overview

Surfaces: 1
Screens: 1
Layouts: 2
Regions: 6
Widgets: 4
Widget bindings: 4
Component maps: 1
Gaps: 32

Highest-priority gaps:
- review: component_mapping_status_review for `widget_command_toolbar` - Realization 'command_toolbar_web' is 'contract_only'.
- review: component_mapping_status_review for `widget_intake_grid` - Realization 'intake_grid_android' is 'unsupported'.
- review: component_mapping_status_review for `widget_intake_grid` - Realization 'intake_grid_web_narrow' is 'contract_only'.
- review: design_behavior_review_required for `widget_command_toolbar` - Behavior 'bulk_action' is 'contract_only'.
- review: design_behavior_review_required for `widget_intake_grid` - Behavior 'filtering' is 'unsupported'.

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
| `widget_alert_banner` | empty_state_panel | intake_alerts@intake_queue | acme.alertBanner:rendered | status_visible |
| `widget_command_toolbar` | action_bar | intake_commands@intake_queue | acme.actionToolbar:contract_only | actionable, compact |
| `widget_filter_panel` | filter_panel | intake_filters@intake_queue | acme.filterPanel:rendered | collapsible |
| `widget_intake_grid` | data_grid_view | intake_results_grid@intake_queue | acme.android.IntakeCards:unsupported, acme.mobile.IntakeList:implementation_owned, acme.cardList:contract_only, acme.dataGrid:rendered | scannable, structured |

## Component Maps

| Component Map | Design Language | Platforms | Component Refs | Mappings |
| --- | --- | --- | --- | --- |
| `component_map_acme_ops_widgets` | `design_acme_ops` | android, ios, web | acme.actionToolbar, acme.alertBanner, acme.android.IntakeCards, acme.cardList, acme.dataGrid, acme.filterPanel, acme.mobile.IntakeList | widget_alert_banner/web/rendered, widget_command_toolbar/web/contract_only, widget_filter_panel/web/rendered, widget_intake_grid/android/unsupported, widget_intake_grid/ios/implementation_owned, widget_intake_grid/web/contract_only, widget_intake_grid/web/rendered |

## Gaps

| Severity | Code | Widget | Platform | Message |
| --- | --- | --- | --- | --- |
| review | component_mapping_status_review | widget_command_toolbar | web | Realization 'command_toolbar_web' is 'contract_only'. |
| review | component_mapping_status_review | widget_intake_grid | android | Realization 'intake_grid_android' is 'unsupported'. |
| review | component_mapping_status_review | widget_intake_grid | web | Realization 'intake_grid_web_narrow' is 'contract_only'. |
| review | design_behavior_review_required | widget_command_toolbar | web | Behavior 'bulk_action' is 'contract_only'. |
| review | design_behavior_review_required | widget_intake_grid | android | Behavior 'filtering' is 'unsupported'. |
| review | design_behavior_review_required | widget_intake_grid | android | Behavior 'sorting' is 'unsupported'. |
| review | design_behavior_review_required | widget_intake_grid | web | Behavior 'filtering' is 'contract_only'. |
| review | design_behavior_review_required | widget_intake_grid | web | Behavior 'sorting' is 'contract_only'. |
| review | design_coverage_behavior_review_required | widget_command_toolbar | web | Widget 'widget_command_toolbar' behavior 'bulk_action' is 'contract_only' for 'proj_web'. |
| review | design_coverage_behavior_review_required | widget_intake_grid | web | Widget 'widget_intake_grid' behavior 'sorting' is 'contract_only' for 'proj_web'. |
| review | design_coverage_behavior_review_required | widget_intake_grid | web | Widget 'widget_intake_grid' behavior 'filtering' is 'contract_only' for 'proj_web'. |
| review | design_missing_accessibility | widget_command_toolbar | web | Widget 'widget_command_toolbar' has no authored accessibility obligation. |
| review | design_missing_accessibility | widget_filter_panel | web | Widget 'widget_filter_panel' has no authored accessibility obligation. |
| review | design_missing_i18n | widget_command_toolbar | web | Widget 'widget_command_toolbar' has no authored message key. |
| review | design_missing_i18n | widget_filter_panel | web | Widget 'widget_filter_panel' has no authored message key. |
| review | design_missing_platform | widget_alert_banner | android | Widget 'widget_alert_banner' has no android design realization in 'design_acme_ops'. |
| review | design_missing_platform | widget_alert_banner | ios | Widget 'widget_alert_banner' has no ios design realization in 'design_acme_ops'. |
| review | design_missing_platform | widget_command_toolbar | android | Widget 'widget_command_toolbar' has no android design realization in 'design_acme_ops'. |
| review | design_missing_platform | widget_command_toolbar | ios | Widget 'widget_command_toolbar' has no ios design realization in 'design_acme_ops'. |
| review | design_missing_platform | widget_filter_panel | android | Widget 'widget_filter_panel' has no android design realization in 'design_acme_ops'. |
| review | design_missing_platform | widget_filter_panel | ios | Widget 'widget_filter_panel' has no ios design realization in 'design_acme_ops'. |
| review | design_missing_state | widget_alert_banner | web | Realization 'alert_banner_web' does not declare 'loading' state coverage. |
| review | design_missing_state | widget_alert_banner | web | Realization 'alert_banner_web' does not declare 'error' state coverage. |
| review | design_missing_state | widget_command_toolbar | web | Realization 'command_toolbar_web' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_command_toolbar | web | Realization 'command_toolbar_web' does not declare 'error' state coverage. |
| review | design_missing_state | widget_filter_panel | web | Realization 'filter_panel_web' does not declare 'loading' state coverage. |
| review | design_missing_state | widget_filter_panel | web | Realization 'filter_panel_web' does not declare 'error' state coverage. |
| review | design_missing_state | widget_intake_grid | android | Realization 'intake_grid_android' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_intake_grid | android | Realization 'intake_grid_android' does not declare 'error' state coverage. |
| review | design_missing_state | widget_intake_grid | ios | Realization 'intake_grid_ios' does not declare 'empty' state coverage. |
| review | design_missing_state | widget_intake_grid | ios | Realization 'intake_grid_ios' does not declare 'error' state coverage. |
| review | design_missing_state | widget_intake_grid | web | Realization 'intake_grid_web_narrow' does not declare 'error' state coverage. |

## Next Commands

- `topogram query work-map ./topo --surface proj_web --format markdown`
- `topogram query work-map ./topo --surface proj_web --json`
- `topogram query slice ./topo --surface proj_web --detail compact --format markdown`
- `topogram query ui-design-coverage ./topo --surface proj_web --format markdown`
- `topogram emit ui-realization-report ./topo --surface proj_web --json`
- `topogram widget check ./topo --surface proj_web --json`
- `topogram emit work-map-report ./topo --surface proj_web --format markdown --write --out-dir ./artifacts`
