# Erste Schritte fuer Kinder mit der Cursor KI-Umgebung

Dieses Dokument hilft dir, schnell loszulegen. Wir machen alles Schritt fuer Schritt. Das Starterprojekt findest du hier auf GitHub: [https://github.com/patlecat/nano-zoo](https://github.com/patlecat/nano-zoo) .

## Was du brauchst

- Einen Laptop mit **Windows** oder **Linux**
- Internet (WLAN)
- Ein GitHub-Konto
- Cursor IDE

## 1) GitHub-Konto vorbereiten

1. Oeffne [github.com](https://github.com).
2. Melde dich an (oder erstelle ein Konto).
3. Merke dir Benutzername und Passwort.

## 2) Cursor IDE installieren

Die Anleitung auf Englisch: [https://cursor.com/docs/get-started/quickstart](https://cursor.com/docs/get-started/quickstart)

### Windows

1. Gehe auf [cursor.com](https://www.cursor.com/).
2. Lade die Windows-Version herunter.
3. Starte die heruntergeladene Datei und klicke dich durch die Installation.
4. Starte Cursor.

### Linux

1. Gehe auf [cursor.com](https://www.cursor.com/).
2. Lade die Linux-Version herunter.
3. Installiere Cursor nach dem vorgeschlagenen Weg deiner Distribution.
4. Starte Cursor.

Hinweis: Wenn bei der Installation ein Admin-Passwort verlangt wird, hol dir kurz Hilfe von einer erwachsenen Person.

## 3) Projekt von GitHub klonen

Repo-URL:
`https://github.com/patlecat/nano-zoo.git`

### Variante A: Mit Cursor (einfach)

1. Oeffne Cursor.
2. Waehle **Clone Repository**.
3. Fuege die URL ein:
  `https://github.com/patlecat/nano-zoo.git`
4. Waehle einen Ordner auf deinem Laptop.
5. Warte, bis das Projekt geladen ist.

### Variante B: Mit Terminal

#### Windows (PowerShell)

```powershell
cd C:\Development\GitHub
git clone https://github.com/patlecat/nano-zoo.git
cd nano-zoo
```

#### Linux (Terminal)

```bash
mkdir -p ~/Development/GitHub
cd ~/Development/GitHub
git clone https://github.com/patlecat/nano-zoo.git
cd nano-zoo
```

## 4) Projekt in Cursor oeffnen

1. In Cursor: **File -> Open Folder**.
2. Waehle den Ordner `nano-zoo`.
3. Jetzt siehst du links alle Dateien.

## 5) Cursor richtig einstellen (Model-Auswahl wie im Screenshot)

Nutze den **Models**-Dialog in Cursor und stelle die Modelle so ein wie im Screenshot.

Aktiviere diese Modelle:

- `Compose 1.5`
- `GPT-5.3 Codex Low`
- `GPT-5.3 Codex`
- `GPT-5.4`
- `Sonnet 4.6`
- `Sonnet 4.6` (zweiter Eintrag mit Cloud-Symbol)
- `Haiku 4.5`
- `Haiku 4.5` (zweiter Eintrag mit Cloud-Symbol)
- `Gemini 3 Flash`
- `Kimi K2.5`

So findest du die Einstellung:

1. Oeffne in Cursor die Modell-Auswahl.
2. Suche im Feld **Add or search model** nach den Namen oben.
3. Schalte die Modelle mit dem gruenen Schalter an.

## 6) Git und GitHub mit Cursor Chat benutzen

Die Kinder sollen Git und GitHub vor allem ueber den Cursor-Chat nutzen.

Beispiel-Prompts fuer den Cursor-Chat:

1. `Pruefe git status und erklaere mir kurz, was geaendert hat.`
2. `Fuehre git pull aus und sag mir, ob es Konflikte gibt.`
3. `Fuehre git add . aus.`
4. `Erstelle einen Commit mit der Message: "Update durch ...".`
5. `Push bitte auf origin main.`

Wichtig:

- Vor jedem Git Push kurz pruefen, ob die Commit-Message sinnvoll ist.
- Nie Passwoerter oder geheime Tokens in Dateien bzw. auf GitHub speichern!

## 7) Commandline-Befehle zusaetzlich (zum Nachschlagen)

Diese Befehle sind zusaetzlich hilfreich. Sie funktionieren in PowerShell und Linux-Terminal.

```bash
git status
git pull
git add .
git commit -m "Update durch Team Blau"
git push origin main
git log --oneline -5
```

GitHub CLI (optional, wenn `gh` installiert ist):

```bash
gh auth login
gh repo view patlecat/nano-zoo
gh pr list
```

## 8) Erster Test

1. Oeffne die Datei `README.md`.
2. Schreibe eine kleine Aenderung (z. B. ein Wort ergaenzen).
3. Speichere.
4. Frage Cursor im Chat nach Hilfe fuer den naechsten Schritt.

## 9) Wenn etwas nicht klappt

- Internet weg? WLAN neu verbinden.
- Passwort vergessen? Passwort-Reset auf GitHub machen.
- Installation blockiert? Eine erwachsene Person um Hilfe bitten.
- Cursor zeigt Fehler? Ruhig bleiben und den Fehlertext in den Chat kopieren.

## 10) Mini-Checkliste

- GitHub funktioniert
- Cursor ist installiert
- Repo ist geklont
- Ordner `nano-zoo` ist in Cursor offen
- Modelle sind sinnvoll eingestellt

