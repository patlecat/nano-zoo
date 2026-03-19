---
name: ux-bewerten
description: Bewertet die UX-Qualität im aktuellen Projekt oder bezogen auf eine konkrete Story und erzeugt ein strukturiertes UX-Review mit Scorecard, Findings und klaren Verbesserungsschritten.
created_at: "2026-03-15 19:02:59 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# UX bewerten

## Zweck
Bewerte die User-Experience-Qualität entweder auf Projekt-/Feature-Ebene oder auf Story-Ebene und liefere umsetzbare Empfehlungen.

## Scope-Modus
- `project`: Bewertung der UX im aktuellen Projekt, Feature oder Screen-Set.
- `story`: Bewertung der UX einer konkreten Story inklusive Akzeptanzkriterien und User-Flows.

## Eingaben
- Pflicht:
  - Scope-Modus: `project` oder `story`
  - Bewertungsgegenstand (Projektkontext, Feature-Beschreibung oder Story-Datei)
  - Architektur-Referenz: `docs/Architecture-Guide.md`
- Optional:
  - Zielgruppe/Persona
  - relevante Screens/Flows
  - bekannte Einschränkungen (Tech, Zeit, Daten)

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Architektur-Referenz (Pflicht)
- Lies vor jeder UX-Bewertung zwingend `docs/Architecture-Guide.md`.
- Beruecksichtige technische Leitplanken aus dem Guide bei allen Empfehlungen.
- Schlage keine UX-Massnahmen vor, die den verbindlichen Architekturprinzipien widersprechen.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn Evaluation, Findings und Verbesserungsplan vollständig sind.

## Bewertungsachsen (Score 0-5)
- Nutzerklarheit: Versteht die Zielgruppe den nächsten Schritt?
- Aufgabenfluss: Ist der Flow effizient und ohne unnötige Reibung?
- Konsistenz: Sind Begriffe, Muster und Interaktionen einheitlich?
- Feedback und Systemstatus: Erhält der Nutzer rechtzeitig hilfreiches Feedback?
- Fehlerpraevention und Recovery: Werden Fehler vermieden und gut korrigierbar gemacht?
- Zugaenglichkeit: Ist die Erfahrung auch unter Accessibility-Aspekten robust?
- Story-Fitness (nur `story`): Ist die Story UX-seitig testbar und sinnvoll geschnitten?

## Arbeitsanweisung
1. Lies `docs/Architecture-Guide.md` als verbindliche Referenz.
2. Bestimme den Modus (`project` oder `story`) aus der Eingabe.
3. Leite den relevanten Haupt-Flow und zentrale Interaktionen ab.
4. Werte jeden Bewertungsbereich mit 0-5 und kurzer Begründung.
5. Identifiziere Findings mit Priorität (`kritisch|hoch|mittel|niedrig`).
6. Formuliere konkrete Verbesserungsmaßnahmen, priorisiert nach Wirkung und Aufwand.
7. Erzeuge das UX-Review-Artefakt gemäß Ausgabestruktur.

## Sprachregeln für Kinder (Pflicht)
- Verwende kurze, klare Sätze.
- Nutze einfache Wörter aus dem Alltag.
- Vermeide Fachbegriffe, wenn es geht.
- Wenn ein Fachbegriff nötig ist, erkläre ihn sofort kindgerecht in einem Satz.
- Stelle Fragen einzeln und verständlich.
- Gib bei schwierigen Punkten ein kurzes Beispiel.
- Schreibe freundlich und motivierend.

## Ausgaberegeln (verbindlich)
- Ausgabe als eine Markdown-Datei.
- Sprache: Deutsch, klar und kindgerecht.
- Fachbegriffe vermeiden oder direkt einfach erklären.
- Findings müssen konkret und nachvollziehbar sein.
- Jede kritische Feststellung benötigt mindestens eine umsetzbare Maßnahme.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: ux_review
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
scope_mode: project|story
source_inputs:
  - <projektkontext-oder-story-datei>
generated_by: ux-bewerten
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# UX-Review: <Titel>

## Zusammenfassung
- Modus: project|story
- Ergebnis: approved|needs_revision
- Gesamtbewertung (0-5): <wert>

## Evaluation
### Scorecard
- Nutzerklarheit: <0-5> - <kurze Begründung>
- Aufgabenfluss: <0-5> - <kurze Begründung>
- Konsistenz: <0-5> - <kurze Begründung>
- Feedback und Systemstatus: <0-5> - <kurze Begründung>
- Fehlerpraevention und Recovery: <0-5> - <kurze Begründung>
- Zugaenglichkeit: <0-5> - <kurze Begründung>
- Story-Fitness (nur story): <0-5> - <kurze Begründung>

### Findings
- [kritisch|hoch|mittel|niedrig] <Befund + UX-Auswirkung + Kontext>

## Verbesserungsplan
- <Maßnahme 1> (Impact: hoch|mittel|niedrig, Aufwand: hoch|mittel|niedrig)
- <Maßnahme 2> (Impact: hoch|mittel|niedrig, Aufwand: hoch|mittel|niedrig)

## Entscheidung
- Ergebnis: approved|needs_revision
- Begründung: <kurz>

## Handoff
- Next skill: story-erstellen|story-bewerten|workflow-orchestrator|<weiterer skill>
- Expected input file: docs/workflow/05-ux-review.md
```

## Qualitätskriterien
- Beurteilung ist an konkreten Nutzeraufgaben und Flows ausgerichtet.
- Empfehlungstexte sind umsetzbar, priorisiert und nicht generisch.
- Scorecard, Findings und Entscheidung sind konsistent.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
