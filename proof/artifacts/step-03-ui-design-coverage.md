# UI Design Coverage

Surfaces: 1
Design matrix rows: 13
Review rows: 29

## Design Matrix

| Widget | Platform | Viewport | Density | Component | Status | Style | Style Refs | States | Review |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| widget_alert_banner | android | any | unspecified | (missing) | missing_platform | status_visible | (none) | (none) | review_required |
| widget_alert_banner | ios | any | unspecified | (missing) | missing_platform | status_visible | (none) | (none) | review_required |
| widget_alert_banner | web | wide | comfortable | acme.alertBanner | rendered | status_visible | (none) | empty | review_required |
| widget_command_toolbar | android | any | unspecified | (missing) | missing_platform | compact, actionable | (none) | (none) | review_required |
| widget_command_toolbar | ios | any | unspecified | (missing) | missing_platform | compact, actionable | (none) | (none) | review_required |
| widget_command_toolbar | web | wide | compact | acme.actionToolbar | contract_only | compact, actionable | (none) | loading | review_required |
| widget_filter_panel | android | any | unspecified | (missing) | missing_platform | collapsible | (none) | (none) | review_required |
| widget_filter_panel | ios | any | unspecified | (missing) | missing_platform | collapsible | (none) | (none) | review_required |
| widget_filter_panel | web | wide | compact | acme.filterPanel | rendered | collapsible | (none) | empty | review_required |
| widget_intake_grid | android | any | comfortable | acme.android.IntakeCards | unsupported | scannable, structured | (none) | loading | review_required |
| widget_intake_grid | ios | any | comfortable | acme.mobile.IntakeList | implementation_owned | scannable, structured | (none) | loading | review_required |
| widget_intake_grid | web | narrow | comfortable | acme.cardList | contract_only | scannable, structured | (none) | loading, empty | review_required |
| widget_intake_grid | web | wide | compact | acme.dataGrid | rendered | scannable, structured | (none) | loading, empty, error | mapped |

## Review Work

| Code | Widget | Platform | Component | Message |
| --- | --- | --- | --- | --- |
| design_missing_platform | widget_alert_banner | android | (missing) | Widget 'widget_alert_banner' has no android design realization in 'design_acme_ops'. |
| design_missing_platform | widget_alert_banner | ios | (missing) | Widget 'widget_alert_banner' has no ios design realization in 'design_acme_ops'. |
| design_missing_state | widget_alert_banner | web | acme.alertBanner | Realization 'alert_banner_web' does not declare 'loading' state coverage. |
| design_missing_state | widget_alert_banner | web | acme.alertBanner | Realization 'alert_banner_web' does not declare 'error' state coverage. |
| design_missing_platform | widget_command_toolbar | android | (missing) | Widget 'widget_command_toolbar' has no android design realization in 'design_acme_ops'. |
| design_missing_platform | widget_command_toolbar | ios | (missing) | Widget 'widget_command_toolbar' has no ios design realization in 'design_acme_ops'. |
| component_mapping_status_review | widget_command_toolbar | web | acme.actionToolbar | Realization 'command_toolbar_web' is 'contract_only'. |
| design_behavior_review_required | widget_command_toolbar | web | acme.actionToolbar | Behavior 'bulk_action' is 'contract_only'. |
| design_missing_accessibility | widget_command_toolbar | web | acme.actionToolbar | Widget 'widget_command_toolbar' has no authored accessibility obligation. |
| design_missing_i18n | widget_command_toolbar | web | acme.actionToolbar | Widget 'widget_command_toolbar' has no authored message key. |
| design_missing_state | widget_command_toolbar | web | acme.actionToolbar | Realization 'command_toolbar_web' does not declare 'empty' state coverage. |
| design_missing_state | widget_command_toolbar | web | acme.actionToolbar | Realization 'command_toolbar_web' does not declare 'error' state coverage. |
| design_missing_platform | widget_filter_panel | android | (missing) | Widget 'widget_filter_panel' has no android design realization in 'design_acme_ops'. |
| design_missing_platform | widget_filter_panel | ios | (missing) | Widget 'widget_filter_panel' has no ios design realization in 'design_acme_ops'. |
| design_missing_accessibility | widget_filter_panel | web | acme.filterPanel | Widget 'widget_filter_panel' has no authored accessibility obligation. |
| design_missing_i18n | widget_filter_panel | web | acme.filterPanel | Widget 'widget_filter_panel' has no authored message key. |
| design_missing_state | widget_filter_panel | web | acme.filterPanel | Realization 'filter_panel_web' does not declare 'loading' state coverage. |
| design_missing_state | widget_filter_panel | web | acme.filterPanel | Realization 'filter_panel_web' does not declare 'error' state coverage. |
| component_mapping_status_review | widget_intake_grid | android | acme.android.IntakeCards | Realization 'intake_grid_android' is 'unsupported'. |
| design_behavior_review_required | widget_intake_grid | android | acme.android.IntakeCards | Behavior 'filtering' is 'unsupported'. |
| design_behavior_review_required | widget_intake_grid | android | acme.android.IntakeCards | Behavior 'sorting' is 'unsupported'. |
| design_missing_state | widget_intake_grid | android | acme.android.IntakeCards | Realization 'intake_grid_android' does not declare 'empty' state coverage. |
| design_missing_state | widget_intake_grid | android | acme.android.IntakeCards | Realization 'intake_grid_android' does not declare 'error' state coverage. |
| design_missing_state | widget_intake_grid | ios | acme.mobile.IntakeList | Realization 'intake_grid_ios' does not declare 'empty' state coverage. |
| design_missing_state | widget_intake_grid | ios | acme.mobile.IntakeList | Realization 'intake_grid_ios' does not declare 'error' state coverage. |
| component_mapping_status_review | widget_intake_grid | web | acme.cardList | Realization 'intake_grid_web_narrow' is 'contract_only'. |
| design_behavior_review_required | widget_intake_grid | web | acme.cardList | Behavior 'filtering' is 'contract_only'. |
| design_behavior_review_required | widget_intake_grid | web | acme.cardList | Behavior 'sorting' is 'contract_only'. |
| design_missing_state | widget_intake_grid | web | acme.cardList | Realization 'intake_grid_web_narrow' does not declare 'error' state coverage. |

## Next Commands

- `topogram query ui-design-coverage ./topo --surface proj_web --json`
- `topogram emit ui-realization-report ./topo --surface proj_web --json`
- `topogram widget check ./topo --json`
