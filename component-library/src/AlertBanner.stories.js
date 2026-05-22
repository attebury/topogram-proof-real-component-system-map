import { AlertBanner } from "./components.js";

export default {
  title: "Acme/AlertBanner",
  component: AlertBanner,
  parameters: {
    componentRef: "acme.alertBanner",
    styleRef: "acme.alert.critical",
    designNote: "Operational alert banner with status severity."
  }
};

export const Default = {
  args: {},
  render: AlertBanner
};
