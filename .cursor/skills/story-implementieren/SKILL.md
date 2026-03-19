---
name: story-implementieren
description: Implementiert eine konkrete Story im Projekt und haelt sich strikt an Scope, Akzeptanzkriterien und Vorgaben der Story. Verwenden, wenn die Umsetzung einer vorhandenen Story angefordert wird.
created_at: "2026-03-15 19:05:44 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# Story implementieren

## Zweck
Setze eine bestehende Story im Code um, ohne den vereinbarten Scope zu verlassen, und dokumentiere nachvollziehbar, wie jedes Akzeptanzkriterium erfuellt wurde.

## Eingaben
- Pflicht:
  - Story-Datei (`artifact_type: story`) oder klar referenzierte einzelne Story aus dem Story-Paket
  - aktueller Projektkontext/Codebasis
  - Testing-Guide-Referenz: `docs/React-Testing-Guide.md`
  - Architektur-Referenz: `docs/Architecture-Guide.md`
- Optional:
  - Story-Review (`artifact_type: story_review`)
  - UX-Review (`artifact_type: ux_review`)
  - technische Constraints (z. B. Bibliotheken, Architekturvorgaben)

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent fuer Datumsfelder im erzeugten Artefakt.

## Testing-Guide-Referenz (Pflicht)
- Lies immer zuerst `docs/React-Testing-Guide.md`, bevor du andere Referenzen liest.
- Nutze den Guide als Basis fuer Teststrategie, Testaufbau und Testqualitaet.
- Wenn eine Story-Anforderung dem Testing Guide widerspricht: Konflikt dokumentieren und als Blocker/`needs_revision` behandeln.

## Architektur-Referenz (Pflicht)
- Lies vor jeder Implementierung zwingend `docs/Architecture-Guide.md`.
- Richte alle technischen Entscheidungen an diesem Guide aus.
- Wenn Story-Anforderung und Architektur-Guide kollidieren: Konflikt explizit dokumentieren und als Blocker/`needs_revision` behandeln.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn alle Akzeptanzkriterien implementiert und verifiziert sind.

## Umsetzungsprinzipien (verbindlich)
- Implementiere nur, was im Story-Scope enthalten ist (`In`); respektiere explizit `Out`.
- Jedes Akzeptanzkriterium muss direkt im Code und/oder Tests nachweisbar abgedeckt sein.
- Keine stillen Annahmen: Unklare oder widerspruechliche Vorgaben als Blocker markieren.
- Keine Scope-Erweiterung ohne explizite Freigabe.
- Aendere nur die minimal noetigen Dateien fuer die Story.

## Arbeitsanweisung
1. Lies immer zuerst `docs/React-Testing-Guide.md` als verbindliche Referenz fuer Testing.
2. Lies danach `docs/Architecture-Guide.md` und leite verbindliche Architektur-Constraints fuer die Story ab.
3. Identifiziere Story-Ziel, Scope (`In/Out`) und Akzeptanzkriterien.
4. Erstelle vor der Implementierung eine Traceability-Checkliste:
   - Akzeptanzkriterium -> geplanter Codepunkt -> geplanter Test.
5. Implementiere die Story entlang der Checkliste in kleinen, nachvollziehbaren Schritten.
6. Ergaenze/aktualisiere Tests passend zu den Akzeptanzkriterien und zum Testing Guide.
7. Pruefe nach Umsetzung:
   - Alle Kriterien erfuellt?
   - Scope eingehalten?
   - Vorgaben aus `docs/React-Testing-Guide.md` eingehalten?
   - Architekturvorgaben aus `docs/Architecture-Guide.md` eingehalten?
   - Keine regressiven Seiteneffekte erkennbar?
8. Erzeuge ein Implementierungs-Artefakt gemaess Ausgabestruktur.

## Sprachregeln fuer Kinder (Pflicht)
- Verwende kurze, klare Saetze.
- Nutze einfache Woerter aus dem Alltag.
- Vermeide Fachbegriffe, wenn es geht.
- Wenn ein Fachbegriff noetig ist, erklaere ihn sofort kindgerecht in einem Satz.
- Stelle Fragen einzeln und verstaendlich.
- Gib bei schwierigen Punkten ein kurzes Beispiel.
- Schreibe freundlich und motivierend.

## Ausgaberegeln (verbindlich)
- Ausgabe als eine Markdown-Datei.
- Sprache: Deutsch, klar und kindgerecht.
- Fachbegriffe vermeiden oder direkt einfach erklaeren.
- Muss eine Kriterium-zu-Code-zu-Test-Nachverfolgbarkeit enthalten.
- Muss offene Punkte und Blocker klar benennen.
- Bei nicht vollstaendiger Erfuellung darf `Status` nicht `Erledigt` sein.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story_implementation
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-story-datei>
  - <optional: pfad-zum-story-review>
generated_by: story-implementieren
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# Story-Implementierung: <Story-Titel>

## Kontext
- Story-Referenz: <Story-ID oder Titel>
- Scope In: <...>
- Scope Out: <...>

## Umsetzung
- Geaenderte Bereiche/Module: <liste>
- Technische Entscheidungen: <kurz und konkret>

## Traceability (Akzeptanzkriterien)
- [ ] AK1: <kriterium>
  - Code: <datei/symbol>
  - Test: <testdatei/testfall>
  - Status: erfuellt|offen
- [ ] AK2: <kriterium>
  - Code: <datei/symbol>
  - Test: <testdatei/testfall>
  - Status: erfuellt|offen

## Verifikation
- Durchgefuehrte Checks/Tests: <liste>
- Ergebnis: bestanden|teilweise|fehlgeschlagen

## Offene Punkte und Blocker
- <punkt 1>
- <punkt 2>

## Entscheidung
- Ergebnis: approved|needs_revision
- Begruendung: <kurz>

## Handoff
- Next skill: story-bewerten|ux-bewerten|workflow-orchestrator|<weiterer skill>
- Expected input file: docs/workflow/06-story-implementation.md
```

## Qualitaetskriterien
- Jedes Akzeptanzkriterium ist mit konkreter Code- und Testreferenz abgedeckt.
- Keine Umsetzung ausserhalb des Story-Scopes.
- Blocker und Restarbeiten sind transparent dokumentiert.
- Sprache ist fuer Kinder gut verstaendlich; Fachbegriffe sind vermieden oder erklaert.
