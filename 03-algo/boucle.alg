<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//Tant que n'augmente pas max lui même, il me faut alors l'augmenter moi même pour éviter une boucle infinie"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="max EST_DU_TYPE NOMBRE" code="1#NOMBRE#max"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="//On va répéter les actions suivantes un nombre de fois défini par la boucle," code="19#On va répéter les actions suivantes un nombre de fois défini par la boucle,"/>
        <item algoitem="//Ici max va prendre une valeur différente à chaque ittération, allant de 0 à 10" code="19#Ici max va prendre une valeur différente à chaque ittération, allant de 0 à 10"/>
        <item algoitem="POUR max ALLANT_DE 0 A 10" code="12#max#0#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="//Si le reste de la division (modulo) de max par 2 vaut 0, alors je l'affiche" code="19#Si le reste de la division (modulo) de max par 2 vaut 0, alors je l'affiche"/>
            <item algoitem="SI (max%2 == 0) ALORS" code="6#max%2 == 0">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER max" code="3#max#1#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER max" code="3#max#1#pasliste"/>
        <item algoitem="//Tant que max sera plus petit que 20, je répète les actions suivantes" code="19#Tant que max sera plus petit que 20, je répète les actions suivantes"/>
        <item algoitem="TANT_QUE (max &lt; 20) FAIRE" code="15#max &lt; 20">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="//Tant que n'augmente pas max lui même, il me faut alors l'augmenter moi même pour éviter une boucle infinie" code="19#Tant que n'augmente pas max lui même, il me faut alors l'augmenter moi même pour éviter une boucle infinie"/>
            <item algoitem="max PREND_LA_VALEUR max + 1" code="5#max#max + 1#pasliste"/>
            <item algoitem="AFFICHER max" code="3#max#1#pasliste"/>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
