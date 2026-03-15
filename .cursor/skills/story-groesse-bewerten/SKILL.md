---
name: story-groesse-bewerten
description: Bewertet, ob eine Story fuer die Implementierung zu gross ist, und schlaegt bei Bedarf eine Aufteilung in kleinere Unter-Stories in technischer Implementierungsreihenfolge vor.
created_at: "2026-03-15 19:08:59 +01:00"
modified_at: "2026-03-15 19:18:26 +01:00"
---

# Story Groesse bewerten

## Zweck
Pruefe, ob eine Story in einem sinnvollen Implementierungsumfang liegt. Wenn sie zu gross ist, erstelle einen konkreten Split-Plan in kleinere Unter-Stories mit technischer Reihenfolge und Abhaengigkeiten.

## Eingaben
- Pflicht:
  - Story-Datei (`artifact_type: story`) oder klar referenzierte Einzelstory
- Optional:
  - Story-Review (`artifact_type: story_review`)
  - technische Randbedingungen (Architektur, APIs, Datenmodell, Deployment-Prozess)
  - Team-Kontext (z. B. bevorzugte Story-Groesse)

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent fuer Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn Bewertung und ggf. Split-Plan vollständig ausgearbeitet sind.

## Bewertungslogik: Ist die Story zu gross?
Bewerte jede Dimension mit `niedrig|mittel|hoch`:
- Umfang: Anzahl fachlicher Teilprobleme und betroffener Komponenten
- Unklarheit: offene Fragen, fehlende Kriterien, unstabile Annahmen
- Technische Kopplung: Anzahl Abhaengigkeiten und Integrationspunkte
- Testaufwand: Menge und Vielfalt notwendiger Tests
- Lieferbarkeit: Risiko, dass die Story nicht als nutzbares Inkrement lieferbar ist

Eine Story gilt als `zu_gross`, wenn:
- mindestens zwei Dimensionen `hoch` sind, oder
- die Story nicht als klar testbares Inkrement abgeschlossen werden kann.

## Split-Regeln (verbindlich)
- Unter-Stories muessen jeweils ein eigenes, testbares Inkrement darstellen.
- Reihenfolge folgt technischer Abhaengigkeit, nicht nur fachlicher Prioritaet.
- Beruecksichtige explizit:
  - Datenmodell/Migrationen
  - API-/Contract-Aenderungen
  - Backend-Logik
  - Frontend-Integration
  - Fehlerbehandlung und Telemetrie
  - Tests (Unit, Integration, E2E falls relevant)
- Jede Unter-Story enthaelt klare `In/Out`-Grenzen.
- Keine Unter-Story darf versteckte Blocker auf vorherige, nicht geplante Arbeiten haben.

## Arbeitsanweisung
1. Identifiziere Ziel, Scope und Akzeptanzkriterien der Story.
2. Werte die Groesse entlang der Bewertungslogik.
3. Entscheide: `ok` oder `zu_gross`.
4. Falls `zu_gross`, schneide in Unter-Stories und ordne diese technisch sequenziert.
5. Begruende die Reihenfolge ueber Abhaengigkeiten.
6. Erzeuge das Ergebnis gemaess Ausgabestruktur.

## Ausgaberegeln (verbindlich)
- Sprache: Deutsch.
- Ausgabe als eine Markdown-Datei.
- Bei `zu_gross` ist ein vollstaendiger Split-Plan Pflicht.
- Jede Unter-Story benoetigt Akzeptanzkriterien und einen klaren technischen Zweck.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story_split_review
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-story-datei>
generated_by: story-groesse-bewerten
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# Story-Split-Review: <Story-Titel>

## Zusammenfassung
- Ergebnis: ok|zu_gross
- Kurzbegruendung: <1-3 Saetze>

## Groessenbewertung
- Umfang: niedrig|mittel|hoch - <begruendung>
- Unklarheit: niedrig|mittel|hoch - <begruendung>
- Technische Kopplung: niedrig|mittel|hoch - <begruendung>
- Testaufwand: niedrig|mittel|hoch - <begruendung>
- Lieferbarkeit: niedrig|mittel|hoch - <begruendung>

## Split-Plan (nur bei zu_gross)
### Technische Reihenfolge
1. Unter-Story A: <titel>
   - Zweck: <technischer/fachlicher Zweck>
   - Scope In: <...>
   - Scope Out: <...>
   - Abhaengigkeiten: <...>
   - Akzeptanzkriterien:
     - [ ] <kriterium 1>
     - [ ] <kriterium 2>
2. Unter-Story B: <titel>
   - Zweck: <...>
   - Scope In: <...>
   - Scope Out: <...>
   - Abhaengigkeiten: <...>
   - Akzeptanzkriterien:
     - [ ] <kriterium 1>
     - [ ] <kriterium 2>

## Risiken
- <risiko 1>
- <risiko 2>

## Handoff
- Next skill: story-erstellen|story-bewerten|story-implementieren|workflow-orchestrator
- Expected input file: docs/workflow/07-story-split-review.md
```

## Qualitaetskriterien
- Entscheidung ist aus den Bewertungsdimensionen nachvollziehbar.
- Split-Plan ist in technischer Reihenfolge und ohne Zirkelabhaengigkeiten.
- Jede Unter-Story ist fuer sich testbar und implementierbar.
