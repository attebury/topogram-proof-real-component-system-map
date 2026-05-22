import { DataGrid } from "./components.js";

export default {
  title: "Acme/DataGrid",
  component: DataGrid,
  parameters: {
    componentRef: "acme.dataGrid",
    styleRef: "acme.grid.compact",
    designNote: "Operations data grid with sorting and selection."
  }
};

export const Default = {
  args: {},
  render: DataGrid
};
