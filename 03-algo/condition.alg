<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//Sinon il vaut évidemment 5 et j'affiche un message différent"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="chiffre EST_DU_TYPE NOMBRE" code="1#NOMBRE#chiffre"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez entrer un nombre :&quot;" code="4#Veuillez entrer un nombre :#1"/>
        <item algoitem="LIRE chiffre" code="2#chiffre#pasliste"/>
        <item algoitem="//SI chiffre est plus petit que 5 j'affiche un message" code="19#SI chiffre est plus petit que 5 j'affiche un message"/>
        <item algoitem="SI (chiffre &lt; 5) ALORS" code="6#chiffre &lt; 5">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Ceci est un petit chiffre.&quot;" code="4#Ceci est un petit chiffre.#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="//Sinon je vérifie si il est plus grand que 5 et j'affiche un message" code="19#Sinon je vérifie si il est plus grand que 5 et j'affiche un message"/>
                <item algoitem="SI (chiffre > 5) ALORS" code="6#chiffre > 5">
                    <item algoitem="DEBUT_SI" code="7#debutsi"/>
                    <item algoitem="AFFICHER &quot;Ceci est un grand chiffre&quot;" code="4#Ceci est un grand chiffre#1"/>
                    <item algoitem="FIN_SI" code="8#finsi"/>
                    <item algoitem="SINON" code="9#sinon">
                        <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                        <item algoitem="//Sinon il vaut évidemment 5 et j'affiche un message différent" code="19#Sinon il vaut évidemment 5 et j'affiche un message différent"/>
                        <item algoitem="AFFICHER &quot;Ce chiffre vaut 5&quot;" code="4#Ce chiffre vaut 5#1"/>
                        <item algoitem="FIN_SINON" code="11#finsinon"/>
                    </item>
                </item>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
