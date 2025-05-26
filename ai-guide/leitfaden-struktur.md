Dieser Leitfaden erklärt dir Schritt für Schritt, wie du die Hopsa-Berlin Website verwalten, bearbeiten und aktualisieren kannst - auch ohne technische Vorkenntnisse.

## Inhaltsverzeichnis

### 1. Einführung und Überblick
- **Was ist eine statische Website?**
  - Einfache Erklärung statischer Websites im Vergleich zu dynamischen Websites
  - Warum die Hopsa-Website eine statische Website ist und deren Vorteile
- **Die Struktur der Hopsa-Website verstehen**
  - Die Startseite und andere wichtige Seiten
  - Wo du was findest und wie alles zusammenhängt
  - Visuelle Übersicht der Website-Struktur
- **Die wichtigsten Dateien und Ordner auf einen Blick**
  - Was in den einzelnen Ordnern zu finden ist
  - Welche Dateien du am häufigsten bearbeiten wirst

### 2. Domain-Verwaltung mit Namecheap
- **Was ist eine Domain und warum ist sie wichtig?**
  - Einfache Erklärung von hopsa-berlin.de als Internetadresse
  - Der Unterschied zwischen der Domain und der Website selbst
- **Zugriff auf dein Namecheap-Konto**
  - Wo und wie du dich anmeldest
  - Das Dashboard verstehen
- **Domain-Erneuerung und Bezahlung**
  - Wann und wie die Domain erneuert werden muss (jährlich 9 USD)
  - Kreditkarte für automatische Verlängerung hinterlegen
  - Warum regelmäßige Verlängerung wichtig ist
- **Die aktuellen DNS-Einstellungen**
  - Was die bestehenden Einstellungen bedeuten
  - Warum du diese (normalerweise) nicht ändern solltest
  - Wann eine Änderung nötig sein könnte

### 3. GitHub verstehen - ohne technisches Fachwissen
- **Was ist GitHub und wozu brauchen wir es?**
  - GitHub als "Speicherort" der Website einfach erklärt
  - GitHub Pages als kostenloser Hosting-Service
- **Dein GitHub-Konto einrichten**
  - Registrierung in einfachen Schritten
  - Sicherheitseinstellungen für dein Konto
- **Das Hopsa-Repository verstehen**
  - Was ist ein "Repository"?
  - Welche Dateien für dich wichtig sind
  - Wie du Dateien direkt in GitHub bearbeiten kannst (für kleine Änderungen)
- **Häufige Aufgaben bei GitHub**
  - Die Website-Einstellungen finden
  - Den aktuellen Status deiner Website prüfen

### 4. Visual Studio Code als Werkzeug
- **Was ist VS Code und warum verwenden wir es?**
  - Einfache Einführung in diesen benutzerfreundlichen Editor
  - Vorteile gegenüber einfachen Texteditoren
- **Installation und erste Einrichtung**
  - Download und Installation Schritt für Schritt
  - Die wichtigsten Einstellungen für Anfänger
- **Nützliche Erweiterungen für deine Arbeit**
  - Markdown All in One für leichtere Bearbeitung
  - Live Server zum Testen deiner Änderungen
  - GitHub-Integration für einfacheres Veröffentlichen
- **Die Benutzeroberfläche verstehen**
  - Wo ist was in VS Code?
  - Dateien öffnen, bearbeiten und speichern
- **VS Code und GitHub verbinden**
  - Das Repository "klonen" (herunterladen)
  - Änderungen vornehmen und hochladen - alles über die grafische Oberfläche

### 5. Die Hopsa-Website lokal bearbeiten und testen
- **Dein lokales Setup einrichten**
  - Node.js und npm installieren (vereinfachte Anleitung)
  - Das Repository klonen mit VS Code
- **Den Build-Prozess starten**
  - Die run.bat-Datei ausführen - einfach erklärt
  - Was passiert im Hintergrund? (ohne technische Details)
- **Deine Änderungen in Echtzeit sehen**
  - Die lokale Website im Browser öffnen
  - Änderungen vornehmen und sofort betrachten

### 6. Website-Inhalte bearbeiten - Der einfache Weg
- **Markdown verstehen - Die einfache Textformatierung**
  - Überschriften, Listen, fetter Text und mehr
  - Eine übersichtliche Markdown-Kurzanleitung
- **Die wichtigsten Seiten bearbeiten**
  - Die Startseite (index.md)
  - Termine und Veranstaltungen (termine.md)
  - Team-Mitglieder (ensemble.md)
  - Kontaktinformationen (kontakt.md)
- **Bilder hinzufügen und austauschen**
  - Bildgrößen und -formate verstehen
  - Bilder hochladen und in Seiten einbinden
- **Links und Verweise aktualisieren**
  - Interne Links zu anderen Seiten
  - Externe Links zu Social Media etc.

### 7. Termine und Veranstaltungen verwalten
- **Das Termine-System verstehen**
  - Wie die termine.md und termine.njk zusammenspielen
  - Aufbau einer Veranstaltungsinformation
- **Neue Veranstaltungen hinzufügen**
  - Das neuesEvent-Macro nutzen
  - Alle erforderlichen Informationen ausfüllen
- **Veranstaltungen aktualisieren oder entfernen**
  - Wie du bestehende Einträge änderst
  - Wie du nicht mehr aktuelle Veranstaltungen deaktivierst

### 8. Die Navigation anpassen
- **Die Hauptnavigation verstehen und anpassen**
  - Wo du die Navigationspunkte findest (header.njk)
  - Menüpunkte hinzufügen, ändern oder entfernen
- **Die Footer-Navigation anpassen**
  - Footer-Links bearbeiten (footer.njk)
  - Neue Links hinzufügen

### 9. Neue Seiten erstellen
- **Eine neue Seite von Grund auf erstellen**
  - Die richtige Vorlage wählen (layout)
  - Erforderliche Metadaten hinzufügen
- **Alternative URLs für deine Seite einrichten**
  - Wie du die redirect-Funktion nutzt
  - Beispiele für sinnvolle Weiterleitungen
- **Die neue Seite mit der Website verbinden**
  - Links zur neuen Seite hinzufügen
  - Die Seite in die Navigation einbauen (optional)

### 10. Social Media-Einbindung verwalten
- **Instagram-Feeds aktualisieren**
  - Wie du deinen Instagram-Feed aktualisierst oder änderst
- **YouTube-Videos einbinden**
  - Videos von eurem Kanal einbetten
- **Soundcloud-Inhalte verwalten**
  - Podcasts und Audiobeiträge aktualisieren
- **Social Media Links anpassen**
  - Neue Plattformen hinzufügen
  - Bestehende Links aktualisieren

### 11. Änderungen veröffentlichen mit VS Code und GitHub
- **Der einfache Veröffentlichungsprozess**
  - Änderungen speichern
  - Änderungen "committen" (bestätigen)
  - Änderungen "pushen" (hochladen)
- **Deine Änderungen überprüfen**
  - Wie lange es dauert, bis Änderungen sichtbar sind
  - Was tun, wenn etwas nicht funktioniert
- **Lokale Vorschau vs. Live-Website**
  - Unterschiede verstehen
  - Typische Probleme und deren Lösung

### 12. Alternative Bearbeitungsmethoden
- **Direkt in GitHub bearbeiten**
  - Wann sich die direkte Bearbeitung lohnt
  - Schritt-für-Schritt-Anleitung
- **Mit ChatGPT Änderungen vorbereiten**
  - Wie du ChatGPT als Helfer nutzt
  - Beispiel-Prompts für verschiedene Aufgaben
- **Online-Markdown-Editoren nutzen**
  - Alternativen zu VS Code für einfache Änderungen
  - Empfehlungen für benutzerfreundliche Editoren

### 13. Die Website umziehen (falls gewünscht)
- **Zu einem anderen GitHub-Account wechseln**
  - Das Repository übertragen
  - GitHub Pages neu einrichten
- **Zu einem WYSIWYG-Website-Builder wechseln**
  - Optionen wie Wix, Squarespace, etc.
  - Vor- und Nachteile im Vergleich zum aktuellen Setup
  - Wie du die Domain mit einem neuen Anbieter verbindest

### 14. ChatGPT als dein persönlicher Assistent
- **Wie ChatGPT dir bei der Website-Verwaltung helfen kann**
  - Texte schreiben und verbessern
  - Technische Fragen beantworten
  - Code-Probleme lösen
- **Effektive Prompts für häufige Aufgaben**
  - Neue Veranstaltungen formatieren
  - Markdown-Formatierung
  - Fehlerbehebung
- **Beispiel-Prompts zum Kopieren**
  - "Ich möchte einen neuen Eintrag für eine Aufführung am [Datum] erstellen..."
  - "Wie kann ich [bestimmtes Problem] auf meiner Website lösen?"
  - "Erkläre mir bitte, was diese Codezeile in [Datei] bedeutet..."

### 15. Fehlerbehebung und häufige Probleme
- **Die Website wird nicht aktualisiert**
  - Häufige Ursachen und Lösungen
  - Browser-Cache leeren
- **Bilder werden nicht angezeigt**
  - Pfadprobleme verstehen und beheben
  - Bildformate und -größen prüfen
- **Formatierungsprobleme**
  - Typische Markdown-Fehler
  - Layout-Probleme beheben

### 16. Glossar: Technische Begriffe einfach erklärt
- **Website-Begriffe**
  - Domain, Hosting, HTML, CSS, etc.
- **GitHub-Begriffe**
  - Repository, Commit, Push, etc.
- **Eleventy und statische Websites**
  - Was du wissen solltest, ohne ins Detail zu gehen

### Anhang: Nützliche Ressourcen und Links
- **Hilfreiche Webseiten**
  - Markdown-Referenzen
  - Bildbearbeitungstools
  - Weitere Lernressourcen
- **Support und Hilfe bekommen**
  - Wo du weitere Hilfe findest
  - Wie du präzise Fragen stellst