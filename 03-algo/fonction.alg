<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="APPELER_FONCTION like(choix)"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions">
        <item algoitem="FONCTION like(food)" code="201#like#food">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction">
                <item algoitem="n1 EST_DU_TYPE CHAINE" code="1#CHAINE#n1"/>
            </item>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="//Une fonction permet de créer un bout de code que l'on souhaite répéter à plusieurs endroits." code="19#Une fonction permet de créer un bout de code que l'on souhaite répéter à plusieurs endroits."/>
            <item algoitem="//On pourra alors appeler la fonction là où on souhaite utiliser ce code" code="19#On pourra alors appeler la fonction là où on souhaite utiliser ce code"/>
            <item algoitem="//Les variables déclarés dans une fonction, n'existe que dans celle ci, elles ne sont pas accessible ailleurs" code="19#Les variables déclarés dans une fonction, n'existe que dans celle ci, elles ne sont pas accessible ailleurs"/>
            <item algoitem="n1 PREND_LA_VALEUR food" code="5#n1#food#pasliste"/>
            <item algoitem="AFFICHER &quot;J'aime les &quot;" code="4#J'aime les #0"/>
            <item algoitem="AFFICHER n1" code="3#n1#1#pasliste"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
    </item>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="choix EST_DU_TYPE CHAINE" code="1#CHAINE#choix"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Veuillez choisir votre nourriture&quot;" code="4#Veuillez choisir votre nourriture#1"/>
        <item algoitem="LIRE choix" code="2#choix#pasliste"/>
        <item algoitem="//J'appelle ma fonction en lui donnant le choix de l'utilisateur en paramètre" code="19#J'appelle ma fonction en lui donnant le choix de l'utilisateur en paramètre"/>
        <item algoitem="APPELER_FONCTION like(choix)" code="206#like(choix)"/>
        <item algoitem="AFFICHER &quot;Encore une fois&quot;" code="4#Encore une fois#1"/>
        <item algoitem="LIRE choix" code="2#choix#pasliste"/>
        <item algoitem="APPELER_FONCTION like(choix)" code="206#like(choix)"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
