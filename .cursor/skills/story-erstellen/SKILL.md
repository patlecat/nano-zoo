---
name: story-erstellen
description: Erstellt User Stories aus einem PRD (und optional PRD-Review) inkl. Akzeptanzkriterien, Abgrenzung und Umsetzungsnotizen als strukturiertes Markdown-Artefakt.
---

# Story erstellen

## Zweck
Leite aus PRD-Inhalten umsetzbare User Stories ab, die ein Team direkt planen und implementieren kann.

## Eingaben
- PRD-Datei (`artifact_type: prd`)
- Optional: PRD-Review (`artifact_type: prd_review`)

## Arbeitsanweisung
1. Extrahiere Zielgruppe, Ziele und Anforderungen aus dem PRD.
2. Zerlege Anforderungen in sinnvoll geschnittene User Stories.
3. Formuliere Akzeptanzkriterien testbar und eindeutig.
4. Nenne Abhängigkeiten, Risiken und offene Punkte je Story.
5. Erzeuge ein Story-Artefakt gemäß Pflichtstruktur.

## Ausgaberegeln
- Sprache: Deutsch
- Jede Story hat:
  - Titel
  - User-Story-Satz ("Als ..., möchte ich ..., damit ...")
  - Akzeptanzkriterien
  - Scope/In-Out
  - Abhängigkeiten
  - Schätzhinweis (T-Shirt oder Story Points)

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story
version: 1
status: draft
source_inputs:
  - <pfad-zur-prd-datei>
  - <optional: pfad-zum-prd-review>
generated_by: story-erstellen
sprache: de
---

# Story-Paket: <Feature/PRD-Titel>

## Kontext
## Story-Übersicht
- Anzahl Stories: <n>
- Priorisierungslogik: <kurz>

## Stories

### Story 1: <Titel>
**User Story**  
Als <Rolle> möchte ich <Funktion>, damit <Nutzen>.

**Akzeptanzkriterien**
- [ ] <kriterium 1>
- [ ] <kriterium 2>

**Scope**
- In: <...>
- Out: <...>

**Abhängigkeiten**
- <...>

**Schätzhinweis**
- <Story Points oder T-Shirt-Größe>

### Story 2: <Titel>
...

## Risiken und offene Fragen
## Handoff
- Next skill: story-bewerten
- Expected input file: docs/workflow/03-story.md
```

## Qualitätskriterien
- Stories sind vertikal geschnitten (nutzbare Inkremente).
- Akzeptanzkriterien sind überprüfbar.
- Scope ist klar abgegrenzt.
