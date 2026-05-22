# Topogram Real Component System Map Proof

> A step-by-step proof that a real component system can become a Topogram component map designers and agents can review.

This repo demonstrates how a small React-style component system maps into Topogram's semantic UI model.

- component files and static CSF stories provide design-system evidence;
- semantic_ui records describe screens, layouts, regions, widgets, messages, and accessibility obligations;
- design_language records define platform and token scope;
- component_map records map semantic widgets to stable component refs;
- Storybook metadata can propose review-only component_mappings before explicit adoption.

Run the local proof command at every checkpoint: npm install, then npm run verify.

See proof/README.md for the step map.
