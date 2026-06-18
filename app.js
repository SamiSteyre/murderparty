/* ==========================================================================
   MOCK DATABASES & CONSTANTS
   ========================================================================== */

/// 16 Suspect Characters profile templates
const CHARACTER_TEMPLATES = [
    {
        name: "Mlle Rose",
        role: "Invitée Mystère",
        marker: "Une plume de boa pourpre parfumée",
        bio: "Fille unique d'un richissime industriel de la sidérurgie, Mlle Rose est une jeune femme d'une beauté magnétique et d'une intelligence redoutable. Élevée dans les salons les plus huppés, elle a pourtant choisi de voyager sous un pseudonyme incognito afin d'échapper au contrôle étouffant de sa famille et à un mariage arrangé. Mais derrière son assurance mondaine et ses rires charmants se cache une vérité bien plus sombre. La veille du drame, Rose a découvert par hasard des lettres secrètes révélant qu'elle est en réalité la fille biologique illégitime de la victime, et que ce dernier, par pur cynisme, l'a déshéritée de toute sa fortune au profit d'une obscure fondation caritative. Blessée dans son amour propre et terrifiée par la ruine qui la guette si son identité est révélée, elle est venue au domaine pour exiger des comptes et subtiliser des titres de propriété compromettants.",
        relation: "Elle est la fille biologique illégitime de la victime, qui l'a déshéritée la veille.",
        alibi: "Elle prétend s'être reposée dans le Grand Salon au moment du crime.",
        genre: "Femme",
        secret: "A dérobé des bijoux de famille dans le bureau de la victime quelques heures avant le drame.",
        outfit: "Une robe fourreau fluide en satin pourpre drapée, ornée de sequins scintillants, complétée par son boa en plumes assorti et de longs gants en satin noir.",
        chronology: "18:30 - Entrée dans la Bibliothèque ; 19:15 - Discussion avec la victime dans le Grand Salon ; 20:45 - Cache des bijoux de famille dérobés dans le Bureau ; 21:30 - Repos simulé dans le Grand Salon"
    },
    {
        name: "Colonel Moutarde",
        role: "Officier à la retraite",
        marker: "Une médaille militaire rayée",
        bio: "Héros de guerre décoré sur de nombreux champs de bataille coloniaux, le Colonel Moutarde est un officier à la retraite fier, guindé et au tempérament notoirement impulsif. Homme d'action habitué à ce qu'on lui obéisse au doigt et à l'œil, il supporte très mal la contradiction. Cependant, son prestige et ses nombreuses médailles reposent sur un secret honteux : lors d'une campagne militaire décisive il y a vingt ans, pris de panique, il a déserté son poste et causé la perte de son unité, avant de travestir la vérité pour passer pour un héros. La victime, qui menait des enquêtes historiques pour un livre de mémoires, a fini par découvrir les registres originaux de l'armée et faisait chanter le Colonel depuis des mois. Poussé à bout par ce chantage incessant qui menaçait de détruire sa réputation et de le mener en conseil de guerre, Moutarde a eu une altercation violente avec la victime dans son bureau.",
        relation: "La victime détenait des preuves compromettantes de sa trahison passée.",
        alibi: "Il lisait un ouvrage d'histoire militaire dans la Bibliothèque.",
        genre: "Homme",
        secret: "A falsifié ses états de service militaire pour dissimuler une ancienne désertion.",
        outfit: "Un costume militaire d'apparat en laine moutarde officieux, boutonné jusqu'au col avec des épaulettes dorées usées et sa médaille froissée sur la poitrine.",
        chronology: "18:45 - Arrivée au vestibule ; 19:30 - Entrevue orageuse dans le Bureau avec la victime ; 20:15 - Lecture dans la Bibliothèque ; 21:45 - Perte de sa montre à gousset"
    },
    {
        name: "Madame Pervenche",
        role: "Amie d'enfance",
        marker: "Un étui à cigarettes en nacre",
        bio: "Veuve d'un diplomate influent, Madame Pervenche est une femme d'une élégance rare, respectée de tous et très active au sein de la haute société. Elle gère plusieurs œuvres de charité prestigieuses. Cependant, derrière sa façade impeccable se cache une mère désespérée : son fils unique s'est lourdement endetté auprès de usuriers impitoyables après des investissements désastreux. Pour le soustraire aux menaces de mort, elle a détourné d'importantes sommes d'argent des caisses de sa fondation caritative. La victime, amie d'enfance de Pervenche et donatrice majeure, a découvert cette fraude financière massive. Au lieu de la dénoncer immédiatement, elle a exercé sur elle un chantage psychologique pervers pour l'obliger à lui céder ses parts dans une affaire immobilière. Au bord du gouffre émotionnel, Pervenche errait dans le manoir, cherchant une issue à ce piège mortel.",
        relation: "La victime faisait chanter son fils unique au sujet d'une dette colossale.",
        alibi: "Elle préparait une infusion de camomille dans la Cuisine.",
        genre: "Femme",
        secret: "A souscrit un emprunt illégal auprès d'un usurier mafieux pour couvrir les dettes de son fils.",
        outfit: "Une élégante robe de velours bleu pervenche à taille basse avec des bordures en dentelle blanche, accompagnée d'un chapeau cloche et d'un collier de perles.",
        chronology: "19:00 - Entrée au Manoir ; 19:45 - Discussion confidentielle avec son fils ; 20:30 - Préparation d'une camomille dans la Cuisine ; 21:15 - Signature d'un contrat financier"
    },
    {
        name: "Professeur Violet",
        role: "Chercheur en chimie",
        marker: "Un carnet de notes à reliure violette",
        bio: "Esprit scientifique brillant mais incompris, le Professeur Violet enseigne la chimie organique à l'université tout en menant des recherches novatrices sur les composés toxiques de synthèse. Homme distant, froid et obsessionnel, il accorde plus d'importance à ses équations qu'aux relations humaines. Récemment, Violet a mis au point un brevet révolutionnaire pour un médicament de synthèse, mais la victime, qui finançait en sous-main son laboratoire universitaire, s'est appropriée illégalement l'exclusivité des droits d'exploitation commerciale, le dépouillant de la gloire et de la fortune qui lui revenaient de droit. Fou de rage de s'être fait voler le travail de toute une vie, Violet est venu au domaine avec la ferme intention de récupérer ses notes originales de laboratoire et de se venger de cette spoliation intolérable.",
        relation: "La victime a volé ses brevets scientifiques pour faire fortune.",
        alibi: "Il faisait des prélèvements dans son bureau temporaire.",
        genre: "Homme",
        secret: "A volé des substances chimiques classées secrètes dans le laboratoire de l'université.",
        outfit: "Un complet trois-pièces sombre en tweed violet de coupe austère, légèrement taché d'encre et de produits chimiques aux poignets, avec un nœud papillon de travers.",
        chronology: "18:30 - Installation dans le Bureau temporaire ; 19:15 - Disparition de brevets de la victime ; 20:30 - Prélèvements chimiques dans la Cuisine ; 21:00 - Vol de substances dans le laboratoire"
    },
    {
        name: "Madame Leblanc",
        role: "Gouvernante en chef",
        marker: "Un trousseau de clés en laiton usé",
        bio: "Au service de la famille de la victime depuis plus de trente ans, Madame Leblanc est la gardienne silencieuse de tous les secrets du manoir. Gouvernante zélée au port altier, elle connaît chaque passage dérobé, chaque clé et chaque trahison qui s'est déroulée entre ces murs. Dévouée et protectrice envers sa famille, elle cache cependant un ressentiment féroce contre son employeur : ce dernier a injustement renvoyé sa fille unique sous un faux prétexte d'indiscrétion, la jetant dans la misère et la détresse psychologique. Pour protéger sa fille activement recherchée par la police locale pour un vol qu'elle clame n'avoir pas commis, Madame Leblanc l'a secrètement cachée dans les combles poussiéreux du manoir, risquant la prison pour complicité afin de réparer l'injustice commise par son tyrannique patron.",
        relation: "Elle protège sa fille, qui a été renvoyée injustement par la victime.",
        alibi: "Elle rangeait le linge de maison dans la lingerie.",
        genre: "Femme",
        secret: "A aidé sa fille à fuir la police en la cachant temporairement dans les combles du manoir.",
        outfit: "Une tenue de gouvernante traditionnelle rigide noire en coton épais, couverte par un tablier blanc empesé impeccablement propre, et son trousseau de clés à la ceinture.",
        chronology: "18:00 - Prise de service ; 19:00 - Dissimulation de sa fille dans les combles ; 20:30 - Rangement du linge dans la lingerie ; 21:30 - Ronde suspecte près du Bureau"
    },
    {
        name: "Monsieur Lenoir",
        role: "Médecin de famille",
        marker: "Un stéthoscope ancien argenté",
        bio: "Praticien réputé de la haute bourgeoisie et ami proche de la victime, le docteur Lenoir est un homme d'une grande discrétion professionnelle. Confident intime des pathologies les plus honteuses de la noblesse locale, il cache pourtant une addiction destructrice au jeu d'argent, qui l'a mené à accumuler des dettes monumentales. Pour éviter le déshonneur public et la faillite, Lenoir a falsifié des prescriptions médicales et livré des substances opiacées hautement toxiques à la victime, qui s'en servait pour son usage personnel ou pour empoisonner discrètement ses rivaux. La victime, qui le tenait fermement à sa merci grâce à cette complicité criminelle, continuait d'exiger des doses de plus en plus dangereuses, le poussant dans ses derniers retranchements déontologiques.",
        relation: "Il a fourni des substances illégales à la victime sous la contrainte.",
        alibi: "Il rédigeait des ordonnances dans le Jardin d'Hiver.",
        genre: "Homme",
        secret: "A prescrit des substances interdites à des membres influents de la haute société.",
        outfit: "Une redingote noire classique et bien coupée sur un gilet de soie sombre, un col cassé rigide avec une cravate sombre, exhalant une odeur discrète d'éther.",
        chronology: "18:45 - Arrivée au chevet de la victime ; 19:30 - Livraison forcée de substances toxiques ; 20:15 - Rédaction d'ordonnances dans le Jardin d'Hiver ; 21:30 - Constat du décès"
    },
    {
        name: "Dr Orchid",
        role: "Biologiste et botaniste",
        marker: "Une orchidée séchée dans sa poche",
        bio: "Brillante chercheuse d'origine asiatique spécialisée dans les plantes vénéneuses tropicales, le Dr Orchid est une personne d'une grande réserve, qui ne vit que pour ses expériences scientifiques. Elle a été adoptée par la famille de la victime après la disparition de ses parents biologiques dans des circonstances tragiques. Récemment, Orchid a découvert que la victime, son tuteur et mécène, comptait fermer ses serres expérimentales de recherche pour y construire des entrepôts industriels lucratifs. Pire encore, elle a appris que la victime était impliquée dans la ruine de ses propres parents. Pour financer ses recherches et sauver ses précieuses variétés d'orchidées vénéneuses, elle a contourné les conventions sanitaires en important clandestinement des spécimens hautement toxiques.",
        relation: "La victime menaçait de fermer ses laboratoires de recherche.",
        alibi: "Elle examinait les plantes dans la Serre principale.",
        genre: "Non-Binaire",
        secret: "A importé clandestinement des graines d'orchidées vénéneuses interdites par la convention sanitaire.",
        outfit: "Un costume de voyage fonctionnel en lin beige clair avec des poches renforcées pour les herbiers, et un foulard de soie sauvage vert sauge autour du cou.",
        chronology: "18:30 - Visite des serres ; 19:30 - Examen secret des orchidées toxiques ; 20:15 - Importation suspecte de graines interdites ; 21:00 - Passage rapide en cuisine"
    },
    {
        name: "Inspecteur Adams",
        role: "Détective invité",
        marker: "Une loupe à manche d'ébène",
        bio: "Détective chevronné de Scotland Yard approchant de la retraite, l'Inspecteur Adams est un homme fatigué, désabusé par les travers de la nature humaine, mais doté d'un sens aigu de l'observation. Invité par la victime en tant qu'ami de longue date sous prétexte de fêter un anniversaire, Adams était en réalité là pour mener une surveillance discrète sur les invités du manoir. Ce que son hôte ignorait, c'est qu'Adams menait secrètement une enquête interne sur des malversations financières massives impliquant la victime elle-même. Mais le détective a aussi ses faiblesses : il a récemment effacé des pièces à conviction pour couvrir un de ses informateurs de longue date qui l'avait aidé à résoudre des affaires criminelles majeures, le plaçant à la limite de la légalité.",
        relation: "Il menait une enquête secrète sur les affaires frauduleuses de la victime.",
        alibi: "Il fumait sa pipe sur la terrasse arrière.",
        genre: "Homme",
        secret: "A effacé des preuves liant un de ses informateurs à un cambriolage récent.",
        outfit: "Un pardessus en gabardine marron froissé porté sur un costume gris fatigué, un chapeau de feutre mou enfoncé et des chaussures de cuir cirées mais usées.",
        chronology: "19:00 - Arrivée discrète pour surveiller ; 20:00 - Surveillance de l'arrière-boutique ; 21:00 - Pause pipe sur la terrasse arrière ; 21:45 - Entrée sur la scène de crime"
    },
    {
        name: "Baptiste le Valet",
        role: "Majordome particulier",
        marker: "Un gant blanc taché de cire",
        bio: "Froid, méticuleux et doté d'un professionnalisme à toute épreuve, Baptiste est le majordome personnel de la victime depuis dix ans. Chargé d'orchestrer la domesticité d'une main de fer, il est le témoin quotidien des extravagances et du mépris de son employeur. Sous son apparence dévouée, Baptiste nourrit une haine sourde et tenace envers son patron. Peu avant le meurtre, Baptiste a été surpris par la victime alors qu'il volait des parures de bijoux dans le coffre-fort du boudoir pour rembourser des dettes de jeu. Menacé d'être dénoncé à la police et envoyé au bagne s'il ne continuait pas à accomplir des basses besognes pour son maître sans broncher, Baptiste s'est retrouvé acculé, cherchant un moyen radical de faire taire son maître définitivement.",
        relation: "Il a été surpris en train de voler des bijoux par la victime juste avant le meurtre.",
        alibi: "Il servait des boissons dans le grand vestibule.",
        genre: "Homme",
        secret: "A volé de l'argenterie fine du domaine pour la revendre à un receleur local.",
        outfit: "Une livrée de valet noire classique comprenant un frac ajusté, un gilet blanc rayé de gris et ses emblématiques gants blancs en coton fin.",
        chronology: "18:00 - Service des boissons dans le Vestibule ; 19:15 - Vol d'une ménagère en argent ; 20:30 - Recel dans les buissons ; 21:45 - Nettoyage suspect d'une bougie"
    },
    {
        name: "Rosa la Cantatrice",
        role: "Artiste lyrique",
        marker: "Un éventail en dentelle noire",
        bio: "Artiste lyrique acclamée sur toutes les scènes d'Europe, Rosa est une diva excentrique, habituée à être le centre d'attention générale. Mais derrière le faste de ses costumes de scène se cache un secret tragique : à la suite d'une grave infection des cordes vocales, Rosa a perdu sa voix d'or et chante désormais en playback lors de ses concerts, grâce à une doublure dissimulée. La victime, qui était son principal producteur de spectacles, a fini par découvrir la supercherie lors d'une répétition privée. Il menaçait de ruiner définitivement sa carrière et sa réputation en révélant publiquement ce scandale si elle ne lui cédait pas la totalité des droits sur ses œuvres passées. Prise de panique face à cette ruine professionnelle imminente, Rosa est venue au domaine pour tenter d'obtenir un compromis par le chantage.",
        relation: "La victime menaçait de briser sa carrière en révélant sa perte de voix.",
        alibi: "Elle s'échauffait la voix dans la Salle de Musique.",
        genre: "Femme",
        secret: "Chante en playback lors de ses concerts officiels pour cacher son extinction de voix.",
        outfit: "Une somptueuse robe de cocktail noire ornée de perles de jais scintillantes, une étole en fourrure sur les épaules et son éventail en dentelle noire.",
        chronology: "19:00 - Arrivée mondaine ; 19:45 - Chantage subi de la part de la victime ; 20:30 - Échauffement de la voix dans la Salle de Musique ; 21:15 - Perte de son éventail"
    },
    {
        name: "Gaston le Cuisinier",
        role: "Chef de cuisine",
        marker: "Un couteau d'office très affûté",
        bio: "Chef cuisinier de renommée internationale, Gaston est un homme colérique, pointilleux et passionné jusqu'à l'obsession par les arts culinaires et les épices rares. Travaillant pour la victime depuis plusieurs années, il supporte de moins en moins les critiques blessantes de son employeur. Le matin même du crime, à la suite d'un banquet gâché par l'utilisation accidentelle d'ingrédients avariés masqués par des épices fortes, Gaston a eu une violente altercation avec la victime. Cette dernière l'a menacé de le licencier sur-le-champ sans indemnités de départ et de détruire son nom dans les guides gastronomiques. Gaston, dont la réputation est la seule raison de vivre, s'est senti humilié au plus haut point et s'est réfugié dans ses cuisines avec ses couteaux aiguisés.",
        relation: "La victime s'apprêtait à le licencier sans indemnités après un scandale.",
        alibi: "Il préparait le dessert de minuit dans la Cuisine.",
        genre: "Homme",
        secret: "A utilisé des ingrédients avariés maquillés avec des épices fortes lors du grand banquet.",
        outfit: "Une veste de double boutonnage blanche traditionnelle en sergé de coton lourd avec son nom brodé, un tablier de chef noir et un pantalon à carreaux.",
        chronology: "17:30 - Début de préparation du banquet ; 19:00 - Utilisation de produits avariés masqués ; 20:30 - Menace de licenciement par la victime ; 21:45 - Affûtage de son couteau de cuisine"
    },
    {
        name: "Jeanne la Secrétaire",
        role: "Assistante personnelle",
        marker: "Un poudrier en or ciselé",
        bio: "Secrétaire personnelle de la victime depuis deux ans, Jeanne gère son emploi du temps professionnel ainsi que sa correspondance privée. Jeune femme ambitieuse et d'apparence réservée, elle dissimule une dépendance maladive aux jeux d'argent clandestins. Pour éponger ses dettes colossales contractées dans des tripots parisiens, Jeanne a falsifié les comptes de la fondation caritative gérée par son patron et détourné des sommes considérables. La victime a récemment découvert ces malversations comptables et a convoqué Jeanne au domaine pour la confronter. Menacée d'être livrée aux autorités et d'être traînée en justice, Jeanne a cherché désespérément à négocier son silence ou à subtiliser les preuves de son détournement de fonds.",
        relation: "Elle avait détourné des fonds et la victime s'en était rendu compte.",
        alibi: "Elle tapait des lettres confidentielles dans le Boudoir.",
        genre: "Femme",
        secret: "A falsifié les comptes de la fondation pour financer sa dépendance aux jeux d'argent.",
        outfit: "Un ensemble jupe et veste ajusté en laine grise de coupe moderne et professionnelle, un chemisier en mousseline blanche fermée par une broche dorée.",
        chronology: "18:00 - Classement de courriers ; 19:30 - Détournement de fonds sur les registres ; 20:30 - Rédaction de lettres dans le Boudoir ; 21:15 - Dissimulation d'un chèque"
    },
    {
        name: "Dupuis l'Avocat",
        role: "Conseiller juridique",
        marker: "Un stylo plume à plume d'or",
        bio: "Conseiller juridique et homme de confiance de la victime, Dupuis est un avocat cynique, froid et opportuniste, habitué à manier les lois à son seul avantage. Récemment, il a falsifié le dernier testament de son client afin d'y insérer une clause lui léguant une partie importante du patrimoine immobilier de la victime, censée être destinée à des œuvres de bienfaisance. Malheureusement pour lui, la victime a découvert cette manœuvre frauduleuse quelques heures avant la soirée et comptait révoquer son testament en public pour le dénoncer au barreau. Terrifié à l'idée de perdre son cabinet d'avocats et d'être condamné pour faux en écriture publique, Dupuis s'est rendu au manoir avec la ferme intention d'étouffer l'affaire à tout prix.",
        relation: "Il a falsifié le dernier testament de la victime à son avantage.",
        alibi: "Il révisait des documents légaux dans le petit salon.",
        genre: "Homme",
        secret: "A rédigé un faux testament pour un autre client décédé le mois dernier.",
        outfit: "Un costume trois-pièces anthracite impeccable sur une chemise d'un blanc éclatant, une cravate de soie noire et des boutons de manchette en or.",
        chronology: "18:30 - Relecture de testaments ; 19:30 - Falsification d'une clause successorale ; 20:45 - Consultation de dossiers dans le Petit Salon ; 21:30 - Témoin d'une dispute"
    },
    {
        name: "Agatha la Romancière",
        role: "Auteure de romans policiers",
        marker: "Un mini calepin en cuir usé",
        bio: "Célèbre auteure de romans de gare à suspense, Agatha est toujours à la recherche d'une intrigue palpitante pour son prochain best-seller. Invitée au manoir par commodité mondaine, elle observe d'un œil de lynx les moindres secrets et faiblesses des invités. Son hôte principal lui servait secrètement de modèle pour le personnage d'un parrain de la mafia cynique et corrompu. Mais Agatha cache elle-même un lourd secret littéraire : en panne totale d'inspiration depuis deux ans, elle a plagié l'intrigue et les personnages de son dernier roman à succès à partir du manuscrit d'un confrère décédé, dérobé lors de sa veillée funèbre. La victime avait découvert cette imposture littéraire et la faisait chanter, menaçant de révéler publiquement les preuves de son plagiat.",
        relation: "La victime lui servait de modèle pour le rôle du coupable détestable.",
        alibi: "Elle observait discrètement les invités depuis la mezzanine.",
        genre: "Femme",
        secret: "A plagié l'intrigue de son best-seller à partir du journal intime volé d'un confrère.",
        outfit: "Une robe en crêpe vert émeraude à motifs géométriques Art Déco, un bandeau assorti dans les cheveux et un sautoir en perles.",
        chronology: "18:45 - Observation des invités depuis la mezzanine ; 19:30 - Vol du journal intime de Dupuis ; 20:45 - Prise de notes dans la Bibliothèque ; 21:30 - Découverte de la scène du crime"
    },
    {
        name: "Pierre le Jardinier",
        role: "Jardinier du domaine",
        marker: "Un sécateur rouillé dans l'étui",
        bio: "Homme taciturne, bourru et très proche de la nature, Pierre travaille sur le domaine de la victime depuis plus de quinze ans. Pour lui, la terre et le jardin historique du manoir représentent toute sa vie. Récemment, la victime a annoncé son intention de faire raser la totalité du jardin botanique et de la vieille serre tropicale pour y construire un garage moderne et une allée en béton. Prêt à tout pour empêcher ce massacre écologique, Pierre a eu un violent différend avec son employeur. De plus, pour soigner sa femme gravement malade, Pierre cultive en secret des plantes hallucinogènes et médicinales interdites dans une parcelle isolée des serres du domaine, un trafic illégal que son patron menaçait de dénoncer à la gendarmerie locale.",
        relation: "La victime voulait raser son jardin historique pour construire un garage.",
        alibi: "Il taillait les rosiers grimpants dans la Cour d'honneur.",
        genre: "Homme",
        secret: "Cultive des plantes hallucinogènes interdites dans un recoin caché de la serre.",
        outfit: "Une veste de travail en velours côtelé marron épais usée aux coudes, un pantalon en toile de jute et des bottes de cuir boueuses.",
        chronology: "18:00 - Entretien des extérieurs ; 19:00 - Récolte de plantes hallucinogènes ; 20:00 - Conflit avec la victime au Jardin ; 21:15 - Abandon d'un sécateur rouillé"
    },
    {
        name: "Clara la Journaliste",
        role: "Reporter d'investigation",
        marker: "Un carnet de presse jaune vif",
        bio: "Reporter d'investigation téméraire et passionnée, Clara travaille pour un grand quotidien indépendant. Toujours à la recherche d'un scandale politique ou financier, elle s'est introduite au manoir sous une fausse identité d'invitée mondaine. Clara s'apprêtait à publier un dossier d'enquête accablant révélant des cas de fraude fiscale massive et d'évasion de capitaux orchestrés par la victime en complicité avec des politiciens influents. Pour obtenir les preuves décisives et les relevés bancaires secrets stockés dans le bureau du manoir, elle a piraté les messageries privées de son hôte. Découverte par la victime peu avant le drame, elle a été menacée d'un procès retentissant et d'une incarcération pour espionnage industriel.",
        relation: "Elle s'apprêtait à publier un article accablant sur les fraudes de la victime.",
        alibi: "Elle prend des notes discrètes près du vestiaire.",
        genre: "Non-Binaire",
        secret: "A piraté la boîte mail privée de la victime pour obtenir des scoops exclusifs.",
        outfit: "Un pantalon de costume large en tweed brun et une chemise d'homme à col ouvert sous une veste en cuir patiné, pratique pour se faufiler partout.",
        chronology: "18:30 - Infiltration sous fausse identité ; 19:15 - Piratage de la boîte mail de la victime ; 20:30 - Prise de notes près du Vestiaire ; 21:30 - Fuite suspecte par le jardin"
    }
];

// List of rooms with potential clues
const ROOMS_DB = {
    "Le Grand Salon": [
        { name: "Verre de champagne brisé", description: "Une flûte en cristal gît en morceaux sous une table. Une légère odeur d'amande amère s'en dégage.", type: "Fouille de Pièce" },
        { name: "Foulard en soie égaré", description: "Un luxueux foulard en soie monogrammé 'R', coincé dans la charnière d'un fauteuil.", type: "Fouille de Pièce" },
        { name: "Cendrier tiède", description: "Contient des cendres de cigares haut de gamme importés, identiques à ceux du Colonel.", type: "Fouille de Pièce" }
    ],
    "La Bibliothèque": [
        { name: "Livre d'alchimie déplacé", description: "Un ouvrage poussiéreux sur les poisons végétaux est posé à l'envers sur une étagère.", type: "Fouille de Pièce" },
        { name: "Lettre de chantage déchirée", description: "Des morceaux de papier révélant une demande de rançon de 100 000 francs.", type: "Fouille de Pièce" },
        { name: "Montre à gousset cassée", description: "Une montre dont le verre est brisé, arrêtée précisément sur 21h45.", type: "Fouille de Pièce" }
    ],
    "La Cuisine": [
        { name: "Fiole d'Arsenic vide", description: "Un flacon d'apothicaire caché au fond du placard à épices. L'étiquette mentionne 'Arsenic'.", type: "Fouille de Pièce" },
        { name: "Couteau de cuisine manquant", description: "Un emplacement est vide dans le bloc de couteaux du chef Gaston.", type: "Fouille de Pièce" },
        { name: "Tisanière encore chaude", description: "Une tasse de camomille entamée, contenant des résidus de poudre blanche.", type: "Fouille de Pièce" }
    ],
    "Le Jardin d'Hiver": [
        { name: "Terre meuble suspecte", description: "La terre d'une grande plante verte semble avoir été retournée récemment. Quelque chose y est enfoui.", type: "Fouille de Pièce" },
        { name: "Clé dorée", description: "Une petite clé en laiton retrouvée sous un pot de fleur. Elle semble ouvrir un tiroir secret.", type: "Fouille de Pièce" },
        { name: "Traces de pas boueuses", description: "Des empreintes menant de la porte vitrée vers le fauteuil du fond.", type: "Fouille de Pièce" }
    ],
    "La Chambre de la Victime": [
        { name: "Coffre-fort ouvert", description: "Le coffre dissimulé derrière le tableau est grand ouvert. Il est vide de tout document légal.", type: "Fouille de Pièce" },
        { name: "Dernier Testament", description: "Un brouillon de testament déshéritant les proches de la victime au profit d'une œuvre caritative.", type: "Fouille de Pièce" },
        { name: "Chemise ensanglantée", description: "Une chemise d'homme froissée portant des taches de sang, dissimulée dans le panier à linge.", type: "Fouille de Pièce" }
    ],
    "La Cave à Vins": [
        { name: "Bouteille de grand cru entamée", description: "Un château Margaux 1918 ouvert, contenant des traces de sédatif liquide.", type: "Fouille de Pièce" },
        { name: "Mégot de cigarette pourpre", description: "Un mégot de cigarette portant une trace de rouge à lèvres rouge vif.", type: "Fouille de Pièce" },
        { name: "Bouton de manchette en or", description: "Un bouton gravé d'un blason militaire, perdu près des casiers de Bourgogne.", type: "Fouille de Pièce" }
    ]
};

// Default suggested onboarding character traits
const SUGGESTED_TRAITS = ["Calculateur", "Menteur", "Observateur", "Froid", "Manipulateur", "Nerveux", "Silencieux", "Arrogant"];

// Suggestion lists for Scenario Wizard
const THEME_SUGGESTIONS = [
    "Chic & Mafia (Années 20)",
    "Prohibition & Speakeasy",
    "Manoir Gothique & Vampires",
    "Cyberpunk & Néon Noir",
    "Space Opera & Vaisseau Perdu",
    "Pirates & Île Maudite",
    "Égypte Antique & Malédiction",
    "Far West & Saloon Clandestin",
    "Années 80 & Club Disco",
    "Steampunk & Cités Volantes",
    "Hollywood Vintage (Années 50)",
    "Carnaval Vénitien",
    "Asile Psychiatrique Rétro",
    "Orient-Express & Espionnage",
    "Cabaret Parisien (Belle Époque)",
    "Post-Apocalyptique & Survivants",
    "Ordre Médiéval & Templiers",
    "Université d'Élite & Société Secrète",
    "Station Polaire Isolée",
    "Tournage de Film d'Horreur"
];

const EPOCH_SUGGESTIONS = [
    "Antiquité (Égypte, Rome)",
    "Moyen-Âge (Châteaux)",
    "Renaissance (Florence)",
    "Siècle des Lumières (XVIIIe)",
    "Époque Victorienne (1890)",
    "Années Folles (1920)",
    "Seconde Guerre Mondiale (1940)",
    "Années Rock (1950)",
    "Années Disco (1970/80)",
    "Époque Contemporaine (Présent)",
    "Futur Proche (Dystopie)",
    "Futur Lointain (Galaxies)",
    "Uchronie Steampunk",
    "Époque Indéterminée"
];

const PITCH_SUGGESTIONS = [
    "Une histoire d'amour qui tourne mal",
    "Une vengeance froide et préparée",
    "Une trahison familiale pour héritage",
    "Un chantage politique compromettant",
    "Un espionnage industriel raté",
    "Une jalousie artistique mortelle",
    "Une malédiction ésotérique ancestrale",
    "Un vol de relique ayant dérapé",
    "Un pacte secret rompu entre associés",
    "Un règlement de comptes mafieux",
    "Une fausse identité démasquée",
    "Un double jeu d'un agent infiltré",
    "Une dette de jeu impayable",
    "Une expérience scientifique interdite",
    "Une affaire étouffée par la justice",
    "Une usurpation d'identité",
    "Un secret d'État sur le point d'être vendu",
    "Une rivalité fraternelle féroce",
    "Une vengeance pour un crime passé",
    "Un rituel ésotérique ayant dérapé"
];

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let appState = {
    currentUser: null, // { email, role }
    scenario: null,    // { id, title, theme, pitch, crimeRoom, cluesCount }
    session: null,     // { id, name, location, totalClues, pointsPerPlayer, status }
    players: [],       // Array of 16 players
    clues: [],         // Global clues state
    logs: [],          // Live feed logs
    loginStep: 'email',// 'email' | 'otp'
    pendingEmail: '',  // email input in progress
    mockOtp: '',       // generated OTP code for mock testing
    n8nBaseUrl: 'http://localhost:5678', // default n8n Base URL
    orgaView: 'landing', // Track active organizer view
    resumeFormUrl: '',   // URL to resume scenario generation form in n8n
    pendingScenarioId: '' // Scenario ID currently being generated
};

// Load State from LocalStorage
function loadPersistedState() {
    const saved = localStorage.getItem('mp_engine_state');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch(e) {
            console.error("Failed to load local state", e);
        }
    }
    appState.n8nBaseUrl = 'http://localhost:5678'; // Hardcoded to run "for real" on localhost:5678
}

// Save State to LocalStorage
function savePersistedState() {
    localStorage.setItem('mp_engine_state', JSON.stringify(appState));
}

/* ==========================================================================
   NAVIGATION & VIEW ROUTING
   ========================================================================== */
function routeApp() {
    const loginScreen = document.getElementById('loginScreen');
    const appShell = document.getElementById('appShell');
    const organizerView = document.getElementById('organizerView');
    const playerView = document.getElementById('playerView');
    const playerOnboarding = document.getElementById('playerOnboarding');
    const playerDashboard = document.getElementById('playerDashboard');

    if (!appState.currentUser) {
        // Show Login Screen
        loginScreen.classList.remove('hidden');
        appShell.classList.add('hidden');

        // Manage OTP step vs Email step
        const loginEmailStep = document.getElementById('loginEmailStep');
        const loginOtpStep = document.getElementById('loginOtpStep');
        if (appState.loginStep === 'otp') {
            loginEmailStep.classList.add('hidden');
            loginOtpStep.classList.remove('hidden');
            document.getElementById('sentOtpEmailDisplay').textContent = appState.pendingEmail;
            document.getElementById('loginOtp').setAttribute('required', 'true');
            document.getElementById('loginOtp').focus();
        } else {
            loginEmailStep.classList.remove('hidden');
            loginOtpStep.classList.add('hidden');
            document.getElementById('loginOtp').removeAttribute('required');
        }
        return;
    }

    // Show App Shell
    loginScreen.classList.add('hidden');
    appShell.classList.remove('hidden');

    // Update Header
    document.getElementById('currentUserEmail').textContent = appState.currentUser.email;
    const roleBadge = document.getElementById('roleBadge');
    
    if (appState.currentUser.role === 'organizer') {
        // Organizer Route
        organizerView.classList.remove('hidden');
        playerView.classList.add('hidden');
        
        roleBadge.textContent = "Organisateur";
        roleBadge.className = "px-3 py-1 text-2xs uppercase tracking-widest font-black rounded-full border border-gold text-gold bg-gold/5";
        
        renderOrganizerDashboard();
    } else {
        // Player Route
        organizerView.classList.add('hidden');
        playerView.classList.remove('hidden');
        
        roleBadge.textContent = "Suspect / Joueur";
        roleBadge.className = "px-3 py-1 text-2xs uppercase tracking-widest font-black rounded-full border border-blood text-blood bg-blood/5";

        // Find Player in session
        const player = getActivePlayer();
        if (!player) {
            showToast("Session non active", "Vous ne faites pas partie de la liste des invités ou aucune session n'est lancée.", "error");
            logout();
            return;
        }

        if (!player.avatarUrl) {
            // Step 1: Onboarding
            playerOnboarding.classList.remove('hidden');
            playerDashboard.classList.add('hidden');
            renderPlayerOnboarding();
        } else {
            // Step 2: Dashboard Game Loop
            playerOnboarding.classList.add('hidden');
            playerDashboard.classList.remove('hidden');
            renderPlayerDashboard(player);
        }
    }
}

function getActivePlayer() {
    if (!appState.currentUser || appState.currentUser.role !== 'player') return null;
    return appState.players.find(p => p.email === appState.currentUser.email);
}

/* ==========================================================================
   ORGANIZER DASHBOARD RENDERING
   ========================================================================== */
function renderOrganizerDashboard() {
    const landingPanel = document.getElementById('orgaLandingPanel');
    const creationPanel = document.getElementById('sessionCreationPanel');
    const generatedPanel = document.getElementById('scenarioGeneratedPanel');
    const activePanel = document.getElementById('sessionActivePanel');
    
    if (!appState.orgaView) {
        appState.orgaView = 'landing';
    }

    // 1. Toggle panels visibility based on appState.orgaView
    if (appState.orgaView === 'landing') {
        if (landingPanel) landingPanel.classList.remove('hidden');
        if (creationPanel) creationPanel.classList.add('hidden');
        if (generatedPanel) generatedPanel.classList.add('hidden');
        if (activePanel) activePanel.classList.add('hidden');

        // Show active session button only if session exists and is not 'A initier'
        const activeBtn = document.getElementById('orgaActiveSessionBtn');
        if (activeBtn) {
            const hasActive = appState.session && appState.session.status && appState.session.status !== 'A initier';
            if (hasActive) {
                activeBtn.classList.remove('hidden');
            } else {
                activeBtn.classList.add('hidden');
            }
        }
    } else if (appState.orgaView === 'create') {
        if (landingPanel) landingPanel.classList.add('hidden');
        if (creationPanel) creationPanel.classList.remove('hidden');
        if (generatedPanel) generatedPanel.classList.add('hidden');
        if (activePanel) activePanel.classList.add('hidden');

        // Stylize creation sub-buttons based on scenarioMode state
        const modeInput = document.getElementById('scenarioMode');
        const createBtnCard = document.getElementById('orgaBtnCreateScenarioOption');
        const selectBtnCard = document.getElementById('orgaBtnSelectScenarioOption');
        const formContainer = document.getElementById('unifiedSessionForm');
        const createFields = document.getElementById('createScenarioFormFields');
        const selectFields = document.getElementById('selectScenarioFormFields');
        const submitBtn = document.getElementById('unifiedSubmitBtn');

        if (modeInput && modeInput.value) {
            if (formContainer) formContainer.classList.remove('hidden');
            if (modeInput.value === 'create') {
                if (createBtnCard) createBtnCard.className = "orga-option-card active p-6 rounded-xl text-center space-y-2";
                if (selectBtnCard) selectBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
                if (createFields) createFields.classList.remove('hidden');
                if (selectFields) selectFields.classList.add('hidden');
                if (submitBtn) submitBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Générer un scénario`;
            } else {
                if (createBtnCard) createBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
                if (selectBtnCard) selectBtnCard.className = "orga-option-card active p-6 rounded-xl text-center space-y-2";
                if (createFields) createFields.classList.add('hidden');
                if (selectFields) selectFields.classList.remove('hidden');
                if (submitBtn) submitBtn.innerHTML = `<i class="fa-solid fa-gears"></i> Lancer la session`;
            }
        } else {
            if (formContainer) formContainer.classList.add('hidden');
            if (createBtnCard) createBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
            if (selectBtnCard) selectBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
        }
    } else if (appState.orgaView === 'generated') {
        if (landingPanel) landingPanel.classList.add('hidden');
        if (creationPanel) creationPanel.classList.add('hidden');
        if (generatedPanel) generatedPanel.classList.remove('hidden');
        if (activePanel) activePanel.classList.add('hidden');

        // Render Generated Scenario details
        if (appState.scenario) {
            const coverImg = document.getElementById('genScenarioImage');
            if (coverImg) coverImg.src = appState.scenario.imageUrl || "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";
            document.getElementById('genScenarioTitle').textContent = appState.scenario.title;
            document.getElementById('genScenarioPitch').textContent = appState.scenario.pitch;
            const victimEl = document.getElementById('genScenarioVictim');
            if (victimEl) victimEl.textContent = appState.scenario.victim || "Non définie";
            const victimOutfitEl = document.getElementById('genScenarioVictimOutfit');
            const victimOutfitContainer = document.getElementById('genScenarioVictimOutfitContainer');
            if (victimOutfitEl && victimOutfitContainer) {
                if (appState.scenario.victimOutfit) {
                    victimOutfitEl.textContent = appState.scenario.victimOutfit;
                    victimOutfitContainer.classList.remove('hidden');
                } else {
                    victimOutfitContainer.classList.add('hidden');
                }
            }
            const chronoEl = document.getElementById('genScenarioChronology');
            if (chronoEl) chronoEl.textContent = appState.scenario.chronology || "Aucune chronologie disponible.";
        }

        // Render 16 suspects cards in grid
        const grid = document.getElementById('genCharactersGrid');
        if (grid) {
            grid.innerHTML = '';
            if (appState.players && appState.players.length > 0) {
                appState.players.forEach((p, index) => {
                    let roleBadgeClass = "bg-zinc-900 border border-zinc-700 text-zinc-400";
                    if (p.roleType === "Coupable") roleBadgeClass = "bg-red-950/40 border border-red-900/60 text-red-500 font-black";
                    if (p.roleType === "Faux-Coupable") roleBadgeClass = "bg-zinc-800/80 border border-zinc-700 text-zinc-350";

                    const card = document.createElement('div');
                    card.className = "glass-panel p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-blood/50 hover:shadow-[0_0_20px_rgba(179,11,11,0.15)] transition-all duration-300 group transform hover:-translate-y-1 relative";
                    card.innerHTML = `
                        <!-- Suspect silhouette placeholder -->
                        <div class="relative w-full aspect-[4/3] rounded-lg bg-black/45 border border-white/5 flex items-center justify-center mb-4 overflow-hidden">
                            <i class="fa-solid fa-user-secret text-3xl text-slate-700 transition-colors group-hover:text-blood"></i>
                            <div class="absolute top-2 left-2">
                                <span class="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-zinc-900 border border-zinc-700 text-zinc-400">${p.genre}</span>
                            </div>
                            <div class="absolute bottom-2 right-2">
                                <span class="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold ${roleBadgeClass}">${p.roleType}</span>
                            </div>
                        </div>
                        <div class="space-y-2 flex-1">
                            <h4 class="font-cinzel text-xs font-bold text-white tracking-wider group-hover:text-blood transition-colors">${p.roleName}</h4>
                            <p class="text-[10px] text-slate-400 leading-normal font-light line-clamp-3" title="${p.history}">${p.history}</p>
                        </div>
                        ${p.outfit ? `
                        <div class="mt-2 text-[9px] text-slate-450 border-t border-white/5 pt-2 leading-relaxed">
                            <i class="fa-solid fa-shirt text-blood/70 mr-1"></i> <span class="text-slate-350">${p.outfit}</span>
                        </div>
                        ` : ''}
                        ${p.relations && (Array.isArray(p.relations) ? p.relations.length > 0 : p.relations.trim().length > 0) ? `
                        <div class="mt-2 text-[9px] text-slate-450 border-t border-white/5 pt-2 leading-relaxed">
                            <i class="fa-solid fa-link text-blood/70 mr-1"></i> <strong class="text-slate-350">Relations :</strong>
                            <div class="text-slate-350 mt-1 pl-1 space-y-1">
                                ${Array.isArray(p.relations)
                                    ? p.relations.map(r => `<div class="pl-2 border-l border-white/10 mt-1"><strong class="text-white">${r.with}</strong> : ${r.detail}</div>`).join('')
                                    : p.relations.split('\n').map(line => `<div class="pl-2 border-l border-white/10 mt-1">${line}</div>`).join('')}
                            </div>
                        </div>
                        ` : ''}
                        <div class="mt-3 pt-2 border-t border-white/5 text-[9px] text-slate-500 uppercase font-semibold">
                            <i class="fa-solid fa-fingerprint text-blood mr-1"></i> Signature : <span class="text-white">${p.marker}</span>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            } else {
                grid.innerHTML = '<div class="col-span-full py-12 text-center text-slate-500">Aucun suspect créé pour ce scénario.</div>';
            }
        }

        // Prepopulate default 16 emails if empty
        const setupEmailsArea = document.getElementById('setupSessionEmails');
        if (setupEmailsArea && !setupEmailsArea.value.trim()) {
            const dummyEmails = Array.from({length: 16}, (_, i) => `invite${i+1}@email.com`).join('\n');
            setupEmailsArea.value = dummyEmails;
        }

        // Show/Hide forms
        document.getElementById('sessionSetupFormContainer').classList.add('hidden');
        document.getElementById('triggerSessionSetupBtnContainer').classList.remove('hidden');

    } else if (appState.orgaView === 'active') {
        if (landingPanel) landingPanel.classList.add('hidden');
        if (creationPanel) creationPanel.classList.add('hidden');
        if (generatedPanel) generatedPanel.classList.add('hidden');
        if (activePanel) activePanel.classList.remove('hidden');

        // Render Active Scenario Details
        if (appState.scenario) {
            document.getElementById('activeScenarioTitle').textContent = appState.scenario.title;
            document.getElementById('activeScenarioPitch').textContent = appState.scenario.pitch;
            document.getElementById('activeScenarioCrimeRoom').textContent = appState.scenario.crimeRoom;
            document.getElementById('activeScenarioCluesCount').textContent = appState.scenario.cluesCount;
            const victimEl = document.getElementById('activeScenarioVictim');
            if (victimEl) victimEl.textContent = appState.scenario.victim || "Non définie";
            const activeVictimOutfitEl = document.getElementById('activeScenarioVictimOutfit');
            const activeVictimOutfitContainer = document.getElementById('activeScenarioVictimOutfitContainer');
            if (activeVictimOutfitEl && activeVictimOutfitContainer) {
                if (appState.scenario.victimOutfit) {
                    activeVictimOutfitEl.textContent = appState.scenario.victimOutfit;
                    activeVictimOutfitContainer.classList.remove('hidden');
                } else {
                    activeVictimOutfitContainer.classList.add('hidden');
                }
            }
            const chronoEl = document.getElementById('activeScenarioChronology');
            if (chronoEl) chronoEl.textContent = appState.scenario.chronology || "Aucune chronologie disponible.";
        }

        // Render Session Economy Stats
        if (appState.session) {
            document.getElementById('statTotalClues').textContent = appState.session.totalClues || '--';
            document.getElementById('statPointsPerPlayer').textContent = appState.session.pointsPerPlayer || '--';
        }

        // Render Players List Table
        const tbody = document.getElementById('orgPlayersTableBody');
        if (tbody) {
            tbody.innerHTML = '';
            if (appState.players.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="4" class="py-6 text-center text-slate-500">Aucun joueur dans la session.</td>
                    </tr>
                `;
            } else {
                appState.players.forEach(p => {
                    let roleBadgeClass = "bg-slate-900 border border-slate-700 text-slate-400";
                    if (p.roleType === "Coupable") roleBadgeClass = "bg-red-950/20 border border-red-900/60 text-red-500 font-extrabold";
                    if (p.roleType === "Faux-Coupable") roleBadgeClass = "bg-slate-900 border border-slate-800 text-slate-300";

                    const tr = document.createElement('tr');
                    tr.className = "border-b border-white/5 hover:bg-noir-card/50 transition-colors";
                    tr.innerHTML = `
                        <td class="py-3 font-semibold text-slate-200">
                            <div class="flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full ${p.avatarUrl ? 'bg-blood shadow-[0_0_5px_#f59e0b]' : 'bg-red-900 animate-pulse'}" title="${p.avatarUrl ? 'Profil généré' : 'En attente d\'onboarding'}"></span>
                                ${p.roleName}
                            </div>
                        </td>
                        <td class="py-3">
                            <span class="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-zinc-900 border border-zinc-700 text-zinc-400">${p.genre || 'Non-Binaire'}</span>
                        </td>
                        <td class="py-3 font-mono text-2xs text-slate-400">${p.email}</td>
                        <td class="py-3 text-right">
                            <span class="px-2 py-0.5 text-3xs uppercase tracking-wider rounded font-semibold ${roleBadgeClass}">${p.roleType}</span>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    }
}

/* ==========================================================================
   PLAYER ONBOARDING RENDERING
   ========================================================================== */
function renderPlayerOnboarding() {
    const tagsContainer = document.getElementById('traitSuggestionTags');
    tagsContainer.innerHTML = '';
    
    SUGGESTED_TRAITS.forEach(trait => {
        const span = document.createElement('span');
        span.className = "trait-tag";
        span.textContent = trait;
        span.addEventListener('click', () => {
            span.classList.toggle('selected');
            updateTraitsInputFromTags();
        });
        tagsContainer.appendChild(span);
    });

    // File input mock interaction
    const container = document.getElementById('photoUploadContainer');
    const fileInput = document.getElementById('playerPhotoFile');
    const uploadIcon = document.getElementById('photoUploadIcon');
    const uploadText = document.getElementById('photoUploadText');

    container.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
        if (e.target.files && e.target.files[0]) {
            uploadIcon.className = "fa-solid fa-circle-check text-2xl text-gold";
            uploadText.innerHTML = `Photo sélectionnée : <span class="text-gold font-mono text-3xs">${e.target.files[0].name}</span>`;
            container.classList.add('border-gold');
        }
    };
}

function updateTraitsInputFromTags() {
    const selectedSpans = document.querySelectorAll('#traitSuggestionTags .trait-tag.selected');
    const traits = Array.from(selectedSpans).map(s => s.textContent);
    document.getElementById('playerTraitsInput').value = traits.join(', ');
}

/* ==========================================================================
   PLAYER GAMEPLAY DASHBOARD RENDERING
   ========================================================================== */
function renderPlayerDashboard(player) {
    // 1. Stats and Gauges Row
    document.getElementById('dashPlayerRoleName').textContent = player.roleName;
    const genderEl = document.getElementById('dashPlayerGender');
    if (genderEl) {
        genderEl.textContent = player.genre || 'Non-Binaire';
    }
    document.getElementById('dashPlayerSecretStatus').textContent = player.roleType;
    document.getElementById('dashActionPointsDisplay').textContent = player.actionPoints;

    // Circle SVG calculation (175 is stroke-dasharray)
    // Starting action points (PointsPerPlayer) as 100% capacity
    const initialPA = appState.session ? appState.session.pointsPerPlayer : 10;
    const progressPercent = initialPA > 0 ? (player.actionPoints / initialPA) : 0;
    const offset = 175 - (175 * Math.min(progressPercent, 1));
    document.getElementById('dashProgressCircle').setAttribute('stroke-dashoffset', offset);

    // Update Avatar image and badge
    const avatarCircle = document.getElementById('dashPlayerAvatarCircle');
    const avatarImg = document.getElementById('dashAvatarImg');
    
    avatarCircle.innerHTML = `<img src="${player.avatarUrl}" class="w-full h-full object-cover">`;
    avatarImg.src = player.avatarUrl;
    
    document.getElementById('dashVisualMarker').textContent = player.marker;

    // 2. Character Backstory Details
    document.getElementById('dashPlayerHistory').textContent = player.history;
    const secretEl = document.getElementById('dashPlayerSecret');
    if (secretEl) {
        secretEl.textContent = player.secret || "Aucun secret particulier.";
    }
    const outfitEl = document.getElementById('dashPlayerOutfit');
    if (outfitEl) {
        outfitEl.textContent = player.outfit || "Non définie.";
    }
    
    // Render Personal Chronology
    const chronologyBox = document.getElementById('dashPlayerChronology');
    if (chronologyBox) {
        chronologyBox.innerHTML = '';
        let items = [];
        
        if (player.chronology) {
            if (Array.isArray(player.chronology)) {
                items = player.chronology;
            } else if (typeof player.chronology === 'string') {
                if (player.chronology.includes('\n')) {
                    items = player.chronology.split('\n');
                } else if (player.chronology.includes(';')) {
                    items = player.chronology.split(';');
                } else {
                    items = [player.chronology];
                }
            }
        }
        
        items = items.map(item => {
            let clean = item.trim();
            clean = clean.replace(/^[-\*\•\s]+/, '');
            return clean;
        }).filter(item => item.length > 0);
        
        if (items.length === 0) {
            chronologyBox.innerHTML = `<li class="text-slate-500 italic text-2xs p-1">Aucun détail d'emploi du temps disponible.</li>`;
        } else {
            items.forEach(item => {
                const li = document.createElement('li');
                li.className = "flex items-start gap-2 text-2xs leading-relaxed text-slate-300 border-b border-white/5 pb-1.5 last:border-0 last:pb-0";
                
                const timeRegex = /^(\d{2}[h\:]\d{2})\s*[-:]?\s*(.*)$/i;
                const match = item.match(timeRegex);
                if (item.toUpperCase().startsWith("MOMENT DU CRIME")) {
                    const desc = item.substring(15).replace(/^\s*[-:]?\s*/, '');
                    li.innerHTML = `<span class="text-blood font-black shrink-0 bg-blood/10 px-1.5 py-0.5 rounded border border-blood/30 text-[9px] uppercase tracking-wider">MOMENT DU CRIME</span><span class="pt-0.5 text-slate-250 font-medium">${desc}</span>`;
                } else if (match) {
                    const time = match[1];
                    const desc = match[2];
                    li.innerHTML = `<span class="text-gold font-extrabold shrink-0 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">${time}</span><span class="pt-0.5 text-slate-300">${desc}</span>`;
                } else {
                    li.innerHTML = `<span class="text-blood shrink-0 pt-0.5"><i class="fa-solid fa-clock text-3xs"></i></span><span class="text-slate-300">${item}</span>`;
                }
                chronologyBox.appendChild(li);
            });
        }
    }
    
    document.getElementById('dashPlayerLienVictime').textContent = player.lienVictime;

    // Render Knowledge List
    const knowledgeBox = document.getElementById('dashPlayerKnowledge');
    knowledgeBox.innerHTML = '';
    
    if (player.knowledge.length === 0) {
        knowledgeBox.innerHTML = `<div class="text-slate-500 italic">Aucune information glanée pour l'instant.</div>`;
    } else {
        player.knowledge.forEach(k => {
            const div = document.createElement('div');
            div.className = "bg-noir-input/40 border border-noir-border/30 p-2.5 rounded-lg text-slate-300 leading-normal";
            
            // Format name bold
            const index = k.indexOf(':');
            if (index !== -1) {
                const name = k.substring(0, index);
                const info = k.substring(index + 1);
                div.innerHTML = `<strong class="text-gold">${name}</strong>:${info}`;
            } else {
                div.textContent = k;
            }
            knowledgeBox.appendChild(div);
        });
    }

    // 3. Render Missions Checkbox list
    const missionsBox = document.getElementById('playerMissionsList');
    missionsBox.innerHTML = '';
    
    player.missions.forEach((m, idx) => {
        const item = document.createElement('div');
        item.className = `p-3 rounded-xl border flex justify-between items-center gap-3 transition-colors ${
            m.completed 
            ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-400' 
            : 'bg-noir-card border-noir-border hover:border-noir-border/80'
        }`;
        
        let buttonHtml = '';
        if (!m.completed) {
            // Only make next chronological mission unlockable
            const isSelectable = idx === 0 || player.missions[idx - 1].completed;
            buttonHtml = `
                <button onclick="completePlayerMission('${m.id}')" ${!isSelectable ? 'disabled' : ''} 
                        class="bg-blood hover:bg-blood-hover disabled:opacity-30 disabled:hover:bg-blood text-white font-bold text-3xs py-1.5 px-2.5 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap">
                    <i class="fa-solid fa-circle-check"></i> Valider (+2 PA)
                </button>
            `;
        } else {
            buttonHtml = `<span class="text-emerald-500 text-xs font-bold"><i class="fa-solid fa-check-double"></i> Fait</span>`;
        }

        item.innerHTML = `
            <div class="flex flex-col gap-0.5">
                <span class="text-3xs text-slate-500 uppercase tracking-widest font-bold">Objectif ${idx + 1}</span>
                <span class="text-xs font-semibold leading-snug ${m.completed ? 'line-through text-slate-500' : 'text-slate-200'}">${m.title}</span>
            </div>
            ${buttonHtml}
        `;
        
        missionsBox.appendChild(item);
    });

    // 4. Room Search Dropdown & Discovered Clues Grid
    const roomSelect = document.getElementById('searchRoomSelect');
    roomSelect.innerHTML = '';
    
    // Dynamically retrieve unique rooms from clues list, fallback to ROOMS_DB keys
    const uniqueClueRooms = [...new Set(appState.clues.map(c => c.location))];
    const dropDownRooms = uniqueClueRooms.length > 0 ? uniqueClueRooms : Object.keys(ROOMS_DB);

    dropDownRooms.forEach(roomName => {
        const option = document.createElement('option');
        option.value = roomName;
        option.textContent = roomName;
        roomSelect.appendChild(option);
    });

    // Render Clues list for this player
    const cluesContainer = document.getElementById('playerCluesContainer');
    cluesContainer.innerHTML = '';
    
    // Find clues belonging to this session that are status="Débloqué" AND matched with this player
    const unlockedClues = appState.clues.filter(c => c.status === "Débloqué" && c.foundBy === player.email);
    
    if (unlockedClues.length === 0) {
        cluesContainer.innerHTML = `
            <div class="border border-dashed border-noir-border/50 rounded-xl p-6 text-center text-slate-500 text-3xs">
                <i class="fa-solid fa-receipt text-lg opacity-40 mb-1.5"></i>
                <p>Aucun indice débloqué.</p>
                <p class="mt-0.5 text-slate-600">Dépensez vos PA pour fouiller les pièces !</p>
            </div>
        `;
    } else {
        unlockedClues.forEach(c => {
            const card = document.createElement('div');
            card.className = "bg-noir-card border border-noir-border rounded-xl p-3.5 space-y-2 hover:border-gold/30 transition-all";
            
            let imgHtml = '';
            let documentHtml = '';
            
            if (c.document_content) {
                // Determine format and font classes
                const docTypeClass = c.document_type ? `doc-${c.document_type.replace(/_/g, '-')}` : 'doc-folded-letter';
                const docStyleClass = c.document_style ? `style-${c.document_style.replace(/_/g, '-')}` : 'style-handwritten-ink';
                
                // Set background image from Fal.ai if present, otherwise fall back to styled paper background
                const bgImageStyle = c.image ? `background-image: url('${c.image}');` : `background: linear-gradient(135deg, #f5ecd5 0%, #e8d8b8 100%);`;
                
                documentHtml = `
                    <div class="clue-document-container ${docTypeClass} ${docStyleClass} my-3" style="${bgImageStyle}">
                        <div class="clue-document-text-zone inset-0 p-4 whitespace-pre-line select-text">
                            ${c.document_content}
                        </div>
                    </div>
                `;
            } else if (c.image) {
                imgHtml = `<img src="${c.image}" alt="${c.name}" class="w-full max-h-24 object-cover rounded-lg border border-noir-border">`;
            }
            
            card.innerHTML = `
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-gold">${c.name}</span>
                    <span class="text-3xs bg-noir-input border border-noir-border text-slate-400 px-2 py-0.5 rounded">${c.location}</span>
                </div>
                <p class="text-2xs text-slate-300 leading-normal">${c.description}</p>
                ${documentHtml}
                ${imgHtml}
            `;
            cluesContainer.appendChild(card);
        });
    }
}

/* ==========================================================================
   LOGIC : SIMULATION AND WEBHOOKS
   ========================================================================== */

// Helper: Add logging in organizer live monitor console
function addLiveLog(message) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    appState.logs.push(`[${time}] ${message}`);
    savePersistedState();
    
    // If GM is looking, update immediately
    if (appState.currentUser && appState.currentUser.role === 'organizer') {
        renderOrganizerDashboard();
    }
}

/* ==========================================================================
   VICTIM VALIDATION & SCENARIO POLLING
   ========================================================================== */

function cleanN8nExpression(value, fallback) {
    if (!value || typeof value !== 'string') return fallback || "--";
    if (value.includes('{{') || value.includes('$json')) {
        return fallback || "Génération en cours...";
    }
    return value;
}

function mapSuspectProperties(s, index) {
    const charTemplate = CHARACTER_TEMPLATES[index % CHARACTER_TEMPLATES.length];
    if (typeof s === 'string') {
        return {
            id: s,
            email: "",
            roleType: index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent"),
            roleName: charTemplate.name,
            history: charTemplate.bio,
            lienVictime: charTemplate.relation,
            marker: charTemplate.marker,
            genre: charTemplate.genre || "Non-Binaire",
            secret: charTemplate.secret || "",
            chronology: charTemplate.chronology || "",
            outfit: charTemplate.outfit || "",
            relations: charTemplate.relations || [],
            characterTraits: "",
            avatarUrl: "",
            actionPoints: 1,
            status: "Créé",
            knowledge: [],
            missions: []
        };
    }

    // Helper to get text/number/file from Notion properties if present
    let isRawNotion = false;
    let props = {};
    if (s && s.properties && typeof s.properties === 'object') {
        isRawNotion = true;
        props = s.properties;
    }

    const getText = (prop) => {
        if (!prop) return "";
        if (prop.rich_text) return prop.rich_text.map(t => t.plain_text).join("");
        if (prop.title) return prop.title.map(t => t.plain_text).join("");
        return "";
    };

    const getNumber = (prop) => {
        if (!prop) return 0;
        return prop.number || 0;
    };

    const getFileUrl = (prop) => {
        if (!prop || !prop.files || prop.files.length === 0) return "";
        const f = prop.files[0];
        if (f.file) return f.file.url;
        if (f.external) return f.external.url;
        return "";
    };

    const getFile = (val) => {
        if (!val) return "";
        if (typeof val === 'string') return val;
        if (Array.isArray(val) && val.length > 0) {
            const f = val[0];
            if (typeof f === 'string') return f;
            if (f.file && f.file.url) return f.file.url;
            if (f.external && f.external.url) return f.external.url;
            if (f.url) return f.url;
        }
        if (typeof val === 'object') {
            if (val.url) return val.url;
            if (val.files && Array.isArray(val.files) && val.files.length > 0) {
                const f = val.files[0];
                if (f.file && f.file.url) return f.file.url;
                if (f.external && f.external.url) return f.external.url;
                if (f.url) return f.url;
            }
        }
        return "";
    };

    const id = (typeof s === 'string') ? s : (s.id || s.scenario_id || s.character_id || "");
    const email = isRawNotion ? (props["Email"] ? props["Email"].email : "") : (s.email || s.property_email || "");
    const roleType = isRawNotion ? (props["Statut"] && props["Statut"].select ? props["Statut"].select.name : "") : (s.status || s.roleType || s.property_role_type || "");
    const roleName = isRawNotion ? getText(props["Nom"]) : (s.name || s.roleName || s.property_nom || s.role_name || "");
    const history = isRawNotion ? getText(props["Rôle / Histoire"]) : (s.bio || s.history || s.property_r_le_histoire || s.property_role_histoire || "");
    const lienVictime = isRawNotion ? getText(props["Lien avec la Victime"]) : (s.relation || s.lienVictime || s.property_lien_avec_la_victime || "");
    const marker = isRawNotion ? getText(props["Marqueur Visuel"]) : (s.marker || s.property_marqueur_visuel || "");
    const genre = isRawNotion ? (props["Genre"] && props["Genre"].select ? props["Genre"].select.name : "Non-Binaire") : (s.genre || s.roleGenre || s.property_genre || "");
    const secret = isRawNotion ? getText(props["Secret"]) : (s.secret || s.property_secret || "");
    const chronology = isRawNotion ? getText(props["Timeline"]) : (s.chronology || s.property_timeline || "");
    const outfit = isRawNotion ? getText(props["Tenue"]) : (s.outfit || s.property_tenue || "");
    const characterTraits = isRawNotion ? getText(props["Traits de Caractère"]) : (s.characterTraits || s.property_traits_de_caractere || "");
    
    const avatarUrl = isRawNotion ? (getFileUrl(props["photo_suspect"]) || getFileUrl(props["Avatar / Photo"]) || getFileUrl(props["Photo Suspect"]) || getFileUrl(props["photo"])) : getFile(s.avatarUrl || s.avatar_url || s.avatar || s.illustration || s.property_avatar___photo || s.property_avatar__photo || s.property_avatar_photo || s.avatar___photo || s.avatar__photo || s.avatar_photo || s["Avatar / Photo"] || s.property_photo_suspect || s.photo_suspect || s.property_photo || s.photo || "");
    const actionPoints = isRawNotion ? getNumber(props["Solde Points d'Action"]) : (s.actionPoints !== undefined ? s.actionPoints : (s.property_solde_points_d_action !== undefined ? s.property_solde_points_d_action : 1));
    const status = isRawNotion ? (props["Statut"] && props["Statut"].select ? props["Statut"].select.name : "Créé") : (s.status || "Créé");

    return {
        id: id,
        email: email,
        roleType: roleType || (index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent")),
        roleName: roleName || charTemplate.name,
        history: history || charTemplate.bio,
        lienVictime: lienVictime || charTemplate.relation,
        marker: marker || charTemplate.marker,
        genre: genre || charTemplate.genre || "Non-Binaire",
        secret: secret || charTemplate.secret || "",
        chronology: chronology || charTemplate.chronology || "",
        outfit: outfit || charTemplate.outfit || "",
        relations: s.relations || [],
        characterTraits: characterTraits,
        avatarUrl: avatarUrl,
        actionPoints: actionPoints,
        status: status,
        knowledge: s.knowledge || s.property_connaissances || [],
        missions: s.missions || s.property_missions || []
    };
}

function getScenariosFromArrayOrObject(data) {
    if (!data) return [];
    if (Array.isArray(data)) {
        return data;
    }
    if (data.scenarios && Array.isArray(data.scenarios)) {
        return data.scenarios;
    }
    if (data.success && Array.isArray(data.scenarios)) {
        return data.scenarios;
    }
    return [];
}

function mapScenarioProperties(s) {
    if (!s) return null;
    
    const rawSuspects = s.suspects || s.property_bases_personnages || [];
    const suspects = Array.isArray(rawSuspects) ? rawSuspects.map((x, index) => mapSuspectProperties(x, index)) : [];

    const getText = (prop) => {
        if (!prop) return "";
        if (prop.rich_text) return prop.rich_text.map(t => t.plain_text).join("");
        if (prop.title) return prop.title.map(t => t.plain_text).join("");
        return "";
    };

    const getNumber = (prop) => {
        if (!prop) return 0;
        return prop.number || 0;
    };

    const getEmail = (prop) => {
        if (!prop) return "";
        if (prop.email) return prop.email;
        if (prop.rich_text) return prop.rich_text.map(t => t.plain_text).join("");
        return "";
    };

    const getFileUrl = (prop) => {
        if (!prop) return "";
        
        // 1. If it's a direct string
        if (typeof prop === 'string') return prop.trim();
        
        // 2. If it's a Notion files property
        if (prop.files && Array.isArray(prop.files) && prop.files.length > 0) {
            const f = prop.files[0];
            if (f.file && f.file.url) return f.file.url;
            if (f.external && f.external.url) return f.external.url;
            if (f.url) return f.url;
        }
        
        // 3. If it's a Notion url property
        if (prop.url) return prop.url;
        
        // 4. If it's a Notion rich_text property containing the URL
        if (prop.rich_text && Array.isArray(prop.rich_text)) {
            return prop.rich_text.map(t => t.plain_text).join("").trim();
        }
        
        // 5. If it's an array of files/strings directly
        if (Array.isArray(prop) && prop.length > 0) {
            const f = prop[0];
            if (typeof f === 'string') return f.trim();
            if (f.file && f.file.url) return f.file.url;
            if (f.external && f.external.url) return f.external.url;
            if (f.url) return f.url;
        }
        
        // 6. Direct object checks
        if (typeof prop === 'object') {
            if (prop.url) return prop.url;
        }
        
        return "";
    };

    const getFile = (val) => {
        return getFileUrl(val);
    };

    let isRawNotion = false;
    let props = {};
    if (s.properties && typeof s.properties === 'object') {
        isRawNotion = true;
        props = s.properties;
    }

    const title = isRawNotion ? (getText(props["Nom"]) || "Sans titre") : (s.title || s.property_nom || s.name || "Sans titre");
    const theme = isRawNotion ? getText(props["Thème"]) : (s.theme || s.property_theme || "");
    const epoch = isRawNotion ? getText(props["Époque"]) : (s.epoch || s.property_epoque || "");
    
    let etapeNum = null;
    if (isRawNotion) {
        etapeNum = props["Étape Génération"] ? getNumber(props["Étape Génération"]) : null;
    } else {
        let rawEtape = s.etapeGeneration !== undefined && s.etapeGeneration !== null ? s.etapeGeneration : s.property_etape_generation;
        if (rawEtape !== undefined && rawEtape !== null) {
            if (typeof rawEtape === 'object') {
                etapeNum = rawEtape.number || (rawEtape.select ? parseInt(rawEtape.select.name) : null) || null;
            } else {
                etapeNum = parseInt(rawEtape);
            }
        }
    }

    const pitch = isRawNotion ? getText(props["Pitch Global"]) : (s.pitch || s.property_pitch_global || "");
    const crimeRoom = isRawNotion ? (getText(props["Scène du Crime"]) || getText(props["Scene du Crime"])) : (s.crimeRoom || s.property_scene_du_crime || s.property_scene_de_crime || s.murder_room || "");
    const victim = isRawNotion ? getText(props["Victime"]) : (s.victim && typeof s.victim === 'object' ? (s.victim.name || "") : (s.victim || s.property_victime || ""));
    const victimOutfit = isRawNotion ? getText(props["Tenue Victime"]) : (s.victimOutfit || (s.victim && typeof s.victim === 'object' ? s.victim.outfit : "") || s.property_tenue_victime || "");
    const chronology = isRawNotion ? getText(props["Chronologie"]) : (s.chronology || s.property_chronologie || "");
    const cluesCount = isRawNotion ? (getNumber(props["Nombre Total d'Indices"]) || 24) : (s.cluesCount || s.property_nombre_total_d_indices || 24);
    const illustration = isRawNotion ? getText(props["Illustration"]) : (s.illustration || s.property_illustration || "");

    let status = "En cours de génération";
    if (isRawNotion) {
        status = props["Statut"] && props["Statut"].select ? props["Statut"].select.name : "En cours de génération";
    } else {
        status = s.status || s.property_statut || "En cours de génération";
    }

    let email = "";
    if (isRawNotion) {
        email = props["Créateur"] ? getEmail(props["Créateur"]) : 
                (props["Email Organisateur"] ? getEmail(props["Email Organisateur"]) : 
                (props["email"] ? getEmail(props["email"]) : ""));
    } else {
        email = s.email || s.property_createur || "";
    }

    let victimGenre = isRawNotion ? (props["Genre Victime"] ? props["Genre Victime"].select?.name : (props["Victime Genre"] ? props["Victime Genre"].select?.name : "")) : (s.victimGenre || (s.victim && typeof s.victim === 'object' ? s.victim.genre : "") || s.property_victime_genre || "");
    if (!victimGenre && isRawNotion) {
        victimGenre = "Non-Binaire";
    }

    let victimPhotoUrl = "";
    if (isRawNotion) {
        victimPhotoUrl = getFileUrl(props["Photo Victime"]) || getFileUrl(props["Photo Homme"]) || getFileUrl(props["Photo Femme"]) || getFileUrl(props["Photo NBinaire"]) || getFileUrl(props["Illustration"]);
    } else {
        const genreLower = (victimGenre || "").toLowerCase();
        const rawPhotoHomme = s.property_photo_homme || s.photo_homme || s.photoHomme || s["Photo Homme"];
        const rawPhotoFemme = s.property_photo_femme || s.photo_femme || s.photoFemme || s["Photo Femme"];
        const rawPhotoNB = s.property_photo_nbinaire || s.photo_nbinaire || s.photoNBinaire || s.property_photo_n_binaire || s.photo_n_binaire || s["Photo NBinaire"];
        const rawIllustration = s.illustration || s.property_illustration || s.property_photo_victime || s.photo_victime || s.victimPhoto || s.property_avatar_photo || s["Photo Victime"] || s.property_photo_victime || s.photoVictime || (s.victim && typeof s.victim === 'object' ? (s.victim.photo || s.victim.photo_victime || s.victim.avatarUrl || s.victim.photo_url || s.victim.illustration) : "");
        
        if (genreLower === 'homme' || genreLower === 'male' || genreLower === 'masculin') {
            victimPhotoUrl = getFile(rawIllustration) || getFile(rawPhotoHomme);
        } else if (genreLower === 'femme' || genreLower === 'female' || genreLower === 'féminin') {
            victimPhotoUrl = getFile(rawIllustration) || getFile(rawPhotoFemme);
        } else {
            victimPhotoUrl = getFile(rawIllustration) || getFile(rawPhotoNB) || getFile(rawPhotoHomme) || getFile(rawPhotoFemme);
        }
    }

    const victimObj = s.victimObj || {
        name: victim,
        genre: victimGenre,
        short_hook: isRawNotion ? getText(props["Accroche Victime"]) || getText(props["Victime Accroche"]) : (s.victimShortHook || s.property_victime_short_hook || ""),
        outfit: victimOutfit,
        marker: isRawNotion ? getText(props["Marqueur Victime"]) || getText(props["Victime Marqueur"]) || getText(props["Marqueur Visuel Victime"]) : (s.victimMarker || s.property_victime_marker || ""),
        avatarUrl: victimPhotoUrl
    };

    return {
        id: s.id || s.scenario_id,
        title: title,
        theme: theme,
        epoch: epoch,
        etapeGeneration: etapeNum,
        pitch: pitch,
        crimeRoom: crimeRoom,
        victim: victim,
        victimOutfit: victimOutfit,
        chronology: chronology,
        cluesCount: cluesCount,
        illustration: illustration,
        status: status,
        email: email,
        suspects: suspects,
        victimObj: victimObj
    };
}

async function fetchGithubImagesList() {
    try {
        const res = await fetch("https://api.github.com/repos/SamiSteyre/murderparty/contents/images");
        if (res.ok) {
            const files = await res.json();
            return Array.isArray(files) ? files : [];
        }
    } catch (e) {
        console.warn("Failed to fetch images list from GitHub API", e);
    }
    return [];
}

function enrichScenarioWithImages(scenario, images) {
    if (!scenario || !images || !Array.isArray(images)) return scenario;

    const suspectImages = [];
    
    images.forEach(img => {
        const fileObj = img.content || img;
        const name = fileObj.name || "";
        const downloadUrl = fileObj.download_url || fileObj.url || "";
        
        if (!name || !downloadUrl) return;

        if (name.toLowerCase().includes("victim")) {
            if (scenario.victimObj) {
                scenario.victimObj.avatarUrl = downloadUrl;
            }
            scenario.illustration = downloadUrl;
        } else if (name.toLowerCase().includes("suspect")) {
            suspectImages.push({ name, downloadUrl });
        }
    });

    if (suspectImages.length > 0 && scenario.suspects && Array.isArray(scenario.suspects)) {
        // Sort suspect images by name so they are in chronological order (due to timestamp at the end)
        suspectImages.sort((a, b) => a.name.localeCompare(b.name));

        // Try mapping by ID first.
        let matchedSuspectIds = new Set();
        const matchesById = [];

        suspectImages.forEach(img => {
            let suspectId = "";
            const cleanName = img.name.replace("suspect", "");
            const parts = cleanName.split("-");
            if (parts.length >= 5) {
                suspectId = parts.slice(0, 5).join("-");
            }
            
            if (suspectId) {
                const cleanTargetId = suspectId.toLowerCase().replace(/-/g, "");
                const susIdx = scenario.suspects.findIndex(sus => {
                    const cleanSusId = (sus.id || "").toLowerCase().replace(/-/g, "");
                    return cleanSusId === cleanTargetId || (sus.id && suspectId.includes(sus.id));
                });
                if (susIdx !== -1) {
                    matchedSuspectIds.add(scenario.suspects[susIdx].id);
                    matchesById.push({ img, idx: susIdx });
                }
            }
        });

        // If we matched multiple distinct suspects (i.e. more than 1), then the IDs in filenames are probably correct
        if (matchedSuspectIds.size > 1) {
            console.log(`[enrichScenarioWithImages] Matching by ID (found ${matchedSuspectIds.size} unique suspects)`);
            matchesById.forEach(match => {
                scenario.suspects[match.idx].avatarUrl = match.img.downloadUrl;
            });
        } else {
            // Otherwise, we fall back to index-based mapping
            console.log(`[enrichScenarioWithImages] Falling back to index-based matching (matched only ${matchedSuspectIds.size} unique suspects by ID)`);
            scenario.suspects.forEach((sus, idx) => {
                if (idx < suspectImages.length) {
                    sus.avatarUrl = suspectImages[idx].downloadUrl;
                    console.log(`[enrichScenarioWithImages] Matched suspect ${sus.roleName || sus.id} to image index ${idx}: ${suspectImages[idx].name}`);
                }
            });
        }
    }

    return scenario;
}

function extractRawScenario(data) {
    if (!data) return null;
    
    // If it's an array, look at the first element
    let target = data;
    if (Array.isArray(data)) {
        if (data.length === 0) return null;
        target = data[0];
    }

    // Now target is an object (or whatever the first element was)
    if (target && typeof target === 'object') {
        // If it has a scenario property, parse it
        if (target.scenario) {
            let parsed = target.scenario;
            if (typeof parsed === 'string') {
                try {
                    parsed = JSON.parse(parsed);
                } catch (e) {
                    console.warn("Failed to parse scenario string in extractRawScenario", e);
                }
            }
            // If the parsed object is also an array (e.g. [ { id: ... } ])
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed = parsed[0];
            }
            return parsed;
        }

        // If target itself looks like a scenario object
        if (target.id || target.scenario_id || target.property_nom || target.name) {
            return target;
        }
        
        // If it has success and scenario
        if (target.success && target.scenario) {
            let parsed = target.scenario;
            if (typeof parsed === 'string') {
                try {
                    parsed = JSON.parse(parsed);
                } catch (e) {
                    console.warn("Failed to parse success.scenario string in extractRawScenario", e);
                }
            }
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed = parsed[0];
            }
            return parsed;
        }
    }
    
    return null;
}

function loadScenarioData(data, gitFiles = []) {
    const id = data.scenario_id || data.id;
    const title = data.title;
    const theme = data.theme || appState.scenario?.theme || "Généré";
    const pitch = data.pitch || "";
    const crimeRoom = data.murder_room || data.crimeRoom || "Non défini";

    let rawIllustration = data.illustration || data.Illustration || data.illustration_url || (data.victimObj ? data.victimObj.avatarUrl : "") || "";
    let resolvedImageUrl = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";
    
    // Check GitHub file list fallback first for the victim image
    let victimGitFile = null;
    if (Array.isArray(gitFiles) && gitFiles.length > 0 && id) {
        const cleanId = id.toLowerCase().replace(/-/g, "");
        victimGitFile = gitFiles.find(f => {
            const nameLower = (f.name || "").toLowerCase();
            return nameLower.includes("victim") && nameLower.includes(cleanId);
        });
        if (!victimGitFile) {
            // Also try with dashes included
            victimGitFile = gitFiles.find(f => {
                const nameLower = (f.name || "").toLowerCase();
                return nameLower.includes("victim") && nameLower.includes(id.toLowerCase());
            });
        }
    }

    if (victimGitFile && victimGitFile.download_url) {
        resolvedImageUrl = victimGitFile.download_url;
    } else if (rawIllustration) {
        if (rawIllustration.startsWith('http://') || rawIllustration.startsWith('https://')) {
            resolvedImageUrl = rawIllustration;
        } else {
            resolvedImageUrl = "https://raw.githubusercontent.com/SamiSteyre/murderparty/main/" + rawIllustration.replace(/^\/+/, '');
        }
    }

    // Convert github.com/.../raw/ to raw.githubusercontent.com
    if (resolvedImageUrl.includes('github.com/SamiSteyre/murderparty')) {
        resolvedImageUrl = resolvedImageUrl
            .replace('github.com/SamiSteyre/murderparty/raw/main/', 'raw.githubusercontent.com/SamiSteyre/murderparty/main/')
            .replace('github.com/SamiSteyre/murderparty/blob/main/', 'raw.githubusercontent.com/SamiSteyre/murderparty/main/');
    }

    let victimName = "Non définie";
    if (data.victim_name) {
        victimName = data.victim_name;
    } else if (data.victim) {
        victimName = typeof data.victim === 'string' ? data.victim : (data.victim.name || "Non définie");
    }
    
    let victimOutfit = "";
    if (data.victim_outfit) {
        victimOutfit = data.victim_outfit;
    } else if (data.victim && typeof data.victim === 'object') {
        victimOutfit = data.victim.outfit || data.victim.victimOutfit || "";
    } else if (data.victimOutfit) {
        victimOutfit = data.victimOutfit;
    }

    const cluesCount = data.clues_count || data.cluesCount || 24;
    
    let chronology = "Aucune chronologie disponible.";
    if (data.chronology) {
        chronology = data.chronology;
    } else if (data.timeline && Array.isArray(data.timeline)) {
        chronology = data.timeline.map(e => {
            const time = e.time || "";
            const room = e.room || "";
            const suspects = Array.isArray(e.suspects) ? e.suspects.join(', ') : (e.suspects || "");
            const desc = e.description || "";
            return `${time} - ${room} (${suspects}) : ${desc}`;
        }).join('\n');
    }

    appState.scenario = {
        id,
        title,
        theme,
        pitch,
        crimeRoom,
        victim: victimName,
        victimOutfit,
        cluesCount,
        imageUrl: resolvedImageUrl,
        chronology
    };

    // Filter suspect files from gitFiles
    const suspectGitFiles = [];
    if (Array.isArray(gitFiles) && gitFiles.length > 0 && id) {
        const cleanScenarioId = id.toLowerCase().replace(/-/g, "");
        gitFiles.forEach(f => {
            const nameLower = (f.name || "").toLowerCase();
            if (nameLower.includes("suspect") && (nameLower.includes(cleanScenarioId) || nameLower.includes(id.toLowerCase()))) {
                suspectGitFiles.push(f);
            }
        });
        // Sort alphabetically/chronologically by filename
        suspectGitFiles.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    }

    const suspectsData = data.suspects || CHARACTER_TEMPLATES;
    appState.players = suspectsData.map((s, index) => {
        let mapped = mapSuspectProperties(s, index);
        
        // Find avatar image from gitFiles first
        let avatar = "";
        if (suspectGitFiles.length > 0) {
            const cleanSusId = (mapped.id || "").toLowerCase().replace(/-/g, "");
            // Find matches for this specific suspect ID
            const matches = suspectGitFiles.filter(f => f.name.toLowerCase().includes(cleanSusId));
            if (matches.length === 1) {
                avatar = matches[0].download_url;
            } else {
                // If there's ambiguous matching (e.g. n8n bug where all files have the first suspect's ID),
                // map by index
                if (index < suspectGitFiles.length) {
                    avatar = suspectGitFiles[index].download_url;
                }
            }
        }

        if (avatar) {
            mapped.avatarUrl = avatar;
        }

        // Merge with existing pending suspects to keep their bios, names, etc.
        if (appState.pendingScenarioData && appState.pendingScenarioData.suspects) {
            const existing = appState.pendingScenarioData.suspects.find(p => {
                const cleanMappedId = (mapped.id || "").toLowerCase().replace(/-/g, "");
                const cleanPendingId = (p.id || "").toLowerCase().replace(/-/g, "");
                return (cleanMappedId && cleanMappedId === cleanPendingId) || (p.roleName && p.roleName === mapped.roleName);
            });
            if (existing) {
                mapped = {
                    ...existing,
                    avatarUrl: mapped.avatarUrl || existing.avatarUrl,
                    status: mapped.status || existing.status || "Créé",
                    actionPoints: mapped.actionPoints !== undefined ? mapped.actionPoints : existing.actionPoints
                };
            }
        }

        // Convert any relative avatar path to raw.githubusercontent.com
        if (mapped.avatarUrl && !mapped.avatarUrl.startsWith('http://') && !mapped.avatarUrl.startsWith('https://')) {
            mapped.avatarUrl = "https://raw.githubusercontent.com/SamiSteyre/murderparty/main/" + mapped.avatarUrl.replace(/^\/+/, '');
        } else if (mapped.avatarUrl && mapped.avatarUrl.includes('github.com/SamiSteyre/murderparty')) {
            mapped.avatarUrl = mapped.avatarUrl
                .replace('github.com/SamiSteyre/murderparty/raw/main/', 'raw.githubusercontent.com/SamiSteyre/murderparty/main/')
                .replace('github.com/SamiSteyre/murderparty/blob/main/', 'raw.githubusercontent.com/SamiSteyre/murderparty/main/');
        }

        return mapped;
    });

    appState.clues = [];
    if (data.clues && Array.isArray(data.clues)) {
        data.clues.forEach((c, idx) => {
            appState.clues.push({
                id: c.id || `clue_${c.location.replace(/\s+/g, '_')}_${idx}`,
                name: c.name,
                description: c.description,
                type: c.type || "Fouille de Pièce",
                location: c.location,
                status: c.status || "Caché",
                foundBy: c.foundBy || ""
            });
        });
    }

    appState.orgaView = 'generated';
    savePersistedState();
    renderOrganizerDashboard();
}

let victimPollInterval = null;
let step2CompletionTriggered = false;
let portraitRetryTimeout = null;

function renderValidationSuspects(suspects) {
    const container = document.getElementById('validateSuspectsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (!suspects || suspects.length === 0) {
        container.innerHTML = `<div class="col-span-2 text-center py-8 text-xs text-slate-500">Aucun suspect généré à cette étape.</div>`;
        return;
    }

    suspects.forEach(s => {
        const card = document.createElement('div');
        card.className = "bg-zinc-950/80 border border-white/5 p-4 rounded-xl space-y-3 relative hover:border-blood/30 transition-all text-left";
        
        const traitsHtml = s.character_traits ? s.character_traits.map(t => 
            `<span class="px-1.5 py-0.5 text-[8px] uppercase tracking-wider rounded font-medium bg-blood/10 border border-blood/20 text-blood-light inline-block">${t}</span>`
        ).join(' ') : '';

        card.innerHTML = `
            <div class="border-b border-white/5 pb-2">
                <div class="flex justify-between items-start gap-1">
                    <h4 class="text-xs font-extrabold text-white font-cinzel">${cleanN8nExpression(s.name, "Suspect")}</h4>
                    <span class="px-1.5 py-0.5 text-[8px] uppercase tracking-wider rounded bg-zinc-900 border border-zinc-800 text-slate-400 font-bold">${cleanN8nExpression(s.genre, "Genre")}</span>
                </div>
                <span class="text-[9px] uppercase tracking-widest text-slate-500 font-bold block mt-0.5">${cleanN8nExpression(s.role || s.status, "Rôle inconnu")}</span>
            </div>
            
            <div class="space-y-2 text-[11px] font-light leading-relaxed">
                <div>
                    <span class="text-[9px] uppercase tracking-widest text-slate-650 font-bold block">Relation Victime</span>
                    <p class="text-slate-300">${cleanN8nExpression(s.relation_to_victim || s.relation || s.lienVictime, "Non spécifiée")}</p>
                </div>
                ${s.secret ? `
                <div>
                    <span class="text-[9px] uppercase tracking-widest text-blood/60 font-bold block"><i class="fa-solid fa-user-secret text-blood/80 mr-1"></i> Secret</span>
                    <p class="text-slate-400 italic">${cleanN8nExpression(s.secret, "Aucun secret")}</p>
                </div>` : ''}
                ${s.marker ? `
                <div>
                    <span class="text-[9px] uppercase tracking-widest text-slate-650 font-bold block"><i class="fa-solid fa-fingerprint text-blood/50 mr-1"></i> Signe distinctif</span>
                    <p class="text-slate-300">${cleanN8nExpression(s.marker, "Aucun")}</p>
                </div>` : ''}
                ${s.relations && (Array.isArray(s.relations) ? s.relations.length > 0 : s.relations.trim().length > 0) ? `
                <div class="mt-2 border-t border-white/5 pt-2">
                    <span class="text-[9px] uppercase tracking-widest text-slate-650 font-bold block mb-1"><i class="fa-solid fa-link text-blood/50 mr-1"></i> Relations</span>
                    <div class="text-slate-300 space-y-1 font-light leading-relaxed">
                        ${Array.isArray(s.relations)
                            ? s.relations.map(r => `<div class="pl-2 border-l border-white/10"><strong class="text-white">${cleanN8nExpression(r.with, "Suspect")}</strong> : ${cleanN8nExpression(r.detail, "Relation")}</div>`).join('')
                            : s.relations.split('\n').map(line => `<div class="pl-2 border-l border-white/10">${cleanN8nExpression(line, "")}</div>`).join('')}
                    </div>
                </div>` : ''}
            </div>
            
            <div class="flex flex-wrap gap-1 pt-1">
                ${traitsHtml}
            </div>
        `;
        container.appendChild(card);
    });
}

function updateValidationSlides() {
    const slideVictim = document.getElementById('slideVictim');
    const slideSuspects = document.getElementById('slideSuspects');
    const btnPrev = document.getElementById('btnPrevValidationSlide');
    const btnNext = document.getElementById('btnNextValidationSlide');
    const btnApprove = document.getElementById('approveVictimBtn');
    const btnSimulate = document.getElementById('btnSimulateApprove');
    const stepLabel = document.getElementById('validationModalStep');
    const titleLabel = document.getElementById('validationModalTitle');
    const statusText = document.getElementById('victimValidationStatus');

    if (appState.validationSlideIndex === 1) {
        if (slideVictim) slideVictim.classList.remove('hidden');
        if (slideSuspects) slideSuspects.classList.add('hidden');
        if (btnPrev) btnPrev.classList.add('hidden');
        if (btnNext) btnNext.classList.remove('hidden');
        if (btnApprove) btnApprove.classList.add('hidden');
        if (btnSimulate) btnSimulate.classList.add('hidden');
        if (statusText) statusText.classList.add('hidden');
        if (stepLabel) stepLabel.textContent = "Étape 1/2";
        if (titleLabel) titleLabel.innerHTML = `<i class="fa-solid fa-skull-crossbones text-blood animate-pulse"></i> Validation de la Victime`;
    } else {
        if (slideVictim) slideVictim.classList.add('hidden');
        if (slideSuspects) slideSuspects.classList.remove('hidden');
        if (btnPrev) btnPrev.classList.remove('hidden');
        if (btnNext) btnNext.classList.add('hidden');
        
        if (appState.isSimulationMode) {
            if (btnSimulate) btnSimulate.classList.remove('hidden');
            if (btnApprove) btnApprove.classList.add('hidden');
            if (statusText) statusText.classList.add('hidden');
        } else {
            if (btnSimulate) btnSimulate.classList.add('hidden');
            if (btnApprove) btnApprove.classList.remove('hidden');
            if (statusText) {
                statusText.classList.remove('hidden');
                statusText.innerHTML = `<i class="fa-solid fa-hourglass-half text-blood mr-1"></i> Cliquez sur 'Valider et continuer' pour lancer la génération finale.`;
            }
        }
        if (stepLabel) stepLabel.textContent = "Étape 2/2";
        if (titleLabel) titleLabel.innerHTML = `<i class="fa-solid fa-users text-blood animate-pulse"></i> Profils des Suspects`;
    }
}

function showVictimValidationModal(victim, isSimulation) {
    document.getElementById('validateVictimName').textContent = cleanN8nExpression(victim.name, "Victime en cours de génération");
    document.getElementById('validateVictimGenre').textContent = cleanN8nExpression(victim.genre, "À déterminer");
    document.getElementById('validateVictimHook').textContent = cleanN8nExpression(victim.short_hook, "Rôle et accroche en cours de rédaction...");
    document.getElementById('validateVictimOutfit').textContent = cleanN8nExpression(victim.outfit, "Tenue vestimentaire en cours de conception...");
    document.getElementById('validateVictimMarker').textContent = cleanN8nExpression(victim.marker, "Marqueur visuel en cours d'analyse...");

    // Store state
    appState.isSimulationMode = isSimulation;
    appState.validationSlideIndex = 1;

    // Render suspects
    let suspectsToRender = null;
    if (isSimulation) {
        suspectsToRender = CHARACTER_TEMPLATES.map((char, index) => {
            return {
                name: char.name,
                genre: char.genre || "Non-Binaire",
                role: index === 0 ? "Le Coupable" : "Suspect",
                relation_to_victim: char.relation || "Lien de parenté ou professionnel",
                character_traits: ["Simulé"]
            };
        });
    } else {
        suspectsToRender = appState.pendingScenarioData ? appState.pendingScenarioData.suspects : null;
    }
    renderValidationSuspects(suspectsToRender);

    // Update count label in the tab header
    const countSpan = document.getElementById('validateSuspectsCount');
    if (countSpan) {
        countSpan.textContent = suspectsToRender ? suspectsToRender.length : 0;
    }

    // Hide general scenario generation overlay if it was open
    const genOverlay = document.getElementById('scenarioGeneratingOverlay');
    if (genOverlay) {
        genOverlay.classList.add('hidden');
        const loadVideo = document.getElementById('iasminaLoadingVideo');
        if (loadVideo) loadVideo.pause();
    }

    const proceedToShowResults = () => {
        // Stop and reset the reveal video
        const revealVideo = document.getElementById('iasminaRevealVideo');
        if (revealVideo) {
            revealVideo.pause();
            revealVideo.currentTime = 0;
        }

        // Hide video overlay
        const videoOverlay = document.getElementById('iasminaVideoOverlay');
        if (videoOverlay) videoOverlay.classList.add('hidden');

        // Show validation results modal
        const modal = document.getElementById('modalValidateVictim');
        if (modal) modal.classList.remove('hidden');

        const btnSimulate = document.getElementById('btnSimulateApprove');
        const btnApprove = document.getElementById('approveVictimBtn');
        const rejectBtn = document.getElementById('rejectVictimBtn');

        if (btnApprove) {
            btnApprove.removeAttribute('disabled');
            btnApprove.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valider et continuer`;
        }
        if (btnSimulate) {
            btnSimulate.removeAttribute('disabled');
            btnSimulate.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valider et continuer (Simulé)`;
        }
        if (rejectBtn) {
            rejectBtn.removeAttribute('disabled');
        }

        updateValidationSlides();
    };

    playRevealVideo("https://github.com/SamiSteyre/murderparty/raw/main/images/IAsmina2.mp4", proceedToShowResults);
}

function playRevealVideo(videoSrc, onEndedCallback) {
    const videoOverlay = document.getElementById('iasminaVideoOverlay');
    const revealVideo = document.getElementById('iasminaRevealVideo');
    const nextBtn = document.getElementById('iasminaVideoNextBtn');

    if (videoOverlay && revealVideo) {
        revealVideo.src = videoSrc;
        videoOverlay.classList.remove('hidden');
        revealVideo.muted = false;
        revealVideo.volume = 1.0;
        revealVideo.currentTime = 0;

        const proceed = () => {
            revealVideo.pause();
            revealVideo.currentTime = 0;
            videoOverlay.classList.add('hidden');
            if (onEndedCallback) onEndedCallback();
        };

        revealVideo.play().catch(err => {
            console.warn("Reveal video play blocked or failed, playing muted as fallback:", err);
            revealVideo.muted = true;
            revealVideo.play().catch(e => {
                console.error("Reveal video failed entirely:", e);
                proceed();
            });
        });

        revealVideo.onended = () => {
            proceed();
        };

        if (nextBtn) {
            nextBtn.onclick = () => {
                proceed();
            };
        }
    } else {
        if (onEndedCallback) onEndedCallback();
    }
}

async function handleStep2Completion(scenarioDetails) {
    if (step2CompletionTriggered) return;
    step2CompletionTriggered = true;

    const genOverlay = document.getElementById('scenarioGeneratingOverlay');
    if (genOverlay) genOverlay.classList.add('hidden');
    
    closeVictimModal();

    playRevealVideo("https://github.com/SamiSteyre/murderparty/raw/main/images/IArthur2.mp4", async () => {
        const gitFiles = await fetchGithubImagesList();
        loadScenarioData(scenarioDetails, gitFiles);
        showPortraitsVerificationModal();
    });
}

function showPortraitsVerificationModal() {
    const list = [];
    
    // 1. Add Victim
    let victimImg = appState.scenario ? appState.scenario.imageUrl : "";
    if (!victimImg || victimImg.includes('unsplash.com')) {
        victimImg = "images/iarena-battle.jpg";
    }
    list.push({
        name: appState.scenario ? (appState.scenario.victim || "La Victime") : "La Victime",
        role: "La Victime",
        imageUrl: victimImg,
        bio: appState.scenario ? (appState.scenario.victimOutfit || "Tenue vestimentaire de la victime.") : "Tenue vestimentaire de la victime."
    });

    // 2. Add Suspects
    const portraitPool = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80"
    ];
    if (appState.players && appState.players.length > 0) {
        appState.players.forEach((p, idx) => {
            let avatar = p.avatarUrl;
            if (!avatar) {
                avatar = portraitPool[idx % portraitPool.length];
            }
            list.push({
                name: p.roleName,
                role: p.roleType || "Suspect",
                imageUrl: avatar,
                bio: p.history || ""
            });
        });
    }

    appState.portraitsToVerify = list;
    appState.activePortraitIndex = 0;
    savePersistedState();

    const modal = document.getElementById('modalVerifyPortraits');
    if (modal) {
        modal.classList.remove('hidden');
        renderActivePortrait();
    }
}

// Helper slugification function
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function renderActivePortrait() {
    if (portraitRetryTimeout) {
        clearTimeout(portraitRetryTimeout);
        portraitRetryTimeout = null;
    }
    const list = appState.portraitsToVerify;
    const idx = appState.activePortraitIndex;
    if (!list || list.length === 0 || idx < 0 || idx >= list.length) return;

    const portrait = list[idx];

    const counter = document.getElementById('portraitVerifyCounter');
    if (counter) counter.textContent = `Portrait ${idx + 1}/${list.length}`;

    const nameEl = document.getElementById('portraitVerifyName');
    if (nameEl) nameEl.textContent = portrait.name;

    const roleEl = document.getElementById('portraitVerifyRole');
    if (roleEl) {
        roleEl.textContent = portrait.role;
        if (portrait.role === "La Victime") {
            roleEl.className = "px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-red-950/20 border border-red-500/20 text-red-500 inline-block";
        } else if (portrait.role === "Le Coupable" || portrait.role === "Coupable") {
            roleEl.className = "px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-blood/20 border border-blood/30 text-blood inline-block";
        } else if (portrait.role === "Faux-Coupable") {
            roleEl.className = "px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-amber-500/10 border border-amber-500/20 text-amber-500 inline-block";
        } else {
            roleEl.className = "px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded font-extrabold bg-gold/10 border border-gold/20 text-gold inline-block";
        }
    }

    const descEl = document.getElementById('portraitVerifyDesc');
    if (descEl) descEl.textContent = portrait.bio || "Aucune description.";

    const imgEl = document.getElementById('portraitVerifyImage');
    const spinner = document.getElementById('portraitVerifySpinner');
    const spinnerText = document.getElementById('portraitVerifySpinnerText');
    if (imgEl) {
        if (spinner) spinner.classList.remove('hidden');
        if (spinnerText) spinnerText.textContent = "Chargement...";
        imgEl.style.opacity = "0";

        let attempts = 0;
        const maxAttempts = 20; // 60 seconds total window (20 * 3s)
        const baseSrc = portrait.imageUrl;
        const isGithubUrl = baseSrc.includes("raw.githubusercontent.com") || baseSrc.includes("github.com");

        const tryLoad = () => {
            let finalSrc = baseSrc;
            if (attempts > 0 && isGithubUrl) {
                const separator = baseSrc.includes('?') ? '&' : '?';
                finalSrc = `${baseSrc}${separator}t=${Date.now()}`;
            }
            imgEl.src = finalSrc;
        };

        imgEl.onload = () => {
            if (spinner) spinner.classList.add('hidden');
            imgEl.style.opacity = "1";
        };

        imgEl.onerror = () => {
            if (isGithubUrl && attempts < maxAttempts) {
                attempts++;
                if (spinnerText) {
                    spinnerText.textContent = `Récupération en cours (${attempts}/${maxAttempts})...`;
                }
                portraitRetryTimeout = setTimeout(tryLoad, 3000);
            } else {
                if (spinner) spinner.classList.add('hidden');
                imgEl.src = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=300";
                imgEl.style.opacity = "1";
            }
        };

        tryLoad();
    }

    const btnPrev = document.getElementById('btnPrevPortrait');
    const btnNext = document.getElementById('btnNextPortrait');
    if (btnPrev) {
        if (idx === 0) {
            btnPrev.setAttribute('disabled', 'true');
            btnPrev.style.opacity = "0.3";
        } else {
            btnPrev.removeAttribute('disabled');
            btnPrev.style.opacity = "1";
        }
    }
    if (btnNext) {
        if (idx === list.length - 1) {
            btnNext.setAttribute('disabled', 'true');
            btnNext.style.opacity = "0.3";
        } else {
            btnNext.removeAttribute('disabled');
            btnNext.style.opacity = "1";
        }
    }
}

function handlePrevPortrait() {
    if (appState.activePortraitIndex > 0) {
        appState.activePortraitIndex--;
        renderActivePortrait();
    }
}

function handleNextPortrait() {
    if (appState.portraitsToVerify && appState.activePortraitIndex < appState.portraitsToVerify.length - 1) {
        appState.activePortraitIndex++;
        renderActivePortrait();
    }
}

async function handleApprovePortraits() {
    const modal = document.getElementById('modalVerifyPortraits');
    const btnApprove = document.getElementById('btnApprovePortraits');

    if (btnApprove) {
        btnApprove.setAttribute('disabled', 'true');
        btnApprove.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-xs"></i> Lancement Étape 3...`;
    }

    try {
        if (appState.n8nBaseUrl && !appState.isSimulationMode) {
            addLiveLog(`[Validation] Lancement de l'étape 3 (mp-generate-scenario-3) en arrière-plan...`);
            
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-scenario-3`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    scenario_id: appState.pendingScenarioId || (appState.scenario ? appState.scenario.id : ""),
                    organizer_email: appState.currentUser ? appState.currentUser.email : 'organisateur@email.com'
                })
            });

            if (!response.ok) {
                console.warn(`Erreur lors du lancement de l'étape 3 (${response.status})`);
                showToast("Attention", "L'étape 3 n'a pas pu être lancée automatiquement.", "warning");
            } else {
                showToast("Étape 3 Lancée", "La génération des indices et de la scène de crime a démarré !", "success");
            }
        } else {
            showToast("Portraits Validés", "Simulation terminée.", "success");
        }
    } catch (err) {
        console.error("Error triggering step 3 webhook:", err);
        showToast("Erreur", "Impossible de contacter le serveur pour lancer l'étape 3.", "error");
    } finally {
        if (btnApprove) {
            btnApprove.removeAttribute('disabled');
            btnApprove.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valider et continuer`;
        }
    }

    if (modal) modal.classList.add('hidden');
    
    closeVictimModal();
    const genOverlay = document.getElementById('scenarioGeneratingOverlay');
    if (genOverlay) genOverlay.classList.add('hidden');
    
    appState.orgaView = 'generated';
    savePersistedState();
    renderOrganizerDashboard();
}

function startVictimPolling(scenarioId) {
    if (victimPollInterval) clearInterval(victimPollInterval);

    let pollCount = 0;
    const maxPolls = 160; // 8 minutes timeout (160 * 3s = 480s)

    victimPollInterval = setInterval(async () => {
        pollCount++;
        if (pollCount >= maxPolls) {
            clearInterval(victimPollInterval);
            victimPollInterval = null;
            const genOverlay = document.getElementById('scenarioGeneratingOverlay');
            if (genOverlay) {
                genOverlay.classList.add('hidden');
                const loadVideo = document.getElementById('iasminaLoadingVideo');
                if (loadVideo) loadVideo.pause();
            }
            showToast("Délai dépassé", "La génération des suspects prend plus de temps que prévu. Veuillez vérifier l'état de votre workflow n8n.", "warning");
            addLiveLog(`[Polling] Timeout de génération dépassé après 8 minutes.`);
            return;
        }

        try {
            let scenarioDetails = null;

            if (appState.n8nBaseUrl) {
                try {
                    const res = await fetch(`${appState.n8nBaseUrl}/webhook/mp-get-scenario-details`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ scenario_id: scenarioId })
                    });
                    if (res.ok) {
                        const data = await res.json();
                        let rawScenario = extractRawScenario(data);
                        if (rawScenario) {
                            console.log("[Polling] rawScenario récupéré depuis n8n :", rawScenario);
                            scenarioDetails = mapScenarioProperties(rawScenario);
                            
                            // Extract and merge images in polling too!
                            let rawImages = null;
                            if (Array.isArray(data) && data.length > 0) {
                                rawImages = data[0].images;
                            } else if (data && data.images) {
                                rawImages = data.images;
                            }
                            
                            if (typeof rawImages === 'string') {
                                try {
                                    rawImages = JSON.parse(rawImages);
                                } catch (e) {}
                            }
                            
                            if (Array.isArray(rawImages) && scenarioDetails) {
                                scenarioDetails = enrichScenarioWithImages(scenarioDetails, rawImages);
                            }
                            console.log("[Polling] scenarioDetails mappé et enrichi :", scenarioDetails);
                        } else {
                            console.log("[Polling] Aucun rawScenario extrait des données webhook :", data);
                        }
                    }
                } catch (err) {
                    console.warn("Polling get-scenario-details failed", err);
                }
            }

            if (!scenarioDetails) {
                const config = await getNotionConfig();
                if (config && config.NOTION_TOKEN) {
                    try {
                        const res = await fetch(`https://api.notion.com/v1/pages/${scenarioId}`, {
                            method: 'GET',
                            headers: {
                                'Authorization': `Bearer ${config.NOTION_TOKEN}`,
                                'Notion-Version': '2022-06-28'
                            }
                        });
                        if (res.ok) {
                            const page = await res.json();
                            console.log("[Polling] Page Notion récupérée directement :", page);
                            
                            // Map properties directly from Notion page
                            scenarioDetails = mapScenarioProperties(page);
                            console.log("[Polling] Mappage direct depuis Notion page :", scenarioDetails);

                            const statusProp = page.properties["Statut"];
                            const statusName = statusProp && statusProp.select ? statusProp.select.name : "";
                            const lowerStatus = (statusName || "").toLowerCase();
                            
                            if (lowerStatus === "vérifié" || lowerStatus === "vérifie" || lowerStatus === "verifie" || lowerStatus === "verify") {
                                if (appState.n8nBaseUrl) {
                                    try {
                                        const detailsRes = await fetch(`${appState.n8nBaseUrl}/webhook/mp-get-scenario-details`, {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ scenario_id: scenarioId })
                                        });
                                        if (detailsRes.ok) {
                                            const detailsData = await detailsRes.json();
                                            let rawScenario = extractRawScenario(detailsData);
                                            if (rawScenario) {
                                                scenarioDetails = mapScenarioProperties(rawScenario);
                                                
                                                // Extract and merge images here too!
                                                let rawImages = null;
                                                if (Array.isArray(detailsData) && detailsData.length > 0) {
                                                    rawImages = detailsData[0].images;
                                                } else if (detailsData && detailsData.images) {
                                                    rawImages = detailsData.images;
                                                }
                                                
                                                if (typeof rawImages === 'string') {
                                                    try {
                                                        rawImages = JSON.parse(rawImages);
                                                    } catch (e) {}
                                                }
                                                
                                                if (Array.isArray(rawImages) && scenarioDetails) {
                                                    scenarioDetails = enrichScenarioWithImages(scenarioDetails, rawImages);
                                                }
                                                console.log("[Polling] Mappage final après statut Vérifié depuis n8n :", scenarioDetails);
                                            }
                                        }
                                    } catch (detailsErr) {
                                        console.warn("Direct Notion fallback get-scenario-details failed", detailsErr);
                                    }
                                }
                            }
                        }
                    } catch (notionErr) {
                        console.error("Polling direct Notion failed", notionErr);
                    }
                }
            }

            let totalImages = 0;
            let targetCount = 17; // 1 victim + 16 suspects

            if (scenarioDetails) {
                if (scenarioDetails.victimObj && scenarioDetails.victimObj.avatarUrl) {
                    totalImages++;
                } else if (scenarioDetails.illustration || scenarioDetails.property_photo_victime) {
                    totalImages++;
                }

                if (Array.isArray(scenarioDetails.suspects)) {
                    scenarioDetails.suspects.forEach(sus => {
                        if (sus.avatarUrl || sus.avatar_url || sus.illustration || sus.property_avatar_photo) {
                            totalImages++;
                        }
                    });
                }

                const titleText = document.getElementById('scenarioGeneratingTitle');
                if (titleText) {
                    titleText.textContent = `L'IA-gens Portraitiste IArthur réalise les portraits de la victime et des 16 suspects (${totalImages} / ${targetCount} terminés)`;
                }
            }

            const statusLower = (scenarioDetails && scenarioDetails.status) ? scenarioDetails.status.toLowerCase() : "";
            const isFinished = statusLower === "vérifié" || statusLower === "vérifie" || statusLower === "verifie" || statusLower === "verify" || (scenarioDetails && totalImages >= targetCount);
            if (scenarioDetails && isFinished) {
                clearInterval(victimPollInterval);
                victimPollInterval = null;

                handleStep2Completion(scenarioDetails);
                showToast("Génération Réussie !", "Le scénario et les suspects sont prêts !", "success");
            }
        } catch (e) {
            console.error("Error in victim polling tick", e);
        }
    }, 3000);
}

function closeVictimModal() {
    if (victimPollInterval) {
        clearInterval(victimPollInterval);
        victimPollInterval = null;
    }
    const modal = document.getElementById('modalValidateVictim');
    if (modal) modal.classList.add('hidden');
}

async function handleApproveVictim() {
    step2CompletionTriggered = false;
    const validationModal = document.getElementById('modalValidateVictim');
    if (validationModal) {
        validationModal.classList.add('hidden');
    }

    const approveBtn = document.getElementById('approveVictimBtn');
    const rejectBtn = document.getElementById('rejectVictimBtn');
    const statusText = document.getElementById('victimValidationStatus');
    const genOverlay = document.getElementById('scenarioGeneratingOverlay');
    const overlayText = genOverlay ? genOverlay.querySelector('p') : null;

    if (approveBtn) {
        approveBtn.setAttribute('disabled', 'true');
        approveBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-xs"></i> Envoi...`;
    }
    if (rejectBtn) {
        rejectBtn.setAttribute('disabled', 'true');
    }

    if (statusText) {
        statusText.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-blood"></i> Validation en cours. Génération finale lancée...`;
        statusText.classList.remove('hidden');
    }

    if (genOverlay) {
        if (overlayText) overlayText.textContent = "";
        
        // Dynamically replace IAsmina video and text with IArthur for step 2
        const titleText = document.getElementById('scenarioGeneratingTitle');
        if (titleText) {
            titleText.textContent = "L'IA-gens Portraitiste IArthur réalise les portraits de la victime et des 16 suspects";
        }
        
        const loadVideo = document.getElementById('iasminaLoadingVideo');
        if (loadVideo) {
            loadVideo.src = "https://github.com/SamiSteyre/murderparty/raw/main/images/IArthur1.mp4";
            loadVideo.currentTime = 0;
            loadVideo.play().catch(err => console.warn("Loading video play failed:", err));
        }
        
        genOverlay.classList.remove('hidden');
    }

    // Start polling Notion / list-scenarios webhook for completion status
    if (!appState.isSimulationMode && appState.pendingScenarioId) {
        startVictimPolling(appState.pendingScenarioId);
    }

    try {
        let dataScenario = null;

        if (appState.resumeFormUrl) {
            // Mode Wait-node
            addLiveLog(`[Validation] Mode Wait-node : Reprise du workflow n8n...`);
            const response = await fetch(appState.resumeFormUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ approved: true, satisfait: "Oui" })
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la validation n8n (${response.status})`);
            }

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                dataScenario = await response.json();
            }
        } else {
            // Mode split deux étapes
            addLiveLog(`[Validation] Mode deux étapes : Lancement du deuxième workflow (mp-generate-scenario-2)...`);
            
            const theme = (appState.pendingScenarioData && appState.pendingScenarioData.theme) ? appState.pendingScenarioData.theme : (document.getElementById('scenarioTheme').value.trim() || "");
            const userPitch = (appState.pendingScenarioData && appState.pendingScenarioData.pitch) ? appState.pendingScenarioData.pitch : (document.getElementById('scenarioPitch').value.trim() || "");
            const epoch = (appState.pendingScenarioData && appState.pendingScenarioData.epoch) ? appState.pendingScenarioData.epoch : (document.getElementById('scenarioEpoch').value || "passé");
            
            const payload = {
                scenario_id: appState.pendingScenarioId,
                theme: theme,
                pitch_global: userPitch,
                epoch: epoch,
                organizer_email: appState.currentUser ? appState.currentUser.email : 'organisateur@email.com',
                victim: appState.pendingScenarioData ? appState.pendingScenarioData.victim : null,
                suspects: appState.pendingScenarioData ? appState.pendingScenarioData.suspects : null
            };

            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-scenario-2`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Erreur lors de la génération finale (${response.status})`);
            }

            dataScenario = await response.json();
        }

        let rawScenario = extractRawScenario(dataScenario);

        let images = null;
        if (dataScenario) {
            let rawImages = dataScenario.images;
            if (Array.isArray(dataScenario) && dataScenario.length > 0) {
                rawImages = dataScenario[0].images;
            } else if (rawScenario && rawScenario.images) {
                rawImages = rawScenario.images;
            }
            
            if (typeof rawImages === 'string') {
                try {
                    rawImages = JSON.parse(rawImages);
                } catch (e) {
                    console.warn("Failed to parse images string in handleApproveVictim", e);
                }
            }
            
            if (Array.isArray(rawImages)) {
                images = rawImages;
            }
        }

        if (rawScenario && (rawScenario.scenario_id || rawScenario.id)) {
            addLiveLog(`[Validation] Données complètes du scénario reçues et chargées.`);
            
            if (victimPollInterval) {
                clearInterval(victimPollInterval);
                victimPollInterval = null;
            }
            
            let mappedScenario = mapScenarioProperties(rawScenario);
            if (images) {
                mappedScenario = enrichScenarioWithImages(mappedScenario, images);
                addLiveLog(`[Validation] ${images.length} portraits IA fusionnés depuis le webhook.`);
            }
            handleStep2Completion(mappedScenario);
            showToast("Succès", "Scénario généré avec succès !", "success");
            return;
        }

        addLiveLog(`[Validation] Requête envoyée. Attente de la mise à jour Notion...`);

    } catch (err) {
        console.error("Error approving victim:", err);
        
        // If it's a network/CORS/Mixed-Content error, the request might have actually reached n8n successfully.
        // We let the polling finish the job instead of blocking the user.
        if (err.message === "Failed to fetch" || err.name === "TypeError") {
            addLiveLog(`[Validation] CORS/Erreur Réseau détectée. Tentative de poursuite via le polling Notion...`);
            
            if (statusText) {
                statusText.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-blood"></i> Requête envoyée. Génération finale en cours...`;
            }
            return;
        }

        if (genOverlay) genOverlay.classList.add('hidden');

        if (victimPollInterval) {
            clearInterval(victimPollInterval);
            victimPollInterval = null;
        }

        showToast("Erreur de validation", err.message || "Impossible de valider la victime.", "error");
        
        if (approveBtn) {
            approveBtn.removeAttribute('disabled');
            approveBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valider et continuer`;
        }
        if (rejectBtn) {
            rejectBtn.removeAttribute('disabled');
        }
    }
}

async function handleRejectVictim() {
    closeVictimModal();
    
    showToast("Recommencement", "Génération d'une nouvelle victime...", "info");
    
    if (appState.resumeFormUrl) {
        try {
            fetch(appState.resumeFormUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ approved: false, satisfait: "Non" })
            }).catch(e => console.warn("Failed to notify n8n of rejection:", e));
        } catch (e) {
            console.warn("Failed to notify n8n of rejection:", e);
        }
    }
    
    const fakeEvent = { preventDefault: () => {} };
    handleUnifiedSessionSubmit(fakeEvent);
}

function generateMockScenario(theme, userPitch, epoch, victim) {
    const simulatedSuspects = CHARACTER_TEMPLATES.map((char, index) => {
        return {
            name: char.name,
            bio: char.bio,
            relation: char.relation,
            marker: char.marker,
            genre: char.genre,
            outfit: char.outfit,
            status: index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent")
        };
    });

    const simulatedRooms = [
        {
            name: "Le Bureau de l'arrière-boutique",
            clues: [
                { name: "Verre de champagne brisé", description: "Une flûte en cristal gît en morceaux sous une table. Une légère odeur d'amande amère s'en dégage." },
                { name: "Foulard en soie égaré", description: "Un luxueux foulard en soie monogrammé, coincé dans la charnière d'un fauteuil." },
                { name: "Cendrier tiède", description: "Contient des cendres de cigares haut de gamme importés." }
            ]
        },
        {
            name: "Le Grand Salon",
            clues: [
                { name: "Livre d'alchimie déplacé", description: "Un ouvrage poussiéreux sur les poisons végétaux est posé à l'envers sur une étagère." },
                { name: "Lettre de chantage déchirée", description: "Des morceaux de papier révélant une demande de rançon de 100 000 francs." },
                { name: "Montre à gousset cassée", description: "Une montre dont le verre est brisé, arrêtée précisément sur 21h45." }
            ]
        },
        {
            name: "La Bibliothèque",
            clues: [
                { name: "Fiole d'Arsenic vide", description: "Un flacon d'apothicaire caché au fond du placard à épices. L'étiquette mentionne 'Arsenic'." },
                { name: "Couteau de cuisine manquant", description: "Un emplacement est vide dans le bloc de couteaux du chef Gaston." },
                { name: "Tisanière encore chaude", description: "Une tasse de camomille entamée, contenant des résidus de poudre blanche." }
            ]
        },
        {
            name: "La Cuisine",
            clues: [
                { name: "Terre meuble suspecte", description: "La terre d'une grande plante verte semble avoir été retournée récemment. Quelque chose y est enfoui." },
                { name: "Clé dorée", description: "Une petite clé en laiton retrouvée sous un pot de fleur. Elle semble ouvrir un tiroir secret." },
                { name: "Traces de pas boueuses", description: "Des empreintes menant de la porte vitrée vers le fauteuil du fond." }
            ]
        },
        {
            name: "Le Jardin d'Hiver",
            clues: [
                { name: "Coffre-fort ouvert", description: "Le coffre dissimulé derrière le tableau est grand ouvert. Il est vide de tout document légal." },
                { name: "Dernier Testament", description: "Un brouillon de testament déshéritant les proches de la victime au profit d'une œuvre caritative." },
                { name: "Chemise ensanglantée", description: "Une chemise d'homme froissée portant des taches de sang, dissimulée dans le panier à linge." }
            ]
        },
        {
            name: "La Chambre de la Victime",
            clues: [
                { name: "Bouteille de grand cru entamée", description: "Un château Margaux 1918 ouvert, contenant des traces de sédatif liquide." },
                { name: "Mégot de cigarette pourpre", description: "Un mégot de cigarette portant une trace de rouge à lèvres rouge vif." },
                { name: "Bouton de manchette en or", description: "Un bouton gravé d'un blason militaire, perdu près des casiers de Bourgogne." }
            ]
        },
        {
            name: "La Serre principale",
            clues: [
                { name: "Sécateur taché", description: "Un sécateur avec des traces suspectes de rouille sombre." },
                { name: "Fleur rare écrasée", description: "Une fleur rare exotique piétinée au sol de la serre." },
                { name: "Gant en cuir", description: "Un gant noir abandonné sous les feuilles d'une fougère." }
            ]
        },
        {
            name: "Le Grand Hall",
            clues: [
                { name: "Horloge brisée", description: "Une horloge murale arrêtée à 22h05 après un choc violent." },
                { name: "Parapluie mouillé", description: "Un parapluie encore humide dans le porte-manteau de l'entrée." },
                { name: "Lettre anonyme", description: "Un mot d'avertissement froissé trouvé par terre près de la porte." }
            ]
        },
        {
            name: "La Cave à Vins",
            clues: [
                { name: "Verre en cristal fêlé", description: "Un verre portant des traces de vin rouge séché." },
                { name: "Bouchon de liège", description: "Un bouchon de liège marqué d'une date ancienne." },
                { name: "Clé de la cave", description: "La clé en fer forgé permettant d'ouvrir la grille de la cave." }
            ]
        },
        {
            name: "Le Boudoir",
            clues: [
                { name: "Flacon de parfum vide", description: "Un parfum rare dont l'odeur embaume encore le petit divan." },
                { name: "Lettre d'amour brûlée", description: "Un mot doux à moitié consumé dans la cheminée." },
                { name: "Épingle à cheveux dorée", description: "Une épingle dorée trouvée sous le tapis." }
            ]
        }
    ];

    const simulatedTimeline = [
        { time: "18:00", room: "Le Vestibule", suspects: ["Baptiste le Valet", victim.name], description: `Baptiste le Valet accueille ${victim.name} et prend son manteau.` },
        { time: "Veille - 21:30", room: "La Chambre de la Victime", suspects: ["Mlle Rose", victim.name], description: `Mlle Rose a une discussion houleuse avec ${victim.name} au sujet de son héritage.` },
        { time: "19:15", room: "Le Grand Salon", suspects: ["Madame Pervenche", victim.name], description: `Madame Pervenche discute discrètement d'une importante dette d'argent avec ${victim.name}.` },
        { time: "20:30", room: "Le Bureau de l'arrière-boutique", suspects: ["Colonel Moutarde", victim.name], description: `Une violente altercation verbale éclate entre le Colonel Moutarde et la victime.` },
        { time: "MOMENT DU CRIME", room: "Le Bureau de l'arrière-boutique", suspects: ["Lord Thomas Blackwood"], description: "Le coupable s'introduit discrètement dans la pièce et commet le crime de sang-froid." }
    ];

    const simulatedClues = [];
    simulatedRooms.forEach(room => {
        const roomName = room.name;
        simulatedClues.push({
            name: `Indice A - ${roomName}`,
            description: `Un résidu d'activité ou un objet anodin pouvant servir d'indice dans la pièce "${roomName}".`,
            type: "Fouille de Pièce",
            location: roomName
        });
        simulatedClues.push({
            name: `Lettre suspecte - ${roomName}`,
            description: `Une trace d'écrit froissée abandonnée dans la pièce "${roomName}".`,
            type: "Fouille de Pièce",
            location: roomName
        });
        simulatedClues.push({
            name: `Livre de comptes - ${roomName}`,
            description: `Un grand registre comptable trouvé sous une étagère dans la pièce "${roomName}".`,
            type: "Fouille de Pièce",
            location: roomName
        });
    });

    simulatedSuspects.forEach(sus => {
        simulatedClues.push({
            name: `Document compromettant de ${sus.name}`,
            description: `Un document secret inspiré par la biographie de ${sus.name}, révélant un mobile financier ou passionnel important lié à la victime.`,
            type: "Affaire Personnelle",
            location: `Affaires de ${sus.name}`
        });
        simulatedClues.push({
            name: `Note d'agenda de ${sus.name}`,
            description: `Une preuve matérielle indiquant la présence ou un acte de ${sus.name} à un moment précis de sa timeline d'avant-meurtre.`,
            type: "Affaire Personnelle",
            location: `Affaires de ${sus.name}`
        });
        if (sus.status === "Coupable") {
            simulatedClues.push({
                name: `L'Arme du Crime (de ${sus.name})`,
                description: `La véritable arme du crime utilisée pour assassiner la victime (${victim.name}). Elle a été trouvée dans les affaires de ${sus.name}.`,
                type: "Affaire Personnelle",
                location: `Affaires de ${sus.name}`
            });
        } else {
            simulatedClues.push({
                name: `Objet insolite de ${sus.name}`,
                description: `Un objet personnel tranchant ou suspect pouvant servir d'arme de substitution, inspiré de la biographie de ${sus.name}.`,
                type: "Affaire Personnelle",
                location: `Affaires de ${sus.name}`
            });
        }
    });

    return {
        success: true,
        scenario_id: "sc_" + Math.random().toString(36).substr(2, 9),
        title: "Le Dernier Souffle du Speakeasy",
        general_location: "Un Speakeasy clandestin",
        murder_room: "Le Bureau de l'arrière-boutique",
        victim: victim,
        clues_count: simulatedClues.length,
        pitch: userPitch || "Dans la pénombre d'un club de jazz clandestin, un parrain de la mafia a été assassiné de sang-froid.",
        Illustration: "illustrations/speakeasy.png",
        suspects: simulatedSuspects,
        rooms: simulatedRooms,
        timeline: simulatedTimeline,
        clues: simulatedClues
    };
}

async function handleSimulateApprove() {
    const approveBtn = document.getElementById('btnSimulateApprove');
    if (approveBtn) {
        approveBtn.setAttribute('disabled', 'true');
        approveBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-xs"></i> Génération finale...`;
    }

    await sleep(2000);

    try {
        const params = appState.simulatedParams || {
            theme: "Prohibition",
            userPitch: "",
            epoch: "Années 20",
            victim: {
                name: "Lord James Lenoir (Le Propriétaire du Speakeasy)",
                genre: "Homme",
                short_hook: "Un parrain de la mafia respecté de la pègre locale gisant dans son propre bureau secret.",
                marker: "Une bague de chevalière gravée d'une tête de lion",
                outfit: "Smoking en velours noir sur mesure avec nœud papillon blanc déboutonné."
            }
        };

        const dataScenario = generateMockScenario(params.theme, params.userPitch, params.epoch, params.victim);

        let resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/raw/main/illustrations/speakeasy.png";

        appState.scenario = {
            id: dataScenario.scenario_id,
            title: dataScenario.title,
            theme: params.theme,
            pitch: dataScenario.pitch,
            crimeRoom: dataScenario.murder_room,
            victim: dataScenario.victim.name,
            victimOutfit: dataScenario.victim.outfit,
            cluesCount: dataScenario.clues_count,
            imageUrl: resolvedImageUrl,
            chronology: dataScenario.timeline.map(e => e.time + ' - ' + e.room + ' (' + e.suspects.join(', ') + ') : ' + e.description).join('\n')
        };

        const suspectsData = dataScenario.suspects;
        appState.players = suspectsData.map((s, index) => {
            const charTemplate = CHARACTER_TEMPLATES[index % CHARACTER_TEMPLATES.length];
            return {
                email: "",
                roleType: s.status || (index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent")),
                roleName: s.name,
                history: s.bio,
                lienVictime: s.relation,
                marker: s.marker,
                genre: s.genre,
                secret: charTemplate.secret || "",
                chronology: charTemplate.chronology || "",
                outfit: s.outfit || "",
                relations: s.relations || [],
                characterTraits: "",
                avatarUrl: "",
                actionPoints: 1,
                status: "Créé",
                knowledge: [],
                missions: []
            };
        });

        appState.clues = [];
        dataScenario.clues.forEach((c, idx) => {
            appState.clues.push({
                id: c.id || `clue_${c.location.replace(/\s+/g, '_')}_${idx}`,
                name: c.name,
                description: c.description,
                type: c.type || "Fouille de Pièce",
                location: c.location,
                status: "Caché",
                foundBy: ""
            });
        });

        closeVictimModal();
        playRevealVideo("https://github.com/SamiSteyre/murderparty/raw/main/images/IArthur2.mp4", () => {
            showPortraitsVerificationModal();
            showToast("Scénario Prêt !", "Simulation de la génération complète réussie !", "success");
        });
    } catch (err) {
        console.error(err);
        showToast("Erreur Simulation", err.message || "Erreur de génération simulée.", "error");
    } finally {
        if (approveBtn) {
            approveBtn.removeAttribute('disabled');
            approveBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Valider et continuer (Simulé)`;
        }
    }
}

// 1. Webhook: POST /webhook/generate-scenario
// Note: handleToggleScenarioMode removed since mode switching is managed by direct card clicks and renderOrganizerDashboard.

async function handleUnifiedSessionSubmit(e) {
    e.preventDefault();
    
    const scenarioMode = document.getElementById('scenarioMode').value;
    const submitBtn = document.getElementById('unifiedSubmitBtn');

    if (!scenarioMode) {
        showToast("Erreur", "Veuillez sélectionner un mode de scénario.", "error");
        return;
    }

    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-sm"></i> Orchestration IA en cours...`;
    
    appState.logs = []; // Clear old logs
    addLiveLog(`[Démarrage] Initialisation de la génération du scénario...`);
    renderOrganizerDashboard();

    try {
        let scenarioId = "";
        let totalClues = 24;

        if (scenarioMode === 'create') {
            const theme = document.getElementById('scenarioTheme').value.trim();
            const userPitch = document.getElementById('scenarioPitch').value.trim();
            const epoch = document.getElementById('scenarioEpoch').value;

            if (!theme) {
                throw new Error("Veuillez renseigner un thème pour la génération de scénario.");
            }

            const genOverlay = document.getElementById('scenarioGeneratingOverlay');
            if (genOverlay) {
                const titleText = document.getElementById('scenarioGeneratingTitle');
                if (titleText) {
                    titleText.textContent = "L'IA-gens Profiler IAsmina identifie la victime et dresse la liste des 16 suspects";
                }
                
                const loadVideo = document.getElementById('iasminaLoadingVideo');
                if (loadVideo) {
                    loadVideo.src = "https://github.com/SamiSteyre/murderparty/raw/main/images/IAsmina1.mp4";
                    loadVideo.currentTime = 0;
                    loadVideo.play().catch(err => console.warn("Loading video play failed:", err));
                }
                genOverlay.classList.remove('hidden');
            }

            addLiveLog(`[Agent 1: Scénariste] Génération de l'intrigue (Thème: "${theme}", Époque: "${epoch}")...`);
            renderOrganizerDashboard();

            let dataScenario = null;
            if (appState.n8nBaseUrl) {
                // Call real n8n agent orchestration
                const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-scenario`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        theme: theme,
                        pitch_global: userPitch,
                        epoch: epoch,
                        organizer_email: appState.currentUser ? appState.currentUser.email : 'organisateur@email.com'
                    })
                });
                if (!response.ok) throw new Error("Erreur de communication avec l'Agent Scénariste.");
                dataScenario = await response.json();

                const isWaitNode = dataScenario && (dataScenario.resume_form_url || dataScenario.resume_url);
                const isTwoStepDraft = dataScenario && dataScenario.victim && (!dataScenario.clues || dataScenario.clues.length === 0);

                if (isWaitNode || isTwoStepDraft) {
                    appState.resumeFormUrl = isWaitNode ? (dataScenario.resume_form_url || dataScenario.resume_url) : null;
                    appState.pendingScenarioId = dataScenario.scenario_id || dataScenario.id;
                    appState.pendingScenarioData = dataScenario;
                    savePersistedState();

                    showVictimValidationModal(dataScenario.victim, false);

                    // Reset submit button, and return early
                    submitBtn.removeAttribute('disabled');
                    submitBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Générer un scénario`;
                    renderOrganizerDashboard();
                    return;
                }
            } else {
                // Local simulation fallback
                await sleep(1500);

                const simulatedVictim = {
                    name: "Lord James Lenoir (Le Propriétaire du Speakeasy)",
                    genre: "Homme",
                    short_hook: "Un parrain de la mafia respecté de la pègre locale gisant dans son propre bureau secret.",
                    marker: "Une bague de chevalière gravée d'une tête de lion",
                    outfit: "Un smoking de soirée en velours noir sur mesure avec un nœud papillon blanc déboutonné, une montre à gousset dorée cassée et une rose rouge flétrie à la boutonnière."
                };

                appState.simulatedParams = {
                    theme: theme,
                    userPitch: userPitch,
                    epoch: epoch,
                    victim: simulatedVictim
                };
                savePersistedState();

                showVictimValidationModal(simulatedVictim, true);

                // Reset submit button, and return early
                submitBtn.removeAttribute('disabled');
                submitBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Générer un scénario`;
                renderOrganizerDashboard();
                return;
            }

            // Compute scenario illustration image URL using SamiSteyre repo + Notion column content
            let rawIllustration = dataScenario.illustration || dataScenario.Illustration || dataScenario.illustration_url || "";
            let resolvedImageUrl = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";

            if (rawIllustration) {
                if (typeof rawIllustration === 'string') {
                    if (rawIllustration.startsWith('http://') || rawIllustration.startsWith('https://')) {
                        resolvedImageUrl = rawIllustration;
                    } else {
                        const cleanPath = rawIllustration.replace(/^\/+/, '');
                        resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/" + cleanPath;
                    }
                } else if (Array.isArray(rawIllustration) && rawIllustration.length > 0) {
                    let item = rawIllustration[0];
                    let fileUrl = item.file?.url || item.external?.url || item.name || "";
                    if (fileUrl) {
                        if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
                            resolvedImageUrl = fileUrl;
                        } else {
                            const cleanPath = fileUrl.replace(/^\/+/, '');
                            resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/" + cleanPath;
                        }
                    }
                }

                // If it is a GitHub URL, make sure it is a raw URL so that browsers can display it directly
                if (resolvedImageUrl.includes('github.com/SamiSteyre/murderparty') && 
                    !resolvedImageUrl.includes('/raw/') && 
                    !resolvedImageUrl.includes('raw.githubusercontent.com')) {
                    
                    if (resolvedImageUrl.includes('/blob/')) {
                        resolvedImageUrl = resolvedImageUrl.replace('/blob/', '/raw/');
                    } else {
                        resolvedImageUrl = resolvedImageUrl.replace('github.com/SamiSteyre/murderparty/', 'github.com/SamiSteyre/murderparty/raw/main/');
                    }
                }
            }

            appState.scenario = {
                id: dataScenario.scenario_id,
                title: dataScenario.title,
                theme: theme,
                pitch: dataScenario.pitch,
                crimeRoom: dataScenario.murder_room,
                victim: dataScenario.victim_name || (dataScenario.victim ? (typeof dataScenario.victim === 'string' ? dataScenario.victim : dataScenario.victim.name) : "Non définie"),
                victimOutfit: dataScenario.victim_outfit || (dataScenario.victim && typeof dataScenario.victim === 'object' ? dataScenario.victim.outfit : "") || "",
                cluesCount: dataScenario.clues_count || 24,
                imageUrl: resolvedImageUrl,
                chronology: dataScenario.chronology || (dataScenario.timeline ? dataScenario.timeline.map(e => e.time + ' - ' + e.room + ' (' + e.suspects.join(', ') + ') : ' + e.description).join('\n') : "Aucune chronologie disponible.")
            };

            scenarioId = dataScenario.scenario_id;
            totalClues = dataScenario.clues_count || 24;

            addLiveLog(`[Agent 2: Légiste] Scène du crime et indices d'opportunité conçus.`);
            renderOrganizerDashboard();
            await sleep(300);
            
            addLiveLog(`[Agent 3: Profiler] 16 biographies de personnages et indices personnels créés.`);
            renderOrganizerDashboard();
            await sleep(300);

            addLiveLog(`[Agent 4: Chronologue] Fil d'Ariane des missions secrètes généré.`);
            renderOrganizerDashboard();
            await sleep(300);

            addLiveLog(`[Agent 6: Illustrateur] Image de couverture panoramique du scénario générée.`);
            renderOrganizerDashboard();
            await sleep(300);

            // Suspects list mapping into appState.players
            const suspectsData = dataScenario.suspects || CHARACTER_TEMPLATES;
            appState.players = suspectsData.map((s, index) => {
                const charTemplate = CHARACTER_TEMPLATES[index % CHARACTER_TEMPLATES.length];
                return {
                    email: "", // Unassigned initially
                    roleType: s.status || s.roleType || (index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent")),
                    roleName: s.name || s.roleName || charTemplate.name,
                    history: s.bio || s.history || charTemplate.bio,
                    lienVictime: s.relation || s.lienVictime || charTemplate.relation,
                    marker: s.marker || charTemplate.marker,
                    genre: s.genre || s.roleGenre || charTemplate.genre || "Non-Binaire",
                    secret: s.secret || charTemplate.secret || "",
                    chronology: (() => {
                        const rawChrono = s.chronology || (dataScenario.personal_timelines ? (dataScenario.personal_timelines[s.name] || dataScenario.personal_timelines[s.roleName]) : "") || charTemplate.chronology || "";
                        if (Array.isArray(rawChrono)) {
                            return rawChrono.map(e => `${e.time} - ${e.room} : ${e.description}`).join('\n');
                        }
                        return rawChrono;
                    })(),
                    outfit: s.outfit || charTemplate.outfit || "",
                    relations: s.relations || [],
                    characterTraits: "",
                    avatarUrl: "",
                    actionPoints: 1,
                    status: "Créé",
                    knowledge: [],
                    missions: []
                };
            });

            addLiveLog(`Succès : Scénario "${appState.scenario.title}" créé et injecté dans Notion !`);
            renderOrganizerDashboard();

        } else {
            // Select scenario mode
            const hiddenInput = document.getElementById('selectedScenarioId');
            scenarioId = hiddenInput ? hiddenInput.value : "";
            if (!scenarioId) {
                throw new Error("Veuillez sélectionner un scénario existant.");
            }

            const selectedScenario = appState.loadedScenarios ? appState.loadedScenarios.find(s => s.id === scenarioId) : null;
            const scenarioTitle = selectedScenario ? selectedScenario.title : "Scénario";
            if (selectedScenario) {
                // Keep selectedScenario in dataScenario so clues will be populated from it
                dataScenario = selectedScenario;

                // Handle resuming a draft scenario (status "En cours de génération")
                if (selectedScenario.status === "En cours de génération" || selectedScenario.status === "En cours de generation") {
                    addLiveLog(`[Reprise] Récupération de la victime et des suspects pour "${selectedScenario.title}"...`);
                    
                    try {
                        let scenarioDetails = null;

                        if (appState.n8nBaseUrl) {
                            const detailsRes = await fetch(`${appState.n8nBaseUrl}/webhook/mp-get-scenario-details`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ scenario_id: selectedScenario.id })
                            });
                            
                            if (detailsRes.ok) {
                                const detailsData = await detailsRes.json();
                                let rawScenario = null;
                                if (detailsData) {
                                    if (Array.isArray(detailsData) && detailsData.length > 0) {
                                        rawScenario = detailsData[0];
                                    } else if (detailsData.scenario) {
                                        rawScenario = detailsData.scenario;
                                    } else if (detailsData.success && detailsData.scenario) {
                                        rawScenario = detailsData.scenario;
                                    } else if (detailsData.id || detailsData.property_nom || detailsData.name) {
                                        rawScenario = detailsData;
                                    }
                                }
                                if (rawScenario) {
                                    scenarioDetails = mapScenarioProperties(rawScenario);
                                    addLiveLog(`[Reprise] Données récupérées avec succès depuis n8n.`);
                                } else {
                                    console.warn("Format de réponse n8n invalide:", detailsData);
                                }
                            } else {
                                console.warn(`Erreur webhook n8n mp-get-scenario-details (${detailsRes.status})`);
                            }
                        }

                        // Fallback/Mock data if n8n is not configured or failed
                        if (!scenarioDetails) {
                            addLiveLog(`[Reprise] Webhook indisponible ou en erreur. Utilisation des données locales.`);
                            scenarioDetails = {
                                title: selectedScenario.title,
                                theme: selectedScenario.theme || "Années 20 / Prohibition",
                                pitch: selectedScenario.pitch || "Un parrain de la mafia est retrouvé mort dans son club de jazz clandestin.",
                                epoch: selectedScenario.epoch || "passé",
                                victimObj: {
                                    name: selectedScenario.victim || "Lord James Lenoir (Le Propriétaire)",
                                    genre: "Homme",
                                    short_hook: selectedScenario.pitch || "Propriétaire du Speakeasy retrouvé mort.",
                                    outfit: selectedScenario.victimOutfit || "Smoking en velours noir...",
                                    marker: "Une bague de chevalière tête de lion"
                                },
                                suspects: selectedScenario.suspects || CHARACTER_TEMPLATES.map((char, index) => {
                                    return {
                                        name: char.name,
                                        genre: char.genre || "Non-Binaire",
                                        role: index === 0 ? "Le Coupable" : "Suspect",
                                        relation_to_victim: char.relation || "Lien avec la victime",
                                        character_traits: ["Inconnu"],
                                        secret: char.secret || "",
                                        marker: char.marker || ""
                                    };
                                })
                            };
                        }

                        appState.pendingScenarioId = selectedScenario.id;
                        appState.pendingScenarioData = {
                            scenario_id: selectedScenario.id,
                            title: scenarioDetails.title || selectedScenario.title,
                            theme: scenarioDetails.theme || selectedScenario.theme || "",
                            pitch: scenarioDetails.pitch || selectedScenario.pitch || "",
                            epoch: scenarioDetails.epoch || selectedScenario.epoch || "passé",
                            victim: scenarioDetails.victimObj || scenarioDetails.victim,
                            suspects: scenarioDetails.suspects || []
                        };
                        savePersistedState();

                        // Open the victim/suspects validation modal with the fetched data
                        showVictimValidationModal(appState.pendingScenarioData.victim, false);

                    } catch (err) {
                        console.error("Error resuming scenario draft:", err);
                        addLiveLog(`Erreur lors de la reprise : ${err.message}`);
                        showToast("Erreur de reprise", "Impossible de charger les suspects. Veuillez réessayer.", "error");
                    } finally {
                        submitBtn.removeAttribute('disabled');
                        if (selectedScenario.status === "En cours de génération" || selectedScenario.status === "En cours de generation") {
                            submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Vérifier le scénario`;
                        } else {
                            submitBtn.innerHTML = `<i class="fa-solid fa-gears"></i> Lancer la session`;
                        }
                        renderOrganizerDashboard();
                    }
                    return;
                }

                let rawIllustration = selectedScenario.illustration || "";
                let resolvedImageUrl = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";
                
                if (rawIllustration) {
                    if (rawIllustration.startsWith('http://') || rawIllustration.startsWith('https://')) {
                        resolvedImageUrl = rawIllustration;
                    } else {
                        const cleanPath = rawIllustration.replace(/^\/+/, '');
                        resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/" + cleanPath;
                    }
                    
                    if (resolvedImageUrl.includes('github.com/SamiSteyre/murderparty') && 
                        !resolvedImageUrl.includes('/raw/') && 
                        !resolvedImageUrl.includes('raw.githubusercontent.com')) {
                        
                        if (resolvedImageUrl.includes('/blob/')) {
                            resolvedImageUrl = resolvedImageUrl.replace('/blob/', '/raw/');
                        } else {
                            resolvedImageUrl = resolvedImageUrl.replace('github.com/SamiSteyre/murderparty/', 'github.com/SamiSteyre/murderparty/raw/main/');
                        }
                    }
                }

                appState.scenario = {
                    id: selectedScenario.id,
                    title: selectedScenario.title,
                    theme: selectedScenario.theme || "Chargé",
                    pitch: selectedScenario.pitch || "Scénario pré-existant chargé depuis Notion.",
                    crimeRoom: selectedScenario.crimeRoom || "Le Bureau",
                    victim: selectedScenario.victim || "Non définie",
                    victimOutfit: selectedScenario.victimOutfit || "",
                    cluesCount: selectedScenario.cluesCount || 24,
                    imageUrl: resolvedImageUrl,
                    chronology: selectedScenario.chronology || "Aucune chronologie disponible."
                };

                const suspectsData = selectedScenario.suspects || CHARACTER_TEMPLATES;
                appState.players = suspectsData.map((s, index) => {
                    const charTemplate = CHARACTER_TEMPLATES[index % CHARACTER_TEMPLATES.length];
                    return {
                        email: s.email || "",
                        roleType: s.status || s.roleType || (index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent")),
                        roleName: s.name || s.roleName || charTemplate.name,
                        history: s.bio || s.history || charTemplate.bio,
                        lienVictime: s.relation || s.lienVictime || charTemplate.relation,
                        marker: s.marker || charTemplate.marker,
                        genre: s.genre || s.roleGenre || charTemplate.genre || "Non-Binaire",
                        secret: s.secret || charTemplate.secret || "",
                        chronology: (() => {
                            const rawChrono = s.chronology || charTemplate.chronology || "";
                            if (Array.isArray(rawChrono)) {
                                return rawChrono.map(e => `${e.time} - ${e.room} : ${e.description}`).join('\n');
                            }
                            return rawChrono;
                        })(),
                        outfit: s.outfit || charTemplate.outfit || "",
                        relations: s.relations || [],
                        characterTraits: "",
                        avatarUrl: "",
                        actionPoints: 1,
                        status: "Créé",
                        knowledge: [],
                        missions: []
                    };
                });
            } else {
                // Fallback for static options or other manual values
                let simulatedIllustration = "";
                if (scenarioId === 'sc_speakeasy') {
                    simulatedIllustration = "illustrations/speakeasy.png";
                } else if (scenarioId === 'sc_croft') {
                    simulatedIllustration = "illustrations/croft.png";
                } else if (scenarioId === 'sc_neon') {
                    simulatedIllustration = "illustrations/neon.png";
                }

                let resolvedImageUrl = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";
                if (simulatedIllustration) {
                    resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/raw/main/" + simulatedIllustration;
                }

                appState.scenario = {
                    id: scenarioId,
                    title: scenarioTitle.split(' (')[0],
                    theme: "Chargé",
                    pitch: "Scénario pré-existant chargé depuis Notion.",
                    crimeRoom: "Le Bureau",
                    victim: "M. Lenoir (cadavre)",
                    victimOutfit: "Un costume de soirée sombre classique avec gilet de velours pourpre.",
                    cluesCount: 24,
                    imageUrl: resolvedImageUrl,
                    chronology: "18:00 - Le Vestibule (Baptiste le Valet, M. Lenoir) : Accueil des invités.\n19:00 - Le Grand Salon (Mlle Rose, M. Lenoir) : Discussion cordiale.\n20:00 - Le Petit Salon (Colonel Moutarde, M. Lenoir) : Altercation bruyante.\n22:00 - Le Bureau : Heure estimée du crime."
                };

                // Prepopulate 16 suspects from static template for fallback
                appState.players = CHARACTER_TEMPLATES.map((char, index) => {
                    return {
                        email: "",
                        roleType: index === 0 ? "Coupable" : (index === 1 || index === 2 ? "Faux-Coupable" : "Innocent"),
                        roleName: char.name,
                        history: char.bio,
                        lienVictime: char.relation,
                        marker: char.marker,
                        genre: char.genre || "Non-Binaire",
                        secret: char.secret || "",
                        chronology: char.chronology || "",
                        outfit: char.outfit || "",
                        relations: char.relations || [],
                        characterTraits: "",
                        avatarUrl: "",
                        actionPoints: 1,
                        status: "Créé",
                        knowledge: [],
                        missions: []
                    };
                });
            }

            addLiveLog(`Scénario sélectionné : "${appState.scenario.title}".`);
            renderOrganizerDashboard();
        }

        // Initialize clues DB state
        appState.clues = [];
        if (dataScenario && dataScenario.clues && Array.isArray(dataScenario.clues)) {
            dataScenario.clues.forEach((c, idx) => {
                appState.clues.push({
                    id: c.id || `clue_${c.location.replace(/\s+/g, '_')}_${idx}`,
                    name: c.name,
                    description: c.description,
                    type: c.type || "Fouille de Pièce",
                    location: c.location,
                    status: c.status || "Caché",
                    foundBy: c.foundBy || ""
                });
            });
        } else if (dataScenario && dataScenario.rooms && Array.isArray(dataScenario.rooms)) {
            dataScenario.rooms.forEach(room => {
                const roomName = room.name;
                if (room.clues && Array.isArray(room.clues)) {
                    room.clues.forEach((c, idx) => {
                        appState.clues.push({
                            id: `clue_${roomName.replace(/\s+/g, '_')}_${idx}`,
                            name: c.name,
                            description: c.description,
                            type: "Fouille de Pièce",
                            location: roomName,
                            status: "Caché",
                            foundBy: ""
                        });
                    });
                }
            });
        } else {
            Object.entries(ROOMS_DB).forEach(([roomName, cluesList]) => {
                cluesList.forEach((c, idx) => {
                    appState.clues.push({
                        id: `clue_${roomName.replace(/\s+/g, '_')}_${idx}`,
                        name: c.name,
                        description: c.description,
                        type: c.type || "Fouille de Pièce",
                        location: roomName,
                        status: "Caché",
                        foundBy: ""
                    });
                });
            });
        }

        // Switch to the overview panel (2nd stage)
        appState.orgaView = 'generated';
        savePersistedState();
        showToast("Scénario Prêt !", "Vous pouvez maintenant lancer la session et distribuer les e-mails.", "success");

    } catch(err) {
        console.error(err);
        addLiveLog(`Erreur : ${err.message}`);
        showToast("Erreur d'orchestration", err.message || "Une erreur est survenue.", "error");
    } finally {
        const genOverlay = document.getElementById('scenarioGeneratingOverlay');
        if (genOverlay) {
            genOverlay.classList.add('hidden');
            const loadVideo = document.getElementById('iasminaLoadingVideo');
            if (loadVideo) loadVideo.pause();
        }

        submitBtn.removeAttribute('disabled');
        const mode = document.getElementById('scenarioMode').value;
        if (mode === 'create') {
            submitBtn.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i> Générer un scénario`;
        } else {
            submitBtn.innerHTML = `<i class="fa-solid fa-gears"></i> Lancer la session`;
        }
        renderOrganizerDashboard();
    }
}

// 2. Webhook: POST /webhook/mp-send-invitations
async function handleLaunchSession(e) {
    e.preventDefault();

    const sessionName = document.getElementById('setupSessionName').value.trim();
    const sessionLocation = document.getElementById('setupSessionLocation').value.trim();
    const emailsText = document.getElementById('setupSessionEmails').value.trim();
    const submitBtn = document.getElementById('setupLaunchBtn');

    const emails = emailsText.split('\n').map(email => email.trim()).filter(email => email.length > 0);
    
    if (emails.length !== 16) {
        showToast("Erreur de joueurs", `Il faut exactement 16 adresses e-mail de joueurs invités (Actuellement: ${emails.length}).`, "error");
        return;
    }

    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-xs"></i> Lancement de la session...`;

    try {
        let sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
        let pointsPerPlayer = Math.round((appState.scenario.cluesCount / 16) / 1.5) || 1;

        if (appState.n8nBaseUrl) {
            // Tell n8n to send invitations and populate database page
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-send-invitations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    scenario_id: appState.scenario.id,
                    session_name: sessionName,
                    date: new Date().toISOString(),
                    location: sessionLocation,
                    emails: emails
                })
            });
            if (!response.ok) throw new Error("Erreur de communication lors de l'envoi des invitations.");
            const dataInv = await response.json();
            sessionId = dataInv.session_id || sessionId;
            pointsPerPlayer = dataInv.points_per_player || pointsPerPlayer;
        } else {
            await sleep(1500);
        }

        // Shuffle the player emails to assign roles randomly
        const shuffledEmails = [...emails];
        shuffleArray(shuffledEmails);

        // Extract unique rooms from dynamic clues to assign in mission targetRoom
        const uniqueRooms = [...new Set(appState.clues.map(c => c.location))];
        const roomsList = uniqueRooms.length > 0 ? uniqueRooms : Object.keys(ROOMS_DB);

        appState.players.forEach((p, idx) => {
            p.email = shuffledEmails[idx];
            p.actionPoints = pointsPerPlayer;
            p.status = "Invité";

            // Establish alibi knowledge based on other suspects
            const otherChars = appState.players.filter(c => c.roleName !== p.roleName);
            const knowledge1 = `${otherChars[0].roleName} : Alibi suspect près de ${otherChars[0].marker}.`;
            const knowledge2 = `${otherChars[1].roleName} : A été vu(e) avec ${p.marker} en main.`;
            p.knowledge = [knowledge1, knowledge2];
            
            const targetRoom = roomsList[idx % roomsList.length];
            p.missions = [
                { id: `mission_${idx}_1`, title: `Fouiller le lieu : ${targetRoom}`, completed: false, points: 2, targetRoom: targetRoom },
                { id: `mission_${idx}_2`, title: `Retrouver le suspect possédant la signature : "${otherChars[2].marker}"`, completed: false, points: 2 }
            ];
        });

        // Initialize active session
        appState.session = {
            id: sessionId,
            name: sessionName,
            location: sessionLocation,
            totalClues: appState.scenario.cluesCount,
            pointsPerPlayer: pointsPerPlayer,
            status: "Invitations Envoyées"
        };

        appState.orgaView = 'active'; // Enter active game dashboard
        savePersistedState();
        showToast("Session Lancée !", "Les invitations ont été distribuées et l'enquête est ouverte.", "success");

    } catch(err) {
        console.error(err);
        showToast("Erreur de lancement", err.message || "Une erreur est survenue lors de l'envoi des invitations.", "error");
    } finally {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Activer le jeu & Envoyer les Invitations`;
        renderOrganizerDashboard();
    }
}

function handleResetSession() {
    if (confirm("Voulez-vous vraiment réinitialiser la session en cours ? Toutes les données locales seront effacées.")) {
        appState.session = null;
        appState.scenario = null;
        appState.players = [];
        appState.clues = [];
        appState.logs = [];
        appState.orgaView = 'landing'; // Return to landing board
        savePersistedState();
        
        // Reset inputs in creation form
        const themeInput = document.getElementById('scenarioTheme');
        if (themeInput) themeInput.value = '';
        const pitchInput = document.getElementById('scenarioPitch');
        if (pitchInput) pitchInput.value = '';
        const epochInput = document.getElementById('scenarioEpoch');
        if (epochInput) epochInput.value = 'passé';
        const modeInput = document.getElementById('scenarioMode');
        if (modeInput) modeInput.value = '';

        // Reset illustrated card text labels
        const displayTheme = document.getElementById('displayThemeVal');
        if (displayTheme) {
            displayTheme.textContent = "Non définie (Aléatoire)";
            displayTheme.classList.add('italic');
        }
        const displayEpoch = document.getElementById('displayEpochVal');
        if (displayEpoch) {
            displayEpoch.textContent = "Passé (Défaut)";
        }
        const displayPitch = document.getElementById('displayPitchVal');
        if (displayPitch) {
            displayPitch.textContent = "Non définie (Aléatoire)";
            displayPitch.classList.add('italic');
        }

        const setupName = document.getElementById('setupSessionName');
        if (setupName) setupName.value = '';
        const setupLoc = document.getElementById('setupSessionLocation');
        if (setupLoc) setupLoc.value = '';
        const emailArea = document.getElementById('setupSessionEmails');
        if (emailArea) {
            const dummyEmails = Array.from({length: 16}, (_, i) => `invite${i+1}@email.com`).join('\n');
            emailArea.value = dummyEmails;
        }
        
        renderOrganizerDashboard();
        showToast("Session réinitialisée", "Vous pouvez maintenant créer une nouvelle session.", "info");
    }
}

// 3. Webhook: POST /webhook/generate-avatar
async function handlePlayerOnboarding(e) {
    e.preventDefault();
    
    const traits = document.getElementById('playerTraitsInput').value.trim();
    const overlay = document.getElementById('onboardingLoadingOverlay');
    
    if (!traits) {
        alert("Veuillez renseigner vos traits de caractère.");
        return;
    }
    
    overlay.classList.remove('hidden');
    addLiveLog(`Joueur ${appState.currentUser.email} : Génération de l'avatar et du marqueur visuel via n8n...`);
    
    try {
        let avatarUrl = "";
        let visualMarker = "Une broche ancienne en argent poli";

        // Retrieve character's genre from local state to send to DALL-E webhook
        const player = appState.players.find(p => p.email === appState.currentUser.email);
        const genre = player ? (player.genre || "Non-Binaire") : "Non-Binaire";

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-avatar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: appState.currentUser.email,
                    genre: genre,
                    traits: traits.split(',').map(t => t.trim()),
                    photo_base64: "data:image/jpeg;base64,mock"
                })
            });
            if (!response.ok) throw new Error("Erreur de génération d'avatar.");
            const data = await response.json();
            avatarUrl = data.avatar_url;
            visualMarker = data.visual_marker || visualMarker;
        } else {
            await sleep(3000);
            const portraitPool = [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80"
            ];
            const playerIndex = appState.players.findIndex(p => p.email === appState.currentUser.email);
            avatarUrl = portraitPool[playerIndex !== -1 ? playerIndex % portraitPool.length : 0];
        }

        const playerIndex = appState.players.findIndex(p => p.email === appState.currentUser.email);
        if (playerIndex !== -1) {
            appState.players[playerIndex].characterTraits = traits;
            appState.players[playerIndex].avatarUrl = avatarUrl;
            appState.players[playerIndex].marker = visualMarker;
            appState.players[playerIndex].status = "Prêt";
            
            addLiveLog(`Succès Webhook: Avatar généré pour ${appState.players[playerIndex].roleName} (${appState.currentUser.email})`);
            savePersistedState();
        }
        showToast("Avatar Généré !", "Votre personnage est prêt pour l'enquête.", "success");

    } catch(err) {
        console.error(err);
        showToast("Erreur onboarding", err.message || "Impossible de contacter n8n.", "error");
    } finally {
        overlay.classList.add('hidden');
        routeApp();
    }
}

// 4. Webhook: POST /webhook/complete-mission
async function completePlayerMission(missionId) {
    const player = getActivePlayer();
    if (!player) return;
    
    const missionIndex = player.missions.findIndex(m => m.id === missionId);
    if (missionIndex === -1 || player.missions[missionIndex].completed) return;
    
    addLiveLog(`Joueur ${player.email} : Validation de la mission "${player.missions[missionIndex].title}"...`);
    
    try {
        let actionPoints = player.actionPoints + 2;
        let unlockedClueName = "";

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-complete-mission`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: player.email,
                    mission_id: missionId,
                    points_earned: 2
                })
            });
            if (!response.ok) throw new Error("Erreur de validation de mission.");
            const data = await response.json();
            actionPoints = data.new_action_points ?? actionPoints;
            unlockedClueName = data.unlocked_clue_name;
        } else {
            await sleep(1000);
        }

        player.missions[missionIndex].completed = true;
        player.actionPoints = actionPoints;

        const targetRoom = player.missions[missionIndex].targetRoom;
        if (targetRoom) {
            const hiddenClue = appState.clues.find(c => c.location === targetRoom && c.status === "Caché");
            if (hiddenClue) {
                hiddenClue.status = "Débloqué";
                hiddenClue.foundBy = player.email;
                if (unlockedClueName) hiddenClue.name = unlockedClueName;
                addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. Indice débloqué : "${hiddenClue.name}".`);
            } else {
                addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. (Tous les indices de ce lieu sont déjà découverts).`);
            }
        } else {
            addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}.`);
        }

        savePersistedState();
        showToast("Mission validée !", "Vous gagnez +2 Points d'Action et avez fait progresser l'enquête.", "success");

    } catch(err) {
        console.error(err);
        showToast("Erreur mission", err.message || "Impossible de contacter n8n.", "error");
    } finally {
        renderPlayerDashboard(player);
    }
}

// 5. Webhook: POST /webhook/reveal-index
async function handleRoomSearch() {
    const player = getActivePlayer();
    if (!player) return;

    const roomSelect = document.getElementById('searchRoomSelect');
    const selectedRoom = roomSelect.value;
    const feedback = document.getElementById('searchFeedbackMessage');
    
    if (player.actionPoints < 1) {
        feedback.className = "text-3xs font-semibold text-center text-blood";
        feedback.textContent = "Action impossible : Vous avez 0 PA. Échangez des indices ou validez des missions.";
        addLiveLog(`Action bloquée: ${player.roleName} (${player.email}) a tenté de fouiller ${selectedRoom} avec 0 PA.`);
        showToast("Points insuffisants !", "Vous n'avez plus de points d'action pour fouiller.", "error");
        return;
    }

    feedback.className = "text-3xs font-semibold text-center text-slate-400";
    feedback.textContent = "Fouille de la pièce en cours...";
    
    try {
        let pointsRemaining = player.actionPoints - 1;
        let webhookClues = null;

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-reveal-index`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: player.email,
                    location_name: selectedRoom
                })
            });
            if (!response.ok) throw new Error("Erreur lors de la fouille.");
            const data = await response.json();
            pointsRemaining = data.points_remaining ?? pointsRemaining;
            webhookClues = data.clues;
        } else {
            await sleep(1200);
        }

        player.actionPoints = pointsRemaining;

        const hiddenClue = appState.clues.find(c => c.location === selectedRoom && c.status === "Caché");
        
        if (webhookClues && webhookClues.length > 0) {
            const c = webhookClues[0];
            const activeClue = appState.clues.find(lc => lc.name === c.name) || hiddenClue;
            if (activeClue) {
                activeClue.name = c.name;
                activeClue.description = c.description;
                activeClue.image = c.image;
                activeClue.status = "Débloqué";
                activeClue.foundBy = player.email;
                
                feedback.className = "text-3xs font-semibold text-center text-emerald-400";
                feedback.textContent = `🔍 Indice découvert: ${activeClue.name}`;
                addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Indice débloqué: "${activeClue.name}".`);
                showToast("Indice Découvert !", `Vous avez trouvé : ${activeClue.name}`, "success");
            }
        } else if (!appState.n8nBaseUrl && hiddenClue) {
            hiddenClue.status = "Débloqué";
            hiddenClue.foundBy = player.email;
            
            feedback.className = "text-3xs font-semibold text-center text-emerald-400";
            feedback.textContent = `🔍 Indice découvert: ${hiddenClue.name}`;
            addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Indice débloqué: "${hiddenClue.name}".`);
            showToast("Indice Découvert !", `Vous avez trouvé : ${hiddenClue.name}`, "success");
        } else {
            feedback.className = "text-3xs font-semibold text-center text-gold";
            feedback.textContent = "Pièce fouillée mais aucun nouvel indice trouvé.";
            addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Aucun nouvel indice trouvé.`);
            showToast("Rien trouvé", "Tous les indices de ce lieu ont déjà été découverts.", "warning");
        }

    } catch(err) {
        console.error(err);
        showToast("Erreur de fouille", err.message || "Impossible de contacter n8n.", "error");
        feedback.className = "text-3xs font-semibold text-center text-blood";
        feedback.textContent = "Erreur de connexion avec n8n.";
    } finally {
        savePersistedState();
        renderPlayerDashboard(player);
    }
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */
async function handleRequestOtp(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    
    if (!email) return;

    const requestBtn = document.getElementById('requestOtpBtn');
    requestBtn.setAttribute('disabled', 'true');
    requestBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Envoi en cours...`;

    addLiveLog(`Demande de code OTP pour l'adresse : ${email}...`);

    try {
        const webhookUrl = appState.n8nBaseUrl ? `${appState.n8nBaseUrl}/webhook/mp-request-otp` : '';
        
        if (webhookUrl) {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Erreur lors de la requete de l'OTP.");
            }
        } else {
            // Local simulation
            await sleep(1500); // Simulate network latency

            const isOrga = email === 'organisateur@email.com';
            const isGuest = appState.players.some(p => p.email === email);

            if (!isOrga && (!appState.session || appState.players.length === 0)) {
                throw new Error("Aucune session n'est active. Demandez à l'organisateur d'initialiser la partie.");
            }

            if (!isOrga && !isGuest) {
                throw new Error("Cette adresse e-mail n'est pas répertoriée pour cette session.");
            }
            
            const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
            appState.mockOtp = otpCode;
        }

        appState.pendingEmail = email;
        appState.loginStep = 'otp';
        savePersistedState();
        routeApp();

        if (!webhookUrl) {
            showToast("Code de test généré !", `Le code envoyé par mail est : ${appState.mockOtp}`, "warning");
            addLiveLog(`[Simulation Auth] Code OTP généré pour ${email} : ${appState.mockOtp}`);
        } else {
            showToast("Code envoyé !", "Veuillez vérifier votre boîte de réception.", "success");
        }

    } catch(err) {
        console.error(err);
        showToast("Erreur de connexion", err.message || "Impossible d'envoyer le code.", "error");
    } finally {
        requestBtn.removeAttribute('disabled');
        requestBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Obtenir un code de connexion`;
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const otp = document.getElementById('loginOtp').value.trim();
    const email = appState.pendingEmail;

    if (!email || !otp) return;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Vérification...`;

    try {
        const verifyWebhookUrl = appState.n8nBaseUrl ? `${appState.n8nBaseUrl}/webhook/mp-verify-otp` : '';
        let role = '';

        if (verifyWebhookUrl) {
            const response = await fetch(verifyWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, otp: otp })
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Code OTP invalide.");
            }
            const data = await response.json();
            role = data.role;
            if (data.playerDetails) {
                const playerIndex = appState.players.findIndex(p => p.email === email);
                if (playerIndex !== -1) {
                    appState.players[playerIndex].roleName = data.playerDetails.roleName || appState.players[playerIndex].roleName;
                    appState.players[playerIndex].avatarUrl = data.playerDetails.avatarUrl || appState.players[playerIndex].avatarUrl;
                    appState.players[playerIndex].actionPoints = data.playerDetails.actionPoints !== undefined && data.playerDetails.actionPoints !== null ? Number(data.playerDetails.actionPoints) : appState.players[playerIndex].actionPoints;
                    appState.players[playerIndex].secret = data.playerDetails.secret || appState.players[playerIndex].secret;
                    appState.players[playerIndex].chronology = data.playerDetails.chronology || appState.players[playerIndex].chronology;
                    appState.players[playerIndex].outfit = data.playerDetails.outfit || appState.players[playerIndex].outfit;
                }
            }
        } else {
            await sleep(1000);
            
            if (otp !== appState.mockOtp && otp !== "123456") {
                throw new Error("Le code de connexion est incorrect ou expiré.");
            }
            
            role = email === 'organisateur@email.com' ? 'organizer' : 'player';
        }

        appState.currentUser = { email: email, role: role };
        appState.loginStep = 'email';
        appState.pendingEmail = '';
        appState.mockOtp = '';
        savePersistedState();
        
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginOtp').value = '';

        routeApp();
        showToast("Connexion réussie", `Bienvenue sur votre espace.`, "success");
        addLiveLog(`${email} connecté avec succès via OTP.`);

    } catch(err) {
        console.error(err);
        showToast("Code invalide", err.message || "Erreur de validation.", "error");
        document.getElementById('loginOtp').value = '';
        document.getElementById('loginOtp').focus();
    } finally {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Valider et se connecter`;
    }
}

function handleBackToEmail() {
    appState.loginStep = 'email';
    appState.pendingEmail = '';
    appState.mockOtp = '';
    savePersistedState();
    routeApp();
}

function logout() {
    appState.currentUser = null;
    appState.loginStep = 'email';
    appState.pendingEmail = '';
    appState.mockOtp = '';
    appState.orgaView = 'landing'; // Reset dashboard view
    savePersistedState();
    
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginOtp').value = '';
    
    routeApp();
}



/* ==========================================================================
   HELPERS & TOASTS
   ========================================================================== */

function showToast(title, message, type = 'info') {
    const toast = document.getElementById('toastNotification');
    const icon = document.getElementById('toastIcon');
    const titleEl = document.getElementById('toastTitle');
    const msgEl = document.getElementById('toastMessage');

    titleEl.textContent = title;
    msgEl.textContent = message;

    // Toast styles based on type
    toast.className = "fixed bottom-6 right-6 z-50 bg-noir-panel border py-3 px-5 rounded-xl shadow-[0_5px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 max-w-sm transition-all duration-300 toast-visible";
    
    if (type === 'success') {
        icon.className = "fa-solid fa-circle-check text-emerald-500 text-lg";
        toast.classList.add('border-emerald-500/50');
    } else if (type === 'error') {
        icon.className = "fa-solid fa-circle-exclamation text-blood text-lg";
        toast.classList.add('border-blood/50');
    } else if (type === 'warning') {
        icon.className = "fa-solid fa-triangle-exclamation text-gold text-lg";
        toast.classList.add('border-gold/50');
    } else {
        icon.className = "fa-solid fa-circle-info text-blue-500 text-lg";
        toast.classList.add('border-blue-500/50');
    }

    setTimeout(() => {
        toast.className = "toast-hidden fixed bottom-6 right-6 z-50 bg-noir-panel border py-3 px-5 rounded-xl flex items-center gap-3 max-w-sm transition-all duration-300";
    }, 4000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setupScenarioModals() {
    const themeCloud = document.getElementById('themeTagCloud');
    const epochCloud = document.getElementById('epochTagCloud');
    const pitchCloud = document.getElementById('pitchTagCloud');

    // Populate theme suggestions
    if (themeCloud) {
        themeCloud.innerHTML = '';
        THEME_SUGGESTIONS.forEach(theme => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'trait-tag';
            btn.textContent = theme;
            btn.addEventListener('click', () => {
                themeCloud.querySelectorAll('.trait-tag').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                document.getElementById('customThemeInput').value = theme;
            });
            themeCloud.appendChild(btn);
        });
    }

    // Populate epoch suggestions
    if (epochCloud) {
        epochCloud.innerHTML = '';
        EPOCH_SUGGESTIONS.forEach(epoch => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'trait-tag';
            btn.textContent = epoch;
            btn.addEventListener('click', () => {
                epochCloud.querySelectorAll('.trait-tag').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                document.getElementById('customEpochInput').value = epoch;
            });
            epochCloud.appendChild(btn);
        });
    }

    // Populate pitch suggestions
    if (pitchCloud) {
        pitchCloud.innerHTML = '';
        PITCH_SUGGESTIONS.forEach(pitch => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'trait-tag text-left leading-tight py-2 w-full';
            btn.textContent = pitch;
            btn.addEventListener('click', () => {
                pitchCloud.querySelectorAll('.trait-tag').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                document.getElementById('customPitchInput').value = pitch;
            });
            pitchCloud.appendChild(btn);
        });
    }

    // Bind open buttons
    const btnOpenTheme = document.getElementById('btnOpenThemeModal');
    if (btnOpenTheme) {
        btnOpenTheme.addEventListener('click', () => {
            const currentVal = document.getElementById('scenarioTheme').value;
            document.getElementById('customThemeInput').value = currentVal;
            document.getElementById('modalTheme').classList.remove('hidden');
            
            if (themeCloud) {
                themeCloud.querySelectorAll('.trait-tag').forEach(b => {
                    if (b.textContent === currentVal) b.classList.add('selected');
                    else b.classList.remove('selected');
                });
            }
        });
    }

    const btnOpenEpoch = document.getElementById('btnOpenEpochModal');
    if (btnOpenEpoch) {
        btnOpenEpoch.addEventListener('click', () => {
            const currentVal = document.getElementById('scenarioEpoch').value;
            document.getElementById('customEpochInput').value = currentVal;
            document.getElementById('modalEpoch').classList.remove('hidden');
            
            if (epochCloud) {
                epochCloud.querySelectorAll('.trait-tag').forEach(b => {
                    if (b.textContent === currentVal) b.classList.add('selected');
                    else b.classList.remove('selected');
                });
            }
        });
    }

    const btnOpenPitch = document.getElementById('btnOpenPitchModal');
    if (btnOpenPitch) {
        btnOpenPitch.addEventListener('click', () => {
            const currentVal = document.getElementById('scenarioPitch').value;
            document.getElementById('customPitchInput').value = currentVal;
            document.getElementById('modalPitch').classList.remove('hidden');
            
            if (pitchCloud) {
                pitchCloud.querySelectorAll('.trait-tag').forEach(b => {
                    if (b.textContent === currentVal) b.classList.add('selected');
                    else b.classList.remove('selected');
                });
            }
        });
    }

    // Bind close buttons
    document.querySelectorAll('.close-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            if (targetId) {
                document.getElementById(targetId).classList.add('hidden');
            }
        });
    });

    // Bind save buttons
    const saveTheme = document.getElementById('saveThemeBtn');
    if (saveTheme) {
        saveTheme.addEventListener('click', () => {
            const val = document.getElementById('customThemeInput').value.trim();
            document.getElementById('scenarioTheme').value = val;
            document.getElementById('displayThemeVal').textContent = val || "Non définie (Aléatoire)";
            document.getElementById('displayThemeVal').classList.toggle('italic', !val);
            document.getElementById('modalTheme').classList.add('hidden');
        });
    }

    const saveEpoch = document.getElementById('saveEpochBtn');
    if (saveEpoch) {
        saveEpoch.addEventListener('click', () => {
            const val = document.getElementById('customEpochInput').value.trim();
            document.getElementById('scenarioEpoch').value = val || "passé";
            document.getElementById('displayEpochVal').textContent = val ? val : "Passé (Défaut)";
            document.getElementById('modalEpoch').classList.add('hidden');
        });
    }

    const savePitch = document.getElementById('savePitchBtn');
    if (savePitch) {
        savePitch.addEventListener('click', () => {
            const val = document.getElementById('customPitchInput').value.trim();
            document.getElementById('scenarioPitch').value = val;
            document.getElementById('displayPitchVal').textContent = val || "Non définie (Aléatoire)";
            document.getElementById('displayPitchVal').classList.toggle('italic', !val);
            document.getElementById('modalPitch').classList.add('hidden');
        });
    }
}

/* ==========================================================================
   NOTION INTEGRATION: LISTING AND SELECTING SCENARIOS
   ========================================================================== */
async function getNotionConfig() {
    try {
        const res = await fetch('.env');
        if (!res.ok) return null;
        const text = await res.text();
        const config = {};
        text.split(/\r?\n/).forEach(line => {
            const match = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let val = match[2] || '';
                if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
                config[key] = val.trim();
            }
        });
        return config;
    } catch (e) {
        console.error("Failed to load .env config from client side", e);
        return null;
    }
}

async function loadExistingScenarios() {
    const container = document.getElementById('existingScenariosCardsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="col-span-1 sm:col-span-2 text-center py-8 text-xs text-slate-500">
            <i class="fa-solid fa-spinner animate-spin text-blood mr-1"></i> Chargement des scénarios en cours...
        </div>
    `;
    
    const email = appState.currentUser ? appState.currentUser.email : '';
    
    try {
        let scenarios = [];
        
        // 1. Try fetching from n8n webhook
        if (appState.n8nBaseUrl) {
            try {
                const res = await fetch(`${appState.n8nBaseUrl}/webhook/mp-list-scenarios`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: email })
                });
                if (res.ok) {
                    const data = await res.json();
                    const rawScenarios = getScenariosFromArrayOrObject(data);
                    if (rawScenarios.length > 0) {
                        let mapped = rawScenarios.map(s => mapScenarioProperties(s));
                        if (email) {
                            scenarios = mapped.filter(s => s.email && s.email.toLowerCase().trim() === email.toLowerCase().trim());
                        } else {
                            scenarios = mapped;
                        }
                    }
                }
            } catch (err) {
                console.warn("n8n mp-list-scenarios webhook failed, trying Notion API directly", err);
            }
        }
        
        // 2. Fallback: Query Notion API directly from frontend using fetched .env
        if (scenarios.length === 0) {
            const config = await getNotionConfig();
            if (config && config.NOTION_TOKEN && config.NOTION_DB_SCENARIOS) {
                try {
                    const response = await fetch(`https://api.notion.com/v1/databases/${config.NOTION_DB_SCENARIOS}/query`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${config.NOTION_TOKEN}`,
                            'Content-Type': 'application/json',
                            'Notion-Version': '2022-06-28'
                        },
                        body: JSON.stringify({
                            filter: {
                                or: [
                                    {
                                        property: "Statut",
                                        select: {
                                            equals: "En cours de génération"
                                        }
                                    },
                                    {
                                        property: "Statut",
                                        select: {
                                            equals: "En cours de generation"
                                        }
                                    },
                                    {
                                        property: "Statut",
                                        select: {
                                            equals: "Vérifié"
                                        }
                                    }
                                ]
                            }
                        })
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        scenarios = data.results.map(page => {
                            const props = page.properties;
                            
                            const getText = (prop) => {
                                if (!prop) return "";
                                if (prop.rich_text) return prop.rich_text.map(t => t.plain_text).join("");
                                if (prop.title) return prop.title.map(t => t.plain_text).join("");
                                return "";
                            };

                            const getNumber = (prop) => {
                                if (!prop) return 0;
                                return prop.number || 0;
                            };

                            const getEmail = (prop) => {
                                if (!prop) return "";
                                if (prop.email) return prop.email;
                                if (prop.rich_text) return prop.rich_text.map(t => t.plain_text).join("");
                                return "";
                            };

                            return mapScenarioProperties({
                                id: page.id,
                                title: getText(props["Nom"]) || "Sans titre",
                                theme: props["Thème"] ? getText(props["Thème"]) : "",
                                epoch: props["Époque"] ? getText(props["Époque"]) : "",
                                etapeGeneration: props["Étape Génération"] ? getNumber(props["Étape Génération"]) : null,
                                pitch: getText(props["Pitch Global"]),
                                crimeRoom: getText(props["Scène du Crime"]) || getText(props["Scene du Crime"]),
                                victim: getText(props["Victime"]),
                                victimOutfit: getText(props["Tenue Victime"]),
                                chronology: getText(props["Chronologie"]),
                                cluesCount: getNumber(props["Nombre Total d'Indices"]) || 24,
                                illustration: props["Illustration"] ? getText(props["Illustration"]) : "",
                                status: props["Statut"] && props["Statut"].select ? props["Statut"].select.name : "En cours de génération",
                                email: props["Créateur"] ? getEmail(props["Créateur"]) : 
                                       (props["Email Organisateur"] ? getEmail(props["Email Organisateur"]) : 
                                       (props["email"] ? getEmail(props["email"]) : ""))
                            });
                        });
                        
                        // Filter by creator email if email property matches
                        if (email) {
                            scenarios = scenarios.filter(s => {
                                return !s.email || s.email.toLowerCase() === email.toLowerCase();
                            });
                        }
                    }
                } catch (notionErr) {
                    console.error("Direct Notion scenarios query failed", notionErr);
                }
            }
        }
        
        // 3. Fallback: Local simulated scenarios matching the connected email
        if (scenarios.length === 0) {
            scenarios = [
                {
                    id: "sc_mock_speakeasy",
                    title: "Le Dernier Souffle du Speakeasy",
                    theme: "Années 20 / Prohibition",
                    pitch: "Dans la pénombre d'un club de jazz clandestin, un parrain de la mafia a été assassiné de sang-froid.",
                    crimeRoom: "Le Bureau de l'arrière-boutique",
                    victim: "Lord James Lenoir (Le Propriétaire du Speakeasy)",
                    victimOutfit: "Un smoking de soirée en velours noir sur mesure avec un nœud papillon blanc déboutonné, une montre à gousset dorée cassée et une rose rouge flétrie à la boutonnière.",
                    cluesCount: 24,
                    illustration: "illustrations/speakeasy.png",
                    chronology: "18:00 - Le Vestibule (Baptiste le Valet, M. Lenoir) : Accueil des invités.\n19:00 - Le Grand Salon (Mlle Rose, M. Lenoir) : Discussion cordiale.\n20:00 - Le Petit Salon (Colonel Moutarde, M. Lenoir) : Altercation bruyante.\n22:00 - Le Bureau : Heure estimée du crime.",
                    status: "En cours de génération",
                    etapeGeneration: 1,
                    email: email
                },
                {
                    id: "sc_mock_croft",
                    title: "Meurtre au Manoir Croft",
                    theme: "Archéologie / Moderne",
                    pitch: "Une célèbre aventurière est retrouvée sans vie dans la grande bibliothèque de son domaine familial.",
                    crimeRoom: "La Bibliothèque du Manoir",
                    victim: "Lady Lara Croft",
                    victimOutfit: "Une tenue de baroudeuse moderne avec double holster vide aux cuisses.",
                    cluesCount: 24,
                    illustration: "illustrations/croft.png",
                    chronology: "18:00 - Le Hall d'Entrée : Arrivée des invités.\n19:00 - La Salle d'Armes : Présentation des reliques.\n20:30 - La Bibliothèque : Début des recherches.\n21:45 - La Bibliothèque : Heure présumée du meurtre.",
                    status: "En cours de génération",
                    etapeGeneration: 1,
                    email: email
                }
            ];
        }

        appState.loadedScenarios = scenarios;
        savePersistedState();
        
        container.innerHTML = '';
        if (scenarios.length === 0) {
            container.innerHTML = `
                <div class="col-span-1 sm:col-span-2 text-center py-8 text-xs text-slate-500">
                    <i class="fa-solid fa-folder-open text-blood mr-1"></i> Aucun scénario trouvé pour votre compte.
                </div>
            `;
        } else {
            scenarios.forEach(s => {
                const card = document.createElement('div');
                card.setAttribute('data-id', s.id);
                
                // Fallback step calculation
                let etape = s.etapeGeneration;
                if (etape === undefined || etape === null) {
                    const statusLower = (s.status || "").toLowerCase();
                    etape = (statusLower === "vérifié" || statusLower === "vérifie" || statusLower === "verifie" || statusLower === "verify") ? 4 : 1;
                }
                
                // Save calculated step on the object
                s.etapeGeneration = etape;
                
                // Determine background styling
                let bgStyle = "background: #09090b;"; // dark black
                let isReady = etape >= 4;
                
                if (isReady && s.illustration) {
                    let rawIllustration = s.illustration;
                    let resolvedImageUrl = "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1200&auto=format&fit=crop";
                    if (rawIllustration.startsWith('http://') || rawIllustration.startsWith('https://')) {
                        resolvedImageUrl = rawIllustration;
                    } else {
                        const cleanPath = rawIllustration.replace(/^\/+/, '');
                        resolvedImageUrl = "https://github.com/SamiSteyre/murderparty/raw/main/" + cleanPath;
                    }
                    bgStyle = `background-image: linear-gradient(180deg, rgba(9, 9, 11, 0.75) 0%, rgba(9, 9, 11, 0.95) 100%), url('${resolvedImageUrl}'); background-size: cover; background-position: center;`;
                }
                
                card.style = bgStyle;
                card.className = "scenario-card border border-white/5 hover:border-blood/50 p-4 rounded-xl relative overflow-hidden h-36 flex flex-col justify-between transition-all cursor-pointer group hover:shadow-[0_4px_12px_rgba(245,158,11,0.08)] select-none text-left";
                
                // Large step number on background
                const bigNumColor = isReady ? "text-white/5 group-hover:text-blood/10" : "text-zinc-900 group-hover:text-zinc-850";
                const badgeHtml = isReady 
                    ? `<span class="px-2 py-0.5 text-[8px] bg-green-950/40 border border-green-800/40 text-green-400 rounded-md uppercase font-bold tracking-widest z-10 w-fit">Prêt à jouer</span>`
                    : `<span class="px-2 py-0.5 text-[8px] bg-blood/10 border border-blood/20 text-blood-light rounded-md uppercase font-bold tracking-widest z-10 w-fit font-semibold">Étape ${etape} en cours</span>`;
                
                card.innerHTML = `
                    <div class="absolute right-4 bottom-0 font-cinzel font-black text-7xl select-none leading-none z-0 ${bigNumColor} transition-colors pointer-events-none">${etape}</div>
                    <div class="flex flex-col space-y-1.5 z-10 relative">
                        ${badgeHtml}
                        <h4 class="text-xs font-cinzel font-extrabold text-white line-clamp-1 group-hover:text-blood transition-colors mt-1">${s.title}</h4>
                    </div>
                    
                    <div class="text-[9px] text-slate-400 font-medium z-10 relative flex flex-wrap gap-x-3 gap-y-1">
                        <span><i class="fa-solid fa-masks-theater text-blood/60 mr-1"></i>${s.theme || 'Thème non défini'}</span>
                        <span><i class="fa-solid fa-clock text-blood/60 mr-1"></i>${s.epoch || 'Époque non définie'}</span>
                    </div>
                `;
                
                card.addEventListener('click', () => handleScenarioCardClick(s.id));
                container.appendChild(card);
            });
        }
        
        updateSelectScenarioSubmitBtn();
        
    } catch (err) {
        console.error("Failed to load scenarios list", err);
        container.innerHTML = `
            <div class="col-span-1 sm:col-span-2 text-center py-8 text-xs text-red-500">
                <i class="fa-solid fa-triangle-exclamation text-blood mr-1"></i> Erreur lors du chargement des scénarios.
            </div>
        `;
    }
}

async function handleScenarioCardClick(scenarioId) {
    const selectedScenario = appState.loadedScenarios ? appState.loadedScenarios.find(s => s.id === scenarioId) : null;
    if (!selectedScenario) return;

    const statusLower = (selectedScenario.status || "").toLowerCase();
    const etape = selectedScenario.etapeGeneration || ((statusLower === "vérifié" || statusLower === "vérifie" || statusLower === "verifie" || statusLower === "verify") ? 4 : 1);
    
    // Set hidden input value
    const hiddenInput = document.getElementById('selectedScenarioId');
    if (hiddenInput) {
        hiddenInput.value = scenarioId;
    }
    
    // Highlight selected card visually
    document.querySelectorAll('.scenario-card').forEach(c => {
        c.classList.remove('border-blood', 'ring-2', 'ring-blood/20');
        c.classList.add('border-white/5');
    });
    
    const selectedCard = document.querySelector(`[data-id="${scenarioId}"]`);
    if (selectedCard) {
        selectedCard.classList.remove('border-white/5');
        selectedCard.classList.add('border-blood', 'ring-2', 'ring-blood/20');
    }

    if (etape === 1) {
        // Clic sur Étape 1 : On charge la victime et les suspects stockés dans Notion et on affiche la validation modal
        const submitBtn = document.getElementById('unifiedSubmitBtn');
        if (submitBtn) {
            submitBtn.setAttribute('disabled', 'true');
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-sm mr-2"></i> Récupération Étape 1...`;
        }
        
        try {
            addLiveLog(`[Reprise] Clic sur scénario Étape 1 "${selectedScenario.title}" : chargement des suspects...`);
            let scenarioDetails = null;

            if (appState.n8nBaseUrl) {
                const detailsRes = await fetch(`${appState.n8nBaseUrl}/webhook/mp-get-scenario-details`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ scenario_id: selectedScenario.id })
                });
                
                if (detailsRes.ok) {
                    const detailsData = await detailsRes.json();
                    let rawScenario = extractRawScenario(detailsData);
                    if (rawScenario) {
                        scenarioDetails = mapScenarioProperties(rawScenario);
                        addLiveLog(`[Reprise] Fiches de l'étape 1 chargées.`);
                    }
                }
            }

            if (!scenarioDetails) {
                addLiveLog(`[Reprise] Webhook de détails indisponible. Utilisation des données locales.`);
                scenarioDetails = {
                    title: selectedScenario.title,
                    theme: selectedScenario.theme || "Années 20 / Prohibition",
                    pitch: selectedScenario.pitch || "",
                    epoch: selectedScenario.epoch || "passé",
                    victimObj: {
                        name: selectedScenario.victim || "Lord James Lenoir",
                        genre: "Homme",
                        short_hook: selectedScenario.pitch || "",
                        outfit: selectedScenario.victimOutfit || "",
                        marker: "Une bague tête de lion"
                    },
                    suspects: selectedScenario.suspects || []
                };
            }

            appState.pendingScenarioId = selectedScenario.id;
            appState.pendingScenarioData = {
                scenario_id: selectedScenario.id,
                title: scenarioDetails.title || selectedScenario.title,
                theme: scenarioDetails.theme || selectedScenario.theme || "",
                pitch: scenarioDetails.pitch || selectedScenario.pitch || "",
                epoch: scenarioDetails.epoch || selectedScenario.epoch || "passé",
                victim: scenarioDetails.victimObj || scenarioDetails.victim,
                suspects: scenarioDetails.suspects || []
            };
            savePersistedState();

            // Afficher le modal de validation de la victime (Étape 1 terminée)
            showVictimValidationModal(appState.pendingScenarioData.victim, false);
        } catch (err) {
            console.error("Error loading scenario on card click:", err);
            showToast("Erreur", "Impossible de charger ce scénario.", "error");
        } finally {
            if (submitBtn) {
                submitBtn.removeAttribute('disabled');
            }
            updateSelectScenarioSubmitBtn();
        }
    } else {
        // Clic sur Étape 2 et + : Encore à prévoir
        showToast("Étape " + etape, "La gestion de la reprise à l'étape " + etape + " est encore à prévoir.", "info");
        
        // Si c'est l'étape 4 (ou prêt à jouer), on configure l'état pour lancer la session
        if (etape >= 4) {
            appState.scenario = {
                id: selectedScenario.id,
                title: selectedScenario.title,
                theme: selectedScenario.theme || "Chargé",
                pitch: selectedScenario.pitch || "",
                crimeRoom: selectedScenario.crimeRoom || "Le Bureau",
                victim: selectedScenario.victim || "Non définie",
                victimOutfit: selectedScenario.victimOutfit || "",
                cluesCount: selectedScenario.cluesCount || 24,
                imageUrl: selectedScenario.illustration || "",
                chronology: selectedScenario.chronology || "Aucune chronologie disponible."
            };
            
            // On pré-remplit les joueurs pour la session
            appState.players = (selectedScenario.suspects || CHARACTER_TEMPLATES).map((s, index) => {
                return mapSuspectProperties(s, index);
            });
            
            savePersistedState();
            addLiveLog(`Scénario sélectionné : "${selectedScenario.title}" prêt pour la session.`);
        }
        
        updateSelectScenarioSubmitBtn();
    }
}

function updateSelectScenarioSubmitBtn() {
    const hiddenInput = document.getElementById('selectedScenarioId');
    const submitBtn = document.getElementById('unifiedSubmitBtn');
    if (!hiddenInput || !submitBtn) return;
    
    const selectedId = hiddenInput.value;
    const selectedScenario = appState.loadedScenarios ? appState.loadedScenarios.find(s => s.id === selectedId) : null;
    
    if (selectedScenario) {
        const statusLower = (selectedScenario.status || "").toLowerCase();
        const etape = selectedScenario.etapeGeneration || ((statusLower === "vérifié" || statusLower === "vérifie" || statusLower === "verifie" || statusLower === "verify") ? 4 : 1);
        if (etape === 1) {
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Vérifier le scénario`;
        } else if (etape >= 4) {
            submitBtn.innerHTML = `<i class="fa-solid fa-gears"></i> Lancer la session`;
        } else {
            submitBtn.innerHTML = `<i class="fa-solid fa-circle-question"></i> Étape ${etape} sélectionnée`;
        }
    } else {
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> Sélectionner un scénario`;
    }
}

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
function init() {
    loadPersistedState();
    setupScenarioModals();
    
    // Global routes
    routeApp();

    // Load scenarios if selector mode is active
    const modeInput = document.getElementById('scenarioMode');
    if (modeInput && modeInput.value === 'select') {
        loadExistingScenarios();
    }

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('requestOtpBtn').addEventListener('click', handleRequestOtp);
    document.getElementById('backToEmailBtn').addEventListener('click', handleBackToEmail);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Organizer Navigation Links
    const orgaCreateSessionBtn = document.getElementById('orgaCreateSessionBtn');
    if (orgaCreateSessionBtn) {
        orgaCreateSessionBtn.addEventListener('click', () => {
            appState.orgaView = 'create';
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = ''; // Reset option initially
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaActiveSessionBtn = document.getElementById('orgaActiveSessionBtn');
    if (orgaActiveSessionBtn) {
        orgaActiveSessionBtn.addEventListener('click', () => {
            appState.orgaView = 'active';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaBackToLandingBtn = document.getElementById('orgaBackToLandingBtn');
    if (orgaBackToLandingBtn) {
        orgaBackToLandingBtn.addEventListener('click', () => {
            appState.orgaView = 'landing';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaActiveBackToLandingBtn = document.getElementById('orgaActiveBackToLandingBtn');
    if (orgaActiveBackToLandingBtn) {
        orgaActiveBackToLandingBtn.addEventListener('click', () => {
            appState.orgaView = 'landing';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaGenBackToLandingBtn = document.getElementById('orgaGenBackToLandingBtn');
    if (orgaGenBackToLandingBtn) {
        orgaGenBackToLandingBtn.addEventListener('click', () => {
            appState.orgaView = 'landing';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    // Trigger Session Setup Button click
    const triggerBtn = document.getElementById('triggerSessionSetupBtn');
    const setupFormContainer = document.getElementById('sessionSetupFormContainer');
    if (triggerBtn && setupFormContainer) {
        triggerBtn.addEventListener('click', () => {
            setupFormContainer.classList.remove('hidden');
            const btnContainer = document.getElementById('triggerSessionSetupBtnContainer');
            if (btnContainer) btnContainer.classList.add('hidden');
            setupFormContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Wizard Scenario Options Cards
    const orgaBtnCreateScenarioOption = document.getElementById('orgaBtnCreateScenarioOption');
    if (orgaBtnCreateScenarioOption) {
        orgaBtnCreateScenarioOption.addEventListener('click', () => {
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = 'create';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaBtnSelectScenarioOption = document.getElementById('orgaBtnSelectScenarioOption');
    if (orgaBtnSelectScenarioOption) {
        orgaBtnSelectScenarioOption.addEventListener('click', () => {
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = 'select';
            savePersistedState();
            renderOrganizerDashboard();
            loadExistingScenarios();
        });
    }

    const existingScenarioSelect = document.getElementById('existingScenarioSelect');
    if (existingScenarioSelect) {
        existingScenarioSelect.addEventListener('change', updateSelectScenarioSubmitBtn);
    }

    // Organizer Forms (Unified Panel)
    const unifiedForm = document.getElementById('unifiedSessionForm');
    if (unifiedForm) unifiedForm.addEventListener('submit', handleUnifiedSessionSubmit);

    const setupForm = document.getElementById('sessionSetupForm');
    if (setupForm) setupForm.addEventListener('submit', handleLaunchSession);

    const resetBtn = document.getElementById('resetSessionBtn');
    if (resetBtn) resetBtn.addEventListener('click', handleResetSession);
    
    // Onboarding Form
    document.getElementById('onboardingForm').addEventListener('submit', handlePlayerOnboarding);
    
    // Player Gameplay trigger
    document.getElementById('searchRoomBtn').addEventListener('click', handleRoomSearch);

    // Victim Validation Modal Event Listeners
    const rejectVictimBtn = document.getElementById('rejectVictimBtn');
    if (rejectVictimBtn) rejectVictimBtn.addEventListener('click', handleRejectVictim);

    const btnSimulateApprove = document.getElementById('btnSimulateApprove');
    if (btnSimulateApprove) btnSimulateApprove.addEventListener('click', handleSimulateApprove);

    const approveVictimBtn = document.getElementById('approveVictimBtn');
    if (approveVictimBtn) approveVictimBtn.addEventListener('click', handleApproveVictim);

    const btnNextValidationSlide = document.getElementById('btnNextValidationSlide');
    if (btnNextValidationSlide) {
        btnNextValidationSlide.addEventListener('click', () => {
            appState.validationSlideIndex = 2;
            updateValidationSlides();
        });
    }

    const btnPrevValidationSlide = document.getElementById('btnPrevValidationSlide');
    if (btnPrevValidationSlide) {
        btnPrevValidationSlide.addEventListener('click', () => {
            appState.validationSlideIndex = 1;
            updateValidationSlides();
        });
    }

    const closeVictimModalBtn = document.getElementById('closeVictimModalBtn');
    if (closeVictimModalBtn) closeVictimModalBtn.addEventListener('click', closeVictimModal);

    // Portraits Verification Modal Event Listeners
    const btnPrevPortrait = document.getElementById('btnPrevPortrait');
    if (btnPrevPortrait) btnPrevPortrait.addEventListener('click', handlePrevPortrait);

    const btnNextPortrait = document.getElementById('btnNextPortrait');
    if (btnNextPortrait) btnNextPortrait.addEventListener('click', handleNextPortrait);

    const btnApprovePortraits = document.getElementById('btnApprovePortraits');
    if (btnApprovePortraits) btnApprovePortraits.addEventListener('click', handleApprovePortraits);
}

window.addEventListener('DOMContentLoaded', init);
