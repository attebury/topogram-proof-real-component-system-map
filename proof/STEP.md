# Step 04: Storybook Review Candidates

> Use Storybook metadata as evidence, not as canonical design truth.

This checkpoint adds explicit parameters.topogram metadata to the ActionToolbar story and runs the package-backed Storybook extractor. The extractor emits review-only component_mappings candidates into proof artifacts. Canonical component_map source is not changed in this step.

What to inspect:

- component-library/src/ActionToolbar.stories.js: explicit Storybook metadata.
- proof/artifacts/step-04-extract.json: extraction result and candidate counts.
- proof/artifacts/step-04-extracted-topogram/topo/candidates/app/ui/candidates.json: review-only component_mappings.
- proof/artifacts/step-04-adopt-dry-run.json: adoption preview without writes.

Proof:

- topogram extractor check validates the package contract.
- topogram extract records Storybook provenance and candidates.
- adopt component-mappings --dry-run previews the canonical write without applying it.
