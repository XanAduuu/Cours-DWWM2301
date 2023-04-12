<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;J'aime les &quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="mot EST_DU_TYPE CHAINE" code="1#CHAINE#mot"/>
        <item algoitem="mot2 EST_DU_TYPE CHAINE" code="1#CHAINE#mot2"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="//Je donne à ma variable &quot;mot&quot; la valeur &quot;Ananas&quot;" code="19#Je donne à ma variable &quot;mot&quot; la valeur &quot;Ananas&quot;"/>
        <item algoitem="mot PREND_LA_VALEUR &quot;Ananas&quot;" code="5#mot#&quot;Ananas&quot;#pasliste"/>
        <item algoitem="AFFICHER mot" code="3#mot#1#pasliste"/>
        <item algoitem="//Je demande à l'utilisateur de rentrer une valeur pour ma variable mot2" code="19#Je demande à l'utilisateur de rentrer une valeur pour ma variable mot2"/>
        <item algoitem="LIRE mot2" code="2#mot2#pasliste"/>
        <item algoitem="AFFICHER &quot;J'aime les &quot;" code="4#J'aime les #0"/>
        <item algoitem="AFFICHER mot2" code="3#mot2#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
