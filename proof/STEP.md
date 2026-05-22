# Step 01: Component System Baseline

> Establish the real component-system evidence before Topogram maps it.

This checkpoint contains a small React-style component system with stable component refs, style identities, token names, and static CSF stories. It intentionally has no topo/ directory yet.

What to inspect:

- component-library/src/components.js: component definitions and stable refs.
- component-library/src/tokens.js: token and style identities.
- component-library/src/*.stories.js: static Storybook-style evidence.

Proof:

- npm run build:components validates component refs and story metadata.
- npm test validates baseline component/stories shape.
- npm run verify confirms no Topogram workspace exists yet and the worktree remains clean.
