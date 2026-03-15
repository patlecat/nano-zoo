---
name: story-testen-vitest
description: Testet implementierten Story-Code oder schreibt fehlende Tests fuer eine Story und verwendet dabei ausschliesslich Vitest.
created_at: "2026-03-15 19:11:57 +01:00"
modified_at: "2026-03-15 19:18:26 +01:00"
---

# Story testen mit Vitest

## Zweck
Pruefe, ob eine Story technisch korrekt umgesetzt ist, und erstelle bei Bedarf fehlende oder unzureichende Tests. Fuer alle Testaktivitaeten ist ausschliesslich Vitest zu verwenden.

## Eingaben
- Pflicht:
  - Story-Datei (`artifact_type: story`) oder eindeutig referenzierte Story
  - vorhandener Implementierungsstand im Projekt
- Optional:
  - Story-Implementierungsartefakt (`artifact_type: story_implementation`)
  - Story-Review (`artifact_type: story_review`)
  - bekannte Problemfaelle oder Regressionsbereiche

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent fuer Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn die Testabdeckung vollständig dokumentiert und die Testläufe ausgewertet sind.

## Tooling-Regeln (verbindlich)
- Verwende immer Vitest; keine alternativen Testframeworks.
- Projektstandard:
  - `npm run test` fuer einmaligen Lauf
  - `npm run test:watch` fuer iteratives Arbeiten
- Testdateien und Testnamen muessen die Story-Kriterien nachvollziehbar abbilden.

## Arbeitsanweisung
1. Lies Scope (`In/Out`) und Akzeptanzkriterien der Story.
2. Erstelle eine Test-Mapping-Liste:
   - Akzeptanzkriterium -> Testfall (bestehend oder neu)
3. Pruefe vorhandene Vitest-Tests auf Abdeckung und Qualitaet.
4. Schreibe/ergaenze fehlende Vitest-Tests fuer nicht abgedeckte Kriterien.
5. Fuehre Vitest aus und dokumentiere Ergebnisse.
6. Markiere nicht erfuellte Kriterien oder Blocker eindeutig.
7. Erzeuge ein Test-Artefakt gemaess Ausgabestruktur.

## Ausgaberegeln (verbindlich)
- Sprache: Deutsch.
- Ausgabe als eine Markdown-Datei.
- Jedes Akzeptanzkriterium muss einem konkreten Vitest-Testfall zugeordnet sein.
- Bei fehlschlagenden Tests oder Luecken darf `Status` nicht `Erledigt` sein.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story_test_review
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-story-datei>
  - <optional: pfad-zum-story-implementation-artefakt>
generated_by: story-testen-vitest
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# Story-Test-Review: <Story-Titel>

## Kontext
- Story-Referenz: <ID/Titel>
- Testmodus: bestehende Tests pruefen|neue Tests schreiben|beides

## Mapping Akzeptanzkriterien -> Vitest
- [ ] AK1: <kriterium>
  - Testdatei: <pfad>
  - Testfall: <describe/it name>
  - Status: abgedeckt|nicht_abgedeckt
- [ ] AK2: <kriterium>
  - Testdatei: <pfad>
  - Testfall: <describe/it name>
  - Status: abgedeckt|nicht_abgedeckt

## Durchgefuehrte Tests
- Befehl: `npm run test` | `npm run test:watch`
- Ergebnis: bestanden|teilweise|fehlgeschlagen
- Relevante Befunde: <kurz>

## Ergaenzte oder geaenderte Tests
- <datei 1>: <was wurde getestet/ergaenzt>
- <datei 2>: <was wurde getestet/ergaenzt>

## Offene Punkte und Blocker
- <punkt 1>
- <punkt 2>

## Entscheidung
- Ergebnis: approved|needs_revision
- Begruendung: <kurz>

## Handoff
- Next skill: story-implementieren|story-bewerten|workflow-orchestrator|<weiterer skill>
- Expected input file: docs/workflow/08-story-test-review.md
```

## Qualitaetskriterien
- Alle Akzeptanzkriterien sind testseitig nachvollziehbar zugeordnet.
- Tests sind deterministisch und fokussieren Story-Verhalten statt Implementierungsdetails.
- Teststatus und Restluecken sind transparent dokumentiert.
