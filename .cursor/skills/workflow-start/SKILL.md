---
name: workflow-start
description: Startet den PRD-zu-Story-Workflow aus einer kurzen Produktidee, erzeugt die initiale PRD-Datei und gibt den nächsten Skill für den Folge-Schritt vor.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# Workflow Start

## Zweck
Erzeuge aus einer kurzen Idee ein initiales PRD-Dokument, damit der dokumentenbasierte Workflow ohne Vorarbeit gestartet werden kann.

## Unterstützte Folge-Skills
- `prd-bewerten`
- `workflow-orchestrator`

## Eingaben
- Pflicht: Kurze Produktidee oder Feature-Beschreibung
- Optional:
  - Grobziel des Projekts (falls nicht explizit in der Idee enthalten)
  - Bisherige Anforderungen, Entscheidungen oder Ideen (z. B. aus bestehenden Workflow-Dokumenten)
  - Zielgruppe
  - Business-Ziel
  - Technische Randbedingungen
  - Zeitrahmen

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn alle inhaltlichen Anforderungen vollständig erfüllt sind.

## Arbeitsanweisung
1. Kläre zuerst das Grobziel des Projekts in 1-2 Sätzen (nachfragen, wenn unklar).
2. Führe eine interaktive Ideenfindung durch:
   - schlage mehrere passende Ideen zum Grobziel vor (mindestens 3),
   - lass den Nutzer priorisieren, kombinieren oder neue Varianten ergänzen,
   - stelle pro Idee gezielte Rückfragen zum erwarteten Nutzen.
3. Hinterfrage den Nutzen jeder priorisierten Idee konkret:
   - Welches Nutzerproblem wird gelöst?
   - Welcher messbare Mehrwert entsteht?
   - Warum ist diese Idee wichtiger als Alternativen?
4. Prüfe den Funktions-Fit jeder Idee:
   - Wie passt sie in die bestehende oder geplante Kernfunktionalität?
   - Welche Abhängigkeiten, Schnittstellen oder Folgefunktionen entstehen?
5. Vertiefe und verfeinere priorisierte Ideen iterativ:
   - schärfe Scope, Randfälle, Akzeptanzindikatoren und Abgrenzung,
   - zerlege zu große Ideen in sinnvoll geschnittene Bausteine,
   - strukturiere Ergebnisse in nachvollziehbare, priorisierte Anforderungsblöcke.
6. Führe einen expliziten Widerspruchscheck gegen vorhandene Anforderungen/Ideen durch:
   - vergleiche mit bekannten Entscheidungen und Constraints,
   - markiere Konflikte, Inkonsistenzen und Annahmen transparent,
   - schlage pro Widerspruch eine konkrete Klärungs- oder Auflösungsoption vor.
7. Verdichte die Erkenntnisse zu einer klaren Problemstellung.
8. Formuliere Ziele und Nicht-Ziele, lege Scope und initiale Anforderungen fest.
9. Ergänze Risiken, offene Fragen und erzeuge das Startartefakt als PRD gemäß Ausgabestruktur.

## Sprachregeln für Kinder (Pflicht)
- Verwende kurze, einfache Sätze.
- Nutze bekannte Alltagswörter statt Fachbegriffe.
- Wenn ein Fachbegriff nötig ist, erkläre ihn direkt in einem kurzen Satz.
- Stelle immer nur eine Frage auf einmal.
- Gib bei schwierigen Themen ein einfaches Beispiel.
- Vermeide abstrakte Formulierungen ohne Bezug zum Projekt.
- Nutze eine freundliche, motivierende Sprache ohne komplizierte Theorie.

## Interaktive Leitfragen (Pflicht)
Verwende diese Leitfragen aktiv im Dialog, statt nur Inhalte zu sammeln:
- Ziel-Fit: "Wie hilft diese Idee beim Hauptziel?"
- Nutzen: "Woran merkt ihr, dass diese Idee wirklich hilft?"
- Funktionaler Fit: "Zu welcher Funktion passt die Idee?"
- Vertiefung: "Was ist die kleinste Version, die schon nützlich ist?"
- Konsistenz: "Passt die Idee zu früheren Wünschen, oder gibt es einen Widerspruch?"

## Konsistenz-Checkliste (Pflicht)
Vor PRD-Erstellung muss geprüft und dokumentiert werden:
- Abgleich mit bekannten Anforderungen, Nicht-Zielen und Constraints.
- Abgleich mit bereits diskutierten Ideen (Dubletten, Zielkonflikte, Scope-Überschneidungen).
- Kennzeichnung offener Annahmen und fehlender Informationen.
- Konkrete Klärungsfragen für nicht auflösbare Konflikte.

## Ausgaberegeln (verbindlich)
- Ausgabe als eine Markdown-Datei.
- YAML-Frontmatter ist Pflicht.
- Sprache: Deutsch.
- Schreibstil: kindgerecht, klar und einfach.
- Fachbegriffe vermeiden oder direkt erklären.
- Keine Platzhalter ohne Kontext.
- Zielpfad standardmäßig: `docs/workflow/01-prd.md`

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: prd
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <kurze-produktidee-oder-quelle>
generated_by: workflow-start
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# <PRD-Titel>

## Kontext
## Problemstellung
## Ziele
## Nicht-Ziele
## Umfang
## Ideenraum und Auswahlentscheidung
### Grobziel-Abgleich
### Kandidatenideen
### Nutzen- und Funktions-Fit
### Vertiefung und Verfeinerung
### Widerspruchs- und Konsistenzcheck
## Anforderungen
### Funktionale Anforderungen
### Nicht-funktionale Anforderungen
## Nutzergruppen
## Erfolgsmetriken
## Risiken
## Offene Fragen
## Handoff
- Next skill: prd-bewerten
- Expected input file: docs/workflow/01-prd.md
```

## Qualitätskriterien
- Einstieg ist auch mit sehr knapper Eingabe möglich.
- Ziel und Nutzen sind klar formuliert.
- Ideen sind nachvollziehbar priorisiert und mit Nutzenargumenten belegt.
- Funktionaler Fit und Abhängigkeiten sind pro priorisierter Idee transparent.
- Widersprüche zu früheren Anforderungen/Ideen sind geprüft und dokumentiert.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
- Der Output ist direkt durch `prd-bewerten` nutzbar.
