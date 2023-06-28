<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//&quot;i&quot; augmentant de 0 à 2 à chaque itération, il affichera un nombre différent."/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="trucs EST_DU_TYPE LISTE" code="1#LISTE#trucs"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="//Pour donner une valeur à une liste, il faut préciser à quel emplacement de la liste elle est ajouté." code="19#Pour donner une valeur à une liste, il faut préciser à quel emplacement de la liste elle est ajouté."/>
        <item algoitem="//Une liste commencera généralement à l'index 0" code="19#Une liste commencera généralement à l'index 0"/>
        <item algoitem="trucs[0] PREND_LA_VALEUR 42" code="5#trucs#42#0"/>
        <item algoitem="trucs[1] PREND_LA_VALEUR 59" code="5#trucs#59#1"/>
        <item algoitem="trucs[2] PREND_LA_VALEUR 17" code="5#trucs#17#2"/>
        <item algoitem="AFFICHER trucs[1]" code="3#trucs#1#1"/>
        <item algoitem="POUR i ALLANT_DE 0 A 2" code="12#i#0#2">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="//Je demande d'afficher la valeur de la liste se trouvant à l'index &quot;i&quot;" code="19#Je demande d'afficher la valeur de la liste se trouvant à l'index &quot;i&quot;"/>
            <item algoitem="//&quot;i&quot; augmentant de 0 à 2 à chaque itération, il affichera un nombre différent." code="19#&quot;i&quot; augmentant de 0 à 2 à chaque itération, il affichera un nombre différent."/>
            <item algoitem="AFFICHER trucs[i]" code="3#trucs#1#i"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
