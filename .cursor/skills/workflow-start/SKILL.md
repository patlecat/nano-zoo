---
name: workflow-start
description: Startet den PRD-zu-Story-Workflow aus einer kurzen Produktidee, erzeugt die initiale PRD-Datei und gibt den nächsten Skill für den Folge-Schritt vor.
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
  - Zielgruppe
  - Business-Ziel
  - Technische Randbedingungen
  - Zeitrahmen

## Arbeitsanweisung
1. Verdichte die Eingabe zu einer klaren Problemstellung.
2. Formuliere Ziele und Nicht-Ziele.
3. Lege einen ersten Scope und initiale Anforderungen fest.
4. Ergänze Risiken und offene Fragen.
5. Erzeuge das Startartefakt als PRD gemäß Ausgabestruktur.

## Ausgaberegeln (verbindlich)
- Ausgabe als eine Markdown-Datei.
- YAML-Frontmatter ist Pflicht.
- Sprache: Deutsch.
- Keine Platzhalter ohne Kontext.
- Zielpfad standardmäßig: `docs/workflow/01-prd.md`

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: prd
version: 1
status: draft
source_inputs:
  - <kurze-produktidee-oder-quelle>
generated_by: workflow-start
sprache: de
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
- Einstieg ist auch mit sehr knapper Eingabe möglich.
- Ziel und Nutzen sind klar formuliert.
- Der Output ist direkt durch `prd-bewerten` nutzbar.
