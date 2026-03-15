---
name: story-bewerten
description: Bewertet User Stories auf Umsetzbarkeit, Klarheit, Testbarkeit, Scope-Schnitt und Abhängigkeiten und erzeugt ein strukturiertes Review-Artefakt.
---

# Story bewerten

## Zweck
Validiere, ob Stories umsetzbar, testbar und sinnvoll geschnitten sind, bevor Planung/Implementierung startet.

## Eingaben
- Story-Datei (`artifact_type: story`)

## Arbeitsanweisung
1. Prüfe jede Story auf Verständlichkeit und Nutzenbezug.
2. Prüfe Akzeptanzkriterien auf Testbarkeit und Eindeutigkeit.
3. Prüfe Scope-Schnitt (nicht zu groß, nicht zu vage).
4. Prüfe Abhängigkeiten und Risiken.
5. Erzeuge ein Story-Review-Artefakt mit klarer Entscheidung.

## Bewertungsmaßstab
Score je Kriterium: 0-5
- Klarheit
- Umsetzbarkeit
- Testbarkeit
- Scope-Schnitt
- Abhängigkeitsrisiko

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story_review
version: 1
status: approved|needs_revision
source_inputs:
  - <pfad-zur-story-datei>
generated_by: story-bewerten
sprache: de
---

# Story-Review: <Story-Paket-Titel>

## Zusammenfassung
## Evaluation
### Scorecard
- Klarheit: <0-5>
- Umsetzbarkeit: <0-5>
- Testbarkeit: <0-5>
- Scope-Schnitt: <0-5>
- Abhängigkeitsrisiko: <0-5>

### Findings
- [kritisch|hoch|mittel|niedrig] <Befund + Begründung>

## Revision Instructions
- <konkrete Änderung 1>
- <konkrete Änderung 2>

## Entscheidung
- Status: approved|needs_revision
- Begründung: <kurz>

## Handoff
- Next skill: prd-erstellen|story-erstellen|<weiterer skill>
- Expected input file: docs/workflow/04-story-review.md
```

## Qualitätskriterien
- Pro Finding mindestens eine konkrete Korrekturmaßnahme.
- Klare Freigabe-/Blocker-Entscheidung.
- Keine generischen Aussagen ohne Bezug zur Story.
