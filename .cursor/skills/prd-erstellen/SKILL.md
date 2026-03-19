---
name: prd-erstellen
description: Erstellt ein Product Requirements Document (PRD) aus einer Problemstellung, Vision oder Feature-Idee. Verwenden, wenn ein PRD angelegt, strukturiert oder initial ausformuliert werden soll.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-19 18:11:27 +01:00"
---

# PRD erstellen

## Zweck
Erzeuge ein vollständiges PRD als Markdown-Artefakt, das von nachgelagerten Workflow-Schritten (Review, Story-Erstellung) direkt weiterverwendet werden kann.

## Eingaben
- Kurze oder detaillierte Feature-/Produktbeschreibung
- Optional: Zielgruppe, Business-Ziele, technische Randbedingungen, Zeitrahmen

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn alle inhaltlichen Anforderungen vollständig erfüllt sind.

## Arbeitsanweisung
1. Erfasse das Problem und den gewünschten Nutzen.
2. Definiere klare Ziele und Nicht-Ziele.
3. Formuliere funktionale und nicht-funktionale Anforderungen.
4. Prüfe auf Widersprüche:
   - Vergleiche neue Anforderungen mit bekannten früheren Anforderungen, Ideen und Entscheidungen.
   - Markiere Zielkonflikte, Scope-Konflikte und technische Konflikte.
   - Weise den Nutzer aktiv auf jeden erkannten Widerspruch hin.
5. Ergänze Annahmen, Risiken und offene Fragen.
6. Erzeuge ein valides PRD mit der Ausgabestruktur unten.

## Widerspruchscheck und Nutzerhinweis (Pflicht)
- Bei erkannten Widersprüchen muss ein klarer Hinweis an den Nutzer erfolgen.
- Jeder Hinweis enthält:
  - betroffene Anforderung(en),
  - kurze Konfliktbeschreibung,
  - mindestens eine konkrete Klärungsfrage oder Auflösungsoption.
- Wenn kein Widerspruch erkennbar ist, dokumentiere explizit: "Aktuell keine Widersprüche erkannt."

## Sprachregeln für Kinder (Pflicht)
- Verwende kurze, klare Sätze.
- Nutze einfache Wörter aus dem Alltag.
- Vermeide Fachbegriffe, wenn es geht.
- Wenn ein Fachbegriff nötig ist, erkläre ihn sofort kindgerecht in einem Satz.
- Stelle Fragen einzeln und verständlich.
- Gib bei schwierigen Punkten ein kurzes Beispiel.
- Schreibe freundlich und motivierend.

## Ausgaberegeln (verbindlich)
- Ausgabe muss eine einzelne Markdown-Datei sein.
- Muss YAML-Frontmatter enthalten.
- Muss alle Pflichtsektionen enthalten.
- Sprache: Deutsch, präzise, konkret und kindgerecht.
- Fachbegriffe vermeiden oder direkt einfach erklären.
- Keine Platzhalter wie "TODO" ohne Kontext.

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: prd
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <quelle-oder-kurzbeschreibung>
generated_by: prd-erstellen
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
## Anforderungen
### Funktionale Anforderungen
### Nicht-funktionale Anforderungen
## Nutzergruppen
## Erfolgsmetriken
## Risiken
## Offene Fragen
## Widersprüche und Hinweise
- Status: Konflikte erkannt|keine Konflikte erkannt
- Hinweise an den Nutzer:
  - <hinweis 1 oder "Aktuell keine Widersprüche erkannt.">
## Handoff
- Next skill: prd-bewerten
- Expected input file: docs/workflow/01-prd.md
```

## Qualitätskriterien
- Anforderungen sind testbar formuliert.
- Ziele sind messbar.
- Umfang ist klar abgegrenzt.
- Risiken sind realistisch und relevant.
- Widersprüche sind nachvollziehbar geprüft und bei Bedarf klar an den Nutzer kommuniziert.
- Sprache ist für Kinder gut verständlich; Fachbegriffe sind vermieden oder erklärt.
