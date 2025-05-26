Dieser Leitfaden erklärt dir Schritt für Schritt, wie du die Hopsa-Berlin Website verwalten, bearbeiten und aktualisieren kannst - auch ohne technische Vorkenntnisse.

## Inhaltsverzeichnis

### 1. Einführung und Überblick
- **Was ist eine statische Website?**
- **Die Struktur der Hopsa-Website verstehen**
- **Die wichtigsten Dateien und Ordner auf einen Blick**

### 2. Domain-Verwaltung mit Namecheap
- **Was ist eine Domain und warum ist sie wichtig?**
- **Zugriff auf dein Namecheap-Konto**
- **Domain-Erneuerung und Bezahlung**
- **Die aktuellen DNS-Einstellungen**

### 3. GitHub verstehen - ohne technisches Fachwissen
- **Was ist GitHub und wozu brauchen wir es?**
- **Dein GitHub-Konto einrichten**
- **Das Hopsa-Repository verstehen**
- **Häufige Aufgaben bei GitHub**

### 4. Visual Studio Code als Werkzeug
- **Was ist VS Code und warum verwenden wir es?**
- **Installation und erste Einrichtung**
- **Nützliche Erweiterungen für deine Arbeit**
- **Die Benutzeroberfläche verstehen**
- **VS Code und GitHub verbinden**

### 5. Die Hopsa-Website lokal bearbeiten und testen
- **Dein lokales Setup einrichten**
- **Den Build-Prozess starten**
- **Deine Änderungen in Echtzeit sehen**

### 6. Website-Inhalte bearbeiten - Der einfache Weg
- **Markdown verstehen - Die einfache Textformatierung**
- **Die wichtigsten Seiten bearbeiten**
- **Bilder hinzufügen und austauschen**
- **Links und Verweise aktualisieren**

### 7. Termine und Veranstaltungen verwalten
- **Das Termine-System verstehen**
- **Neue Veranstaltungen hinzufügen**
- **Veranstaltungen aktualisieren oder entfernen**

### 8. Die Navigation anpassen
- **Die Hauptnavigation verstehen und anpassen**
- **Die Footer-Navigation anpassen**

### 9. Neue Seiten erstellen
- **Eine neue Seite von Grund auf erstellen**
- **Alternative URLs für deine Seite einrichten**
- **Die neue Seite mit der Website verbinden**

### 10. Social Media-Einbindung verwalten
- **Instagram-Feeds aktualisieren**
- **YouTube-Videos einbinden**
- **Soundcloud-Inhalte verwalten**
- **Social Media Links anpassen**

### 11. Änderungen veröffentlichen mit VS Code und GitHub
- **Der einfache Veröffentlichungsprozess**
- **Deine Änderungen überprüfen**
- **Lokale Vorschau vs. Live-Website**

### 12. Die Website umziehen (falls gewünscht)
- **Zu einem anderen GitHub-Account wechseln**
- **Zu einem WYSIWYG-Website-Builder wechseln**

### 13. ChatGPT als dein persönlicher Assistent
- **Wie ChatGPT dir bei der Website-Verwaltung helfen kann**
- **Effektive Prompts für häufige Aufgaben**
- **Beispiel-Prompts zum Kopieren**

### 14. Fehlerbehebung und häufige Probleme
- **Die Website wird nicht aktualisiert**
- **Bilder werden nicht angezeigt**
- **Formatierungsprobleme**

### 15. Glossar: Technische Begriffe einfach erklärt
- **Website-Begriffe**
- **GitHub-Begriffe**
- **Eleventy und statische Websites**

### Anhang: Nützliche Ressourcen und Links
- **Hilfreiche Webseiten**
- **Support und Hilfe bekommen**

# 1. Einführung und Überblick

## Willkommen zu deiner neuen Hopsa-Berlin Website!

Herzlich willkommen zu diesem Leitfaden! Egal, ob du bereits Erfahrung mit Websites hast oder dies dein erster Kontakt mit der "Technik hinter den Kulissen" ist – dieser Leitfaden wird dir Schritt für Schritt zeigen, wie du die Hopsa-Berlin Website verwalten, aktualisieren und anpassen kannst.

> **Keine Sorge:** Du brauchst keine Programmierkenntnisse, um die meisten Änderungen an der Website vorzunehmen. Dieser Leitfaden wurde speziell für Menschen ohne technischen Hintergrund geschrieben.

### Was dich in diesem Leitfaden erwartet

In den kommenden Kapiteln erfährst du:
- Wie du einfache Textänderungen vornimmst
- Wie du neue Veranstaltungen hinzufügst
- Wie du Bilder austauschst oder hochlädst
- Wie du neue Seiten erstellst
- Wie du Social Media Inhalte einbindest
- Und vieles mehr!

Du kannst den Leitfaden von Anfang bis Ende durcharbeiten oder direkt zu dem Kapitel springen, das deine aktuelle Frage beantwortet. Die Inhaltsübersicht hilft dir dabei, schnell das zu finden, was du gerade brauchst.

## Was ist eine statische Website?

Bevor wir in die Details eintauchen, lass uns kurz verstehen, womit wir es zu tun haben.

### Der Unterschied: Statische vs. dynamische Websites

Die Hopsa-Berlin Website ist eine **statische Website**. Was bedeutet das?

🔹 **Statische Website**: Stell dir ein digitales Fotoalbum vor. Jede Seite (HTML-Datei) ist fertig gestaltet und wartet darauf, angezeigt zu werden. Wenn jemand die Website besucht, werden diese vorbereiteten Seiten einfach ausgeliefert – genau wie sie sind.

🔹 **Dynamische Website**: Im Gegensatz dazu wäre eine dynamische Website wie ein Koch, der das Gericht erst zubereitet, wenn die Bestellung eingeht. Jedes Mal, wenn jemand eine Seite besucht, werden Daten aus einer Datenbank geholt und die Seite wird in dem Moment zusammengestellt.

> **Was heißt das für dich?** Bei einer statischen Website wie Hopsa-Berlin musst du Änderungen immer im Voraus machen. Nach einer Änderung wird die Website neu "gebaut" und dann hochgeladen. Das klingt komplizierter als es ist – dieser Leitfaden zeigt dir genau, wie das geht!

> **Was ist HTML?**  
> HTML (HyperText Markup Language) ist die Grundsprache des Webs. Sie besteht aus sogenannten "Tags", die dem Browser sagen, wie der Inhalt einer Webseite angezeigt werden soll. Beispiel: `<h1>Überschrift</h1>` zeigt "Überschrift" als große Hauptüberschrift an. Die HTML-Dateien sind die fertigen Seiten, die deine Besucher sehen.

### Vorteile einer statischen Website

Statische Websites haben viele Vorteile, besonders für kleine Organisationen wie Hopsa:

1. **Schnelligkeit**: Die Seiten laden schneller, weil sie bereits fertig sind.
2. **Sicherheit**: Ohne Datenbank gibt es weniger Angriffsfläche für Hacker.
3. **Zuverlässigkeit**: Weniger bewegliche Teile bedeuten weniger potenzielle Fehlerquellen.
4. **Kostengünstig**: Die Hosting-Kosten sind oft niedriger, bei GitHub Pages sogar kostenlos!
5. **Langlebigkeit**: Statische Websites funktionieren auch nach Jahren noch problemlos.

### Wie deine Änderungen den Weg auf die Website finden

Der grundlegende Arbeitsablauf sieht so aus:

1. Du bearbeitest eine Datei (z.B. die Termine oder das Team) auf deinem Computer
2. Die Website wird neu "gebaut" (HTML-Dateien werden generiert) mit der run.bat-Datei
3. Diese Dateien werden auf GitHub hochgeladen
4. GitHub Pages stellt diese Dateien den Besuchern zur Verfügung

Später im Leitfaden zeigen wir dir, wie du all das mit wenigen Klicks erledigen kannst.

> **Wichtig zu wissen:** Da die Hopsa-Website jedes Mal "neu gebaut" werden muss, können wir nicht direkt auf GitHub bearbeiten. Der Prozess erfordert, dass du die Dateien auf deinem Computer änderst, dann die run.bat-Datei ausführst (um die Website zu bauen), und erst dann die Änderungen zu GitHub hochlädst. Keine Sorge – wir erklären diesen Prozess Schritt für Schritt in den kommenden Kapiteln!

## Die Struktur der Hopsa-Website verstehen

Die Hopsa-Website besteht aus mehreren Seiten, die unterschiedliche Informationen enthalten. Lass uns einen Überblick verschaffen:

### Die wichtigsten Seiten

- **Startseite (index.md)**: Das Herzstück der Website mit allgemeinen Informationen über Hopsa und aktuellen Inhalten
- **Termine (termine.md)**: Hier werden alle anstehenden Auftritte und Veranstaltungen angezeigt
- **Ensemble (ensemble.md)**: Informationen über die Mitglieder von Hopsa
- **Kontakt (kontakt.md)**: Kontaktinformationen und -möglichkeiten
- **Improvisation (improvisation.md)**: Informationen über Improvisation und das Theaterkonzept
- **Social Media / Links (links.md)**: Übersicht der Social Media Präsenzen

> **Was ist Markdown?**  
> Markdown ist eine einfache Art, Text zu formatieren. Du schreibst normalen Text und fügst bestimmte Zeichen hinzu, um Formatierungen zu erzeugen. Zum Beispiel:
> - `# Überschrift` wird zu einer großen Überschrift
> - `**fett**` wird zu **fett**
> - `*kursiv*` wird zu *kursiv*
> - `[Link-Text](https://example.com)` wird zu einem klickbaren Link
>
> Die meisten Seiten der Hopsa-Website sind in Markdown geschrieben, weil es so einfach zu lernen und zu bearbeiten ist!

### Die Navigation

Die Hauptnavigation findest du in der Datei header.njk. Hier sind die Menüpunkte definiert, die oben auf jeder Seite angezeigt werden. Die Footer-Navigation (unten auf jeder Seite) ist in footer.njk definiert.

> **Was ist .njk?**  
> Die Dateiendung .njk steht für Nunjucks, eine sogenannte Template-Sprache. Mit Nunjucks können wiederverwendbare Teile der Website (wie Header und Footer) einmal definiert und dann auf allen Seiten verwendet werden. Änderst du beispielsweise etwas im Header, ändert es sich automatisch auf allen Seiten.

## Die wichtigsten Dateien und Ordner auf einen Blick

Die Website besteht aus verschiedenen Dateien und Ordnern, die unterschiedliche Funktionen haben. Hier sind die wichtigsten, die du kennen solltest:

### Ordnerstruktur

```
hopsa-berlin/
│
├── src/                   # Hier liegen die Quelldateien der Website
│   ├── _includes/         # Templates und wiederverwendbare Teile
│   ├── assets/            # Bilder, Logos, Hintergrundbilder, etc.
│   ├── styles/            # Design-Dateien (CSS)
│   ├── index.md           # Startseite
│   ├── termine.md         # Termine-Seite
│   ├── ensemble.md        # Team-Seite
│   └── ...                # Weitere Seiten
│
├── docs/                  # Die fertige Website (wird automatisch erstellt)
├── _data/                 # Datendateien, z.B. für Weiterleitungen
├── run.bat                # Skript zum lokalen Bauen und Testen der Website
└── ...                    # Weitere Konfigurationsdateien
```

### Die Dateien, die du am häufigsten bearbeiten wirst

Als nicht-technische Person wirst du hauptsächlich diese Dateien bearbeiten:

1. **termine.md** und **termine.md**: Für die Verwaltung von Veranstaltungen und Terminen
2. **ensemble.md**: Um Informationen über das Team zu aktualisieren
3. **index.md**: Um die Startseite zu bearbeiten
4. **kontakt.md**: Für Kontaktinformationen
5. **links.md**: Für Social Media Links

## Die Technologien hinter der Website (einfach erklärt)

Die Hopsa-Website nutzt einige moderne Technologien, aber keine Sorge – du musst nicht verstehen, wie diese im Detail funktionieren. Hier ist eine einfache Erklärung:

### 11ty (Eleventy)

Eleventy ist das "Küchengerät", das aus deinen Inhalten fertige HTML-Seiten macht. Es nimmt die einfach zu bearbeitenden Markdown-Dateien und kombiniert sie mit den Design-Vorlagen.

> **Für Neugierige:** Eleventy ist ein statischer Website-Generator, der aus verschiedenen Dateiformaten (wie Markdown) eine fertige Website erstellt. Es ist flexibel, schnell und beliebt bei vielen Website-Entwicklern.

### Markdown (.md)

Markdown ist eine einfache Textformatierungssprache. Statt kompliziertem HTML-Code schreibst du einfach:

```markdown
# Überschrift

Das ist ein **fetter Text** und *kursiver Text*.

- Eine Liste
- Mit Punkten
```

Du wirst sehen, wie einfach Markdown zu lernen ist! Es macht das Bearbeiten von Inhalten viel einfacher als HTML.

### Nunjucks (.njk)

Nunjucks-Dateien sind Vorlagen, die das Aussehen und die Struktur der Website definieren. Du wirst diese selten direkt bearbeiten müssen, aber es ist gut zu wissen, dass sie existieren.

### Tailwind CSS

Tailwind CSS ist das Design-System der Website. Es bestimmt, wie alles aussieht: Farben, Abstände, Schriftarten etc. Als nicht-technische Person musst du dich damit nicht beschäftigen.

> **Was ist CSS?**  
> CSS (Cascading Style Sheets) ist die Sprache, die bestimmt, wie HTML-Elemente aussehen sollen. Beispiel: Farben, Schriftarten, Abstände oder Animationen werden durch CSS festgelegt. In der Hopsa-Website ist das meiste CSS bereits durch Tailwind CSS vordefiniert, sodass du dich damit nicht befassen musst.

## Die run.bat-Datei - Das Herzstück des Build-Prozesses

Eine besonders wichtige Datei ist die run.bat. Diese Batch-Datei ist ein kleines Programm für Windows, das mehrere Aufgaben nacheinander erledigt:

1. Es kopiert die notwendigen Dateien in den docs-Ordner
2. Es generiert das Design (CSS) für die Website
3. Es startet einen lokalen Server, sodass du die Website auf deinem Computer anschauen kannst
4. Es überwacht Änderungen und aktualisiert die Vorschau automatisch

Diese Datei musst du jedes Mal ausführen, wenn du Änderungen an der Website vornehmen möchtest. Wir werden im Kapitel zur lokalen Bearbeitung genau zeigen, wie das geht.

## Wie du mit der Hopsa-Website arbeiten kannst

Es gibt mehrere Möglichkeiten, die Website zu bearbeiten:

### 1. Mit Visual Studio Code auf deinem Computer (empfohlen)

Für die meisten Änderungen ist es am besten, mit Visual Studio Code (VS Code) auf deinem eigenen Computer zu arbeiten.

**Vorteile:**
- Besseres Bearbeitungserlebnis
- Vorschau der Änderungen in Echtzeit
- Mehr Kontrolle über den Prozess
- Volle Unterstützung des Build-Prozesses mit run.bat

**Nachteile:**
- Erfordert Installation von Software
- Etwas mehr Einrichtungsaufwand

### 2. Direkt in GitHub bearbeiten (nur für bestimmte Fälle)

Für kleine, schnelle Änderungen kann es manchmal praktisch sein, direkt in GitHub zu arbeiten. Allerdings ist dabei wichtig zu wissen: **Diese Methode funktioniert nicht für die meisten Änderungen an der Hopsa-Website**, da der Build-Prozess fehlt.

Diese Methode werden wir nur der Vollständigkeit halber später erklären, sie ist aber nicht der Hauptweg, um die Website zu pflegen.

## Häufige Fragen zum Einstieg

### "Muss ich programmieren können?"

Nein! Für die meisten Änderungen an der Website brauchst du keine Programmierkenntnisse. Du wirst hauptsächlich mit Markdown arbeiten, einer sehr einfachen Textformatierung, die in wenigen Minuten zu lernen ist.

### "Was passiert, wenn ich etwas kaputt mache?"

Keine Sorge! Durch die Verwendung von GitHub gibt es immer eine Sicherungskopie aller früheren Versionen. Wenn etwas schiefgeht, kann man einfach zu einer funktionierenden Version zurückkehren. Außerdem zeigen wir dir, wie du Änderungen testen kannst, bevor sie live gehen.

### "Wie lange dauert es, bis Änderungen sichtbar sind?"

Wenn du Änderungen über GitHub veröffentlichst, dauert es in der Regel 1-5 Minuten, bis sie auf der öffentlichen Website sichtbar werden.

### "Was ist der Unterschied zwischen der Website und der Domain?"

> **Was ist eine Domain?**  
> Eine Domain ist die Adresse, unter der deine Website im Internet gefunden wird (in diesem Fall "hopsa-berlin.de").  
> Sie funktioniert wie eine Telefonnummer im Telefonbuch – sie leitet Besucher zu deiner Website.
>
> Die Website selbst sind die Dateien und Inhalte, die angezeigt werden, wenn jemand diese Adresse besucht.

## ChatGPT als dein persönlicher Assistent

Wenn du während der Arbeit an der Website auf Fragen oder Probleme stößt, kann ChatGPT eine große Hilfe sein. Hier sind einige nützliche Prompts:

```
"Erkläre mir bitte, wie ich in Markdown eine Überschrift und eine Liste erstelle."

"Ich möchte ein Bild in meine Markdown-Datei einfügen. Wie mache ich das?"

"Ich möchte einen neuen Termin zur Hopsa-Website hinzufügen. Wie muss ich die termine.md bearbeiten?"

"Wie kann ich die run.bat-Datei ausführen, um meine Website-Änderungen zu sehen?"
```

Zögere nicht, ChatGPT zu fragen, wenn etwas unklar ist!

> **Tipp für ChatGPT-Prompts:**  
> Wenn du ChatGPT um Hilfe bittest, sei so spezifisch wie möglich. Zum Beispiel: "Ich bearbeite die termine.md-Datei der Hopsa-Website und möchte einen neuen Auftritt am 15. Juni hinzufügen. Die Datei nutzt das termine.neuesEvent-Format. Wie genau muss ich das machen?" Je mehr Details du gibst, desto hilfreicher kann die Antwort sein!

## Zusammenfassung und nächste Schritte

In diesem ersten Kapitel hast du gelernt:
- Was eine statische Website ist und wie die Hopsa-Website funktioniert
- Die grundlegende Struktur der Website und die wichtigsten Dateien
- Warum der Build-Prozess mit run.bat wichtig ist
- Die verwendeten Technologien (ohne technische Details)
- Wie du mit der Website arbeiten kannst
- Wie ChatGPT dir bei Fragen helfen kann

Im nächsten Kapitel geht es um die Domain-Verwaltung mit Namecheap – wie du sicherstellst, dass die Adresse "hopsa-berlin.de" immer auf deine Website zeigt.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel erfährst du alles über die Domain-Verwaltung mit Namecheap. Falls du jedoch zuerst mehr über die praktische Arbeit mit der Website erfahren möchtest, kannst du auch zu Kapitel 4 springen, wo wir Visual Studio Code einrichten und erste Schritte zur Bearbeitung der Website machen.

# 2. Domain-Verwaltung mit Namecheap

## Die digitale Adresse deiner Website

Willkommen zum zweiten Kapitel unseres Leitfadens! Hier dreht sich alles um die Domain "hopsa-berlin.de" – die Internetadresse, unter der Besucher die Hopsa-Website finden. Wir werden Schritt für Schritt erklären, wie du diese Domain verwaltest, warum sie wichtig ist und was du beachten musst, damit sie weiterhin reibungslos funktioniert.

> **Das Wichtigste zuerst**: Die Domain hopsa-berlin.de muss jährlich für etwa 9 USD verlängert werden. Ohne diese Verlängerung würde die Website nicht mehr erreichbar sein. Später in diesem Kapitel erfährst du genau, wie das geht.

### Was wir in diesem Kapitel behandeln:
- Was eine Domain überhaupt ist und warum sie wichtig ist
- Wie du auf dein Namecheap-Konto zugreifst
- Wie du die Domain verlängerst und die Bezahlung einrichtest
- Was die aktuellen DNS-Einstellungen bedeuten
- Welche Einstellungen du (nicht) ändern solltest

## Was ist eine Domain und warum ist sie wichtig?

Eine Domain ist wie die Adresse eines Hauses – nur eben im Internet. Statt "Musterstraße 123, 12345 Berlin" heißt die Adresse in diesem Fall "hopsa-berlin.de". Wenn jemand diese Adresse in seinen Browser eingibt, möchte er zu eurer Website gelangen.

> **Was genau ist eine Domain?**  
> Eine Domain ist ein leicht merkbarer Name, der einer numerischen IP-Adresse zugeordnet ist (vergleichbar mit einer Telefonnummer). Während Computer mit diesen IP-Adressen arbeiten (z.B. 185.199.108.153), merken wir Menschen uns lieber Namen wie "hopsa-berlin.de". Das Domain-System (DNS) übersetzt diese Namen in die entsprechenden IP-Adressen, damit Browser die Website finden können.

### Der Unterschied zwischen Domain und Website

Ein häufiges Missverständnis ist die Verwechslung von Domain und Website:

- **Die Domain** ist nur die Adresse (hopsa-berlin.de)
- **Die Website** ist der eigentliche Inhalt (Texte, Bilder, Design), den Besucher sehen

Um bei der Haus-Analogie zu bleiben:
- Die Domain ist die Adresse im Straßenverzeichnis
- Die Website ist das eigentliche Gebäude mit all seinem Inhalt
- Das Hosting (in eurem Fall GitHub Pages) ist das Grundstück, auf dem das Haus steht

### Warum die Domain so wichtig ist

Die Domain hat mehrere wichtige Funktionen:
1. **Erkennbarkeit**: Eine gute Domain wie "hopsa-berlin.de" ist leicht zu merken und zu teilen
2. **Professionalität**: Eine eigene Domain vermittelt einen seriösen Eindruck
3. **Kontinuität**: Wenn ihr später das Hosting wechseln solltet, könnt ihr die gleiche Domain behalten

## Zugriff auf dein Namecheap-Konto

Die Domain hopsa-berlin.de ist bei einem Anbieter namens Namecheap registriert. Um sie zu verwalten, musst du dich dort anmelden.

> **Was ist Namecheap?**  
> Namecheap ist ein Domain-Registrar – ein Unternehmen, das Domains registriert und verwaltet. Sie sind einer von vielen Anbietern, aber für hopsa-berlin.de ist die Domain bereits dort registriert, daher arbeiten wir mit diesem Dienst.

### Anmeldung bei Namecheap

So meldest du dich bei Namecheap an:

1. Besuche die Website [www.namecheap.com](https://www.namecheap.com)
2. Klicke oben rechts auf "Log In"
3. Gib die Zugangsdaten ein, die dir mitgeteilt wurden:
   - Benutzername: *[hier den übermittelten Benutzernamen einfügen]*
   - Passwort: *[hier das übermittelte Passwort einfügen]*

> **Sicherheitshinweis:**  
> Wenn du das Konto übernimmst, solltest du das Passwort ändern und nach Möglichkeit eine Zwei-Faktor-Authentifizierung einrichten. Das schützt die Domain vor unbefugtem Zugriff.

### Das Namecheap-Dashboard verstehen

Nach der Anmeldung gelangst du zum Dashboard. Das ist die zentrale Übersicht über alle deine Domains und Services bei Namecheap. Hier findest du:

1. **Domain List**: Alle deine Domains (in diesem Fall hopsa-berlin.de)
2. **Account Balance**: Dein Guthaben bei Namecheap
3. **Notifications**: Wichtige Benachrichtigungen, z.B. über ablaufende Domains

So findest du die Domain-Verwaltung:

1. Klicke im Dashboard auf "DOMAIN LIST"
2. Suche nach "hopsa-berlin.de" und klicke darauf
3. Du siehst nun eine Übersicht mit verschiedenen Optionen zur Verwaltung der Domain

## Domain-Erneuerung und Bezahlung

Eine der wichtigsten Aufgaben bei der Domain-Verwaltung ist die regelmäßige Verlängerung.

### Wann und wie die Domain erneuert werden muss

Die Domain hopsa-berlin.de muss **jährlich** verlängert werden, sonst ist die Website nicht mehr unter dieser Adresse erreichbar. Die Kosten betragen etwa **9 USD pro Jahr**.

So überprüfst du, wann die Domain ausläuft:

1. Logge dich bei Namecheap ein
2. Gehe zur Domain-Liste
3. Bei hopsa-berlin.de siehst du unter "EXPIRES ON" das Ablaufdatum

> **Wichtige Information:**  
> Laut der übermittelten Nachricht wurde die Domain bereits bis Anfang Dezember 2026 verlängert. Du musst also erst gegen Ende 2026 aktiv werden. Es ist trotzdem gut, den Prozess jetzt schon zu verstehen.

### Kreditkarte für automatische Verlängerung hinterlegen

Am einfachsten ist es, eine Kreditkarte für die automatische Verlängerung zu hinterlegen. So geht's:

1. Klicke im Dashboard auf dein Profil (oben rechts) und wähle "Billing & Payments"
2. Gehe zu "Payment Methods"
3. Klicke auf "Add Payment Method" und wähle "Credit Card"
4. Gib deine Kreditkartendaten ein und speichere sie

Nun musst du die automatische Verlängerung für die Domain aktivieren:

1. Gehe zurück zur Domain-Liste
2. Klicke auf "MANAGE" bei hopsa-berlin.de
3. Im Abschnitt "Automatic Renewal" stelle sicher, dass die Option aktiviert ist

> **Hinweis:**  
> Du erhältst Benachrichtigungen per E-Mail, bevor die automatische Verlängerung durchgeführt wird. So kannst du bei Bedarf noch eingreifen.

### Warum regelmäßige Verlängerung wichtig ist

Wenn eine Domain nicht rechtzeitig verlängert wird, passiert Folgendes:

1. Die Domain wird zunächst **deaktiviert** (die Website ist nicht mehr erreichbar)
2. Es gibt eine kurze **Nachfrist** zum Verlängern (üblicherweise mit Aufpreis)
3. Danach geht die Domain in eine **Redemption-Phase** (mit erheblich höheren Kosten zur Wiederherstellung)
4. Schließlich wird die Domain **freigegeben** und kann von jedem anderen registriert werden

**Wichtig**: Wenn die Domain einmal von jemand anderem übernommen wurde, habt ihr in der Regel keine Möglichkeit mehr, sie zurückzubekommen!

## Die aktuellen DNS-Einstellungen

Die Domain hopsa-berlin.de ist aktuell so konfiguriert, dass sie auf GitHub Pages zeigt, wo eure Website gehostet wird. Diese Verbindung wird durch die DNS-Einstellungen (Domain Name System) hergestellt.

> **Was ist DNS?**  
> Das Domain Name System (DNS) funktioniert wie ein Telefonbuch des Internets. Es übersetzt Domainnamen (hopsa-berlin.de) in IP-Adressen, damit Computer wissen, wo sie die Website finden können. Die Einstellungen bestehen aus verschiedenen "Records" (Einträgen), die jeweils einen bestimmten Zweck erfüllen.

### Die aktuellen DNS-Einstellungen verstehen

In den Informationen wurden folgende DNS-Einstellungen für hopsa-berlin.de erwähnt:

```
A Record     @     185.199.108.153
A Record     @     185.199.109.153
A Record     @     185.199.110.153
A Record     @     185.199.111.153
CNAME Record www   jannikh.github.io.
```

Aber was bedeutet das?

> **Was ist ein A-Record?**  
> A-Records (Address Records) verknüpfen einen Domainnamen direkt mit einer IP-Adresse. Das Symbol "@" steht dabei für die Hauptdomain (hopsa-berlin.de ohne Subdomains). Die vier A-Records weisen auf die IP-Adressen der GitHub Pages-Server hin – darum gibt es mehrere für höhere Ausfallsicherheit.

> **Was ist ein CNAME-Record?**  
> Ein CNAME-Record (Canonical Name Record) verweist eine Subdomain auf eine andere Domain. In diesem Fall wird "www.hopsa-berlin.de" auf "jannikh.github.io" weitergeleitet, was wiederum der GitHub-Nutzername mit dem Repository ist.

### Warum du diese Einstellungen (normalerweise) nicht ändern solltest

Diese DNS-Einstellungen sind speziell für GitHub Pages konfiguriert. Wenn du sie änderst, könnte die Website nicht mehr funktionieren. Es gibt nur wenige Gründe, warum du diese Einstellungen jemals anpassen müsstest:

1. Wenn du das Hosting-Anbieter wechselst (z.B. von GitHub Pages zu einem anderen Dienst)
2. Wenn sich die GitHub Pages IP-Adressen ändern sollten (sehr selten)
3. Wenn du die Domain auf ein anderes GitHub-Repository umleiten möchtest

> **Tipp:**  
> Mache immer Screenshots oder Notizen von den aktuellen Einstellungen, bevor du Änderungen vornimmst. So kannst du sie im Notfall wiederherstellen.

### So findest du die DNS-Einstellungen

Falls du doch einmal die DNS-Einstellungen überprüfen musst:

1. Logge dich bei Namecheap ein
2. Gehe zur Domain-Liste und klicke auf "MANAGE" bei hopsa-berlin.de
3. Wähle den Tab "Advanced DNS"
4. Hier siehst du alle aktuellen DNS-Einträge

## Häufige Fragen zur Domain-Verwaltung

### "Was passiert, wenn die Website plötzlich nicht mehr erreichbar ist?"

Wenn die Website plötzlich nicht mehr funktioniert, könnte es an der Domain-Konfiguration liegen. Überprüfe folgende Punkte:

1. Ist die Domain noch aktiv? (Überprüfe das Ablaufdatum im Namecheap-Dashboard)
2. Sind die DNS-Einstellungen noch korrekt? (Vergleiche sie mit den oben genannten Einstellungen)
3. Funktioniert GitHub Pages? (Überprüfe den Status auf der GitHub-Repository-Seite unter "Settings" > "Pages")

### "Wie lange dauern Änderungen an den DNS-Einstellungen?"

DNS-Änderungen sind nicht sofort wirksam. Nach einer Änderung kann es zwischen 30 Minuten und 48 Stunden dauern, bis sie weltweit sichtbar sind. Dieser Prozess wird "DNS-Propagation" genannt.

> **Was ist DNS-Propagation?**  
> DNS-Daten werden weltweit auf verschiedenen Servern zwischengespeichert (gecacht), um das Internet schneller zu machen. Wenn du eine Änderung vornimmst, müssen diese Caches erst aktualisiert werden, was einige Zeit dauern kann.

### "Muss ich mich um HTTPS/SSL kümmern?"

Nein, das wird automatisch von GitHub Pages übernommen. In den übermittelten Informationen ist zu sehen, dass HTTPS bereits aktiviert ist, was eine sichere Verbindung zur Website gewährleistet (erkennbar am Schloss-Symbol im Browser).

> **Was ist HTTPS/SSL?**  
> HTTPS (Hypertext Transfer Protocol Secure) verschlüsselt die Kommunikation zwischen dem Browser eines Besuchers und deiner Website. Dies verhindert, dass Dritte sensible Daten abfangen können. SSL (Secure Sockets Layer) ist das Protokoll, das diese Verschlüsselung ermöglicht.

## Sicherheit deines Namecheap-Kontos

Die Domain ist ein wertvolles Gut – wenn jemand Zugriff auf dein Namecheap-Konto erhält, könnte er theoretisch die Domain entwenden oder umleiten. Daher ist die Sicherheit des Kontos sehr wichtig.

### Starkes Passwort verwenden

Stelle sicher, dass du ein sicheres Passwort verwendest:
- Mindestens 12 Zeichen
- Mischung aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen
- Nicht für andere Konten wiederverwenden

### Zwei-Faktor-Authentifizierung einrichten

Für zusätzliche Sicherheit solltest du die Zwei-Faktor-Authentifizierung (2FA) aktivieren:

1. Logge dich bei Namecheap ein
2. Gehe zu deinem Profil (oben rechts) und wähle "Account Security"
3. Folge den Anweisungen zur Einrichtung von 2FA mit einer Authentifizierungs-App wie Google Authenticator oder Authy

> **Was ist Zwei-Faktor-Authentifizierung?**  
> Bei der Zwei-Faktor-Authentifizierung benötigst du zusätzlich zu deinem Passwort einen zweiten Faktor, um dich anzumelden – üblicherweise einen Code, der auf dein Smartphone gesendet oder von einer App generiert wird. Das macht es für Unbefugte viel schwieriger, sich Zugang zu verschaffen, selbst wenn sie dein Passwort kennen.

### Kontaktinformationen aktuell halten

Stelle sicher, dass deine E-Mail-Adresse und andere Kontaktinformationen bei Namecheap immer aktuell sind. Wichtige Benachrichtigungen wie die bevorstehende Domain-Verlängerung oder Sicherheitswarnungen werden an diese Adresse gesendet.

## ChatGPT als Helfer bei Domain-Fragen

Wenn du auf konkrete Fragen zur Domain oder Namecheap stößt, kann ChatGPT dir helfen. Hier sind einige nützliche Prompts:

```
"Wie kann ich überprüfen, ob meine Domain hopsa-berlin.de noch aktiv ist?"

"Erkläre mir, was dieser DNS-Eintrag bedeutet: CNAME Record www jannikh.github.io."

"Ich habe eine E-Mail von Namecheap erhalten, die so aussieht: [E-Mail-Inhalt]. Ist das legitim oder ein Betrugsversuch?"

"Was mache ich, wenn ich meine Namecheap-Anmeldedaten vergessen habe?"
```

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Was eine Domain ist und warum sie wichtig für die Website ist
- Wie du auf das Namecheap-Konto zugreifst und es verwaltest
- Wie die Domain regelmäßig verlängert werden kann
- Was die aktuellen DNS-Einstellungen bedeuten
- Wie du die Sicherheit des Domain-Kontos gewährleisten kannst

Mit diesem Wissen bist du gut gerüstet, um die digitale Adresse von Hopsa Berlin zu verwalten und zu schützen. Selbst wenn die aktuelle Verlängerung bis 2026 reicht, ist es wichtig zu verstehen, wie die Domain funktioniert – besonders für den Fall, dass du irgendwann Änderungen vornehmen musst.

---

**Für die praktische Arbeit an der Website selbst** geht es im nächsten Kapitel um GitHub, wo der eigentliche Inhalt der Website gespeichert ist. Wenn du jedoch bereits neugierig bist, wie du Änderungen an der Website vornehmen kannst, darfst du auch direkt zu Kapitel 4 springen, wo wir Visual Studio Code einrichten.

# 3. GitHub verstehen - ohne technisches Fachwissen

## GitHub - Dein digitaler Speicherort für die Website

In diesem Kapitel lernst du einen der wichtigsten Bausteine für die Verwaltung der Hopsa-Website kennen: GitHub. Keine Sorge, wenn du noch nie davon gehört hast – wir erklären dir alles von Grund auf, ganz ohne Fachjargon. Du wirst verstehen, warum GitHub für deine Website so wichtig ist und wie du es nutzen kannst, selbst wenn du bisher wenig mit technischen Dingen zu tun hattest.

> **Das Wichtigste zuerst**: GitHub ist der Ort, wo alle Dateien der Hopsa-Website gespeichert sind. Du benötigst ein kostenloses GitHub-Konto, um Änderungen an der Website vorzunehmen und diese zu veröffentlichen.

### Was wir in diesem Kapitel behandeln:
- Was GitHub ist und warum wir es für die Hopsa-Website nutzen
- Wie du dein eigenes GitHub-Konto einrichtest
- Was ein "Repository" ist und wie du das Hopsa-Repository verstehst
- Die häufigsten Aufgaben, die du bei GitHub erledigen wirst

## Was ist GitHub und wozu brauchen wir es?

Stell dir GitHub wie eine Art Online-Bibliothek vor – aber anstatt Bücher zu sammeln, speichert es Programmcode und Websitedateien. Für die Hopsa-Website ist GitHub gleich dreifach wichtig:

1. **Speicherort**: Hier werden alle Dateien der Website gespeichert.
2. **Versionskontrolle**: Jede Änderung wird protokolliert, sodass man immer zu früheren Versionen zurückkehren kann.
3. **Hosting**: Mit GitHub Pages wird die Website direkt aus dem Speicher heraus im Internet sichtbar gemacht.

> **Was ist Versionskontrolle?**  
> Versionskontrolle ist wie eine Zeitmaschine für deine Dateien. Jedes Mal, wenn du eine Änderung speicherst, erstellt GitHub einen "Schnappschuss" aller Dateien zu diesem Zeitpunkt. Das bedeutet, du kannst jederzeit zu einer früheren Version zurückgehen, wenn etwas schiefläuft – wie ein "Rückgängig"-Knopf für die ganze Website.

### GitHub als "Speicherort" einfach erklärt

Die Hopsa-Website besteht aus vielen verschiedenen Dateien: Texte, Bilder, Designvorlagen und mehr. All diese Dateien müssen irgendwo gespeichert werden – und zwar nicht nur auf deinem Computer, sondern an einem Ort, der immer erreichbar ist und von dem aus die Website ins Internet gestellt werden kann.

Das ist GitHub. Es speichert alle diese Dateien sicher und organisiert. So kannst du von jedem Computer aus auf die Website-Dateien zugreifen und sie bearbeiten. Außerdem können mehrere Personen an der Website arbeiten, ohne dass Chaos entsteht.

### GitHub Pages als kostenloser Hosting-Service

Eine der besten Funktionen von GitHub für Projekte wie die Hopsa-Website ist GitHub Pages.

> **Was ist Hosting?**  
> Hosting bedeutet, dass Dateien auf einem Server gespeichert werden, der permanent mit dem Internet verbunden ist. Wenn jemand eine Website besucht, werden die Dateien von diesem Server geladen und im Browser angezeigt. Ohne Hosting wäre eine Website nur auf dem eigenen Computer sichtbar, nicht aber im Internet.

GitHub Pages nimmt die Dateien in deinem GitHub-Speicher und macht sie automatisch als Website verfügbar – kostenlos! Das ist ideal für kleinere Projekte wie die Hopsa-Website, da keine zusätzlichen Kosten für Webhosting anfallen.

## Dein GitHub-Konto einrichten

Um an der Hopsa-Website arbeiten zu können, brauchst du ein eigenes GitHub-Konto. Die Einrichtung ist einfach und kostenlos.

### Registrierung in einfachen Schritten

1. **Öffne die GitHub-Website**: Besuche [github.com](https://github.com) in deinem Browser.

2. **Fülle das Anmeldeformular aus**:
   - Gib deine E-Mail-Adresse ein
   - Erstelle ein sicheres Passwort
   - Wähle einen Benutzernamen (dieser wird öffentlich sichtbar sein)
   
   ![GitHub-Registrierung](https://i.imgur.com/example1.png)
   *Beispielbild: Das GitHub-Registrierungsformular*

3. **Verifiziere dein Konto**: Du erhältst eine E-Mail mit einem Link zur Bestätigung deiner E-Mail-Adresse. Klicke auf diesen Link.

4. **Einrichtung abschließen**: GitHub führt dich durch einige Einrichtungsfragen. Die meisten kannst du überspringen oder mit den Standardoptionen beantworten.

> **Tipp zur Kontoerstellung:**  
> Wähle einen Benutzernamen, den du auch in Zukunft gerne verwenden möchtest. Er wird in deiner GitHub-URL erscheinen (z.B. github.com/deinname) und ist später nur schwer zu ändern.

### Sicherheitseinstellungen für dein Konto

Sobald dein Konto erstellt ist, solltest du einige wichtige Sicherheitseinstellungen vornehmen:

1. **Starkes Passwort**: Stelle sicher, dass dein Passwort sicher ist (eine Kombination aus Zahlen, Groß- und Kleinbuchstaben sowie Sonderzeichen).

2. **Zwei-Faktor-Authentifizierung einrichten**:
   - Gehe zu deinen Kontoeinstellungen (klicke auf dein Profilbild oben rechts, dann auf "Settings")
   - Wähle "Password and authentication"
   - Aktiviere "Two-factor authentication"
   - Folge den Anweisungen zur Einrichtung (am einfachsten über eine Authentifizierungs-App wie Google Authenticator)

> **Was ist Zwei-Faktor-Authentifizierung?**  
> Diese zusätzliche Sicherheitsmaßnahme verlangt neben deinem Passwort einen zweiten Bestätigungsschritt, normalerweise einen Code von deinem Smartphone. So bleibt dein Konto geschützt, selbst wenn jemand dein Passwort erraten sollte.

3. **E-Mail-Benachrichtigungen einstellen**:
   - Gehe zu "Notifications" in den Einstellungen
   - Wähle, welche Benachrichtigungen du erhalten möchtest

Diese Sicherheitsmaßnahmen sind wichtig, da über dein GitHub-Konto Änderungen an der öffentlichen Hopsa-Website vorgenommen werden können.

## Zugriffsrechte für das Hopsa-Repository erhalten

Nachdem du dein Konto eingerichtet hast, musst du Zugriff auf das Hopsa-Website-Repository bekommen. Dafür musst du von einem bestehenden Administrator (z.B. Jannik) als Mitarbeiter hinzugefügt werden.

1. **Teile deinen GitHub-Benutzernamen** mit dem aktuellen Administrator.
2. **Warte auf eine Einladungs-E-Mail** von GitHub.
3. **Akzeptiere die Einladung**, indem du auf den Link in der E-Mail klickst.

Du hast nun Zugriff auf das Repository und kannst Änderungen vornehmen!

## Das Hopsa-Repository verstehen

Nachdem du Zugriff erhalten hast, ist es an der Zeit zu verstehen, wo die Website-Dateien gespeichert sind und wie du sie finden kannst.

### Was ist ein "Repository"?

> **Was ist ein Repository?**  
> Ein Repository (oft kurz "Repo" genannt) ist im Grunde ein Projektordner auf GitHub. Es enthält alle Dateien eines Projekts sowie deren komplette Änderungshistorie. Man kann es sich wie einen intelligenten Ordner vorstellen, der sich jede Änderung merkt, die jemals gemacht wurde.

Das Hopsa-Repository enthält alle Dateien, die für die Website benötigt werden:
- Textinhalte (in Markdown-Dateien)
- Bilder und andere Medien
- Design- und Layout-Vorlagen
- Konfigurationsdateien

### Das Hopsa-Repository finden und öffnen

1. **Gehe zur GitHub-Website** und melde dich an.
2. Auf deiner Startseite solltest du nun unter "Your repositories" oder "Recent repositories" das Hopsa-Repository sehen.
3. Falls nicht, kannst du es direkt unter folgender Adresse aufrufen: `https://github.com/USERNAME/hopsa-berlin` (ersetze "USERNAME" mit dem Benutzernamen des Repository-Besitzers).
4. **Klicke auf den Repository-Namen**, um es zu öffnen.

![GitHub-Repository-Übersicht](https://i.imgur.com/example2.png)
*Beispielbild: Übersicht eines GitHub-Repositories*

### Im Repository navigieren

Sobald du das Repository geöffnet hast, siehst du eine Übersicht aller Dateien und Ordner:

- Die **Ordnerstruktur** wird im mittleren Bereich angezeigt.
- Du kannst auf Ordner klicken, um ihren Inhalt anzusehen.
- Ein Klick auf eine Datei öffnet deren Inhalt.

Die wichtigsten Ordner und Dateien im Hopsa-Repository sind:

- **src/**: Hier liegen alle Quelldateien der Website
  - **src/assets/**: Bilder, Logos und andere Medien
  - **src/_includes/**: Vorlagen für verschiedene Seitenteile
  - Verschiedene .md-Dateien wie index.md, termine.md, etc. (die eigentlichen Inhaltsseiten)
- **docs/**: Die fertig gebaute Website (hier nicht direkt bearbeiten!)
- **run.bat**: Die Datei, die du ausführen musst, um die Website lokal zu bauen und anzusehen

> **Wichtig zu wissen:**  
> Bearbeite niemals Dateien direkt im docs/-Ordner! Diese werden automatisch generiert und deine Änderungen würden bei der nächsten Aktualisierung überschrieben werden.

## Häufige Aufgaben bei GitHub

Für die Verwaltung der Hopsa-Website wirst du nur einige wenige Funktionen von GitHub regelmäßig nutzen. Hier sind die wichtigsten:

### Die Website-Einstellungen finden

Wenn du Administrationsrechte für das Repository hast, kannst du die GitHub Pages-Einstellungen einsehen:

1. Gehe zum Repository und klicke auf "Settings" (oben rechts).
2. Scrolle nach unten zum Abschnitt "GitHub Pages".
3. Hier siehst du, aus welchem Ordner die Website veröffentlicht wird (normalerweise aus dem "docs"-Ordner) und unter welcher URL sie erreichbar ist.

> **Was sind Repository-Einstellungen?**  
> Die Repository-Einstellungen erlauben dir, verschiedene Aspekte des Projekts zu konfigurieren, wie zum Beispiel Berechtigungen, Integrationen und die Website-Veröffentlichung über GitHub Pages.

### Den aktuellen Status deiner Website prüfen

Nach jeder Änderung, die du hochlädst, baut GitHub automatisch eine neue Version der Website. Du kannst den Status dieses Prozesses überprüfen:

1. Gehe zum Repository und klicke auf den Tab "Actions".
2. Hier siehst du alle kürzlich durchgeführten Aktionen und ihren Status.
3. Ein grünes Häkchen bedeutet, dass alles erfolgreich war.
4. Ein rotes X bedeutet, dass etwas schiefgelaufen ist.

![GitHub-Actions-Status](https://i.imgur.com/example3.png)
*Beispielbild: Actions-Tab mit Statusanzeigen*

### Den Code ansehen und auf deinen Computer herunterladen

Obwohl wir in einem späteren Kapitel ausführlich erklären, wie du mit Visual Studio Code arbeiten kannst, hier schon einmal die Grundlagen, wie du den Code auf deinen Computer bekommst:

1. Auf der Hauptseite des Repositories klicke auf den grünen "Code" Button.
2. Wähle "Open with GitHub Desktop" oder "Download ZIP", je nachdem, wie du arbeiten möchtest.
   - "Open with GitHub Desktop" erfordert die Installation der GitHub Desktop App (wird in Kapitel 4 behandelt).
   - "Download ZIP" lädt alle Dateien als komprimiertes Paket herunter.

> **Was ist "Klonen" oder "Clone"?**  
> Wenn man ein Repository "klont", erstellt man eine lokale Kopie aller Dateien auf dem eigenen Computer, die weiterhin mit der Online-Version auf GitHub verbunden bleibt. So kannst du Änderungen lokal vornehmen und sie später wieder hochladen.

### Dateiversionen und Änderungshistorie einsehen

Eine der nützlichsten Funktionen von GitHub ist die Möglichkeit, alle früheren Änderungen zu sehen:

1. Gehe zu einer beliebigen Datei im Repository (z.B. src/index.md).
2. Klicke oben rechts auf "History".
3. Du siehst nun eine Liste aller Änderungen an dieser Datei, mit Datum und Person, die die Änderung vorgenommen hat.
4. Klicke auf eine bestimmte Änderung, um die genauen Unterschiede zu sehen.

Diese Funktion ist sehr hilfreich, wenn du:
- Nachvollziehen möchtest, wer was wann geändert hat
- Verstehen möchtest, was eine bestimmte Änderung bewirkt hat
- Zu einer früheren Version zurückkehren möchtest, falls etwas schiefgegangen ist

## GitHub und lokale Bearbeitung: Die zwei Welten verstehen

Ein wichtiges Konzept zum Verständnis von GitHub ist der Unterschied zwischen "online" und "lokal":

1. **Online (auf GitHub)**: Dies ist die zentrale Version deiner Website, die auf GitHub gespeichert ist.
2. **Lokal (auf deinem Computer)**: Dies ist deine persönliche Arbeitskopie, an der du Änderungen vornimmst.

Der typische Arbeitsablauf sieht so aus:
1. Du lädst (klonst) das Repository von GitHub auf deinen Computer.
2. Du nimmst lokale Änderungen vor und testest sie.
3. Du lädst (pusht) deine Änderungen zurück zu GitHub.
4. GitHub Pages aktualisiert die öffentliche Website mit deinen Änderungen.

> **Wichtig für die Hopsa-Website:**  
> Denke daran, dass für die Hopsa-Website ein zusätzlicher Schritt notwendig ist: Du musst die Website mit run.bat lokal "bauen", bevor du deine Änderungen hochlädst. Mehr dazu in den Kapiteln 4 und 5!

## Häufige Fragen zu GitHub

### "Kann ich etwas kaputt machen, wenn ich Änderungen vornehme?"

Einer der großen Vorteile von GitHub ist, dass nichts wirklich "kaputt" geht:

- Jede Änderung wird gespeichert und kann rückgängig gemacht werden.
- Du kannst jederzeit zu einer früheren Version zurückkehren.
- Selbst wenn du eine Datei versehentlich löschst, kann sie wiederhergestellt werden.

### "Ist GitHub sicher? Wer kann meine Dateien sehen?"

Die Hopsa-Website ist ein öffentliches Repository, was bedeutet:

- Jeder kann den Code und die Dateien sehen (genau wie jeder die Website im Internet sehen kann).
- Nur autorisierte Personen (du und andere Teammitglieder) können Änderungen vornehmen.
- Deine Anmeldedaten und privaten Einstellungen bleiben natürlich geschützt.

Dies ist gewollt und normal für eine öffentliche Website – es stellt kein Sicherheitsrisiko dar und ist sogar vorteilhaft, da es Transparenz und Zusammenarbeit fördert.

### "Muss ich alles über Git und Kommandozeilen lernen?"

Nein! Während Git (die Technologie hinter GitHub) ursprünglich für die Kommandozeile entwickelt wurde, gibt es heute viele benutzerfreundliche Tools:

- **GitHub Desktop**: Eine einfache App, um Git zu nutzen, ohne Kommandos tippen zu müssen.
- **Visual Studio Code**: Unser empfohlener Editor hat eine integrierte Git-Unterstützung.

In den nächsten Kapiteln zeigen wir dir, wie du diese Tools nutzt, ohne technisches Fachwissen zu benötigen.

> **Was ist der Unterschied zwischen Git und GitHub?**  
> **Git** ist die Technologie zur Versionskontrolle (entwickelt von Linus Torvalds, dem Erfinder von Linux).  
> **GitHub** ist eine Webplattform, die Git nutzt und zusätzliche Funktionen wie Hosting, Zusammenarbeit und Benutzeroberfläche bietet.  
> Du kannst GitHub nutzen, ohne jemals direkt mit Git arbeiten zu müssen!

## ChatGPT als Helfer bei GitHub-Fragen

GitHub kann anfangs etwas verwirrend sein. Hier sind einige Prompts, die du bei ChatGPT verwenden kannst, um schnell Hilfe zu bekommen:

```
"Ich versuche eine bestimmte Datei im Hopsa-Berlin Repository zu finden. Wo könnte sie gespeichert sein?"

"Was bedeutet diese Fehlermeldung bei GitHub: [Fehlermeldung einfügen]"

"Wie kann ich sehen, wer zuletzt Änderungen an der Termine-Seite vorgenommen hat?"

"Wie erstelle ich einen Screenshot von einer bestimmten Stelle auf GitHub, um ihn mit jemandem zu teilen und um Hilfe zu bitten?"
```

> **Tipp für präzise Antworten:**  
> Wenn du ChatGPT nach Hilfe mit GitHub fragst, füge möglichst viele Details hinzu. Ein Screenshot (oder eine genaue Beschreibung dessen, was du siehst) hilft ChatGPT, dir besser zu helfen.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Was GitHub ist und warum es für die Hopsa-Website wichtig ist
- Wie du dein eigenes GitHub-Konto einrichtest und absicherst
- Was ein Repository ist und wie das Hopsa-Repository aufgebaut ist
- Welche grundlegenden Aufgaben du auf GitHub erledigen kannst
- Die zwei Welten: Online (GitHub) vs. Lokal (dein Computer)

Du hast nun ein grundlegendes Verständnis von GitHub und bist bereit, mit der praktischen Arbeit an der Website zu beginnen. Im nächsten Kapitel lernst du Visual Studio Code kennen – deinen Hauptwerkzeug für die Bearbeitung der Website-Dateien.

---

**Bereit für den nächsten Schritt?** Im nächsten Kapitel richten wir Visual Studio Code ein, mit dem du die Website-Dateien bearbeiten wirst. Wir werden auch zeigen, wie VS Code und GitHub zusammenarbeiten, damit du deine Änderungen einfach veröffentlichen kannst.

# 4. Visual Studio Code als Werkzeug

## Dein neues Lieblings-Werkzeug für die Website-Bearbeitung

Herzlich willkommen zum vierten Kapitel unseres Leitfadens! Jetzt wird es praktisch: Wir stellen dir Visual Studio Code (kurz: VS Code) vor – ein kostenloses und benutzerfreundliches Programm, mit dem du die Inhalte der Hopsa-Website bearbeiten und aktualisieren kannst. Auch wenn der Name etwas einschüchternd klingen mag, wirst du sehen, dass VS Code ein überraschend freundliches Werkzeug ist, das dir die Arbeit mit der Website erheblich erleichtern wird.

> **Das Wichtigste zuerst**: Visual Studio Code ist ein kostenloser, moderner Texteditor, mit dem du die Dateien der Hopsa-Website bearbeiten kannst. Es bietet viele hilfreiche Funktionen, die dir die Arbeit erleichtern, und lässt sich perfekt mit GitHub verbinden.

### Was wir in diesem Kapitel behandeln:
- Was VS Code ist und warum es das ideale Werkzeug für die Hopsa-Website ist
- Wie du VS Code installierst und für die erste Verwendung einrichtest
- Welche Erweiterungen (Extensions) deine Arbeit erleichtern können
- Wie du dich in der Benutzeroberfläche zurechtfindest
- Wie du VS Code mit GitHub verbindest, um deine Änderungen zu veröffentlichen

## Was ist VS Code und warum verwenden wir es?

Visual Studio Code (VS Code) ist ein moderner Texteditor, der von Microsoft entwickelt wurde – aber lass dich davon nicht abschrecken! Im Gegensatz zu vielen anderen Microsoft-Produkten ist VS Code:
- Komplett kostenlos
- Einfach zu bedienen
- Für alle Betriebssysteme verfügbar (Windows, Mac, Linux)
- Anpassbar an deine Bedürfnisse
- Von einer großen Gemeinschaft unterstützt

> **Was ist ein Texteditor?**  
> Ein Texteditor ist ein Programm zum Bearbeiten von Textdateien. Im Gegensatz zu einer Textverarbeitung wie Microsoft Word, die formatierte Dokumente erstellt, konzentrieren sich Texteditoren auf reinen Text und eignen sich besonders für das Bearbeiten von Code und Markup-Sprachen wie HTML und Markdown.

### Warum VS Code für die Hopsa-Website ideal ist

Für die Arbeit an der Hopsa-Website ist VS Code aus mehreren Gründen besonders geeignet:

1. **Markdown-Unterstützung**: Die Inhalte der Hopsa-Website sind hauptsächlich in Markdown geschrieben. VS Code bietet eine hervorragende Unterstützung für Markdown, einschließlich Syntax-Hervorhebung und Vorschau.

2. **GitHub-Integration**: VS Code kann direkt mit GitHub verbunden werden, was das Veröffentlichen deiner Änderungen erheblich vereinfacht.

3. **Projektverwaltung**: Du kannst den gesamten Ordner der Hopsa-Website auf einmal öffnen und leicht zwischen verschiedenen Dateien navigieren.

4. **Erweiterbarkeit**: Mit Erweiterungen kannst du VS Code genau an deine Bedürfnisse anpassen.

5. **Integriertes Terminal**: Du kannst die wichtige run.bat-Datei direkt aus VS Code heraus ausführen, um deine Änderungen zu testen.

Für die Bearbeitung der Hopsa-Website brauchst du keine Programmierkenntnisse. Du wirst hauptsächlich Texte in Markdown-Dateien bearbeiten, was mit VS Code besonders einfach ist.

## Installation und erste Einrichtung

Die Installation von VS Code ist unkompliziert und dauert nur wenige Minuten. Hier zeigen wir dir, wie du VS Code auf deinem Windows-Computer installierst und für die erste Verwendung einrichtest.

### VS Code herunterladen und installieren

1. **Besuche die offizielle VS Code-Website**: Öffne einen Webbrowser und gehe zu [code.visualstudio.com](https://code.visualstudio.com/).

2. **Lade VS Code herunter**: Auf der Startseite siehst du einen blauen Button "Download for Windows". Klicke darauf, um den Download zu starten.

   ![VS Code Download Button](https://i.imgur.com/example1.png)
   *So sieht der Download-Button aus*

3. **Führe die Installationsdatei aus**: Nach dem Download findest du die Datei (z.B. "VSCodeUserSetup-x64-1.xx.x.exe") in deinem Download-Ordner. Doppelklicke darauf, um die Installation zu starten.

4. **Folge dem Installationsassistenten**: 
   - Akzeptiere die Lizenzvereinbarung
   - Wähle den Installationsort (die Standardeinstellung ist in der Regel in Ordnung)
   - Bei "Zusätzliche Aufgaben auswählen" empfehlen wir, alle Optionen aktiviert zu lassen, insbesondere:
     - "Zu PATH hinzufügen" (wichtig für Entwicklungstools)
     - "Als Standardeditor für unterstützte Dateitypen registrieren"
     - Die "Kontextmenü"-Optionen, damit du Dateien direkt mit Rechtsklick in VS Code öffnen kannst

5. **Klicke auf "Installieren"** und warte, bis die Installation abgeschlossen ist.

6. **Starte VS Code**: Nach der Installation kannst du "Visual Studio Code starten" auswählen oder VS Code über das Startmenü oder das Desktop-Symbol öffnen.

### Erste Schritte mit VS Code

Wenn du VS Code zum ersten Mal startest, siehst du eine Willkommensseite mit verschiedenen Optionen. Keine Sorge, wenn es zunächst etwas überwältigend wirkt – wir konzentrieren uns nur auf das Wesentliche.

#### Die VS Code-Oberfläche auf einen Blick

![VS Code Interface](https://i.imgur.com/example2.png)
*Die Hauptbereiche der VS Code-Oberfläche*

Die Oberfläche von VS Code besteht aus mehreren Hauptbereichen:

1. **Aktivitätsleiste** (ganz links): Hier kannst du zwischen verschiedenen Ansichten wechseln:
   - Explorer (Dateiansicht)
   - Suche
   - Quellcodeverwaltung (Git)
   - Ausführung und Debugging
   - Erweiterungen

2. **Seitenleiste**: Zeigt den Inhalt der ausgewählten Aktivität an, z.B. die Dateien deines Projekts im Explorer.

3. **Editor-Bereich**: Hier bearbeitest du deine Dateien. Du kannst mehrere Dateien in verschiedenen Tabs öffnen.

4. **Statusleiste** (unten): Zeigt Informationen über die aktuelle Datei und den Projektstatus an.

5. **Terminal** (optional): Kann über "Terminal > Neues Terminal" im Menü geöffnet werden und ist wichtig für die Ausführung der run.bat-Datei.

> **Tipp für Einsteiger:**  
> Du kannst die Größe der verschiedenen Bereiche anpassen, indem du die Trennlinien zwischen ihnen mit der Maus ziehst. Wenn dir die Seitenleiste zu viel Platz wegnimmt, kannst du sie auch mit einem Klick auf das Symbol in der Aktivitätsleiste ein- und ausblenden.

### Die wichtigsten Einstellungen für die Arbeit mit der Hopsa-Website

Für eine optimale Nutzung von VS Code für die Hopsa-Website empfehlen wir einige einfache Einstellungen:

1. **Öffne die Einstellungen**: Gehe zu "Datei > Einstellungen > Einstellungen" oder drücke `Strg+,` (Komma).

2. **Suche nach "Auto Save"**: Gib "Auto Save" in die Suchleiste ein und stelle es auf "afterDelay" (nach Verzögerung). So werden deine Änderungen automatisch gespeichert, und du kannst nichts vergessen.

   ![Auto Save Einstellung](https://i.imgur.com/example3.png)
   *Auto Save aktivieren*

3. **Word Wrap aktivieren**: Suche nach "word wrap" und stelle es auf "on". Dadurch werden lange Textzeilen automatisch umgebrochen, was das Bearbeiten von Textdateien angenehmer macht.

> **Was ist Auto Save?**  
> Auto Save ist eine Funktion, die deine Änderungen automatisch speichert, ohne dass du manuell speichern musst. In der Standardeinstellung musst du deine Dateien regelmäßig mit Strg+S speichern, aber mit aktiviertem Auto Save geschieht dies automatisch, nachdem du einige Sekunden nicht mehr getippt hast.

## Nützliche Erweiterungen für deine Arbeit

Eine der größten Stärken von VS Code sind die Erweiterungen (Extensions), mit denen du die Funktionalität des Editors an deine Bedürfnisse anpassen kannst. Für die Arbeit mit der Hopsa-Website empfehlen wir einige spezifische Erweiterungen.

> **Was sind Erweiterungen?**  
> Erweiterungen sind kleine Add-ons für VS Code, die zusätzliche Funktionen bereitstellen. Sie sind wie Apps für dein Smartphone – du lädst nur die herunter, die du wirklich brauchst, um deine Arbeit effizienter zu gestalten.

### Erweiterungen installieren

1. **Öffne die Erweiterungsansicht**: Klicke auf das Erweiterungs-Symbol in der Aktivitätsleiste (sieht aus wie ein Viereck) oder drücke `Strg+Shift+X`.

2. **Suche nach einer Erweiterung**: Gib den Namen der gewünschten Erweiterung in die Suchleiste ein.

3. **Installiere die Erweiterung**: Klicke auf den "Installieren"-Button neben der gewünschten Erweiterung.

### Empfohlene Erweiterungen für die Hopsa-Website

Hier sind einige Erweiterungen, die deine Arbeit mit der Hopsa-Website erheblich erleichtern können:

1. **Markdown All in One** (von Yu Zhang):
   - **Was es tut**: Bietet umfassende Unterstützung für Markdown, einschließlich Vorschau, Formatierungshilfen und Tastenkombinationen.
   - **Warum es hilfreich ist**: Da die meisten Inhalte der Hopsa-Website in Markdown geschrieben sind, macht diese Erweiterung das Bearbeiten viel einfacher.

2. **GitHub Pull Requests and Issues** (von GitHub):
   - **Was es tut**: Integriert GitHub direkt in VS Code.
   - **Warum es hilfreich ist**: Erleichtert das Veröffentlichen deiner Änderungen auf GitHub.

3. **Live Server** oder **Eleventy Dev Server Support** (falls verfügbar):
   - **Was es tut**: Ermöglicht die Live-Vorschau deiner Website während der Bearbeitung.
   - **Warum es hilfreich ist**: Du kannst sofort sehen, wie deine Änderungen aussehen werden.

4. **Path Intellisense** (von Christian Kohler):
   - **Was es tut**: Vervollständigt Pfade zu Dateien automatisch.
   - **Warum es hilfreich ist**: Macht es einfacher, Pfade zu Bildern oder anderen Dateien korrekt einzufügen.

5. **Spell Checker** (z.B. "Code Spell Checker" von Street Side Software):
   - **Was es tut**: Prüft deine Texte auf Rechtschreibfehler.
   - **Warum es hilfreich ist**: Hilft, peinliche Tippfehler auf der Website zu vermeiden.

> **Tipp für Einsteiger:**  
> Beginne mit nur wenigen Erweiterungen und füge bei Bedarf weitere hinzu. Zu viele Erweiterungen können VS Code verlangsamen und die Oberfläche unübersichtlich machen.

## Die Benutzeroberfläche verstehen

Nun, da du VS Code installiert und konfiguriert hast, ist es Zeit, die Benutzeroberfläche besser kennenzulernen und zu verstehen, wie du mit den Dateien der Hopsa-Website arbeiten kannst.

### Ein Projekt in VS Code öffnen

Um mit der Hopsa-Website zu arbeiten, musst du zuerst den gesamten Projektordner in VS Code öffnen:

1. **Starte VS Code**: Öffne VS Code über das Startmenü oder Desktop-Symbol.

2. **Öffne einen Ordner**: Klicke auf "Datei > Ordner öffnen..." oder drücke `Strg+K Strg+O`.

3. **Navigiere zum Hopsa-Website-Ordner**: Finde den Ordner, in dem du das Hopsa-Repository gespeichert hast (z.B. "C:\Users\DeinName\Dokumente\hopsa-berlin") und klicke auf "Ordner auswählen".

4. **Der Explorer wird geöffnet**: In der Seitenleiste siehst du jetzt alle Dateien und Ordner des Projekts.

### Navigation im Explorer

Der Explorer (die Dateiansicht) ist ein zentraler Bereich in VS Code, mit dem du durch das Projekt navigieren kannst:

1. **Ordnerstruktur**: Ordner werden mit einem Pfeilsymbol angezeigt. Klicke auf den Pfeil, um den Inhalt eines Ordners anzuzeigen oder zu verbergen.

2. **Dateien öffnen**: Klicke einfach auf eine Datei, um sie im Editor zu öffnen.

3. **Kontextmenü**: Rechtsklicke auf eine Datei oder einen Ordner, um zusätzliche Optionen zu sehen (z.B. Umbenennen, Löschen, Neue Datei).

4. **Dateien suchen**: Mit der Suchfunktion (`Strg+F` im Explorer) kannst du schnell bestimmte Dateien finden.

### Die wichtigsten Dateien für deine Arbeit

Für die tägliche Arbeit mit der Hopsa-Website wirst du hauptsächlich mit diesen Dateien und Ordnern interagieren:

- **src/**: Hier befinden sich die Quelldateien der Website.
  - **index.md**: Die Startseite der Website.
  - **termine.md**: Die Terminseite, auf der du Veranstaltungen verwalten kannst.
  - **ensemble.md**: Informationen über das Ensemble.
  - **kontakt.md**: Kontaktinformationen.
  - **src/assets/**: Hier werden Bilder und andere Medien gespeichert.

> **Wichtig zu wissen:**  
> Bearbeite niemals Dateien im docs/-Ordner direkt! Dieser Ordner wird automatisch generiert und deine Änderungen würden beim nächsten Generieren überschrieben werden.

### Mit Dateien arbeiten

Nachdem du eine Datei geöffnet hast, kannst du ihren Inhalt im Editor bearbeiten:

1. **Text bearbeiten**: Klicke einfach an die Stelle, an der du etwas ändern möchtest, und beginne zu tippen.

2. **Mehrere Dateien gleichzeitig**: Du kannst mehrere Dateien in verschiedenen Tabs öffnen und zwischen ihnen wechseln.

3. **Geteilte Ansicht**: Mit Rechtsklick auf einen Tab und "Ansicht teilen" kannst du zwei Dateien nebeneinander anzeigen lassen.

4. **Speichern**: Drücke `Strg+S`, um deine Änderungen zu speichern (es sei denn, du hast Auto Save aktiviert).

### Markdown-Vorschau

Da die meisten Inhalte der Hopsa-Website in Markdown geschrieben sind, ist die Markdown-Vorschau besonders nützlich:

1. **Vorschau öffnen**: Wenn du eine Markdown-Datei (.md) geöffnet hast, klicke oben rechts im Editor auf das Symbol mit dem Auge oder drücke `Strg+Shift+V`.

2. **Geteilte Ansicht**: Du kannst den Editor und die Vorschau nebeneinander sehen, sodass du direkt verfolgen kannst, wie deine Änderungen aussehen werden.

3. **Synchronisierte Scrolling**: Die Vorschau scrollt automatisch mit, wenn du im Editor scrollst, damit du immer den relevanten Abschnitt siehst.

> **Was ist Markdown nochmal?**  
> Markdown ist eine einfache Auszeichnungssprache, die es ermöglicht, Texte zu formatieren, ohne komplizierte HTML-Tags verwenden zu müssen. Du kannst Überschriften mit # erstellen, Text mit **Sternchen** fett oder *kursiv* machen und vieles mehr. In Kapitel 6 gehen wir noch ausführlicher auf Markdown ein.

## VS Code und GitHub verbinden

Ein wichtiger Schritt für die Arbeit mit der Hopsa-Website ist die Verbindung von VS Code mit GitHub. Dadurch kannst du deine Änderungen direkt aus VS Code heraus veröffentlichen.

### Was du dafür brauchst

Bevor du beginnen kannst, stelle sicher, dass du Folgendes hast:

1. Ein GitHub-Konto (wie in Kapitel 3 beschrieben)
2. Zugriff auf das Hopsa-Repository
3. Git auf deinem Computer installiert (wird im nächsten Abschnitt erklärt)

### Git installieren

Git ist die Technologie, die hinter GitHub steht und die Versionskontrolle ermöglicht. VS Code benötigt Git, um mit GitHub zu kommunizieren:

1. **Besuche die Git-Website**: Gehe zu [git-scm.com](https://git-scm.com/).

2. **Lade Git herunter**: Klicke auf "Download for Windows" und wähle die neueste Version aus.

3. **Führe die Installationsdatei aus**: Nach dem Download doppelklicke auf die Datei, um die Installation zu starten.

4. **Folge dem Installationsassistenten**: Die Standardeinstellungen sind in der Regel in Ordnung. Achte besonders auf diese Optionen:
   - Bei "Adjusting your PATH environment" wähle "Git from the command line and also from 3rd-party software"
   - Bei "Choosing HTTPS transport backend" wähle "Use the OpenSSL library"
   - Bei "Configuring the line ending conversions" wähle "Checkout Windows-style, commit Unix-style line endings"

5. **Schließe die Installation ab**: Klicke weiter durch den Assistenten und dann auf "Fertigstellen".

> **Was ist Git?**  
> Git ist ein Versionskontrollsystem, das Änderungen an Dateien verfolgt und es mehreren Personen ermöglicht, gleichzeitig an denselben Dateien zu arbeiten, ohne sich gegenseitig zu überschreiben. Es ist wie eine Zeitmaschine für deine Dateien – du kannst jederzeit zu früheren Versionen zurückkehren.

### GitHub in VS Code einrichten

Nach der Installation von Git kannst du VS Code mit GitHub verbinden:

1. **Öffne die Quellcodeverwaltung**: Klicke auf das Git-Symbol in der Aktivitätsleiste oder drücke `Strg+Shift+G`.

2. **Melde dich bei GitHub an**: Klicke auf "Bei GitHub anmelden" und folge den Anweisungen. Du wirst zu GitHub weitergeleitet, um deine Anmeldung zu bestätigen.

3. **Autorisiere VS Code**: Erlaube VS Code den Zugriff auf dein GitHub-Konto.

4. **Kehre zu VS Code zurück**: Nach erfolgreicher Anmeldung wirst du automatisch zu VS Code zurückgeleitet.

### Das Hopsa-Repository klonen

Als Nächstes musst du das Hopsa-Repository auf deinen Computer "klonen" (herunterladen), um daran zu arbeiten:

1. **Öffne die Befehlspalette**: Drücke `Strg+Shift+P` und gib "Git: Clone" ein.

2. **Füge die Repository-URL ein**: Gib die URL des Hopsa-Repositories ein (z.B. "https://github.com/username/hopsa-berlin.git") und drücke Enter.

3. **Wähle einen Speicherort**: Wähle einen Ordner auf deinem Computer, in dem du das Repository speichern möchtest.

4. **Öffne das geklonte Repository**: Nach dem Klonen fragt VS Code, ob du das Repository öffnen möchtest. Klicke auf "Open".

> **Was ist Klonen?**  
> Klonen bedeutet, eine komplette Kopie eines Repositories von GitHub auf deinen Computer herunterzuladen. Es ist wie das Herunterladen der gesamten Website-Dateien samt ihrer Versionsgeschichte. Nachdem du ein Repository geklont hast, kannst du lokal daran arbeiten und deine Änderungen später wieder zu GitHub hochladen.

## Grundlegende Git-Operationen in VS Code

Nachdem du das Repository geklont hast, kannst du mit der Bearbeitung beginnen. Hier sind die grundlegenden Git-Operationen, die du in VS Code durchführen kannst:

### Änderungen überprüfen

Nach dem Bearbeiten einer Datei zeigt VS Code die Änderungen in der Quellcodeverwaltungsansicht an:

1. **Öffne die Quellcodeverwaltung**: Klicke auf das Git-Symbol in der Aktivitätsleiste.

2. **Sieh dir die Änderungen an**: Unter "Änderungen" siehst du alle Dateien, die du geändert hast.

3. **Detaillierte Änderungen anzeigen**: Klicke auf eine geänderte Datei, um zu sehen, was genau du geändert hast. Gelöschte Zeilen werden rot, neue Zeilen grün angezeigt.

### Änderungen committen (speichern)

Ein "Commit" ist wie ein Speicherpunkt in der Geschichte deiner Dateien:

1. **Gib eine Commit-Nachricht ein**: Schreibe eine kurze Beschreibung deiner Änderungen in das Textfeld über dem "Commit"-Button (z.B. "Termine aktualisiert" oder "Neue Bilder hinzugefügt").

2. **Wähle Dateien aus**: Wenn du nur bestimmte Dateien committen möchtest, klicke auf das "+"-Symbol neben der Datei, um sie zum "Staging-Bereich" hinzuzufügen. Wenn du alle Änderungen committen möchtest, überspringe diesen Schritt.

3. **Commit erstellen**: Klicke auf den "Commit"-Button (oder "Commit All", wenn du nicht einzelne Dateien ausgewählt hast).

> **Was ist ein Commit?**  
> Ein Commit ist wie ein Schnappschuss deiner Dateien zu einem bestimmten Zeitpunkt. Jeder Commit hat eine eindeutige ID und eine Nachricht, die beschreibt, was geändert wurde. Commits ermöglichen es dir, die Geschichte deiner Änderungen zu verfolgen und bei Bedarf zu früheren Versionen zurückzukehren.

### Änderungen pushen (hochladen)

Nach dem Commit sind deine Änderungen nur auf deinem Computer gespeichert. Um sie auf GitHub zu veröffentlichen, musst du sie "pushen":

1. **Klicke auf "Push"**: In der Quellcodeverwaltungsansicht findest du oben eine Schaltfläche mit einem Pfeil nach oben (oder "Sync Changes").

2. **Bestätige den Push**: VS Code kann dich nach deinen GitHub-Anmeldedaten fragen. Gib diese ein, wenn du dazu aufgefordert wirst.

3. **Warte auf die Bestätigung**: VS Code zeigt dir an, wenn der Push erfolgreich war.

> **Was bedeutet Pushen?**  
> Pushen bedeutet, deine lokalen Commits zu GitHub hochzuladen, sodass sie für alle zugänglich sind, die Zugriff auf das Repository haben. Erst nach dem Pushen werden deine Änderungen auf der öffentlichen Website sichtbar (nachdem GitHub Pages sie verarbeitet hat).

### Änderungen pullen (herunterladen)

Wenn andere Personen Änderungen am Repository vorgenommen haben, kannst du diese mit "Pull" herunterladen:

1. **Klicke auf "Pull"**: In der Quellcodeverwaltungsansicht findest du eine Schaltfläche mit einem Pfeil nach unten.

2. **Warte auf die Aktualisierung**: VS Code zeigt dir an, wenn der Pull erfolgreich war und welche Dateien aktualisiert wurden.

> **Was ist Pullen?**  
> Pullen bedeutet, die neuesten Änderungen von GitHub auf deinen Computer herunterzuladen. Es ist wichtig, regelmäßig zu pullen, besonders wenn mehrere Personen am selben Projekt arbeiten, um sicherzustellen, dass du mit der aktuellsten Version arbeitest.

## Die Build-Funktion: Die run.bat-Datei

Ein wichtiger Teil der Arbeit mit der Hopsa-Website ist die Verwendung der run.bat-Datei, um die Website lokal zu testen, bevor du deine Änderungen veröffentlichst. In VS Code kannst du diese Datei direkt aus dem integrierten Terminal ausführen:

1. **Öffne das Terminal**: Gehe zu "Terminal > Neues Terminal" im Menü oder drücke `Strg+` (Backtick, die Taste links neben der 1).

2. **Navigiere zum Projektordner**: Wenn das Terminal nicht automatisch im richtigen Ordner geöffnet wird, navigiere mit dem `cd`-Befehl dorthin: `cd Pfad\zum\hopsa-berlin-Ordner`.

3. **Führe run.bat aus**: Tippe einfach run.bat ins Terminal und drücke Enter.

4. **Warte auf die Bestätigung**: Die Website wird nun gebaut und ein lokaler Server gestartet. Du siehst im Terminal eine Meldung wie "Server is running at http://localhost:8080".

5. **Öffne die lokale Vorschau**: Öffne einen Browser und gehe zu http://localhost:8080, um deine lokale Version der Website zu sehen.

> **Was macht run.bat genau?**  
> Die run.bat-Datei führt mehrere Befehle aus:
> 1. Sie kopiert die notwendigen Dateien in den docs-Ordner
> 2. Sie generiert das Design (CSS) für die Website
> 3. Sie startet einen lokalen Webserver auf deinem Computer
> 4. Sie überwacht Änderungen und aktualisiert die Vorschau automatisch
>
> Dadurch kannst du deine Änderungen sofort sehen, ohne sie zuerst zu GitHub hochladen zu müssen.

## Häufige Fragen zu VS Code

### "VS Code sieht kompliziert aus. Brauche ich wirklich all diese Funktionen?"

Keine Sorge! Obwohl VS Code viele fortgeschrittene Funktionen für Programmierer bietet, brauchst du für die Grundlagen nur einen kleinen Teil davon. Konzentriere dich zunächst auf die Dateibearbeitung, die Markdown-Vorschau und die grundlegenden Git-Operationen. Mit der Zeit wirst du dich mit mehr Funktionen vertraut machen.

### "Was passiert, wenn ich einen Fehler mache?"

Einer der großen Vorteile von Git und GitHub ist, dass du praktisch nichts dauerhaft kaputt machen kannst:
- Ungespeicherte Änderungen kannst du rückgängig machen (`Strg+Z`)
- Commits können rückgängig gemacht werden
- Im Notfall kannst du lokale Änderungen verwerfen und neu von GitHub klonen

### "Wie bearbeite ich Bilder oder andere Nicht-Text-Dateien?"

Für Bilder und andere Mediendateien verwendest du am besten spezialisierte Programme (z.B. Bildbearbeitung). In VS Code kannst du diese Dateien zwar sehen und verwalten, aber nicht direkt bearbeiten. Du würdest zum Beispiel:
1. Ein Bild mit einem Bildbearbeitungsprogramm bearbeiten
2. Das bearbeitete Bild im assets-Ordner speichern
3. Den Verweis auf das Bild in einer Markdown-Datei einfügen
4. Die Änderungen committen und pushen

### "Muss ich jedes Mal run.bat ausführen, wenn ich etwas ändere?"

Nein, run.bat startet einen Server, der automatisch auf Änderungen achtet. Du musst es nur einmal ausführen und kannst dann beliebig viele Änderungen vornehmen – die Vorschau im Browser wird automatisch aktualisiert. Erst wenn du VS Code schließt und später wieder öffnest, musst du run.bat erneut ausführen.

## ChatGPT als VS Code-Helfer

Bei Fragen oder Problemen mit VS Code kann ChatGPT eine große Hilfe sein. Hier sind einige nützliche Prompts:

```
"Wie kann ich in VS Code eine bestimmte Datei finden, wenn ich nicht weiß, in welchem Ordner sie ist?"

"Ich möchte ein Bild in die Hopsa-Website einfügen. Wie mache ich das in VS Code?"

"Wie kann ich sehen, ob meine Änderungen erfolgreich zu GitHub gepusht wurden?"

"Was bedeutet diese Fehlermeldung in VS Code: [Fehlermeldung einfügen]"

"Wie kann ich in VS Code mehrere Dateien gleichzeitig bearbeiten?"
```

> **Tipp für hilfreiche Antworten:**  
> Wenn du Probleme mit VS Code hast, beschreibe so genau wie möglich, was du tun möchtest und was nicht funktioniert. Screenshots und genaue Fehlermeldungen sind besonders hilfreich, damit ChatGPT dir zielgerichtete Hilfe geben kann.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Was Visual Studio Code ist und warum wir es für die Hopsa-Website verwenden
- Wie du VS Code installierst und einrichtest
- Welche Erweiterungen deine Arbeit erleichtern können
- Wie du dich in der VS Code-Benutzeroberfläche zurechtfindest
- Wie du VS Code mit GitHub verbindest
- Wie du grundlegende Git-Operationen durchführst
- Wie du mit der run.bat-Datei arbeitest, um die Website lokal zu testen

Du hast jetzt ein leistungsstarkes Werkzeug in deinem Arsenal, mit dem du die Hopsa-Website effizient bearbeiten kannst. Im nächsten Kapitel geht es darum, wie du dein lokales Setup einrichtest und die Website auf deinem eigenen Computer testest, bevor du Änderungen veröffentlichst.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Die Hopsa-Website lokal bearbeiten und testen" zeigen wir dir, wie du dein lokales Setup einrichtest, den Build-Prozess startest und deine Änderungen in Echtzeit siehst.

# 5. Die Hopsa-Website lokal bearbeiten und testen

## Dein persönlicher Spielplatz für die Website

Herzlich willkommen zu Kapitel 5 unseres Leitfadens! Nachdem du nun weißt, was die Hopsa-Website ist, wie sie aufgebaut ist und wie du Visual Studio Code als Werkzeug nutzen kannst, wird es Zeit für das eigentliche Bearbeiten der Website. In diesem Kapitel zeigen wir dir, wie du die Website auf deinem eigenen Computer (also "lokal") anzeigen, bearbeiten und testen kannst, bevor du deine Änderungen für alle sichtbar veröffentlichst.

> **Das Wichtigste zuerst**: Um die Hopsa-Website zu bearbeiten, musst du sie zunächst auf deinem Computer zum Laufen bringen. Mit der run.bat-Datei kannst du einen lokalen Webserver starten, der dir die Website in deinem Browser anzeigt - ohne dass deine Änderungen schon im Internet sichtbar sind. So kannst du in Ruhe experimentieren!

### Was wir in diesem Kapitel behandeln:
- Wie du das Hopsa-Repository auf deinen Computer bekommst
- Wie du die Website mit wenigen Klicks lokal startest
- Wie du deine Änderungen sofort im Browser siehst
- Typische Probleme und ihre Lösungen
- Die Unterschiede zwischen lokaler Vorschau und veröffentlichter Website

## Dein lokales Setup einrichten

Bevor du mit dem Bearbeiten der Website beginnen kannst, musst du eine lokale Arbeitsumgebung auf deinem Computer einrichten. Das bedeutet, dass du das gesamte Website-Projekt herunterlädst und auf deinem Computer zum Laufen bringst.

> **Was bedeutet "lokal" in diesem Zusammenhang?**  
> "Lokal" bedeutet einfach "auf deinem eigenen Computer" - im Gegensatz zu "online", was "auf einem Server im Internet" bedeutet. Wenn du die Website lokal bearbeitest, sind deine Änderungen zunächst nur für dich sichtbar und noch nicht öffentlich im Internet.

### Das Hopsa-Repository klonen (herunterladen)

Der erste Schritt besteht darin, das Hopsa-Repository von GitHub auf deinen Computer zu laden. Dieser Prozess wird als "Klonen" bezeichnet.

> **Erinnerung:** Falls du in Kapitel 4 das Repository bereits geklont hast, kannst du diesen Abschnitt überspringen und direkt zu "Den Build-Prozess starten" gehen.

#### Option 1: Mit VS Code und GitHub-Integration (empfohlen)

1. **Öffne VS Code** auf deinem Computer.

2. **Drücke `Strg+Shift+P`** (oder `Cmd+Shift+P` auf Mac), um die Befehlspalette zu öffnen.

3. **Gib "Git: Clone" ein** und wähle diesen Befehl aus.

4. **Gib die URL des Hopsa-Repositories ein**:  
   `https://github.com/USERNAME/hopsa-berlin.git`  
   (ersetze USERNAME durch den richtigen Benutzernamen, z.B. jannikh)

5. **Wähle einen lokalen Ordner** auf deinem Computer, in dem das Repository gespeichert werden soll. Ein guter Ort ist dein Dokumente-Ordner oder ein spezieller Projektordner.

6. **Warte, bis der Klon-Vorgang abgeschlossen ist**. VS Code zeigt dir den Fortschritt an.

7. **Öffne das geklonte Repository**, wenn VS Code dich danach fragt.

#### Option 2: Mit GitHub Desktop (Alternative für Einsteiger)

Wenn dir die Integration in VS Code zu kompliziert erscheint, ist GitHub Desktop eine benutzerfreundliche Alternative:

1. **Lade GitHub Desktop herunter und installiere es** von [desktop.github.com](https://desktop.github.com/).

2. **Melde dich mit deinem GitHub-Konto an**.

3. **Klicke auf "File" → "Clone Repository"**.

4. **Wähle das Hopsa-Berlin Repository** aus der Liste oder gib die URL ein.

5. **Wähle einen lokalen Pfad** für das Repository.

6. **Klicke auf "Clone"**.

7. **Öffne das Repository in VS Code**, indem du in GitHub Desktop auf "Open in Visual Studio Code" klickst.

> **Was passiert beim Klonen?**  
> Beim Klonen wird eine vollständige Kopie aller Dateien und der gesamten Versionsgeschichte von GitHub auf deinen Computer heruntergeladen. Dies ermöglicht dir, Änderungen vorzunehmen und zu testen, bevor du sie wieder zu GitHub hochlädst.

### Die erforderliche Software installieren

Die Hopsa-Website verwendet einige spezielle Programme, um aus den Quelldateien die fertige Website zu erstellen. Diese musst du einmalig installieren:

#### Node.js installieren

Node.js ist eine Laufzeitumgebung für JavaScript, die für die Build-Tools der Hopsa-Website benötigt wird:

1. **Besuche die Node.js-Website** unter [nodejs.org](https://nodejs.org/).

2. **Lade die "LTS"-Version herunter** (LTS steht für "Long Term Support" und ist die stabilere Version).

3. **Führe den Installer aus** und folge den Anweisungen. Die Standardeinstellungen sind in der Regel in Ordnung.

4. **Überprüfe die Installation**, indem du ein neues Terminal in VS Code öffnest (`Strg+``) und folgendes eingibst:  
   ```
   node --version
   ```  
   Es sollte eine Versionsnummer erscheinen, z.B. "v16.14.2".

> **Was ist Node.js?**  
> Node.js ist eine Plattform, die es ermöglicht, JavaScript außerhalb eines Webbrowsers auszuführen. Viele moderne Webentwicklungs-Tools basieren auf Node.js. Für die Hopsa-Website wird Node.js benötigt, um die Build-Tools wie Eleventy und Tailwind CSS auszuführen, die die Website aus den Quelldateien erstellen.

#### Projektabhängigkeiten installieren

Nachdem Node.js installiert ist, musst du die spezifischen Programme (sogenannte "Abhängigkeiten") installieren, die für das Hopsa-Projekt benötigt werden:

1. **Öffne ein Terminal in VS Code** (`Strg+``, das ist die Taste links neben der 1).

2. **Stelle sicher, dass du dich im Projekt-Hauptordner befindest**. Der Pfad sollte auf den hopsa-berlin-Ordner zeigen, den du vorhin geklont hast.

3. **Führe folgenden Befehl aus**, um die Abhängigkeiten zu installieren:  
   ```
   npm install
   ```

4. **Warte, bis die Installation abgeschlossen ist**. Dies kann einige Minuten dauern, da viele Dateien heruntergeladen werden müssen.

> **Was ist npm?**  
> npm (Node Package Manager) ist ein Programm, das automatisch mit Node.js installiert wird. Es dient dazu, JavaScript-Pakete (kleine Programme und Bibliotheken) zu installieren und zu verwalten. Der Befehl `npm install` liest die Datei package.json im Projekt und installiert alle dort aufgelisteten Pakete.

#### Eleventy global installieren (optional, aber empfohlen)

Für eine reibungslosere Erfahrung empfehle ich, Eleventy (den Static Site Generator, den die Hopsa-Website verwendet) global zu installieren:

1. **Führe in einem Terminal folgenden Befehl aus**:  
   ```
   npm install -g @11ty/eleventy
   ```

2. **Überprüfe die Installation** mit:  
   ```
   eleventy --version
   ```

> **Was ist Eleventy?**  
> Eleventy ist ein statischer Website-Generator, der einfache Dateien (wie Markdown) in HTML-Seiten umwandelt. Es nimmt die Inhalte (wie Texte und Bilder) und Vorlagen aus dem src/-Ordner und generiert daraus die fertige Website im docs/-Ordner. Es ist sozusagen die "Küche", in der die Website "gekocht" wird.

## Den Build-Prozess starten

Nachdem du alle notwendigen Werkzeuge installiert hast, kannst du nun die Website auf deinem Computer zum Laufen bringen. Dafür gibt es eine praktische Datei namens **run.bat** im Hopsa-Projekt, die alle erforderlichen Schritte automatisch für dich ausführt.

### Die run.bat-Datei ausführen

Es gibt zwei einfache Möglichkeiten, die run.bat-Datei auszuführen:

#### Option 1: Direkt aus dem Datei-Explorer

1. **Öffne den Projektordner** im Windows Explorer.

2. **Doppelklicke auf die Datei** run.bat. Ein Kommandozeilenfenster wird sich öffnen, und der Build-Prozess wird gestartet.

3. **Warte, bis der Prozess abgeschlossen ist**. Du siehst eine Meldung wie "Server is running at http://localhost:8080".

#### Option 2: Aus VS Code heraus (empfohlen)

1. **Öffne VS Code** und stelle sicher, dass das Hopsa-Projekt geöffnet ist.

2. **Öffne ein Terminal in VS Code** mit `Strg+``.

3. **Führe die Datei aus**, indem du einfach eingibst:  
   ```
   run.bat
   ```  
   und Enter drückst.

4. **Warte auf die Bestätigungsmeldung** "Server is running at http://localhost:8080".

![Terminal mit laufendem Server](https://i.imgur.com/example4.png)
*So sieht es aus, wenn der lokale Server läuft*

> **Was macht run.bat genau?**  
> Die run.bat-Datei ist ein kleines Skript, das mehrere Befehle nacheinander ausführt:
> 1. Es kopiert die CNAME-Datei in den docs/-Ordner
> 2. Es kopiert die Stildateien aus src/styles/ in den docs/styles/-Ordner
> 3. Es generiert eine CSS-Datei mit Tailwind CSS
> 4. Es startet Eleventy im "serve"-Modus, der die Website lokal bereitstellt und auf Änderungen überwacht

### Auf Probleme beim Build-Prozess reagieren

Manchmal kann es beim ersten Ausführen von run.bat zu Problemen kommen. Hier sind einige häufige Probleme und ihre Lösungen:

#### Problem: "Der Befehl 'eleventy' wurde nicht gefunden"

**Lösung:** Installiere Eleventy global mit `npm install -g @11ty/eleventy`.

#### Problem: "Der Befehl 'npx' wurde nicht gefunden"

**Lösung:** Installiere Node.js neu und stelle sicher, dass du die LTS-Version verwendest.

#### Problem: "EACCES: permission denied"

**Lösung:** Führe den Befehl mit Administratorrechten aus. Öffne VS Code als Administrator oder öffne die Eingabeaufforderung als Administrator.

#### Problem: Die Website wird nicht erstellt oder der Server startet nicht

**Lösung:**
1. Stelle sicher, dass du im richtigen Verzeichnis bist (dort, wo die run.bat-Datei liegt).
2. Versuche, die einzelnen Befehle aus der run.bat-Datei nacheinander manuell auszuführen.
3. Überprüfe, ob alle Abhängigkeiten installiert sind, mit `npm install`.

> **Tipp für Fehlerbehebung:**  
> Wenn du Fehlermeldungen erhältst, kopiere sie und suche nach ihnen im Internet oder frage ChatGPT. Fehlermeldungen enthalten oft nützliche Informationen, die dir oder anderen helfen können, das Problem zu lösen.

## Deine Änderungen in Echtzeit sehen

Sobald der Build-Prozess erfolgreich gestartet wurde, kannst du die Website in deinem Browser anzeigen und Änderungen in Echtzeit sehen.

### Die lokale Website im Browser öffnen

1. **Öffne deinen bevorzugten Webbrowser** (Chrome, Firefox, Edge, etc.).

2. **Gib folgende Adresse in die Adressleiste ein**:  
   ```
   http://localhost:8080
   ```

3. **Drücke Enter**, und du solltest die Hopsa-Website sehen – genauso wie sie online aussieht, aber jetzt auf deinem eigenen Computer!

> **Was bedeutet localhost:8080?**  
> "localhost" ist ein spezieller Name, der auf deinen eigenen Computer verweist (es ist wie das "zu Hause" deines Computers). "8080" ist die Portnummer, die angibt, welcher "Eingang" für den Webserver verwendet wird. Zusammen bilden sie die Adresse, unter der du deine lokale Website erreichen kannst.

### Erste Änderungen vornehmen und beobachten

Jetzt wird es spannend! Lass uns eine kleine Änderung vornehmen und sehen, wie sie sofort im Browser aktualisiert wird:

1. **Öffne VS Code** und navigiere zu index.md im Explorer (linke Seitenleiste).

2. **Öffne die Datei** mit einem Klick.

3. **Füge etwas Text hinzu** oder ändere etwas Bestehendes. Zum Beispiel könntest du ein Ausrufezeichen am Ende eines Satzes hinzufügen.

4. **Speichere die Datei** mit `Strg+S`.

5. **Wechsle zum Browser** und beobachte, wie die Seite automatisch neu geladen wird und deine Änderung anzeigt!

![Browser zeigt die geänderte Seite](https://i.imgur.com/example5.png)
*So könnte deine lokale Vorschau aussehen*

> **Was ist Live-Reload?**  
> Die automatische Aktualisierung im Browser wird als "Live-Reload" bezeichnet. Es ist eine praktische Funktion, die Eleventy bietet – sobald du eine Datei speicherst, wird die Änderung erkannt, die Website neu gebaut und dein Browser automatisch aktualisiert. So siehst du sofort, wie deine Änderungen aussehen, ohne den Browser manuell neu laden zu müssen.

### Tiefergehende Änderungen ausprobieren

Nachdem du gesehen hast, wie einfache Änderungen funktionieren, kannst du etwas mehr experimentieren:

#### Beispiel 1: Den Haupt-Titel ändern

1. Öffne index.md in VS Code.
2. Finde den Titel-Bereich (normaleweise nahe dem Anfang der Datei).
3. Ändere den Titel leicht ab oder füge ein Adjektiv hinzu.
4. Speichere die Datei und sieh dir die Änderung im Browser an.

#### Beispiel 2: Ein Bild ändern

1. Öffne ensemble.md in VS Code.
2. Sieh dir an, wie die Bilder eingebunden sind (z.B. mit `<img src="/assets/team/jannik.webp" alt="..."`).
3. Ändere den Alt-Text eines Bildes (das ist der Text in den Anführungszeichen nach `alt=`).
4. Speichere die Datei und sieh dir die Änderung im Browser an (der Alt-Text wird angezeigt, wenn du mit der Maus über das Bild fährst).

> **Tipp für die ersten Schritte:**  
> Beginne mit kleinen, ungefährlichen Änderungen, um ein Gefühl für den Prozess zu bekommen. So kannst du sicher üben, ohne Angst haben zu müssen, etwas kaputt zu machen. Denk daran: Solange du die Änderungen nicht zu GitHub hochlädst, bleiben sie nur auf deinem Computer und sind für niemanden sonst sichtbar.

## Die wichtigsten Dateien zum Bearbeiten

Jetzt, wo du weißt, wie du Änderungen vornehmen und anzeigen kannst, schauen wir uns die wichtigsten Dateien an, die du wahrscheinlich am häufigsten bearbeiten wirst.

### Die Startseite: index.md

Die Datei index.md enthält den Inhalt der Startseite. Sie ist in Markdown geschrieben, einer einfachen Auszeichnungssprache, die wir in Kapitel 6 genauer erklären.

```markdown
---
layout: default.njk
title: Willkommen
redirect: [home, landing, start, hopsa]
---

<div class="flex flex-col justify-center items-center min-h-screen mx-auto text-center">

{% include "landingpage.md" %}

</div>

# 

<div class="mt-4 text-lg flex items-center w-full justify-center">
...
```

Der Bereich zwischen den `---` am Anfang enthält Metadaten über die Seite (Layout, Titel, Weiterleitungen). Der Rest ist der eigentliche Inhalt.

### Die Termine-Seite: termine.md

In der Datei termine.md verwaltest du die anstehenden Veranstaltungen und Auftritte. Sie bindet eine spezielle Vorlage ein, die wir später genauer betrachten werden.

```markdown
---
layout: default-serif.njk
title: Auftritte & Termine
redirect: [termin, kalender, aufführungen, ...]
---

# Nächste Aufführungen

<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2 lg:w-1/2 md:pr-4 -mt-6">
        {% include "termine.md" %}
    </div>
    ...
```

### Das Ensemble: ensemble.md

Die Datei ensemble.md enthält Informationen über das Hopsa-Team. Hier kannst du die Beschreibungen und Bilder der Teammitglieder aktualisieren.

```markdown
---
layout: default-centered-serif.njk
title: Ensemble
redirect: [galerie, ueber-uns, fotos, ...]
---

# Ensemble

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div><img class="max-w-1/2 mx-auto" src="/assets/team/jannik.webp" alt="Hopsa-Team-Mitglied Jannik"></div>
    <div><img class="max-w-1/2 mx-auto" src="/assets/team/lilli.webp" alt="Hopsa-Team-Mitglied Lilli"></div>
    ...
```

### Die Kontaktseite: kontakt.md

In der Datei kontakt.md sind die Kontaktinformationen und Anfragemöglichkeiten hinterlegt.

```markdown
---
layout: default-serif.njk
title: Kontakt
redirect: [contact, presse, anfrage, ...]
---

# Kontakt

<div class="italic mb-20">

#### Buchungsanfragen:

<p>Für Anfragen zur Buchung des <a href="/ensemble">Hopsa-Ensembles</a> für Ihre Veranstaltung, ...</p>
...
```

> **Was sind diese .md-Dateien genau?**  
> Die .md-Dateien sind Markdown-Dateien, die den Hauptinhalt der Website enthalten. Markdown ist eine einfache Auszeichnungssprache, mit der du formatierten Text erstellen kannst, ohne komplizierte HTML-Tags verwenden zu müssen. In Kapitel 6 werden wir genauer auf Markdown eingehen.

### Veranstaltungen verwalten mit termine.njk und termine.md

Die Termine werden etwas anders verwaltet als die anderen Inhalte. Es gibt zwei wichtige Dateien:

#### termine.njk

Diese Datei enthält eine Vorlage, wie neue Veranstaltungen hinzugefügt werden sollen. Es ist eine Art "Schablone" für Veranstaltungen:

```nunjucks
{% macro neuesEvent(titel="Hopsa-Aufführung", datum="Datum wird noch mit geteilt", uhrzeit="Details sind noch in Planung", veranstaltungsort="Veranstaltungsort siehe Instagram", adresse="Adresse wird auf Instagram", eintritt="Eintritt auf Spendenbasis", kategorie="Auftritt", link="#", deaktivieren=false) %}

{% if not deaktivieren %}

### {{ titel }}

<h4 class="-mt-2 mb-2">{{ kategorie }}: {{ datum }} | {{ uhrzeit }} </h4>

<a href="{{ link }}" target="_blank">{{ veranstaltungsort }}</a>:
<a href="http://maps.google.com/maps?mrt=loc&q={{ adresse | urlencode }}&output=kml" target="_blank">{{ adresse }}</a>

<p class="mt-2">{{ eintritt }}</p>

### 
-------------------
{% endif %}
{% endmacro %}
```

#### termine.md

Diese Datei verwendet die Vorlage, um tatsächliche Veranstaltungen anzulegen:

```markdown
{% import "termine.njk" as termine %}

{{ termine.neuesEvent(
    titel="Pirata Patata",
    datum="07.01.2024",
    uhrzeit="20:00",
    veranstaltungsort="Pirata Patata",
    link="https://www.instagram.com/pirata.patata/",
    adresse="Kohlfurter Str. 33, 10999 Berlin",
    deaktivieren=true
)}}

{{ termine.neuesEvent(
    titel="Valentinstagspecial: Hopsa Dating-Scheißerei",
    datum="14.02.2024",
    uhrzeit="20:00",
    veranstaltungsort="ARTliners",
    link="https://artliners-berlin.com/",
    adresse="Gärtnerstraße 23, 10245 Berlin"
)}}
...
```

In Kapitel 7 werden wir detailliert erklären, wie du neue Veranstaltungen hinzufügst oder bestehende änderst.

## Verständnis des Build-Prozesses

Um effektiv mit der Hopsa-Website arbeiten zu können, ist es hilfreich zu verstehen, was hinter den Kulissen passiert, wenn du run.bat ausführst.

### Der Ablauf von Quelldateien zur fertigen Website

1. **Quelldateien (src/)**  
   Der Prozess beginnt mit den Quelldateien im src/-Ordner. Diese Dateien sind das "Rezept" für die Website.

2. **Eleventy verarbeitet die Dateien**  
   Eleventy nimmt diese Quelldateien und verarbeitet sie:
   - Markdown-Dateien (.md) werden in HTML umgewandelt
   - Nunjucks-Vorlagen (.njk) werden mit Inhalten gefüllt
   - Statische Dateien (Bilder etc.) werden kopiert

3. **CSS wird generiert**  
   Tailwind CSS erstellt die Stilregeln für das Aussehen der Website.

4. **Fertige Website (docs/)**  
   Das Ergebnis ist die fertige Website im docs/-Ordner. Diese Dateien sind es, die letztendlich im Internet veröffentlicht werden.

5. **Lokaler Server**  
   Während der Entwicklung wird ein lokaler Server gestartet, der die Dateien aus dem docs/-Ordner bereitstellt und im Browser anzeigt.

> **Wichtige Erkenntnis:**  
> Du bearbeitest immer die Dateien im src/-Ordner. Die Dateien im docs/-Ordner werden automatisch generiert und sollten nie direkt bearbeitet werden, da Änderungen dort bei der nächsten Generierung überschrieben würden.

### Warum dieser Prozess wichtig ist

Dieser zweistufige Prozess (Quellcode → Generierung → Fertige Website) hat mehrere Vorteile:

1. **Einfachere Bearbeitung**: Du kannst in einfachem Markdown schreiben statt in komplexem HTML.
2. **Konsistenz**: Das Design bleibt auf allen Seiten einheitlich.
3. **Effizienz**: Gemeinsame Elemente (Header, Footer) müssen nur einmal definiert werden.
4. **Sicherheit**: Der fertige Code wird optimiert und ist sicherer.

## Häufige Probleme und Lösungen

Hier sind einige typische Probleme, die beim lokalen Bearbeiten auftreten können, und wie du sie lösen kannst:

### Problem: Der lokale Server startet nicht

**Mögliche Ursachen und Lösungen:**
1. **Node.js oder npm ist nicht richtig installiert**  
   Lösung: Installiere Node.js neu von [nodejs.org](https://nodejs.org/).

2. **Abhängigkeiten fehlen**  
   Lösung: Führe `npm install` im Projektverzeichnis aus.

3. **Ein Prozess blockiert den Port 8080**  
   Lösung: Schließe andere Anwendungen, die möglicherweise den Port verwenden, oder ändere den Port in der Eleventy-Konfiguration.

### Problem: Änderungen werden nicht angezeigt

**Mögliche Ursachen und Lösungen:**
1. **Die Datei wurde nicht gespeichert**  
   Lösung: Drücke `Strg+S`, um die Datei zu speichern.

2. **Der Browser-Cache verhindert die Aktualisierung**  
   Lösung: Drücke `Strg+F5`, um den Browser-Cache zu umgehen.

3. **Eleventy hat die Änderung nicht erkannt**  
   Lösung: Stoppe den Server (mit `Strg+C` im Terminal) und starte ihn neu mit run.bat.

### Problem: Die Website sieht im Browser nicht wie erwartet aus

**Mögliche Ursachen und Lösungen:**
1. **CSS wurde nicht richtig generiert**  
   Lösung: Überprüfe, ob die Tailwind-Befehle erfolgreich ausgeführt wurden.

2. **Markdown-Syntax ist nicht korrekt**  
   Lösung: Überprüfe deine Markdown-Syntax auf Fehler (z.B. fehlende Leerzeichen nach #).

3. **Browser-Zoom ist aktiviert**  
   Lösung: Setze den Browser-Zoom zurück auf 100% (mit `Strg+0`).

### Problem: Bilder werden nicht angezeigt

**Mögliche Ursachen und Lösungen:**
1. **Der Bildpfad ist falsch**  
   Lösung: Stelle sicher, dass der Pfad zum Bild korrekt ist. Die Pfade beginnen in der Regel mit `/assets/`.

2. **Das Bild fehlt im Ordner**  
   Lösung: Überprüfe, ob das Bild tatsächlich im angegebenen Ordner existiert.

3. **Das Bild hat einen anderen Dateinamen oder eine andere Dateierweiterung**  
   Lösung: Überprüfe den genauen Dateinamen und die Dateierweiterung (Groß-/Kleinschreibung beachten!).

> **Tipp zur Fehlerbehebung:**  
> Schaue immer in die Konsole des Browsers (F12 drücken, dann auf "Console" klicken), wenn etwas nicht wie erwartet funktioniert. Dort werden oft hilfreiche Fehlermeldungen angezeigt, die den Grund für das Problem verraten.

## Die Entwickler-Tools des Browsers nutzen

Die Entwickler-Tools deines Browsers sind ein mächtiges Hilfsmittel, um Probleme auf deiner Website zu diagnostizieren:

1. **Öffne die Entwickler-Tools** mit `F12` oder durch Rechtsklick auf die Webseite und "Untersuchen" (Firefox) bzw. "Prüfen" oder "Inspect" (Chrome, Edge).

2. **Die Elemente-/Inspector-Ansicht** zeigt den HTML-Code der aktuellen Seite und die darauf angewendeten Stile. Du kannst hier vorübergehende Änderungen vornehmen, um zu sehen, wie sie aussehen würden.

3. **Die Konsole** zeigt Fehlermeldungen und Warnungen an. Wenn etwas auf deiner Website nicht funktioniert, schaue zuerst hier nach.

4. **Die Netzwerk-/Network-Ansicht** zeigt alle geladenen Ressourcen. Wenn ein Bild nicht angezeigt wird, kannst du hier überprüfen, ob es überhaupt geladen wurde.

> **Tipp für die Fehlersuche:**  
> Die Entwickler-Tools bieten eine Funktion namens "Responsive Design Mode" oder "Toggle Device Toolbar". Damit kannst du sehen, wie die Website auf verschiedenen Bildschirmgrößen aussieht, ohne dein Browserfenster manuell verkleinern zu müssen.

## Tipps für effizientes Arbeiten

Hier sind einige Tipps, die dir helfen können, effizienter mit der Hopsa-Website zu arbeiten:

### 1. Verwende die Split-View-Funktion in VS Code

Mit VS Code kannst du den Editor in zwei oder mehr Bereiche aufteilen, um verschiedene Dateien nebeneinander zu bearbeiten:

1. Klicke mit der rechten Maustaste auf einen Tab und wähle "Split Right" oder "Split Down".
2. Wähle eine andere Datei im zweiten Editor-Bereich.

So könntest du beispielsweise die Datei, die du bearbeitest, und eine Referenz-Datei gleichzeitig sehen.

### 2. Lerne einige VS Code-Tastaturkürzel

Diese Tastaturkürzel können dir viel Zeit sparen:
- `Strg+S`: Speichern
- `Strg+P`: Schnell zu einer Datei wechseln
- `Strg+F`: Text in der aktuellen Datei suchen
- `Strg+Shift+F`: Text im ganzen Projekt suchen
- `Strg+/`: Zeile(n) auskommentieren/entkommentieren

### 3. Behalte den Browser und VS Code nebeneinander im Blick

Wenn du genug Platz auf deinem Bildschirm hast, platziere VS Code und deinen Browser nebeneinander. So kannst du Änderungen vornehmen und sofort sehen, wie sie sich auswirken, ohne zwischen den Fenstern wechseln zu müssen.

### 4. Nutze die Auto Save-Funktion

Aktiviere die Auto Save-Funktion in VS Code (wie in Kapitel 4 beschrieben), damit du dich nicht ständig daran erinnern musst, zu speichern.

### 5. Verständnis von Dateipfaden entwickeln

Dateipfade sind ein wichtiges Konzept, besonders wenn du Bilder oder Links einfügst:
- Absolute Pfade beginnen mit einem Schrägstrich: `/assets/team/jannik.webp`
- Relative Pfade beginnen ohne Schrägstrich und beziehen sich auf den aktuellen Ordner

Für die Hopsa-Website empfehle ich, immer absolute Pfade zu verwenden, da sie zuverlässiger sind.

## Der Unterschied zwischen lokaler Vorschau und veröffentlichter Website

Es ist wichtig zu verstehen, dass die lokale Vorschau und die veröffentlichte Website zwei verschiedene Dinge sind:

### Die lokale Vorschau
- Ist nur auf deinem Computer sichtbar
- Wird über `http://localhost:8080` aufgerufen
- Zeigt Änderungen sofort an
- Ist perfekt zum Experimentieren und Testen

### Die veröffentlichte Website
- Ist für alle im Internet sichtbar unter hopsa-berlin.de
- Spiegelt den Stand wider, der zuletzt zu GitHub hochgeladen wurde
- Änderungen werden erst sichtbar, nachdem du sie zu GitHub hochgeladen hast
- Ist das, was dein Publikum tatsächlich sieht

Der Prozess, um deine lokalen Änderungen auf der veröffentlichten Website sichtbar zu machen, besteht aus drei Schritten:

1. **Lokale Änderungen vornehmen und testen** (das haben wir in diesem Kapitel behandelt)
2. **Änderungen zu GitHub hochladen** (das werden wir in Kapitel 11 behandeln)
3. **Warten, bis GitHub Pages die Website aktualisiert** (dauert normalerweise 1-5 Minuten)

> **Wichtig zu wissen:**  
> Solange du deine Änderungen nicht zu GitHub hochlädst, bleiben sie nur auf deinem Computer und sind für niemanden sonst sichtbar. Das gibt dir die Freiheit, nach Herzenslust zu experimentieren!

## ChatGPT als Helfer bei lokalen Problemen

ChatGPT kann ein wertvoller Helfer sein, wenn du auf Probleme mit deiner lokalen Entwicklungsumgebung stößt. Hier sind einige nützliche Prompts:

```
"Ich bekomme beim Ausführen von run.bat folgende Fehlermeldung: [Fehlermeldung einfügen]. Was kann ich tun?"

"Wie kann ich überprüfen, ob Node.js richtig auf meinem Computer installiert ist?"

"Mein Browser zeigt die Änderungen nicht an, obwohl ich die Datei gespeichert habe. Was kann ich tun?"

"Kann ich den lokalen Server auf einem anderen Port als 8080 laufen lassen? Wie mache ich das?"

"Ich möchte überprüfen, ob ein bestimmtes Bild im richtigen Ordner liegt. Wie finde ich das heraus?"
```

> **Tipp für hilfreiche Antworten:**  
> Wenn du ChatGPT um Hilfe bei technischen Problemen bittest, sei so spezifisch wie möglich. Kopiere Fehlermeldungen vollständig und beschreibe genau, was du getan hast und was passiert ist. Je mehr Kontext du lieferst, desto besser kann ChatGPT dir helfen.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie du das Hopsa-Repository auf deinen Computer klonst
- Wie du die notwendige Software installierst
- Wie du den lokalen Server mit run.bat startest
- Wie du Änderungen vornimmst und sie sofort im Browser siehst
- Welche Dateien für verschiedene Teile der Website wichtig sind
- Wie der Build-Prozess funktioniert
- Wie du häufige Probleme lösen kannst

Du hast nun die grundlegenden Fertigkeiten, um die Hopsa-Website lokal zu bearbeiten und zu testen. Das ist ein wichtiger Schritt, denn so kannst du in einer sicheren Umgebung experimentieren, bevor du deine Änderungen veröffentlichst.

Im nächsten Kapitel werden wir uns mit dem eigentlichen Bearbeiten der Website-Inhalte befassen. Du wirst lernen, wie du Text formatierst, Bilder hinzufügst, Links aktualisierst und vieles mehr – alles mit der einfachen Markdown-Syntax.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Website-Inhalte bearbeiten - Der einfache Weg" lernst du, wie du mit Markdown Text formatierst, Bilder hinzufügst und Links aktualisierst. Du wirst sehen, wie einfach es ist, die Inhalte der Hopsa-Website zu bearbeiten!

# 6. Website-Inhalte bearbeiten - Der einfache Weg

## Deine Website zum Leben erwecken

Herzlich willkommen zu Kapitel 6 unseres Leitfadens! Nachdem du in den vorherigen Kapiteln gelernt hast, wie du deine Website lokal einrichtest und anzeigst, wird es nun Zeit, die eigentlichen Inhalte zu bearbeiten. In diesem Kapitel zeigen wir dir, wie du Texte ändert, Bilder hinzufügst und Links aktualisierst - alles mithilfe von Markdown, einer besonders einfachen und intuitiven Textformatierung.

> **Das Wichtigste zuerst**: Die meisten Inhalte der Hopsa-Website sind in Markdown geschrieben, einer einfachen Formatierungssprache. Du musst keine komplizierte Programmierung lernen - mit ein paar einfachen Zeichen kannst du Überschriften, fetten Text, Listen und Links erstellen. In diesem Kapitel lernst du alles, was du brauchst, um die Hopsa-Website nach deinen Wünschen zu gestalten!

### Was wir in diesem Kapitel behandeln:
- Wie du mit Markdown Texte einfach und schön formatierst
- Wie du die wichtigsten Seiten der Website bearbeitest
- Wie du Bilder hinzufügst und austauschst
- Wie du Links zu anderen Seiten oder sozialen Medien erstellst
- Praktische Beispiele und typische Herausforderungen

## Markdown verstehen - Die einfache Textformatierung

Bevor wir uns an die eigentlichen Seiten machen, schauen wir uns an, was Markdown ist und wie du es nutzen kannst, um Inhalte zu formatieren.

### Was ist Markdown und warum ist es so praktisch?

Markdown ist eine einfache Auszeichnungssprache, mit der du Texte formatieren kannst, ohne komplizierte HTML-Tags oder ein spezielles Programm wie Word zu benötigen. Du schreibst einfach normalen Text und fügst ein paar spezielle Zeichen hinzu, um dem Computer mitzuteilen, wie der Text formatiert werden soll.

> **Was ist eine Auszeichnungssprache?**  
> Eine Auszeichnungssprache ist eine Art Schreibweise, bei der du dem Text bestimmte Formatierungsanweisungen hinzufügst. HTML ist die bekannteste Auszeichnungssprache für Webseiten, aber sie ist komplex mit vielen Tags wie `<p>`, `<h1>`, `<strong>` etc. Markdown ist deutlich einfacher und wurde entwickelt, damit auch Menschen ohne technisches Wissen leicht formatierte Texte erstellen können.

### Die Grundlagen von Markdown

Hier sind die wichtigsten Markdown-Formatierungen, die du für die Hopsa-Website benötigen wirst:

#### Überschriften

Um Überschriften zu erstellen, verwendest du das Rautezeichen (`#`):

```markdown
# Überschrift 1 (sehr groß)
## Überschrift 2
### Überschrift 3
#### Überschrift 4 (kleiner)
```

So sehen diese Überschriften auf der Hopsa-Website aus:
- `# Überschrift 1` wird zu einer großen Hauptüberschrift wie "Ensemble" auf der Ensemble-Seite
- `### Überschrift 3` wird zu einer kleineren Überschrift wie "In Action" auf derselben Seite

> **Tipp für Überschriften:**  
> Achte darauf, nach dem Rautezeichen ein Leerzeichen einzufügen: `# Überschrift` (richtig) vs. `#Überschrift` (falsch). Bei der Hopsa-Website werden Überschriften der Stufe 1 (`#`) in großem, weißlichem Text dargestellt, während kleinere Überschriften andere Formatierungen haben.

#### Text hervorheben

Um Text hervorzuheben, kannst du ihn **fett** oder *kursiv* machen:

```markdown
**Dieser Text wird fett dargestellt**
*Dieser Text wird kursiv dargestellt*
```

Ein Beispiel aus der Hopsa-Website ist auf der Improvisation-Seite zu finden:
`Das **Improvisationstheater (Theatersport)** als eigenes Genre...`

#### Listen erstellen

Listen sind eine großartige Möglichkeit, Informationen übersichtlich darzustellen. Es gibt zwei Arten:

**Ungeordnete Listen** (mit Punkten):
```markdown
- Erster Punkt
- Zweiter Punkt
- Dritter Punkt
```

**Geordnete Listen** (mit Zahlen):
```markdown
1. Erster Schritt
2. Zweiter Schritt
3. Dritter Schritt
```

Ein Beispiel aus der Kurs-Seite:
```markdown
#### Freue dich in den Proben auf:
<ul class="space-y-2 list-disc list-inside pl-2">
    <li>Körper-, Stimm- und Assoziationsübungen</li>
    <li>Lachyoga & FreiTanzen</li>
    <li>das Austesten von Emotionen, Charakteren & Perspektiven</li>
    <li>Impulsarbeit</li>
</ul>
```

> **Warum hier HTML statt Markdown?**  
> In diesem Beispiel siehst du HTML (`<ul>`, `<li>`) anstelle von Markdown-Listen. Das ist völlig in Ordnung! Markdown und HTML können miteinander gemischt werden, wenn du spezielle Formatierungen brauchst, die mit reinem Markdown nicht möglich sind. In diesem Fall wurden CSS-Klassen hinzugefügt, um den Abstand und das Aussehen der Liste zu steuern.

#### Links erstellen

Links sind essenziell für eine gute Website, um auf andere Seiten oder externe Ressourcen zu verweisen:

```markdown
[Text, der als Link erscheint](URL oder Pfad)
```

Ein Beispiel aus der termine.md:
```markdown
<a href="/kurs">Weitere Infos</a>
```

> **Markdown vs. HTML für Links:**  
> Obwohl Markdown für Links die Syntax `Text` verwendet, siehst du in der Hopsa-Website oft HTML-Links mit `<a href="URL">Text</a>`. Beide Formate funktionieren, aber HTML-Links erlauben zusätzliche Attribute wie `target="_blank"`, um Links in einem neuen Tab zu öffnen.

#### Bilder einfügen

Bilder werden ähnlich wie Links eingefügt, nur mit einem Ausrufezeichen davor:

```markdown
![Alternativer Text für das Bild](Pfad zum Bild)
```

Ein Beispiel aus der ensemble.md:
```markdown
<img class="max-w-1/2 mx-auto" src="/assets/team/jannik.webp" alt="Hopsa-Team-Mitglied Jannik">
```

Hier wurde wieder HTML statt Markdown verwendet, um zusätzliche CSS-Klassen für die Bildgröße und -ausrichtung hinzuzufügen.

### Markdown und HTML kombinieren

Wie du bereits gesehen hast, wird in der Hopsa-Website oft Markdown mit HTML kombiniert. Das ist eines der großen Vorteile von Markdown: Du kannst es mit HTML mischen, wenn du speziellere Formatierungen benötigst.

Hier ein Beispiel aus der landingpage.md:

```markdown
<i>
Wir haben uns im Mai 2023 zusammengefunden und sind eine <a href="/ensemble">bunt gemischte Truppe</a> aus Impro-Neulingen und Menschen mit ein wenig Theater-Erfahrung.

Unser Motto: *„Ein Spiel Aller für Alle"* (Max Herrmann). Wir stellen uns Träumen und Albträumen und Leidenschaften. Wir freuen uns auf das Ungewisse, was dringlich wartet.
</i>
```

In diesem Beispiel wird:
- HTML verwendet, um den gesamten Text kursiv zu setzen (`<i>...</i>`)
- Ein HTML-Link erstellt (`<a href="/ensemble">...</a>`)
- Markdown innerhalb des HTML verwendet, um "Ein Spiel Aller für Alle" kursiv zu setzen (`*„Ein Spiel Aller für Alle"*`)

> **Tipp zur Kombination:**  
> Als Faustregel gilt: Verwende Markdown für einfache Formatierungen (Überschriften, Listen, einfache Links) und HTML, wenn du spezifischere Formatierungen oder Layouts benötigst.

### Absätze und Leerzeilen

In Markdown werden Absätze durch Leerzeilen getrennt. Um einen neuen Absatz zu beginnen, lasse einfach eine Zeile frei:

```markdown
Dies ist der erste Absatz.

Dies ist der zweite Absatz.
```

Eine Besonderheit der Hopsa-Website ist die Verwendung von einzelnen Rautezeichen (`#`) oder von `#### ` (Raute gefolgt von vier Leerzeichen), um vertikalen Abstand zu erzeugen:

```markdown
Text vor dem Abstand.

# 

Text nach dem Abstand.
```

Oder:

```markdown
Text vor dem Abstand.

#### 

Text nach dem Abstand.
```

Diese Technik wird auf verschiedenen Seiten verwendet, um die Abschnitte optisch zu trennen.

> **Was bedeutet "# " in der Hopsa-Website?**  
> Das einzelne Rautezeichen gefolgt von einem Leerzeichen erzeugt einen leeren H1-Bereich, was zu einem größeren vertikalen Abstand führt. Es ist ein cleverer Trick, um mehr Platz zwischen den Abschnitten zu schaffen, ohne komplexe CSS-Anweisungen zu benötigen.

## Die wichtigsten Seiten bearbeiten

Nachdem du jetzt die Grundlagen von Markdown kennst, schauen wir uns an, wie du die wichtigsten Seiten der Hopsa-Website bearbeiten kannst.

### Die Frontmatter-Sektion verstehen

Bevor wir in die einzelnen Seiten eintauchen, ist es wichtig zu wissen, dass jede Markdown-Datei auf der Hopsa-Website mit einem speziellen Bereich beginnt, der zwischen zwei Dreifach-Bindestrichen (`---`) eingeschlossen ist. Dieser Bereich wird als "Frontmatter" bezeichnet und enthält Metadaten über die Seite:

```markdown
---
layout: default.njk
title: Willkommen
redirect: [home, landing, start, hopsa]
---
```

> **Was ist Frontmatter?**  
> Der Frontmatter ist ein Bereich am Anfang einer Markdown-Datei, der Metadaten (Daten über die Seite selbst) enthält. In der Hopsa-Website wird er verwendet, um das Layout der Seite festzulegen, den Titel im Browser-Tab zu definieren und alternative URLs (Redirects) einzurichten. Der eigentliche Inhalt der Seite beginnt erst nach dem zweiten `---`.

Die wichtigsten Frontmatter-Einträge sind:
- `layout`: Bestimmt das grundlegende Layout der Seite (z.B. default.njk, default-serif.njk, default-centered.njk)
- `title`: Der Titel der Seite, wie er im Browser-Tab angezeigt wird
- `redirect`: Alternative URLs, unter denen die Seite erreichbar sein soll

### Die Startseite (index.md) bearbeiten

Die Startseite ist die erste Seite, die Besucher sehen. Bei der Hopsa-Website ist sie in der Datei index.md definiert. So könnte eine typische Bearbeitung aussehen:

1. **Öffne index.md in VS Code**: Navigiere im Explorer-Bereich zu index.md und klicke darauf.

2. **Frontmatter überprüfen**: Die ersten Zeilen sollten etwa so aussehen:
   ```markdown
   ---
   layout: default.njk
   title: Willkommen
   redirect: [home, landing, start, hopsa]
   ---
   ```

3. **Den Hauptinhalt bearbeiten**: Der Rest der Datei enthält den eigentlichen Inhalt der Startseite. Bei der Hopsa-Website ist die Startseite besonders interessant, da sie verschiedene Teile der Website einbindet:

   ```markdown
   <div class="flex flex-col justify-center items-center min-h-screen mx-auto text-center">

   {% include "landingpage.md" %}

   </div>

   # 

   <div class="mt-4 text-lg flex items-center w-full justify-center">
   <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/Ensemble"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Ensemble</div></a>
   <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/kurs"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg"><img src="/assets/favicon/favicon_transparent.png" alt="Hopsa Logo" class="w-6 h-6 inline -mt-2">&nbsp;Mitmachen</div></a>
   </div>
   ```

> **Was ist {% include "landingpage.md" %}?**  
> Das ist eine Nunjucks-Anweisung, die den Inhalt einer anderen Datei (in diesem Fall landingpage.md im `_includes`-Ordner) an dieser Stelle einfügt. Dies ist eine praktische Methode, um Inhalte, die auf mehreren Seiten verwendet werden, an einem Ort zu pflegen.

4. **Die eigentlichen Texte finden und bearbeiten**: Bei der Startseite werden die Haupttexte nicht direkt in index.md gespeichert, sondern in der eingebundenen Datei landingpage.md. Öffne diese Datei, um zum Beispiel den Einführungstext zu bearbeiten.

### Die Ensemble-Seite (ensemble.md) bearbeiten

Die Ensemble-Seite ist eine weitere wichtige Seite, die Informationen über das Team enthält:

1. **Öffne ensemble.md in VS Code**: Navigiere im Explorer zu ensemble.md.

2. **Teambilder und -beschreibungen bearbeiten**: Der Hauptteil dieser Seite enthält einen Grid-Bereich mit den Team-Bildern:

   ```markdown
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/jannik.webp" alt="Hopsa-Team-Mitglied Jannik"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/lilli.webp" alt="Hopsa-Team-Mitglied Lilli"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/ella.webp" alt="Hopsa-Team-Mitglied Ella"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David"></div>
   </div>
   ```

3. **Um ein Mitglied hinzuzufügen oder zu entfernen**:
   - Um ein neues Mitglied hinzuzufügen, kopiere eine der `<div><img...></div>`-Zeilen und passe den Pfad und Alt-Text an.
   - Um ein Mitglied zu entfernen, lösche die entsprechende `<div><img...></div>`-Zeile.

4. **Teambeschreibung aktualisieren**: Nach dem Bildbereich folgt ein Textabschnitt mit der Teambeschreibung:

   ```markdown
   #### 

   Wir sind Jannik, Lilli, Ella, David und haben uns im Mai 2023 zusammengefunden, als eine bunt gemischte Truppe aus Impro-Neulingen und Menschen mit ein wenig Theater-Erfahrung.
   ```

   Hier kannst du einfach den Text ändern, um neue Mitglieder hinzuzufügen oder andere Informationen zu aktualisieren.

> **Tipp für Bildpfade:**  
> Achte darauf, dass die Pfade zu den Bildern korrekt sind. Bei der Hopsa-Website beginnen die Pfade in der Regel mit `/assets/`, was auf den assets-Ordner im Stammverzeichnis der Website verweist.

### Die Termine-Seite (termine.md) bearbeiten

Die Termine-Seite ist etwas komplexer, da sie ein spezielles System zur Verwaltung von Veranstaltungen verwendet. Wir werden dies im nächsten Kapitel (Kapitel 7: Termine und Veranstaltungen verwalten) ausführlicher behandeln, aber hier ist ein kurzer Überblick:

1. **Öffne termine.md in VS Code**: Diese Datei befindet sich in termine.md.

2. **Verstehe die Struktur**: Die Termine-Seite verwendet eine besondere Einbindung:

   ```markdown
   <div class="flex flex-wrap md:flex-nowrap">
       <div class="w-full md:w-1/2 lg:w-1/2 md:pr-4 -mt-6">
           {% include "termine.md" %}
       </div>
       <div class="w-full md:w-1/2 lg:w-1/2 md:pl-4 -z-10 mt-4">
           {% include "instagram-embed.html" %}
       </div>
   </div>
   ```

   Hier siehst du, dass die eigentlichen Termine in einer separaten Datei termine.md im `_includes`-Ordner gespeichert sind.

3. **Die Termine bearbeiten**: Um die Termine selbst zu bearbeiten, müsstest du die Datei termine.md öffnen. Diese verwendet ein spezielles Format namens "Nunjucks Macro", um Veranstaltungen zu definieren:

   ```markdown
   {{ termine.neuesEvent(
       titel="Valentinstagspecial: Hopsa Dating-Scheißerei",
       datum="14.02.2024",
       uhrzeit="20:00",
       veranstaltungsort="ARTliners",
       link="https://artliners-berlin.com/",
       adresse="Gärtnerstraße 23, 10245 Berlin"
   )}}
   ```

   Wie gesagt, wir werden dieses Format im nächsten Kapitel genauer erklären.

### Die Kontakt-Seite (kontakt.md) bearbeiten

Die Kontakt-Seite ist relativ einfach zu bearbeiten:

1. **Öffne kontakt.md in VS Code**: Diese Datei befindet sich in kontakt.md.

2. **Bearbeite die Kontaktinformationen**: Der Hauptteil der Seite enthält verschiedene Abschnitte für Buchungsanfragen, künstlerische Zusammenarbeit und weitere Informationen:

   ```markdown
   <div class="italic mb-20">

   #### Buchungsanfragen:

   <p>Für Anfragen zur Buchung des <a href="/ensemble">Hopsa-Ensembles</a> für Ihre Veranstaltung, zu <a href="/kurs">Workshops</a> oder Presseanfragen können Sie gerne <a href="mailto:hopsaberlin@gmail.com?cc=hopsa@jannikh.com&subject=Anfrage%20zu%20einer%20Buchung%20%2F%20Workshop%20oder%20Presse&body=Liebes%20Hopsa-Ensemble%2C%0A%0Aich%20melde%20mich%20wegen%20einer%20Anfrage%20zu%20...">diese E-Mail-Vorlage an hopsaberlin@gmail.com verwenden</a>.</p>
   ```

3. **E-Mail-Links aktualisieren**: Besonders wichtig sind die E-Mail-Links, die als Vorlagen für Anfragen dienen. Diese haben ein spezielles Format mit Betreffzeile (`subject=`) und Nachrichtentext (`body=`):

   ```html
   <a href="mailto:hopsaberlin@gmail.com?cc=hopsa@jannikh.com&subject=Anfrage%20zu%20einer%20Buchung%20%2F%20Workshop%20oder%20Presse&body=Liebes%20Hopsa-Ensemble%2C%0A%0Aich%20melde%20mich%20wegen%20einer%20Anfrage%20zu%20...">diese E-Mail-Vorlage an hopsaberlin@gmail.com verwenden</a>
   ```

> **Was bedeuten diese seltsamen Zeichen in den E-Mail-Links?**  
> Zeichen wie `%20` und `%0A` in E-Mail-Links sind URL-kodierte Sonderzeichen. `%20` steht für ein Leerzeichen und `%0A` für einen Zeilenumbruch. Diese Kodierung ist notwendig, weil URLs keine Leerzeichen oder Zeilenumbrüche enthalten dürfen.

## Bilder hinzufügen und austauschen

Bilder sind ein wichtiger Bestandteil jeder Website. Hier erfährst du, wie du Bilder auf der Hopsa-Website hinzufügen oder austauschen kannst.

### Wo Bilder gespeichert werden

Alle Bilder der Hopsa-Website werden im Ordner assets gespeichert. Dieser Ordner hat verschiedene Unterordner für verschiedene Arten von Bildern:

- background: Hintergrundbilder
- favicon: Favicons (die kleinen Icons, die im Browser-Tab angezeigt werden)
- logos: Logos für soziale Medien und andere Plattformen
- team: Bilder der Teammitglieder

### Ein neues Bild hinzufügen

Wenn du ein neues Bild hinzufügen möchtest, folge diesen Schritten:

1. **Wähle das passende Format**:
   - Für Fotos ist JPEG (.jpg) oder WebP (.webp) am besten geeignet
   - Für Logos und Symbole mit Transparenz ist PNG (.png) besser
   - WebP (.webp) ist ein modernes Format mit guter Kompression und Qualität, das die Hopsa-Website für Teammitglieder verwendet

2. **Optimiere das Bild**: Achte darauf, dass das Bild nicht zu groß ist (idealerweise unter 500 KB), um die Ladezeit der Website zu verbessern.

3. **Kopiere das Bild in den richtigen Ordner**: Je nach Art des Bildes wähle den passenden Unterordner in assets.

4. **Verwende einen beschreibenden Dateinamen**: Wähle einen Namen, der das Bild gut beschreibt, z.B. `jannik.webp` für ein Foto von Jannik.

### Ein Bild in eine Seite einfügen

Nachdem du ein Bild in den assets-Ordner kopiert hast, kannst du es in eine Seite einfügen:

#### Mit Markdown:

```markdown
![Beschreibung des Bildes](/assets/team/neues-mitglied.webp)
```

#### Mit HTML (für mehr Kontrolle über Größe und Ausrichtung):

```html
<img src="/assets/team/neues-mitglied.webp" alt="Beschreibung des Bildes" class="max-w-1/2 mx-auto">
```

> **Was bedeuten die CSS-Klassen?**  
> Die Klassen wie `max-w-1/2` (maximale Breite 50%) und `mx-auto` (automatischer horizontaler Abstand) sind Teil von Tailwind CSS, einem CSS-Framework, das die Hopsa-Website verwendet. Sie kontrollieren das Aussehen des Bildes.

### Ein bestehendes Bild ersetzen

Um ein bestehendes Bild zu ersetzen (zum Beispiel ein Teammitglied-Foto zu aktualisieren):

1. **Benenne das neue Bild genauso wie das alte**: Wenn du zum Beispiel `jannik.webp` ersetzen möchtest, sollte dein neues Bild auch `jannik.webp` heißen.

2. **Kopiere das neue Bild in den gleichen Ordner**: Ersetze die alte Datei mit der neuen.

3. **Speichere und aktualisiere**: Nach dem Build-Prozess sollte das neue Bild angezeigt werden.

> **Tipp für Bildersetzung:**  
> Wenn du ein Bild ersetzt, ist es hilfreich, die Abmessungen (Breite und Höhe) ähnlich zu halten, damit das Layout der Seite nicht durcheinander gerät.

### Beispiel: Ein neues Teammitglied hinzufügen

Nehmen wir an, du möchtest ein neues Teammitglied namens Sophie zur Ensemble-Seite hinzufügen:

1. **Speichere das Foto**: Speichere Sophies Foto als `sophie.webp` im Ordner team

2. **Bearbeite ensemble.md**: Öffne ensemble.md und füge eine neue Zeile im Bilder-Grid hinzu:

   ```html
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/jannik.webp" alt="Hopsa-Team-Mitglied Jannik"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/lilli.webp" alt="Hopsa-Team-Mitglied Lilli"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/ella.webp" alt="Hopsa-Team-Mitglied Ella"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David"></div>
       <div><img class="max-w-1/2 mx-auto" src="/assets/team/sophie.webp" alt="Hopsa-Team-Mitglied Sophie"></div>
   </div>
   ```

3. **Aktualisiere die Beschreibung**: Ändere auch die Beschreibung unter dem Bildbereich:

   ```markdown
   #### 

   Wir sind Jannik, Lilli, Ella, David, Sophie und haben uns im Mai 2023 zusammengefunden, als eine bunt gemischte Truppe aus Impro-Neulingen und Menschen mit ein wenig Theater-Erfahrung.
   ```

4. **Speichere und überprüfe**: Speichere die Datei und überprüfe die Änderungen in deinem lokalen Browser.

## Links und Verweise aktualisieren

Links sind ein wichtiger Bestandteil jeder Website. Sie verbinden verschiedene Seiten miteinander und führen zu externen Ressourcen wie sozialen Medien.

### Arten von Links auf der Hopsa-Website

Die Hopsa-Website verwendet verschiedene Arten von Links:

1. **Interne Links** zu anderen Seiten der Website:
   ```html
   <a href="/ensemble">Ensemble</a>
   ```

2. **Externe Links** zu anderen Websites:
   ```html
   <a href="https://artliners-berlin.com/">ARTliners</a>
   ```

3. **E-Mail-Links** mit vorausgefüllten Betreffzeilen:
   ```html
   <a href="mailto:hopsaberlin@gmail.com">hopsaberlin@gmail.com</a>
   ```

4. **Google Maps-Links** für Veranstaltungsorte:
   ```html
   <a href="http://maps.google.com/maps?mrt=loc&q=Gärtnerstraße 23, 10245 Berlin&output=kml">Gärtnerstraße 23, 10245 Berlin</a>
   ```

### Interne Links erstellen und bearbeiten

Interne Links verweisen auf andere Seiten innerhalb der Hopsa-Website:

1. **Einfacher interner Link** (mit Markdown):
   ```markdown
   [Ensemble](/ensemble)
   ```

2. **Interner Link mit HTML** (für mehr Kontrolle):
   ```html
   <a href="/ensemble">Ensemble</a>
   ```

3. **Link zu einem bestimmten Abschnitt** einer Seite:
   ```html
   <a href="/improvisation#theater">Was ist Improtheater?</a>
   ```
   (Dies verweist auf den Abschnitt mit der ID "theater" auf der Improvisation-Seite)

> **Was ist eine ID in HTML?**  
> Eine ID ist ein eindeutiger Bezeichner für ein HTML-Element. Mit `<a id="theater"></a>` wird eine Stelle im Dokument markiert, die dann mit `#theater` am Ende eines Links angesteuert werden kann.

### Externe Links erstellen und bearbeiten

Externe Links verweisen auf andere Websites:

```html
<a href="https://instagram.com/hopsa_berlin/" target="_blank">Instagram</a>
```

Das Attribut `target="_blank"` bewirkt, dass der Link in einem neuen Tab geöffnet wird. Dies ist nützlich für externe Links, damit die Besucher die Hopsa-Website nicht verlassen.

### Spezielle Links auf der Hopsa-Website

Die Hopsa-Website verwendet einige spezielle Arten von Links:

#### Social-Media-Buttons in links.md

Die Datei links.md enthält speziell formatierte Links zu sozialen Medien:

```html
<a href="https://instagram.com/hopsa_berlin/" class="flex no-underline hover:no-underline text-white hover:text-white" style="text-decoration: none !important"><div class="no-underline flex py-3 whitespace-nowrap px-6 max-w-10 mx-6 my-4 border border-gray-500 hover:border-white hover:bg-gray-800 active:bg-gray-800 hover:text-white rounded-lg -ml-1"><img src="/assets/logos/instagram.png" alt="Instagram" style="height: 1.2em;" class="mt-1">&ensp;<b>Instagram</b>-Profil</div></a>
```

Um einen solchen Link zu bearbeiten:
1. Ändere die URL im `href`-Attribut
2. Passe den Text innerhalb des `<div>` an
3. Wenn nötig, ändere das Bild im `<img>`-Tag

#### E-Mail-Links mit vorausgefülltem Betreff und Inhalt

Die Kontakt-Seite enthält E-Mail-Links mit vorausgefülltem Betreff und Inhalt:

```html
<a href="mailto:hopsaberlin@gmail.com?cc=hopsa@jannikh.com&subject=Anfrage%20zu%20einer%20Buchung%20%2F%20Workshop%20oder%20Presse&body=Liebes%20Hopsa-Ensemble%2C%0A%0Aich%20melde%20mich%20wegen%20einer%20Anfrage%20zu%20...">E-Mail-Vorlage</a>
```

Um einen solchen Link zu bearbeiten:
1. Ändere die E-Mail-Adresse nach `mailto:`
2. Passe die CC-Adresse nach `cc=` an
3. Ändere den Betreff nach `subject=` (URL-kodiert, d.h. Leerzeichen werden zu `%20`)
4. Ändere den Nachrichtentext nach `body=` (URL-kodiert, Zeilenumbrüche werden zu `%0A`)

> **Tipp für E-Mail-Links:**  
> Wenn du komplexere E-Mail-Links erstellen möchtest, kannst du einen Online-URL-Encoder verwenden, um Text in URL-kodiertes Format zu konvertieren. Suche einfach nach "URL encoder" in einer Suchmaschine.

## Fortgeschrittene Textformatierung

Neben den grundlegenden Markdown-Formatierungen verwendet die Hopsa-Website einige fortgeschrittene Formatierungstechniken:

### HTML-Div-Container für Layout-Kontrolle

Die Hopsa-Website nutzt häufig HTML-Div-Container mit CSS-Klassen, um das Layout zu kontrollieren:

```html
<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2 lg:w-1/2 md:pr-4 -mt-6">
        {% include "termine.md" %}
    </div>
    <div class="w-full md:w-1/2 lg:w-1/2 md:pl-4 -z-10 mt-4">
        {% include "instagram-embed.html" %}
    </div>
</div>
```

Diese Struktur erstellt ein zweispaltiges Layout, das auf kleineren Bildschirmen zu einem einspaltigen Layout wird. Die linke Spalte enthält die Termine, die rechte Spalte den Instagram-Feed.

> **Was bedeuten diese CSS-Klassen?**  
> Die Klassen wie `flex`, `w-full`, `md:w-1/2` sind Teil von Tailwind CSS, einem CSS-Framework. Sie steuern das Layout: `flex` macht den Container flexibel, `w-full` bedeutet 100% Breite, `md:w-1/2` bedeutet 50% Breite auf mittleren und größeren Bildschirmen.

### Nunjucks-Templates und -Includes

Die Hopsa-Website verwendet Nunjucks, eine Template-Sprache, um Inhalte zwischen Seiten zu teilen:

```markdown
{% include "landingpage.md" %}
```

Diese Zeile fügt den Inhalt der Datei landingpage.md an dieser Stelle ein.

> **Was ist Nunjucks?**  
> Nunjucks ist eine Template-Sprache für JavaScript, ähnlich wie Jinja2 für Python. Sie ermöglicht es, Code in Templates einzubetten, Layouts zu definieren und Inhalte wiederzuverwenden.

Für die grundlegende Bearbeitung der Website musst du die Details von Nunjucks nicht verstehen. Es reicht zu wissen, dass Zeilen mit `{% ... %}` spezielle Anweisungen sind, die während des Build-Prozesses ausgeführt werden.

## Häufige Fragen und Probleme

### "Meine Markdown-Formatierung funktioniert nicht!"

**Mögliche Ursachen und Lösungen:**

1. **Fehlendes Leerzeichen nach dem Rautezeichen**: Bei Überschriften muss nach dem Rautezeichen ein Leerzeichen stehen: `# Überschrift` (richtig) vs `#Überschrift` (falsch).

2. **Keine leere Zeile vor Listen**: Vor einer Liste muss eine leere Zeile stehen:
   ```markdown
   Hier ist ein Text.

   - Erster Listenpunkt
   - Zweiter Listenpunkt
   ```

3. **HTML und Markdown mischen**: Wenn du HTML und Markdown mischst, kann es manchmal zu unerwarteten Ergebnissen kommen. Versuche, entweder nur HTML oder nur Markdown für einen bestimmten Abschnitt zu verwenden.

### "Meine Bilder werden nicht angezeigt!"

**Mögliche Ursachen und Lösungen:**

1. **Falsche Pfade**: Achte darauf, dass die Pfade zu den Bildern korrekt sind. Sie sollten mit `/assets/` beginnen, wenn du auf Bilder im assets-Ordner verweist.

2. **Groß-/Kleinschreibung**: Auf einigen Servern ist die Groß- und Kleinschreibung wichtig. Stelle sicher, dass der Dateiname im HTML-Code genau mit dem tatsächlichen Dateinamen übereinstimmt.

3. **Bildformat nicht unterstützt**: Wenn du WebP-Bilder verwendest, werden diese in sehr alten Browsern möglicherweise nicht angezeigt. Die Hopsa-Website verwendet hauptsächlich WebP und JPG, die von allen modernen Browsern unterstützt werden.

### "Meine Links funktionieren nicht!"

**Mögliche Ursachen und Lösungen:**

1. **Falsche URL**: Überprüfe die URL im `href`-Attribut. Interne Links sollten mit `/` beginnen, externe Links mit `http://` oder `https://`.

2. **Fehlender Zielort**: Wenn du auf eine Seite verlinkst, die nicht existiert, führt der Link nirgendwohin.

3. **Führendes Schrägstrich vergessen**: Interne Links sollten immer mit einem Schrägstrich beginnen: `/ensemble` (richtig) vs `ensemble` (könnte zu Problemen führen).

### "Meine Änderungen werden nicht auf der Website angezeigt!"

**Mögliche Ursachen und Lösungen:**

1. **Änderungen nicht gespeichert**: Stelle sicher, dass du die Dateien nach der Bearbeitung gespeichert hast (Strg+S).

2. **Build-Prozess nicht ausgeführt**: Nachdem du Änderungen vorgenommen hast, muss die Website neu gebaut werden. Führe run.bat aus und überprüfe, ob der Prozess erfolgreich war.

3. **Änderungen nicht zu GitHub hochgeladen**: Lokale Änderungen sind nur auf deinem Computer sichtbar. Um sie auf der öffentlichen Website anzuzeigen, musst du sie zu GitHub hochladen (commit und push).

4. **Browser-Cache**: Manchmal zeigt der Browser alte Versionen von Seiten aus seinem Cache an. Drücke Strg+F5, um den Cache zu umgehen und die Seite neu zu laden.

## ChatGPT als Helfer bei der Bearbeitung

ChatGPT kann ein wertvoller Assistent sein, wenn du Hilfe bei der Bearbeitung der Hopsa-Website benötigst. Hier sind einige Beispiel-Prompts:

### Für Markdown-Formatierung:

```
"Wie erstelle ich eine nummerierte Liste in Markdown?"

"Ich möchte in Markdown einen Link erstellen, der in einem neuen Tab geöffnet wird. Wie geht das?"

"Wie kann ich in Markdown Text unterstreichen?"
```

### Für die Arbeit mit Bildern:

```
"Ich habe ein neues Teamfoto und möchte es auf der Ensemble-Seite hinzufügen. Wie mache ich das Schritt für Schritt?"

"Welches Bildformat ist am besten für Webseiten geeignet?"

"Wie kann ich die Größe eines Bildes in HTML anpassen?"
```

### Für die Arbeit mit Links:

```
"Wie erstelle ich einen E-Mail-Link mit vorausgefülltem Betreff und Inhalt?"

"Ich möchte einen internen Link zu einem bestimmten Abschnitt auf einer anderen Seite erstellen. Wie geht das?"

"Was bedeutet das Attribut 'target="_blank"' in einem HTML-Link?"
```

### Für Layout-Fragen:

```
"Was bedeuten diese CSS-Klassen: 'flex flex-wrap md:flex-nowrap'?"

"Wie kann ich einen zweispaltigen Bereich auf der Hopsa-Website erstellen, der auf Mobilgeräten zu einem einspaltigen Layout wird?"

"Wie kann ich mehr vertikalen Abstand zwischen zwei Abschnitten einfügen?"
```

> **Tipp für effektive ChatGPT-Prompts:**  
> Je spezifischer du bist, desto hilfreicher kann ChatGPT sein. Kopiere ruhig den relevanten Code-Ausschnitt in deine Anfrage und erkläre genau, was du erreichen möchtest. Beispiel: "Ich habe diesen Code auf der Termine-Seite: [Code einfügen]. Ich möchte die Termine-Liste in zwei Spalten aufteilen. Wie kann ich das machen?"

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie du mit Markdown Texte formatierst (Überschriften, Listen, Links, etc.)
- Wie du die wichtigsten Seiten der Hopsa-Website bearbeitest
- Wie du Bilder hinzufügst, austauschst und in Seiten einbindest
- Wie du verschiedene Arten von Links erstellst und bearbeitest
- Wie du häufige Probleme lösen kannst

Du hast jetzt alle grundlegenden Kenntnisse, um die Inhalte der Hopsa-Website zu bearbeiten. Im nächsten Kapitel werden wir uns speziell mit der Verwaltung von Terminen und Veranstaltungen befassen - ein wichtiger Aspekt für die Hopsa-Website als aktive Improtheatergruppe.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Termine und Veranstaltungen verwalten" lernst du, wie du neue Veranstaltungen zur Website hinzufügst, bestehende aktualisierst oder entfernst und das spezielle Termine-System der Hopsa-Website optimal nutzt.

# 7. Termine und Veranstaltungen verwalten

## Der Auftrittskalender deiner Improgruppe

Willkommen zu Kapitel 7 unseres Leitfadens! In diesem Kapitel lernst du alles über die Verwaltung von Terminen und Veranstaltungen auf der Hopsa-Website. Als aktive Improtheatergruppe sind eure Auftritte ein zentraler Bestandteil eurer Online-Präsenz - Fans und Interessierte möchten schließlich wissen, wann und wo sie euch live erleben können! Wir zeigen dir, wie du Termine zur Website hinzufügst, bestehende aktualisierst oder nicht mehr aktuelle entfernst - alles in einem einfach zu verstehenden Format.

> **Das Wichtigste zuerst**: Termine werden auf der Hopsa-Website mithilfe einer speziellen Vorlage (einem sogenannten "Macro") verwaltet. Mit dieser kannst du auf einfache Weise neue Veranstaltungen hinzufügen, bestehende bearbeiten oder nicht mehr aktuelle deaktivieren, ohne dass du dich mit kompliziertem Code beschäftigen musst.

### Was wir in diesem Kapitel behandeln:
- Wie das Termine-System der Hopsa-Website aufgebaut ist
- Wie du neue Veranstaltungen ganz einfach hinzufügst
- Wie du bestehende Termine aktualisierst oder entfernst
- Praktische Beispiele und typische Szenarien
- Troubleshooting: Lösungen für häufige Probleme

## Das Termine-System verstehen

Bevor wir mit dem Hinzufügen und Bearbeiten von Terminen beginnen, schauen wir uns an, wie das Termine-System der Hopsa-Website funktioniert. Dieses Verständnis hilft dir, Änderungen sicher und effektiv vorzunehmen.

### Die zwei wichtigen Dateien

Das Termine-System basiert hauptsächlich auf zwei Dateien:

1. **termine.njk**: Diese Datei enthält die Vorlage (das "Macro"), die definiert, wie Termine dargestellt werden.
2. **termine.md**: Diese Datei enthält die eigentlichen Termindaten - hier fügst du neue Veranstaltungen hinzu oder bearbeitest bestehende.

> **Was ist ein Macro?**  
> Ein Macro ist wie eine Schablone oder ein Formular mit vordefinierten Feldern. Statt jedes Mal den gesamten HTML-Code für einen Termin zu schreiben, füllst du einfach die Felder des Macros aus (wie Titel, Datum, Uhrzeit usw.), und das System erstellt daraus automatisch die richtige Darstellung auf der Website.

### Der Aufbau der termine.njk - die Vorlage (Anschauen, nicht bearbeiten!)

Die Datei termine.njk enthält die Vorlage (Macro) für die Termine. Du musst diese Datei **nicht bearbeiten** - sie dient nur als Referenz, um zu verstehen, welche Informationen du für jeden Termin angeben kannst.

Hier ist ein vereinfachter Blick auf die Struktur:

```nunjucks
{% macro neuesEvent(titel="Hopsa-Aufführung", datum="Datum wird noch mit geteilt", 
                    uhrzeit="Details sind noch in Planung", 
                    veranstaltungsort="Veranstaltungsort siehe Instagram", 
                    adresse="Adresse wird auf Instagram", 
                    eintritt="Eintritt auf Spendenbasis", 
                    kategorie="Auftritt", 
                    link="#", 
                    deaktivieren=false) %}
...
{% endmacro %}
```

Diese Vorlage definiert die Parameter (Felder), die du für jeden Termin ausfüllen kannst:

- **titel**: Der Name der Veranstaltung, z.B. "Valentinstagspecial: Hopsa Dating-Scheißerei"
- **datum**: Das Datum der Veranstaltung, z.B. "14.02.2024"
- **uhrzeit**: Die Uhrzeit der Veranstaltung, z.B. "20:00"
- **veranstaltungsort**: Die Location, z.B. "ARTliners"
- **adresse**: Die vollständige Adresse, z.B. "Gärtnerstraße 23, 10245 Berlin"
- **eintritt**: Informationen zum Eintritt, z.B. "Eintritt auf Spendenbasis"
- **kategorie**: Art der Veranstaltung, z.B. "Auftritt" (oder "Workshop", "Probe", etc.)
- **link**: URL zur Website der Location oder zur Veranstaltung
- **deaktivieren**: Auf `true` setzen, um einen Termin vorübergehend auszublenden

> **Wichtig zu wissen:**  
> Die Werte in den Anführungszeichen nach dem Gleichheitszeichen sind Standardwerte, die verwendet werden, wenn du keinen eigenen Wert angibst. Du musst also nicht zwingend alle Felder ausfüllen - nur die, die du ändern möchtest.

### Der Aufbau der termine.md - die eigentlichen Daten

Die Datei termine.md ist die Datei, die du bearbeiten wirst, um Termine zu verwalten. Sie beginnt mit einem Import der Vorlage:

```markdown
{% import "termine.njk" as termine %}
```

Danach folgen die einzelnen Termine, die mit Hilfe des importierten Macros erstellt werden:

```markdown
{{ termine.neuesEvent(
    titel="Valentinstagspecial: Hopsa Dating-Scheißerei",
    datum="14.02.2024",
    uhrzeit="20:00",
    veranstaltungsort="ARTliners",
    link="https://artliners-berlin.com/",
    adresse="Gärtnerstraße 23, 10245 Berlin"
)}}
```

Jeder Termin ist ein eigener Block, und du kannst so viele Termine hinzufügen, wie du möchtest.

> **Was passiert hinter den Kulissen?**  
> Wenn du einen neuen Termin hinzufügst, wird das Macro (die Vorlage) aus termine.njk verwendet, um diesen Termin in schönes HTML umzuwandeln, mit der richtigen Formatierung, Links zur Location und zu Google Maps für die Adresse, und vielem mehr. Du musst dich um diese Details nicht kümmern - du musst nur die Daten korrekt eingeben.

## Neue Veranstaltungen hinzufügen

Jetzt wird es praktisch! Hier erfährst du, wie du ganz einfach neue Termine zur Hopsa-Website hinzufügst.

### Schritt-für-Schritt-Anleitung

1. **Öffne die Datei termine.md**: Diese befindet sich im Ordner _includes des Projekts. Du kannst sie in VS Code öffnen, wie du es in den vorherigen Kapiteln gelernt hast.

2. **Finde eine gute Position für den neuen Termin**: In der Regel werden die Termine chronologisch sortiert, mit den frühesten Terminen ganz oben. Suche die Stelle, an der dein neuer Termin basierend auf dem Datum eingefügt werden soll.

3. **Füge den Code für den neuen Termin ein**: Du kannst dafür einen bestehenden Termin kopieren und anpassen. Ein neuer Termineintrag sieht so aus:

   ```markdown
   {{ termine.neuesEvent(
       titel="Name deiner Veranstaltung",
       datum="TT.MM.JJJJ",
       uhrzeit="HH:MM",
       veranstaltungsort="Name der Location",
       link="https://website-der-location.de",
       adresse="Straße Hausnummer, PLZ Stadt",
       eintritt="Information zum Eintritt"
   )}}
   ```

4. **Passe die Werte an**: Ersetze die Platzhalter mit den tatsächlichen Informationen für deinen neuen Termin.

5. **Speichere die Datei**: Drücke `Strg+S` (oder `Cmd+S` auf Mac), um deine Änderungen zu speichern.

6. **Überprüfe die Änderungen**: Führe die Website lokal aus (wie in Kapitel 5 beschrieben) und überprüfe, ob der neue Termin korrekt angezeigt wird.

> **Tipp für die richtige Reihenfolge:**  
> Die Reihenfolge der Termine in der Datei termine.md bestimmt die Reihenfolge, in der sie auf der Website angezeigt werden. Platziere neue Termine so, dass sie chronologisch korrekt eingeordnet sind - kommende Termine in zeitlicher Abfolge, beginnend mit dem nächsten anstehenden Termin.

### Praktisches Beispiel: Einen neuen Termin hinzufügen

Nehmen wir an, du möchtest einen neuen Termin für eine Aufführung am 15. August 2025 im Improtheater "Die Bühne" hinzufügen. So würdest du vorgehen:

1. Öffne die Datei termine.md
2. Finde die richtige Position für den neuen Termin (nach bestehenden Terminen, die vor dem 15.08.2025 liegen, aber vor Terminen, die danach stattfinden)
3. Füge folgenden Code ein:

   ```markdown
   {{ termine.neuesEvent(
       titel="Hopsa präsentiert: Sommerimprovisation",
       datum="15.08.2025",
       uhrzeit="19:30",
       veranstaltungsort="Die Bühne",
       link="https://die-buehne-berlin.de",
       adresse="Beispielstraße 42, 10999 Berlin",
       eintritt="12€, ermäßigt 8€"
   )}}
   ```

4. Speichere die Datei und überprüfe das Ergebnis in deiner lokalen Vorschau

So wird dein neuer Termin auf der Website aussehen:

```
Hopsa präsentiert: Sommerimprovisation
Auftritt: 15.08.2025 | 19:30

Die Bühne: Beispielstraße 42, 10999 Berlin

12€, ermäßigt 8€
```

Der Titel der Veranstaltung wird als Überschrift angezeigt, darunter folgen die Details wie Datum, Uhrzeit, Ort (mit Link zur Website der Location) und Adresse (mit Link zu Google Maps). Außerdem werden Informationen zum Eintritt angegeben.

### Optionale Parameter und ihre Verwendung

Du musst nicht immer alle Parameter angeben. Hier sind einige Situationen, in denen du bestimmte Parameter weglassen oder anpassen könntest:

#### 1. Veranstaltung ohne eigene Website

Wenn die Location keine Website hat, kannst du den `link`-Parameter weglassen oder auf eine andere relevante Seite verlinken:

```markdown
{{ termine.neuesEvent(
    titel="Impro im Kulturzentrum",
    datum="20.09.2025",
    uhrzeit="20:00",
    veranstaltungsort="Kulturzentrum Neukölln",
    adresse="Neuköllner Straße 55, 12055 Berlin"
)}}
```

#### 2. Besondere Art von Veranstaltung (nicht nur Auftritte)

Du kannst den Parameter `kategorie` ändern, um die Art der Veranstaltung zu spezifizieren:

```markdown
{{ termine.neuesEvent(
    titel="Improtheater-Workshop für Anfänger",
    datum="05.10.2025",
    uhrzeit="14:00 - 18:00",
    veranstaltungsort="Workshopraum Kreativ",
    adresse="Kreativstraße 7, 10245 Berlin",
    kategorie="Workshop"
)}}
```

#### 3. Keine Angabe zum Eintritt

Wenn keine Informationen zum Eintritt angegeben werden sollen, kannst du den Parameter `eintritt` weglassen. Dann wird der Standardwert "Eintritt auf Spendenbasis" verwendet. Oder du kannst einen eigenen Wert angeben:

```markdown
{{ termine.neuesEvent(
    titel="Open Stage Night",
    datum="25.11.2025",
    uhrzeit="19:00",
    veranstaltungsort="Kreativfabrik",
    adresse="Fabrikstraße 10, 10997 Berlin",
    eintritt="Freier Eintritt"
)}}
```

## Veranstaltungen aktualisieren oder entfernen

Manchmal müssen Termine aktualisiert oder entfernt werden. Hier erfährst du, wie das geht.

### Einen bestehenden Termin aktualisieren

Um einen bestehenden Termin zu aktualisieren, musst du einfach die entsprechenden Werte in der Termindefinition ändern. Nehmen wir an, der Veranstaltungsort einer bestehenden Veranstaltung ändert sich:

**Ursprünglicher Eintrag:**
```markdown
{{ termine.neuesEvent(
    titel="Hopsa präsentiert: Sommerimprovisation",
    datum="15.08.2025",
    uhrzeit="19:30",
    veranstaltungsort="Die Bühne",
    link="https://die-buehne-berlin.de",
    adresse="Beispielstraße 42, 10999 Berlin",
    eintritt="12€, ermäßigt 8€"
)}}
```

**Aktualisierter Eintrag:**
```markdown
{{ termine.neuesEvent(
    titel="Hopsa präsentiert: Sommerimprovisation",
    datum="15.08.2025",
    uhrzeit="19:30",
    veranstaltungsort="Kulturhaus Mitte",   <!-- geändert -->
    link="https://kulturhaus-mitte.de",     <!-- geändert -->
    adresse="Mittelstraße 15, 10117 Berlin", <!-- geändert -->
    eintritt="12€, ermäßigt 8€"
)}}
```

Ändere einfach die betreffenden Werte und speichere die Datei.

### Einen Termin vorübergehend ausblenden (deaktivieren)

Wenn ein Termin nicht mehr stattfindet oder vorübergehend ausgeblendet werden soll, kannst du den Parameter `deaktivieren=true` hinzufügen, anstatt den gesamten Block zu löschen:

```markdown
{{ termine.neuesEvent(
    titel="Hopsa präsentiert: Sommerimprovisation",
    datum="15.08.2025",
    uhrzeit="19:30",
    veranstaltungsort="Die Bühne",
    link="https://die-buehne-berlin.de",
    adresse="Beispielstraße 42, 10999 Berlin",
    eintritt="12€, ermäßigt 8€",
    deaktivieren=true   <!-- Termin wird ausgeblendet -->
)}}
```

Der Vorteil dieser Methode ist, dass du den Termin später einfach wieder aktivieren kannst, indem du `deaktivieren=true` entfernst oder zu `deaktivieren=false` änderst.

> **Tipp für die Archivierung:**  
> Deaktivierte Termine können als Archiv oder als Vorlage für zukünftige ähnliche Veranstaltungen dienen. Du könntest sie am Ende der Datei gruppieren, mit einer Kommentarzeile wie `<!-- Deaktivierte/Vergangene Termine -->` davor.

### Einen Termin dauerhaft entfernen

Wenn du einen Termin dauerhaft löschen möchtest, kannst du den gesamten Block aus der Datei entfernen. Sei vorsichtig und stelle sicher, dass du nur den Codeblock für den spezifischen Termin löschst, nicht die umgebenden Termine oder andere wichtige Teile der Datei.

```markdown
<!-- Diesen gesamten Block löschen, wenn der Termin entfernt werden soll: -->
{{ termine.neuesEvent(
    titel="Zu löschender Termin",
    datum="01.01.2025",
    uhrzeit="20:00",
    veranstaltungsort="Beispiel-Ort",
    adresse="Beispieladresse"
)}}
```

> **Sicherheitshinweis:**  
> Wenn du dir unsicher bist, ob du den richtigen Codeblock entfernst, ist es sicherer, den Termin zunächst mit `deaktivieren=true` auszublenden. So kannst du überprüfen, ob die richtige Veranstaltung nicht mehr angezeigt wird, bevor du sie endgültig löschst.

## Besondere Termine und fortgeschrittene Funktionen

Es gibt einige Besonderheiten und fortgeschrittene Funktionen, die du bei der Verwaltung von Terminen nutzen kannst.

### Regelmäßige Termine (z.B. Proben)

Für regelmäßige Ereignisse wie wöchentliche Proben verwendet die Hopsa-Website einen speziellen Abschnitt in der termine.md-Datei:

```markdown
<a href="/kurs" style="text-decoration: none; border-bottom: 1px solid;"><h3>Offene Probe</h3></a>
<h4 class="-mt-2 mb-2">Jeden Mittwoch um 19:00</h4>
<a href="/kurs">Weitere Infos</a>
<p class="mt-2">Bitte um Anmeldung per E-Mail: <a href="mailto:hopsaberlin@gmail.com">hopsaberlin@gmail.com</a></p>
```

Dieser Abschnitt wird in der Regel nach den regulären Terminen angezeigt und folgt nicht dem Macro-Format, da er immer gleich bleibt. Wenn sich die Informationen zu regelmäßigen Terminen ändern (z.B. die Uhrzeit der Proben), musst du diesen Abschnitt direkt bearbeiten.

### Kommentare und Abschnittstrenner verwenden

Du kannst Kommentare in der termine.md-Datei verwenden, um Abschnitte zu organisieren oder Hinweise für andere Bearbeiter zu hinterlassen. Kommentare werden nicht auf der Website angezeigt.

```markdown
<!-- Kommende Termine -->
{{ termine.neuesEvent(...) }}
{{ termine.neuesEvent(...) }}

<!-- Vergangene Termine (deaktiviert) -->
{{ termine.neuesEvent(..., deaktivieren=true) }}
{{ termine.neuesEvent(..., deaktivieren=true) }}
```

Oder du kannst auch horizontale Trennlinien mit drei oder mehr Bindestrichen einfügen:

```markdown
<!-- Kommende Termine -->
{{ termine.neuesEvent(...) }}
{{ termine.neuesEvent(...) }}

---

<!-- Vergangene Termine (deaktiviert) -->
{{ termine.neuesEvent(..., deaktivieren=true) }}
```

> **Was sind diese HTML-Kommentare?**  
> Kommentare zwischen `<!--` und `-->` sind HTML-Kommentare. Sie dienen nur als Notizen für Menschen, die den Code bearbeiten, und werden auf der Website nicht angezeigt. Sie sind nützlich, um Abschnitte zu organisieren oder Hinweise zu hinterlassen.

### Eine Veranstaltung hervorheben

Das Standard-Macro bietet keine direkte Option zur besonderen Hervorhebung eines Termins. Wenn du einen Termin besonders hervorheben möchtest, könntest du in den Titel spezielle Hinweise einbauen:

```markdown
{{ termine.neuesEvent(
    titel="⭐ PREMIERE: Hopsa zeigt 'Die unglaubliche Reise' ⭐",
    datum="10.12.2025",
    uhrzeit="20:00",
    veranstaltungsort="Großes Theater",
    adresse="Theaterplatz 1, 10117 Berlin",
    eintritt="15€, ermäßigt 10€"
)}}
```

Die Sternchen (⭐) oder andere Symbole im Titel können helfen, wichtige Veranstaltungen optisch hervorzuheben.

## Troubleshooting: Häufige Probleme und Lösungen

Hier sind einige typische Probleme, die bei der Verwaltung von Terminen auftreten können, und wie du sie lösen kannst.

### Problem: Der Termin wird nicht angezeigt

Wenn ein neu hinzugefügter Termin nicht auf der Website erscheint, könnte dies mehrere Ursachen haben:

1. **Der Parameter `deaktivieren=true` ist gesetzt**:
   Überprüfe, ob der Termin versehentlich deaktiviert wurde.

2. **Fehler in der Syntax**:
   Stelle sicher, dass alle Klammern und Anführungszeichen korrekt sind. Häufige Fehler sind:
   - Fehlende schließende Klammer `}}` am Ende des Blocks
   - Fehlende Kommas zwischen den Parametern
   - Fehlende Anführungszeichen um Textwerte

3. **Probleme mit speziellen Zeichen**:
   Bestimmte Sonderzeichen können Probleme verursachen, besonders wenn sie in URLs verwendet werden. Vermeide Zeichen wie `&`, `<`, `>` oder Umlaute in URLs.

### Problem: Die Formatierung ist fehlerhaft

Wenn die Darstellung des Termins nicht wie erwartet aussieht, könnte das an der Formatierung liegen:

1. **Zu lange Texte**:
   Sehr lange Titel oder Adressen können die Darstellung beeinträchtigen. Versuche, die Texte kurz und prägnant zu halten.

2. **HTML-Tags im Text**:
   Wenn du HTML-Tags wie `<b>`, `<i>` oder `<br>` in den Texten verwendest, können diese die Formatierung stören. Verwende sie nur, wenn du dir sicher bist, dass sie korrekt funktionieren.

3. **Leerzeichen am Anfang oder Ende**:
   Unbeabsichtigte Leerzeichen am Anfang oder Ende von Parameterwerten können die Darstellung beeinflussen. Achte darauf, dass keine überflüssigen Leerzeichen vorhanden sind.

### Problem: Der Link zur Location oder zu Google Maps funktioniert nicht

Wenn Links nicht funktionieren oder zum falschen Ziel führen:

1. **URL beginnt nicht mit `http://` oder `https://`**:
   Stelle sicher, dass die URL im `link`-Parameter mit `http://` oder `https://` beginnt.

2. **Tippfehler in der URL**:
   Überprüfe die URL auf Tippfehler oder Schreibfehler.

3. **Probleme mit der Adresse für Google Maps**:
   Die Adresse im `adresse`-Parameter wird automatisch für den Google Maps-Link verwendet. Stelle sicher, dass die Adresse korrekt und vollständig ist (Straße, Hausnummer, PLZ, Stadt).

> **Tipp für Links:**  
> Teste die URLs, die du verwendest, indem du sie in einem Browser öffnest, bevor du sie in die Termine einfügst. So kannst du sicherstellen, dass sie korrekt funktionieren.

## Bewährte Praktiken für die Terminverwaltung

Hier sind einige Tipps und bewährte Praktiken für eine effiziente und übersichtliche Verwaltung der Termine auf der Hopsa-Website.

### Organisiere die Termine chronologisch

Halte die Termine in der Datei termine.md in chronologischer Reihenfolge, mit dem nächsten anstehenden Termin ganz oben. So ist die Datei übersichtlicher und es ist leichter zu erkennen, welche Termine aktuell sind.

### Verwende einheitliche Formatierung

Halte dich an ein einheitliches Format für Datums- und Zeitangaben, z.B.:
- Datum immer im Format "TT.MM.JJJJ"
- Uhrzeit immer im Format "HH:MM" oder "HH:MM - HH:MM" für Zeiträume

### Archiviere vergangene Termine

Anstatt vergangene Termine sofort zu löschen, markiere sie zunächst als deaktiviert (`deaktivieren=true`) und verschiebe sie in einen Archivbereich am Ende der Datei. So hast du eine Referenz für zukünftige ähnliche Veranstaltungen.

### Überprüfe deine Änderungen lokal

Bevor du Änderungen an den Terminen hochlädst, überprüfe immer in der lokalen Vorschau (wie in Kapitel 5 beschrieben), ob alles korrekt angezeigt wird. So kannst du Fehler frühzeitig erkennen und beheben.

### Sichere wichtige Informationen extern

Für wichtige oder kompliziertere Termine ist es sinnvoll, die Details auch außerhalb der Website zu speichern (z.B. in einem Dokument oder einer Tabelle). So hast du eine Sicherung, falls einmal etwas schiefgehen sollte.

## ChatGPT als Helfer bei der Terminverwaltung

ChatGPT kann dir bei der Verwaltung von Terminen auf der Hopsa-Website helfen. Hier sind einige nützliche Prompts, die du verwenden kannst:

### Für Hilfe beim Erstellen neuer Termine

```
"Ich möchte einen neuen Termin auf der Hopsa-Website hinzufügen. Der Termin ist eine Aufführung am 20. November 2025 um 19:30 Uhr im Theater XYZ (website: theaterxyz.de) in der Beispielstraße 123, 10115 Berlin. Der Eintritt kostet 10€. Wie sollte der Code dafür aussehen?"
```

### Für Hilfe bei der Fehlerbehebung

```
"Ich habe diesen Termin-Code auf der Hopsa-Website, aber er wird nicht richtig angezeigt:
{{ termine.neuesEvent(
    titel="Mein neuer Termin",
    datum="20.11.2025,
    uhrzeit="19:30",
    veranstaltungsort="Theater XYZ"
)}}
Was könnte das Problem sein?"
```

### Für Formatierungsvorschläge

```
"Wie kann ich einen besonders wichtigen Termin auf der Hopsa-Website optisch hervorheben, ohne das Macro zu ändern?"
```

> **Tipp für effektive ChatGPT-Prompts:**  
> Je detaillierter du beschreibst, was du erreichen möchtest, desto besser kann ChatGPT dir helfen. Kopiere ruhig den relevanten Code-Ausschnitt und beschreibe genau, was du damit machen möchtest oder welches Problem aufgetreten ist.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie das Termine-System der Hopsa-Website aufgebaut ist
- Wie du neue Veranstaltungen hinzufügst
- Wie du bestehende Termine aktualisierst oder entfernst
- Wie du mit häufigen Problemen umgehst
- Bewährte Praktiken für eine effiziente Terminverwaltung

Mit diesem Wissen kannst du nun die Termine auf der Hopsa-Website selbstständig verwalten und aktuell halten - ein wichtiger Aspekt für eine aktive Improtheatergruppe!

Im nächsten Kapitel lernen wir, wie du die Navigation der Website anpassen kannst, um Besuchern eine optimale Benutzererfahrung zu bieten.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Die Navigation anpassen" erfährst du, wie du die Hauptnavigation und die Footer-Navigation der Website anpassen kannst, um sie optimal an deine Bedürfnisse anzupassen.

# 8. Die Navigation anpassen

## Der Wegweiser deiner Website

Willkommen zu Kapitel 8 unseres Leitfadens! In diesem Kapitel lernst du, wie du die Navigation der Hopsa-Website anpassen kannst. Die Navigation ist wie ein Wegweiser für deine Besucher – sie hilft ihnen, sich auf deiner Website zurechtzufinden und schnell zu den Inhalten zu gelangen, die sie interessieren. Wir zeigen dir, wie du Menüpunkte hinzufügen, entfernen oder umbenennen kannst, sowohl in der Hauptnavigation am oberen Rand der Seite als auch in der Footer-Navigation am unteren Rand.

> **Das Wichtigste zuerst**: Die Navigation der Hopsa-Website wird in zwei Dateien verwaltet: header.njk für die Hauptnavigation und footer.njk für die Footer-Navigation. Beide sind einfache Listen mit Menüpunkten, die du leicht bearbeiten kannst, ohne komplizierte Programmierung verstehen zu müssen.

### Was wir in diesem Kapitel behandeln:
- Wie die Navigation der Hopsa-Website aufgebaut ist
- Wie du die Hauptnavigation am oberen Bildschirmrand anpasst
- Wie du die Footer-Navigation am unteren Bildschirmrand anpasst
- Tipps für eine benutzerfreundliche Navigation
- Häufige Fragen und Lösungen zu Navigationsproblemen

## Die Navigation verstehen

Bevor wir mit dem Bearbeiten beginnen, ist es wichtig zu verstehen, wie die Navigation der Hopsa-Website aufgebaut ist und welche Dateien für die verschiedenen Navigationsbereiche zuständig sind.

### Die zwei Navigationsbereiche

Die Hopsa-Website hat zwei Hauptnavigationsbereiche:

1. **Die Hauptnavigation (Header)**: Diese befindet sich am oberen Rand jeder Seite und enthält die wichtigsten Menüpunkte wie "Hopsa" (Startseite), "Ensemble", "Social Media", usw.

2. **Die Footer-Navigation**: Diese befindet sich am unteren Rand jeder Seite und enthält in der Regel rechtliche Informationen und zusätzliche Links wie "Impressum", "Datenschutz", sowie den "Mitmachen"-Link.

> **Was ist eine Navigation?**  
> Die Navigation einer Website ist wie ein Inhaltsverzeichnis oder eine Karte, die Besuchern hilft, sich auf der Website zu orientieren. Sie besteht aus Links (auch "Menüpunkte" genannt), die zu verschiedenen Seiten der Website führen. Eine gut gestaltete Navigation macht es Besuchern leicht, die gewünschten Informationen zu finden.

### Die zuständigen Dateien

Die Navigation der Hopsa-Website wird in zwei Dateien definiert:

1. **header.njk**: Diese Datei befindet sich im Ordner _includes und enthält die Definition der Hauptnavigation.

2. **footer.njk**: Diese Datei befindet sich ebenfalls im Ordner _includes und enthält die Definition der Footer-Navigation.

> **Was sind .njk-Dateien?**  
> Die Dateierweiterung .njk steht für "Nunjucks", eine Template-Sprache für JavaScript. Du musst nicht verstehen, wie Nunjucks im Detail funktioniert. Wichtig ist nur, dass diese Dateien die Struktur und das Aussehen von wiederverwendbaren Teilen der Website (wie Header und Footer) definieren und dass du bestimmte Teile dieser Dateien bearbeiten kannst, um die Navigation anzupassen.

### Die Struktur der Navigationsdateien

Schauen wir uns die Struktur der Navigationsdateien genauer an:

#### Die header.njk-Datei

Die Datei header.njk beginnt mit der Definition der Navigationseinträge:

```nunjucks
{% set navigation = [
    {"name": "Hopsa", "path": "/"},
    {"name": "Ensemble", "path": "/ensemble"},
    {"name": "Social Media", "path": "/links"},
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Auftritte", "path": "/termine"},
    {"name": "Improvisation", "path": "/improvisation"}
] %}
```

Jeder Navigationseintrag hat zwei Eigenschaften:
- **name**: Der Text, der im Menü angezeigt wird
- **path**: Der Pfad zur Zielseite (relativ zur Hauptdomain, also z.B. `/ensemble` für `hopsa-berlin.de/ensemble`)

Danach folgt HTML-Code, der festlegt, wie die Navigation dargestellt wird. Diesen HTML-Code musst du in der Regel nicht anpassen.

#### Die footer.njk-Datei

Die Datei footer.njk hat eine ähnliche Struktur:

```nunjucks
{% set navigation = [
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Impressum", "path": "/impressum"},
    {"name": "Datenschutz", "path": "/datenschutz"},
    {"name": "Mitmachen", "path": "/kurs"}
] %}
```

Auch hier hat jeder Eintrag einen Namen und einen Pfad, und darunter folgt HTML-Code für die Darstellung.

> **Warum sieht der Rest der Datei so kompliziert aus?**  
> Der restliche Code in diesen Dateien bestimmt das Aussehen und Verhalten der Navigation (Farben, Abstände, Hover-Effekte usw.). Du kannst diesen Teil in der Regel ignorieren und dich auf die Liste der Navigationseinträge konzentrieren. Falls du doch das Design ändern möchtest, empfehlen wir, dies in Kapitel 15 unter "Fortgeschrittene Anpassungen" nachzuschlagen oder einen Entwickler zu konsultieren.

## Die Hauptnavigation anpassen

Jetzt, wo du verstehst, wie die Navigation strukturiert ist, schauen wir uns an, wie du die Hauptnavigation anpassen kannst.

### Die header.njk-Datei öffnen

1. Öffne VS Code und navigiere zu deinem lokalen Hopsa-Projekt.
2. Im Datei-Explorer (linke Seitenleiste) navigiere zu _includes.
3. Öffne die Datei header.njk mit einem Klick.

### Einen Menüpunkt hinzufügen

Um einen neuen Menüpunkt hinzuzufügen, musst du einen neuen Eintrag in die `navigation`-Liste einfügen:

1. Finde die `navigation`-Liste am Anfang der Datei:

```nunjucks
{% set navigation = [
    {"name": "Hopsa", "path": "/"},
    {"name": "Ensemble", "path": "/ensemble"},
    {"name": "Social Media", "path": "/links"},
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Auftritte", "path": "/termine"},
    {"name": "Improvisation", "path": "/improvisation"}
] %}
```

2. Füge einen neuen Eintrag hinzu, indem du eine neue Zeile mit einem neuen Objekt einfügst. Achte darauf, dass jeder Eintrag außer dem letzten mit einem Komma endet:

```nunjucks
{% set navigation = [
    {"name": "Hopsa", "path": "/"},
    {"name": "Ensemble", "path": "/ensemble"},
    {"name": "Social Media", "path": "/links"},
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Auftritte", "path": "/termine"},
    {"name": "Improvisation", "path": "/improvisation"},
    {"name": "Neuer Menüpunkt", "path": "/neue-seite"}
] %}
```

> **Wichtig zu beachten:**  
> - Vergiss nicht das Komma nach dem vorherigen Eintrag.
> - Der `path`-Wert sollte mit einem `/` beginnen und auf eine existierende Seite verweisen (oder eine, die du noch erstellen wirst).
> - Die Reihenfolge der Einträge bestimmt die Reihenfolge im Menü (von links nach rechts).

### Einen Menüpunkt entfernen

Um einen Menüpunkt zu entfernen, lösche einfach den entsprechenden Eintrag aus der Liste:

1. Finde den Eintrag, den du entfernen möchtest.
2. Lösche die gesamte Zeile mit diesem Eintrag.
3. Wenn der entfernte Eintrag nicht der letzte in der Liste war, stelle sicher, dass der Eintrag davor noch ein Komma am Ende hat.

Beispiel: Um den "Social Media"-Menüpunkt zu entfernen:

```nunjucks
{% set navigation = [
    {"name": "Hopsa", "path": "/"},
    {"name": "Ensemble", "path": "/ensemble"},
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Auftritte", "path": "/termine"},
    {"name": "Improvisation", "path": "/improvisation"}
] %}
```

### Einen Menüpunkt umbenennen oder ändern

Um einen bestehenden Menüpunkt zu ändern, ändere einfach die Werte für `name` oder `path`:

1. Finde den Eintrag, den du ändern möchtest.
2. Ändere den Text zwischen den Anführungszeichen für `name` oder `path`.

Beispiel: Um "Auftritte" in "Termine & Auftritte" umzubenennen:

```nunjucks
{"name": "Termine & Auftritte", "path": "/termine"}
```

### Die Reihenfolge der Menüpunkte ändern

Die Reihenfolge der Einträge in der Liste bestimmt die Reihenfolge der Menüpunkte in der Navigation (von links nach rechts). Um die Reihenfolge zu ändern, verschiebe einfach die Einträge innerhalb der Liste:

1. Schneide den Eintrag aus, den du verschieben möchtest (Strg+X oder Cmd+X).
2. Setze den Cursor an die gewünschte Position.
3. Füge den Eintrag ein (Strg+V oder Cmd+V).
4. Überprüfe, ob die Kommas an den richtigen Stellen stehen (jeder Eintrag außer dem letzten braucht ein Komma am Ende).

### Spezieller Fall: Der "Mitmachen"-Button

In der Hauptnavigation der Hopsa-Website gibt es einen besonderen Button "Mitmachen" am rechten Rand. Dieser wird nicht in der `navigation`-Liste definiert, sondern separat im HTML-Code darunter:

```html
<a href="/kurs" class="ml-6 px-4 py-2 border border-white rounded-sm hover:bg-white hover:text-black transition-colors whitespace-nowrap">Mitmachen</a>
```

Um diesen Button zu ändern:

1. Um den Text zu ändern, ändere den Text zwischen `>` und `</a>`.
2. Um das Ziel des Links zu ändern, ändere den Wert für `href=`.

Beispiel: Um den Button in "Join us" umzubenennen und auf eine englische Version der Kursseite zu verlinken:

```html
<a href="/course" class="ml-6 px-4 py-2 border border-white rounded-sm hover:bg-white hover:text-black transition-colors whitespace-nowrap">Join us</a>
```

> **Was ist eine href?**  
> `href` ist ein HTML-Attribut, das das Ziel eines Links definiert. Es steht für "Hypertext REFerence" und gibt an, wohin der Benutzer geleitet wird, wenn er auf den Link klickt. Bei der Hopsa-Website sind relative Links wie `/kurs` üblich, die auf Seiten innerhalb der Website verweisen.

### Beispiel: Eine komplette Überarbeitung der Hauptnavigation

Nehmen wir an, du möchtest die Hauptnavigation komplett überarbeiten, z.B. um die Struktur für ein neues Projekt anzupassen. Hier ist ein Beispiel für eine neue Navigation:

```nunjucks
{% set navigation = [
    {"name": "Home", "path": "/"},
    {"name": "Über uns", "path": "/ensemble"},
    {"name": "Workshops", "path": "/kurs"},
    {"name": "Termine", "path": "/termine"},
    {"name": "Blog", "path": "/blog"},
    {"name": "Kontakt", "path": "/kontakt"}
] %}
```

> **Wichtiger Hinweis:**  
> Wenn du auf Seiten verlinkst, die noch nicht existieren (wie `/blog` in diesem Beispiel), werden Besucher eine 404-Fehlerseite sehen, wenn sie auf diesen Link klicken. Stelle sicher, dass du neue Seiten erstellst, bevor du Links zu ihnen hinzufügst, oder entferne den Link bis die Seite fertig ist.

## Die Footer-Navigation anpassen

Die Anpassung der Footer-Navigation funktioniert ähnlich wie die der Hauptnavigation. Hier sind die Schritte:

### Die footer.njk-Datei öffnen

1. Öffne VS Code und navigiere zu deinem lokalen Hopsa-Projekt.
2. Im Datei-Explorer (linke Seitenleiste) navigiere zu _includes.
3. Öffne die Datei footer.njk mit einem Klick.

### Die Footer-Navigation bearbeiten

Die Struktur der Footer-Navigation ist sehr ähnlich zu der der Hauptnavigation:

```nunjucks
{% set navigation = [
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Impressum", "path": "/impressum"},
    {"name": "Datenschutz", "path": "/datenschutz"},
    {"name": "Mitmachen", "path": "/kurs"}
] %}
```

Du kannst auch hier Einträge hinzufügen, entfernen, umbenennen oder die Reihenfolge ändern, genau wie bei der Hauptnavigation.

> **Tipp für die Footer-Navigation:**  
> Der Footer ist ein guter Ort für Links, die wichtig sind, aber nicht in der Hauptnavigation erscheinen müssen, wie rechtliche Informationen (Impressum, Datenschutz) oder zusätzliche Ressourcen. Im Fall der Hopsa-Website ist auch der "Mitmachen"-Link dort platziert, obwohl er eigentlich wichtig ist - er erscheint aber auch in der Hauptnavigation als Button.

### Beispiel: Soziale Medien zum Footer hinzufügen

Du könntest zum Beispiel Links zu sozialen Medien im Footer hinzufügen:

```nunjucks
{% set navigation = [
    {"name": "Kontakt", "path": "/kontakt"},
    {"name": "Impressum", "path": "/impressum"},
    {"name": "Datenschutz", "path": "/datenschutz"},
    {"name": "Mitmachen", "path": "/kurs"},
    {"name": "Instagram", "path": "https://instagram.com/hopsa_berlin/"},
    {"name": "YouTube", "path": "https://www.youtube.com/@HopsaBerlin"}
] %}
```

> **Hinweis zu externen Links:**  
> Bei Links zu externen Websites (wie Social-Media-Profilen) musst du die vollständige URL angeben, einschließlich `https://`. Dies unterscheidet sich von internen Links, die nur mit einem `/` beginnen.

## Tipps für eine benutzerfreundliche Navigation

Eine gute Navigation hilft den Besuchern, sich auf deiner Website zurechtzufinden und die gewünschten Informationen schnell zu finden. Hier sind einige Tipps, wie du die Navigation der Hopsa-Website benutzerfreundlicher gestalten kannst:

### 1. Halte die Hauptnavigation übersichtlich

Eine übersichtliche Hauptnavigation sollte nicht zu viele Menüpunkte enthalten. Als Faustregel gilt: 7 ± 2 Menüpunkte sind ideal. Wenn du mehr Punkte benötigst, überlege, ob einige davon in die Footer-Navigation verschoben oder unter einem Dropdown-Menü zusammengefasst werden könnten (letzteres würde allerdings eine komplexere Änderung erfordern).

### 2. Verwende klare und aussagekräftige Bezeichnungen

Die Namen der Menüpunkte sollten klar und verständlich sein. Vermeide Fachbegriffe oder kreative Bezeichnungen, die für Besucher verwirrend sein könnten. Gute Beispiele sind "Über uns", "Kontakt" oder "Veranstaltungen" - Begriffe, die sofort vermitteln, was auf der jeweiligen Seite zu finden ist.

### 3. Strukturiere die Navigation logisch

Die Reihenfolge der Menüpunkte sollte einer logischen Struktur folgen. Oft ist es sinnvoll, mit allgemeinen Informationen (z.B. "Über uns") zu beginnen und zu spezifischeren Informationen (z.B. "Kontakt") überzugehen. Die wichtigsten Seiten sollten in der Hauptnavigation erscheinen, weniger wichtige im Footer.

### 4. Markiere den aktiven Menüpunkt

Die Hopsa-Website markiert automatisch den aktiven Menüpunkt (die Seite, auf der sich der Besucher gerade befindet) in der Navigation. Das ist eine wichtige Funktion, die Besuchern hilft, sich zu orientieren. Diese Funktion ist bereits in der header.njk-Datei implementiert und erfordert keine zusätzlichen Anpassungen.

### 5. Teste die Navigation regelmäßig

Nach jeder Änderung an der Navigation solltest du die Website testen, um sicherzustellen, dass alle Links funktionieren und die Navigation wie erwartet angezeigt wird. Teste dies auf verschiedenen Geräten (Desktop, Tablet, Smartphone) und in verschiedenen Browsern.

> **Was ist Responsive Design?**  
> Responsive Design bedeutet, dass eine Website sich automatisch an verschiedene Bildschirmgrößen anpasst. Die Navigation der Hopsa-Website ist bereits responsiv gestaltet, d.h. sie wird auf kleineren Bildschirmen (wie Smartphones) anders dargestellt als auf Desktop-Computern. Dieses Verhalten ist bereits in den Dateien header.njk und footer.njk implementiert und erfordert keine zusätzliche Konfiguration.

## Änderungen testen und veröffentlichen

Nachdem du Änderungen an der Navigation vorgenommen hast, ist es wichtig, diese zu testen und dann zu veröffentlichen.

### Lokales Testen der Navigation

Bevor du deine Änderungen veröffentlichst, solltest du sie lokal testen:

1. Speichere die bearbeiteten Dateien (header.njk und/oder footer.njk).
2. Starte die lokale Entwicklungsumgebung mit der run.bat-Datei, falls sie nicht bereits läuft.
3. Öffne deinen Browser und navigiere zu `http://localhost:8080`.
4. Überprüfe, ob die Navigation wie gewünscht aussieht und funktioniert:
   - Werden alle Menüpunkte korrekt angezeigt?
   - Funktionieren alle Links?
   - Wird der aktive Menüpunkt markiert?
   - Sieht die Navigation auf verschiedenen Bildschirmbreiten gut aus? (Du kannst die Größe des Browserfensters ändern, um dies zu testen.)

### Änderungen veröffentlichen

Wenn du mit dem Ergebnis zufrieden bist, kannst du deine Änderungen veröffentlichen:

1. Committe und pushe deine Änderungen zu GitHub, wie in Kapitel 11 beschrieben.
2. Warte einige Minuten, bis GitHub Pages die Website neu generiert hat.
3. Überprüfe die Live-Website unter `hopsa-berlin.de`, um sicherzustellen, dass die Änderungen korrekt übernommen wurden.

> **Tipp für die Veröffentlichung:**  
> Wenn du mehrere Änderungen an der Website vornimmst, ist es oft sinnvoll, diese zusammen zu veröffentlichen, um die Anzahl der GitHub-Commits und die damit verbundenen Wartezeiten zu reduzieren. Teste alle Änderungen lokal gründlich, bevor du sie veröffentlichst.

## Häufige Fragen und Probleme

Hier sind einige häufige Fragen und Probleme im Zusammenhang mit der Navigation und ihre Lösungen:

### "Ich habe einen Menüpunkt hinzugefügt, aber er wird nicht angezeigt."

**Mögliche Ursachen und Lösungen:**
1. **Syntax-Fehler**: Überprüfe, ob alle Klammern, Anführungszeichen und Kommas korrekt sind.
2. **Fehlender Build**: Stelle sicher, dass du die Website neu gebaut hast, nachdem du die Änderungen gespeichert hast.
3. **Cache-Problem**: Drücke Strg+F5 (oder Cmd+F5 auf Mac), um den Browser-Cache zu umgehen.

### "Die Navigation sieht auf meinem Smartphone anders aus als auf meinem Computer."

Das ist normal und beabsichtigt! Die Hopsa-Website verwendet ein responsives Design, das die Navigation auf kleineren Bildschirmen anpasst, um eine bessere Benutzererfahrung zu bieten. Auf sehr kleinen Bildschirmen könnte die Navigation sogar zu einem "Hamburger-Menü" (drei horizontale Linien) zusammengeklappt werden, das man antippen muss, um die vollständige Navigation zu sehen.

### "Ich möchte ein Dropdown-Menü in der Navigation hinzufügen."

Die aktuelle Implementierung der Hopsa-Navigation unterstützt keine Dropdown-Menüs. Um ein Dropdown-Menü hinzuzufügen, wären umfangreichere Änderungen an den Dateien header.njk und möglicherweise auch an CSS- und JavaScript-Dateien erforderlich. Dies ist eine fortgeschrittene Änderung, für die wir empfehlen, einen Webentwickler zu konsultieren.

### "Die Navigation wird nicht richtig angezeigt oder funktioniert nicht wie erwartet."

Wenn die Navigation nicht richtig angezeigt wird oder nicht wie erwartet funktioniert, überprüfe Folgendes:
1. **Syntax-Fehler**: Überprüfe, ob alle Klammern, Anführungszeichen und Kommas korrekt sind.
2. **Fehlende oder fehlerhafte Links**: Stelle sicher, dass alle Pfade in der Navigation korrekt sind und auf existierende Seiten verweisen.
3. **CSS-Probleme**: Wenn das Aussehen der Navigation nicht stimmt, könnte es ein Problem mit den CSS-Definitionen geben. Dies ist jedoch unwahrscheinlich, wenn du nur die Navigation-Listen bearbeitet hast.

Wenn du das Problem nicht lösen kannst, kannst du die header.njk- und footer.njk-Dateien auf ihren ursprünglichen Zustand zurücksetzen, indem du sie aus dem GitHub-Repository neu herunterlädst oder eine Sicherungskopie verwendest.

## Erweiterte Anpassungen (für Fortgeschrittene)

Wenn du fortgeschrittenere Änderungen an der Navigation vornehmen möchtest, wie z.B. das Hinzufügen von Dropdown-Menüs, das Ändern des Aussehens oder des Verhaltens der Navigation, sind dafür tiefergehende Kenntnisse in HTML, CSS und möglicherweise JavaScript erforderlich. 

Hier sind einige Bereiche, in denen du weitergehende Anpassungen vornehmen könntest:

1. **Aussehen der Navigation**: Dies wird hauptsächlich durch CSS-Klassen gesteuert, die im HTML-Code der header.njk- und footer.njk-Dateien definiert sind.

2. **Responsives Verhalten**: Wie die Navigation auf verschiedenen Bildschirmgrößen erscheint, wird ebenfalls durch CSS-Klassen gesteuert (insbesondere durch Tailwind-CSS-Klassen wie `md:w-1/2`).

3. **Interaktives Verhalten**: Für fortgeschrittene interaktive Elemente wie Dropdown-Menüs oder eine mobile Navigation mit einem "Hamburger"-Button wäre JavaScript erforderlich.

Diese fortgeschrittenen Anpassungen gehen über den Rahmen dieses Leitfadens hinaus. Wenn du solche Änderungen vornehmen möchtest, empfehlen wir dir, einen Webentwickler zu konsultieren oder dich weiter in die entsprechenden Technologien einzuarbeiten.

## ChatGPT als Helfer bei Navigationsfragen

ChatGPT kann ein wertvoller Helfer sein, wenn du spezifische Fragen zur Navigation hast oder Hilfe bei der Lösung von Problemen benötigst. Hier sind einige nützliche Prompts für Navigationsbezogene Fragen:

### Für Hilfe bei der Strukturierung der Navigation:

```
"Ich möchte die Navigation meiner Hopsa-Website neu strukturieren. Hier sind die Seiten, die ich habe: [Liste der Seiten]. Wie würdest du empfehlen, diese in der Hauptnavigation und Footer-Navigation anzuordnen, um eine optimale Benutzererfahrung zu bieten?"
```

### Für Hilfe bei der Fehlerbehebung:

```
"Ich habe die Hauptnavigation der Hopsa-Website folgendermaßen geändert [zeige deinen Code], aber jetzt wird sie nicht richtig angezeigt. Was könnte das Problem sein?"
```

### Für erweiterte Anpassungsideen:

```
"Ich möchte das Aussehen der Navigation der Hopsa-Website ändern, um sie auffälliger zu gestalten. Welche CSS-Klassen könnte ich dafür anpassen?"
```

> **Tipp für hilfreiche ChatGPT-Antworten:**  
> Je spezifischer du bist und je mehr Kontext du gibst, desto hilfreicher kann ChatGPT sein. Wenn du Probleme mit dem Code hast, teile den relevanten Code oder mache einen Screenshot. Beschreibe genau, was du erreichen möchtest oder welches Problem du hast.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie die Navigation der Hopsa-Website strukturiert ist
- Wie du die Hauptnavigation anpassen kannst
- Wie du die Footer-Navigation anpassen kannst
- Tipps für eine benutzerfreundliche Navigation
- Wie du Navigationsprobleme lösen kannst

Mit diesen Kenntnissen kannst du die Navigation der Hopsa-Website an deine Bedürfnisse anpassen und so die Benutzererfahrung für die Besucher verbessern. Eine klare, logische Navigation ist ein wesentlicher Bestandteil einer erfolgreichen Website und hilft den Besuchern, schnell zu den Informationen zu gelangen, die sie suchen.

Im nächsten Kapitel lernen wir, wie du neue Seiten für die Hopsa-Website erstellen kannst, damit du deine frisch angepasste Navigation mit Inhalten füllen kannst.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Neue Seiten erstellen" lernst du, wie du neue Inhaltsseiten für die Hopsa-Website erstellen und mit Inhalten füllen kannst – von einer einfachen Textseite bis hin zu komplexeren Layouts mit Bildern und anderen Medien.

# 9. Neue Seiten erstellen

## Erweitere deine Website mit frischen Inhalten

Willkommen zu Kapitel 9 unseres Leitfadens! Nachdem du nun weißt, wie du die Navigation anpassen kannst, ist es Zeit, deine Website mit neuen Seiten zu erweitern. In diesem Kapitel zeigen wir dir, wie du von Grund auf neue Seiten für die Hopsa-Website erstellst – sei es für ein neues Projekt, ein spezielles Event oder eine thematische Unterseite. Keine Sorge, wenn du noch nie zuvor Webseiten erstellt hast – wir führen dich Schritt für Schritt durch den Prozess und machen es so einfach wie möglich.

> **Das Wichtigste zuerst**: Neue Seiten für die Hopsa-Website erstellst du als einfache Markdown-Dateien (mit der Endung .md) im src-Ordner. Jede Seite besteht aus einem "Frontmatter"-Bereich mit Metadaten und dem eigentlichen Inhalt in Markdown-Format. Mit diesen zwei Elementen kannst du innerhalb weniger Minuten eine neue Seite erstellen und veröffentlichen!

### Was wir in diesem Kapitel behandeln:
- Wie du eine komplett neue Seite von Grund auf erstellst
- Die Anatomie einer Hopsa-Webseite verstehen (Frontmatter und Inhalt)
- Wie du verschiedene Layouts und Formatierungen für deine Seite verwendest
- Wie du alternative URLs (Umleitungen) für deine Seite einrichtest
- Wie du deine neue Seite in die bestehende Website einbindest
- Praktische Beispiele für verschiedene Arten von Seiten

## Eine neue Seite von Grund auf erstellen

Jede Seite der Hopsa-Website beginnt als einfache Textdatei mit der Endung `.md` (für Markdown). Diese Dateien werden später während des Build-Prozesses in HTML-Seiten umgewandelt, die dann im Internet angezeigt werden können.

### Die Voraussetzungen

Bevor du eine neue Seite erstellst, stelle sicher, dass du:

1. VS Code installiert hast (wie in Kapitel 4 beschrieben)
2. Das Hopsa-Repository lokal auf deinem Computer hast (wie in Kapitel 5 beschrieben)
3. Die grundlegende Struktur der Website kennst (aus Kapitel 1)

### Schritt 1: Eine neue Markdown-Datei erstellen

Beginnen wir mit dem Erstellen einer neuen Datei:

1. **Öffne VS Code** und stelle sicher, dass das Hopsa-Projekt geöffnet ist.
2. **Navigiere zum src-Ordner** in der Explorer-Seitenleiste (links).
3. **Rechtsklick auf den src-Ordner** und wähle "Neue Datei".
4. **Gib einen Dateinamen ein**, z.B. `neueprojekte.md`. 
   
   > **Tipp zur Dateibenennung:**  
   > - Verwende aussagekräftige Namen, die den Inhalt der Seite beschreiben.
   > - Verwende nur Kleinbuchstaben und keine Umlaute oder Sonderzeichen.
   > - Verwende Bindestriche statt Leerzeichen, z.B. `neue-projekte.md` statt `neue projekte.md`.
   > - Die Dateiendung `.md` ist wichtig – sie zeigt an, dass es sich um eine Markdown-Datei handelt.

5. **Drücke Enter**, um die Datei zu erstellen. Die neue Datei wird nun im Editor geöffnet.

> **Was ist Markdown?**  
> Markdown ist eine einfache Auszeichnungssprache, mit der du formatierten Text erstellen kannst, ohne HTML-Kenntnisse zu benötigen. Du verwendest einfache Symbole zum Formatieren: `#` für Überschriften, `*` für kursiv, `**` für fett usw. Wir haben Markdown in Kapitel 6 ausführlicher behandelt, aber keine Sorge – wir frischen dein Wissen hier wieder auf!

### Schritt 2: Die Grundstruktur einrichten – Der "Frontmatter"

Jede Seite auf der Hopsa-Website beginnt mit einem speziellen Abschnitt, dem sogenannten "Frontmatter". Dieser enthält Metadaten über die Seite und wird durch drei Bindestriche (`---`) am Anfang und Ende gekennzeichnet.

Hier ist ein Beispiel für einen einfachen Frontmatter:

```markdown
---
layout: default.njk
title: Neue Projekte
redirect: [projekte, neue, ideen]
---
```

Lass uns die einzelnen Elemente erklären:

- **layout**: Bestimmt das Layout (die Vorlage), das für diese Seite verwendet wird. Die Hopsa-Website hat mehrere Layouts:
  - default.njk: Standard-Layout mit normaler Schriftart
  - default-serif.njk: Layout mit Serifenschrift (elegant für Texte)
  - default-centered.njk: Zentriertes Layout
  - default-centered-serif.njk: Zentriertes Layout mit Serifenschrift

- **title**: Der Titel der Seite, der im Browser-Tab angezeigt wird.

- **redirect**: Alternative URLs für diese Seite. Wenn jemand z.B. `hopsa-berlin.de/projekte` eingibt, wird er automatisch zu deiner neuen Seite weitergeleitet. Du kannst mehrere Alternativen als Liste angeben.

> **Was ist ein Frontmatter?**  
> Der Frontmatter ist ein Abschnitt am Anfang einer Markdown-Datei, der in YAML-Format Metadaten über die Seite enthält. Es ist wie ein Informationsblatt mit Anweisungen, wie die Seite verarbeitet werden soll. Der Frontmatter wird nicht direkt auf der Seite angezeigt, sondern steuert, wie die Seite aufgebaut und angezeigt wird.

### Schritt 3: Den Inhalt der Seite erstellen

Nach dem Frontmatter (und der schließenden `---`-Linie) beginnt der eigentliche Inhalt deiner Seite. Hier kannst du Markdown verwenden, um deinen Text zu formatieren.

Hier ist ein einfaches Beispiel:

```markdown
# Neue Projekte bei Hopsa

Willkommen auf unserer Projektseite! Hier findest du Informationen zu unseren aktuellen und geplanten Projekten.

## Aktuelle Projekte

### Improvisationsworkshops für Anfänger

Wir planen eine Reihe von Workshops für absolute Anfänger im Bereich Improvisationstheater. Die Termine werden in Kürze bekannt gegeben.

### Kooperation mit lokalen Schulen

Unser neues Bildungsprojekt bringt Improvisationstheater in Berliner Schulen.

## Kommende Projekte

- Theaterfestival im Herbst 2025
- Podcast-Serie "Hinter den Kulissen"
- Improvisationshandbuch für Einsteiger
```

In diesem Beispiel haben wir:
- Eine Hauptüberschrift mit `#`
- Unterüberschriften mit `##` und `###`
- Eine Liste mit `-`
- Normalen Text in Absätzen

> **Die wichtigsten Markdown-Formatierungen:**  
> - `# Überschrift 1` = Hauptüberschrift
> - `## Überschrift 2` = Unterüberschrift
> - `### Überschrift 3` = Unter-Unterüberschrift
> - `**fetter Text**` = **fetter Text**
> - `*kursiver Text*` = *kursiver Text*
> - `- Listenpunkt` = Aufzählungspunkt
> - `1. Nummerierter Punkt` = Nummerierter Listenpunkt
> - `Linktext` = Linktext
> - `!Bildbeschreibung` = Bild einfügen

### Schritt 4: Die Seite speichern und lokal testen

Nachdem du den Frontmatter und den Inhalt erstellt hast:

1. **Speichere die Datei** mit `Strg+S` (oder `Cmd+S` auf Mac).
2. **Starte den lokalen Server** mit der run.bat-Datei (falls noch nicht geschehen).
3. **Öffne deinen Browser** und gehe zu `http://localhost:8080/neueprojekte` (oder wie auch immer du deine Datei genannt hast).
4. **Überprüfe das Ergebnis**: Deine neue Seite sollte nun angezeigt werden, komplett mit dem Hopsa-Header und -Footer.

> **Wenn deine Seite nicht erscheint:**  
> - Überprüfe, ob der Name der Markdown-Datei genau mit der URL übereinstimmt, die du aufrufst
> - Stelle sicher, dass der Frontmatter korrekt formatiert ist (drei Bindestriche am Anfang und Ende)
> - Überprüfe, ob die Datei tatsächlich im src-Ordner und nicht in einem Unterordner gespeichert ist
> - Starte den lokalen Server neu, indem du die run.bat-Datei schließt und erneut ausführst

## Erweiterte Seitengestaltung

Nachdem du nun weißt, wie du eine grundlegende Seite erstellen kannst, schauen wir uns einige fortgeschrittenere Gestaltungsmöglichkeiten an.

### Verschiedene Layouts verwenden

Die Hopsa-Website bietet verschiedene Layout-Vorlagen, die du im Frontmatter deiner Seite angeben kannst:

1. **default.njk** - Das Standard-Layout mit normaler Schriftart:
   ```markdown
   ---
   layout: default.njk
   title: Meine Seite
   ---
   ```

2. **default-serif.njk** - Layout mit Serifenschrift (gut für längere Texte):
   ```markdown
   ---
   layout: default-serif.njk
   title: Meine Seite mit Serifenschrift
   ---
   ```

3. **default-centered.njk** - Zentriertes Layout:
   ```markdown
   ---
   layout: default-centered.njk
   title: Meine zentrierte Seite
   ---
   ```

4. **default-centered-serif.njk** - Zentriertes Layout mit Serifenschrift:
   ```markdown
   ---
   layout: default-centered-serif.njk
   title: Meine zentrierte Seite mit Serifenschrift
   ---
   ```

Wähle das Layout, das am besten zum Inhalt deiner Seite passt. Für Textseiten ist oft default-serif.njk eine gute Wahl, während für Bildgalerien oder kurze Ankündigungen default-centered.njk besser geeignet sein könnte.

### Bilder hinzufügen

Bilder machen deine Seite ansprechender und informativer. So fügst du sie ein:

1. **Speichere das Bild** im Ordner assets. Du kannst auch Unterordner erstellen, z.B. `src/assets/projekte`.

2. **Füge das Bild in deine Markdown-Datei ein** mit der Syntax:
   ```markdown
   ![Beschreibung des Bildes](/assets/projekte/mein-bild.jpg)
   ```

3. **Für mehr Kontrolle über Größe und Ausrichtung**, verwende HTML:
   ```markdown
   <img src="/assets/projekte/mein-bild.jpg" alt="Beschreibung des Bildes" class="w-1/2 mx-auto">
   ```
   
   Dieser Code zeigt das Bild mit halber Breite (`w-1/2`) und zentriert (`mx-auto`).

> **Tipp für Bildoptimierung:**  
> Bevor du Bilder hochlädst, optimiere sie für das Web:
> - Verwende das WebP- oder JPEG-Format für Fotos
> - Halte die Dateigröße unter 300 KB, wenn möglich
> - Wähle sinnvolle Abmessungen (1200-2000 Pixel Breite ist oft ausreichend)
> - Gib deinen Bildern beschreibende Dateinamen

### Links zu anderen Seiten

Verknüpfe deine neue Seite mit anderen Teilen der Website durch Links:

1. **Link zu einer anderen Hopsa-Seite**:
   ```markdown
   [Schau dir unser Ensemble an](/ensemble)
   ```

2. **Link zu einer externen Website**:
   ```markdown
   [Besuche unsere Instagram-Seite](https://instagram.com/hopsa_berlin/)
   ```

3. **Link mit HTML (für zusätzliche Gestaltungsmöglichkeiten)**:
   ```markdown
   <a href="/kontakt" class="text-white hover:text-red-800">Kontaktiere uns</a>
   ```

### Fortgeschrittene Strukturen mit HTML und CSS

Die Hopsa-Website verwendet Tailwind CSS für die Gestaltung. Du kannst HTML-Elemente mit Tailwind-Klassen kombinieren, um komplexere Layouts zu erstellen:

#### Beispiel: Eine zweispaltige Ansicht

```markdown
<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2 md:pr-4">
        ## Linke Spalte
        
        Hier kommt der Inhalt für die linke Spalte.
    </div>
    <div class="w-full md:w-1/2 md:pl-4">
        ## Rechte Spalte
        
        Hier kommt der Inhalt für die rechte Spalte.
    </div>
</div>
```

Dieses Layout zeigt auf Mobilgeräten die Spalten untereinander und auf größeren Bildschirmen nebeneinander.

#### Beispiel: Eine hervorgehobene Box

```markdown
<div class="bg-gray-900 p-4 rounded-lg my-4">
    <h3 class="text-white">Wichtige Information</h3>
    <p class="text-gray-300">Dieser Text erscheint in einer dunkleren Box mit Abgerundeten Ecken.</p>
</div>
```

> **Tipp für HTML und CSS:**  
> Wenn du unsicher bist, wie du bestimmte Layouts oder Designelemente umsetzen kannst, schaue dir den Code bestehender Seiten an. Die meisten Gestaltungselemente der Hopsa-Website werden wiederverwendet, sodass du häufig Inspiration und Vorlagen in den vorhandenen Dateien finden kannst.

## Alternative URLs für deine Seite einrichten

Die Hopsa-Website hat ein cleveres System für Weiterleitungen, das es ermöglicht, mehrere URLs auf dieselbe Seite zu leiten. Dies ist nützlich, wenn:

- Benutzer verschiedene Begriffe suchen könnten
- Du eine kürzere, leichtere zu merkende URL benötigst
- Du befürchtest, dass Benutzer sich verschreiben könnten

### Weiterleitungen im Frontmatter definieren

Im Frontmatter deiner Seite kannst du mit dem `redirect`-Parameter alternative URLs definieren:

```markdown
---
layout: default.njk
title: Neue Projekte
redirect: [projekte, neue, ideen, zukunft]
---
```

Mit dieser Konfiguration würden folgende URLs alle zur selben Seite führen:
- `hopsa-berlin.de/neueprojekte` (der Dateiname)
- `hopsa-berlin.de/projekte`
- `hopsa-berlin.de/neue`
- `hopsa-berlin.de/ideen`
- `hopsa-berlin.de/zukunft`

> **Warum Weiterleitungen wichtig sind:**  
> Menschen denken und suchen unterschiedlich. Während du vielleicht "neueprojekte" als URL-Name logisch findest, könnten andere Benutzer nach "projekte" oder "ideen" suchen. Durch Weiterleitungen sorgst du dafür, dass alle diese Benutzer zur richtigen Seite gelangen.

### Globale Weiterleitungen für externe Links

Wenn du eine Weiterleitung zu einer externen Website erstellen möchtest (z.B. für Social-Media-Links), musst du die Datei redirects.json bearbeiten. Dies wird jedoch in Kapitel 12 genauer erklärt.

## Die neue Seite mit der Website verbinden

Eine neu erstellte Seite existiert zwar technisch auf der Website, aber ohne Links zu ihr werden Besucher sie kaum finden. Hier sind einige Möglichkeiten, deine neue Seite in die bestehende Website einzubinden:

### 1. In die Navigation aufnehmen

Wie in Kapitel 8 beschrieben, kannst du deine neue Seite zur Hauptnavigation oder zur Footer-Navigation hinzufügen:

1. **Öffne die Datei header.njk** für die Hauptnavigation oder footer.njk für die Footer-Navigation.

2. **Füge einen neuen Eintrag in die Navigation-Liste ein**:
   ```nunjucks
   {"name": "Neue Projekte", "path": "/neueprojekte"}
   ```

### 2. Links von anderen Seiten einrichten

Platziere strategisch Links zu deiner neuen Seite auf verwandten Seiten:

1. **Auf der Startseite**: Füge einen Link im Hauptbereich oder in einem hervorgehobenen Bereich hinzu.
2. **Auf thematisch verwandten Seiten**: Verlinke z.B. von der Ensemble-Seite zu deinen Projektseiten.
3. **Im Footer-Bereich**: Wenn die Seite wichtig genug ist, könnte ein permanenter Link im Footer sinnvoll sein.

Beispiel für einen Link-Button im Hopsa-Stil:

```markdown
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/neueprojekte"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Neue Projekte</div></a>
```

### 3. Auf Social Media teilen

Nach der Veröffentlichung der neuen Seite solltest du sie auch auf den Social-Media-Kanälen von Hopsa teilen, um Besucher auf die neue Seite aufmerksam zu machen.

## Praktische Beispiele für verschiedene Seitentypen

Um dir den Einstieg zu erleichtern, haben wir Vorlagen für verschiedene Arten von Seiten vorbereitet, die du für die Hopsa-Website erstellen könntest.

### Beispiel 1: Eine einfache Textseite

Diese Vorlage eignet sich für Ankündigungen, Informationsseiten oder Blog-Posts:

```markdown
---
layout: default-serif.njk
title: Workshop-Ankündigung
redirect: [workshop, ankundigung, impro-workshop]
---

# Workshop für Impro-Anfänger im Juli

## Improvisationstheater für Einsteiger

Wir freuen uns, einen speziellen Workshop für absolute Anfänger im Bereich Improvisationstheater ankündigen zu können.

### Was dich erwartet:

- Grundlagen der Improvisation
- Übungen zur Förderung von Spontaneität
- Erste Szenenarbeit in kleinen Gruppen
- Viel Spaß und neue Bekanntschaften

### Details:

- **Datum**: 15. Juli 2025
- **Uhrzeit**: 14:00 - 18:00 Uhr
- **Ort**: Jugendzentrum Königsstadt
- **Kosten**: 15€ (ermäßigt 10€)
- **Anmeldung**: per E-Mail an [hopsaberlin@gmail.com](mailto:hopsaberlin@gmail.com)

Keine Vorkenntnisse erforderlich! Bring einfach bequeme Kleidung und etwas zu trinken mit.

<div class="mt-8 text-lg flex items-center w-full justify-center">
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="mailto:hopsaberlin@gmail.com?subject=Anmeldung%20Workshop%20Juli"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Jetzt anmelden</div></a>
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/kontakt"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Kontakt</div></a>
</div>
```

### Beispiel 2: Eine Seite mit Bildern und mehreren Spalten

Diese Vorlage eignet sich für Projektvorstellungen, Fotogalerien oder Eventberichte:

```markdown
---
layout: default.njk
title: Unser Festival-Auftritt
redirect: [festival, auftritt, performance]
---

# Hopsa beim Improfestival Berlin 2025

<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-1/2 md:pr-4">
        <img src="/assets/festival-auftritt.jpg" alt="Hopsa auf der Festivalbühne" class="rounded-lg shadow-lg">
        
        ## Unser Auftritt
        
        Am 5. März 2025 durften wir beim größten Improvisationstheater-Festival Berlins auftreten. Vor ausverkauftem Haus präsentierten wir eine 45-minütige Show mit dem Titel "Spontan durch die Nacht".
        
        Das Publikum war begeistert und wir hatten eine fantastische Zeit auf der Bühne des Kulturhauses Mitte.
    </div>
    <div class="w-full md:w-1/2 md:pl-4">
        ## Impressionen
        
        <div class="grid grid-cols-2 gap-2">
            <div><img src="/assets/festival-1.jpg" alt="Szene aus dem Auftritt" class="rounded"></div>
            <div><img src="/assets/festival-2.jpg" alt="Szene aus dem Auftritt" class="rounded"></div>
            <div><img src="/assets/festival-3.jpg" alt="Szene aus dem Auftritt" class="rounded"></div>
            <div><img src="/assets/festival-4.jpg" alt="Szene aus dem Auftritt" class="rounded"></div>
        </div>
        
        ### Stimmen aus dem Publikum
        
        > "Die beste Impro-Show, die ich seit langem gesehen habe!" - Maren K.
        
        > "Unglaublich, wie schnell die Gruppe auf Zuruf reagieren konnte." - Thomas M.
    </div>
</div>

## Weitere Festival-Highlights

- Workshop "Szenenaufbau im Impro" mit Sarah Johnson
- Internationale Gäste aus Polen, Frankreich und Dänemark
- Late-Night-Impro-Jam mit allen Teilnehmern

<div class="mt-8 text-lg flex items-center w-full justify-center">
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/termine"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Kommende Auftritte</div></a>
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="https://instagram.com/hopsa_berlin/"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg"><img src="/assets/logos/instagram.png" alt="Instagram" style="height: 1.2em;" class="mt-1">&ensp;Mehr Bilder</div></a>
</div>
```

### Beispiel 3: Eine FAQ-Seite

Diese Vorlage eignet sich für Fragen und Antworten, Informationsseiten oder Anleitungen:

```markdown
---
layout: default-serif.njk
title: Häufige Fragen zum Improtheater
redirect: [faq, haeufige-fragen, fragen, improtheater-faq]
---

# Häufige Fragen zum Improtheater

<div class="space-y-6">

## Was ist Improvisationstheater?

Improvisationstheater (kurz: Impro) ist eine Form des Theaters, bei der die Darsteller ohne Skript oder vorbereiteten Text auftreten. Alles entsteht spontan auf der Bühne, oft basierend auf Vorgaben aus dem Publikum.

#### 

## Brauche ich Erfahrung, um bei euren Workshops mitzumachen?

Nein, absolut nicht! Unsere Workshops sind für alle Erfahrungsstufen geeignet, von kompletten Anfängern bis zu erfahrenen Impro-Spielern. Besonders für Einsteiger bieten wir regelmäßig spezielle Anfänger-Workshops an.

#### 

## Wie oft probt ihr?

Wir treffen uns jede Woche mittwochs von 19:00 bis 21:00 Uhr im Jugendzentrum Königsstadt. Im Sommer proben wir manchmal auch draußen in Kreuzberg.

#### 

## Kann ich bei euch mitmachen?

Ja, wir freuen uns immer über neue Gesichter! Am besten kommst du einfach zu einer unserer offenen Proben vorbei. Alle Details findest du auf unserer [Mitmachen-Seite](/kurs).

#### 

## Wie viel kostet ein Auftritt von Hopsa?

Die Kosten für einen Auftritt hängen von verschiedenen Faktoren ab: Dauer, Anfahrt, Art der Veranstaltung etc. Kontaktiere uns einfach über unser [Kontaktformular](/kontakt), und wir erstellen dir ein individuelles Angebot.

#### 

## Was ist der Unterschied zwischen Improvisationstheater und normalem Theater?

Der Hauptunterschied liegt in der Spontaneität. Beim klassischen Theater wird ein fertiges Skript einstudiert und aufgeführt. Beim Improtheater hingegen wird alles in dem Moment erschaffen, in dem es aufgeführt wird – ohne Vorbereitung, basierend auf Ideen des Publikums.

</div>

<div class="mt-8 text-lg flex items-center w-full justify-center">
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/improvisation"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Mehr über Improvisation</div></a>
<a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/kontakt"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Weitere Fragen?</div></a>
</div>
```

## Häufige Fragen und Problemlösungen

### "Meine neue Seite wird nicht angezeigt!"

**Mögliche Ursachen und Lösungen:**

1. **Datei ist im falschen Ordner**: Stelle sicher, dass die Markdown-Datei direkt im src-Ordner liegt, nicht in einem Unterordner.

2. **Falscher Dateiname**: Überprüfe, ob der Dateiname genau mit der URL übereinstimmt, die du aufrufst. Die URL `hopsa-berlin.de/neue-projekte` entspricht der Datei `neue-projekte.md` (mit Bindestrich).

3. **Frontmatter-Probleme**: Überprüfe, ob der Frontmatter korrekt formatiert ist:
   - Drei Bindestriche am Anfang (`---`)
   - Gültige Einträge für layout, title, etc.
   - Drei Bindestriche am Ende (`---`)

4. **Build-Prozess nicht ausgeführt**: Starte den lokalen Server neu, um sicherzustellen, dass die Seite gebaut wird.

### "Die Formatierung funktioniert nicht wie erwartet"

**Mögliche Ursachen und Lösungen:**

1. **Markdown-Syntax**: Überprüfe, ob deine Markdown-Syntax korrekt ist:
   - Leerzeichen nach `#` für Überschriften (`# Überschrift` statt `#Überschrift`)
   - Kein Leerzeichen zwischen Sternchen und Text bei **fett** und *kursiv*
   - Leere Zeile vor und nach Listen

2. **HTML und Markdown mischen**: Wenn du HTML und Markdown mischst, kann es zu unerwarteten Ergebnissen kommen. Versuche, sie zu trennen, z.B. mit einem Absatz zwischen HTML und Markdown.

3. **CSS-Klassen überprüfen**: Wenn du Tailwind-CSS-Klassen verwendest, stelle sicher, dass sie korrekt geschrieben sind.

### "Wie kann ich eine Seite wieder löschen?"

Wenn du eine Seite entfernen möchtest:

1. **Lösche die Markdown-Datei** aus dem src-Ordner.
2. **Entferne alle Links** zu dieser Seite aus der Navigation und anderen Seiten.
3. **Führe den Build-Prozess erneut aus**, um die Änderungen zu übernehmen.

### "Kann ich eine Seite vorübergehend deaktivieren?"

Die Hopsa-Website hat keinen integrierten Mechanismus, um Seiten vorübergehend zu deaktivieren. Du hast folgende Möglichkeiten:

1. **Datei umbenennen** (z.B. `seite.md` zu `seite.md.bak`), sodass sie nicht mehr Teil des Builds ist.
2. **Seite aus der Navigation entfernen**, sodass sie zwar noch existiert, aber nicht mehr direkt verlinkt ist.
3. **Einen Hinweis auf der Seite platzieren**, dass sie sich im Aufbau/in Überarbeitung befindet.

## Best Practices für die Erstellung neuer Seiten

Hier sind einige bewährte Methoden, die dir helfen, qualitativ hochwertige und benutzerfreundliche Seiten zu erstellen:

### 1. Plane deine Seite vor der Erstellung

Skizziere die Struktur und den Inhalt deiner Seite, bevor du mit dem Schreiben beginnst. Frage dich:
- Was ist der Zweck dieser Seite?
- Welche Informationen sollte sie enthalten?
- Wie sollte sie strukturiert sein?
- Welche Bilder oder Medien sollten eingebunden werden?

### 2. Halte die URL kurz und eindeutig

Wähle einen prägnanten, aber beschreibenden Dateinamen:
- Verwende Bindestriche statt Leerzeichen
- Halte ihn kurz, aber verständlich
- Verwende keine Sonderzeichen oder Umlaute

### 3. Strukturiere deinen Inhalt klar

- Verwende Überschriften (# für Hauptüberschriften, ## für Unterüberschriften) zur Gliederung
- Beschränke dich auf maximal drei Überschriftenebenen
- Beginne mit einer einleitenden Zusammenfassung
- Verwende kurze Absätze und Aufzählungen für bessere Lesbarkeit

### 4. Optimiere für die Lesbarkeit

- Wähle das richtige Layout (serif für längere Texte, centered für kurze Ankündigungen)
- Setze Bilder ein, um den Text aufzulockern
- Verwende Fettdruck für wichtige Informationen
- Nutze Aufzählungen und Tabellen, um Informationen übersichtlich zu strukturieren

### 5. Vergiss die alternativen URLs nicht

Überlege, unter welchen Begriffen Benutzer deine Seite suchen könnten, und füge diese als Weiterleitungen hinzu:
```markdown
redirect: [workshops, kurse, lernen, mitmachen]
```

### 6. Teste auf verschiedenen Geräten

Die Hopsa-Website ist responsiv, was bedeutet, dass sie sich an verschiedene Bildschirmgrößen anpasst. Überprüfe deine neue Seite auf:
- Desktop-Computer
- Tablet
- Smartphone

Achte besonders auf Bilder und komplexe Layouts, die auf kleinen Bildschirmen anders aussehen können.

## ChatGPT als Helfer bei der Seitenerstellung

ChatGPT kann dir bei der Erstellung neuer Seiten für die Hopsa-Website auf vielfältige Weise helfen. Hier sind einige nützliche Prompts:

### Für Inhaltsideen und -struktur:

```
"Ich möchte eine neue Seite über Improvisationsworkshops für meine Theatergruppe erstellen. Welche Inhalte sollten unbedingt enthalten sein und wie könnte ich die Seite strukturieren?"
```

### Für die Erstellung von Frontmatter:

```
"Ich erstelle eine neue Seite für die Hopsa-Website mit dem Titel 'Theaterworkshops für Schulen'. Welche Begriffe sollte ich als Weiterleitungen (redirects) hinzufügen, damit die Seite gut gefunden wird?"
```

### Für die Umwandlung von Text in Markdown:

```
"Kannst du diesen Text in Markdown umwandeln, sodass ich ihn für eine neue Hopsa-Website-Seite verwenden kann?

Titel: Unsere Kooperationen
Einleitung: Hopsa arbeitet regelmäßig mit verschiedenen Kultureinrichtungen zusammen.

Unsere Partner:
- Kulturhaus Mitte (seit 2023)
- Jugendzentrum Kreuzberg
- Berliner Improtheater-Netzwerk"
```

### Für komplexere Layouts:

```
"Ich möchte auf meiner Hopsa-Seite eine Teamvorstellung mit Fotos in einem Raster-Layout erstellen. Wie könnte der HTML/CSS-Code dafür aussehen, basierend auf dem Tailwind-CSS-Framework, das Hopsa verwendet?"
```

### Für SEO-Optimierung (Suchmaschinenoptimierung):

```
"Welche Schlüsselwörter sollte ich in meiner neuen Seite über Improvisationstheater-Workshops in Berlin verwenden, damit sie gut in Suchmaschinen gefunden wird?"
```

> **Tipp für hilfreiche ChatGPT-Antworten:**  
> Je detaillierter du deine Anfrage formulierst, desto hilfreicher kann die Antwort sein. Gib Kontext über die Hopsa-Website, den Zweck der neuen Seite und deine Zielgruppe an. Wenn du bereits einen Entwurf hast, kannst du ihn auch zur Überarbeitung an ChatGPT senden.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie du eine neue Seite von Grund auf erstellst
- Wie du den Frontmatter und Markdown-Inhalt für deine Seite strukturierst
- Wie du verschiedene Layouts und Formatierungen für deine Seite verwendest
- Wie du alternative URLs für deine Seite einrichtest
- Wie du deine neue Seite in die bestehende Website einbindest
- Praktische Beispiele und Vorlagen für verschiedene Arten von Seiten

Mit diesem Wissen kannst du nun eigenständig neue Inhalte für die Hopsa-Website erstellen, sei es für Veranstaltungsankündigungen, Projektbeschreibungen, Blogbeiträge oder andere Informationsseiten.

Denke daran, dass jede neue Seite ein Baustein ist, der die Online-Präsenz von Hopsa erweitert und verbessert. Je mehr qualitativ hochwertige Inhalte du erstellst, desto wertvoller wird die Website für Besucher und desto besser wird sie auch von Suchmaschinen gefunden.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Social Media-Einbindung verwalten" lernst du, wie du Instagram-Feeds, YouTube-Videos und andere Social Media-Inhalte in deine Hopsa-Website einbinden kannst, um deine Online-Präsenz zu stärken und aktuell zu halten.

# 10. Social Media-Einbindung verwalten

## Deine Online-Präsenz optimal nutzen

Herzlich willkommen zu Kapitel 10 unseres Leitfadens! In diesem Kapitel lernst du, wie du Social Media-Inhalte in die Hopsa-Website einbindest und aktuell hältst. Social Media ist für eine Improtheatergruppe wie Hopsa enorm wichtig – dort teilst du Auftrittstermine, Fotos, Videos und bleibst mit deinem Publikum in Kontakt. Mit einer guten Integration dieser Kanäle in deine Website schaffst du ein einheitliches Online-Erlebnis für deine Besucher.

> **Das Wichtigste zuerst**: Die Hopsa-Website bindet Social Media auf zwei Arten ein: durch direkte Feeds (wie Instagram-Posts, YouTube-Videos oder SoundCloud-Tracks) und durch Links zu euren Social-Media-Profilen. In diesem Kapitel zeigen wir dir, wie du beides aktualisieren und anpassen kannst, ohne Programmierkentnisse zu benötigen!

### Was wir in diesem Kapitel behandeln:
- Wie du den Instagram-Feed auf der Website aktualisierst
- Wie du YouTube-Videos korrekt einbindest
- Wie du SoundCloud-Inhalte auf der Website verwaltest
- Wie du die Social Media-Links anpasst und aktualisierst
- Tipps für eine optimale Social Media-Integration

## Instagram-Feeds aktualisieren

Instagram ist für kreative Gruppen wie Hopsa besonders wertvoll, da es sehr visuell ist und sich perfekt eignet, um Fotos von Auftritten, kurze Videoclips und Ankündigungen zu teilen. Auf der Hopsa-Website ist ein Instagram-Feed eingebunden, der die neuesten Posts anzeigt.

### Wie Instagram-Einbindung funktioniert

Bevor wir ins Detail gehen, ist es hilfreich zu verstehen, wie Instagram-Feeds in Websites eingebunden werden:

> **Was ist ein Embed-Code?**  
> Ein Embed-Code ist ein Stück HTML-Code, das du von einer Website (wie Instagram) erhältst und in deine eigene Website einfügst, um dort Inhalte dieser anderen Website anzuzeigen. Es ist wie ein Fenster zu dieser anderen Website, direkt in deiner eigenen Website eingebaut.

Die Hopsa-Website verwendet einen speziellen Instagram-Embed-Code, der in der Datei instagram-embed.html im `_includes`-Ordner gespeichert ist. Dieser Code verlinkt auf das Instagram-Profil von Hopsa Berlin und zeigt aktuelle Posts an.

### Den Instagram-Embed-Code finden und verstehen

1. **Öffne VS Code** und navigiere zum Hopsa-Projekt.
2. **Öffne die Datei instagram-embed.html** im Ordner _includes.
3. **Schaue dir den Code an**. Er sollte etwa so aussehen:

```html
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/hopsa_berlin/" data-instgrm-version="12" style="...">
    <!-- Hier steht mehr Code -->
</blockquote>
```

Der wichtigste Teil ist der `data-instgrm-permalink`-Wert, der angibt, welches Instagram-Profil eingebunden wird. In diesem Fall ist es "https://www.instagram.com/hopsa_berlin/".

### Das Instagram-Profil aktualisieren

Wenn du das verlinkte Instagram-Profil ändern möchtest (zum Beispiel, falls sich euer Instagram-Kontoname ändert), folge diesen Schritten:

1. **Öffne die Datei instagram-embed.html** im Ordner _includes.
2. **Suche nach "hopsa_berlin"** im Text (normalerweise in der ersten Zeile).
3. **Ersetze alle Vorkommen** von "hopsa_berlin" mit eurem neuen Instagram-Benutzernamen.
4. **Achte besonders auf diese Stellen**:
   ```html
   data-instgrm-permalink="https://www.instagram.com/hopsa_berlin/"
   ```
   und später im Code:
   ```html
   <a id="main_link" href="hopsa_berlin" ...
   ```
5. **Speichere die Datei** und teste die Änderungen lokal mit run.bat.

> **Wichtig zu wissen:**  
> Der Instagram-Feed wird nur korrekt angezeigt, wenn die Webseite online ist. In der lokalen Vorschau siehst du möglicherweise nur ein graues Feld oder ein unvollständiges Laden des Feeds.

### Den Instagram-Feed auf verschiedenen Seiten aktualisieren

Der Instagram-Feed wird auf mehreren Seiten der Hopsa-Website verwendet:

1. **Auf der Startseite** (index.md)
2. **Auf der Terminseite** (termine.md)
3. **Auf der Links-Seite** (links.md mit embeddings.md)

Wenn du den Feed auf allen Seiten aktualisieren möchtest, musst du nur die Datei instagram-embed.html einmal bearbeiten – die Änderung wird dann auf allen Seiten wirksam, die diesen Feed einbinden.

### Einbindungsprobleme beheben

Wenn der Instagram-Feed nicht richtig angezeigt wird, liegt es häufig an einem dieser Probleme:

1. **Instagram-API-Änderungen**: Instagram ändert regelmäßig den Embed-Code. Falls der Feed plötzlich nicht mehr funktioniert, könnte es an einer API-Änderung liegen. In diesem Fall musst du einen neuen Embed-Code von Instagram holen.

2. **Fehlende JavaScript-Bibliothek**: Der Instagram-Feed benötigt Instagram's JavaScript-Bibliothek. Diese wird normalerweise automatisch geladen, könnte aber blockiert sein.

3. **Falsche URLs oder Benutzername**: Überprüfe, ob der Instagram-Benutzername in allen Teilen des Embed-Codes korrekt ist.

#### Einen neuen Instagram-Embed-Code generieren

Wenn der Feed nicht mehr funktioniert, ist es oft am einfachsten, einen komplett neuen Embed-Code zu generieren:

1. **Besuche das Instagram-Profil** von Hopsa (oder das Profil, das du einbinden möchtest).
2. **Klicke auf die drei Punkte** (...) in der oberen rechten Ecke des Profils.
3. **Wähle "Einbetten"** aus dem Menü.
4. **Kopiere den generierten Code**.
5. **Ersetze den gesamten Inhalt** von instagram-embed.html mit diesem neuen Code.

> **Tipp zur Performance:**  
> Instagram-Feeds können die Ladezeit deiner Website verlangsamen. Überlege dir, ob du den Feed wirklich auf allen Seiten benötigst oder ob es reicht, ihn nur auf der Social-Media-Seite einzubinden und auf den anderen Seiten nur Links zu Instagram anzubieten.

## YouTube-Videos einbinden

YouTube-Videos sind eine großartige Möglichkeit, Auftritte, Proben oder andere wichtige Momente zu teilen. Die Hopsa-Website kann sowohl einzelne Videos als auch einen YouTube-Kanalbutton einbinden.

### Den YouTube-Embed-Code verstehen

Öffne die Datei youtube-embed.html im Ordner _includes. Der Code sieht ungefähr so aus:

```html
<iframe frameborder="0" src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channel=@HopsaBerlin&amp;layout=default&amp;theme=dark&amp;count=hidden&amp;origin=..." class="blocky"></iframe>
```

Dieser Code bindet einen Subscribe-Button für den YouTube-Kanal "@HopsaBerlin" ein.

### Das verlinkte YouTube-Konto ändern

Wenn ihr euren YouTube-Kanalnamen ändert oder einen anderen Kanal einbinden wollt:

1. **Öffne die Datei youtube-embed.html** im Ordner _includes.
2. **Suche nach "channel="** im Code.
3. **Ändere den Wert nach "channel="** von "@HopsaBerlin" in euren neuen YouTube-Kanalnamen.
4. **Speichere die Datei** und teste die Änderungen.

### Ein einzelnes YouTube-Video einbinden

Um ein einzelnes Video statt des Kanalbuttons einzubinden, musst du den Embed-Code für das Video holen und in eine Seite einfügen:

1. **Gehe zum YouTube-Video**, das du einbinden möchtest.
2. **Klicke auf "Teilen"** unter dem Video.
3. **Wähle "Einbetten"**.
4. **Kopiere den generierten Code**, der etwa so aussieht:
   ```html
   <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   ```
5. **Füge diesen Code in die gewünschte Markdown-Datei ein** (z.B. in eine neue Seite über einen besonderen Auftritt).

> **Was ist eine iframe?**  
> Eine iframe (kurz für "inline frame") ist wie ein Fenster innerhalb deiner Webseite, das den Inhalt einer anderen Webseite anzeigt. Es wird oft verwendet, um Videos, Karten oder Social Media-Feeds einzubinden, ohne die komplette externe Seite kopieren zu müssen.

### Größe und Aussehen des Videos anpassen

Du kannst die Größe und das Aussehen des eingebetteten Videos anpassen:

```html
<div class="w-full md:w-2/3 mx-auto my-8">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-auto aspect-video"></iframe>
</div>
```

Dieses Beispiel zeigt das Video in responsiver Größe (auf großen Bildschirmen 2/3 der Breite, auf kleinen die volle Breite) und zentriert mit etwas Abstand oben und unten.

### Mehrere Videos in einer Galerie anordnen

Für eine Sammlung mehrerer Videos kannst du sie in einem Raster anordnen:

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-auto aspect-video"></iframe>
    </div>
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-auto aspect-video"></iframe>
    </div>
</div>
```

Dies erstellt ein zweispaltiges Raster auf größeren Bildschirmen und ein einspaltiges Raster auf kleinen Bildschirmen.

### Häufige Probleme mit YouTube-Embeds

Bei Problemen mit der YouTube-Einbindung überprüfe folgende Punkte:

1. **Falscher Video-ID**: Stelle sicher, dass die Video-ID in der URL korrekt ist.
2. **Urheberrechtsprobleme**: Wenn das Video aus urheberrechtlichen Gründen nicht eingebunden werden kann, wird ein Fehler angezeigt.
3. **Fehlende Zustimmung zu Cookies**: Besucher müssen möglicherweise erst YouTube-Cookies akzeptieren.

## Soundcloud-Inhalte verwalten

SoundCloud ist eine großartige Plattform für Audioinhalte wie Podcasts, Musikstücke oder Aufnahmen von Auftritten. Die Hopsa-Website bindet bereits einen SoundCloud-Player ein.

### Den SoundCloud-Embed-Code verstehen

Öffne die Datei soundcloud-embed.html im Ordner _includes. Der Code sieht etwa so aus:

```html
<iframe title="Soundcloud Podcast von Hopsa" class="w-full" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fhopsa_berlin&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" data-testid="embed-preview-iframe" height="314"></iframe>
```

Der wichtigste Teil ist die URL in der src-Eigenschaft, insbesondere der Teil `url=https%3A%2F%2Fsoundcloud.com%2Fhopsa_berlin`, der auf das SoundCloud-Profil "hopsa_berlin" verweist.

### Das SoundCloud-Profil aktualisieren

Wenn sich euer SoundCloud-Benutzername ändert:

1. **Öffne die Datei soundcloud-embed.html** im Ordner _includes.
2. **Suche nach "soundcloud.com"** im Code.
3. **Ändere den Teil nach "soundcloud.com/"** von "hopsa_berlin" in euren neuen SoundCloud-Benutzernamen.
4. **Speichere die Datei** und teste die Änderungen.

### Einen einzelnen SoundCloud-Track oder eine Playlist einbinden

Du kannst auch einen einzelnen Track oder eine Playlist statt des gesamten Profils einbinden:

1. **Gehe zum SoundCloud-Track oder zur Playlist**, die du einbinden möchtest.
2. **Klicke auf "Teilen"** (Share).
3. **Klicke auf "Embed"** (Einbetten).
4. **Passe die Optionen an**, falls gewünscht.
5. **Kopiere den generierten Code**.
6. **Ersetze den Inhalt von soundcloud-embed.html** mit diesem neuen Code oder füge ihn direkt in eine Markdown-Seite ein.

### SoundCloud-Player anpassen

Du kannst das Aussehen des SoundCloud-Players anpassen, indem du Parameter in der URL änderst:

- `&color=%23ff5500`: Ändert die Akzentfarbe des Players (hier orangefarbene Farbe #ff5500)
- `&auto_play=false`: Setzt auf `true`, wenn der Player automatisch starten soll
- `&hide_related=false`: Setzt auf `true`, um verwandte Tracks auszublenden
- `&visual=true`: Zeigt größere Artwork-Vorschaubilder

Beispiel für einen schlichten, schmalen Player in grauer Farbe:

```html
<iframe class="w-full" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fhopsa_berlin&amp;color=%23888888&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=false&amp;visual=false" height="166"></iframe>
```

> **Tipp für Audio-Inhalte:**  
> Audio-Inhalte können helfen, die Persönlichkeit eurer Gruppe zu vermitteln. Überlege dir besondere Audio-Inhalte wie kurze Improvisationsspiele, Interviews mit Ensemblemitgliedern oder Hörproben aus euren Auftritten für eure SoundCloud-Präsenz.

## Social Media Links anpassen

Neben den eingebetteten Feeds sind auf der Hopsa-Website auch direkte Links zu verschiedenen Social-Media-Plattformen eingebunden. Diese findest du in Form von Buttons auf der "Social Media / Links" Seite und im Footer.

### Die Social Media Links verstehen

Die Social Media Links werden in der Datei links.md im Ordner _includes definiert. Der Code sieht etwa so aus:

```html
<div class="mt-0 text-lg flex items-center justify-center flex-wrap">
<a href="https://instagram.com/hopsa_berlin/" class="flex no-underline hover:no-underline text-white hover:text-white" style="text-decoration: none !important"><div class="no-underline flex py-3 whitespace-nowrap px-6 max-w-10 mx-6 my-4 border border-gray-500 hover:border-white hover:bg-gray-800 active:bg-gray-800 hover:text-white rounded-lg -ml-1"><img src="/assets/logos/instagram.png" alt="Instagram" style="height: 1.2em;" class="mt-1">&ensp;<b>Instagram</b>-Profil</div></a>
<a href="https://www.tiktok.com/@hopsa_berlin/" class="flex no-underline hover:no-underline text-white hover:text-white" style="text-decoration: none !important"><div class="no-underline flex py-3 whitespace-nowrap px-6 max-w-10 mx-6 my-4 border border-gray-500 hover:border-white hover:bg-gray-800 active:bg-gray-800 hover:text-white rounded-lg -ml-1"><img src="/assets/logos/tiktok.png" alt="Tiktok" style="height: 1em;" class="mt-1">&ensp;<b>Tiktok</b>-Videos</div></a>
<!-- Weitere Links -->
</div>
```

Jeder Link besteht aus:
- Einem `<a>` Tag mit dem Link zur Plattform (`href="..."`)
- Einem `<div>` Tag für das Button-Styling
- Einem `<img>` Tag für das Logo der Plattform
- Text mit dem Namen der Plattform

### Einen Social Media Link aktualisieren

Um einen bestehenden Link zu aktualisieren (z.B. wenn sich euer Benutzername auf einer Plattform ändert):

1. **Öffne die Datei links.md** im Ordner _includes.
2. **Suche nach dem entsprechenden Link** (z.B. "instagram.com/hopsa_berlin/").
3. **Ändere die URL** im `href`-Attribut des `<a>`-Tags.
4. **Speichere die Datei** und teste die Änderungen.

### Einen neuen Social Media Link hinzufügen

Um einen Link zu einer neuen Plattform hinzuzufügen:

1. **Öffne die Datei links.md** im Ordner _includes.
2. **Kopiere einen bestehenden Link-Block** (von `<a href=...` bis `</a>`).
3. **Füge ihn vor dem schließenden `</div>` ein**.
4. **Aktualisiere folgende Elemente**:
   - Die URL im `href`-Attribut
   - Das Bild im src-Attribut des `<img>`-Tags (achte darauf, dass das Logo im `/assets/logos/` Ordner vorhanden ist)
   - Den Alt-Text im `alt`-Attribut
   - Den angezeigten Text

Beispiel für einen neuen Link zu Discord:

```html
<a href="https://discord.gg/dein-discord-link" class="flex no-underline hover:no-underline text-white hover:text-white" style="text-decoration: none !important"><div class="no-underline flex py-3 whitespace-nowrap px-6 max-w-10 mx-6 my-4 border border-gray-500 hover:border-white hover:bg-gray-800 active:bg-gray-800 hover:text-white rounded-lg -ml-1"><img src="/assets/logos/discord.png" alt="Discord" style="height: 1.2em;" class="mt-1">&ensp;<b>Discord</b>-Server</div></a>
```

> **Hinweis zu Logos:**  
> Für neue Plattformen benötigst du ein passendes Logo. Speichere ein geeignetes Logo im PNG-Format (idealerweise mit transparentem Hintergrund) im Ordner `/assets/logos/` und verwende diesen Pfad im src-Attribut des `<img>`-Tags.

### Einen Social Media Link entfernen

Um einen Link zu entfernen:

1. **Öffne die Datei links.md** im Ordner _includes.
2. **Lokalisiere den Link-Block**, den du entfernen möchtest.
3. **Lösche den gesamten Block** von `<a href=...` bis `</a>`.
4. **Speichere die Datei** und teste die Änderungen.

### Social Media Redirects verwalten

Die Hopsa-Website verwendet auch Redirects für kurze, einfach zu merkende URLs zu Social-Media-Profilen (z.B. `hopsa-berlin.de/instagram` leitet direkt zu eurer Instagram-Seite weiter). Diese sind in der Datei redirects.json im Ordner _data definiert.

Um einen neuen Redirect zu erstellen oder einen bestehenden zu ändern:

1. **Öffne die Datei redirects.json** im Ordner _data.
2. **Erstelle einen neuen Eintrag** oder bearbeite einen bestehenden:

```json
{ "from": "discord", "to": "https://discord.gg/dein-discord-link" },
```

3. **Speichere die Datei** und teste die Änderungen.

## Tipps für optimale Social Media-Integration

### Konsistentes Branding

Achte darauf, dass dein Branding auf allen Plattformen konsistent ist:

1. **Verwende das gleiche Profilbild** auf allen Plattformen.
2. **Nutze ähnliche Benutzernamen** (idealerweise überall "hopsa_berlin").
3. **Verwende einen einheitlichen Farbstil** in deinen Grafiken und Bildern.

### Mobile Optimierung

Viele Besucher werden deine Website auf mobilen Geräten anschauen:

1. **Teste die Social Media-Einbindungen auf Mobilgeräten**.
2. **Achte darauf, dass Buttons ausreichend groß sind** für Touch-Bedienung.
3. **Vermeide zu viele Embeds auf einer Seite**, da dies auf mobilen Geräten die Ladezeit verlangsamen kann.

### Performance-Optimierung

Social Media-Einbindungen können die Ladezeit deiner Website beeinträchtigen:

1. **Verwende nicht zu viele Embeds** auf einer Seite.
2. **Lade schwere Embeds (wie Instagram-Feeds) erst, wenn sie sichtbar werden**.
3. **Biete Alternativen für langsame Verbindungen**, z.B. direkte Links statt eingebetteter Feeds.

### Content-Strategie

Eine clevere Content-Strategie sorgt dafür, dass Besucher von der Website zu deinen Social Media-Kanälen wechseln und umgekehrt:

1. **Teile unterschiedliche Inhalte** auf verschiedenen Plattformen, um Mehrwert zu bieten.
2. **Verweise in Social Media-Posts auf deine Website** für ausführlichere Informationen.
3. **Zeige auf der Website "Appetithappen"** aus deinen Social Media-Kanälen, die neugierig auf mehr machen.

## Häufige Probleme und Lösungen

### Embeds werden nicht angezeigt

**Problem**: Ein Social Media-Embed wird nicht korrekt angezeigt.

**Lösungen**:
1. **Überprüfe die URL/Benutzernamen** im Embed-Code.
2. **Teste in einem anderen Browser**, um zu sehen, ob das Problem browserspezifisch ist.
3. **Generiere den Embed-Code neu** von der jeweiligen Plattform.
4. **Überprüfe, ob die API der Plattform** geändert wurde.

### Datenschutzprobleme

**Problem**: Besucher sehen Hinweise zu Cookies oder Datenschutz, bevor Inhalte angezeigt werden.

**Lösungen**:
1. **Füge einen Datenschutzhinweis** zur Website hinzu.
2. **Verwende datenschutzfreundlichere Einbindungsmethoden**, wenn verfügbar.
3. **Erwäge, nur Vorschaubilder zu zeigen** mit Links zu den eigentlichen Social-Media-Inhalten.

### Inkonsistentes Erscheinungsbild

**Problem**: Die eingebundenen Social-Media-Elemente passen nicht zum Rest der Website.

**Lösungen**:
1. **Passe die Größe und den Rahmen der Embeds an**, damit sie zum Rest der Website passen.
2. **Verwende CSS-Klassen**, um das Erscheinungsbild anzugleichen.
3. **Erstelle benutzerdefinierte Preview-Bilder** mit Links zu den Social-Media-Inhalten.

## ChatGPT als Helfer bei Social Media-Integration

ChatGPT kann dir bei Fragen zur Social Media-Integration helfen. Hier sind einige nützliche Prompts:

### Für Embed-Code-Anpassungen:

```
"Ich möchte den Instagram-Embed auf der Hopsa-Website aktualisieren, weil wir unseren Instagram-Benutzernamen von 'hopsa_berlin' zu 'NEUER_NAME' geändert haben. Welche Teile des Codes in instagram-embed.html muss ich ändern?"
```

### Für HTML/CSS-Hilfe:

```
"Ich möchte die Social Media Links auf der Hopsa-Website anders gestalten. Derzeit sehen sie so aus: [KOPIERE DEN AKTUELLEN CODE]. Wie kann ich den Code ändern, damit die Buttons kleiner und in einer anderen Farbe erscheinen?"
```

### Für Fehlersuche:

```
"Mein SoundCloud-Embed auf der Hopsa-Website zeigt nur einen grauen Kasten an, keine Inhalte. Der Code sieht so aus: [KOPIERE DEN AKTUELLEN CODE]. Was könnte das Problem sein?"
```

### Für neue Social Media-Plattformen:

```
"Ich möchte einen Link zu unserem neuen Mastodon-Profil auf der Hopsa-Website hinzufügen. Die anderen Social Media Links sehen so aus: [KOPIERE EINEN BESTEHENDEN LINK]. Wie sollte der Code für den neuen Mastodon-Link aussehen?"
```

> **Tipp für effektive Prompts:**  
> Gib ChatGPT immer den aktuellen Code, mit dem du arbeitest, und beschreibe genau, was du erreichen möchtest. So bekommst du die präzisesten Antworten.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie du Instagram-Feeds auf der Hopsa-Website aktualisierst
- Wie du YouTube-Videos einbindest und anpasst
- Wie du SoundCloud-Inhalte verwaltest
- Wie du Social Media Links hinzufügst, bearbeitest oder entfernst
- Tipps für eine optimale Social Media-Integration

Mit diesem Wissen kannst du die Online-Präsenz von Hopsa effektiv verwalten und sicherstellen, dass Website und Social Media-Kanäle nahtlos zusammenarbeiten.

Die Integration von Social Media ist ein wichtiger Bestandteil einer modernen Website, besonders für eine Improtheatergruppe wie Hopsa. Indem du diese Inhalte regelmäßig aktualisierst, bietest du deinen Besuchern immer frische und relevante Informationen.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "Änderungen veröffentlichen mit VS Code und GitHub" lernst du, wie du all diese Anpassungen an der Social Media-Integration und andere Änderungen an der Website für alle sichtbar ins Internet bringst.

# 11. Änderungen veröffentlichen mit VS Code und GitHub

## Deine Änderungen ins Internet bringen

Herzlich willkommen zu Kapitel 11 unseres Leitfadens! Nachdem du nun in den vorherigen Kapiteln gelernt hast, wie du die Hopsa-Website bearbeitest - sei es Texte ändern, Bilder hinzufügen, Termine aktualisieren oder Social Media einbinden - ist es nun Zeit für den finalen und wichtigsten Schritt: Deine Änderungen zu veröffentlichen, damit sie tatsächlich im Internet für alle sichtbar werden. In diesem Kapitel zeigen wir dir, wie du mit wenigen Klicks deine lokalen Änderungen auf die Live-Website bringst.

> **Das Wichtigste zuerst**: Um deine lokalen Änderungen auf der Live-Website sichtbar zu machen, musst du sie zu GitHub "pushen" (hochladen). Dafür brauchst du nur einige einfache Schritte in VS Code ausführen, die wir dir in diesem Kapitel genau erklären werden. Danach wandelt GitHub deine Änderungen automatisch in die öffentlich sichtbare Website um.

### Was wir in diesem Kapitel behandeln:
- Wie der Veröffentlichungsprozess funktioniert: Von deinem Computer ins Internet
- Wie du den einfachen Commit- und Push-Prozess in VS Code durchführst
- Wie du deine Änderungen vor dem Veröffentlichen überprüfst
- Wie lange es dauert, bis deine Änderungen im Internet sichtbar sind
- Was der Unterschied zwischen lokaler Vorschau und Live-Website ist
- Wie du mit häufigen Problemen bei der Veröffentlichung umgehst

## Der Veröffentlichungsprozess verstehen

Bevor wir uns die konkreten Schritte anschauen, ist es hilfreich, den Gesamtprozess zu verstehen. Das gibt dir einen besseren Überblick darüber, was eigentlich passiert, wenn du deine Änderungen veröffentlichst.

### Von deinem Computer ins Internet: Der Workflow

Der Weg deiner Änderungen von deinem lokalen Computer bis zur öffentlich sichtbaren Website besteht aus drei Hauptschritten:

1. **Lokale Bearbeitung** (das hast du in den vorherigen Kapiteln gelernt)
   - Du bearbeitest Dateien lokal auf deinem Computer
   - Du siehst dir die Änderungen in der lokalen Vorschau an

2. **Veröffentlichung zu GitHub** (das lernen wir in diesem Kapitel)
   - Du machst einen "Commit" deiner Änderungen (speicherst sie mit einer Beschreibung)
   - Du "pushst" die Änderungen zu GitHub (lädst sie hoch)

3. **Automatische Bereitstellung** (passiert im Hintergrund)
   - GitHub Pages erkennt deine Änderungen
   - Die Website wird automatisch aktualisiert und online gestellt

> **Was ist ein Commit?**  
> Ein Commit ist wie ein Speicherpunkt in der Geschichte deiner Dateien. Du fasst mehrere Änderungen zusammen, gibst ihnen eine kurze Beschreibung und speicherst sie als einen "Commit". Jeder Commit ist wie ein Schnappschuss deiner Website zu einem bestimmten Zeitpunkt.

> **Was ist ein Push?**  
> Ein Push ist der Vorgang, bei dem du deine lokalen Commits (Änderungen) zum Remote-Repository auf GitHub hochlädst. Erst durch den Push werden deine Änderungen für andere sichtbar und können von GitHub Pages verarbeitet werden.

### Lokale Änderungen vs. veröffentlichte Änderungen

Eine wichtige Erkenntnis für Einsteiger: Änderungen, die du nur lokal auf deinem Computer vornimmst, sind für niemanden sonst sichtbar. Egal wie viel du lokal bearbeitest und testest - erst wenn du diese Änderungen zu GitHub pushst, werden sie Teil der öffentlichen Website.

Das hat Vor- und Nachteile:

**Vorteile:**
- Du kannst beliebig viel experimentieren, ohne dass jemand deine unfertigen Änderungen sieht
- Du kannst alles lokal testen, bevor du es veröffentlichst
- Du hast die vollständige Kontrolle darüber, wann etwas live geht

**Nachteile:**
- Du musst daran denken, deine Änderungen zu pushen, sonst bleiben sie nur auf deinem Computer
- Es gibt einen zusätzlichen Schritt zwischen Bearbeitung und Veröffentlichung

### GitHub Pages: Der automatische Website-Builder

Die Hopsa-Website verwendet GitHub Pages, einen Service von GitHub, der automatisch eine Website aus deinen Repository-Dateien erstellt. Wenn du Änderungen zu GitHub pushst, erkennt GitHub Pages diese und aktualisiert die öffentliche Website.

> **Was ist GitHub Pages?**  
> GitHub Pages ist ein kostenloser Hosting-Service von GitHub, der Dateien aus deinem Repository nimmt und daraus eine Website erstellt. Er ist besonders gut für statische Websites wie die Hopsa-Website geeignet. GitHub Pages übernimmt das Hosting und die Bereitstellung der Website, ohne dass du einen separaten Webserver benötigst.

## Der einfache Veröffentlichungsprozess

Nun schauen wir uns den eigentlichen Prozess an. Es mag anfangs kompliziert klingen, aber keine Sorge - in VS Code sind es nur wenige Klicks, um deine Änderungen zu veröffentlichen.

### Voraussetzungen

Bevor du beginnen kannst, stelle sicher, dass:
1. Du alle gewünschten Änderungen vorgenommen hast
2. Du die Änderungen lokal mit run.bat getestet hast
3. VS Code und der Git-Client (wie in Kapitel 4 beschrieben) installiert sind

### Schritt 1: VS Code öffnen und Änderungen überprüfen

1. **Öffne VS Code** und stelle sicher, dass das Hopsa-Projekt geöffnet ist.

2. **Navigiere zur Source Control-Ansicht** (Quellcodeverwaltung), indem du:
   - Auf das Git-Symbol in der linken Seitenleiste klickst (es sieht aus wie eine Verzweigung), oder
   - Die Tastenkombination `Strg+Shift+G` (Windows) oder `Cmd+Shift+G` (Mac) drückst

3. **Überprüfe die Liste der geänderten Dateien**:
   - Unter "Changes" (Änderungen) siehst du alle Dateien, die du verändert hast
   - Du kannst auf jede Datei klicken, um die genauen Änderungen zu sehen
   - Hinzugefügte Inhalte werden grün, entfernte Inhalte rot markiert

![Source Control in VS Code](https://i.imgur.com/example1.png)
*So könnte die Source Control-Ansicht in VS Code aussehen, mit geänderten Dateien links und den Änderungsdetails rechts*

> **Tipp zur Überprüfung:**  
> Nimm dir einen Moment Zeit, um deine Änderungen zu überprüfen. Achte auf Tippfehler, falsche Links oder andere Probleme, die du noch korrigieren möchtest, bevor du veröffentlichst.

### Schritt 2: Änderungen "stagen" (für den Commit vorbereiten)

Das "Stagen" von Änderungen bedeutet, dass du auswählst, welche Änderungen in deinen nächsten Commit aufgenommen werden sollen. Du kannst alle Änderungen auf einmal stagen oder selektiv vorgehen.

#### Option 1: Alle Änderungen stagen

1. **Klicke auf das '+'-Symbol** neben "Changes" (oder klicke auf das '+' neben jeder einzelnen Datei).

   Dies fügt alle geänderten Dateien zum "Staging Area" hinzu, was bedeutet, dass sie für den nächsten Commit bereit sind.

#### Option 2: Nur bestimmte Dateien stagen

1. **Klicke auf das '+'-Symbol** neben jeder einzelnen Datei, die du committen möchtest.

   Dies ist nützlich, wenn du verschiedene Änderungen in separaten Commits organisieren möchtest.

> **Was ist die Staging Area?**  
> Die Staging Area (oder auch "Index" genannt) ist ein Zwischenbereich in Git, in dem du Änderungen sammelst, bevor du sie commitest. Sie erlaubt dir, genau auszuwählen, welche Änderungen in einem Commit zusammengefasst werden sollen.

### Schritt 3: Commit-Nachricht schreiben und committen

1. **Gib eine aussagekräftige Commit-Nachricht ein** im Textfeld über dem "Commit"-Button.

   Eine gute Commit-Nachricht beschreibt kurz und klar, welche Änderungen du vorgenommen hast, zum Beispiel:
   - "Neue Termine für Mai hinzugefügt"
   - "Teamfotos aktualisiert und Beschreibungen angepasst"
   - "Tippfehler auf der Kontaktseite korrigiert"

2. **Klicke auf den "Commit"-Button** (oder drücke `Strg+Enter`) um den Commit zu erstellen.

   Jetzt ist dein Commit lokal gespeichert, aber noch nicht zu GitHub hochgeladen.

> **Wie schreibe ich eine gute Commit-Nachricht?**  
> Eine gute Commit-Nachricht ist kurz (unter 50 Zeichen), präzise und beschreibt klar die vorgenommenen Änderungen. Beginne idealerweise mit einem Verb im Präsens, z.B. "Fügt...", "Aktualisiert...", "Korrigiert...". Denke daran, dass diese Nachricht später dir und anderen helfen soll zu verstehen, was in diesem Commit geändert wurde.

### Schritt 4: Änderungen zu GitHub pushen

Jetzt, da du deine Änderungen committet hast, ist es Zeit, sie zu GitHub hochzuladen (zu "pushen"):

1. **Klicke auf den "Push"-Button** in der Quellcodeverwaltungs-Ansicht (erscheint als Pfeil nach oben, oder als "Sync Changes").

2. **Falls du nach Anmeldedaten gefragt wirst**, gib deine GitHub-Anmeldeinformationen ein.

3. **Warte auf Bestätigung**, dass der Push erfolgreich war. VS Code zeigt eine Meldung an, wenn der Push abgeschlossen ist.

![Push-Button in VS Code](https://i.imgur.com/example2.png)
*Der Push-Button in VS Code (oft dargestellt als Pfeil nach oben)*

> **Tipp für Anfänger:**  
> Beim ersten Push zu einem Repository musst du möglicherweise zusätzliche Authentifizierungsschritte durchführen. VS Code führt dich durch diesen Prozess. In der Regel musst du nur den Anweisungen auf dem Bildschirm folgen.

### Schritt 5: Warten auf die Website-Aktualisierung

Nach dem erfolgreichen Push zu GitHub wird GitHub Pages automatisch eine neue Version der Website erstellen:

1. **Die Generierung dauert normalerweise 1-5 Minuten**. In dieser Zeit verarbeitet GitHub Pages deine Änderungen und aktualisiert die Live-Website.

2. **Überprüfe die Live-Website** nach einigen Minuten, indem du hopsa-berlin.de in deinem Browser besuchst (denke daran, den Browser-Cache zu leeren mit `Strg+F5`, um sicherzustellen, dass du die neueste Version siehst).

> **Warum dauert die Aktualisierung einige Minuten?**  
> GitHub Pages muss deine Quelldateien in eine statische Website umwandeln und diese dann auf den Webservern bereitstellen. Dieser Prozess läuft automatisch ab und benötigt etwas Zeit. Bei größeren Websites oder wenn viele Nutzer gleichzeitig Änderungen pushen, kann es etwas länger dauern.

## Überprüfung deiner veröffentlichten Änderungen

Nachdem deine Änderungen live gegangen sind, ist es wichtig, sie zu überprüfen, um sicherzustellen, dass alles wie erwartet funktioniert.

### Die Live-Website überprüfen

1. **Besuche hopsa-berlin.de** in deinem Browser.

2. **Leere den Browser-Cache** mit `Strg+F5` (Windows) oder `Cmd+Shift+R` (Mac), um sicherzustellen, dass du die aktuellste Version siehst.

3. **Überprüfe deine spezifischen Änderungen**:
   - Navigiere zu den Seiten, die du bearbeitet hast
   - Stelle sicher, dass Text korrekt angezeigt wird
   - Prüfe, ob Bilder richtig geladen werden
   - Teste alle Links, die du hinzugefügt oder geändert hast

> **Was ist Browser-Cache?**  
> Der Browser-Cache ist ein temporärer Speicher in deinem Browser, der Webseiten-Elemente wie Bilder, Skripte und HTML-Dateien speichert, um Websites schneller zu laden. Manchmal kann ein veralteter Cache dazu führen, dass du nicht die neueste Version einer Website siehst, weshalb es wichtig ist, ihn zu leeren, wenn du frische Änderungen überprüfst.

### Auf verschiedenen Geräten und Browsern testen

Für eine gründliche Überprüfung ist es ratsam, die Website auf verschiedenen Geräten und in verschiedenen Browsern zu testen:

1. **Teste auf einem Desktop- oder Laptop-Computer**
   - Überprüfe in verschiedenen Browsern (Chrome, Firefox, Edge, Safari)
   - Teste verschiedene Bildschirmgrößen durch Ändern der Fenstergröße

2. **Teste auf einem Mobilgerät**
   - Überprüfe auf Smartphones und Tablets, falls verfügbar
   - Alternativ kannst du die Mobilansicht simulieren, indem du die Entwicklertools deines Browsers öffnest (`F12` oder Rechtsklick → "Untersuchen"/"Inspect") und dann den Gerätesimulationsmodus aktivierst

3. **Achte besonders auf**:
   - Responsive Design (passt sich die Seite verschiedenen Bildschirmgrößen an?)
   - Bilder (werden sie korrekt geladen und angezeigt?)
   - Navigation (funktionieren alle Menüpunkte?)
   - Social Media-Einbettungen (werden Instagram-Feeds, YouTube-Videos usw. korrekt angezeigt?)

> **Warum auf verschiedenen Geräten testen?**  
> Websites können auf verschiedenen Geräten, Bildschirmgrößen und Browsern unterschiedlich aussehen. Was auf deinem Computer perfekt aussieht, könnte auf einem Smartphone anders erscheinen. Durch Tests auf verschiedenen Plattformen stellst du sicher, dass alle Besucher eine gute Erfahrung mit der Website haben.

## Lokale Vorschau vs. Live-Website

Es ist wichtig zu verstehen, dass zwischen der lokalen Vorschau auf deinem Computer und der tatsächlichen Live-Website im Internet Unterschiede bestehen können.

### Hauptunterschiede

1. **Verarbeitungszeit**:
   - Lokale Vorschau: Änderungen sind sofort sichtbar
   - Live-Website: Änderungen benötigen 1-5 Minuten, um sichtbar zu werden

2. **URL**:
   - Lokale Vorschau: `http://localhost:8080`
   - Live-Website: `https://hopsa-berlin.de`

3. **Funktionalität**:
   - Lokale Vorschau: Einige externe Dienste wie Instagram-Feeds könnten nicht vollständig funktionieren
   - Live-Website: Alle Funktionen sollten korrekt arbeiten

4. **Caching**:
   - Lokale Vorschau: Wenig bis kein Caching, Änderungen werden sofort übernommen
   - Live-Website: Browser-Caching kann dazu führen, dass alte Versionen angezeigt werden

### Warum kann es Unterschiede geben?

Es gibt mehrere Gründe, warum die lokale Vorschau und die Live-Website nicht identisch sein könnten:

1. **Netzwerk-Einschränkungen**: Lokale API-Aufrufe können anders funktionieren als über das Internet
2. **Pfade und URLs**: Absolute vs. relative Pfade können zu Unterschieden führen
3. **Umgebungsvariablen**: Die lokale Entwicklungsumgebung kann andere Einstellungen haben als die Produktionsumgebung
4. **Caching**: Browser speichern oft Dateien, um die Ladezeit zu verbessern
5. **Externe Dienste**: Einige externe Dienste erlauben keine Einbettung auf `localhost`

> **Tipp für externe Dienste:**  
> Wenn Social Media-Feeds oder andere externe Einbettungen lokal nicht funktionieren, ist das oft normal und kein Grund zur Sorge. Überprüfe sie stattdessen auf der Live-Website, nachdem du deine Änderungen gepusht hast.

## Häufige Probleme und Lösungen

Manchmal läuft bei der Veröffentlichung nicht alles wie geplant. Hier sind einige häufige Probleme und deren Lösungen:

### Problem 1: Änderungen erscheinen nicht auf der Live-Website

**Mögliche Ursachen und Lösungen:**

1. **Nicht genug Zeit vergangen**:
   - Warte mindestens 5 Minuten nach dem Push
   - Überprüfe den Status auf der GitHub-Repository-Seite unter "Actions"

2. **Browser-Cache**:
   - Drücke `Strg+F5` (Windows) oder `Cmd+Shift+R` (Mac), um den Cache zu leeren
   - Versuche einen anderen Browser oder den Inkognito-/Privatmodus

3. **Push nicht erfolgreich**:
   - Prüfe in VS Code, ob der Push-Vorgang erfolgreich war
   - Schaue unter dem "Sync"-Symbol, ob es einen Fehlerstatus gibt

4. **Build-Fehler**:
   - Besuche das GitHub-Repository im Browser
   - Gehe zu "Actions" und prüfe, ob der letzte Build erfolgreich war
   - Bei einem roten X gibt es einen Fehler, den du überprüfen solltest

> **Was sind GitHub Actions?**  
> GitHub Actions sind automatisierte Workflows, die im GitHub-Repository ausgeführt werden. Für die Hopsa-Website werden Actions verwendet, um die statische Website zu bauen und zu veröffentlichen. Unter dem Tab "Actions" im Repository kannst du den Status dieser automatisierten Prozesse sehen und eventuelle Fehler identifizieren.

### Problem 2: Konflikt beim Pushen

Wenn jemand anderes Änderungen am Repository vorgenommen hat, nachdem du deine lokale Kopie heruntergeladen hast, kann es zu einem Konflikt kommen:

**Lösung:**

1. **Pull vor dem Push**:
   - Klicke in VS Code auf "Sync" oder "Pull", um zuerst die neuesten Änderungen herunterzuladen
   - VS Code wird versuchen, die Änderungen automatisch zusammenzuführen
   - Falls Konflikte auftreten, musst du sie manuell lösen (siehe nächster Punkt)

2. **Konflikte lösen**:
   - VS Code zeigt Konflikte in den betroffenen Dateien an
   - Wähle für jeden Konflikt entweder "Accept Current Change" (deine Änderung), "Accept Incoming Change" (die andere Änderung) oder "Accept Both Changes"
   - Speichere die Datei nach der Konfliktlösung
   - Führe einen neuen Commit durch und push erneut

> **Was ist ein Merge-Konflikt?**  
> Ein Merge-Konflikt tritt auf, wenn zwei Personen die gleiche Zeile in einer Datei unterschiedlich geändert haben, und Git nicht automatisch entscheiden kann, welche Version behalten werden soll. In solchen Fällen muss ein Mensch entscheiden, welche Änderungen übernommen werden sollen. VS Code hilft dabei mit einem grafischen Interface.

### Problem 3: Fehler bei der lokalen Vorschau nach dem Pull

Manchmal kann es nach einem Pull zu Problemen mit der lokalen Vorschau kommen:

**Lösung:**

1. **run.bat neu starten**:
   - Schließe das Terminalfenster mit run.bat (oder drücke `Strg+C` im Terminal)
   - Starte run.bat erneut, um die lokale Website neu zu bauen

2. **Node-Module aktualisieren** (falls neue Abhängigkeiten hinzugefügt wurden):
   - Öffne ein Terminal in VS Code (`Strg+``)
   - Führe `npm install` aus, um alle Abhängigkeiten zu aktualisieren

3. **Letzte funktionierende Version wiederherstellen**:
   - In VS Code, gehe zur Source Control-Ansicht
   - Klicke auf das Dreipunkt-Menü (...) und wähle "Commit History"
   - Rechtsklicke auf den letzten funktionierenden Commit und wähle "Checkout"

> **Tipp bei Problemen mit run.bat:**  
> Wenn run.bat nicht wie erwartet funktioniert, starte deine Entwicklungsumgebung neu: Schließe VS Code, öffne es wieder und starte run.bat erneut. Oft löst ein kompletter Neustart Probleme, die durch zwischengespeicherte Daten oder hängende Prozesse verursacht werden.

### Problem 4: Bilder oder Medien werden nicht angezeigt

Ein häufiges Problem ist, dass Bilder oder andere Medien nach dem Pushen nicht korrekt angezeigt werden:

**Lösungen:**

1. **Pfade überprüfen**:
   - Stelle sicher, dass alle Pfade mit einem `/` beginnen (z.B. `/assets/team/bild.jpg`)
   - Überprüfe die Groß-/Kleinschreibung der Dateinamen (GitHub ist Groß-/Kleinschreibung-sensitiv)

2. **Datei existiert im Repository?**:
   - Überprüfe, ob die Bilddateien tatsächlich zu GitHub gepusht wurden
   - Sie sollten im entsprechenden Ordner (z.B. `/assets/team/`) im Repository auf GitHub sichtbar sein

3. **Format- und Größenanpassungen**:
   - Stelle sicher, dass die Bilder ein webkompatibles Format haben (JPG, PNG, WebP, SVG)
   - Zu große Bilddateien (> 5 MB) können Probleme verursachen

> **Tipp für Bildpfade:**  
> Verwende in der Hopsa-Website immer absolute Pfade für Medien, beginnend mit `/assets/` (z.B. `/assets/team/bild.jpg`). Relative Pfade ohne führenden Schrägstrich können auf verschiedenen Seiten unterschiedlich interpretiert werden.

## Bewährte Praktiken für die Veröffentlichung

Um den Veröffentlichungsprozess so reibungslos wie möglich zu gestalten, hier einige bewährte Praktiken:

### 1. Regelmäßig committen und pushen

- Mache lieber mehrere kleine Commits als einen großen
- Committen bedeutet nicht sofort veröffentlichen - du kannst mehrere Commits sammeln, bevor du sie pushst
- Regelmäßige Commits helfen, deine Arbeit zu sichern und Änderungen nachzuverfolgen

### 2. Aussagekräftige Commit-Nachrichten schreiben

- Beschreibe klar, was du geändert hast
- Verwende kurze, prägnante Nachrichten
- Beginne mit einem Verb im Präsens: "Fügt...", "Aktualisiert...", "Korrigiert..."

**Beispiele für gute Commit-Nachrichten:**
- "Fügt neues Teammitglied zur Ensemble-Seite hinzu"
- "Korrigiert kaputten Link auf der Kontaktseite"
- "Aktualisiert Termine für das Frühjahr 2025"

### 3. Vor dem Pushen lokal testen

- Führe immer run.bat aus und überprüfe deine Änderungen lokal
- Teste alle betroffenen Seiten und Funktionen
- Achte besonders auf Links, Bilder und Formatierung

### 4. Pull vor dem Push

- Hole immer die neuesten Änderungen mit einem Pull, bevor du pushst
- Dies reduziert die Wahrscheinlichkeit von Konflikten
- Falls du der einzige Bearbeiter bist, ist dies weniger kritisch, aber eine gute Angewohnheit

### 5. Nach dem Push verifizieren

- Überprüfe die Live-Website nach dem Push
- Stelle sicher, dass alle Änderungen korrekt übernommen wurden
- Teste auf verschiedenen Geräten und Browsern, wenn möglich

> **Tipp für Teamarbeit:**  
> Wenn mehrere Personen an der Website arbeiten, ist eine gute Kommunikation entscheidend. Informiert euch gegenseitig, wenn jemand größere Änderungen vornimmt, um Konflikte zu vermeiden.

## Die Bedeutung regelmäßiger Aktualisierungen

Eine regelmäßig aktualisierte Website ist wichtig für Besucher und Suchmaschinen:

### Warum regelmäßige Updates wichtig sind

1. **Aktualität für Besucher**: 
   - Aktuelle Informationen zeigen, dass die Gruppe aktiv ist
   - Veraltete Informationen können zu Verwirrung führen (z.B. alte Termine)

2. **Suchmaschinen-Ranking**:
   - Suchmaschinen bevorzugen Websites, die regelmäßig aktualisiert werden
   - Mehr aktuelle Inhalte führen zu besserer Sichtbarkeit in Suchergebnissen

3. **Konsistente Benutzererfahrung**:
   - Regelmäßige kleine Updates sind besser als seltene große Überarbeitungen
   - Nutzer gewöhnen sich an eine sich langsam entwickelnde Website

### Tipps für ein nachhaltiges Website-Management

1. **Plane regelmäßige Überprüfungen**:
   - Lege feste Zeiten für Website-Updates fest (z.B. monatlich)
   - Überprüfe regelmäßig alle Seiten auf Aktualität

2. **Führe ein Änderungsprotokoll**:
   - Notiere dir wichtige Änderungen außerhalb von GitHub
   - Dies hilft bei der Nachverfolgung von Inhaltsänderungen

3. **Delegiere Aufgaben**:
   - Verteile die Verantwortung für verschiedene Bereiche der Website
   - Lege fest, wer für Termine, Team-Updates usw. zuständig ist

> **Idee für ein einfaches Änderungsprotokoll:**  
> Erstelle eine einfache Tabelle (z.B. in einer Textdatei oder einem Spreadsheet) mit Datum, Art der Änderung, betroffenen Seiten und dem Namen der Person, die die Änderung vorgenommen hat. Dies kann besonders hilfreich sein, wenn mehrere Personen die Website pflegen.

## ChatGPT als Helfer beim Veröffentlichungsprozess

ChatGPT kann dir helfen, wenn du Fragen zum Veröffentlichungsprozess hast. Hier sind einige nützliche Prompts:

### Für Hilfe bei Commit-Nachrichten:

```
"Ich habe folgende Änderungen an der Hopsa-Website vorgenommen: [liste deine Änderungen auf]. Wie könnte eine gute Commit-Nachricht dafür lauten?"
```

### Für Probleme beim Pushen:

```
"Ich erhalte beim Pushen meiner Änderungen zu GitHub diese Fehlermeldung: [Fehlermeldung einfügen]. Was bedeutet sie und wie kann ich das Problem lösen?"
```

### Für Merge-Konflikte:

```
"Ich habe einen Merge-Konflikt in der Datei 'termine.md'. VS Code zeigt mir zwei verschiedene Versionen. Wie gehe ich vor, um den Konflikt zu lösen?"
```

### Für Hilfe bei der Überprüfung:

```
"Nach dem Pushen meiner Änderungen sieht die Website nicht wie erwartet aus. Ich habe folgende Probleme bemerkt: [beschreibe die Probleme]. Welche Schritte kann ich zur Fehlerbehebung unternehmen?"
```

> **Tipp für effektive ChatGPT-Prompts:**  
> Je spezifischer du bist, desto besser kann ChatGPT dir helfen. Beschreibe genau, was du getan hast, welche Fehlermeldungen du siehst und was du erreichen möchtest. Kopiere Fehlermeldungen wörtlich, um die präziseste Hilfe zu bekommen.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie der Veröffentlichungsprozess von deinem Computer zur Live-Website funktioniert
- Wie du mit VS Code Änderungen commitest und zu GitHub pushst
- Wie du deine Änderungen vor und nach der Veröffentlichung überprüfst
- Wie du mit häufigen Problemen beim Veröffentlichungsprozess umgehst
- Welche bewährten Praktiken es für eine erfolgreiche Veröffentlichung gibt

Mit diesem Wissen kannst du nun eigenständig Änderungen an der Hopsa-Website vornehmen und veröffentlichen. Du hast den kompletten Kreislauf der Website-Verwaltung kennengelernt - vom Einrichten der lokalen Umgebung über das Bearbeiten von Inhalten bis hin zur Veröffentlichung deiner Änderungen im Internet.

Im nächsten Kapitel schauen wir uns alternative Bearbeitungsmethoden an, die in bestimmten Situationen nützlich sein können - zum Beispiel, wenn du keinen Zugriff auf deinen Computer mit der eingerichteten VS Code-Umgebung hast.

# 12. Die Website umziehen (falls gewünscht)

## Neue Heimat für deine Hopsa-Website

Willkommen zu Kapitel 12 unseres Leitfadens! In diesem Kapitel geht es um einen Aspekt, über den du vielleicht irgendwann nachdenken wirst: den Umzug deiner Website. Wie bei einem echten Umzug gibt es verschiedene Gründe, warum du deine digitale Präsenz an einen neuen Ort bringen möchtest – sei es ein Wechsel zu einem anderen GitHub-Account oder der Umstieg auf einen benutzerfreundlicheren Website-Builder mit grafischer Oberfläche.

> **Das Wichtigste zuerst**: Die Hopsa-Website kann bei Bedarf umgezogen werden, ohne dass Besucher etwas davon mitbekommen. Deine Domain "hopsa-berlin.de" bleibt dabei unabhängig vom Hosting bestehen und kann auf die neue Website-Heimat umgeleitet werden. In diesem Kapitel zeigen wir dir beide Umzugswege Schritt für Schritt, ganz ohne technische Vorkenntnisse.

### Was wir in diesem Kapitel behandeln:
- Warum ein Website-Umzug manchmal sinnvoll sein kann
- Wie du die Hopsa-Website zu einem anderen GitHub-Account umziehst
- Wie du von der aktuellen technischen Lösung zu einem einfacheren WYSIWYG-Website-Builder wechselst
- Worauf du bei der Domain-Umstellung achten musst
- Wie du den Umzug planst und durchführst, ohne dass deine Website ausfällt

## Wann ist ein Website-Umzug sinnvoll?

Bevor wir in die technischen Details eintauchen, lass uns kurz überlegen, wann ein Umzug deiner Website überhaupt sinnvoll sein könnte:

### Zu einem anderen GitHub-Account wechseln

Ein Umzug zu einem anderen GitHub-Account könnte sinnvoll sein, wenn:
- Die Person, die das aktuelle Repository besitzt, die Gruppe verlässt
- Ihr ein gemeinsames Organisations-Konto auf GitHub erstellt habt
- Ihr die Zuständigkeiten innerhalb der Gruppe neu verteilt
- Du den Eigentümer-Account aus Sicherheitsgründen wechseln möchtest

### Zu einem WYSIWYG-Website-Builder wechseln

Ein Wechsel zu einem Website-Builder mit grafischer Oberfläche könnte sinnvoll sein, wenn:
- Ihr euch mit der technischen Pflege über VS Code und GitHub nicht wohlfühlt
- Niemand in der Gruppe Erfahrung mit Markdown oder Git hat
- Ihr ein einfacheres System mit Drag & Drop-Funktionen bevorzugt
- Ihr mehr Design-Freiheiten ohne Programmierung wünscht
- Technische Hürden euch davon abhalten, die Website regelmäßig zu aktualisieren

> **Was ist ein WYSIWYG-Editor?**  
> WYSIWYG steht für "What You See Is What You Get" (Was du siehst, ist was du bekommst). In einem WYSIWYG-Editor kannst du deine Website direkt bearbeiten und siehst sofort, wie sie aussehen wird – ohne Programmiercode schreiben zu müssen. Du siehst also genau das Endergebnis während der Bearbeitung.

### Den Umzug planen: Checkliste vor dem Start

Unabhängig davon, wohin du deine Website umziehen möchtest, solltest du folgende Vorbereitungen treffen:

1. **Backup erstellen**: Stelle sicher, dass du eine vollständige Kopie deiner aktuellen Website hast
2. **Inhalte inventarisieren**: Mache eine Liste aller Seiten, Bilder und eingebundenen Medien
3. **Domain-Zugang sicherstellen**: Stelle sicher, dass du Zugang zum Namecheap-Account hast
4. **Zeitpunkt wählen**: Plane den Umzug für eine Zeit mit wenig Website-Verkehr
5. **Verantwortlichkeiten klären**: Bestimme, wer den Umzug durchführt und wer danach für die Website verantwortlich ist

Mit diesen Vorbereitungen bist du gut gerüstet, um den Umzug deiner Website anzugehen. Nun schauen wir uns die beiden Umzugswege im Detail an.

## Zu einem anderen GitHub-Account wechseln

Der Wechsel zu einem anderen GitHub-Account ist technisch gesehen ein einfacher Prozess. Es geht im Wesentlichen darum, das Repository zu übertragen und die GitHub Pages-Einstellungen anzupassen.

### 1. Das GitHub-Repository übertragen

#### Voraussetzungen
- Der aktuelle Besitzer des Repositories muss Zugriff auf seinen GitHub-Account haben
- Der neue Besitzer muss einen GitHub-Account haben
- Beide Accounts müssen online sein für den Übertragungsprozess

#### Schritt-für-Schritt-Anleitung

1. **Als aktueller Besitzer bei GitHub anmelden**:
   - Besuche [github.com](https://github.com) und melde dich mit dem Account an, der derzeit das Hopsa-Repository besitzt.

2. **Zum Repository navigieren**:
   - Gehe zum Hopsa-Repository (etwas wie `github.com/USERNAME/hopsa-berlin`).

3. **Repository-Einstellungen öffnen**:
   - Klicke oben auf "Settings" (das Zahnradsymbol).

4. **Zum Bereich "Danger Zone" scrollen**:
   - Scrolle ganz nach unten bis zum rot umrandeten Bereich "Danger Zone".

5. **"Transfer ownership" auswählen**:
   - Klicke auf "Transfer ownership" (Eigentümerschaft übertragen).
   - Es erscheint ein Dialog zur Bestätigung.

6. **Ziel-Account eingeben**:
   - Gib den Benutzernamen oder den Namen der Organisation ein, an die du das Repository übertragen möchtest.
   - Gib den Repository-Namen ein, um zu bestätigen, dass du dir sicher bist.
   - Klicke auf "I understand, transfer this repository".

7. **Übertragung bestätigen**:
   - Der neue Besitzer erhält eine Benachrichtigung und muss die Übertragung innerhalb von 24 Stunden akzeptieren.
   - Bei einer Übertragung an eine Organisation kann ein Administrator die Übertragung akzeptieren.

![GitHub Transfer Ownership](https://i.imgur.com/example1.png)
*Beispielbild: Der "Transfer ownership"-Button in den Repository-Einstellungen*

> **Wichtiger Hinweis:**  
> Bei der Übertragung eines Repositories werden alle Issues, Pull Requests, Releases, Projektboards und Einstellungen mit übertragen. Auch alle Git-Informationen wie Commits, Branches und Tags bleiben erhalten.

### 2. GitHub Pages im neuen Repository einrichten

Nachdem die Übertragung abgeschlossen ist, muss der neue Besitzer GitHub Pages für das Repository aktivieren:

1. **Als neuer Besitzer im Repository anmelden**:
   - Besuche das übertragene Repository unter seiner neuen URL.

2. **Repository-Einstellungen öffnen**:
   - Klicke auf "Settings".

3. **Zu den Pages-Einstellungen navigieren**:
   - Klicke im linken Menü auf "Pages".

4. **Quelle auswählen**:
   - Unter "Source" wähle als Branch "main" (oder "master", je nachdem, wie euer Hauptzweig heißt).
   - Als Ordner wähle "/docs".
   - Klicke auf "Save".

5. **Warte auf die Bereitstellung**:
   - Die Website wird nun neu gebaut. Dies kann einige Minuten dauern.
   - Sobald die Website bereitgestellt ist, siehst du eine Meldung mit der URL, unter der sie erreichbar ist.

> **Was ist GitHub Pages?**  
> GitHub Pages ist ein Hosting-Service von GitHub, der HTML-, CSS- und JavaScript-Dateien direkt aus einem GitHub-Repository nimmt und eine Website daraus erstellt. Es ist der Dienst, der die Hopsa-Website derzeit im Internet verfügbar macht.

### 3. Die Domain aktualisieren

Jetzt muss die Domain "hopsa-berlin.de" auf die neue Website-Adresse umgeleitet werden. Dafür gibt es zwei Möglichkeiten:

#### Option 1: Die GitHub Pages-Domain anpassen (empfohlen)

1. **Custom Domain einrichten**:
   - Gehe im neuen Repository zu "Settings" > "Pages".
   - Trage unter "Custom domain" den Namen "hopsa-berlin.de" ein.
   - Klicke auf "Save".
   - GitHub erstellt automatisch eine CNAME-Datei im root-Verzeichnis oder im /docs-Ordner.

2. **SSL-Verschlüsselung aktivieren**:
   - Aktiviere die Option "Enforce HTTPS", damit die Website sicher über HTTPS erreichbar ist.

#### Option 2: DNS-Einstellungen bei Namecheap anpassen

Falls du die GitHub Pages-Domain nicht direkt anpassen möchtest oder kannst, musst du die DNS-Einstellungen bei Namecheap aktualisieren:

1. **Bei Namecheap anmelden**:
   - Besuche [namecheap.com](https://www.namecheap.com) und melde dich an.

2. **Zur Domain-Liste navigieren**:
   - Klicke auf "Domain List" und wähle "hopsa-berlin.de".

3. **Advanced DNS öffnen**:
   - Klicke auf den Tab "Advanced DNS".

4. **A-Records aktualisieren**:
   - Ändere die Ziel-IP-Adressen der vier A-Records auf die GitHub Pages-IP-Adressen:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

5. **CNAME-Record aktualisieren**:
   - Ändere den CNAME-Record für "www" auf die neue GitHub Pages-Domain (z.B. `NEUERUSERNAME.github.io`).

6. **Speichere die Änderungen**:
   - Klicke auf "Save Changes".

> **Wichtig zu wissen:**  
> DNS-Änderungen können 24-48 Stunden dauern, bis sie weltweit vollständig wirksam sind. Während dieser Zeit kann die Website für einige Besucher noch unter der alten Adresse erreichbar sein und für andere bereits unter der neuen.

### 4. Überprüfen und Testen

Nach Abschluss aller Übertragungen und Einstellungen ist es wichtig, die Website gründlich zu testen:

1. **Warte mindestens 15 Minuten** nach allen Änderungen, um GitHub und DNS genug Zeit zu geben.

2. **Teste alle URLs**:
   - Besuche die Hauptdomain (hopsa-berlin.de)
   - Teste die www-Version (www.hopsa-berlin.de)
   - Teste die GitHub Pages-URL (neuerusername.github.io/hopsa-berlin)

3. **Überprüfe alle Seiten**:
   - Navigiere durch alle Seiten der Website
   - Stelle sicher, dass Bilder und eingebettete Inhalte (Instagram, SoundCloud, YouTube) korrekt angezeigt werden
   - Teste alle Links innerhalb der Website und nach außen
   - Teste die Formularfunktionen (falls vorhanden)

4. **Prüfe auf HTTPS**:
   - Stelle sicher, dass die Website über HTTPS erreichbar ist
   - Achte auf das Schlosssymbol im Browser

### 5. Häufige Probleme und Lösungen

Beim Umzug zu einem anderen GitHub-Account können einige Probleme auftreten. Hier sind die häufigsten und wie du sie lösen kannst:

#### Problem: Website erscheint nicht nach dem Umzug

**Lösungen:**
1. **Überprüfe die GitHub Pages-Einstellungen**: Stelle sicher, dass als Quelle der richtige Branch und Ordner ausgewählt ist.
2. **Überprüfe die CNAME-Datei**: Die CNAME-Datei sollte genau "hopsa-berlin.de" (ohne Anführungszeichen) enthalten.
3. **Überprüfe die DNS-Einstellungen**: Stelle sicher, dass die A-Records und der CNAME-Record korrekt eingerichtet sind.
4. **Warte länger**: DNS-Änderungen können bis zu 48 Stunden dauern. Manchmal braucht es einfach mehr Zeit.

#### Problem: Inhalte werden nicht korrekt angezeigt

**Lösungen:**
1. **Cache leeren**: Drücke Strg+F5, um den Browser-Cache zu leeren.
2. **Repository überprüfen**: Stelle sicher, dass im neuen Repository alle Dateien vorhanden sind.
3. **Build-Prozess prüfen**: Überprüfe den Build-Status unter "Actions" im GitHub-Repository.
4. **Lokal testen**: Klone das neue Repository und teste die Website lokal mit run.bat.

#### Problem: SSL-Zertifikat-Warnungen

**Lösungen:**
1. **HTTPS erzwingen**: Aktiviere "Enforce HTTPS" in den GitHub Pages-Einstellungen.
2. **Warte auf Zertifikatsausstellung**: GitHub benötigt manchmal bis zu 24 Stunden, um ein SSL-Zertifikat auszustellen.
3. **DNS-Propagation abwarten**: Manchmal müssen die DNS-Änderungen sich erst vollständig verbreiten.

### 6. GitHub-Organisationen als Alternative

Statt ein Repository zwischen persönlichen Accounts zu übertragen, könnte es sinnvoller sein, eine GitHub-Organisation für Hopsa zu erstellen:

#### Vorteile einer GitHub-Organisation:

1. **Gemeinsamer Besitz**: Die Website gehört der Organisation, nicht einer Einzelperson.
2. **Bessere Zugriffssteuerung**: Du kannst verschiedenen Teammitgliedern unterschiedliche Rechte geben.
3. **Kontinuität**: Wenn ein Mitglied die Gruppe verlässt, bleibt die Organisation bestehen.
4. **Professionelleres Auftreten**: Eine Organisation repräsentiert die Gruppe besser als ein persönlicher Account.

#### Eine Organisation erstellen und das Repository übertragen:

1. **Bei GitHub anmelden** und auf das "+"-Symbol oben rechts klicken.
2. **"New organization" auswählen**.
3. **Einen Plan wählen** (der kostenlose Plan ist für eure Zwecke ausreichend).
4. **Organisation konfigurieren**:
   - Name: "hopsa-berlin" (oder ähnlich)
   - E-Mail: Eine gemeinsame E-Mail-Adresse der Gruppe
   - Beschreibung: Kurze Beschreibung der Gruppe
5. **Teammitglieder einladen** (optional in diesem Schritt).
6. **Repository übertragen** wie oben beschrieben, aber als Ziel die neue Organisation angeben.

> **Tipp für Teamarbeit:**  
> Mit einer GitHub-Organisation könnt ihr ein Team für die Website-Pflege erstellen und so die Arbeit besser verteilen. Jedes Teammitglied kann dann Änderungen vornehmen, ohne von einer einzelnen Person abhängig zu sein.

## Zu einem WYSIWYG-Website-Builder wechseln

Wenn die technische Hürde der aktuellen Lösung zu hoch erscheint, kann ein Umstieg auf einen benutzerfreundlichen WYSIWYG-Website-Builder eine gute Alternative sein. Diese Plattformen ermöglichen es dir, deine Website mit Drag & Drop-Funktionen ohne Programmierkenntnisse zu bearbeiten.

### 1. Einen passenden Website-Builder auswählen

Es gibt viele Website-Builder auf dem Markt. Hier sind einige, die für eure Bedürfnisse geeignet sein könnten:

#### Option 1: Wix (wix.com)
- **Vorteile**: Sehr benutzerfreundlich, viele Vorlagen, gute mobile Ansicht
- **Nachteile**: Kostenlose Version hat Werbung, für volle Funktionalität ist ein kostenpflichtiger Plan nötig
- **Kosten**: Ab ca. 10€/Monat für einen werbefreien Plan mit eigener Domain

#### Option 2: WordPress.com
- **Vorteile**: Sehr verbreitet, viele Plugins, flexibel, gute Community-Unterstützung
- **Nachteile**: Steiler Lernkurve als andere Builder, teilweise komplexer
- **Kosten**: Ab ca. 7€/Monat für einen Plan mit eigener Domain

#### Option 3: Jimdo (jimdo.com)
- **Vorteile**: Deutsche Plattform, einfach zu bedienen, guter Support
- **Nachteile**: Weniger Design-Optionen als andere Anbieter
- **Kosten**: Ab ca. 9€/Monat für einen Plan mit eigener Domain

#### Option 4: Squarespace (squarespace.com)
- **Vorteile**: Hochwertige Designs, gute für visuelle Inhalte
- **Nachteile**: Höhere Kosten, weniger flexibel bei bestimmten Funktionen
- **Kosten**: Ab ca. 14€/Monat für einen Plan mit eigener Domain

> **Was sind die Unterschiede zwischen diesen Plattformen und GitHub Pages?**  
> Der Hauptunterschied ist die Benutzerfreundlichkeit. Website-Builder bieten grafische Oberflächen zum Bearbeiten, während GitHub Pages technisches Wissen erfordert. Dafür ist GitHub Pages kostenlos, während die meisten Website-Builder monatliche Gebühren verlangen, um eine eigene Domain ohne Werbung zu nutzen.

### 2. Inhalte vorbereiten und sammeln

Bevor du mit der Migration beginnst, solltest du alle Inhalte deiner aktuellen Website sammeln:

1. **Texte extrahieren**:
   - Öffne alle Markdown-Dateien (.md) im src-Ordner deines Hopsa-Repositories
   - Kopiere die Texte in separate Textdokumente (ohne die Markdown-Formatierung)
   - Achte besonders auf Überschriften, Listen und hervorgehobenen Text

2. **Bilder speichern**:
   - Lade alle Bilder aus dem assets-Ordner herunter
   - Organisiere sie in Ordnern (z.B. "Team", "Logos", "Hintergrund")

3. **Eingebettete Inhalte notieren**:
   - Notiere die Links zu allen Instagram-, SoundCloud- und YouTube-Einbettungen
   - Speichere die entsprechenden Embed-Codes, falls du sie hast

4. **Seitenstruktur dokumentieren**:
   - Erstelle eine Liste aller Seiten der Website
   - Notiere die Navigationshierarchie
   - Halte fest, welche Seiten besondere Elemente wie Foto-Galerien oder Einbettungen haben

### 3. Neue Website erstellen und einrichten

Nachdem du einen Website-Builder ausgewählt und deine Inhalte vorbereitet hast, kannst du mit der Erstellung deiner neuen Website beginnen:

1. **Account erstellen**:
   - Registriere dich bei deinem ausgewählten Website-Builder
   - Wähle einen geeigneten Plan (achte darauf, dass er die Nutzung einer eigenen Domain erlaubt)

2. **Domain vorerst überspringen**:
   - Wenn du nach einer Domain gefragt wirst, wähle zunächst eine kostenlose Subdomain
   - Die Verbindung mit hopsa-berlin.de erfolgt erst später

3. **Vorlage/Template auswählen**:
   - Suche nach einer Vorlage für Veranstaltungen, Theater oder Künstler
   - Achte auf eine dunkle Farbgebung, die dem aktuellen Design der Hopsa-Website ähnelt
   - Stelle sicher, dass die Vorlage responsiv ist (gut auf Mobilgeräten funktioniert)

4. **Grundlegende Anpassungen vornehmen**:
   - Ändere die Farbpalette (schwarz/dunkelrot wie auf der aktuellen Website)
   - Füge das Hopsa-Logo hinzu
   - Richte die Hauptnavigation ein, die der aktuellen Website entspricht

### 4. Inhalte übertragen

Jetzt kannst du beginnen, deine gesammelten Inhalte auf die neue Website zu übertragen:

#### Seiten erstellen und Texte einfügen

1. **Startseite einrichten**:
   - Füge das Hopsa-Logo und den Willkommenstext ein
   - Erstelle einen Bereich für die nächsten Auftritte
   - Füge Instagram-Feed und Social Media-Links hinzu

2. **Ensemble-Seite**:
   - Erstelle eine Fotogalerie mit den Teammitgliedern
   - Füge die Teambeschreibungen hinzu

3. **Termine-Seite**:
   - Erstelle eine Liste oder Tabelle für kommende Veranstaltungen
   - Füge Details wie Datum, Uhrzeit, Ort und Links hinzu

4. **Kontakt-Seite**:
   - Füge Kontaktinformationen und E-Mail-Adressen ein
   - Erstelle ein Kontaktformular (falls gewünscht)

5. **Weitere Seiten** (Improvisation, Links, etc.) nach dem gleichen Prinzip erstellen

> **Tipp für die Seitengestaltung:**  
> Versuche, die Struktur und das Gefühl der aktuellen Website beizubehalten, damit wiederkehrende Besucher sich sofort zurechtfinden. Du kannst Screenshots der alten Website als Referenz verwenden.

#### Medien hinzufügen

1. **Bilder hochladen**:
   - Lade die gesammelten Bilder in die Medienbibliothek des Website-Builders hoch
   - Füge sie an den entsprechenden Stellen ein
   - Achte auf die richtigen Größen und Formate

2. **Social Media einbinden**:
   - Nutze die eingebauten Social Media-Widgets des Website-Builders
   - Falls diese nicht ausreichen, kopiere die Embed-Codes von Instagram, SoundCloud und YouTube
   - Füge sie an den entsprechenden Stellen ein

### 5. Die Domain verbinden

Wenn deine neue Website bereit ist, kannst du die Domain "hopsa-berlin.de" mit ihr verbinden:

#### Allgemeine Schritte (können je nach Website-Builder variieren):

1. **Im Dashboard des Website-Builders**:
   - Navigiere zu "Domains" oder "Einstellungen" > "Domains"
   - Wähle "Eigene Domain verbinden" oder "Domain hinzufügen"
   - Gib "hopsa-berlin.de" ein

2. **Bei Namecheap**:
   - Logge dich bei Namecheap ein
   - Gehe zur Domain "hopsa-berlin.de"
   - Öffne den Tab "Advanced DNS"
   - Lösche alle bisherigen A-Records und CNAME-Records

3. **DNS-Einstellungen anpassen**:
   - Folge den spezifischen Anweisungen deines Website-Builders für die DNS-Konfiguration
   - In der Regel musst du CNAME-, A- und TXT-Records bei Namecheap einrichten
   - Die genauen Werte erhältst du vom Website-Builder

4. **Verifizieren und aktivieren**:
   - Die meisten Website-Builder haben einen Verifizierungsprozess
   - Warte, bis die DNS-Änderungen aktiv sind (kann bis zu 48 Stunden dauern)
   - Aktiviere HTTPS/SSL für deine Domain

> **Wichtiger Hinweis zur Domain:**  
> Die Domain "hopsa-berlin.de" ist ein separates Asset, das ihr bei Namecheap besitzt. Sie kann mit jeder Website verbunden werden. Durch die Anpassung der DNS-Einstellungen ändert ihr nur, wohin die Domain zeigt, nicht aber den Besitz der Domain selbst.

### 6. Weiterleitungen einrichten

Um sicherzustellen, dass Besucher, die bestimmte Unterseiten der alten Website gespeichert haben, nicht auf Fehlerseiten landen, solltest du Weiterleitungen einrichten:

1. **Seitenstruktur vergleichen**:
   - Erstelle eine Tabelle mit alten und neuen URLs
   - Beispiel: "hopsa-berlin.de/ensemble" → "hopsa-berlin.de/ueber-uns" (falls du die Struktur geändert hast)

2. **Weiterleitungen einrichten**:
   - Nutze die Weiterleitungsfunktion deines Website-Builders
   - Für jede alte URL, die sich geändert hat, erstelle eine 301-Weiterleitung zur neuen URL
   - Vergiss nicht, auch alternative URLs zu berücksichtigen, die in der redirects.json aufgeführt waren

3. **Testen**:
   - Überprüfe alle alten URLs, um sicherzustellen, dass sie korrekt weitergeleitet werden

> **Was ist eine 301-Weiterleitung?**  
> Eine 301-Weiterleitung ist eine permanente Umleitung von einer URL zu einer anderen. Sie teilt Browsern und Suchmaschinen mit, dass eine Seite dauerhaft umgezogen ist. Suchmaschinen übertragen dabei die Suchmaschinenrankings der alten URL auf die neue.

### 7. Überprüfen und optimieren

Nach dem Umzug ist es wichtig, die neue Website gründlich zu testen und zu optimieren:

1. **Umfassender Test**:
   - Überprüfe die Website auf verschiedenen Geräten (Desktop, Tablet, Smartphone)
   - Teste in verschiedenen Browsern (Chrome, Firefox, Safari, Edge)
   - Stelle sicher, dass alle Links und Funktionen korrekt arbeiten

2. **Geschwindigkeit optimieren**:
   - Überprüfe die Ladezeit der Website (z.B. mit Google PageSpeed Insights)
   - Optimiere Bilder, die zu groß sind
   - Entferne unnötige Elemente, die die Website verlangsamen könnten

3. **Suchmaschinenoptimierung (SEO)**:
   - Stelle sicher, dass alle Seiten aussagekräftige Titel und Beschreibungen haben
   - Überprüfe, ob wichtige Schlüsselwörter enthalten sind
   - Reiche die neue Website bei Google Search Console ein

4. **Feedback einholen**:
   - Bitte Gruppenmitglieder, die Website zu testen
   - Sammle Feedback und nimm bei Bedarf Anpassungen vor

### 8. Vor- und Nachteile verschiedener Website-Builder für die Hopsa-Website

Um dir die Entscheidung für einen Website-Builder zu erleichtern, hier eine Übersicht, wie gut die verschiedenen Plattformen für die spezifischen Anforderungen der Hopsa-Website geeignet sind:

#### Wix:

**Vorteile für Hopsa:**
- Sehr gute Vorlagen für Künstler und Veranstaltungen
- Einfaches Einbinden von Social Media-Feeds
- Gute Terminkalender-Funktionen für Auftritte
- Einfaches Drag & Drop für Teamfotos und Galerien

**Nachteile für Hopsa:**
- Nicht ganz so flexibel bei komplexeren Layouts
- Social Media-Einbettungen funktionieren nicht immer perfekt

#### WordPress.com:

**Vorteile für Hopsa:**
- Sehr anpassungsfähig mit den richtigen Plugins
- Große Auswahl an Themes für Veranstaltungen und Künstler
- Blog-Funktionalität für Neuigkeiten
- Gute Optionen für mehrsprachige Websites (falls zukünftig gewünscht)

**Nachteile für Hopsa:**
- Steiler Lernkurve als andere Builder
- Braucht möglicherweise zusätzliche Plugins für bestimmte Funktionen

#### Jimdo:

**Vorteile für Hopsa:**
- Deutscher Service (leichter bei Fragen und Support)
- Sehr benutzerfreundlich, ideal für Nicht-Techniker
- Gute Integration von Social Media
- Einfache Terminverwaltung

**Nachteile für Hopsa:**
- Eingeschränktere Design-Möglichkeiten als andere Anbieter
- Weniger flexible Layoutoptionen

#### Squarespace:

**Vorteile für Hopsa:**
- Elegante, moderne Designs
- Hervorragende Bildergalerien für Ensemble-Fotos
- Gute Event-Darstellung für Auftritte
- Sehr gute mobile Ansichten

**Nachteile für Hopsa:**
- Höhere Kosten
- Etwas komplexer zu bedienen als Wix oder Jimdo

> **Tipp zur Auswahl:**  
> Die meisten Website-Builder bieten kostenlose Testphasen an. Nutze diese, um verschiedene Plattformen auszuprobieren und zu sehen, welche am besten zu deinen Fähigkeiten und den Anforderungen der Hopsa-Website passt.

## Häufige Fragen und Antworten

### "Was passiert mit der alten Website nach dem Umzug?"

Die alte Website bei GitHub Pages bleibt bestehen, bis du sie entfernst oder die Domain umkonfigurierst. Sobald die Domain auf die neue Website zeigt, ist die alte Website nur noch über ihre GitHub-URL (z.B. username.github.io/hopsa-berlin) erreichbar.

### "Verlieren wir durch den Umzug Besucher oder Google-Rankings?"

Bei einer korrekten Migration mit Weiterleitungen sollten keine langfristigen Verluste entstehen. Es kann kurzfristig zu Schwankungen kommen, aber wenn du Weiterleitungen einrichtest und die Inhaltsstruktur ähnlich hältst, werden die meisten Suchmaschinenrankings übertragen.

### "Was kostet der Umzug?"

- **Zu einem anderen GitHub-Account**: Kostenlos
- **Zu einem Website-Builder**: Je nach Plattform und gewähltem Plan zwischen 7€ und 15€ pro Monat
- **Die Domain-Kosten** bleiben in beiden Fällen gleich (die jährliche Verlängerung bei Namecheap)

### "Wie lange dauert der Umzug?"

- **Zu einem anderen GitHub-Account**: Wenige Stunden für die technische Umsetzung, plus bis zu 48 Stunden für die vollständige DNS-Propagation
- **Zu einem Website-Builder**: 1-3 Tage für die Erstellung und Einrichtung der neuen Website, plus bis zu 48 Stunden für die DNS-Propagation

### "Können wir später wieder zurück zu GitHub Pages wechseln?"

Ja, der Prozess ist reversibel. Da die Domain unabhängig von der Hosting-Plattform ist, kannst du jederzeit wieder zurück zu GitHub Pages wechseln (oder zu einer anderen Plattform), indem du die DNS-Einstellungen entsprechend anpasst.

### "Was passiert mit unseren E-Mail-Adressen bei einem Wechsel?"

E-Mail-Adressen mit der Domain "hopsa-berlin.de" werden durch die DNS-Einstellungen (MX-Records) gesteuert und sind unabhängig vom Website-Hosting. Wenn ihr E-Mail-Adressen mit eurer Domain nutzt, müsst ihr sicherstellen, dass die entsprechenden MX-Records bei der Migration beibehalten werden.

## Tipps für eine erfolgreiche Migration

Unabhängig davon, wohin du die Website umziehst, hier sind einige allgemeine Tipps für einen erfolgreichen Umzug:

### 1. Kommuniziere den Umzug

Informiere alle Beteiligten im Voraus über den geplanten Umzug:
- Teammitglieder, die an der Website arbeiten
- Besucher der Website (z.B. durch eine kurze Mitteilung)
- Personen mit Admin-Zugriff auf GitHub oder Namecheap

### 2. Erstelle ein Backup vor dem Umzug

Sichere alle wichtigen Dateien, bevor du mit dem Umzug beginnst:
- Klone das gesamte GitHub-Repository auf deinen Computer
- Speichere alle wichtigen Inhalte und Bilder separat
- Mache Screenshots wichtiger Seiten als Referenz

### 3. Plane genügend Zeit ein

Eine Website-Migration ist kein Projekt für eine späte Nachtstunde:
- Plane den Umzug für einen ruhigen Tag (nicht kurz vor wichtigen Veranstaltungen)
- Halte die gesamte Website-Migration innerhalb von 1-3 Tagen, um Verwirrung zu vermeiden
- Rechne mit unerwarteten Problemen und puffere genügend Zeit ein

### 4. Teste gründlich vor der Veröffentlichung

Bevor du die Domain auf die neue Website umstellst:
- Überprüfe alle Seiten und Funktionen auf der neuen Plattform
- Teste auf verschiedenen Geräten und Browsern
- Bitte mehrere Personen um Feedback

### 5. Überwache nach der Migration

Nach Abschluss des Umzugs:
- Überwache die Website-Statistiken, um sicherzustellen, dass der Traffic erhalten bleibt
- Überprüfe die wichtigsten Seiten regelmäßig auf Fehler
- Sammle Feedback von regelmäßigen Besuchern

## ChatGPT als Helfer bei der Website-Migration

ChatGPT kann dir bei der Migration deiner Website wertvolle Hilfe leisten. Hier sind einige nützliche Prompts:

### Für die Planung und Vorbereitung:

```
"Ich möchte die Hopsa-Website von GitHub Pages zu [Wix/WordPress/etc.] umziehen. Welche Inhalte sollte ich unbedingt sichern und wie erstelle ich ein komplettes Backup?"

"Was sind die wichtigsten Vorlagen oder Themes auf [Website-Builder], die für eine Improtheater-Website wie Hopsa geeignet wären?"

"Erstelle mir eine Checkliste für die Migration der Hopsa-Website, die alle wichtigen Schritte enthält."
```

### Für technische Fragen:

```
"Ich habe folgendes Problem bei der Übertragung des GitHub-Repositories: [Fehlermeldung einfügen]. Wie kann ich das lösen?"

"Wie stelle ich die DNS-Einstellungen bei Namecheap für [Website-Builder] korrekt ein? Welche Einträge brauche ich?"

"Ich bekomme beim Einrichten von HTTPS auf meiner neuen Website folgende Fehlermeldung: [Meldung einfügen]. Was kann ich tun?"
```

### Für die Inhaltsübertragung:

```
"Wie kann ich diesen Markdown-Text am besten in ein Format umwandeln, das für [Website-Builder] geeignet ist?
[Markdown-Text einfügen]"

"Hier ist der Embedded-Code für unseren Instagram-Feed. Wie kann ich diesen am besten in [Website-Builder] einbinden?
[Code einfügen]"

"Wie kann ich das Layout der Termine-Seite in [Website-Builder] nachbauen, damit es ähnlich aussieht wie auf der aktuellen Hopsa-Website?"
```

> **Tipp für effektive ChatGPT-Prompts:**  
> Je spezifischer du bist, desto besser kann ChatGPT dir helfen. Teile Screenshots, Fehlermeldungen oder konkrete Code-Ausschnitte, um genauere Antworten zu bekommen. Gib auch Kontext über deine technische Erfahrung, damit die Antworten an dein Niveau angepasst werden können.

## Zusammenfassung und nächste Schritte

In diesem Kapitel hast du gelernt:
- Wie du die Hopsa-Website zu einem anderen GitHub-Account umziehst
- Wie du von GitHub Pages zu einem WYSIWYG-Website-Builder wechselst
- Was du bei der Domain-Umstellung beachten musst
- Wie du den Umzug planst, durchführst und nachbereitest
- Welche Vor- und Nachteile verschiedene Website-Builder für eure spezifischen Anforderungen haben

Ein Website-Umzug mag anfangs einschüchternd wirken, besonders wenn du nicht viel technische Erfahrung hast. Aber mit einer guten Planung und Vorbereitung kannst du den Prozess schrittweise bewältigen. Denke daran, dass es keine Eile gibt – nimm dir die Zeit, die du brauchst, und hole dir bei Bedarf Hilfe von technisch erfahreneren Personen oder von ChatGPT.

Das Wichtigste ist, dass die Website nach dem Umzug für eure Zwecke besser funktioniert und einfacher zu verwalten ist.

---

**Bereit für den nächsten Schritt?** Im folgenden Kapitel "ChatGPT als dein persönlicher Assistent" erfährst du, wie du künstliche Intelligenz als mächtiges Werkzeug für alle Aspekte der Website-Verwaltung nutzen kannst – von der Erstellung neuer Inhalte bis zur Lösung technischer Probleme.

# Kapitel 13: ChatGPT als dein persönlicher Assistent

Willkommen zu einem Kapitel, das dir zeigen wird, wie du mit ChatGPT deine Website-Verwaltung revolutionieren kannst! Ob du technisch versiert bist oder gerade erst anfängst – dieser digitale Helfer kann dir viel Arbeit abnehmen und dir bei zahlreichen Aufgaben rund um deine Website unterstützen.

## Inhaltsübersicht:
- Was ist ChatGPT und wie kann es dir helfen?
- Praktische Anwendungen für die Hopsa-Website
- Die Kunst des effektiven Prompting
- Fertige Beispiel-Prompts für häufige Aufgaben
- Schritt-für-Schritt-Anleitungen für komplexere Aufgaben
- Tipps und Tricks für optimale Ergebnisse

---

## 13.1 Was ist ChatGPT und wie kann es dir helfen?

ChatGPT ist ein KI-Assistent, der Text verstehen und generieren kann. Stell dir vor, du hättest einen hilfsbereiten Kollegen, der 24/7 verfügbar ist, nie müde wird, und ein erstaunliches Wissen über Websites, Programmierung und viele andere Themen hat.

> **Was ist eigentlich eine KI?**  
> KI steht für "Künstliche Intelligenz". Im Gegensatz zu traditioneller Software, die nur genau das tut, was man ihr explizit programmiert hat, kann KI aus Daten lernen und neue Aufgaben bewältigen, für die sie nicht explizit programmiert wurde. ChatGPT ist ein Beispiel für eine Art KI namens "Large Language Model" (LLM), das darauf trainiert wurde, menschliche Sprache zu verstehen und zu generieren.

### Was ChatGPT kann:
- **Code erstellen und erklären**: HTML, CSS, JavaScript und mehr
- **Texte schreiben und verbessern**: von Blogbeiträgen bis zu Eventtexten
- **Probleme analysieren**: Fehler im Code finden und Lösungen vorschlagen
- **Ideen entwickeln**: Designvorschläge, Inhaltsideen und Strukturkonzepte
- **Projektunterstützung**: von der Planung bis zur Umsetzung

### Was ChatGPT nicht kann:
- Direkt auf deine Website zugreifen oder Änderungen vornehmen
- Auf aktuelle Ereignisse nach seinem Trainingsdatum reagieren
- Komplexe visuelle Designs erstellen (obwohl es Ideen beschreiben kann)
- 100% fehlerfreie Codes garantieren (überprüfe immer die Ergebnisse)

### Wie du es nutzen kannst:
Du stellst ChatGPT eine Frage (einen "Prompt") und es antwortet mit einer hilfreichen Antwort. Je spezifischer deine Frage, desto gezielter kann ChatGPT helfen. Du kannst die Antwort dann kopieren, anpassen oder als Inspiration nutzen.

---

## 13.2 Praktische Anwendungen für die Hopsa-Website

Schauen wir uns an, wie ChatGPT dir speziell bei der Pflege und Weiterentwicklung der Hopsa-Website helfen kann:

### Inhalte erstellen und aktualisieren

**Eventbeschreibungen**:
Du kannst ChatGPT bitten, kreative Beschreibungen für kommende Auftritte zu erstellen. Sieh hier ein Beispiel:

```
Schreibe eine kurze, ansprechende Beschreibung für einen Improtheater-Auftritt 
von Hopsa Berlin im Artenschutztheater am 27.04.2024. Der Stil sollte humorvoll 
und einladend sein und betonen, dass es sich um spontane Improvisation handelt.
```

Diese Beschreibungen kannst du dann in der termine.md oder termine.njk Datei verwenden.

**Teamprofile**:
Für neue Ensemble-Mitglieder kannst du interessante Kurzprofile erstellen lassen:

```
Erstelle ein kurzes, kreatives Profil für ein neues Hopsa-Ensemble-Mitglied namens [Name]. 
Es sollte humorvoll sein, maximal 3 Sätze umfassen und die Leidenschaft für Improtheater hervorheben.
```

### Code-Unterstützung

**Neue Funktionen hinzufügen**:
Du möchtest z.B. eine Bildergalerie einbauen? Frag ChatGPT:

```
Wie kann ich eine einfache Bildergalerie auf der Hopsa-Website einbauen, die mit 
dem bestehenden Design harmoniert? Bitte gib mir den HTML- und CSS-Code, den ich 
in eine neue Datei "galerie.md" einfügen kann.
```

**Fehler beheben**:
Bei Problemen mit der Website kann ChatGPT helfen:

```
Auf der Terminseite werden die Datumsangaben nicht richtig angezeigt. 
Hier ist der aktuelle Code aus termine.njk:
[füge den relevanten Code ein]
Was könnte das Problem sein und wie kann ich es beheben?
```

> **Was ist eigentlich ein Prompt?**  
> Ein Prompt ist einfach die Frage oder Aufforderung, die du an ChatGPT stellst. Die Kunst des "Promptings" besteht darin, deine Anfrage so zu formulieren, dass du die bestmögliche Antwort erhältst. Je klarer und spezifischer dein Prompt, desto besser kann ChatGPT dir helfen.

---

## 13.3 Die Kunst des effektiven Prompting

Um das Beste aus ChatGPT herauszuholen, solltest du lernen, wie du effektive Prompts erstellst. Hier sind die wichtigsten Prinzipien:

### Grundprinzipien für gute Prompts:

1. **Sei spezifisch**: Je genauer du beschreibst, was du brauchst, desto besser
2. **Gib Kontext**: Erkläre relevante Hintergrundinformationen
3. **Definiere das gewünschte Format**: Sag, in welcher Form du die Antwort haben möchtest
4. **Zeige Beispiele**: Wenn möglich, zeige Beispiele für das gewünschte Ergebnis
5. **Iteriere**: Wenn die erste Antwort nicht passt, verfeinere deinen Prompt

### Von schlecht zu gut - Beispiele:

**Schwacher Prompt:** 
```
Wie ändere ich die Termine?
```

**Besserer Prompt:**
```
Ich möchte auf der Hopsa-Website einen neuen Auftritt am 15.06.2024 im "Theater XYZ"
hinzufügen. In der Datei termine.md werden die Events mit einem Makro namens 
"neuesEvent" erstellt. Bitte zeige mir den exakten Code, den ich einfügen muss, 
basierend auf dem Format der anderen Events in dieser Datei.
```

### Das WDGS-Prinzip für perfekte Prompts:

- **W**as: Was genau möchtest du erreichen?
- **D**aten: Welche Informationen hast du bereits?
- **G**estaltung: In welcher Form soll die Antwort sein?
- **S**til: Welchen Ton oder Stil soll die Antwort haben?

**Beispiel eines WDGS-Prompts:**
```
Was: Ich möchte einen neuen Abschnitt für die Startseite der Hopsa-Website erstellen, der 
unsere Improworkshops bewirbt.

Daten: Workshops finden jeden Mittwoch um 19 Uhr statt, sind für Anfänger geeignet, kosten 
nichts und finden im Jugendzentrum Königsstadt statt.

Gestaltung: Bitte erstelle einen Markdown-Abschnitt mit einer Überschrift, einem kurzen 
Teaser und einem anklickbaren Button, der auf die Kursseite verlinkt.

Stil: Der Text sollte einladend, humorvoll und im Stil der bestehenden Hopsa-Website sein.
```

> **Tipp: Relevante Dateien zeigen**  
> Wenn du ChatGPT bittest, Code zu erstellen oder zu ändern, ist es sehr hilfreich, die relevanten bestehenden Dateien zu zeigen. Du kannst den Inhalt der Datei kopieren und in deinen Prompt einfügen. So kann ChatGPT besser verstehen, wie der Code aktuell aussieht und welchen Stil er beibehalten sollte.

---

## 13.4 Effektive Prompts für häufige Aufgaben

Hier sind fertige Prompts für typische Aufgaben bei der Verwaltung der Hopsa-Website, die du direkt kopieren und anpassen kannst:

### Neue Veranstaltungen hinzufügen

```
Ich möchte einen neuen Auftritt zu unserer Terminliste hinzufügen. Hier sind die Details:

- Titel: [Title einfügen]
- Datum: [Datum einfügen]
- Uhrzeit: [Uhrzeit einfügen]
- Veranstaltungsort: [Ort einfügen]
- Link zur Location: [Website-URL der Location]
- Adresse: [vollständige Adresse]
- Eintritt: [Eintrittspreis oder "auf Spendenbasis"]

In der Datei "src/_includes/termine.md" werden Events mit einem Makro namens "neuesEvent" erstellt. 
Hier ist ein Beispiel eines bestehenden Events:

{{ termine.neuesEvent(
    titel="Hopsa unter Artenschutz",
    datum="27.04.2024",
    uhrzeit="20:00",
    veranstaltungsort="Artenschutztheater",
    link="https://www.artenschutztheater.de",
    adresse="Lüneburger Str. 370, 10557 Berlin, Germany"
)}}

Bitte erstelle mir den Code für das neue Event basierend auf diesem Format.
```

### Inhalte auf bestehenden Seiten ändern

```
Ich möchte den Einleitungstext auf der Hopsa-Startseite aktualisieren. Hier ist der aktuelle Text aus 
der Datei "src/_includes/landingpage.md":

[aktuellen Text einfügen]

Bitte erstelle eine neue Version, die folgende Aspekte stärker betont:
1. Unsere offenen Proben jeden Mittwoch
2. Dass wir ein junges, dynamisches Ensemble sind
3. Dass wir sowohl Auftritte als auch Workshops anbieten

Der Text sollte ungefähr die gleiche Länge haben und den bestehenden freundlichen, einladenden Ton beibehalten.
```

### Design-Anpassungen vornehmen

```
Ich möchte die Buttons auf der Hopsa-Website ansprechender gestalten. Aktuell haben sie diesen CSS-Code:

.py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg

Bitte schlage mir 3 alternative Designs vor, die zum dunklen Farbschema der Website passen, aber 
auffälliger sind. Die Buttons sollten weiterhin mit Tailwind CSS gestylt werden.
```

### Bilder optimieren

```
Ich habe neue Teamfotos für die Ensemble-Seite, die ich optimieren muss. Was sind die besten Schritte, um:
1. Die Bildgröße für schnelles Laden zu optimieren
2. Die Bilder im webp-Format zu speichern
3. Die Bilder für die Verwendung auf der Hopsa-Website vorzubereiten

Bitte gib mir eine einfache Schritt-für-Schritt-Anleitung mit Tools, die für Anfänger geeignet sind.
```

### SEO verbessern

```
Ich möchte die Sichtbarkeit der Hopsa-Website in Suchmaschinen verbessern. Bitte analysiere 
die aktuelle Struktur der Website und gib mir 5 konkrete Tipps, wie ich die SEO verbessern kann.
Fokussiere dich besonders auf:
1. Meta-Tags
2. Seitenstruktur
3. Schlüsselwörter für Improtheater
4. Lokale SEO für Berlin
```

---

## 13.5 Schritt-für-Schritt-Anleitungen für komplexere Aufgaben

Nun kommen wir zu einigen ausführlicheren Anleitungen für typische Aufgaben bei der Hopsa-Website:

### Eine neue Seite erstellen

1. **Frage ChatGPT nach der Grundstruktur:**

```
Ich möchte für die Hopsa-Website eine neue Seite erstellen, die unsere Improvisationstechniken 
erklärt. Die Seite soll "techniken.md" heißen und folgende Elemente enthalten:
- Eine Hauptüberschrift
- Eine kurze Einleitung
- 3-4 Abschnitte zu verschiedenen Techniken
- Ein abschließendes Call-to-Action für unsere Workshops

Bitte erstelle mir den Markdown-Code für diese Seite im Stil der bestehenden Hopsa-Seiten.
```

2. **Überprüfe und passe den generierten Code an**

3. **Frage nach, wie du die Datei richtig platzierst:**

```
Ich habe jetzt den Inhalt für meine neue Seite "techniken.md". Wo genau muss ich diese 
Datei im Repo speichern und was muss ich tun, damit sie in der Navigation erscheint?
```

4. **Nach dem Speichern, frage nach Tipps zur Überprüfung:**

```
Die Seite ist jetzt online. Welche Aspekte sollte ich überprüfen, um sicherzustellen, 
dass alles richtig funktioniert? Gibt es typische Fehler, auf die ich achten sollte?
```

### Das Design einer bestehenden Seite ändern

1. **Beschreibe die gewünschte Änderung:**

```
Ich möchte das Layout der Kontaktseite ("kontakt.md") verbessern. Aktuell ist alles 
untereinander angeordnet. Ich hätte gerne ein zweispaltiges Layout auf größeren 
Bildschirmen: Links die Kontaktinformationen und rechts das Kontaktformular. 
Hier ist der aktuelle Code:

[Code der kontakt.md einfügen]

Bitte zeige mir, wie ich den Code ändern muss, um dieses zweispaltige Layout zu erreichen.
```

2. **Implementiere die Änderungen und frage nach Verbesserungen:**

```
Ich habe die Änderungen vorgenommen, aber das Formular ist jetzt zu schmal. 
Wie kann ich die Breite der Spalten anpassen, damit beide Spalten gut aussehen?
```

### Einen neuen Social Media Feed einbinden

1. **Frage nach allgemeinen Informationen:**

```
Ich möchte einen TikTok-Feed auf der Hopsa-Website einbinden, ähnlich wie wir bereits 
Instagram und Soundcloud eingebunden haben. Was ist der beste Weg, dies zu tun?
```

2. **Bitte um spezifischen Code:**

```
Danke für die Informationen. Ich möchte jetzt den TikTok-Feed einbinden. Hier ist 
der Code, wie wir Instagram einbinden:

[Code aus instagram-embed.html einfügen]

Bitte erstelle mir einen ähnlichen Code für TikTok, den ich in einer neuen Datei 
"tiktok-embed.html" speichern kann.
```

3. **Frage nach der Integration:**

```
Jetzt habe ich die tiktok-embed.html Datei. Wie integriere ich sie in die bestehende 
embeddings.md Datei, sodass der TikTok-Feed neben Instagram und Soundcloud angezeigt wird?
```

> **Was ist ein Repository?**  
> Ein Repository (kurz "Repo") ist ein zentraler Ort, an dem alle Dateien deines Projekts gespeichert werden. Bei der Hopsa-Website handelt es sich um ein Git-Repository, das alle Dateien der Website enthält. Denke an ein Repository wie an einen Ordner mit Super-Kräften: Es speichert nicht nur Dateien, sondern auch alle Änderungen, die jemals an diesen Dateien vorgenommen wurden.

---

## 13.6 Beispiel-Prompts zum Kopieren

Hier sind weitere fertige Prompts speziell für die Hopsa-Website, die du direkt nutzen kannst:

### Für Content-Erstellung

```
Schreibe einen kurzen, humorvollen Text (max. 150 Wörter) für die Hopsa-Website, der 
erklärt, was Improtheater ist und warum es Spaß macht, sich eine Show anzusehen. 
Der Text sollte sich an Menschen richten, die noch nie bei einem Improtheater waren 
und neugierig gemacht werden sollen.
```

```
Erstelle 5 verschiedene, kreative Überschriften für einen Blogpost über den letzten 
Hopsa-Auftritt im Artenschutztheater. Die Überschriften sollten Neugier wecken und 
zum Weiterlesen animieren.
```

### Für technische Hilfe

```
Ich möchte auf der Hopsa-Website einen Countdown bis zu unserem nächsten Auftritt 
am 27.04.2024 einbauen. Wie kann ich das mit einfachem JavaScript umsetzen? 
Bitte gib mir den vollständigen Code und erkläre, wo ich ihn platzieren muss.
```

```
Die Responsive-Darstellung der Terminseite funktioniert nicht gut auf Mobilgeräten. 
Hier ist der relevante Code:

[Code einfügen]

Wie kann ich das Layout verbessern, damit es auf Smartphones besser aussieht?
```

### Für Design-Ideen

```
Ich suche nach einer neuen Farbpalette für die Hopsa-Website, die zum Thema Improtheater 
passt. Die aktuelle Seite hat ein dunkles Design mit roten Akzenten. Schlage mir 3 alternative 
Farbschemata vor, die modern und künstlerisch wirken, aber immer noch gut lesbar sind.
```

```
Wie kann ich die Startseite der Hopsa-Website visuell interessanter gestalten, ohne 
grundlegende Änderungen am Layout vorzunehmen? Ich suche nach einfachen CSS-Tweaks oder 
kleinen Designelementen, die einen großen Unterschied machen können.
```

### Für Problemlösung

```
Beim Öffnen der Hopsa-Website auf Safari erscheint das Logo nicht richtig. In Chrome 
funktioniert alles. Was könnten mögliche Ursachen sein und wie kann ich das Problem beheben?
```

```
Die Links in der Navigation funktionieren manchmal nicht richtig. Wenn ich auf "Termine" 
klicke, werde ich manchmal auf die Startseite weitergeleitet. Hier ist der relevante Code 
aus header.njk:

[Code einfügen]

Was könnte das Problem sein?
```

---

## 13.7 Tipps und Tricks für optimale Ergebnisse

Um das Maximum aus ChatGPT herauszuholen, hier einige bewährte Praktiken:

### Iterieren und Verfeinern

Wenn die erste Antwort nicht perfekt ist, frage nach! Du kannst sagen:

```
Danke für den Vorschlag. Könntest du den Text kürzer machen und mehr Humor einbauen?
```

oder

```
Der Code funktioniert nicht wie erwartet. Der Fehler lautet: [Fehlermeldung einfügen]. 
Kannst du den Code korrigieren?
```

### Mehrere Optionen anfordern

```
Bitte schlage mir 3 verschiedene Designs für die neue Workshop-Seite vor, damit ich 
verschiedene Möglichkeiten vergleichen kann.
```

### Schritt für Schritt vorgehen

Bei komplexen Aufgaben:

```
Ich möchte eine vollständig neue Sektion auf der Hopsa-Website einbauen. Lass uns 
das Schritt für Schritt angehen:
1. Zuerst: Welche Dateien muss ich erstellen oder ändern?
2. Dann: Wie sieht der Code für diese Dateien aus?
3. Schließlich: Wie teste ich, ob alles funktioniert?
```

### Konversation speichern

Wenn du eine besonders hilfreiche Konversation mit ChatGPT hattest, speichere sie ab! Du kannst:

1. Die Konversation als PDF exportieren
2. Wichtige Code-Snippets separat speichern
3. Screenshots von besonders hilfreichen Antworten machen

### Prompt-Bibliothek anlegen

Erstelle eine Textdatei mit deinen besten Prompts, die du wiederverwendest. Zum Beispiel:

```
// Prompt für neue Eventbeschreibungen
Schreibe eine kurze, ansprechende Beschreibung für einen Improtheater-Auftritt von Hopsa Berlin am [DATUM] in [ORT]. Der Stil sollte humorvoll und einladend sein und betonen, dass es sich um spontane Improvisation handelt.

// Prompt für Code-Review
Bitte überprüfe diesen Code für die Hopsa-Website auf Fehler und Verbesserungsmöglichkeiten:
[CODE]

// Prompt für SEO-Optimierung
Wie kann ich den folgenden Text für SEO optimieren, ohne dass er unnatürlich klingt? Fokussiere auf Keywords rund um "Improtheater Berlin" und "Improvisationstheater Workshop":
[TEXT]
```

> **Pro-Tipp: Nutze Anführungszeichen für exakte Zitate**  
> Wenn du möchtest, dass ChatGPT einen bestimmten Text exakt übernimmt oder analysiert, setze ihn in Anführungszeichen. So weiß die KI, dass dieser Teil wichtig ist und unverändert bleiben sollte.

---

## 13.8 Häufige Anwendungsfälle speziell für die Hopsa-Website

### Termine aktualisieren

Der häufigste Anwendungsfall ist vermutlich das Hinzufügen neuer Auftritte. Hier ein detaillierter Workflow:

1. **Informationen sammeln**: Notiere alle Details des neuen Events (Titel, Datum, Ort, etc.)

2. **ChatGPT fragen**:
```
Ich möchte ein neues Event mit dem Titel "Hopsa Improshow" am 12.07.2024 um 20:00 Uhr 
im "Kulturzentrum XYZ" hinzufügen. Die Adresse ist "Beispielstraße 123, 10123 Berlin" 
und die Website der Location ist "https://kulturzentrum-xyz.de". Der Eintritt ist auf Spendenbasis.

Bitte erstelle mir den Code für das neue Event im neuesEvent-Makro-Format für die termine.md Datei.
```

3. **Code in die richtige Datei einfügen**: Füge den generierten Code in termine.md ein, am besten chronologisch sortiert mit den neuesten Events oben.

4. **Website testen**: Nach dem Einpflegen solltest du die Website lokal testen, um zu sehen, ob alles korrekt angezeigt wird.

### Social Media Links aktualisieren

Wenn sich ein Social Media Link ändert oder ein neuer hinzukommt:

1. **ChatGPT um Hilfe bitten**:
```
Wir haben jetzt einen neuen Social Media Kanal: TikTok mit dem Handle "@hopsa_berlin". 
Ich möchte diesen Link zu unserer Social Media Sektion hinzufügen. Hier ist der aktuelle 
Code aus der links.md Datei:

[Code aus links.md einfügen]

Wie muss ich den Code anpassen, um TikTok hinzuzufügen?
```

2. **Änderungen in zwei Dateien vornehmen**:
   - Füge den neuen Link zu links.md hinzu
   - Aktualisiere auch die Redirects in redirects.json, wenn du einen Kurz-Link wie "hopsa-berlin.de/tiktok" haben möchtest

### Design-Elemente ändern

Wenn du das Design anpassen möchtest:

1. **Beschreibe dein Ziel**:
```
Ich möchte die Farbe der Überschriften auf der Hopsa-Website von weiß (#ddd) zu einem 
sanften Rot ändern, das besser zum Theatervorhang im Hintergrund passt. Hier ist der 
relevante Teil aus der default.css Datei:

[CSS-Code einfügen]

Welche Farbe würdest du empfehlen und wie muss ich den Code ändern?
```

2. **Teste kleine Änderungen zuerst**: Bei Designänderungen ist es ratsam, erst kleine Änderungen zu testen, bevor du größere Umgestaltungen vornimmst.

### SEO verbessern

Um die Sichtbarkeit der Website zu erhöhen:

1. **Analyse anfragen**:
```
Bitte analysiere die aktuelle Struktur der Hopsa-Website in Bezug auf SEO. 
Besonders interessiert mich:
1. Sind die Meta-Tags optimal?
2. Fehlen wichtige Keywords?
3. Wie kann ich die lokale SEO für Berlin verbessern?

Hier ist der HTML-Code des Kopfbereichs der Website:
[Code aus html-wrapper.njk einfügen]
```

2. **Umsetzungsplan erstellen lassen**:
```
Danke für die Analyse. Kannst du mir nun einen Schritt-für-Schritt-Plan erstellen, 
wie ich diese SEO-Verbesserungen umsetzen kann? Bitte berücksichtige, dass ich nicht 
sehr technisch versiert bin und einfache Anweisungen benötige.
```

---

## 13.9 Häufige Fragen und Lösungen

### "ChatGPT gibt mir falschen Code"

Das kann passieren! ChatGPT ist nicht perfekt und kann manchmal Fehler machen, besonders bei spezifischen technischen Details. Tipps zur Lösung:

1. **Zeige den Kontext**: Gib ChatGPT mehr Informationen über deine Projektstruktur
2. **Zeige bestehenden Code**: ChatGPT kann besser helfen, wenn es sieht, wie der existierende Code aussieht
3. **Fehler zurückmelden**: Wenn etwas nicht funktioniert, teile ChatGPT den genauen Fehler mit
4. **Nach Alternativen fragen**: Manchmal gibt es mehrere Wege, ein Problem zu lösen

### "Ich verstehe die Antwort nicht"

Wenn ChatGPT zu technisch wird:

```
Danke für die Antwort, aber ich bin nicht sehr technisch versiert. Kannst du das 
bitte nochmal einfacher erklären, als würdest du es jemandem erklären, der gerade 
erst anfängt, Websites zu bearbeiten?
```

### "Wie speichere ich die Änderungen?"

Wenn du unsicher bist, wie du Änderungen speichern und veröffentlichen sollst:

```
Ich habe jetzt die Änderungen in der Datei vorgenommen. Was sind die nächsten 
Schritte, um diese Änderungen auf der Live-Website sichtbar zu machen? Bitte 
erkläre die Schritte sehr detailliert.
```

### "Woher weiß ich, welche Datei ich ändern muss?"

Wenn du die richtige Datei für eine Änderung suchst:

```
Ich möchte den Text auf der Kontaktseite ändern. Welche Datei muss ich dafür 
bearbeiten und wo finde ich sie im Repository?
```

---

## 13.10 Weiterführende Ressourcen

Um deine Fähigkeiten mit ChatGPT weiter zu verbessern:

### Offizielle Ressourcen
- [OpenAI Hilfe-Center](https://help.openai.com/)
- [ChatGPT Leitfaden](https://platform.openai.com/docs/guides/prompt-engineering)

### Nützliche Werkzeuge
- [Visual Studio Code](https://code.visualstudio.com/) - Ein hervorragender Text-Editor für Websitecode
- [GitHub Desktop](https://desktop.github.com/) - Vereinfacht die Arbeit mit GitHub-Repositories
- [Markdown Guide](https://www.markdownguide.org/) - Hilfe zum Schreiben und Formatieren von Markdown

### Improvisationstheater-Ressourcen
- [Improwiki](https://improwiki.com/) - Eine Wissensdatenbank für Improtheater
- [Applied Improvisation Network](https://appliedimprovisation.network/) - Ressourcen zur Anwendung von Improvisationstechniken

---

## Fazit

ChatGPT kann ein unglaublich hilfreiches Werkzeug für die Verwaltung und Weiterentwicklung deiner Hopsa-Website sein. Mit den richtigen Prompts und etwas Übung wirst du immer bessere Ergebnisse erzielen und viele Aufgaben effizienter erledigen können.

Denk daran: ChatGPT ist wie ein hilfsbereiter Kollege - manchmal musst du nachfragen oder präzisieren, aber mit etwas Geduld und den richtigen Fragen wird es dir eine große Hilfe sein.

# 14. Fehlerbehebung und häufige Probleme

## Einleitung: Wenn es mal nicht rund läuft

Willkommen im Kapitel zur Fehlerbehebung! Du hast fleißig an der Hopsa-Website gearbeitet, aber irgendwie funktioniert etwas nicht wie erwartet? Keine Sorge – das passiert selbst den erfahrensten Webentwicklern. In diesem Kapitel zeigen wir dir, wie du die häufigsten Probleme systematisch identifizieren und lösen kannst.

> **Wissensbox: Was ist Fehlerbehebung?**  
> Fehlerbehebung (oder "Troubleshooting") bezeichnet den Prozess, Probleme zu identifizieren, zu analysieren und zu lösen. Es ist wie Detektivarbeit: Du sammelst Hinweise, stellst Hypothesen auf und testest verschiedene Lösungen, bis das Problem behoben ist.

Bevor wir in die Details eintauchen, hier ein allgemeiner Tipp: Bewahre Ruhe! Die meisten Probleme haben einfache Ursachen und Lösungen. Ein systematisches Vorgehen hilft dir, schneller ans Ziel zu kommen.

## 14.1 Die Website wird nicht aktualisiert

Eins der häufigsten und frustrierendsten Probleme: Du hast Änderungen an deiner Website vorgenommen, aber wenn du sie im Browser aufrufst, siehst du immer noch die alte Version. Lass uns herausfinden, woran das liegen kann.

### 14.1.1 Lokale vs. Online-Version verstehen

Beim Arbeiten an der Hopsa-Website gibt es zwei "Versionen":

1. **Die lokale Version** auf deinem Computer, die du während der Entwicklung bearbeitest
2. **Die Online-Version**, die auf GitHub Pages gehostet wird und über hopsa-berlin.de erreichbar ist

> **Wissensbox: Was ist "lokal" vs. "online"?**  
> "Lokal" bezeichnet Dateien und Programme, die direkt auf deinem Computer gespeichert und ausgeführt werden.  
> "Online" bezeichnet Dateien und Programme, die auf einem Server im Internet gespeichert sind und von dort aus ausgeliefert werden.

#### Wie du überprüfen kannst, ob du die lokale oder die Online-Version betrachtest:

1. **Lokale Version**: Die URL beginnt typischerweise mit `http://localhost:8080` oder einer ähnlichen Adresse.
2. **Online-Version**: Die URL ist `https://hopsa-berlin.de` oder `https://[dein-github-username].github.io/hopsa-berlin/`.

**Lösung bei Verwechslung:**
- Wenn du Änderungen lokal siehst, aber online nicht, musst du deine Änderungen vermutlich noch auf GitHub hochladen (commit und push).
- Wenn du Änderungen online sehen möchtest, stelle sicher, dass du im Browser die richtige URL aufrufst.

### 14.1.2 Browser-Cache-Probleme lösen

Manchmal speichert dein Browser ältere Versionen von Webseiten, um schnellere Ladezeiten zu ermöglichen. Dies kann dazu führen, dass du trotz korrekter Änderungen und Deployment immer noch die alte Version siehst.

> **Wissensbox: Was ist Browser-Cache?**  
> Der Browser-Cache ist ein temporärer Speicherbereich, in dem dein Browser Kopien von besuchten Webseiten speichert. Das beschleunigt das Laden dieser Seiten beim nächsten Besuch, kann aber auch dazu führen, dass du nicht die neueste Version siehst.

**So leerst du deinen Browser-Cache:**

1. **Chrome**: 
   - Drücke `Strg+Shift+Entf` (Windows/Linux) oder `Cmd+Shift+Entf` (Mac)
   - Wähle "Browserdaten löschen"
   - Wähle den Zeitraum "Letzte Stunde" (oder einen passenden Zeitraum)
   - Aktiviere mindestens "Bilder und Dateien im Cache"
   - Klicke auf "Daten löschen"

2. **Firefox**: 
   - Drücke `Strg+Shift+Entf` (Windows/Linux) oder `Cmd+Shift+Entf` (Mac)
   - Wähle "Alles" bei Zeitraum
   - Aktiviere "Cache"
   - Klicke auf "Jetzt löschen"

3. **Edge**: 
   - Drücke `Strg+Shift+Entf`
   - Wähle einen Zeitraum
   - Aktiviere "Zwischengespeicherte Bilder und Dateien"
   - Klicke auf "Jetzt löschen"

4. **Safari**:
   - Klicke auf "Safari" im Menü
   - Wähle "Verlauf löschen"
   - Wähle "Die letzte Stunde" oder einen anderen Zeitraum
   - Klicke auf "Verlauf löschen"

**Schnellere Alternative:** Drücke `Strg+F5` (Windows/Linux) oder `Cmd+Shift+R` (Mac) auf der Webseite, um sie komplett neu zu laden und dabei den Cache zu umgehen.

### 14.1.3 Deployment-Probleme identifizieren und lösen

Damit deine Änderungen online sichtbar werden, müssen sie korrekt auf GitHub hochgeladen (Push) und dann durch GitHub Pages veröffentlicht werden.

#### Häufige Deployment-Probleme bei der Hopsa-Website:

1. **Vergessene Commits oder Push**:
   - Deine Änderungen wurden lokal gespeichert, aber nicht commited oder auf GitHub hochgeladen.

   **Lösung**: Überprüfe mit `git status`, ob es ungespeicherte Änderungen gibt. Führe dann aus:
   ```
   git add .
   git commit -m "Beschreibung deiner Änderungen"
   git push
   ```

2. **Build-Prozess wurde nicht ausgeführt**:
   - Bei der Hopsa-Website werden die endgültigen Dateien im docs Ordner aus den Quelldateien im src Ordner generiert.

   **Lösung**: Führe den Build-Prozess aus, indem du die run.bat Datei ausführst oder diesen Befehl eingibst:
   ```
   npx @11ty/eleventy
   ```

3. **GitHub Pages benötigt Zeit für die Aktualisierung**:
   - Nach einem erfolgreichen Push kann es 5-10 Minuten dauern, bis GitHub Pages die neue Version bereitstellt.

   **Lösung**: Geduld haben und nach einigen Minuten erneut prüfen. Du kannst den Status des Deployments auch auf der GitHub-Repository-Seite unter dem Reiter "Actions" überprüfen.

4. **CNAME-Datei fehlt**:
   - Die CNAME-Datei wird für die benutzerdefinierte Domain hopsa-berlin.de benötigt.

   **Lösung**: Stelle sicher, dass im docs Ordner eine CNAME-Datei mit dem Inhalt "hopsa-berlin.de" vorhanden ist. Die run.bat kopiert diese Datei automatisch aus dem src Ordner.

### 14.1.4 Domain und DNS-Probleme erkennen

Wenn die Website unter deiner benutzerdefinierten Domain hopsa-berlin.de nicht erreichbar ist, könnten DNS-Probleme vorliegen.

> **Wissensbox: Was ist DNS?**  
> Das Domain Name System (DNS) ist wie ein Telefonbuch für das Internet. Es übersetzt menschenfreundliche Domainnamen (wie hopsa-berlin.de) in IP-Adressen, die Computer verwenden, um miteinander zu kommunizieren.

**So überprüfst du, ob es ein DNS-Problem gibt:**

1. Versuche, die Website über die GitHub-URL zu erreichen: `https://[dein-github-username].github.io/hopsa-berlin/`
2. Wenn die Website dort funktioniert, aber nicht unter hopsa-berlin.de, liegt wahrscheinlich ein DNS-Problem vor.

**Lösungen für DNS-Probleme:**

1. **Überprüfe die DNS-Einstellungen** bei deinem Domain-Provider:
   - Für GitHub Pages sollten A-Records auf die GitHub-IPs zeigen
   - Ein CNAME-Record sollte auf `[dein-github-username].github.io` zeigen

2. **Überprüfe die GitHub Pages-Einstellungen**:
   - Gehe zu deinem Repository auf GitHub
   - Klicke auf "Settings" > "Pages"
   - Stelle sicher, dass unter "Custom domain" "hopsa-berlin.de" eingetragen ist
   - Prüfe, ob "Enforce HTTPS" aktiviert ist

3. **Warte auf DNS-Propagation**:
   - DNS-Änderungen können bis zu 48 Stunden dauern, bis sie vollständig propagiert sind
   - In der Zwischenzeit kannst du die Website weiterhin über die GitHub-URL erreichen

## 14.2 Bilder werden nicht angezeigt

Du hast ein schönes Bild hochgeladen, aber stattdessen siehst du nur ein kaputtes Bild-Symbol oder einen leeren Bereich? Hier sind die häufigsten Ursachen und wie du sie beheben kannst.

### 14.2.1 Pfadprobleme verstehen und lösen

Der häufigste Grund für nicht angezeigte Bilder sind falsche Pfadangaben. In der Hopsa-Website werden Bilder in assets gespeichert und später nach assets kopiert.

> **Wissensbox: Was ist ein Dateipfad?**  
> Ein Dateipfad ist wie eine Adresse, die angibt, wo eine Datei auf einem Computer oder einer Website gespeichert ist. Er kann relativ (bezieht sich auf den aktuellen Standort) oder absolut (beginnt am Wurzelverzeichnis) sein.

#### Häufige Pfad-Probleme bei Bildern:

1. **Falscher Pfad zum Bild**:
   ```html
   <!-- Falsch: Pfad beginnt nicht mit "/" -->
   <img src="assets/team/david.jpg" alt="Hopsa-Team-Mitglied David">
   
   <!-- Richtig: Pfad beginnt mit "/" -->
   <img src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David">
   ```

2. **Falsche Verzeichnisstruktur**:
   ```html
   <!-- Falsch: Falsches Unterverzeichnis -->
   <img src="/assets/images/david.jpg" alt="Hopsa-Team-Mitglied David">
   
   <!-- Richtig: Korrektes Unterverzeichnis -->
   <img src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David">
   ```

**So behebst du Pfadprobleme:**

1. **Überprüfe den vollständigen Pfad**: Öffne die Datei im src-Ordner und überprüfe, ob der im src-Attribut angegebene Pfad mit dem tatsächlichen Speicherort des Bildes übereinstimmt.

2. **Vergewissere dich, dass der Pfad mit einem Schrägstrich beginnt**: In der Hopsa-Website sollten alle Bildpfade mit einem Schrägstrich beginnen (`/assets/...`).

3. **Überprüfe die Verzeichnisstruktur**: Schau nach, ob das Bild tatsächlich in dem von dir angegebenen Unterordner liegt.

### 14.2.2 Groß- und Kleinschreibung beachten

Ein häufig übersehenes Problem: Manche Webserver (einschließlich GitHub Pages) unterscheiden zwischen Groß- und Kleinschreibung in Dateinamen.

**Beispiel:**
```html
<!-- Falsch: Dateiname ist komplett klein geschrieben -->
<img src="/assets/team/David.jpg" alt="Hopsa-Team-Mitglied David">

<!-- Richtig: Übereinstimmung mit tatsächlichem Dateinamen -->
<img src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David">
```

**Tipps zur Vermeidung von Problemen mit Groß-/Kleinschreibung:**

1. **Einheitliche Benennung**: Verwende konsequent nur Kleinbuchstaben für Dateinamen.
2. **Überprüfe den tatsächlichen Dateinamen**: Schau im Dateiexplorer oder in der Verzeichnisstruktur des Repositories nach, wie die Datei tatsächlich heißt.
3. **Bei Zweifeln**: Öffne die Bilddatei direkt in deinem Browser (z.B. `http://localhost:8080/assets/team/david.jpg`) und überprüfe, ob sie korrekt angezeigt wird.

### 14.2.3 Bildformate und Kompatibilität

Nicht alle Browser unterstützen alle Bildformate gleich gut. Die Hopsa-Website verwendet hauptsächlich JPG-, PNG- und WebP-Dateien.

> **Wissensbox: Gängige Bildformate**  
> - **JPG/JPEG**: Gut für Fotos, unterstützt keine Transparenz
> - **PNG**: Unterstützt Transparenz, gut für Logos und Screenshots
> - **WebP**: Modernes Format mit guter Kompression, aber nicht in allen älteren Browsern unterstützt
> - **SVG**: Vektorgrafik, skalierbar ohne Qualitätsverlust, gut für Logos und Icons

**Mögliche Probleme und Lösungen:**

1. **WebP-Kompatibilitätsprobleme**:
   - Die Hopsa-Website verwendet WebP-Bilder (`jannik.webp`, `lilli.webp` usw.), die in sehr alten Browsern möglicherweise nicht angezeigt werden.
   
   **Lösung**: Für wichtige Bilder kannst du Fallback-Alternativen anbieten:
   ```html
   <picture>
     <source srcset="/assets/team/david.webp" type="image/webp">
     <img src="/assets/team/david.jpg" alt="Hopsa-Team-Mitglied David">
   </picture>
   ```

2. **Falscher MIME-Typ**:
   - Die Datei hat die falsche Endung für ihren tatsächlichen Typ.
   
   **Lösung**: Stelle sicher, dass die Dateiendung dem tatsächlichen Bildformat entspricht.

### 14.2.4 Build-Prozess und Kopierpfade prüfen

Bei der Hopsa-Website werden Bilder beim Build-Prozess von assets nach assets kopiert. Wenn dieser Prozess nicht korrekt funktioniert, werden die Bilder online nicht angezeigt.

**So überprüfst du den Build-Prozess:**

1. **Führe den Build-Prozess aus**: Starte die run.bat oder führe `npx @11ty/eleventy` aus.

2. **Überprüfe, ob die Bilder kopiert wurden**: Schau nach, ob die Bilder im assets Ordner vorhanden sind.

3. **Prüfe die Eleventy-Konfiguration**: In der .eleventy.js Datei sollte folgende Zeile vorhanden sein:
   ```javascript
   eleventyConfig.addPassthroughCopy("src/assets");
   ```

**Lösung bei Problemen:**
- Wenn die Bilder nicht kopiert werden, führe den Build-Prozess manuell aus
- Bei weiterhin bestehenden Problemen kopiere die Bilder manuell von assets nach assets

## 14.3 Formatierungsprobleme

Die Website ist da, die Bilder werden angezeigt, aber irgendetwas stimmt nicht mit dem Layout oder der Darstellung? Dann hast du wahrscheinlich ein Formatierungsproblem.

### 14.3.1 Markdown-Syntax-Fehler erkennen und beheben

Die Hopsa-Website verwendet Markdown für viele Inhalte. Fehler in der Markdown-Syntax können zu unerwarteter Formatierung führen.

> **Wissensbox: Was ist Markdown?**  
> Markdown ist eine einfache Auszeichnungssprache, die lesbaren Text in HTML umwandelt. Sie verwendet spezielle Zeichen und Symbole (wie #, *, oder >), um Text zu formatieren.

#### Häufige Markdown-Fehler in der Hopsa-Website:

1. **Fehlende Leerzeilen**: Markdown benötigt oft Leerzeilen zwischen verschiedenen Elementen.
   ```markdown
   <!-- Falsch: Keine Leerzeile zwischen Überschrift und Absatz -->
   # Überschrift
   Dies ist ein Absatz.
   
   <!-- Richtig: Leerzeile nach der Überschrift -->
   # Überschrift
   
   Dies ist ein Absatz.
   ```

2. **Inkonsistente Einrückung**: Bei Listen und verschachtelten Elementen ist die Einrückung wichtig.
   ```markdown
   <!-- Falsch: Inkonsistente Einrückung -->
   * Punkt 1
     * Unterpunkt
    * Falsch eingerückter Unterpunkt
   
   <!-- Richtig: Konsistente Einrückung -->
   * Punkt 1
     * Unterpunkt
     * Noch ein Unterpunkt
   ```

3. **HTML in Markdown**: Die Hopsa-Website mischt oft HTML mit Markdown, was zu Syntaxproblemen führen kann.
   ```markdown
   <!-- Problem: HTML-Block unterbricht Markdown-Verarbeitung -->
   # Überschrift
   <div class="special-box">
   Dies wird nicht als Markdown verarbeitet.
   *Dieser Text wird nicht kursiv.*
   </div>
   
   <!-- Lösung: Markdown innerhalb von HTML mit umschließendem div markieren -->
   # Überschrift
   <div class="special-box" markdown="1">
   Dies wird als Markdown verarbeitet.
   *Dieser Text wird kursiv.*
   </div>
   ```

**So findest und behebst du Markdown-Syntaxfehler:**

1. **Überprüfe die Vorlage**: Schau dir funktionierende Seiten im Repository an und vergleiche deren Struktur mit deiner problematischen Seite.

2. **Validiere dein Markdown**: Nutze Online-Tools wie [markdownlint](https://dlaa.me/markdownlint/) oder [Dillinger](https://dillinger.io/), um dein Markdown zu überprüfen.

3. **Achte auf die Frontmatter**: Der YAML-Header (zwischen `---`) am Anfang der Markdown-Dateien muss korrekt formatiert sein.
   ```markdown
   ---
   layout: default.njk
   title: Mein Titel
   redirect: [alias1, alias2]
   ---
   ```

### 14.3.2 CSS-Styling-Probleme diagnostizieren

Die Hopsa-Website verwendet Tailwind CSS für die Formatierung, zusammen mit einigen benutzerdefinierten CSS-Styles in default.css.

> **Wissensbox: Was ist CSS?**  
> CSS (Cascading Style Sheets) ist eine Sprache, die das Aussehen von HTML-Elementen auf einer Webseite definiert. Es bestimmt Dinge wie Farben, Schriftarten, Abstände und Layouts.

#### Häufige CSS-Probleme bei der Hopsa-Website:

1. **Falsche Tailwind-Klassen**: 
   ```html
   <!-- Falsch: Ungültige Tailwind-Klasse -->
   <div class="text-white bg-dark p-5">...</div>
   
   <!-- Richtig: Korrekte Tailwind-Klassen -->
   <div class="text-white bg-black p-5">...</div>
   ```

2. **Spezifitätsprobleme**: Wenn benutzerdefinierte Styles mit Tailwind in Konflikt geraten.
   ```css
   /* Problem: Zu allgemeiner Selektor überschreibt Tailwind-Klassen */
   a { color: blue !important; }
   
   /* Besser: Spezifischerer Selektor */
   .content a { color: blue; }
   ```

3. **Fehlende responsive Anpassungen**: Die Website sieht auf Mobilgeräten nicht gut aus.
   ```html
   <!-- Problem: Keine responsive Anpassung -->
   <div class="w-64">...</div>
   
   <!-- Lösung: Responsive Klassen hinzufügen -->
   <div class="w-full sm:w-64">...</div>
   ```

**So behebst du CSS-Probleme:**

1. **Browser-Entwicklertools verwenden**: Rechtsklick auf das problematische Element > "Element untersuchen" > "Styles" Tab. Hier kannst du sehen, welche Styles angewendet werden und mit welchen anderen sie in Konflikt stehen könnten.

2. **Tailwind-Dokumentation konsultieren**: Überprüfe die [Tailwind CSS Dokumentation](https://tailwindcss.com/docs), um die richtigen Klassen zu verwenden.

3. **Vergleiche mit funktionierenden Beispielen**: Schau dir ähnliche, korrekt formatierte Elemente auf der Hopsa-Website an und übernimm deren Struktur.

### 14.3.3 Layout-Probleme und responsives Design

Die Hopsa-Website sollte auf verschiedenen Geräten und Bildschirmgrößen gut aussehen. Wenn das nicht der Fall ist, könnten Layout-Probleme vorliegen.

#### Häufige Layout-Probleme:

1. **Überlaufender Inhalt**:
   - Text oder Bilder ragen über ihren Container hinaus
   - Horizontale Scrollbalken erscheinen
   
   **Lösung**: Verwende `overflow-hidden`, `max-w-full` oder passe die Größe des Inhalts an

2. **Falsche Ausrichtung von Flex/Grid-Containern**:
   ```html
   <!-- Problem: Falsche Flex-Ausrichtung -->
   <div class="flex">
     <div>Element 1</div>
     <div>Element 2</div>
   </div>
   
   <!-- Lösung: Korrekte Ausrichtung und Abstände -->
   <div class="flex justify-between items-center">
     <div>Element 1</div>
     <div>Element 2</div>
   </div>
   ```

3. **Probleme mit der responsiven Darstellung**:
   - Die Seite sieht auf Mobilgeräten zusammengestaucht oder gestreckt aus
   - Elemente überlappen sich auf kleinen Bildschirmen
   
   **Lösung**: Verwende Tailwind's responsive Modifikatoren (sm:, md:, lg:, xl:)

**So testest du responsives Design:**

1. **Browser-Entwicklertools verwenden**: Drücke F12, dann klicke auf das Gerätesymbol (oder Strg+Shift+M in Firefox). Hier kannst du verschiedene Bildschirmgrößen simulieren.

2. **Reale Geräte testen**: Wenn möglich, teste die Website auf verschiedenen physischen Geräten (Smartphone, Tablet, Desktop).

3. **Responsive Breakpoints überprüfen**: Die Hopsa-Website verwendet Tailwind's Standard-Breakpoints:
   - `sm`: 640px
   - `md`: 768px
   - `lg`: 1024px
   - `xl`: 1280px

### 14.3.4 Template-Probleme bei Nunjucks/Eleventy

Die Hopsa-Website verwendet Nunjucks als Template-Sprache mit dem Static Site Generator Eleventy. Fehler in Templates können zu unerwarteten Formatierungsproblemen führen.

> **Wissensbox: Was sind Templates und Nunjucks?**  
> Templates sind Vorlagen für Webseiten, die dynamische Inhalte einfügen können. Nunjucks ist eine Template-Sprache für JavaScript, die von Eleventy verwendet wird, um HTML-Seiten zu generieren.

#### Häufige Template-Probleme:

1. **Falsche oder fehlende Template-Syntax**:
   ```nunjucks
   <!-- Falsch: Syntaxfehler in der Bedingung -->
   {% if seite.titel = "Startseite" %}
     <h1>Willkommen</h1>
   {% endif %}
   
   <!-- Richtig: Korrekte Vergleichssyntax -->
   {% if seite.titel == "Startseite" %}
     <h1>Willkommen</h1>
   {% endif %}
   ```

2. **Probleme mit eingebundenen Templates**:
   ```nunjucks
   <!-- Problem: Falscher Pfad oder Dateiname -->
   {% include "header.njk" %}
   
   <!-- Lösung: Korrekter Pfad und Dateiname -->
   {% include "header.njk" %}
   ```

3. **Unerwartetes Verhalten bei Template-Variablen**:
   ```nunjucks
   <!-- Problem: Variable existiert nicht oder ist anders benannt -->
   <h1>{{ seitentitel }}</h1>
   
   <!-- Lösung: Korrekte Variable verwenden oder mit Filter absichern -->
   <h1>{{ title | default("Standardtitel") }}</h1>
   ```

**So behebst du Template-Probleme:**

1. **Überprüfe die Konsole**: Fehler in Templates werden oft in der Konsole des Eleventy-Dev-Servers angezeigt.

2. **Vergleiche mit funktionierenden Templates**: Schau dir ähnliche, funktionierende Templates an und übernimm deren Struktur.

3. **Teste schrittweise**: Vereinfache komplexe Templates und füge dann schrittweise Funktionalität hinzu, um zu verstehen, wo das Problem liegt.

## 14.4 Allgemeine Fehlersuche-Strategien

Unabhängig davon, welches Problem du hast, diese allgemeinen Strategien können dir helfen, es zu identifizieren und zu lösen.

### 14.4.1 Browser-Entwicklertools nutzen

Die Entwicklertools deines Browsers sind dein bester Freund bei der Fehlersuche auf Webseiten.

> **Wissensbox: Was sind Browser-Entwicklertools?**  
> Browser-Entwicklertools sind in moderne Browser eingebaute Werkzeuge, die dir helfen, Webseiten zu inspizieren und zu debuggen. Sie zeigen HTML, CSS, JavaScript, Netzwerkanfragen und mehr an.

**So öffnest du die Entwicklertools:**
- **Chrome/Edge/Opera**: F12 oder Rechtsklick > "Element untersuchen"
- **Firefox**: F12 oder Rechtsklick > "Element untersuchen"
- **Safari**: Aktiviere zuerst die Entwicklertools in den Einstellungen unter "Erweitert" > "Entwicklermenü in der Menüleiste anzeigen". Dann Rechtsklick > "Element untersuchen"

**Nützliche Funktionen der Entwicklertools für die Hopsa-Website:**

1. **Elements/Inspector**: Zeigt das HTML der Seite an und ermöglicht dir, CSS-Eigenschaften zu sehen und zu ändern.
   - Gut für: Finden von Elementen mit falscher Formatierung, Identifizieren fehlender oder falscher CSS-Klassen

2. **Console**: Zeigt JavaScript-Fehler und -Warnungen an.
   - Gut für: Identifizieren von JavaScript-Fehlern, die Funktionen wie den Instagram-Embed beeinträchtigen könnten

3. **Network**: Zeigt alle geladenen Ressourcen an, einschließlich Bilder, CSS und JavaScript.
   - Gut für: Überprüfen, ob Bilder korrekt geladen werden, Identifizieren von 404-Fehlern bei fehlenden Ressourcen

4. **Mobile View** (Gerätesymbol): Simuliert verschiedene Bildschirmgrößen.
   - Gut für: Testen des responsiven Designs der Hopsa-Website

**Beispiel für die Verwendung der Entwicklertools bei einem Bildproblem:**

1. Öffne die Webseite mit dem fehlenden Bild
2. Drücke F12, um die Entwicklertools zu öffnen
3. Gehe zum "Elements"-Tab und finde das img-Tag
4. Überprüfe den src-Pfad
5. Wechsle zum "Network"-Tab und lade die Seite neu (F5)
6. Suche nach dem Bildnamen und prüfe, ob er mit einem roten Fehler angezeigt wird (404)
7. Der genaue Fehlercode gibt Hinweise auf das Problem (404 = nicht gefunden, 403 = keine Berechtigung, usw.)

### 14.4.2 Systematische Fehlereingrenzung

Wenn du ein komplexes Problem hast, hilft es, systematisch vorzugehen.

**Schritt-für-Schritt-Anleitung zur Fehlereingrenzung:**

1. **Isoliere das Problem**:
   - Tritt das Problem auf einer bestimmten Seite auf oder überall?
   - Betrifft es nur ein bestimmtes Element oder mehrere?
   - Tritt es nur auf bestimmten Geräten oder Browsern auf?

2. **Vereinfache die Situation**:
   - Entferne temporär komplexe Elemente
   - Teste mit einer einfacheren Version der Seite
   - Überprüfe, ob das Problem in einer "sauberen" Umgebung immer noch auftritt

3. **Teile und herrsche**:
   - Teile das Problem in kleinere Teile
   - Behebe jeden Teil einzeln
   - Füge die Teile schrittweise wieder zusammen

4. **Ändere eine Sache nach der anderen**:
   - Mache nur eine Änderung auf einmal
   - Überprüfe nach jeder Änderung, ob das Problem behoben ist
   - So kannst du genau identifizieren, welche Änderung das Problem löst

### 14.4.3 Hilfe suchen und finden

Manchmal brauchst du externe Hilfe, um ein Problem zu lösen. Hier sind einige Ressourcen für die Hopsa-Website:

1. **Dokumentation und Anleitungen**:
   - [Eleventy-Dokumentation](https://www.11ty.dev/docs/) für Template-Probleme
   - [Tailwind CSS-Dokumentation](https://tailwindcss.com/docs) für Styling-Probleme
   - [Markdown-Anleitung](https://www.markdownguide.org/) für Markdown-Syntax

2. **Online-Communities**:
   - [Stack Overflow](https://stackoverflow.com/) für spezifische Programmierprobleme
   - [GitHub Issues](https://github.com/11ty/eleventy/issues) für Eleventy-bezogene Fragen
   - [Reddit r/webdev](https://www.reddit.com/r/webdev/) für allgemeine Webentwicklungsfragen

3. **KI-Assistenten nutzen**:
   - ChatGPT kann bei der Fehlersuche helfen. Hier sind einige nützliche Prompts:
     ```
     "Ich habe folgendes Problem mit meiner Eleventy-Website: [Problem]. Hier ist mein Code: [Code]. Wie kann ich das beheben?"
     
     "Warum wird dieses Bild nicht angezeigt? <img src='/assets/team/david.jpg' alt='Hopsa-Team-Mitglied David'>"
     
     "Was bedeutet dieser Fehler in den Entwicklertools? [Fehlermeldung]"
     ```

4. **Kollegen oder andere Hopsa-Mitglieder**:
   - Manchmal sehen andere Menschen Dinge, die du übersehen hast
   - Erkläre jemandem dein Problem ("Rubber Duck Debugging") - oft führt das Erklären zur Lösung

### 14.4.4 Wann sollte man neustarten oder zurücksetzen?

Manchmal ist es am besten, einen Schritt zurückzugehen oder ganz neu zu beginnen.

**Situationen, in denen ein Neustart sinnvoll sein kann:**

1. **Lokale Änderungen verwerfen**:
   - Wenn du viele Änderungen gemacht hast und nicht mehr weißt, welche das Problem verursachen
   - Führe `git checkout -- .` aus, um alle nicht commiteten Änderungen zu verwerfen (Vorsicht: Dies kann nicht rückgängig gemacht werden!)

2. **Auf eine frühere Version zurücksetzen**:
   - Wenn du weißt, dass eine frühere Version funktioniert hat
   - Führe `git log` aus, um die Commit-Historie zu sehen
   - Führe `git checkout [commit-hash]` aus, um temporär zu einem früheren Zustand zurückzukehren
   - Oder `git reset --hard [commit-hash]`, um komplett zurückzusetzen (Vorsicht: Dies kann nicht rückgängig gemacht werden!)

3. **Komplette Neuinstallation der Abhängigkeiten**:
   - Bei Problemen mit Node.js-Modulen
   - Lösche den node_modules-Ordner
   - Führe `npm install` aus, um alle Abhängigkeiten neu zu installieren

4. **Neustart des Entwicklungsservers**:
   - Bei seltsamen Verhaltensweisen des Eleventy-Servers
   - Beende den laufenden Prozess (Strg+C)
   - Starte den Server neu mit run.bat oder `npx @11ty/eleventy --serve`

## Zusammenfassung: Dein Problemlösungs-Toolkit

Fehlerbehebung kann manchmal frustrierend sein, aber mit den richtigen Werkzeugen und einem systematischen Ansatz kannst du die meisten Probleme lösen. Hier sind die wichtigsten Punkte dieses Kapitels:

1. **Beim Aktualisierungsproblemen**:
   - Cache leeren (Strg+F5)
   - Commit und Push durchführen
   - Den Build-Prozess ausführen
   - Auf die GitHub Pages-Aktualisierung warten (5-10 Minuten)

2. **Bei Bildproblemen**:
   - Pfade überprüfen (beginnen mit `/assets/...`)
   - Groß-/Kleinschreibung beachten
   - Bildformate überprüfen und ggf. alternative Formate anbieten
   - Sicherstellen, dass der Build-Prozess die Bilder kopiert

3. **Bei Formatierungsproblemen**:
   - Markdown-Syntax überprüfen
   - CSS-Klassen und -Spezifität überprüfen
   - Responsives Design testen
   - Template-Syntax und -Einbindung kontrollieren

4. **Allgemeine Strategien**:
   - Browser-Entwicklertools nutzen
   - Systematisch vorgehen: Isolieren, Vereinfachen, Teilen
   - Änderungen schrittweise durchführen
   - Bei Bedarf Hilfe suchen oder neu starten

Denk daran: Fehler sind ein normaler Teil des Entwicklungsprozesses. Mit jeder Fehlerbehebung lernst du etwas Neues und wirst besser darin, ähnliche Probleme in Zukunft zu vermeiden oder schneller zu lösen.

Mit diesem Kapitel hast du nun ein umfassendes Toolkit zur Fehlerbehebung auf der Hopsa-Website. Du bist bestens gerüstet, um typische Probleme zu erkennen, zu verstehen und zu beheben. Happy Debugging!

# 15. Glossar: Technische Begriffe einfach erklärt

Willkommen zu unserem benutzerfreundlichen Glossar! In diesem Kapitel findest du einfache Erklärungen für alle technischen Begriffe, die mit unserer Hopsa-Website zu tun haben. Du brauchst kein Vorwissen – wir starten bei null und erklären alles Schritt für Schritt.

Jeder Abschnitt behandelt einen anderen Begriffsbereich, und du kannst genau zu den Themen springen, die dich interessieren. Lass dich nicht von der Technik einschüchtern – am Ende wirst du überrascht sein, wie viel du verstehst!

## Website-Begriffe

### Grundlagen des Internets

> **Was ist eine Website?**  
> Eine Website ist eine Sammlung von Seiten im Internet, die unter einer gemeinsamen Adresse (Domain) erreichbar sind. Im Fall von Hopsa ist das die gesamte Präsenz unter "hopsa-berlin.de" mit allen Unterseiten wie der Startseite, der Ensemble-Seite, der Kontaktseite usw.

#### Wie das Internet funktioniert (in wenigen Worten)

Das Internet ist wie eine riesige Bibliothek, in der Websites die Bücher sind. Wenn jemand die Hopsa-Website besucht, passiert Folgendes:

1. Der Besucher gibt "hopsa-berlin.de" in seinen Browser ein (das ist wie der Bibliotheksausweis)
2. Der Browser fragt einen "DNS-Server" (quasi das Bibliotheksverzeichnis), wo die Website zu finden ist
3. Der Browser lädt die Dateien der Website von einem Server (dem Bibliotheksregal) herunter
4. Der Browser stellt die Website auf dem Bildschirm dar (wie das Lesen eines Buches)

> **Was ist eine Domain?**  
> Eine Domain ist die Adresse, unter der eine Website erreichbar ist, wie "hopsa-berlin.de". Sie besteht aus dem Namen (hopsa-berlin) und einer Endung (.de für Deutschland). Andere typische Endungen sind .com, .org oder .net.

#### URLs verstehen

Eine URL (Uniform Resource Locator) ist die vollständige Webadresse einer bestimmten Seite. Sie besteht aus mehreren Teilen:

```
https://hopsa-berlin.de/ensemble/
```

- **https://** ist das Protokoll (die Art der Verbindung, hier eine sichere)
- **hopsa-berlin.de** ist die Domain
- **/ensemble/** ist der Pfad zur spezifischen Seite

In unserer Hopsa-Website haben wir viele solche Pfade, wie `/termine`, `/kontakt` oder `/kurs`.

#### Webhosting erklärt

> **Was ist Hosting?**  
> Hosting bedeutet, dass deine Website-Dateien auf einem Computer (Server) gespeichert werden, der immer mit dem Internet verbunden ist, sodass Besucher jederzeit darauf zugreifen können.

Die Hopsa-Website wird auf GitHub Pages gehostet. Das ist ein Service von GitHub, der statische Websites kostenlos im Internet verfügbar macht. Die Dateien liegen im "docs"-Ordner des Repositories und werden automatisch veröffentlicht.

#### Frontend vs. Backend

Websites haben zwei Hauptkomponenten:

- **Frontend**: Was Besucher sehen und womit sie interagieren (Text, Bilder, Buttons). Bei der Hopsa-Website ist das alles, was im Browser dargestellt wird.
- **Backend**: Der "Maschinenraum" einer Website, oft mit Datenbanken und serverseitigen Programmen. Die Hopsa-Website ist eine statische Seite ohne komplexes Backend.

### Dateitypen auf unserer Website

Die Hopsa-Website besteht aus verschiedenen Dateitypen, die verschiedene Aufgaben erfüllen:

#### HTML-Dateien (.html)

HTML ist die Grundstruktur einer Website – wie das Skelett eines Körpers.

```html
<h1>Willkommen bei Hopsa</h1>
<p>Wir sind eine Improtheatergruppe aus Berlin</p>
```

HTML verwendet "Tags" (wie `<h1>` für Überschriften oder `<p>` für Absätze), um den Inhalt zu strukturieren.

#### CSS-Dateien (.css)

CSS ist für das Aussehen zuständig – wie die Kleidung und das Make-up.

```css
h1 {
    color: #ddd;
    font-size: 3rem;
}
```

In unserer default.css definieren wir zum Beispiel, dass Überschriften eine bestimmte Größe und Farbe haben.

#### JavaScript-Dateien (.js)

JavaScript macht eine Website interaktiv – wie die Muskeln, die Bewegung ermöglichen.

```javascript
document.getElementById("button").addEventListener("click", function() {
    alert("Danke für deinen Klick!");
});
```

Die Hopsa-Website verwendet JavaScript sparsam, hauptsächlich für kleine Funktionen wie den Cookie-Hinweis.

#### Markdown-Dateien (.md)

Markdown ist eine einfache Textformatierungssprache, die in HTML umgewandelt wird. Wir verwenden sie für fast alle Inhalte der Hopsa-Website.

```markdown
# Willkommen bei Hopsa

Wir sind eine **Improtheatergruppe** aus Berlin.
```

Dies würde zu einer HTML-Überschrift und einem Absatz mit "Improtheatergruppe" in Fettschrift.

> **Warum Markdown?**  
> Markdown ist viel einfacher zu schreiben als HTML und macht es leichter, Inhalte zu erstellen oder zu bearbeiten. Es ist wie ein Kurzschrift-System für HTML.

### Responsive Design

> **Was ist Responsive Design?**  
> Responsive Design bedeutet, dass eine Website automatisch ihr Layout anpasst, um auf verschiedenen Geräten (Smartphones, Tablets, Desktops) gut auszusehen.

Die Hopsa-Website nutzt Tailwind CSS, um responsive zu sein. Du siehst dies in Klassen wie:

```html
<div class="w-full md:w-1/2">
```

Dies bedeutet: "Nutze die volle Breite auf kleinen Bildschirmen, aber nur die halbe Breite auf mittleren und größeren Bildschirmen."

### SEO-Grundlagen

SEO (Search Engine Optimization) hilft deiner Website, in Suchmaschinen wie Google besser gefunden zu werden.

Auf der Hopsa-Website haben wir:

- Sinnvolle Seitentitel wie `<title>Termine - Hopsa Berlin</title>`
- Klar strukturierte Überschriften (`<h1>`, `<h2>`, etc.)
- Beschreibende URLs wie `/ensemble` oder `/termine`
- Alternative Texte für Bilder wie `alt="Hopsa-Team-Mitglied Jannik"`

Diese Elemente helfen Suchmaschinen, den Inhalt unserer Seite zu verstehen und richtig zu indexieren.

## GitHub-Begriffe

GitHub ist eine Plattform, die uns hilft, die Dateien unserer Website zu verwalten und zusammenzuarbeiten. Lass uns die wichtigsten Begriffe durchgehen:

### Was ist Git und GitHub?

> **Was ist Git?**  
> Git ist ein Versionskontrollsystem, das Änderungen an Dateien verfolgt, sodass du jederzeit zu früheren Versionen zurückkehren kannst. Es ist wie eine Zeitmaschine für deine Dateien.

> **Was ist GitHub?**  
> GitHub ist eine webbasierte Plattform, die Git nutzt und zusätzlich Tools für Zusammenarbeit bietet. Es speichert deine Dateien online und macht es einfach, mit anderen zusammenzuarbeiten.

Der gesamte Code der Hopsa-Website ist auf GitHub unter `hopsa-berlin` gespeichert.

### Das Repository

> **Was ist ein Repository?**  
> Ein Repository (oder kurz "Repo") ist der Hauptspeicherort für ein Projekt auf GitHub – wie ein Ordner, der alle Dateien und deren Änderungsverlauf enthält.

Das Hopsa-Repository enthält:
- Alle Markdown-Dateien mit den Inhalten
- HTML-Templates und Layouts
- CSS für das Design
- JavaScript für Funktionalitäten
- Bilder und andere Medien
- Konfigurationsdateien

### Commits und Commit-Messages

> **Was ist ein Commit?**  
> Ein Commit ist wie ein Speicherpunkt in der Geschichte deines Projekts. Jeder Commit erfasst den Zustand aller Dateien zu einem bestimmten Zeitpunkt.

Wenn du am Hopsa-Repository arbeitest und eine Änderung machst (z.B. einen neuen Termin hinzufügst), erstellst du einen Commit mit einer Nachricht wie:
```
Neuen Auftritt am 15.06.2024 hinzugefügt
```

Diese Beschreibung hilft später, zu verstehen, was in diesem Commit geändert wurde.

### Branches

> **Was ist ein Branch?**  
> Ein Branch ist eine parallele Version des Repositories, in der du Änderungen vornehmen kannst, ohne den Hauptcode (den "main"-Branch) zu beeinflussen.

Branches sind nützlich, wenn du neue Funktionen ausprobierst oder an größeren Änderungen arbeitest:

1. Du erstellst einen neuen Branch mit einem beschreibenden Namen (z.B. `neue-termine-seite`)
2. Du nimmst dort alle Änderungen vor und testest sie
3. Wenn alles funktioniert, führst du den Branch wieder mit `main` zusammen

### Pull Requests

> **Was ist ein Pull Request?**  
> Ein Pull Request (PR) ist ein Vorschlag, Änderungen aus einem Branch in einen anderen zu übernehmen, typischerweise von einem Feature-Branch in den main-Branch.

Pull Requests sind ideal für die Zusammenarbeit:
1. Du erstellst einen Branch und machst deine Änderungen
2. Du erstellst einen Pull Request
3. Andere können deine Änderungen überprüfen und kommentieren
4. Nach Genehmigung werden die Änderungen zusammengeführt (gemerged)

### GitHub Pages

> **Was ist GitHub Pages?**  
> GitHub Pages ist ein kostenloses Hosting-Service von GitHub, der HTML-, CSS- und JavaScript-Dateien direkt von einem GitHub-Repository aus veröffentlicht.

Die Hopsa-Website wird über GitHub Pages gehostet:
- Die fertigen Website-Dateien liegen im "docs" Ordner
- Bei jeder Änderung am Hauptbranch wird die Website automatisch aktualisiert
- Die Domain "hopsa-berlin.de" zeigt auf diese GitHub Pages

### Issues und Projektmanagement

> **Was sind Issues?**  
> Issues sind Einträge auf GitHub, die Aufgaben, Verbesserungen oder Fehler dokumentieren. Sie helfen, die Arbeit am Projekt zu organisieren.

Ein Issue für die Hopsa-Website könnte so aussehen:
```
Titel: Neuen Teammember zur Ensemble-Seite hinzufügen
Beschreibung: Foto und Kurzbeschreibung von Lisa zur Ensemble-Seite hinzufügen.
```

Issues können zugewiesen, kommentiert und mit Labels versehen werden, um die Arbeit besser zu koordinieren.

## Eleventy und statische Websites

### Statische Websites verstehen

> **Was ist eine statische Website?**  
> Eine statische Website besteht aus festen HTML-, CSS- und JavaScript-Dateien, die vorher erstellt wurden und sich nicht ändern, wenn jemand die Seite besucht (im Gegensatz zu dynamischen Websites, die Inhalte erst beim Besuch generieren).

Vorteile statischer Websites wie Hopsa:
- **Schnell**: Da alles bereits vorbereitet ist, laden die Seiten schneller
- **Sicher**: Weniger Angriffsfläche für Hacker, da es keine Datenbank gibt
- **Einfach zu hosten**: Kann auf einfachen und kostengünstigen Diensten wie GitHub Pages gehostet werden
- **Zuverlässig**: Weniger bewegliche Teile bedeuten weniger Fehlerquellen

### Was ist ein Static Site Generator?

> **Was ist ein Static Site Generator?**  
> Ein Static Site Generator (SSG) ist ein Werkzeug, das aus Vorlagen und Inhalten (oft in Markdown) fertige HTML-Seiten erstellt, die dann als statische Website veröffentlicht werden können.

Es ist wie eine Fabrik, die Rohstoffe (Markdown, Templates, Bilder) nimmt und fertige HTML-Seiten produziert.

### Eleventy (11ty) - Unser Static Site Generator

> **Was ist Eleventy?**  
> Eleventy (auch als 11ty geschrieben) ist ein einfacher Static Site Generator, der verschiedene Vorlagensprachen in statisches HTML umwandelt.

Die Hopsa-Website verwendet Eleventy, um aus Markdown-Dateien und Nunjucks-Templates fertige HTML-Seiten zu erstellen.

#### Die Struktur von Eleventy in unserem Projekt

In der Hopsa-Website:
- src enthält alle Quelldateien (Markdown-Inhalte, Templates)
- _includes enthält die Vorlagen für Layout und wiederverwendbare Komponenten
- _data enthält globale Daten (wie Weiterleitungen)
- .eleventy.js ist die Konfigurationsdatei für Eleventy
- docs enthält die fertig gebaute Website (wird von Eleventy erstellt)

#### Templates und Layouts

> **Was sind Templates?**  
> Templates sind Vorlagen, die definieren, wie der Inhalt dargestellt wird. Sie enthalten Platzhalter, die mit tatsächlichen Inhalten gefüllt werden.

In der Hopsa-Website verwenden wir Nunjucks-Templates (`.njk`-Dateien):

```nunjucks
<div class="content prose">
    {{ content | safe }}
</div>
```

Dieser Code zeigt einen Platzhalter `{{ content | safe }}`, der mit dem Inhalt einer Markdown-Datei gefüllt wird.

Die Hauptlayouts sind:
- html-wrapper.njk: Die äußere HTML-Struktur
- default.njk: Das Standardlayout für die meisten Seiten
- default-serif.njk: Ein Layout mit Serifen-Schrift für bestimmte Seiten
- default-centered.njk: Ein zentriertes Layout für spezielle Seiten

#### Front Matter in Markdown-Dateien

Jede Markdown-Datei in unserer Website beginnt mit einem "Front Matter"-Block zwischen `---`-Markierungen:

```markdown
---
layout: default.njk
title: Willkommen
redirect: [home, landing, start, hopsa]
---
```

Dieses Beispiel aus index.md sagt Eleventy:
- Verwende das default.njk Layout
- Der Titel der Seite ist "Willkommen"
- Erstelle Weiterleitungen von home, `/landing`, usw. zu dieser Seite

#### Der Build-Prozess

Wenn wir eine Änderung an der Website vornehmen wollen, läuft dieser Prozess ab:

1. Wir bearbeiten die relevanten Dateien (z.B. fügen einen neuen Termin in termine.md hinzu)
2. Wir starten den Build-Prozess mit `eleventy` oder über den run.bat
3. Eleventy verarbeitet alle Dateien und erstellt die statische Website im docs-Ordner
4. Wir überprüfen das Ergebnis lokal mit `eleventy --serve`
5. Nach dem Commit und Push zu GitHub wird die Website automatisch aktualisiert

### Tailwind CSS in unserem Projekt

> **Was ist Tailwind CSS?**  
> Tailwind CSS ist ein "Utility-First"-CSS-Framework, das dir erlaubt, das Design direkt im HTML zu definieren, anstatt separate CSS-Dateien zu schreiben.

In der Hopsa-Website siehst du Tailwind-Klassen wie:
```html
<div class="flex items-center justify-center flex-wrap">
```

Diese Klassen bedeuten:
- `flex`: Verwende Flexbox-Layout
- `items-center`: Zentriere Elemente vertikal
- `justify-center`: Zentriere Elemente horizontal
- `flex-wrap`: Erlaube Umbruch bei zu wenig Platz

Dies erspart uns, eigenes CSS zu schreiben, und macht das Design konsistenter.

### Umleitung und URL-Handling

Ein besonderes Feature der Hopsa-Website sind die vielen Weiterleitungen. Diese helfen Besuchern, die richtige Seite zu finden, auch wenn sie nicht die genaue URL kennen.

In redirects.json und im Front Matter der Markdown-Dateien definieren wir Weiterleitungen:
```json
{ "from": "insta", "to": "https://instagram.com/hopsa_berlin/" }
```

```markdown
---
redirect: [wir, mitglieder, mitglied, wer, uber-uns, ueber-uns]
---
```

Dies erstellt automatisch URLs wie `hopsa-berlin.de/insta`, die zu Instagram weiterleiten, oder `hopsa-berlin.de/wir`, die zur Ensemble-Seite führen.

## Praktische Tipps für die Arbeit mit unserer Website

### Wie du Inhalte bearbeitest

Hier sind einfache Schritte, um Inhalte auf der Hopsa-Website zu bearbeiten:

1. **Identifiziere die richtige Datei**: 
   - Für Termine → termine.md
   - Für Team-Infos → ensemble.md
   - Für die Startseite → index.md

2. **Bearbeite die Markdown-Datei**:
   - Verwende einen Texteditor wie Visual Studio Code
   - Beachte die Markdown-Syntax für Überschriften (`#`), Links (`Text`), Fett (`**Text**`) usw.

3. **Vorschau der Änderungen**:
   - Führe run.bat aus oder gib `eleventy --serve` in die Kommandozeile ein
   - Öffne http://localhost:8080 in deinem Browser

4. **Veröffentliche die Änderungen**:
   - Committe und pushe deine Änderungen zu GitHub
   - GitHub Pages aktualisiert die Live-Website automatisch

### Wie du mit Terminen umgehst

Für Termine verwenden wir eine spezielle Struktur:

1. Öffne termine.md
2. Verwende die `termine.neuesEvent()`-Funktion, um einen neuen Termin hinzuzufügen:
   ```markdown
   {{ termine.neuesEvent(
       titel="Hopsa unter Artenschutz",
       datum="27.04.2024",
       uhrzeit="20:00",
       veranstaltungsort="Artenschutztheater",
       link="https://www.artenschutztheater.de",
       adresse="Lüneburger Str. 370, 10557 Berlin"
   )}}
   ```
3. Wenn ein Termin vorbei ist, kannst du ihn entweder löschen oder mit `deaktivieren=true` ausblenden

### Häufige Fragen und Antworten

#### Wie füge ich ein neues Teammitglied hinzu?
1. Lade das Foto in team hoch
2. Bearbeite ensemble.md und füge das neue Teammitglied zur Liste hinzu

#### Wie erstelle ich eine neue Seite?
1. Erstelle eine neue `.md`-Datei im src-Ordner
2. Beginne mit einem Front Matter-Block:
   ```markdown
   ---
   layout: default.njk
   title: Meine neue Seite
   redirect: [alternative-url, zweite-alternative]
   ---
   
   # Meine neue Seite
   
   Hier kommt der Inhalt...
   ```

#### Was bedeuten diese seltsamen Symbole in den Dateien?
- `{{` und `}}` sind Nunjucks-Ausdrücke, die zur Build-Zeit ausgewertet werden
- `{% if %}` und `{% endif %}` sind Nunjucks-Kontrollstrukturen für bedingte Inhalte
- `|` ist ein Nunjucks-Filter (z.B. `{{ content | safe }}` bedeutet "zeige den Inhalt als sicheren HTML-Code")

#### Wie kann ich sehen, wie meine Änderungen aussehen werden?
Führe run.bat aus oder gib `eleventy --serve` in die Kommandozeile ein, dann öffne http://localhost:8080 in deinem Browser. Änderungen werden automatisch aktualisiert.

## Empfohlene Ressourcen zum Weiterlernen

### Für Website-Grundlagen
- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/de/) - Umfassende und verständliche Dokumentation
- [W3Schools](https://www.w3schools.com/) - Interaktive Tutorials mit einfachen Erklärungen

### Für Markdown
- [Markdown Guide](https://www.markdownguide.org/) - Einfache Einführung und Referenz
- [CommonMark](https://commonmark.org/help/) - Interaktives Tutorial zum Lernen von Markdown

### Für GitHub
- [GitHub Skills](https://skills.github.com/) - Interaktive Kurse von GitHub
- [Git Handbook](https://guides.github.com/introduction/git-handbook/) - Einfache Einführung in Git

### Für Eleventy
- [Eleventy Documentation](https://www.11ty.dev/docs/) - Offizielle Dokumentation
- [Beginner's Guide to Eleventy](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/) - Tutorial für Anfänger

### ChatGPT-Prompts für weitere Hilfe

Wenn du mit ChatGPT arbeitest und Hilfe zu unserer Website benötigst, versuche Prompts wie:

- "Erkläre mir, wie ich einen neuen Termin zur Hopsa-Website hinzufüge"
- "Wie kann ich ein Bild auf der Hopsa-Website einfügen und richtig formatieren?"
- "Ich möchte einen Instagram-Post auf der Hopsa-Website einbetten, wie geht das?"
- "Wie ändere ich die Farbe der Überschriften auf der Hopsa-Website?"
- "Was bedeutet diese Nunjucks-Syntax: {% include 'header.njk' %}?"

---

Mit diesem Glossar solltest du nun gut gerüstet sein, um die technischen Aspekte der Hopsa-Website zu verstehen und mit ihnen zu arbeiten. Denke daran: Jeder Experte hat einmal als Anfänger begonnen. Trau dich, Dinge auszuprobieren – im schlimmsten Fall kannst du immer zu einer früheren Version zurückkehren!