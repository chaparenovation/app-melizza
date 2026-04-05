export const THEMES = [
  {
    id: 1, name: "Signalisation", icon: "🚦", color: "#E63946",
    desc: "Panneaux, feux, marquages au sol",
    cards: [
      { q: "Que signifie un panneau triangulaire avec un bord rouge?", a: "C'est un panneau de DANGER. Il avertit d'un danger à proximité.", tip: "🔺 Triángulo = Peligro" },
      { q: "Que signifie un panneau rond avec un bord rouge?", a: "C'est un panneau d'INTERDICTION. Il interdit une action.", tip: "⛔ Círculo rojo = Prohibición" },
      { q: "Que signifie un panneau rond avec un fond bleu?", a: "C'est un panneau d'OBLIGATION. Il impose une action.", tip: "🔵 Círculo azul = Obligación" },
      { q: "Que signifie un panneau carré bleu?", a: "C'est un panneau d'INDICATION. Il donne une information utile.", tip: "🟦 Cuadrado azul = Información" },
      { q: "Que signifie une ligne blanche continue au sol?", a: "Il est INTERDIT de la franchir ou de la chevaucher.", tip: "Línea continua = No cruzar nunca" },
      { q: "Que signifie un panneau de fin de prescription (rond, barré)?", a: "Il ANNULE l'interdiction ou l'obligation précédente. Attention, ce n'est PAS une nouvelle interdiction!", tip: "⚪ Panel barrado = FIN de la prohibición anterior" },
      { q: "Quelle est la différence entre un panneau carré bleu et un panneau rond bleu?", a: "Rond bleu = OBLIGATION. Carré bleu = INDICATION (information, pas obligation).", tip: "🔵 Redondo=obligación | 🟦 Cuadrado=información" },
    ],
    quiz: [
      { q: "Un panneau triangulaire à bord rouge signifie:", opts: ["Danger", "Interdiction", "Obligation", "Indication"], correct: 0 },
      { q: "Un panneau rond à fond bleu signifie:", opts: ["Interdiction", "Danger", "Obligation", "Information"], correct: 2 },
      { q: "Une ligne blanche continue signifie:", opts: ["Vous pouvez doubler", "Interdiction de franchir", "Ralentir", "Zone de stationnement"], correct: 1 },
      { q: "Un panneau rond à bord rouge signifie:", opts: ["Obligation", "Indication", "Interdiction", "Danger"], correct: 2 },
      { q: "Un panneau rond barré en diagonale signifie:", opts: ["Nouvelle interdiction", "Fin de prescription", "Sens interdit", "Zone dangereuse"], correct: 1 },
      { q: "Un panneau carré bleu indique:", opts: ["Une obligation", "Un danger", "Une information/indication", "Une interdiction"], correct: 2 },
      { q: "Les panneaux de forme carrée sont généralement des panneaux de:", opts: ["Danger", "Interdiction", "Obligation", "Indication"], correct: 3 },
    ]
  },
  {
    id: 2, name: "Priorités", icon: "⚠️", color: "#F4A261",
    desc: "Intersections, cédez le passage, priorité à droite",
    cards: [
      { q: "Quelle est la règle de priorité à droite?", a: "Vous devez CÉDER le passage aux véhicules venant de DROITE, sauf indication contraire.", tip: "Prioridad a la derecha = regla por defecto" },
      { q: "Que signifie un panneau triangulaire inversé?", a: "Cédez le passage! Vous devez laisser passer les autres véhicules.", tip: "🔻 Triángulo invertido = Ceder el paso" },
      { q: "Que signifie le panneau STOP?", a: "Arrêt OBLIGATOIRE. Vous devez vous arrêter complètement, même s'il n'y a personne.", tip: "🛑 STOP = Parar SIEMPRE, sin excepciones", imageUrl: "assets/panel_stop_1775415151431.png" },
      { q: "Qui est prioritaire dans un rond-point?", a: "Les véhicules DÉJÀ engagés dans le rond-point sont prioritaires.", tip: "🔄 Los que ya están dentro de la rotonda tienen prioridad", imageUrl: "assets/rond_point_1775415206521.png" },
      { q: "Quand un agent de police dirige la circulation, qui est prioritaire?", a: "Les indications de l'agent PRÉVALENT sur les feux et les panneaux.", tip: "👮 El agente > semáforos > señales" },
      { q: "Je DOIS ou je PEUX laisser passer un piéton sur un passage piéton?", a: "Je DOIS obligatoirement laisser passer un piéton engagé sur un passage piéton. C'est une OBLIGATION, pas un choix.", tip: "🚶 Paso peatonal = OBLIGACIÓN dejar pasar, no es opcional" },
    ],
    quiz: [
      { q: "En l'absence de signalisation, quelle règle s'applique?", opts: ["Priorité à gauche", "Priorité à droite", "Le plus rapide passe", "On s'arrête tous"], correct: 1 },
      { q: "Au panneau STOP, vous devez:", opts: ["Ralentir et passer", "Vous arrêter obligatoirement", "Klaxonner", "Accélérer"], correct: 1, imageUrl: "assets/panel_stop_1775415151431.png" },
      { q: "Dans un rond-point, qui est prioritaire?", opts: ["Ceux qui entrent", "Ceux déjà engagés", "Les piétons seulement", "Les camions"], correct: 1, imageUrl: "assets/rond_point_1775415206521.png" },
      { q: "Les indications d'un agent prévalent sur:", opts: ["Rien", "Les panneaux seulement", "Les feux seulement", "Les feux ET les panneaux"], correct: 3 },
      { q: "Un piéton est engagé sur un passage piéton. Je DOIS:", opts: ["Klaxonner pour qu'il se dépêche", "Le laisser passer obligatoirement", "Passer si je suis pressé", "Faire des appels de phare"], correct: 1 },
      { q: "Le panneau triangulaire inversé signifie:", opts: ["Danger", "Cédez le passage", "Sens interdit", "Priorité"], correct: 1 },
    ]
  },
  {
    id: 3, name: "Vitesse", icon: "⏱️", color: "#2A9D8F",
    desc: "Limitations, distances de freinage, temps de pluie",
    cards: [
      { q: "Quelles sont les vitesses maximales par temps sec?", a: "Ville: 50 km/h. Route: 80 km/h. Voie express: 110 km/h. Autoroute: 130 km/h.", tip: "🌞 50 | 80 | 110 | 130" },
      { q: "Quelles sont les vitesses par temps de pluie?", a: "Ville: 50 km/h (inchangé). Route: 80 km/h (inchangé). Voie express: 100 km/h. Autoroute: 110 km/h.", tip: "🌧️ 50 | 80 | 100 | 110 (solo cambian express y autopista)" },
      { q: "Vitesse pour un jeune conducteur (permis probatoire)?", a: "Ville: 50. Route: 80. Voie express: 100. Autoroute: 110 km/h. Les mêmes que par temps de pluie!", tip: "🔰 Novato = mismas que lluvia: 50|80|100|110" },
      { q: "En ville, la vitesse peut-elle être inférieure à 50 km/h?", a: "OUI! Certaines zones sont limitées à 30 km/h (zone 30) ou même 20 km/h (zone de rencontre).", tip: "🏙️ Zona 30 y zona de encuentro (20 km/h) existen" },
      { q: "Comment calculer la distance de freinage?", a: "À 50 km/h ≈ 14m. À 90 km/h ≈ 45m. À 130 km/h ≈ 93m. Sur route mouillée, multipliez par 1,5!", tip: "🌧️ Mojado = distancia de frenado × 1.5" },
      { q: "Quelle est la distance de sécurité en secondes?", a: "Au moins 2 secondes derrière le véhicule devant vous. Par mauvais temps, augmentez à 3-4 secondes.", tip: "⏱️ 2 segundos mínimo, 3-4 con mal tiempo" },
    ],
    quiz: [
      { q: "Vitesse maximale sur autoroute par temps de pluie:", opts: ["130 km/h", "120 km/h", "110 km/h", "90 km/h"], correct: 2 },
      { q: "Vitesse maximale sur voie express par temps sec:", opts: ["90 km/h", "100 km/h", "110 km/h", "130 km/h"], correct: 2 },
      { q: "Sur route mouillée, la distance de freinage:", opts: ["Reste la même", "Est multipliée par 1,5", "Est divisée par 2", "Double"], correct: 1 },
      { q: "Vitesse maximale en zone 30:", opts: ["50 km/h", "30 km/h", "40 km/h", "20 km/h"], correct: 1 },
      { q: "Un jeune conducteur sur autoroute est limité à:", opts: ["130 km/h", "120 km/h", "110 km/h", "100 km/h"], correct: 2 },
      { q: "Distance de sécurité minimale:", opts: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"], correct: 1 },
      { q: "En ville, la vitesse est limitée à:", opts: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], correct: 2 },
    ]
  },
  {
    id: 4, name: "Dépassement", icon: "🚗", color: "#457B9D",
    desc: "Règles de dépassement, distances latérales",
    cards: [
      { q: "Par quel côté doit-on dépasser?", a: "On dépasse toujours par la GAUCHE, sauf exceptions (tramway, véhicule tournant à gauche).", tip: "⬅️ Adelantar siempre por la IZQUIERDA" },
      { q: "Quand est-il interdit de dépasser?", a: "Au sommet d'une côte, dans un virage, près d'un passage piéton, ligne continue.", tip: "🚫 Cima, curva, paso peatonal, línea continua = NO adelantar" },
      { q: "Quelle distance latérale avec un cycliste en ville?", a: "Au moins 1 mètre en agglomération.", tip: "🏙️ Ciudad: mínimo 1 metro del ciclista" },
      { q: "Quelle distance latérale avec un cycliste hors ville?", a: "Au moins 1,5 mètre hors agglomération.", tip: "🛣️ Fuera de ciudad: mínimo 1.5 metros del ciclista" },
      { q: "Que faire si un véhicule vous dépasse?", a: "Ne pas accélérer. Faciliter le dépassement en restant à droite.", tip: "No acelerar cuando te adelantan, facilitar la maniobra" },
    ],
    quiz: [
      { q: "On dépasse normalement par:", opts: ["La droite", "La gauche", "N'importe quel côté", "Le trottoir"], correct: 1 },
      { q: "Distance latérale avec un cycliste hors agglomération:", opts: ["0,5 m", "1 m", "1,5 m", "2 m"], correct: 2 },
      { q: "Distance latérale avec un cycliste en agglomération:", opts: ["0,5 m", "1 m", "1,5 m", "2 m"], correct: 1 },
      { q: "Il est interdit de dépasser:", opts: ["Dans une ligne droite", "Au sommet d'une côte", "Sur une autoroute", "En ville toujours"], correct: 1 },
      { q: "Quand un véhicule vous dépasse, vous devez:", opts: ["Accélérer", "Klaxonner", "Faciliter le dépassement", "Freiner brusquement"], correct: 2 },
    ]
  },
  {
    id: 5, name: "Stationnement", icon: "🅿️", color: "#264653",
    desc: "Arrêt vs stationnement, zones réglementées",
    cards: [
      { q: "Quelle est la différence entre arrêt et stationnement?", a: "ARRÊT: le conducteur reste dans le véhicule ou à proximité. STATIONNEMENT: le conducteur quitte le véhicule.", tip: "Parada = conductor presente. Estacionamiento = conductor ausente" },
      { q: "Que signifie une ligne jaune continue sur le trottoir?", a: "Stationnement ET arrêt INTERDITS.", tip: "Línea amarilla continua = ni parar ni estacionar" },
      { q: "Que signifie une ligne jaune discontinue sur le trottoir?", a: "Stationnement INTERDIT mais arrêt AUTORISÉ.", tip: "Línea amarilla discontinua = puedes parar pero no estacionar" },
      { q: "À quelle distance d'un passage piéton est-il interdit de stationner?", a: "Il est interdit de stationner à moins de 5 mètres AVANT un passage piéton.", tip: "🚶 5 metros antes del paso peatonal = prohibido" },
      { q: "Que signifie le panneau de zone bleue?", a: "Stationnement gratuit mais LIMITÉ en durée. Disque de stationnement obligatoire.", tip: "🔵 Zona azul = gratis pero con disco y límite de tiempo" },
    ],
    quiz: [
      { q: "L'arrêt signifie que le conducteur:", opts: ["Quitte le véhicule", "Reste dans/près du véhicule", "Dort dans le véhicule", "Part pour longtemps"], correct: 1 },
      { q: "Stationnement interdit à moins de combien d'un passage piéton?", opts: ["3 m", "5 m", "10 m", "15 m"], correct: 1 },
      { q: "Ligne jaune continue sur le trottoir:", opts: ["Arrêt autorisé", "Stationnement autorisé", "Arrêt et stationnement interdits", "Zone payante"], correct: 2 },
      { q: "En zone bleue, il faut utiliser:", opts: ["Un ticket", "Un disque de stationnement", "Une carte bancaire", "Rien"], correct: 1 },
      { q: "Ligne jaune discontinue:", opts: ["Tout interdit", "Stationnement autorisé", "Arrêt autorisé, stationnement interdit", "Zone libre"], correct: 2 },
    ]
  },
  {
    id: 6, name: "Autoroute", icon: "🛣️", color: "#6D6875",
    desc: "Règles spécifiques aux autoroutes",
    cards: [
      { q: "Quelle est la vitesse maximale sur autoroute par temps sec?", a: "130 km/h (110 km/h par temps de pluie, 50 km/h si visibilité < 50m).", tip: "🌞130 | 🌧️110 | 🌫️50 km/h" },
      { q: "Peut-on faire marche arrière sur autoroute?", a: "JAMAIS. C'est strictement interdit, même pour rejoindre une sortie ratée.", tip: "🚫 NUNCA marcha atrás en autopista" },
      { q: "La bande d'arrêt d'urgence sert à quoi?", a: "UNIQUEMENT en cas de panne ou d'urgence. Mettre le gilet, le triangle, et appeler les secours.", tip: "🔺 Solo emergencias: chaleco + triángulo + llamar" },
      { q: "Quelle voie emprunter normalement sur autoroute?", a: "La voie de DROITE. Les autres voies sont réservées au dépassement.", tip: "➡️ Siempre por la derecha, la izquierda es solo para adelantar" },
      { q: "Quelle distance entre les bandes blanches d'urgence?", a: "Les bandes blanches sont espacées de 2 secondes. C'est un repère pour la distance de sécurité.", tip: "⏱️ 2 bandas blancas = 2 segundos de distancia" },
    ],
    quiz: [
      { q: "Vitesse maximale si visibilité inférieure à 50m:", opts: ["110 km/h", "90 km/h", "70 km/h", "50 km/h"], correct: 3 },
      { q: "Faire marche arrière sur autoroute est:", opts: ["Autorisé si prudent", "Strictement interdit", "Autorisé la nuit", "Autorisé sur la BAU"], correct: 1 },
      { q: "Sur autoroute, on circule normalement sur:", opts: ["La voie de gauche", "La voie du milieu", "La voie de droite", "N'importe quelle voie"], correct: 2 },
      { q: "La bande d'arrêt d'urgence sert:", opts: ["Au stationnement", "Aux urgences uniquement", "Au repos", "Aux appels"], correct: 1 },
      { q: "La distance de sécurité sur autoroute est de:", opts: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"], correct: 1 },
    ]
  },
  {
    id: 7, name: "Tunnels & PN", icon: "🚇", color: "#BC4749",
    desc: "Tunnels et passages à niveau",
    cards: [
      { q: "Que faire avant d'entrer dans un tunnel?", a: "Allumer les feux de croisement, retirer les lunettes de soleil, respecter les distances.", tip: "🕶️ Quitar gafas de sol + encender luces de cruce" },
      { q: "Que faire en cas d'incendie dans un tunnel?", a: "S'arrêter, couper le moteur, LAISSER la clé sur le contact, évacuer à pied vers les issues de secours.", tip: "🔥 Parar, dejar la llave puesta, evacuar A PIE" },
      { q: "À un passage à niveau, le feu rouge clignote. Que faire?", a: "S'arrêter OBLIGATOIREMENT. Ne JAMAIS s'engager, même si on ne voit pas le train.", tip: "🚂 Luz roja intermitente = PARAR siempre" },
      { q: "Peut-on s'arrêter sur un passage à niveau?", a: "JAMAIS. S'assurer de pouvoir le traverser entièrement avant de s'engager.", tip: "🚫 Nunca parar en las vías del tren" },
    ],
    quiz: [
      { q: "Avant d'entrer dans un tunnel:", opts: ["Éteindre les feux", "Allumer les feux de croisement", "Klaxonner", "Accélérer"], correct: 1 },
      { q: "En cas d'incendie dans un tunnel, la clé du véhicule:", opts: ["Vous l'emportez", "Vous la laissez sur le contact", "Vous la cachez", "Vous la jetez"], correct: 1 },
      { q: "Feu rouge clignotant au passage à niveau:", opts: ["Ralentir et passer", "S'arrêter obligatoirement", "Klaxonner et passer", "Accélérer"], correct: 1 },
      { q: "Peut-on s'arrêter sur un passage à niveau?", opts: ["Oui brièvement", "Jamais", "Oui si le feu est vert", "Oui le jour"], correct: 1 },
    ]
  },
  {
    id: 8, name: "Éclairage", icon: "💡", color: "#E9C46A",
    desc: "Feux, visibilité, conduite de nuit",
    cards: [
      { q: "Quand utiliser les feux de croisement?", a: "De nuit, par temps de pluie, brouillard, dans les tunnels. En ville de nuit, toujours les croisement.", tip: "💡 Luces de cruce: noche, lluvia, niebla, túnel" },
      { q: "Quand utiliser les feux de route (pleins phares)?", a: "Hors agglomération, de nuit, quand il n'y a PAS de véhicule en face ou devant.", tip: "🔦 Luces largas: solo fuera de ciudad y sin coches cerca" },
      { q: "Quand utiliser les feux de brouillard arrière?", a: "UNIQUEMENT par brouillard ou chute de neige. JAMAIS par pluie! Ça éblouit les autres.", tip: "🌫️ Antiniebla trasero: SOLO niebla/nieve, NUNCA lluvia" },
      { q: "Les feux de croisement éclairent à quelle distance?", a: "Environ 30 mètres. Adaptez votre vitesse pour pouvoir vous arrêter dans cette distance.", tip: "30m visibilidad con luces de cruce" },
    ],
    quiz: [
      { q: "Les feux de brouillard arrière s'utilisent:", opts: ["Par pluie", "Par brouillard ou neige uniquement", "Toujours de nuit", "En ville"], correct: 1 },
      { q: "Les feux de route s'utilisent:", opts: ["En ville", "Face à un autre véhicule", "Hors agglomération sans véhicule en face", "Par brouillard"], correct: 2 },
      { q: "Distance d'éclairage des feux de croisement:", opts: ["10 m", "30 m", "50 m", "100 m"], correct: 1 },
      { q: "En ville, de nuit, on utilise:", opts: ["Les feux de route", "Les feux de croisement", "Aucun feu", "Les feux de brouillard"], correct: 1 },
    ]
  },
  {
    id: 9, name: "Éco & Véhicule", icon: "🌿", color: "#606C38",
    desc: "Éco-conduite, mécanique, Crit'Air, ABS",
    cards: [
      { q: "Qu'est-ce que la vignette Crit'Air?", a: "Un autocollant obligatoire indiquant le niveau de pollution du véhicule. Elle est nécessaire pour circuler dans les ZFE (Zones à Faibles Émissions).", tip: "🏷️ Crit'Air = etiqueta de contaminación, obligatoria en ZFE" },
      { q: "Combien de catégories Crit'Air existent?", a: "6 catégories: Crit'Air 0 (électrique, le plus propre) à Crit'Air 5 (le plus polluant) + non classé.", tip: "0=eléctrico(verde) → 5=más contaminante. Sin clasificar=prohibido en ZFE" },
      { q: "Que fait le système ABS?", a: "Il empêche le BLOCAGE des roues lors d'un freinage. Il permet de garder le contrôle de la direction. MAIS il ne réduit PAS la distance de freinage!", tip: "⚠️ ABS = no bloquea ruedas PERO NO reduce distancia de frenado!" },
      { q: "Le système ESP (ou ESC), qu'est-ce que c'est?", a: "Le contrôle électronique de stabilité. Il aide à corriger les dérapages en freinant individuellement les roues.", tip: "ESP = corrector de derrapes, frena ruedas individuales" },
      { q: "Quand vérifier la pression des pneus?", a: "Au moins une fois par mois et avant un long trajet. Toujours à FROID.", tip: "🔧 Una vez al mes, con neumáticos FRÍOS" },
      { q: "Que faire si le voyant d'huile s'allume?", a: "S'arrêter IMMÉDIATEMENT. Le moteur risque une casse grave.", tip: "🛢️ Luz de aceite = PARAR INMEDIATAMENTE", imageUrl: "assets/voyant_huile_1775415273377.png" },
    ],
    quiz: [
      { q: "L'ABS empêche:", opts: ["La voiture de démarrer", "Le blocage des roues au freinage", "La consommation excessive", "Les crevaisons"], correct: 1 },
      { q: "L'ABS réduit-il la distance de freinage?", opts: ["Oui toujours", "Non, il ne la réduit pas", "Seulement sur sol sec", "Seulement en descente"], correct: 1 },
      { q: "La vignette Crit'Air est obligatoire pour:", opts: ["Tous les véhicules partout", "Circuler dans les ZFE", "Stationner en ville", "Prendre l'autoroute"], correct: 1 },
      { q: "Crit'Air 0 correspond à:", opts: ["Véhicule diesel ancien", "Véhicule électrique/hydrogène", "Véhicule essence récent", "Tout véhicule neuf"], correct: 1 },
      { q: "La pression des pneus se vérifie:", opts: ["À chaud", "À froid", "Peu importe", "Après 10 km"], correct: 1 },
      { q: "Voyant d'huile allumé:", opts: ["Continuer doucement", "S'arrêter immédiatement", "Ajouter de l'eau", "Ignorer"], correct: 1, imageUrl: "assets/voyant_huile_1775415273377.png" },
    ]
  },
  {
    id: 10, name: "Sécurité", icon: "🛡️", color: "#9B2226",
    desc: "Ceinture, alcool, téléphone, premiers secours, PAS",
    cards: [
      { q: "La ceinture est-elle obligatoire pour tous?", a: "OUI, pour TOUS les occupants, à l'avant ET à l'arrière, y compris les passagers adultes à l'arrière.", tip: "Cinturón obligatorio para TODOS, delante y detrás" },
      { q: "Jusqu'à quel âge un siège enfant est-il obligatoire?", a: "Jusqu'à 10 ans OU 1,35 m. L'enfant doit être à l'arrière.", tip: "👶 Silla infantil hasta 10 años o 1.35m" },
      { q: "Quel est le taux d'alcool maximum autorisé?", a: "0,5 g/L de sang. Pour les permis probatoires: 0,2 g/L.", tip: "🍷 0.5 g/L normal | 0.2 g/L novatos" },
      { q: "Peut-on téléphoner en conduisant?", a: "INTERDIT de tenir le téléphone en main. Oreillettes INTERDITES aussi depuis 2015. Seul le Bluetooth intégré au véhicule est toléré.", tip: "📱 Teléfono en mano=prohibido. Auriculares=prohibidos también" },
      { q: "Quels sont les 3 gestes en cas d'accident? (PAS)", a: "PROTÉGER la zone, ALERTER les secours (15/18/112), SECOURIR les victimes.", tip: "PAS: Proteger → Alertar → Socorrer. 112=emergencias Europa" },
      { q: "Peut-on déplacer un blessé?", a: "NON, sauf si danger immédiat (incendie, explosion).", tip: "🚫 No mover al herido salvo peligro inmediato" },
      { q: "Massage cardiaque: combien de compressions?", a: "30 compressions puis 2 insufflations. Utiliser un défibrillateur si disponible.", tip: "💓 30 compresiones + 2 insuflaciones. DEA si hay uno" },
      { q: "En conduite accompagnée (AAC), combien de km minimum?", a: "Au moins 3 000 km pendant un délai minimum d'UN AN. En conduite supervisée, pas de minimum.", tip: "🚗 AAC: 3000 km en mínimo 1 año. Supervisée: sin mínimo" },
    ],
    quiz: [
      { q: "Taux d'alcool max pour un permis probatoire:", opts: ["0,5 g/L", "0,2 g/L", "0,8 g/L", "0 g/L"], correct: 1 },
      { q: "La ceinture est obligatoire:", opts: ["Seulement à l'avant", "Pour le conducteur seulement", "Pour tous les occupants", "En autoroute seulement"], correct: 2 },
      { q: "Siège enfant obligatoire jusqu'à:", opts: ["5 ans", "8 ans", "10 ans ou 1,35 m", "12 ans"], correct: 2 },
      { q: "Utiliser des oreillettes en conduisant:", opts: ["Autorisé", "Interdit", "Autorisé en ville", "Autorisé sur autoroute"], correct: 1 },
      { q: "L'ordre des gestes PAS:", opts: ["Secourir-Alerter-Protéger", "Protéger-Alerter-Secourir", "Alerter-Protéger-Secourir", "Secourir-Protéger-Alerter"], correct: 1 },
      { q: "En conduite accompagnée, le minimum est de:", opts: ["1 000 km en 6 mois", "2 000 km en 1 an", "3 000 km en 1 an", "5 000 km en 2 ans"], correct: 2 },
      { q: "Le numéro d'urgence européen:", opts: ["15", "18", "112", "911"], correct: 2 },
    ]
  },
  {
    id: 11, name: "Top Fallos Nacionales", icon: "📊", color: "#FF5A5F",
    desc: "Estadísticas: las preguntas que más se fallan en Francia",
    cards: [
      { q: "Je m’apprête à quitter un stationnement. Je mets mon clignotant. Ai-je la priorité ?", a: "NON. Un véhicule qui s'insère dans la circulation n'est JAMAIS prioritaire.", tip: "⛔ Clignotant ne donne pas la priorité" },
      { q: "Dans une rue à double sens, de quel côté dois-je me garer ?", a: "UNIQUEMENT du côté droit de la chaussée (dans le sens de la marche).", tip: "➡️ Garer = Toujours à droite en double sens" },
      { q: "Quelles sont les feux à allumer en cas de forte pluie ET de brouillard ?", a: "Feux de Croisement + Brouillard AVANT. Le brouillard ARRIÈRE est réservé au brouillard/neige.", tip: "🌧️🌫️ Croisement + Avant (pas arrière si pluie!)" },
      { q: "Le panneau d'entrée de ville limite la vitesse à:", a: "50 km/h, ET il supprime automatiquement toutes les règles imposées avant l'entrée.", tip: "🏙️ Panneau ville = Règle de 50 + annule antérieures" },
      { q: "Si je refuse de me soumettre au dépistage d'alcool ou drogue:", a: "C'est un délit sévère. Perte automatique de 6 points + 4500€ d'amende.", tip: "❌ Refus = Sanction MAX (6 points + délit)" }
    ],
    quiz: [
      { q: "En sortant d'une place de parking avec mon clignotant:", opts: ["Je suis prioritaire", "Je dois céder le passage", "Je klaxonne", "Je passe direct"], correct: 1 },
      { q: "Le panneau avec le nom de la ville limite la vitesse à:", opts: ["70 km/h", "50 km/h", "30 km/h", "Aucune limite"], correct: 1 },
      { q: "Refuser un dépistage d'alcool entraîne la perte de:", opts: ["2 points", "4 points", "6 points", "Le permis directement"], correct: 2 },
      { q: "En double sens, le stationnement se fait normalement:", opts: ["À gauche", "Où il y a de la place", "À droite uniquement", "Sur le trottoir"], correct: 2 },
      { q: "Brouillard ARRIÈRE par forte pluie:", opts: ["Obligatoire", "Conseillé", "Stritement interdit", "Toléré la nuit"], correct: 2 }
    ]
  }
];

export const PIEGE_QUESTIONS = [
  {
    category: "🎯 'Je PEUX' vs 'Je DOIS'",
    desc: "Différence entre possibilité et obligation",
    questions: [
      { q: "Un piéton est sur le passage piéton. Je DOIS le laisser passer.", opts: ["Vrai", "Faux"], correct: 0, explain: "C'est une OBLIGATION (je dois), pas un choix. Même s'il n'est pas encore engagé sur votre voie." },
      { q: "Je PEUX faire des appels de phare pour prévenir un piéton.", opts: ["Vrai", "Faux"], correct: 0, explain: "C'est POSSIBLE (je peux) mais pas obligatoire. La nuance 'peux/dois' est cruciale!" },
      { q: "Je DOIS obligatoirement klaxonner pour prévenir un danger.", opts: ["Vrai", "Faux"], correct: 1, explain: "Je PEUX klaxonner, mais ce n'est pas une obligation. En ville, le klaxon n'est autorisé qu'en cas de danger immédiat." },
      { q: "À un feu vert, je DOIS passer.", opts: ["Vrai", "Faux"], correct: 1, explain: "Je PEUX passer, mais je DOIS d'abord m'assurer que l'intersection est dégagée. Si un piéton ou véhicule est encore engagé, j'attends." },
    ]
  },
  {
    category: "🔄 Questions en 2 parties",
    desc: "Attention: les 2 parties sont indépendantes!",
    questions: [
      { q: "Partie 1: L'ABS empêche le blocage des roues. Partie 2: L'ABS réduit la distance de freinage.", opts: ["1: Vrai, 2: Vrai", "1: Vrai, 2: Faux", "1: Faux, 2: Vrai", "1: Faux, 2: Faux"], correct: 1, explain: "L'ABS empêche bien le blocage (VRAI), mais ne réduit PAS la distance de freinage (FAUX). Chaque partie est INDÉPENDANTE!" },
      { q: "Partie 1: Les feux de brouillard arrière s'utilisent par pluie forte. Partie 2: Les feux de croisement s'utilisent par pluie.", opts: ["1: Vrai, 2: Vrai", "1: Vrai, 2: Faux", "1: Faux, 2: Vrai", "1: Faux, 2: Faux"], correct: 2, explain: "Brouillard arrière par pluie = FAUX (seulement brouillard/neige). Croisement par pluie = VRAI." },
      { q: "Partie 1: En conduite accompagnée, il faut 3000 km minimum. Partie 2: En conduite supervisée, il faut aussi 3000 km.", opts: ["1: Vrai, 2: Vrai", "1: Vrai, 2: Faux", "1: Faux, 2: Vrai", "1: Faux, 2: Faux"], correct: 1, explain: "AAC = 3000 km en 1 an (VRAI). Supervisée = pas de km minimum (FAUX). Ne confondez pas les deux!" },
    ]
  },
  {
    category: "🏷️ Crit'Air & ZFE",
    desc: "87% d'erreurs! Le thème le plus raté",
    questions: [
      { q: "La vignette Crit'Air est obligatoire partout en France.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! Elle est obligatoire uniquement dans les ZFE (Zones à Faibles Émissions), pas partout." },
      { q: "Un véhicule Crit'Air 5 peut circuler dans toutes les ZFE.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! Les véhicules Crit'Air 4 et 5 sont souvent interdits dans les ZFE. Cela dépend de chaque ville." },
      { q: "La vignette Crit'Air est gratuite.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! Elle coûte environ 3,72€ et se commande en ligne sur le site officiel." },
      { q: "Crit'Air 0 correspond aux véhicules 100% électriques ou hydrogène.", opts: ["Vrai", "Faux"], correct: 0, explain: "VRAI! Crit'Air 0 (vignette verte) = véhicules zéro émission." },
    ]
  },
  {
    category: "⚡ ABS & Freinage",
    desc: "84.5% d'erreurs! Piège classique",
    questions: [
      { q: "L'ABS permet de garder le contrôle de la direction lors d'un freinage d'urgence.", opts: ["Vrai", "Faux"], correct: 0, explain: "VRAI! C'est le principal avantage: vous pouvez toujours tourner le volant en freinant." },
      { q: "Grâce à l'ABS, je peux freiner plus tard car la distance de freinage est réduite.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! L'ABS NE réduit PAS la distance de freinage. Il empêche seulement le blocage des roues." },
      { q: "L'ABS fonctionne mieux sur sol mouillé que sur sol sec.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! L'ABS fonctionne dans les deux cas, mais la distance de freinage est toujours plus longue sur sol mouillé." },
      { q: "L'AFU (Aide au Freinage d'Urgence) réduit la distance de freinage.", opts: ["Vrai", "Faux"], correct: 0, explain: "VRAI! Contrairement à l'ABS, l'AFU augmente automatiquement la pression de freinage. Ne confondez pas ABS et AFU!" },
    ]
  },
  {
    category: "📝 Adverbes pièges",
    desc: "'Uniquement', 'obligatoirement', 'exclusivement'",
    questions: [
      { q: "Le klaxon s'utilise UNIQUEMENT en cas de danger immédiat en agglomération.", opts: ["Vrai", "Faux"], correct: 0, explain: "VRAI en ville! Hors agglomération, il peut aussi servir à avertir pour un dépassement." },
      { q: "Les piétons doivent EXCLUSIVEMENT traverser aux passages piétons.", opts: ["Vrai", "Faux"], correct: 1, explain: "FAUX! S'il n'y a pas de passage piéton à moins de 50m, ils peuvent traverser ailleurs, avec prudence." },
      { q: "Le port de la ceinture est OBLIGATOIREMENT requis pour les passagers arrière.", opts: ["Vrai", "Faux"], correct: 0, explain: "VRAI! Depuis 1990, la ceinture est obligatoire à l'arrière aussi. Amende pour chaque passager non attaché." },
    ]
  }
];

export const PLAN_30_DAYS = [
  { day: 1, theme: "Signalisation", task: "Flashcards + memorizar formas y colores", focus: "📖" },
  { day: 2, theme: "Signalisation", task: "Quiz + repaso de errores", focus: "🧠" },
  { day: 3, theme: "Priorités", task: "Flashcards de prioridades", focus: "📖" },
  { day: 4, theme: "Priorités", task: "Quiz + repaso", focus: "🧠" },
  { day: 5, theme: "Vitesse", task: "Flashcards de velocidades", focus: "📖" },
  { day: 6, theme: "Vitesse", task: "Quiz + repaso", focus: "🧠" },
  { day: 7, theme: "REPASO", task: "Quiz combinado temas 1-3", focus: "🔄" },
  { day: 8, theme: "Dépassement", task: "Flashcards adelantamiento", focus: "📖" },
  { day: 9, theme: "Dépassement", task: "Quiz + repaso", focus: "🧠" },
  { day: 10, theme: "Stationnement", task: "Flashcards estacionamiento", focus: "📖" },
  { day: 11, theme: "Stationnement", task: "Quiz + repaso", focus: "🧠" },
  { day: 12, theme: "Autoroute", task: "Flashcards autopista", focus: "📖" },
  { day: 13, theme: "Autoroute", task: "Quiz + repaso", focus: "🧠" },
  { day: 14, theme: "REPASO", task: "Quiz combinado temas 4-6", focus: "🔄" },
  { day: 15, theme: "Tunnels & PN", task: "Flashcards túneles/paso a nivel", focus: "📖" },
  { day: 16, theme: "Tunnels & PN", task: "Quiz + repaso", focus: "🧠" },
  { day: 17, theme: "Éclairage", task: "Flashcards luces y visibilidad", focus: "📖" },
  { day: 18, theme: "Éclairage", task: "Quiz + repaso", focus: "🧠" },
  { day: 19, theme: "Éco & Véhicule", task: "Flashcards Crit'Air + ABS + eco", focus: "📖" },
  { day: 20, theme: "Éco & Véhicule", task: "Quiz + repaso", focus: "🧠" },
  { day: 21, theme: "REPASO", task: "Quiz combinado temas 7-9", focus: "🔄" },
  { day: 22, theme: "Sécurité", task: "Flashcards seguridad + auxilios", focus: "📖" },
  { day: 23, theme: "Sécurité", task: "Quiz + repaso", focus: "🧠" },
  { day: 24, theme: "PIÈGES", task: "Preguntas trampa: je peux/dois", focus: "🎯" },
  { day: 25, theme: "PIÈGES", task: "Preguntas trampa: ABS + adverbios", focus: "🎯" },
  { day: 26, theme: "SIMULACRO 1", task: "Examen completo 40 preguntas", focus: "📝" },
  { day: 27, theme: "ERRORES", task: "Repasa SOLO donde más fallaste", focus: "🔄" },
  { day: 28, theme: "SIMULACRO 2", task: "2º examen. Objetivo: 35/40", focus: "📝" },
  { day: 29, theme: "RELAX", task: "Repaso suave + respiración 4-7-8", focus: "🧘" },
  { day: 30, theme: "¡EXAMEN!", task: "Confía en tu preparación. ¡Tú puedes! 💪", focus: "🏆" },
];

export const ANXIETY_TIPS = [
  { icon: "🫁", title: "Respiración 4-7-8", desc: "Inhala 4 seg → Mantén 7 seg → Exhala 8 seg. Repite 3 veces antes del examen." },
  { icon: "💪", title: "Afirmaciones", desc: "\"He estudiado, estoy preparada, puedo hacerlo\". Tu cerebro cree lo que le dices." },
  { icon: "⏸️", title: "Técnica STOP", desc: "Si te bloqueas: Para → Respira → Observa la pregunta → Procede con calma." },
  { icon: "⏭️", title: "No te atasques", desc: "Pregunta difícil → Pasa a la siguiente y vuelve después." },
  { icon: "👀", title: "Lee 2 veces", desc: "1ª para entender, 2ª para confirmar. Muchos errores son por leer rápido." },
  { icon: "🌙", title: "La noche antes", desc: "NO estudies. Duerme bien, cena ligero. Tu cerebro necesita descanso." },
  { icon: "⏰", title: "Llega 15 min antes", desc: "Así te familiarizas con el lugar y reduces el estrés de última hora." },
  { icon: "🎧", title: "El examen tiene audio", desc: "Las preguntas se leen en voz alta con auriculares. ¡Úsalo a tu favor!" },
];
