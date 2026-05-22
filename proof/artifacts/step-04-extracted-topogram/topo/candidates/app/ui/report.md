# UI Extract Report

- Screens: 0
- Routes: 0
- Actions: 0
- Flow candidates: 0
- Widgets: 1
- Event payload shapes: 0
- Component mapping candidates: 1
- Stacks: storybook

## Flow Candidates

- none

## Widget Candidates

- `widget_command_toolbar` confidence low pattern `action_bar` region `content` events 0 evidence 1 missing decisions 2

## Design Realization Candidates

- `command_toolbar_web_action_toolbar` widget `widget_command_toolbar` platform `web` component `acme.actionToolbar` status `rendered` missing decisions 0

## Layout And Region Review

- Review draft region contracts in `topo/candidates/app/ui/drafts/region-contracts.tg`.
- Review draft layout contracts in `topo/candidates/app/ui/drafts/layout-contracts.tg`.
- Promote repeated `screen_regions` into reusable semantic layouts only after confirming screen work areas.

## Next Validation

- Review flow candidates in `topo/candidates/app/ui/candidates.json` before adding shared UI contract behavior.
- Review component mapping candidates in `topo/candidates/app/ui/candidates.json` before adding component mappings.
- Review candidates under `topo/candidates/app/ui/drafts/widgets/**`.
- Run `topogram extract plan <path>` before adoption.
- After adoption, run `topogram check <path>`, `topogram widget check <path>`, and `topogram widget behavior <path>`.
