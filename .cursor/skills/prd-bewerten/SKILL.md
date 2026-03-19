---
name: prd-bewerten
description: Bewertet ein PRD auf Vollständigkeit, Klarheit, Machbarkeit und Testbarkeit und erzeugt ein strukturiertes Review-Artefakt mit konkreten Überarbeitungsanweisungen.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# PRD bewerten

## Zweck
Prüfe ein vorhandenes PRD systematisch und liefere eine klare Entscheidung: `approved` oder `needs_revision`.

## Eingaben
- Genau eine PRD-Markdown-Datei (`artifact_type: prd`)

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn Review, Findings und Revision Instructions vollständig dokumentiert sind.

## Arbeitsanweisung
1. Prüfe, ob alle Pflichtsektionen vorhanden sind.
2. Bewerte Qualität entlang der Scorecard.
3. Identifiziere Lücken, Widersprüche und untestbare Anforderungen.
4. Formuliere konkrete, umsetzbare Verbesserungsschritte.
5. Erzeuge ein Review-Artefakt in der Pflichtstruktur.

## Sprachregeln für Kinder (Pflicht)
- Verwende kurze, klare Sätze.
- Nutze einfache Wörter aus dem Alltag.
- Vermeide Fachbegriffe, wenn es geht.
- Wenn ein Fachbegriff nötig ist, erkläre ihn sofort kindgerecht in einem Satz.
- Stelle Fragen einzeln und verständlich.
- Gib bei schwierigen Punkten ein kurzes Beispiel.
- Schreibe freundlich und motivierend.

## Bewertungsmaßstab
Score je Kriterium: 0-5
- Vollständigkeit
- Klarheit
- Machbarkeit
- Testbarkeit

## Entscheidungslogik
- `approved`: Kein kritischer Mangel und Gesamtbild umsetzbar.
- `needs_revision`: Mindestens ein kritischer Mangel oder gravierende Unklarheit.

## Ausgaberegeln (verbindlich)
- Sprache: Deutsch, klar und kindgerecht.
- Fachbegriffe vermeiden oder direkt einfach erklären.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: prd_review
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-prd-datei>
generated_by: prd-bewerten
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
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
- Ergebnis: approved|needs_revision
- Begründung: <kurz>

## Handoff
- Next skill: story-erstellen
- Expected input file: docs/workflow/02-prd-review.md
```

## Qualitätskriterien
- Kritik ist evidenzbasiert und konkret.
- Jede Beanstandung enthält eine klare Korrekturaktion.
- Kein rein allgemeines Feedback ohne Umsetzungshinweis.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
