# Architecture-Guide

Stand: 2026-03-16

## Ziel des Dokuments
Dieser Guide definiert die technischen Anforderungen und die Zielarchitektur fuer `nano-zoo`.
Er dient als verbindliche Entscheidungsgrundlage, damit Implementierung, Review, Tests und UX-Bewertung konsistent bleiben.

## Verbindlichkeit
- Dieser Guide ist eine Pflicht-Referenz fuer:
  - `story-implementieren`
  - `story-bewerten`
  - `story-testen-vitest`
  - `ux-bewerten`
- Die genannten Skills muessen den Guide vor der eigentlichen Arbeit lesen und ihre Entscheidungen daran ausrichten.
- Bei Konflikt zwischen Story-Details und diesem Guide gilt: Konflikt transparent dokumentieren und als Blocker/Revision markieren, nicht stillschweigend ueberschreiben.

## Technische Anforderungen (Requirements)

### 1) Architekturprinzipien
- **Separation of Concerns:** UI, Domain-Logik und Infrastruktur klar trennen.
- **Low Coupling / High Cohesion:** Module nur mit klaren, kleinen Schnittstellen koppeln.
- **Traceability:** Anforderungen muessen von Story -> Code -> Test nachvollziehbar sein.
- **Incremental Delivery:** kleine, vertikale Inkremente statt grosser Big-Bang-Aenderungen.
- **Determinism:** Verhalten, Tests und Builds muessen reproduzierbar sein.

### 2) Code- und Designprinzipien
- Bevorzuge einfache, wartbare Loesungen vor cleveren Spezialfaellen.
- Jede neue Komplexitaet braucht eine begruendete Notwendigkeit.
- Public APIs (Funktionen, Komponenten-Props, Events) stabil und klar benennen.
- Breaking Changes nur explizit und mit Migrationshinweis.

### 3) Abhaengigkeiten
- Neue Libraries nur mit klarer Begruendung (Nutzen, Risiko, Wartbarkeit, Bundle/Build-Effekt).
- Keine redundanten Libraries fuer bereits vorhandene Funktionen.
- Versions- und Tooling-Entscheidungen muessen zum bestehenden Projekt-Stack passen.

### 4) Fehlerbehandlung und Robustheit
- Fehlerzustaende sind explizit modelliert und fuer Nutzer verstaendlich rueckgemeldet.
- Kein stilles Schlucken von Fehlern.
- Fallbacks fuer erwartbare Failure-Cases vorsehen (z. B. leere Daten, Netzwerkfehler).

### 5) Testbarkeit als Architekturmerkmal
- Code so schneiden, dass er isoliert testbar ist.
- Externe I/O an klaren Grenzen kapseln (Mocking-Faehigkeit).
- Kritische Pfade mit automatisierten Tests absichern.

### 6) UX und Accessibility
- Nutzerfluss, Feedback und Fehlermeldungen sind Teil der technischen Definition.
- Interaktive Elemente sollen semantisch korrekt und per Tastatur nutzbar sein.
- Accessibility ist nicht nachgelagert, sondern in Story/Implementierung/Test integriert.

### 7) Performance und Betriebsqualitaet
- Vermeide unnoetige Re-Renders und schwere Berechnungen im Render-Pfad.
- Datenabrufe und asynchrone Prozesse klar strukturieren.
- Bei kritischen Pfaden: Wirkung messen statt vermuten.

### 8) Sicherheit und Datenschutz
- Keine Secrets im Code oder in Artefakten ablegen.
- Nutzerdaten nur fuer den konkreten Zweck verarbeiten.
- Eingaben validieren und Ausgaben kontextgerecht absichern.

## Zielarchitektur (Sollbild)

### Schichtenmodell
1. **Presentation Layer**
   - UI-Komponenten, View-Logik, Nutzerinteraktion
2. **Application/Feature Layer**
   - Use-Case-orientierte Orchestrierung, Feature-Workflows
3. **Domain Layer**
   - Fachregeln, Modelle, Validierungen
4. **Infrastructure Layer**
   - API-Clients, Storage, externe Services, Framework-Adapter

Regel: Abhaengigkeiten zeigen nach innen (Presentation -> Application -> Domain), Infrastruktur bleibt austauschbar.

### Modul-Schnitt
- Features sollen moeglichst in sich geschlossen sein.
- Gemeinsame Utilities nur bei echtem Wiederverwendungsbedarf.
- Keine zyklischen Abhaengigkeiten.

### Datenfluss
- Datenfluss klar und nachvollziehbar halten (Input -> Verarbeitung -> Output).
- Seiteneffekte zentralisieren; keine verteilte, versteckte Nebenlogik.

## Entscheidungs-Checkliste (vor Umsetzung/Review/Test)
1. Ist die Aenderung mit den Architekturprinzipien kompatibel?
2. Bleiben Modulgrenzen und Verantwortlichkeiten klar?
3. Entsteht unbeabsichtigte Kopplung oder technischer Widerspruch?
4. Ist die Loesung testbar und mit vorhandener Teststrategie vereinbar?
5. Sind UX- und Accessibility-Anforderungen beruecksichtigt?
6. Verursacht die Aenderung absehbare Performance- oder Sicherheitsrisiken?
7. Ist der Impact auf bestehenden Code/Stories transparent dokumentiert?

## Definition of Done (architektonisch)
Eine Story gilt nur dann als architektonisch sauber umgesetzt, wenn:
- Scope und Architekturregeln gleichzeitig eingehalten sind,
- alle betroffenen Entscheidungen begruendet dokumentiert sind,
- keine offenen Architekturkonflikte ohne Follow-up verbleiben,
- Tests und Reviews die getroffenen Entscheidungen nachvollziehbar absichern.

## Umgang mit Change Requests
- Change Requests duerfen neue Stories erzeugen, auch mitten in der Entwicklungsphase.
- Vor Umsetzung immer Konsistenzpruefung gegen bereits implementierte Stories und Architekturentscheidungen durchfuehren.
- Konflikte oder Brueche explizit dokumentieren und geordnet aufloesen (nicht implizit kaschieren).
