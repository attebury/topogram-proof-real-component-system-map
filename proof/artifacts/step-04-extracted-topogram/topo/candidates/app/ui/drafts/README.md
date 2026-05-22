# Imported UI Surface Drafts

- Draft semantic UI surface: `candidates/app/ui/drafts/proj-ui-contract.tg`
- Draft web surface: `candidates/app/ui/drafts/proj-web-surface.tg`
- Draft region records: `candidates/app/ui/drafts/region-contracts.tg`
- Draft layout records: `candidates/app/ui/drafts/layout-contracts.tg`
- Draft widget candidates: 1
- Draft event payload shape candidates: 0
- Imported screens: 0
- Imported routes: 0
- Imported UI actions/presentations: 0
- Imported navigation patterns: none
- Imported presentations: none

## Review Notes

- These files are drafts, not adopted canonical surfaces.
- Capability ids come from imported hints and may need renaming or pruning.
- Widget candidates are suggested reusable contracts, not canonical ownership.
- Review widget props, events, behavior, regions, and patterns before adopting.
- Promote repeated `screen_regions` into `region` and `layout` records when the same work areas appear across screens.
- Layout drafts are semantic templates, not framework templates. Keep source paths and component imports out of canonical layout identity.
- Search and refresh directives are inferred heuristically.
- Navigation groups currently default to a single `workspace` group unless stronger grouping evidence exists.
