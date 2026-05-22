# Step 05: Adopt Reviewed Component Map

> Promote a reviewed Storybook mapping into the canonical component_map source.

This checkpoint records the reviewed adoption write receipt and then applies the accepted ActionToolbar narrow-viewport mapping to the canonical component_map in this proof workspace. The extracted workspace stays review evidence; the canonical Topogram source is the component map under topo/component-maps.

What to inspect:

- proof/artifacts/step-05-adopt-write.json: reviewed adoption write receipt and guardrail context.
- topo/component-maps/component-map-acme-ops-widgets.tg: canonical mapping with command_toolbar_web_narrow.
- proof/artifacts/step-05-ui-design-coverage.md: matrix after the mapping is accepted.
- proof/artifacts/step-05-widget-slice.json: agent packet for the adopted widget mapping.

Proof:

- topogram check validates the canonical component map.
- ui-design-coverage, ui-realization-report, work-map, and widget slice all show the adopted ActionToolbar component ref.
- The proof records that Storybook extraction proposes evidence and the project-owned component_map remains the source of truth.
