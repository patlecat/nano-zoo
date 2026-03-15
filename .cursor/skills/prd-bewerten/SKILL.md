---
name: prd-bewerten
description: Bewertet ein PRD auf Vollständigkeit, Klarheit, Machbarkeit und Testbarkeit und erzeugt ein strukturiertes Review-Artefakt mit konkreten Überarbeitungsanweisungen.
---

# PRD bewerten

## Zweck
Prüfe ein vorhandenes PRD systematisch und liefere eine klare Entscheidung: `approved` oder `needs_revision`.

## Eingaben
- Genau eine PRD-Markdown-Datei (`artifact_type: prd`)

## Arbeitsanweisung
1. Prüfe, ob alle Pflichtsektionen vorhanden sind.
2. Bewerte Qualität entlang der Scorecard.
3. Identifiziere Lücken, Widersprüche und untestbare Anforderungen.
4. Formuliere konkrete, umsetzbare Verbesserungsschritte.
5. Erzeuge ein Review-Artefakt in der Pflichtstruktur.

## Bewertungsmaßstab
Score je Kriterium: 0-5
- Vollständigkeit
- Klarheit
- Machbarkeit
- Testbarkeit

## Entscheidungslogik
- `approved`: Kein kritischer Mangel und Gesamtbild umsetzbar.
- `needs_revision`: Mindestens ein kritischer Mangel oder gravierende Unklarheit.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: prd_review
version: 1
status: approved|needs_revision
source_inputs:
  - <pfad-zur-prd-datei>
generated_by: prd-bewerten
sprache: de
---

# PRD-Review: <PRD-Titel>

## Zusammenfassung
## Evaluation
### Scorecard
- Vollständigkeit: <0-5>
- Klarheit: <0-5>
- Machbarkeit: <0-5>
- Testbarkeit: <0-5>

### Findings
- [kritisch|hoch|mittel|niedrig] <Befund + Begründung>

## Revision Instructions
- <konkrete Änderung 1>
- <konkrete Änderung 2>

## Entscheidung
- Status: approved|needs_revision
- Begründung: <kurz>

## Handoff
- Next skill: story-erstellen
- Expected input file: docs/workflow/02-prd-review.md
```

## Qualitätskriterien
- Kritik ist evidenzbasiert und konkret.
- Jede Beanstandung enthält eine klare Korrekturaktion.
- Kein rein allgemeines Feedback ohne Umsetzungshinweis.
