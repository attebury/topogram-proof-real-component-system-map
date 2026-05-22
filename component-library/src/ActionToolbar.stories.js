import { ActionToolbar } from "./components.js";

export default {
  title: "Acme/ActionToolbar",
  component: ActionToolbar,
  parameters: {
    componentRef: "acme.actionToolbar",
    styleRef: "acme.toolbar.primary",
    designNote: "Primary and bulk actions for operations work.",
    topogram: {
      widget: "widget_command_toolbar",
      designLanguage: "design_acme_ops",
      componentMap: "component_map_acme_ops_widgets",
      componentRef: "acme.actionToolbar",
      platform: "web",
      viewport: "narrow",
      pattern: "action_bar",
      status: "rendered",
      density: "compact",
      stateCoverage: ["loading"],
      roleContexts: ["operator"],
      themeContexts: ["light", "dark"],
      localeContexts: ["default_locale"],
      behaviorsRendered: ["bulk_action"]
    }
  }
};

export const Default = {
  args: {},
  render: ActionToolbar
};
