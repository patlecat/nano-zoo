---
name: prd-erstellen
description: Erstellt ein Product Requirements Document (PRD) aus einer Problemstellung, Vision oder Feature-Idee. Verwenden, wenn ein PRD angelegt, strukturiert oder initial ausformuliert werden soll.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-15 19:18:26 +01:00"
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
4. Ergänze Annahmen, Risiken und offene Fragen.
5. Erzeuge ein valides PRD mit der Ausgabestruktur unten.

## Ausgaberegeln (verbindlich)
- Ausgabe muss eine einzelne Markdown-Datei sein.
- Muss YAML-Frontmatter enthalten.
- Muss alle Pflichtsektionen enthalten.
- Sprache: Deutsch, präzise und konkret.
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
## Handoff
- Next skill: prd-bewerten
- Expected input file: docs/workflow/01-prd.md
```

## Qualitätskriterien
- Anforderungen sind testbar formuliert.
- Ziele sind messbar.
- Umfang ist klar abgegrenzt.
- Risiken sind realistisch und relevant.
