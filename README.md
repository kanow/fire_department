# TYPO3 Sitepackage for fire departments!

This is a site package for a TYPO3 website optimized for fire departments. It should be a solution to setup a TYPO3 website for fire departments in an easy way.

 * Include Page TSconfig from the extension in page properties of your root page (tab Resources).
 * Include TypoScript of fire_department in your root TypoScript template.
 * Check TypoScript constants in `fire_department/Configuration/TypoScript/Page/constants.typoscript` and override settings in your own TypoScript if needed.

## Features

* Complete webpage layout optimized for mobile devices
* Show operation data with the TYPO3 extensions "operations"
* Templating is also prepared to show latest news with the extension TYPO3 "news"

## Dependencies:

* typo3/cms-core: ^9.5
* typo3/cms-fluid-styled-content: ^9.5

**optional**

* kanow/operations: ^4.0
* georgringer/news: ^7.0

# Frontend templating

I use [Foundation for Sites](http://foundation.zurb.com/sites) to build the frontend stuff like css and js. Please read the "Installation" section in the ZurbReadme.md file in the folder "FrontendBuild" if you want change stuff here. In short you need: node, npm, yarn, gulp

Fork the repository to keep your changes in your project.

After copying and renaming the config.sample.yml file you have to adapt the projectdomain entry in the additional watch path to use the frontend build tool directly with your TYPO3 website. Consider the comments in the section for usage https protocol. "mkcert" has to be installed for this. To start developing with watched files by the frontend you have to use the following command.

    yarn run start --typo3

With

    yarn run build --typo3

you can copy the compiled frontend files to the TYPO3 extension Public folder without opening the website in browser. Later, TYPO3 loads frontend files from this folder.

# TYPO3 Website für Feuerwehren

Diese Extension ist ein TYPO3 Site-Package um ohne größere Vorkenntnisse schnell eine TYPO3 Webseite für Feuerwehren zu erstellen.

  * Fügt das Page TSconfig von fire_department in eureb Seiteneigenschaften ein (Reiter Ressourcen).
  * Fügt das TypoScript von fire_department in euer root TypoScript Template ein.
  * Schaut euch die TypoScript Konstanten in `fire_department/Configuration/TypoScript/Page/constants.typoscript` für die verschiedenen Einstellungen an und überschreibt diese bei Bedarf in eurem eigenen TypoScript.

## Das bietet diese Extension

* Ein komplettes Seiten-Layout, optimiert auch für Mobilgräte
* Für die Darstellung und Verwaltung der Einsätze wird die TYPO3 Extension "operations" verwendet.
* Außerdem ist das Templating für die Darstellung von aktuellen Meldungen mit Hilfe der TYPO3 Extension "news" ebenfalls vorbereitet und passt sich in die Webseite ein

## Systemvorraussetzungen:

* typo3/cms-core: ^9.5
* typo3/cms-fluid-styled-content: ^9.5

**optional**

* kanow/operations: ^4.0 - für die Einsatzverwaltung
* georgringer/news: ^7.0 - für aktuelle Meldungen

# Das Frontend - Aussehen der Webseite

Dafür nutze ich [Foundation for Sites](http://foundation.zurb.com/sites). Damit wird jede Menge Grundfunktionalität für das Aussehen bereitgestellt. Falls ihr da Anpassungen vornehmen wollt, schaut euch bitte die Systemvorraussetzungen in der `ZurbReadme.md` im Ordner `FrontendBuild` an. Im groben braucht ihr so etwas wie: node, npm, yarn, gulp auf eurem System.

Damit Änderungen nach einem Update nicht verloren gehen, solltet ihr die Extensions "forken". Also eine Kopie davon erstellen. Wenn ihr wollt, könnt ihr das direkt auf Github tun. Dann habt ihr gleich die Versionierung dabei.

Für die Anpassung des Frontends über den Frontendbuild, empfehle ich eine lokale Entwicklunsgumgebung.

Nach dem Erstellen eures Forks, müsst ihr die `config.sample.yml` Datei kopieren nach `config.yml`. Beachtet bitte die Kommentare in dem Bereich für die Nutzung mittels https. "mkcert" muss bei euch installiert sein. Dort könnt ihr dann eure eigene Projektdomain ergänzen um das Frontend direkt mit eurer lokalen TYPO3 Seite zu starten. Dazu ist dann folgendes Kommando notwendig:

    yarn run start --typo3

Mit

    yarn run build --typo3

könnt ihr einfach das fertig compilierte Frontend, also die css, js und auch Bilddateien, in den Public Ordner der Extension kopieren. Von dort läd später  TYPO3 die benötigten Dateien.


Extension Icon by Diky Setiawan from the Noun Project https://thenounproject.com/ykid
