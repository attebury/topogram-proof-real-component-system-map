import { Timeline } from "./components.js";

export default {
  title: "Acme/Timeline",
  component: Timeline,
  parameters: {
    componentRef: "acme.timeline",
    styleRef: "acme.timeline.dense",
    designNote: "Dense chronological activity timeline."
  }
};

export const Default = {
  args: {},
  render: Timeline
};
