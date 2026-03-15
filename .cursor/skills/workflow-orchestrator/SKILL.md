---
name: workflow-orchestrator
description: Steuert einen dokumentenbasierten Produkt-Workflow (PRD erstellen/bewerten, Story erstellen/bewerten), prüft Eingaben gegen ein einheitliches Artefakt-Schema und entscheidet den nächsten sinnvollen Schritt.
---

# Workflow Orchestrator

## Zweck
Koordiniert den nächsten Schritt im Workflow anhand eines Eingabe-Artefakts (`artifact_type`, `status`) und erzeugt ein standardisiertes Übergabe-Dokument für den nächsten Skill.

## Geltungsbereich
Dieser Skill führt keine fachliche Erstellung/Bewertung selbst aus, sondern:
1. validiert Eingaben,
2. bestimmt den nächsten Skill,
3. erstellt ein Handoff-Artefakt.

## Unterstützte Skills
- `prd-erstellen`
- `prd-bewerten`
- `story-erstellen`
- `story-bewerten`

## Erwartete Eingaben
- Primär: Eine Markdown-Datei mit YAML-Frontmatter:
  - `artifact_type`
  - `version`
  - `status`
  - `source_inputs`
  - `generated_by`
  - `sprache`
- Optional: Nutzerziel (z. B. "nächster Schritt", "erneut prüfen", "überarbeiten")

## Validierung (Pflicht)
Vor Routing prüfen:
- Datei ist Markdown.
- YAML-Frontmatter vorhanden.
- `artifact_type` ist einer von: `prd`, `prd_review`, `story`, `story_review`
- `status` ist einer von: `draft`, `approved`, `needs_revision`
- `sprache` ist `de`

Wenn Validierung fehlschlägt:
- setze `status: needs_revision`
- liste konkrete Korrekturen in `## Revision Instructions`
- route auf den Skill, der das Artefakt reparieren kann (meist Erstellungs-Skill)

## Routing-Regeln (Pflicht)
1. **Kein Artefakt vorhanden**
   - Next skill: `prd-erstellen`
   - Grund: Workflow startet mit PRD.

2. **artifact_type=prd**
   - Next skill: `prd-bewerten`
   - Grund: PRD muss vor Story-Schnitt bewertet werden.

3. **artifact_type=prd_review & status=approved**
   - Next skill: `story-erstellen`
   - Grund: Freigegebenes PRD kann in Stories überführt werden.

4. **artifact_type=prd_review & status=needs_revision**
   - Next skill: `prd-erstellen`
   - Grund: PRD muss gemäß Review korrigiert werden.

5. **artifact_type=story**
   - Next skill: `story-bewerten`
   - Grund: Stories vor Umsetzung prüfen.

6. **artifact_type=story_review & status=approved**
   - Next skill: `story-erstellen` oder nachgelagerter Implementierungs-Skill
   - Standard: `story-erstellen` nur falls explizit neue Stories abgeleitet werden sollen.
   - Sonst: Workflow-Ende mit `approved`.

7. **artifact_type=story_review & status=needs_revision**
   - Next skill: `story-erstellen`
   - Grund: Stories müssen überarbeitet werden.

## Ausgaberegeln (verbindlich)
- Ausgabe immer als eine Markdown-Datei.
- Sprache: Deutsch.
- Muss einen klaren `Next skill` enthalten.
- Muss konkrete Eingabe-/Ausgabepfade nennen.
- Muss umsetzbare nächste Aktion enthalten (kein vages Feedback).

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: workflow_handoff
version: 1
status: draft|approved|needs_revision
source_inputs:
  - <pfad-zum-eingabeartefakt-oder-beschreibung>
generated_by: workflow-orchestrator
sprache: de
---

# Workflow-Handoff

## Eingangsprüfung
- Ergebnis: gültig|ungültig
- Hinweise:
  - <hinweis 1>
  - <hinweis 2>

## Routing-Entscheidung
- Current artifact_type: <...>
- Current status: <...>
- Next skill: <prd-erstellen|prd-bewerten|story-erstellen|story-bewerten>
- Begründung: <kurz und konkret>

## Nächste Aktion
- Erzeuge/prüfe Datei: <zielpfad>
- Verwende Eingabe: <quellpfad>

## Revision Instructions
- <nur ausfüllen, wenn needs_revision>

## Handoff
- Expected input file: <zielpfad>
- Owner step: <next skill>
```

## Standard-Dateipfade (Empfehlung)
- `docs/workflow/01-prd.md`
- `docs/workflow/02-prd-review.md`
- `docs/workflow/03-story.md`
- `docs/workflow/04-story-review.md`
- `docs/workflow/99-workflow-handoff.md`

## Qualitätskriterien
- Routing ist deterministisch und regelbasiert.
- Jeder `needs_revision`-Status enthält konkrete Korrekturschritte.
- Handoff ist direkt von einem Folgeschritt nutzbar.
