# Skill-Dokumentation

Diese Dokumentation beschreibt den dokumentenbasierten Skill-Workflow im Projekt.
Alle Schritte erzeugen strukturierte Markdown-Artefakte, die direkt vom nächsten Schritt verwendet werden.

## Verfügbare Skills
- `workflow-start`
- `prd-erstellen`
- `prd-bewerten`
- `story-erstellen`
- `story-bewerten`
- `workflow-orchestrator`

## Empfohlene Dateipfade
- `docs/workflow/01-prd.md`
- `docs/workflow/02-prd-review.md`
- `docs/workflow/03-story.md`
- `docs/workflow/04-story-review.md`
- `docs/workflow/99-workflow-handoff.md`

## Kurze Prompt-Verwendung
1. Start:
   - `Nutze workflow-start. Erstelle aus dieser Idee ein PRD und speichere als docs/workflow/01-prd.md.`
2. PRD prüfen:
   - `Nutze prd-bewerten. Bewerte docs/workflow/01-prd.md und speichere als docs/workflow/02-prd-review.md.`
3. Stories erzeugen:
   - `Nutze story-erstellen. Verwende docs/workflow/01-prd.md und docs/workflow/02-prd-review.md und speichere als docs/workflow/03-story.md.`
4. Stories prüfen:
   - `Nutze story-bewerten. Bewerte docs/workflow/03-story.md und speichere als docs/workflow/04-story-review.md.`
5. Nächsten Schritt automatisch wählen:
   - `Nutze workflow-orchestrator mit <eingabedatei> und schreibe docs/workflow/99-workflow-handoff.md.`

## Ablauf auf einen Blick
| Schritt | Input | Skill | Output |
|---|---|---|---|
| 1 | Produktidee | `workflow-start` | `docs/workflow/01-prd.md` |
| 2 | `01-prd.md` | `prd-bewerten` | `docs/workflow/02-prd-review.md` |
| 3 | `01-prd.md`, `02-prd-review.md` | `story-erstellen` | `docs/workflow/03-story.md` |
| 4 | `03-story.md` | `story-bewerten` | `docs/workflow/04-story-review.md` |
| 5 | Beliebiges Artefakt | `workflow-orchestrator` | `docs/workflow/99-workflow-handoff.md` |
