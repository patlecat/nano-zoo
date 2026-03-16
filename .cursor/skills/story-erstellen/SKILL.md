---
name: story-erstellen
description: Erstellt User Stories aus einem PRD (und optional PRD-Review) inkl. Akzeptanzkriterien, Abgrenzung und Umsetzungsnotizen als strukturiertes Markdown-Artefakt.
created_at: "2026-03-15 18:59:46 +01:00"
modified_at: "2026-03-15 19:18:26 +01:00"
---

# Story erstellen

## Zweck
Leite aus PRD-Inhalten umsetzbare User Stories ab, die ein Team direkt planen und implementieren kann. Ermögliche zusätzlich, jederzeit während der Entwicklungsphase neue Change-Request-Stories zu erstellen.

## Eingaben
- PRD-Datei (`artifact_type: prd`)
- Optional: PRD-Review (`artifact_type: prd_review`)
- Optional: bestehendes Story-Paket (`artifact_type: story`)
- Optional: Implementierungsnachweis(e) (`artifact_type: story_implementation`)
- Optional: Story-/Test-/UX-Reviews zur bisherigen Umsetzung (`artifact_type: story_review|story_test_review|ux_review`)
- Optional: Projektweite technische Vorgaben (z. B. `docs/`, `.cursor/rules/`, `README`, `CONTRIBUTING`)

## Startvorgabe (Pflicht)
1. Ermittle zu Beginn immer zuerst das aktuelle Datum und die aktuelle Uhrzeit.
2. Verwende diesen Zeitwert konsistent für Datumsfelder im erzeugten Artefakt.

## Status-Regeln (verbindlich)
- Verwende im erzeugten Dokument das Feld `Status`.
- Zulässige Werte: `Entwurf`, `In Bearbeitung`, `Bereit zur Abnahme`, `Erledigt`.
- Status müssen in genau dieser Reihenfolge durchlaufen werden; kein Überspringen.
- Setze `Erledigt` nur, wenn alle inhaltlichen Anforderungen vollständig erfüllt sind.

## Arbeitsanweisung
1. Bestimme den Modus:
   - **PRD-Modus**: initiale Story-Ableitung aus PRD.
   - **Change-Request-Modus**: neue Story aus Änderungsanforderung während laufender Entwicklung.
2. Im PRD-Modus: extrahiere Zielgruppe, Ziele und Anforderungen aus dem PRD und zerlege sie in sinnvoll geschnittene User Stories.
3. Im Change-Request-Modus: erfasse die Änderung als neue Story (kein stilles Umschreiben bestehender Stories).
4. Prüfe bei Change Requests den vorhandenen Stand (bereits implementierte Stories, Reviews, Tests) und identifiziere Konflikte/Widersprüche.
5. Prüfe technische Vorgaben des Projekts und verankere sie explizit in Scope, Abhängigkeiten und Akzeptanzkriterien.
6. Formuliere Akzeptanzkriterien testbar und eindeutig.
7. Nenne Abhängigkeiten, Risiken und offene Punkte je Story.
8. Erzeuge ein Story-Artefakt gemäß Pflichtstruktur.

## Spezielle Regeln für Change Requests (verbindlich)
- Ein Change Request darf jederzeit als **neue Story** erstellt werden, auch nachdem das initiale Story-Paket aus dem PRD erzeugt wurde.
- Bereits implementierte Inhalte dürfen nicht unbeabsichtigt invalidiert werden; dokumentiere notwendige Anpassungen explizit.
- Prüfe vor Erstellung mindestens:
  - betroffene bestehende Story-IDs/Titel,
  - bereits umgesetzte Komponenten/Module,
  - bestehende Akzeptanzkriterien und Tests.
- Wenn Konflikte erkannt werden, dokumentiere sie konkret und definiere eine konfliktfreie Umsetzungsreihenfolge.
- Berücksichtige immer projektweite technische Standards/Constraints; keine Story darf diesen widersprechen.

## Ausgaberegeln
- Sprache: Deutsch
- Jede Story hat:
  - Titel
  - Story-Typ (`PRD` oder `Change Request`)
  - User-Story-Satz ("Als ..., möchte ich ..., damit ...")
  - Akzeptanzkriterien
  - Scope/In-Out
  - Abhängigkeiten
  - Impact auf bestehende Implementierung (bei Change Request verpflichtend)
  - Technische Vorgaben/Constraints (aus Projektstandards)
  - Schätzhinweis (T-Shirt oder Story Points)

## Ausgabestruktur (Pflicht)

```markdown
---
artifact_type: story
version: 1
Status: Entwurf|In Bearbeitung|Bereit zur Abnahme|Erledigt
source_inputs:
  - <pfad-zur-prd-datei>
  - <optional: pfad-zum-prd-review>
generated_by: story-erstellen
sprache: de
created_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
modified_at: <YYYY-MM-DD HH:mm:ss ±HH:MM>
---

# Story-Paket: <Feature/PRD-Titel>

## Kontext
## Story-Übersicht
- Anzahl Stories: <n>
- Priorisierungslogik: <kurz>
- Modus: <PRD|Change Request>

## Stories

### Story 1: <Titel>
**Story-Typ**
- <PRD|Change Request>

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

**Impact auf bestehende Implementierung**
- Betroffene Storys/Implementierungen: <IDs/Titel/Module oder n/a>
- Konflikte/Widersprüche: <keine|konkret beschreiben>
- Migrations-/Anpassungsbedarf: <...>

**Technische Vorgaben/Constraints**
- Relevante Standards: <quelle und kurzbezug>
- Vorgaben für die Umsetzung: <...>

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
- Change-Request-Stories sind konfliktfrei mit bereits implementiertem Stand spezifiziert.
- Projektstandards/technische Vorgaben sind je Story explizit berücksichtigt.
