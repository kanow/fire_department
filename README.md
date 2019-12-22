# TYPO3 Sitepackage for fire brigades!

This is the first development of a TYPO3 theme extension for fire brigades. It should be a solution to setup a TYPO3 website for fire brigades in an easy way.

Planned feature at the moment:

* Responsive webdesign. The website should always looking good on different devices. e.g. Desktop PC, Tablets, mobile phones
* The TYPO3 extension operations is used to manage firefighter operations.
 
##### Dependencies: 

* typo3/cms-core: ^9.5
* kanow/operations: ^3.0
    
This extension is in an very earlier alpha state! Please do not use in production for now. Many things will be changed in the next time!

I change this documentation if I think the extension ist ready for this.

# Frontend build 

I use Foundation Sites 6 to build the frontend stuff like css and js. If you want to change the frontend styling you need some software requirements on your computer. Please read the "Installation" section in the ZurbReadme.md file in the folder "FrontendBuild".

Fork the repository to keep your changes in your project.

After copying and renaming the config.sample.yml file you have to adapt the projectdomain entry in the additional watch path to use the frontend build tool directly with your TYPO3 website. To start devloping and watching the files by the frontend toll you have to use the following command.

    yarn run start --typo3
     
With
  
    yarn run build --typo3
    
you can copy the the final frontend files to the TYPO3 extension Public folder without opening the website in browser.   

# TYPO3 Website für Feuerwehren

Dies sind die ersten Schritte um eine sogenannte Theme-Extension für eine TYPO3 Website. Diese Extension solle es anderen ermöglich eine TYPO3 Webseite für Feuerwehren auf einfache Art zu erstellen.

Momentan ist geplant:

* Ein Responsives Webdesign. Die Webseite soll auf verschiedenen Geräten (Desktop Compouter, Laptop, Tablets, Handys) gleichermaßen gut zu bedienen und anzuschauen sein.
* Für die Darstellung und Verwaltung der Einsätze wird die TYPO3 Extension "operations" verwendet.

##### Systemvorraussetzungen: 

* typo3/cms-core: ^9.5
* kanow/operations: ^3.0

Achtung, die Extension ist in einem sehr frühen Stadium und sollte nicht für Produktiv Umgebungen / Live Seiten verwendet werden. Es kann sich enifach sehr schnell vieles ändern!

Ich werde die Dokumentation entsprechend anpassen wenn es so weit ist und dieses Theme soweit ist.
