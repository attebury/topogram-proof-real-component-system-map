# Step 02: Semantic App Map

> Add the Topogram semantic app map before accepting any component mapping.

This checkpoint adds entities, shapes, capabilities, semantic UI, reusable layouts and regions, widgets, messages, accessibility obligations, and a design language. It intentionally does not add a complete component_map yet.

What to inspect:

- topo/surfaces/proj-semantic-ui.tg: screen and widget bindings.
- topo/ui-structure/layouts.tg: reusable layout slots.
- topo/ui-structure/regions.tg: reusable region obligations.
- topo/design-languages/design-acme-ops.tg: token and platform scope.
- proof/artifacts/step-02-ui-design-coverage.md: missing component mappings as review work.
- proof/artifacts/step-02-work-map.md: screen to layout to region to widget binding map.

Proof:

- topogram check validates the app map.
- ui-design-coverage and work-map artifacts show design review gaps before mapping components.
