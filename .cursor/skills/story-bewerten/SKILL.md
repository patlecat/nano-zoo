---
name: story-bewerten
description: Bewertet User Stories auf Umsetzbarkeit, Klarheit, Testbarkeit, Scope-Schnitt und Abhängigkeiten und erzeugt ein strukturiertes Review-Artefakt.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# Story bewerten

## Zweck
Validiere, ob Stories umsetzbar, testbar und sinnvoll geschnitten sind, bevor Planung/Implementierung startet.

## Eingaben
- Story-Datei (`artifact_type: story`)
- Architektur-Referenz: `docs/Architecture-Guide.md`

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Architektur-Referenz (Pflicht)
- Lies vor jeder Bewertung zwingend `docs/Architecture-Guide.md`.
- Beurteile Umsetzbarkeit, Scope-Schnitt und Risiken explizit gegen die dort definierten Architekturprinzipien.
- Bei Widerspruechen zwischen Story und Architektur-Guide: als Finding markieren und `needs_revision` begruenden.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn Review, Findings und Revision Instructions vollständig dokumentiert sind.

## Arbeitsanweisung
1. Lies `docs/Architecture-Guide.md` als verbindliche Referenz.
2. Prüfe jede Story auf Verständlichkeit und Nutzenbezug.
3. Prüfe Akzeptanzkriterien auf Testbarkeit und Eindeutigkeit.
4. Prüfe Scope-Schnitt (nicht zu groß, nicht zu vage) inkl. Architekturfits.
5. Prüfe Abhängigkeiten, Risiken und potenzielle Architekturkonflikte.
6. Erzeuge ein Story-Review-Artefakt mit klarer Entscheidung.

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
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-story-datei>
generated_by: story-bewerten
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
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
- Ergebnis: approved|needs_revision
- Begründung: <kurz>

## Handoff
- Next skill: prd-erstellen|story-erstellen|<weiterer skill>
- Expected input file: docs/workflow/04-story-review.md
```

## Qualitätskriterien
- Pro Finding mindestens eine konkrete Korrekturmaßnahme.
- Klare Freigabe-/Blocker-Entscheidung.
- Keine generischen Aussagen ohne Bezug zur Story.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
