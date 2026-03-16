# Skill-Dokumentation

Diese Dokumentation beschreibt den dokumentenbasierten Skill-Workflow im Projekt.
Ziel ist ein nachvollziehbarer Ablauf von Produktidee -> PRD -> Review -> Stories -> Review mit klaren Handoffs.
Ein kindgerechtes Glossar mit Erklaerungen zu wichtigen Fachbegriffen findest du in [docs/glossar.md](glossar.md).

## Grundprinzip
- Jeder Skill erzeugt ein Markdown-Artefakt mit Frontmatter (`artifact_type`, `Status`, `source_inputs`, `generated_by`, `sprache`).
- Das Output-Artefakt ist das Input-Artefakt des nächsten Schritts.
- Reviews entscheiden explizit zwischen `approved` und `needs_revision`.
- Sprache in allen Artefakten: Deutsch (`sprache: de`).

## Verbindliche Architektur-Referenz
- Der zentrale technische Leitfaden ist `docs/Architecture-Guide.md`.
- Die Skills `story-implementieren`, `story-bewerten`, `story-testen-vitest` und `ux-bewerten` muessen diesen Guide vor der eigentlichen Bearbeitung zuerst lesen.
- Entscheidungen, Findings, Tests und UX-Empfehlungen in diesen Skills muessen mit dem Architecture-Guide konsistent sein.
- Bei Konflikten zwischen Story-Vorgaben und Architecture-Guide: Konflikt explizit dokumentieren und als `needs_revision` bzw. Blocker behandeln.

## Verbindliches Status-Feld
- Jedes durch Skills erzeugte Dokument nutzt das Frontmatter-Feld `Status`.
- Zulässige Werte sind ausschließlich:
  - `Entwurf`
  - `In Bearbeitung`
  - `Bereit zur Abnahme`
  - `Erledigt`
- Die Reihenfolge ist verpflichtend; Status dürfen nicht übersprungen werden.
- `Erledigt` darf nur gesetzt werden, wenn der jeweilige Schritt vollständig abgeschlossen ist.

## Verfügbare Skills und ihr Zweck

### `workflow-start`
- Zweck: Startpunkt für neue Initiativen aus einer kurzen Idee.
- Typischer Input: 1-5 Sätze Produkt-/Feature-Idee.
- Hauptoutput: initiales PRD (`artifact_type: prd`).
- Standardpfad: `docs/workflow/01-prd.md`.
- Aufrufen wenn: noch kein strukturiertes PRD existiert.

### `prd-erstellen`
- Zweck: vollständiges PRD ausarbeiten oder überarbeiten.
- Typischer Input: Produktidee, optional Ziele, Zielgruppe, Constraints.
- Hauptoutput: PRD mit klaren Zielen, Scope, Anforderungen, Risiken, offenen Fragen.
- Standardpfad: `docs/workflow/01-prd.md`.
- Aufrufen wenn: PRD neu erstellt oder nach Review korrigiert werden soll.

### `prd-bewerten`
- Zweck: PRD anhand Scorecard prüfen (Vollständigkeit, Klarheit, Machbarkeit, Testbarkeit).
- Typischer Input: `docs/workflow/01-prd.md`.
- Hauptoutput: PRD-Review (`artifact_type: prd_review`) inkl. Findings und Revision Instructions.
- Standardpfad: `docs/workflow/02-prd-review.md`.
- Aufrufen wenn: vor Story-Erstellung eine Freigabeentscheidung gebraucht wird.

### `story-erstellen`
- Zweck: User Stories aus PRD (und optional PRD-Review) ableiten.
- Typischer Input: `01-prd.md`, optional `02-prd-review.md`.
- Hauptoutput: Story-Paket mit testbaren Akzeptanzkriterien.
- Standardpfad: `docs/workflow/03-story.md`.
- Aufrufen wenn: PRD freigegeben ist oder Story-Überarbeitung nötig ist.

### `story-bewerten`
- Zweck: Stories auf Klarheit, Umsetzbarkeit, Testbarkeit, Scope und Abhängigkeiten prüfen.
- Typischer Input: `docs/workflow/03-story.md`.
- Hauptoutput: Story-Review (`artifact_type: story_review`) mit klarer Entscheidung.
- Standardpfad: `docs/workflow/04-story-review.md`.
- Aufrufen wenn: vor Umsetzung Qualität und Schnitt der Stories abgesichert werden soll.
- Pflicht-Referenz: `docs/Architecture-Guide.md` zuerst lesen.

### `story-groesse-bewerten`
- Zweck: Prüfen, ob eine Story für die Umsetzung zu groß ist und bei Bedarf in kleinere Unter-Stories aufteilen.
- Typischer Input: Story-Datei oder Einzelstory aus `docs/workflow/03-story.md`.
- Hauptoutput: Split-Review (`artifact_type: story_split_review`) mit Entscheidung `ok|zu_gross` und technischer Reihenfolge.
- Standardpfad: `docs/workflow/07-story-split-review.md`.
- Aufrufen wenn: unklar ist, ob die Story in einem Zug lieferbar ist oder ein technischer Split nötig wird.

### `story-implementieren`
- Zweck: Eine konkrete Story strikt gemäß Scope und Akzeptanzkriterien im Code umsetzen.
- Typischer Input: Story-Datei oder eine referenzierte Einzelstory aus `docs/workflow/03-story.md`.
- Hauptoutput: Implementierungsnachweis (`artifact_type: story_implementation`) mit Traceability AK -> Code -> Test.
- Standardpfad: `docs/workflow/06-story-implementation.md`.
- Aufrufen wenn: eine freigegebene Story umgesetzt werden soll und klare Nachvollziehbarkeit verlangt ist.
- Pflicht-Referenz: `docs/Architecture-Guide.md` zuerst lesen.

### `story-testen-vitest`
- Zweck: Implementierten Story-Code testen oder fehlende Tests schreiben, um die korrekte Story-Umsetzung abzusichern.
- Typischer Input: Story-Datei (und optional Implementierungsartefakt) mit bestehendem Code-Stand.
- Hauptoutput: Test-Review (`artifact_type: story_test_review`) mit Mapping AK -> Vitest-Testfall.
- Standardpfad: `docs/workflow/08-story-test-review.md`.
- Aufrufen wenn: nach Implementierung die Story-Kriterien testseitig verifiziert werden sollen.
- Wichtig: Für diesen Schritt wird immer Vitest verwendet.
- Pflicht-Referenz: `docs/Architecture-Guide.md` zuerst lesen.

### `ux-bewerten`
- Zweck: UX-Qualität projektweit (`project`) oder bezogen auf eine konkrete Story (`story`) bewerten.
- Typischer Input: Projekt-/Feature-Kontext oder eine Story-Datei (z. B. `docs/workflow/03-story.md`).
- Hauptoutput: UX-Review (`artifact_type: ux_review`) mit Scorecard, Findings und Verbesserungsplan.
- Standardpfad: `docs/workflow/05-ux-review.md`.
- Aufrufen wenn: UX-Risiken früh erkannt, priorisiert und in konkrete Verbesserungen überführt werden sollen.
- Pflicht-Referenz: `docs/Architecture-Guide.md` zuerst lesen.

### `workflow-orchestrator`
- Zweck: nächsten Schritt deterministisch bestimmen.
- Typischer Input: beliebiges Workflow-Artefakt (`prd`, `prd_review`, `story`, `story_review`).
- Hauptoutput: Handoff-Dokument mit Routing-Entscheidung.
- Standardpfad: `docs/workflow/99-workflow-handoff.md`.
- Aufrufen wenn: unklar ist, welcher Skill als Nächstes laufen soll, oder wenn ein einheitlicher Team-Flow erzwungen werden soll.
- Wichtig: Orchestrator ist nicht automatisch in andere Skills "eingebunden"; er wird explizit aufgerufen.

## Empfohlene Dateipfade
- `docs/workflow/01-prd.md`
- `docs/workflow/02-prd-review.md`
- `docs/workflow/03-story.md`
- `docs/workflow/04-story-review.md`
- `docs/workflow/05-ux-review.md`
- `docs/workflow/06-story-implementation.md`
- `docs/workflow/07-story-split-review.md`
- `docs/workflow/08-story-test-review.md`
- `docs/workflow/99-workflow-handoff.md`

## Standardablauf (ohne Orchestrator)
1. `workflow-start` oder `prd-erstellen` -> `01-prd.md`
2. `prd-bewerten` -> `02-prd-review.md`
3. `story-erstellen` -> `03-story.md`
4. `story-bewerten` -> `04-story-review.md`
5. `story-groesse-bewerten` -> `07-story-split-review.md`
6. `story-implementieren` -> `06-story-implementation.md`
7. `story-testen-vitest` -> `08-story-test-review.md`
8. Optional: `ux-bewerten` -> `05-ux-review.md`
9. Bei `needs_revision`: zurück zu passendem Erstellungs-Skill

## Ablauf mit Orchestrator
1. Eingabeartefakt an `workflow-orchestrator` geben.
2. Orchestrator erzeugt `99-workflow-handoff.md` mit `Next skill`.
3. Genannten Skill ausführen.
4. Nach jedem Review-Schritt optional erneut orchestrieren.

## Prompt-Vorlagen (kurz)
1. Start:
   - Nutze `workflow-start`. Erstelle aus dieser Idee ein PRD und speichere als docs/workflow/01-prd.md.
2. PRD prüfen:
   - Nutze `prd-bewerten`. Bewerte docs/workflow/01-prd.md und speichere als docs/workflow/02-prd-review.md.
3. Stories erzeugen:
   - Nutze `story-erstellen`. Verwende docs/workflow/01-prd.md und docs/workflow/02-prd-review.md und speichere als docs/workflow/03-story.md.
4. Stories prüfen:
   - Nutze `story-bewerten`. Bewerte docs/workflow/03-story.md und speichere als docs/workflow/04-story-review.md.
5. Story-Größe prüfen und ggf. splitten:
   - Nutze `story-groesse-bewerten`. Prüfe ob Story <ID/Titel> zu groß ist und erstelle bei Bedarf einen Split-Plan in technischer Reihenfolge unter docs/workflow/07-story-split-review.md.
6. Story implementieren:
   - Nutze `story-implementieren`. Implementiere Story <ID/Titel> aus docs/workflow/03-story.md und dokumentiere das Ergebnis in docs/workflow/06-story-implementation.md.
7. Story mit Vitest testen:
   - Nutze `story-testen-vitest`. Pruefe die Story-Implementierung gegen die Akzeptanzkriterien und speichere das Test-Review als docs/workflow/08-story-test-review.md.
8. UX bewerten (optional):
   - Nutze `ux-bewerten` im Modus story. Bewerte docs/workflow/03-story.md und speichere als docs/workflow/05-ux-review.md.
9. Nächsten Schritt automatisch bestimmen:
   - Nutze `workflow-orchestrator` mit <eingabedatei> und schreibe docs/workflow/99-workflow-handoff.md.

## Qualitätscheck pro Schritt
- Frontmatter vollständig und konsistent.
- Feld `Status` vorhanden und auf einen erlaubten Wert gesetzt.
- Status-Fortschritt ist lückenlos (`Entwurf` -> `In Bearbeitung` -> `Bereit zur Abnahme` -> `Erledigt`).
- `generated_by` entspricht dem tatsächlich genutzten Skill.
- `source_inputs` enthält die tatsächlichen Eingabedateien.
- Review-Artefakte enthalten konkrete `Revision Instructions`.
- Handoff benennt immer einen eindeutigen nächsten Skill.
- Falls Skill = `story-implementieren|story-bewerten|story-testen-vitest|ux-bewerten`: `docs/Architecture-Guide.md` wurde vorab gelesen und erkennbar berücksichtigt.

## Ablauf auf einen Blick
| Schritt | Input | Skill | Output |
|---|---|---|---|
| 1 | Produktidee | `workflow-start` | `docs/workflow/01-prd.md` |
| 2 | `01-prd.md` | `prd-bewerten` | `docs/workflow/02-prd-review.md` |
| 3 | `01-prd.md`, `02-prd-review.md` | `story-erstellen` | `docs/workflow/03-story.md` |
| 4 | `03-story.md` | `story-bewerten` | `docs/workflow/04-story-review.md` |
| 5 | `03-story.md` oder einzelne Story | `story-groesse-bewerten` | `docs/workflow/07-story-split-review.md` |
| 6 | `03-story.md` oder gesplittete Unter-Story | `story-implementieren` | `docs/workflow/06-story-implementation.md` |
| 7 | `03-story.md` und Implementierungsstand | `story-testen-vitest` | `docs/workflow/08-story-test-review.md` |
| 8 | Projektkontext oder `03-story.md` | `ux-bewerten` | `docs/workflow/05-ux-review.md` |
| 9 | Beliebiges Artefakt | `workflow-orchestrator` | `docs/workflow/99-workflow-handoff.md` |
