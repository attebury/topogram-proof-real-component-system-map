import { FilterPanel } from "./components.js";

export default {
  title: "Acme/FilterPanel",
  component: FilterPanel,
  parameters: {
    componentRef: "acme.filterPanel",
    styleRef: "acme.filters.compact",
    designNote: "Compact filters for queues and dashboards."
  }
};

export const Default = {
  args: {},
  render: FilterPanel
};
