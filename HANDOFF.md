# HANDOFF.md

## Last updated
- **Date:** 2026-06-20
- **Agent:** Desktop (desktop-work branch)

---

## Desktop Agent — 2026-06-20

### What was done this session
- Created `desktop-work` and `laptop-work` branches from `main`, pushed both to origin
- Created `.claude/agents/content-researcher.md` sub-agent definition
- Created this HANDOFF.md

### What's next
- Add `frontend-stylist` agent definition to `.claude/agents/` (definition not yet provided)
- Begin implementing Green Jay species page (draft ready from content-researcher)
- Laptop agent should `git checkout laptop-work && git pull origin main` before starting

### Notes for the other agent
- This is a Next.js app — entry point is `app/`, not `index.html`
- `AGENTS.md` warns that this Next.js version may have breaking changes vs. training data — read `node_modules/next/dist/docs/` before writing code
- `desktop-work` is the desktop agent's branch; `laptop-work` is the laptop agent's branch
- No `setup-agents.ps1` exists on the desktop machine — branches were created manually

---

## Laptop Agent

### What was done this session
<!-- Summarize the work completed -->

### What's next
<!-- What the next agent should pick up -->

### Notes / watch out for
<!-- Anything the other agent should know: blockers, decisions made, files touched, etc. -->
