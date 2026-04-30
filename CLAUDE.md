# AI Content Guardrails: Donation Language

This repository is transitioning to a 501(c)(3) nonprofit model. All user-facing monetary language must be framed as donations and family contributions.

## Required terminology
- donation
- family contribution
- in-kind donation
- volunteer contribution

## Avoid in user-facing copy
- tuition
- payment / payments
- fee / fees
- billing
- pricing / price
- refund

## Source of truth for donation requirements
- `src/config/donationPolicy.ts`

When updating contribution amounts, participation thresholds, or donation labels:
1. Update `src/config/donationPolicy.ts` first.
2. Update any dependent views/i18n content that render those values.
3. Run a keyword scan to ensure legacy monetary terms were not reintroduced.

## Legacy compatibility rule
- Legacy route/query aliases (for example, old links) may remain for compatibility.
- Legacy monetary terms must not appear in visible website copy unless explicitly required for legal/historical context.
