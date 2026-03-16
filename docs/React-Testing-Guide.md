# React-Testing-Guide

Stand: 2026-03-16

## Ziel
Dieser Guide beschreibt eine praxistaugliche Best-Practice fuer React-Tests mit Vitest:
- schnelle, stabile Unit- und Komponententests,
- realistische Browser-Tests fuer kritische UI-Pfade,
- klare Regeln fuer Mocks, Accessibility und `act()`.

## Empfohlene Teststrategie
Nutze zwei Ebenen parallel:

1. **Schnelle Basis-Tests (jsdom)**
   - fuer Logik, Rendering, States, Formvalidierung
   - sehr schnell in lokalen Runs und CI

2. **Realistische UI-Tests (Vitest Browser Mode)**
   - fuer kritische User-Flows, Fokus-Management, CSS-/Layout-nahe Faelle
   - faengt Probleme ab, die DOM-Simulation nicht zuverlaessig zeigt

Faustregel: viele schnelle jsdom-Tests, wenige gezielte Browser-Mode-Tests fuer hohes Risiko.

## Setup: Vitest + React (Baseline)

### 1) Dependencies
```bash
npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 2) `vitest.config.ts`
```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    clearMocks: true,
    restoreMocks: true,
  },
})
```

### 3) `test/setup.ts`
```ts
import '@testing-library/jest-dom/vitest'
```

## Browser Mode fuer React-Komponententests
Fuer realen Browser-Lauf aktiviere Browser Mode und nutze `vitest-browser-react`.

### Beispiel-Config
```ts
import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
  },
})
```

### Beispieltest
```tsx
import { test, expect } from 'vitest'
import { render } from 'vitest-browser-react'
import Counter from './Counter'

test('counter incrementiert bei Klick', async () => {
  const screen = await render(<Counter count={1} />)
  await screen.getByRole('button', { name: /increment/i }).click()
  await expect.element(screen.getByText('Count is 2')).toBeVisible()
})
```

## Query- und Assertion-Best-Practices
- bevorzuge **accessible Queries** (`getByRole`, `getByLabelText`) statt Klassen/`data-testid` als Standard.
- teste Verhalten aus User-Sicht, nicht interne Implementierung.
- nutze sprechende Testnamen (erwartetes Verhalten statt technische Details).
- bei async UI immer auf sichtbaren Zustand warten (z. B. `findBy...` oder retriable Assertions).

## `act()` in React: Wann und wie
In vielen Setups (React Testing Library, Vitest Browser APIs) sind Interaktionen bereits sauber gekapselt.  
Wenn du jedoch direkt mit React DOM renderst oder Events low-level ausloest, verwende `await act(async () => { ... })`.

### Beispiel mit `act()`
```tsx
import { act } from 'react'
import ReactDOMClient from 'react-dom/client'
import { test, expect } from 'vitest'
import Counter from './Counter'

test('render + update mit act', async () => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  await act(async () => {
    ReactDOMClient.createRoot(container).render(<Counter />)
  })

  const button = container.querySelector('button')!
  await act(async () => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(container.querySelector('p')?.textContent).toContain('1')
})
```

Wenn React meldet, dass `act(...)` nicht unterstuetzt wird, setze im Setup:
```ts
// nur falls noetig in deinem Setup
// global.IS_REACT_ACT_ENVIRONMENT = true
```

## Netzwerk-Mocking: MSW bevorzugen
Fuer API-nahe Tests keine ad-hoc Fetch-Stubs als Standard, sondern **MSW**:
- realistischere Request/Response-Flows,
- stabile Tests trotz Refactoring,
- gut kombinierbar mit Vitest und Browser Mode.

Kurzmuster:
1. Handler definieren
2. Server/Worker in Test-Setup starten
3. pro Test gezielt Handler ueberschreiben

## Accessibility als Pflichtteil
Mindestens fuer kritische Komponenten:
- Tastatur-Navigation (`Tab`, `Shift+Tab`, `Escape`),
- Focus-Management (Dialoge, Menues),
- ARIA-relevante Attribute,
- sinnvolle Roles und accessible Names.

## Empfohlene Testabdeckung pro Komponente
- **Happy Path:** Rendering + Hauptinteraktion
- **Fehlerfall:** API-Fehler/Validation-Failures
- **Edge Cases:** leere Daten, Grenzwerte, Disabled/Loading
- **A11y-Basis:** Fokus und zentrale ARIA-Vertraege

## Anti-Patterns (vermeiden)
- Tests auf interne State-Variablen/Implementierungsdetails.
- Uebermaessiges Mocken von React selbst oder Browser-Basics.
- Timeouts als primaere Synchronisation statt auf UI-Zustaende zu warten.
- Snapshot-only Strategie ohne verhaltensorientierte Assertions.

## Vorschlag fuer CI-Pipeline
1. **PR-Check schnell:** jsdom-Tests + Coverage
2. **zusaetzlicher Job:** Browser-Mode-Tests fuer kritische Komponenten
3. **optional nightly:** erweiterte Browser-/A11y-Suite

## Referenzen
- Vitest Component Testing (Browser Mode): https://vitest.dev/guide/browser/component-testing
- React `act()` Referenz: https://react.dev/reference/react/act
- React `act()` Rendering in Tests: https://react.dev/reference/react/act#rendering-components-in-tests
- Testing Library Guiding Principles: https://testing-library.com/docs/guiding-principles/
- Testing Library `ByRole`: https://testing-library.com/docs/queries/byrole/
- Testing Library Queries Overview: https://testing-library.com/docs/queries/about
- Vitest Mocking Requests: https://main.vitest.dev/guide/mocking/requests
- MSW Quick Start: https://mswjs.io/docs/quick-start
- Playwright Accessibility Testing: https://playwright.dev/docs/next/accessibility-testing
