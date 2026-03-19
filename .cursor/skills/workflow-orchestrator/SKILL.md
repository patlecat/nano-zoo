---
name: workflow-orchestrator
description: Steuert einen dokumentenbasierten Produkt-Workflow (PRD erstellen/bewerten, Story erstellen/bewerten), prüft Eingaben gegen ein einheitliches Artefakt-Schema und entscheidet den nächsten sinnvollen Schritt.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# Workflow Orchestrator

## Zweck
Koordiniert den nächsten Schritt im Workflow anhand eines Eingabe-Artefakts (`artifact_type`, Prozessstatus im Feld `Status`) und erzeugt ein standardisiertes Übergabe-Dokument für den nächsten Skill.

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
  - `Status`
  - `source_inputs`
  - `generated_by`
  - `sprache`
- Optional: Nutzerziel (z. B. "nächster Schritt", "erneut prüfen", "überarbeiten")

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Prozessstatus-Regeln (verbindlich)
- Der `workflow-orchestrator` hat **keinen eigenen Bearbeitungsstatus**.
- Er liest ausschließlich den Prozessstatus des Eingabe-Artefakts (Feld `Status`) und gibt ihn im Handoff als Snapshot wieder.
- Zulässige Prozessstatus-Werte im Eingabe-Artefakt: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Der Orchestrator schreibt keinen Prozessfortschritt fort und setzt keinen neuen Status.

## Validierung (Pflicht)
Vor Routing prüfen:
- Datei ist Markdown.
- YAML-Frontmatter vorhanden.
- `artifact_type` ist einer von: `prd`, `prd_review`, `story`, `story_review`
- `Status` ist einer von: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`
- `sprache` ist `de`

Wenn Validierung fehlschlägt:
- übernimm keinen eigenen Status; dokumentiere den Prozessstatus als `n/a` im Handoff, falls nicht valide
- liste konkrete Korrekturen in `## Revision Instructions`
- route auf den Skill, der das Artefakt reparieren kann (meist Erstellungs-Skill)

## Routing-Regeln (Pflicht)
1. **Kein Artefakt vorhanden**
   - Next skill: `prd-erstellen`
   - Grund: Workflow startet mit PRD.

2. **artifact_type=prd**
   - Next skill: `prd-bewerten`
   - Grund: PRD muss vor Story-Schnitt bewertet werden.

3. **artifact_type=prd_review & Ergebnis=approved**
   - Next skill: `story-erstellen`
   - Grund: Freigegebenes PRD kann in Stories überführt werden.

4. **artifact_type=prd_review & Ergebnis=needs_revision**
   - Next skill: `prd-erstellen`
   - Grund: PRD muss gemäß Review korrigiert werden.

5. **artifact_type=story**
   - Next skill: `story-bewerten`
   - Grund: Stories vor Umsetzung prüfen.

6. **artifact_type=story_review & Ergebnis=approved**
   - Next skill: `story-erstellen` oder nachgelagerter Implementierungs-Skill
   - Standard: `story-erstellen` nur falls explizit neue Stories abgeleitet werden sollen.
   - Sonst: Workflow-Ende mit `approved`.

7. **artifact_type=story_review & Ergebnis=needs_revision**
   - Next skill: `story-erstellen`
   - Grund: Stories müssen überarbeitet werden.

## Sprachregeln für Kinder (Pflicht)
- Verwende kurze, klare Sätze.
- Nutze einfache Wörter aus dem Alltag.
- Vermeide Fachbegriffe, wenn es geht.
- Wenn ein Fachbegriff nötig ist, erkläre ihn sofort kindgerecht in einem Satz.
- Stelle Fragen einzeln und verständlich.
- Gib bei schwierigen Punkten ein kurzes Beispiel.
- Schreibe freundlich und motivierend.

## Ausgaberegeln (verbindlich)
- Ausgabe immer als eine Markdown-Datei.
- Sprache: Deutsch, klar und kindgerecht.
- Fachbegriffe vermeiden oder direkt einfach erklären.
- Muss einen klaren `Next skill` enthalten.
- Muss konkrete Eingabe-/Ausgabepfade nennen.
- Muss umsetzbare nächste Aktion enthalten (kein vages Feedback).

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: workflow_handoff
version: 1
process_status_snapshot: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt|n/a
source_inputs:
  - <pfad-zum-eingabeartefakt-oder-beschreibung>
generated_by: workflow-orchestrator
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# Workflow-Handoff

## Eingangsprüfung
- Ergebnis: gültig|ungültig
- Hinweise:
  - <hinweis 1>
  - <hinweis 2>

## Routing-Entscheidung
- Current artifact_type: <...>
- Current process status: <Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt|n/a>
- Ergebnis (falls Review): <approved|needs_revision|ok|zu_gross|n/a>
- Next skill: <prd-erstellen|prd-bewerten|story-erstellen|story-bewerten>
- Begründung: <kurz und konkret>

## Nächste Aktion
- Erzeuge/prüfe Datei: <zielpfad>
- Verwende Eingabe: <quellpfad>

## Revision Instructions
- <nur ausfüllen, wenn Ergebnis=needs_revision oder zu_gross>

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
- Prozessstatus des Eingabe-Artefakts wird korrekt gespiegelt, nicht durch den Orchestrator fortgeschrieben.
- Handoff ist direkt von einem Folgeschritt nutzbar.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
