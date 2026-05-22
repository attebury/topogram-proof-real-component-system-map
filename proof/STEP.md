# Step 03: Manual Component Map

> Add the first reviewed component map by hand so designers can read the matrix before Storybook extraction is introduced.

This checkpoint adds a widget-first component_map for the Acme operations component system. It maps semantic widgets to stable component refs, style refs, platform coverage, state coverage, and behavior support.

What to inspect:

- topo/component-maps/component-map-acme-ops-widgets.tg: canonical widget mappings.
- proof/artifacts/step-03-ui-design-coverage.md: designer-readable matrix.
- proof/artifacts/step-03-ui-realization-report.json: deeper realization proof.
- proof/artifacts/step-03-work-map.md: readable work-map summary.

Proof:

- topogram check validates design_language and component_map references.
- ui-design-coverage shows rendered, contract-only, implementation-owned, unsupported, missing-platform, and missing-state review rows.
- work-map shows component refs next to screen, layout, region, and widget binding context.
