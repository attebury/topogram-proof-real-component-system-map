import { ActionToolbar } from "./components.js";

export default {
  title: "Acme/ActionToolbar",
  component: ActionToolbar,
  parameters: {
    componentRef: "acme.actionToolbar",
    styleRef: "acme.toolbar.primary",
    designNote: "Primary and bulk actions for operations work."
  }
};

export const Default = {
  args: {},
  render: ActionToolbar
};
