<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="//On arrondi cette valeur obtenue pour ne pas avoir de chiffre après la virgule, obtenant un chiffre entier aléatoire entre 0 et 100"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000" arrondiAuto="vrai" epaisseurLigne="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions">
        <item algoitem="FONCTION addition(x,y)" code="201#addition#x,y">
            <item algoitem="VARIABLES_FONCTION" code="202#declarationsvariablesfonction">
                <item algoitem="total EST_DU_TYPE NOMBRE" code="1#NOMBRE#total"/>
            </item>
            <item algoitem="DEBUT_FONCTION" code="203#debutfonction"/>
            <item algoitem="total PREND_LA_VALEUR x + y" code="5#total#x + y#pasliste"/>
            <item algoitem="//Une fonction peut retourner une valeur qui sera utilisable dans l'algorithme de base" code="19#Une fonction peut retourner une valeur qui sera utilisable dans l'algorithme de base"/>
            <item algoitem="RENVOYER total" code="205#total"/>
            <item algoitem="FIN_FONCTION" code="204#finfonction"/>
        </item>
    </item>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="alea EST_DU_TYPE NOMBRE" code="1#NOMBRE#alea"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="POUR i ALLANT_DE 1 A 10" code="12#i#1#10">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="//random() donne un chiffre aléatoire entre 0 et 1 que l'on multiplie ici par 100" code="19#random() donne un chiffre aléatoire entre 0 et 1 que l'on multiplie ici par 100"/>
            <item algoitem="//On arrondi cette valeur obtenue pour ne pas avoir de chiffre après la virgule, obtenant un chiffre entier aléatoire entre 0 et 100" code="19#On arrondi cette valeur obtenue pour ne pas avoir de chiffre après la virgule, obtenant un chiffre entier aléatoire entre 0 et 100"/>
            <item algoitem="alea PREND_LA_VALEUR round(random() * 100)" code="5#alea#round(random() * 100)#pasliste"/>
            <item algoitem="AFFICHER alea" code="3#alea#1#pasliste"/>
            <item algoitem="//alea prend la valeur qui est retourné par la fonction addition" code="19#alea prend la valeur qui est retourné par la fonction addition"/>
            <item algoitem="alea PREND_LA_VALEUR addition(alea, alea)" code="5#alea#addition(alea, alea)#pasliste"/>
            <item algoitem="AFFICHER alea" code="3#alea#1#pasliste"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
