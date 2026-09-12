// ─────────────────────────────────────────────────────────────────────────────
// Contenu des pages d'offre détaillées (/offres/<slug>).
// Une page = un objet ici. Le gabarit est src/components/OffrePage.astro.
// Règles : aucun nom de client, aucun chiffre inventé. Les preuves viennent de
// missions réelles, anonymisées. Les coûts tiers sont marqués comme indicatifs.
// ─────────────────────────────────────────────────────────────────────────────

export interface Livrable { titre: string; resume: string; points: string[] }
export interface Etape { titre: string; texte: string; delai: string }
export interface Preuve { probleme: string; cause: string; correctif: string }
export interface Faq { q: string; a: string }

export type Univers = 'mesure' | 'data'

export const UNIVERS: { cle: Univers; nom: string; court: string; promesse: string }[] = [
  { cle: 'mesure', nom: 'Mesure et acquisition', court: 'Mesure', promesse: 'Que vos campagnes reçoivent les bons signaux, et que vos chiffres disent vrai.' },
  { cle: 'data', nom: 'Data, outils et IA', court: 'Data & IA', promesse: 'Que vos données servent tous les jours à quelqu’un, dans un outil ou dans une décision.' },
]

export interface OffreDetail {
  slug: string
  univers: Univers
  nom: string
  navTitre: string
  accroche: string
  metaTitre: string
  metaDescription: string
  surtitre: string
  h1: string
  chapo: string
  reperes: { valeur: string; libelle: string }[]
  question: string
  symptomes: { titre: string; texte: string }[]
  livrables: Livrable[]
  etapes: Etape[]
  preuves: Preuve[]
  limites: string[]
  etapesStack: string[]
  prix: { titre: string; texte: string }[]
  faqs: Faq[]
  sources?: { label: string; url: string }[]
  ctaTitre: string
  ctaTexte: string
}

export const OFFRES_PAGES: OffreDetail[] = [
  {
    slug: 'tracking-server-side',
    univers: 'mesure',
    nom: 'Tracking server-side',
    navTitre: 'Tracking server-side',
    accroche: 'GTM server-side, API Conversions Meta et Enhanced Conversions : vos conversions arrivent aux régies.',
    metaTitre: 'Tracking server-side : GTM, Meta CAPI, GA4',
    metaDescription: 'Tracking server-side complet : conteneur GTM serveur, API Conversions Meta dédupliquée, Enhanced Conversions et Consent Mode v2, mesuré avant/après.',
    surtitre: 'Offre · Cœur du métier',
    h1: 'Vos campagnes optimisent sur les conversions qu’elles reçoivent. Encore faut-il qu’elles les reçoivent.',
    chapo:
      'Bloqueurs de pub, limites des navigateurs, pages quittées avant le chargement des balises : une partie de vos ventes n’arrive jamais à Meta ni à Google Ads. Le tracking server-side les fait remonter depuis un serveur, sans jamais passer outre un refus de cookies.',
    reperes: [
      { valeur: '2 à 3 semaines', libelle: 'Délai de mise en place' },
      { valeur: 'Avant / après', libelle: 'Chaque intervention est mesurée' },
      { valeur: '290 €', libelle: 'Audit préalable, déduit du setup' },
    ],
    question: 'Combien de ventes vos campagnes ne voient jamais ?',
    symptomes: [
      {
        titre: 'Les plateformes et votre back-office ne disent pas la même chose',
        texte:
          'Meta et Google Ads annoncent un nombre de ventes, votre boutique en compte un autre. Personne ne sait lequel croire, donc personne ne décide.',
      },
      {
        titre: 'Une part croissante de vos ventes est « directe »',
        texte:
          'Le trafic sans source grossit à mesure que les navigateurs et les bloqueurs coupent les balises. Vos canaux payants paraissent moins rentables qu’ils ne le sont.',
      },
      {
        titre: 'L’algorithme apprend sur des signaux incomplets',
        texte:
          'Quand une conversion sur trois ne remonte pas, l’enchère automatique optimise sur le tiers manquant. Vous payez ce décalage tous les jours.',
      },
    ],
    livrables: [
      {
        titre: 'Serveur de balises',
        resume: 'Un conteneur GTM server-side hébergé sur votre sous-domaine.',
        points: [
          'Conteneur GTM server-side sur Stape ou dans votre propre projet Google Cloud (Cloud Run)',
          'Sous-domaine à votre nom, certificat et journalisation en place',
          'Les comptes et l’hébergement restent à vous : rien n’est enfermé chez moi',
        ],
      },
      {
        titre: 'Meta : API Conversions dédupliquée',
        resume: 'Les événements partent du navigateur et du serveur, sans être comptés deux fois.',
        points: [
          'Déduplication par identifiant d’événement entre pixel et API',
          'Paramètres de correspondance envoyés proprement : e-mail et téléphone hachés, identifiants de clic, agent utilisateur',
          'Suivi de la qualité de correspondance des événements dans le gestionnaire Meta',
        ],
      },
      {
        titre: 'Google : GA4 et Enhanced Conversions',
        resume: 'Les conversions Google Ads remontent, et les bonnes sont marquées comme principales.',
        points: [
          'GA4 en server-side, avec les mêmes événements que le site',
          'Enhanced Conversions activées et vérifiées sur de vraies commandes',
          'Tri des actions de conversion : ce qui sert à enchérir, ce qui reste en observation',
        ],
      },
      {
        titre: 'Consentement',
        resume: 'Le server-side ne sert pas à contourner le refus. Il est câblé pour le respecter.',
        points: [
          'Consent Mode v2 configuré avec votre bandeau, et vérifié refus par refus',
          'Contrôle des balises tierces qui se déclenchent avant l’accord',
          'Ce qui est envoyé, à qui, et sur quelle base : écrit noir sur blanc',
        ],
      },
      {
        titre: 'Recette, mesure et documentation',
        resume: 'Vous repartez avec la preuve que ça marche, et de quoi reprendre la main.',
        points: [
          'Tests sur vos commandes réelles, pas seulement en mode prévisualisation',
          'Comparatif avant / après : ventes du back-office, GA4, Meta, Google Ads',
          'Documentation de passation et 30 jours de correctifs inclus',
        ],
      },
    ],
    etapes: [
      { titre: 'Appel de cadrage', texte: '30 minutes, votre site ouvert en direct. Je vous dis si le sujet se pose chez vous, ou non.', delai: 'Gratuit · sous 48 h' },
      { titre: 'Audit tracking', texte: 'État des lieux chiffré : ce qui remonte, ce qui se perd, ce que ça représente. Vous ressortez avec un devis ferme.', delai: '290 € · sous 5 jours ouvrés' },
      { titre: 'Mise en place', texte: 'Serveur, Meta, Google, consentement. Vous suivez l’avancement, sans avoir à me relancer.', delai: '2 à 3 semaines' },
      { titre: 'Recette sur vos vraies commandes', texte: 'On valide ensemble sur des achats réels, puis je corrige ce qui cloche.', delai: 'Inclus' },
      { titre: 'Mesure après 30 jours', texte: 'Le même comparatif qu’à l’audit, refait un mois plus tard. La différence se voit, ou elle ne se voit pas.', delai: 'Inclus' },
    ],
    preuves: [
      {
        probleme: 'Un canal payant n’affichait presque aucune vente malgré plusieurs milliers d’euros dépensés.',
        cause: 'Les pixels étaient bloqués pour une grande partie des visiteurs.',
        correctif: 'Passage en server-side, puis comparaison avec les commandes réelles.',
      },
      {
        probleme: 'Des ventes réalisées en Allemagne étaient comptées sur la France.',
        cause: 'Une boutique multi-pays avec plusieurs conteneurs mal cloisonnés.',
        correctif: 'Cause identifiée puis corrigée, chiffres par pays remis d’équerre.',
      },
      {
        probleme: 'Aucun formulaire de contact ne remontait comme conversion.',
        cause: 'Envoi en AJAX : le déclencheur natif de GTM ne se déclenchait jamais.',
        correctif: 'Écoute de l’événement de succès du formulaire, conversions remontées à nouveau.',
      },
    ],
    limites: [
      'Le server-side ne contourne pas un refus de consentement. Si un visiteur refuse, rien ne part.',
      'Il ne crée pas de ventes. Il récupère de la mesure, ce qui aide l’algorithme à mieux enchérir. Une mauvaise offre reste une mauvaise offre.',
      'Si votre intégration native est déjà bien configurée et votre budget publicitaire modeste, le gain peut être faible. Je vous le dis à l’audit, avant que vous n’engagiez quoi que ce soit.',
      'Il ne remplace pas un plan de marquage propre côté site : si les événements sont faux au départ, ils resteront faux côté serveur.',
    ],
    etapesStack: ['02', '03'],
    prix: [
      { titre: 'Audit préalable', texte: '290 €, déduit du setup si vous poursuivez. C’est lui qui chiffre l’enjeu et fixe le périmètre.' },
      { titre: 'Mise en place', texte: 'Sur devis après l’audit : périmètre écrit, prix ferme, délai annoncé. Pas de facturation à l’heure qui dérape.' },
      {
        titre: 'Hébergement du serveur',
        texte:
          'Facturé par l’hébergeur, pas par moi. À titre indicatif (juin 2026) : Stape à partir d’environ 17 $ par mois en formule annuelle, Addingwell à partir d’environ 90 € par mois, Cloud Run autour de 45 $ par mois et par instance. Le montant exact dépend de votre trafic ; il est chiffré dans le devis.',
      },
    ],
    faqs: [
      {
        q: 'Stape ou mon propre Google Cloud ?',
        a: 'Stape si vous voulez démarrer vite et sans infrastructure à gérer : c’est moins cher au départ et l’essentiel est déjà câblé. Votre propre projet Google Cloud si vous tenez à garder la main complète sur vos données et que le trafic est élevé. Je vous donne les deux chiffrages à l’audit, vous tranchez.',
      },
      {
        q: 'Qu’attendez-vous de moi pendant la mise en place ?',
        a: 'Un accès à votre GTM, à vos comptes publicitaires et à votre plateforme e-commerce, un sous-domaine à créer chez votre hébergeur, et quelqu’un à qui parler si le site demande une modification de code. Comptez 2 à 3 heures de votre côté sur l’ensemble de la mission.',
      },
      {
        q: 'Est-ce conforme au RGPD ?',
        a: 'Le server-side ne change rien à la règle : sans consentement, pas de mesure publicitaire. Ce que je mets en place respecte le refus, et je vous remets un document qui indique quelles données partent, vers qui, et sur quelle base. Je ne suis pas juriste : pour une validation juridique, faites relire ce document par votre conseil.',
      },
      {
        q: 'Ça marche sur Shopify, WooCommerce ou PrestaShop ?',
        a: 'Oui. J’interviens sur Shopify et PrestaShop ainsi que sur des sites WordPress, et le principe reste le même sur les autres plateformes. Les différences portent sur la façon d’envoyer les événements d’achat, pas sur l’architecture.',
      },
      {
        q: 'Et si l’audit conclut qu’il n’y a rien à gagner ?',
        a: 'Alors je vous le dis et on s’arrête là. Vous aurez payé 290 € pour une réponse écrite plutôt qu’un chantier inutile. C’est déjà arrivé, et ça vaut mieux qu’un setup vendu pour rien.',
      },
    ],
    ctaTitre: 'Voyons si vos campagnes perdent des ventes',
    ctaTexte: '30 minutes, gratuit, votre site ouvert en direct. Vous repartez avec une réponse, pas avec un devis imposé.',
  },
  {
    slug: 'audit-tracking',
    univers: 'mesure',
    nom: 'Audit tracking',
    navTitre: 'Audit tracking',
    accroche: 'L’état des lieux chiffré, avant toute décision.',
    metaTitre: 'Audit tracking à 290 € : ce que vous ne mesurez pas',
    metaDescription: 'Audit en 5 jours : vos ventes réelles comparées à GA4, Meta et Google Ads, collecte et consentement contrôlés, correctifs classés par impact.',
    surtitre: 'Offre · Porte d’entrée',
    h1: 'Avant de corriger quoi que ce soit : savoir ce que vous perdez, et combien.',
    chapo:
      'Cinq jours, un rapport écrit, un appel de restitution. Je compare vos ventes réelles à ce que déclarent GA4, Meta et Google Ads, j’explique d’où vient chaque écart, et je classe les correctifs par impact. Si rien ne justifie une intervention, vous l’apprenez là, pour 290 €.',
    reperes: [
      { valeur: '290 €', libelle: 'Déduits du setup si vous poursuivez' },
      { valeur: '5 jours ouvrés', libelle: 'Entre les accès et la restitution' },
      { valeur: '2 h', libelle: 'De votre temps, tout compris' },
    ],
    question: 'Vos chiffres se contredisent. Lequel dit vrai ?',
    symptomes: [
      {
        titre: 'Trois sources, trois vérités',
        texte:
          'Votre back-office, GA4 et vos régies annoncent des ventes différentes. Sans arbitrage, chaque réunion repart du même débat.',
      },
      {
        titre: 'Vous ne savez pas si le problème vient de la pub ou de la mesure',
        texte:
          'Une campagne qui paraît mauvaise l’est peut-être vraiment, ou bien elle est mal mesurée. Tant que ce n’est pas tranché, couper le budget est un pari.',
      },
      {
        titre: 'On vous vend un chantier sans avoir mesuré',
        texte:
          'Les devis de setup arrivent avant le diagnostic. Vous payez une solution sans connaître l’ampleur du problème.',
      },
    ],
    livrables: [
      {
        titre: 'Réconciliation des chiffres',
        resume: 'Vos ventes réelles, face à ce que déclarent GA4 et les régies.',
        points: [
          'Comparaison sur une période représentative : back-office, GA4, Meta, Google Ads',
          'L’écart chiffré, canal par canal, et ce qu’il représente en budget',
          'La part expliquée par la mesure, et celle qui vient de l’attribution',
        ],
      },
      {
        titre: 'Contrôle de la collecte',
        resume: 'Ce qui se déclenche, ce qui manque, ce qui se déclenche deux fois.',
        points: [
          'Conteneur GTM passé en revue : balises, déclencheurs, variables inutilisées',
          'Événements e-commerce et formulaires testés sur le site en conditions réelles',
          'Cas particuliers vérifiés : multi-pays, multi-conteneurs, formulaires en AJAX, paiement hébergé',
        ],
      },
      {
        titre: 'Conversions côté régies',
        resume: 'Ce que Meta et Google reçoivent vraiment, et sur quoi ils enchérissent.',
        points: [
          'Déduplication pixel et API, qualité de correspondance des événements Meta',
          'Actions de conversion Google Ads : lesquelles servent à enchérir, lesquelles polluent le signal',
          'Enhanced Conversions et conversions offline : présentes, absentes ou mal configurées',
        ],
      },
      {
        titre: 'Consentement et conformité',
        resume: 'Ce qui part avant l’accord du visiteur, et ce que ça vous fait risquer.',
        points: [
          'Test refus par refus : quelles balises se déclenchent quand même',
          'Consent Mode v2 : présent, bien câblé, ou déclaré sans effet',
          'Bandeau et outils en doublon, qui faussent vos chiffres autant que votre conformité',
        ],
      },
      {
        titre: 'Rapport et plan d’action',
        resume: 'Un document lisible, utilisable même sans moi.',
        points: [
          'Correctifs classés par impact et par effort, avec ce que chacun débloque',
          'Ce qui est urgent, ce qui peut attendre, ce qui ne vaut pas le coût',
          'Appel de restitution de 45 minutes, puis devis ferme si vous voulez la suite',
        ],
      },
    ],
    etapes: [
      { titre: 'Appel de cadrage', texte: 'Votre situation, vos volumes, vos doutes. Je vous dis si l’audit se justifie.', delai: 'Gratuit · sous 48 h' },
      { titre: 'Accès en lecture', texte: 'GTM, GA4, comptes publicitaires, back-office. Je fournis la liste précise, en lecture seule.', delai: '1 jour' },
      { titre: 'Analyse', texte: 'Je teste, je compare, je documente. Vous n’avez rien à faire pendant ce temps.', delai: '5 jours ouvrés' },
      { titre: 'Restitution', texte: '45 minutes en visio, rapport à l’appui. Vous posez vos questions, y compris les gênantes.', delai: 'Inclus' },
      { titre: 'Suite, ou non', texte: 'Devis ferme si vous voulez que je corrige. Sinon, le rapport est à vous, un autre prestataire peut l’appliquer.', delai: 'Libre' },
    ],
    preuves: [
      {
        probleme: 'Un tableau de bord affichait une dépense publicitaire des centaines de fois supérieure à la réalité.',
        cause: 'Un export ouvert dans un tableur en langue française transformait des montants en dates.',
        correctif: 'Montants reconstruits à 0,16 % près, et passage obligatoire à un format qui ne se réinterprète pas.',
      },
      {
        probleme: 'Toutes les conversions importées affichaient « aucune conversion récente ».',
        cause: 'Elles reposaient sur des pages de remerciement dont l’adresse avait changé, et la balise pointait vers un autre compte publicitaire.',
        correctif: 'Plan de marquage refait en 13 événements, dont 5 conversions, avec une recette écrite pour les développeurs.',
      },
      {
        probleme: 'Des cookies étaient déposés avant tout consentement.',
        cause: 'Douze balises tierces déclenchées sans condition, et deux outils de mesure en doublon avec des réglages différents.',
        correctif: 'Consentement câblé, outils redondants retirés, une seule table de correspondance pour les chiffres.',
      },
    ],
    limites: [
      'L’audit ne corrige rien. Il dit ce qui ne va pas, ce que ça coûte, et dans quel ordre le traiter.',
      'Il me faut des accès en lecture. Sans eux, je ne peux qu’observer le site depuis l’extérieur, et le rapport perd l’essentiel.',
      'Ce n’est pas un audit de vos campagnes. Je regarde le signal qu’elles reçoivent, pas vos créas ni votre ciblage, sauf si le signal explique déjà tout.',
      'S’il n’y a rien de significatif à gagner, je vous le dis et vous n’aurez pas de setup à acheter. C’est déjà arrivé.',
    ],
    etapesStack: ['02', '03'],
    prix: [
      { titre: 'Audit', texte: '290 € nets, payables à la commande. Rapport écrit et appel de restitution compris.' },
      { titre: 'Déduction', texte: 'Si vous poursuivez avec un setup dans les 3 mois, les 290 € sont déduits du devis.' },
      { titre: 'Ce qui n’est pas compris', texte: 'Les corrections elles-mêmes. Elles sont chiffrées dans un devis séparé, que vous êtes libre de refuser ou de confier à quelqu’un d’autre.' },
    ],
    faqs: [
      {
        q: 'Quels accès devez-vous avoir ?',
        a: 'En lecture : Google Tag Manager, GA4, vos comptes Google Ads et Meta, et de quoi consulter vos commandes réelles (back-office ou export). Je vous envoie la liste exacte avec les niveaux de droits minimaux. Aucun mot de passe ne transite : vous m’ajoutez avec mon adresse.',
      },
      {
        q: 'Combien de temps ça me prend, à moi ?',
        a: 'Environ deux heures : l’appel de cadrage, la mise en place des accès, et la restitution. Le reste se fait sans vous.',
      },
      {
        q: 'J’ai déjà une agence. Ça a du sens ?',
        a: 'Oui, et c’est souvent là que c’est le plus utile : l’audit porte sur la mesure, pas sur le travail de votre agence. Le rapport lui est remis si vous le souhaitez, il est fait pour être appliqué par quelqu’un d’autre que moi.',
      },
      {
        q: 'Et si vous ne trouvez rien ?',
        a: 'Le rapport le dit, avec les vérifications faites à l’appui. Vous aurez payé 290 € pour savoir que votre mesure tient, ce qui vaut mieux qu’un chantier vendu pour rien. Je ne rembourse pas un audit mené, mais je vous préviens dès l’appel de cadrage si je pense que le sujet ne se pose pas chez vous.',
      },
      {
        q: 'Vous travaillez sous NDA ?',
        a: 'Oui, sans difficulté. Et par défaut, aucun de vos chiffres ni votre nom ne sortent d’ici : les exemples que je publie sont anonymisés, et je ne cite un client qu’avec son accord écrit.',
      },
    ],
    ctaTitre: 'Commençons par regarder ensemble',
    ctaTexte: '30 minutes, gratuit, votre site ouvert en direct. Vous saurez si l’audit se justifie chez vous.',
  },
  {
    slug: 'conversions-offline',
    univers: 'mesure',
    nom: 'Conversions offline',
    navTitre: 'Conversions offline',
    accroche: 'Enchérir sur les leads qui signent, pas sur les formulaires.',
    metaTitre: 'Conversions offline CRM vers Google Ads',
    metaDescription: 'Remonter les jalons de votre CRM vers Google Ads avec leur valeur : capture du GCLID, import quotidien, fuseaux et doublons maîtrisés.',
    surtitre: 'Offre · Lead gen',
    h1: 'Google Ads enchérit sur vos formulaires. Faites-le enchérir sur vos clients.',
    chapo:
      'Tant que la seule conversion remontée est « formulaire envoyé », l’algorithme achète des formulaires, y compris les mauvais. En renvoyant les jalons de votre CRM avec leur valeur, il apprend à chercher ceux qui signent.',
    reperes: [
      { valeur: '2 à 3 semaines', libelle: 'Délai de mise en place' },
      { valeur: 'Par jalon', libelle: 'Lead qualifié, rendez-vous, signature' },
      { valeur: '290 €', libelle: 'Audit préalable, déduit du setup' },
    ],
    question: 'Combien de vos leads deviennent des clients, et Google le sait-il ?',
    symptomes: [
      {
        titre: 'Beaucoup de leads, peu de clients',
        texte:
          'Le coût par lead baisse, le nombre de contrats ne bouge pas. Les campagnes optimisent sur un volume qui ne se transforme pas.',
      },
      {
        titre: 'Vos commerciaux trient à la main',
        texte:
          'Ils savent quels leads ne valent rien. Cette information reste dans le CRM et ne redescend jamais vers les campagnes.',
      },
      {
        titre: 'Les campagnes automatiques ramassent le fond du panier',
        texte:
          'Performance Max et Demand Gen vont chercher le formulaire le moins cher, là où il est. Sans signal de qualité, c’est logique.',
      },
    ],
    livrables: [
      {
        titre: 'Cartographie de votre parcours commercial',
        resume: 'Quels jalons remonter, et à quelle valeur.',
        points: [
          'Les étapes de votre CRM traduites en jalons mesurables : lead qualifié, rendez-vous, devis, signature',
          'Une valeur par jalon, fondée sur vos taux réels et votre marge, pas sur le chiffre d’affaires brut',
          'Ce qui est fiable dans votre CRM, et ce qui ne l’est pas encore',
        ],
      },
      {
        titre: 'Capture et conservation de l’identifiant de clic',
        resume: 'Sans identifiant de clic, aucune remontée n’est possible.',
        points: [
          'Récupération et stockage du GCLID, y compris ses variantes iOS, dès le formulaire',
          'Champ dédié dans le CRM, conservé jusqu’à la signature, même si l’affaire change de main',
          'Diagnostic en lecture seule avant tout chantier : quelle part de vos leads porte un identifiant exploitable',
        ],
      },
      {
        titre: 'Pipeline de remontée',
        resume: 'Un envoi automatique tous les jours, qui survit aux changements de Google.',
        points: [
          'Export nocturne des jalons vers votre Google Cloud, puis import dans Google Ads',
          'Import par fichier ou par API selon votre éligibilité : depuis le 15 juin 2026, l’API n’accepte plus les nouveaux arrivants',
          'Horodatages stockés à la source, jamais recalculés, avec le bon fuseau',
        ],
      },
      {
        titre: 'Fiabilité',
        resume: 'La moitié du travail, c’est ce qu’on évite d’envoyer.',
        points: [
          'Déduplication, rejet des identifiants invalides et des champs laissés à l’état de gabarit',
          'Contrôle de la fenêtre de 90 jours après le clic, et arbitrages quand votre cycle de vente est plus long',
          'Journal des envois et des rejets, consultable sans moi',
        ],
      },
      {
        titre: 'Réglage des campagnes',
        resume: 'Une remontée qui ne sert à rien si l’enchère continue d’ignorer ces jalons.',
        points: [
          'Tri des actions de conversion : ce qui sert à enchérir, ce qui reste en observation',
          'Bascule progressive vers les jalons valorisés, sans casser le volume du jour au lendemain',
          'Suivi des premières semaines, puis point mensuel si vous prenez le suivi',
        ],
      },
    ],
    etapes: [
      { titre: 'Appel de cadrage', texte: 'Votre CRM, votre cycle de vente, vos campagnes. Je vous dis si le sujet est mûr chez vous.', delai: 'Gratuit · sous 48 h' },
      { titre: 'Diagnostic du CRM', texte: 'En lecture seule : part des leads avec identifiant de clic, jalons exploitables, valeurs disponibles.', delai: 'Inclus dans l’audit' },
      { titre: 'Capture et conservation', texte: 'Formulaires et CRM modifiés pour garder l’identifiant de clic jusqu’à la signature.', delai: '3 à 5 jours' },
      { titre: 'Pipeline et premiers envois', texte: 'Export automatique, import quotidien, contrôle des rejets pendant deux semaines.', delai: '2 à 3 semaines' },
      { titre: 'Bascule des enchères', texte: 'On passe l’enchère sur les jalons valorisés, progressivement, en surveillant le volume.', delai: 'Après 30 jours de données' },
    ],
    preuves: [
      {
        probleme: 'Une campagne automatique générait des leads jugés inexploitables par les commerciaux.',
        cause: 'Elle optimisait sur douze objectifs, dont une majorité de simples formulaires. Traçage par identifiant de clic et analyse de plus de 6 000 emplacements.',
        correctif: 'Enchère recentrée sur les leads qualifiés remontés du CRM, et emplacements de faible qualité exclus.',
      },
      {
        probleme: 'Les conversions remontées étaient refusées par Google Ads.',
        cause: 'Un CRM en temps universel face à un compte en heure de Paris, des doublons, et des identifiants restés à l’état de gabarit.',
        correctif: 'Décalage horaire explicite, horodatages stockés à la source, et filtrage des identifiants invalides.',
      },
      {
        probleme: 'La valeur envoyée aux campagnes était surévaluée d’environ un quart.',
        cause: 'Le montant annuel natif du CRM mélangeait plusieurs types de revenus, et les affaires signées sortaient du pipe où on les cherchait.',
        correctif: 'Champ de valeur dédié, et recherche des signatures dans tous les pipes.',
      },
    ],
    limites: [
      'Sans identifiant de clic capté à l’arrivée du lead, rien ne peut remonter. Si votre formulaire ne le conserve pas, on commence par là.',
      'Google ne prend en compte qu’une fenêtre limitée après le clic, 90 jours dans la plupart des cas. Sur un cycle de vente plus long, on remonte un jalon intermédiaire plutôt que la signature.',
      'Ce sont des données personnelles indirectes : la remontée se fait dans le cadre de votre base légale et de votre politique de confidentialité, pas en dehors.',
      'Ça n’améliore pas un mauvais ciblage ni une offre qui ne convertit pas. Ça empêche seulement d’acheter le mauvais lead deux fois.',
    ],
    etapesStack: ['01', '03'],
    prix: [
      { titre: 'Audit préalable', texte: '290 €, déduits du setup. Il mesure notamment la part de vos leads réellement rattachables à un clic.' },
      { titre: 'Mise en place', texte: 'Sur devis après l’audit. Le prix dépend de votre CRM et du nombre de jalons, pas du nombre de leads.' },
      { titre: 'Fonctionnement', texte: 'L’exécution quotidienne tourne dans votre Google Cloud : quelques euros par mois à ce volume (estimation, chiffrée dans le devis).' },
    ],
    faqs: [
      {
        q: 'Mon CRM est Pipedrive, Odoo, ou autre chose. C’est compatible ?',
        a: 'J’ai construit ce type de remontée sur Pipedrive et travaillé sur des données Odoo. Le principe vaut pour tout CRM qui expose ses affaires par API ou par export : un champ pour l’identifiant de clic, un jalon, une valeur, une date. Si votre CRM ne permet ni l’un ni l’autre, je vous le dis à l’appel de cadrage.',
      },
      {
        q: 'L’API Google Ads est fermée aux nouveaux arrivants. Ça marche quand même ?',
        a: 'Oui. Depuis le 15 juin 2026, Google n’accepte plus de nouveaux intégrateurs sur l’import de conversions offline via l’API Google Ads, et pousse vers son API Data Manager. On passe alors par un import de fichier programmé, déposé chaque nuit : c’est stable, documenté, et ça ne dépend pas d’un jeton d’accès qui peut être refusé.',
      },
      {
        q: 'Est-ce conforme au RGPD ?',
        a: 'La remontée n’envoie pas de dossier client : un identifiant de clic, un jalon, une date, une valeur. Elle doit s’inscrire dans la base légale que vous avez déjà pour vos leads, et figurer dans votre politique de confidentialité. Je vous remets un document qui décrit précisément ce qui part. Je ne suis pas juriste : faites-le relire par votre conseil.',
      },
      {
        q: 'Faut-il arrêter les conversions actuelles ?',
        a: 'Non, et ce serait risqué. On garde les conversions de formulaire en observation, on laisse les jalons valorisés accumuler des données, puis on bascule l’enchère quand le volume le permet.',
      },
      {
        q: 'Combien de leads faut-il pour que ça vaille le coup ?',
        a: 'En dessous d’une trentaine de leads par mois, l’algorithme aura du mal à apprendre sur les seuls jalons qualifiés. Dans ce cas, on remonte un jalon plus fréquent, et on s’en sert d’abord pour arbitrer les campagnes à la main.',
      },
    ],
    sources: [
      { label: 'Google Ads Developer Blog, mai 2026 : fin de l’import de conversions offline via l’API pour les nouveaux arrivants', url: 'https://ads-developers.googleblog.com/2026/05/changes-to-offline-click-conversion.html' },
    ],
    ctaTitre: 'Vos campagnes savent-elles qui signe ?',
    ctaTexte: '30 minutes, gratuit. On regarde votre CRM et vos conversions actuelles, et je vous dis ce qui est remontable.',
  },
  {
    slug: 'dashboard-roas-reel',
    univers: 'data',
    nom: 'Dashboard et ROAS réel',
    navTitre: 'Dashboard et ROAS réel',
    accroche: 'Piloter sur la marge, pas sur le revenu déclaré par les régies.',
    metaTitre: 'Dashboard marge et ROAS réel sur BigQuery',
    metaDescription: 'Ventes, CRM et dépenses publicitaires réunis dans votre BigQuery, commandes attribuées au bon canal, pilotage à la marge et alertes.',
    surtitre: 'Offre · Piloter',
    h1: 'Le ROAS affiché par la régie n’est pas celui qui paie vos salaires.',
    chapo:
      'Chaque plateforme s’attribue les mêmes ventes, et aucune ne connaît votre marge. En réunissant vos commandes, votre CRM et vos dépenses dans votre propre entrepôt, on obtient un chiffre unique, vérifiable, sur lequel décider.',
    reperes: [
      { valeur: '2 à 4 semaines', libelle: 'Délai de mise en place' },
      { valeur: 'Chez vous', libelle: 'Dans votre projet Google Cloud' },
      { valeur: 'Marge', libelle: 'Pas seulement le revenu brut' },
    ],
    question: 'Sur quels chiffres décidez-vous de couper un budget ?',
    symptomes: [
      {
        titre: 'Le reporting se fabrique à la main',
        texte:
          'Quelqu’un passe sa matinée à recopier des exports. Le fichier arrive tard, il contient des erreurs, et personne ne s’y fie vraiment.',
      },
      {
        titre: 'Chaque plateforme s’attribue les mêmes ventes',
        texte:
          'Additionnez les revenus déclarés par vos régies : vous obtenez plus que votre chiffre d’affaires réel. Le ROAS affiché n’est donc pas comparable d’un canal à l’autre.',
      },
      {
        titre: 'Vous pilotez au chiffre d’affaires, pas à la marge',
        texte:
          'Un produit qui tourne bien en volume peut vous coûter de l’argent une fois les remises, les frais et les retours pris en compte.',
      },
    ],
    livrables: [
      {
        titre: 'Centralisation dans votre entrepôt',
        resume: 'Une seule base, chez vous, alimentée toute seule.',
        points: [
          'Dépenses et performances Google Ads et Meta, commandes de votre boutique, jalons de votre CRM',
          'Historique repris à l’installation, puis mise à jour quotidienne planifiée',
          'Tout reste dans votre projet Google Cloud, à votre nom, y compris si on arrête de travailler ensemble',
        ],
      },
      {
        titre: 'Attribution de vos vraies ventes',
        resume: 'Les commandes de votre boutique rattachées au canal qui les a amenées.',
        points: [
          'Rapprochement entre commandes réelles et clics, à partir des paramètres de campagne et des identifiants de clic',
          'Un revenu attribué une seule fois, comparable entre canaux',
          'L’écart avec le chiffre déclaré par chaque régie, affiché plutôt que masqué',
        ],
      },
      {
        titre: 'Modèle orienté marge',
        resume: 'Le chiffre qui compte reste ce qu’il vous reste.',
        points: [
          'Coût d’achat, remises, frais de port et retours intégrés quand vous pouvez les fournir',
          'Marge par canal, par campagne et par produit, à côté du revenu brut',
          'Règles de calcul écrites et vérifiables : aucun chiffre ne sort d’une boîte noire',
        ],
      },
      {
        titre: 'Restitution',
        resume: 'Une page par décision à prendre, pas un mur de graphiques.',
        points: [
          'Looker Studio, ou un tableau de bord sur mesure avec accès par utilisateur si vous en avez besoin',
          'Vues quotidienne, hebdomadaire et mensuelle qui se recoupent, sans écart inexpliqué',
          'Formation de prise en main, et documentation pour la personne qui reprendra',
        ],
      },
      {
        titre: 'Alertes et garde-fous',
        resume: 'Un chiffre faux doit se voir avant votre réunion du lundi.',
        points: [
          'Contrôles automatiques : volumes qui s’effondrent, doublons, source qui cesse de répondre',
          'Alerte par e-mail ou sur votre messagerie d’équipe quand un seuil est franchi',
          'Rapprochement régulier entre l’entrepôt et votre back-office',
        ],
      },
    ],
    etapes: [
      { titre: 'Appel de cadrage', texte: 'Les décisions que vous voulez prendre, et les chiffres qui vous manquent pour ça.', delai: 'Gratuit · sous 48 h' },
      { titre: 'Cadrage des indicateurs', texte: 'On fige la définition de chaque indicateur avant de coder. C’est ce qui évite les débats après la livraison.', delai: '2 à 3 jours' },
      { titre: 'Mise en place des flux', texte: 'Connecteurs, historique, planification, contrôles de cohérence.', delai: '1 à 2 semaines' },
      { titre: 'Modèle et tableau de bord', texte: 'Construction des tables métier, puis des vues. Vous validez sur vos propres chiffres.', delai: '1 à 2 semaines' },
      { titre: 'Prise en main', texte: 'Formation, documentation, et 30 jours d’ajustements inclus.', delai: 'Inclus' },
    ],
    preuves: [
      {
        probleme: 'Une régie affichait un retour sur dépense publicitaire d’environ 190.',
        cause: 'Elle s’attribuait des ventes que le site avait réalisées autrement.',
        correctif: 'Attribution des commandes réelles de la boutique : le chiffre réel tournait autour de 36, et un canal ne pesait presque rien.',
      },
      {
        probleme: 'Le chiffre d’affaires remonté par l’entrepôt était supérieur à la réalité.',
        cause: 'Les commandes annulées après coup restaient comptées comme des ventes, faute de relecture des commandes modifiées.',
        correctif: 'Relecture glissante des dernières 48 heures, et script de rapprochement avec l’ERP.',
      },
      {
        probleme: 'Un tableau de bord affichait zéro euro de chiffre d’affaires pour un canal payant.',
        cause: 'Un filtre du connecteur vidait les colonnes de conversions, et une jointure par jour ne trouvait aucune correspondance.',
        correctif: 'Agrégation revue, configuration corrigée, et même défaut retrouvé puis corrigé sur un second tableau de bord.',
      },
    ],
    limites: [
      'Un tableau de bord ne répare pas un tracking cassé. Si la collecte est fausse, on la corrige d’abord : sinon, on affiche proprement des chiffres faux.',
      'La marge n’apparaît que si vous pouvez fournir vos coûts. Sans eux, on s’arrête au revenu attribué.',
      'Ce n’est pas de l’attribution multi-touch avec modèle statistique. C’est un rattachement au clic, vérifiable, que vous pouvez recalculer vous-même.',
      'L’entrepôt a un coût de fonctionnement. Il est faible à ces volumes, mais il existe, et il est à votre nom.',
    ],
    etapesStack: ['05', '06'],
    prix: [
      { titre: 'Audit préalable', texte: '290 €, déduits du setup. Il vérifie que les données d’entrée sont fiables avant qu’on construise dessus.' },
      { titre: 'Mise en place', texte: 'Sur devis après l’audit, selon le nombre de sources et la profondeur du modèle de marge.' },
      { titre: 'Fonctionnement', texte: 'Google Cloud vous facture directement, à l’usage. À ces volumes, cela reste de l’ordre de quelques euros à quelques dizaines d’euros par mois (estimation, précisée dans le devis).' },
    ],
    faqs: [
      {
        q: 'Pourquoi BigQuery plutôt qu’un connecteur direct vers Looker Studio ?',
        a: 'Parce qu’un connecteur direct ne garde pas d’historique, casse quand une plateforme change son API, et ne permet pas de croiser vos ventes avec vos dépenses. L’entrepôt garde vos données chez vous, et le tableau de bord devient interchangeable.',
      },
      {
        q: 'Faut-il payer des connecteurs comme Supermetrics ?',
        a: 'Pas nécessairement. Je sais les utiliser, et je sais aussi écrire les flux d’ingestion en direct sur les API, ce qui supprime l’abonnement. Le choix dépend du nombre de sources et de votre envie d’avoir du code à maintenir : je vous donne les deux chiffrages.',
      },
      {
        q: 'Qui possède les données et le tableau de bord ?',
        a: 'Vous. Le projet Google Cloud est au nom de votre société, les accès aussi, et la documentation vous est remise. Si vous arrêtez de travailler avec moi, rien ne s’éteint.',
      },
      {
        q: 'Nos équipes ne sont pas techniques.',
        a: 'C’est le cas général, et c’est prévu : les vues sont pensées pour une décision précise, la prise en main se fait en visio, et une documentation reste dans votre espace. Vous n’aurez pas de requête à écrire.',
      },
      {
        q: 'On a déjà un Looker Studio. Vous repartez de zéro ?',
        a: 'Pas forcément. Si la source est saine, on garde vos vues et on remplace ce qui les alimente. Si elle repose sur des mélanges de données impossibles à recalculer, je vous le dis franchement, et on reconstruit la partie qui pose problème.',
      },
    ],
    ctaTitre: 'Sur quel chiffre décidez-vous ?',
    ctaTexte: '30 minutes, gratuit. On regarde votre reporting actuel et ce qu’il faudrait pour qu’il devienne fiable.',
  },
  {
    slug: 'outils-sur-mesure',
    univers: 'data',
    nom: 'Outils et dashboards sur mesure',
    navTitre: 'Outils sur mesure',
    accroche: 'L’outil que votre équipe ouvre tous les matins.',
    metaTitre: 'Outils et dashboards sur mesure',
    metaDescription: 'Application interne bâtie sur vos données : accès par utilisateur, cloisonnement, alertes et indicateurs métier. Hébergée chez vous, documentée.',
    surtitre: 'Offre · Data, outils et IA',
    h1: 'Quand le tableau de bord ne suffit plus : l’outil que votre équipe ouvre tous les matins.',
    chapo:
      'Un tableau de bord montre. Un outil fait agir : chaque personne voit ce qui la concerne, reçoit une alerte quand un chiffre dérape, et prend sa décision sans demander d’export à personne. C’est ce que je construis, sur vos données, dans votre cloud.',
    reperes: [
      { valeur: '4 à 8 semaines', libelle: 'Première version utilisable' },
      { valeur: 'Chez vous', libelle: 'Votre cloud, votre dépôt, vos accès' },
      { valeur: 'Par utilisateur', libelle: 'Chacun ne voit que son périmètre' },
    ],
    question: 'Combien de fichiers votre équipe s’échange pour prendre une décision ?',
    symptomes: [
      {
        titre: 'Chacun a sa version du chiffre',
        texte:
          'Les exports circulent par messagerie, les copies divergent, et la réunion commence par un débat sur la source plutôt que sur la décision.',
      },
      {
        titre: 'Vos outils ne parlent pas la même langue',
        texte:
          'Régies, boutique, CRM, ERP : chacun a son vocabulaire et ses identifiants. Personne n’a la vue d’ensemble sans y passer la journée.',
      },
      {
        titre: 'Les outils du marché ne collent pas',
        texte:
          'Trop généralistes, trop chers par utilisateur, ou incapables d’afficher votre indicateur maison. Vous payez pour 80 % de fonctions inutilisées.',
      },
    ],
    livrables: [
      {
        titre: 'Cadrage par les décisions',
        resume: 'On part de ce que les gens doivent décider, pas des écrans.',
        points: [
          'Entretiens courts avec ceux qui utiliseront l’outil, pas seulement avec ceux qui le commandent',
          'Liste des décisions à prendre, et de l’indicateur qui les éclaire',
          'Ce qu’on ne construira pas : la moitié du cadrage sert à ça',
        ],
      },
      {
        titre: 'Socle de données',
        resume: 'Un entrepôt alimenté tout seul, avant toute interface.',
        points: [
          'Sources connectées et historisées dans votre BigQuery : régies, boutique, CRM, ERP',
          'Tables métier aux définitions écrites, recalculables et vérifiables',
          'Contrôles de cohérence à chaque exécution, avant que les chiffres n’arrivent à l’écran',
        ],
      },
      {
        titre: 'Application',
        resume: 'Une interface web, pas un fichier partagé de plus.',
        points: [
          'Connexion nominative, et cloisonnement : chaque utilisateur ne voit que son périmètre',
          'Écrans pensés par usage : vue d’ensemble, détail par campagne ou par compte, export quand c’est utile',
          'Hébergement sur votre infrastructure, code livré dans votre dépôt',
        ],
      },
      {
        titre: 'Alertes et surveillance',
        resume: 'L’outil vous prévient, vous n’allez pas le consulter par acquit de conscience.',
        points: [
          'Seuils définis avec vous : budget consommé, effondrement de volume, source muette',
          'Notifications par e-mail ou sur votre messagerie d’équipe',
          'Journal des exécutions consultable, pour savoir pourquoi un chiffre a bougé',
        ],
      },
      {
        titre: 'Industrialisation et passation',
        resume: 'Un outil qu’un autre prestataire peut reprendre.',
        points: [
          'Infrastructure décrite en Terraform, déploiement reproductible',
          'Documentation technique et guide d’utilisation, dans votre espace',
          'Formation des utilisateurs, puis 30 jours d’ajustements inclus',
        ],
      },
    ],
    etapes: [
      { titre: 'Cadrage', texte: 'Décisions à éclairer, utilisateurs, périmètre. On fige ce qui sera construit, et ce qui ne le sera pas.', delai: '3 à 5 jours' },
      { titre: 'Socle de données', texte: 'Connexions, historique, tables métier, contrôles.', delai: '1 à 2 semaines' },
      { titre: 'Première version utilisable', texte: 'Un écran qui sert vraiment, mis entre les mains des utilisateurs le plus tôt possible.', delai: '2 à 3 semaines' },
      { titre: 'Itérations', texte: 'On ajuste avec les retours d’usage, pas avec des suppositions.', delai: '2 à 4 semaines' },
      { titre: 'Passation', texte: 'Documentation, formation, et accès qui restent à vous.', delai: 'Inclus' },
    ],
    preuves: [
      {
        probleme: 'Une équipe suivait des dizaines de comptes publicitaires à coups d’exports manuels.',
        cause: 'Aucun socle commun : chaque compte avait son fichier, ses définitions et son rythme de mise à jour.',
        correctif: 'Application interne multi-comptes : flux automatisés vers l’entrepôt, connexion nominative, cloisonnement par compte, alertes hebdomadaires et suivi de consommation des budgets.',
      },
      {
        probleme: 'Un historique de données s’est retrouvé dupliqué après une modification technique.',
        cause: 'Un changement de clé d’unicité dans le pipeline d’alimentation.',
        correctif: 'Garde-fou qui refuse d’écrire quand le volume varie anormalement, et journal d’exécution consultable.',
      },
      {
        probleme: 'Le chiffre d’affaires affiché ne correspondait pas à celui de l’ERP.',
        cause: 'Les commandes modifiées après coup n’étaient jamais relues par la synchronisation.',
        correctif: 'Relecture glissante des dernières 48 heures et script de rapprochement automatique entre l’ERP et l’entrepôt.',
      },
    ],
    limites: [
      'Ce n’est pas un logiciel métier. Si un outil du marché couvre 90 % de votre besoin, je vous le dis et vous économisez le budget.',
      'Un outil vit : comptez un peu de maintenance chaque mois, ne serait-ce que parce que les API changent. C’est chiffré dès le devis, pas découvert après.',
      'La première version est volontairement réduite. Un projet qui tente tout d’un coup sort tard et sert peu.',
      'Sans données fiables en entrée, une belle interface ne fait qu’afficher de fausses certitudes plus vite.',
    ],
    etapesStack: ['05', '06'],
    prix: [
      { titre: 'Cadrage', texte: 'Forfait court, déduit du projet si vous poursuivez. Il produit le périmètre écrit et le chiffrage.' },
      { titre: 'Construction', texte: 'Sur devis, au forfait par lot. Vous validez un lot avant de lancer le suivant, et vous pouvez vous arrêter entre deux.' },
      { titre: 'Fonctionnement', texte: 'Hébergement et exécution facturés par Google Cloud, à l’usage. Maintenance en option, au mois.' },
    ],
    faqs: [
      {
        q: 'Pourquoi pas simplement Looker Studio ?',
        a: 'Souvent, Looker Studio suffit, et je vous le dirai. On passe à une application quand il faut des accès cloisonnés par utilisateur, des actions dans l’outil, des alertes, ou des écrans que Looker ne sait pas rendre. Le socle de données, lui, reste le même.',
      },
      {
        q: 'À qui appartient le code ?',
        a: 'À vous. Le dépôt est à votre nom, l’infrastructure aussi, et la documentation est livrée avec. Rien ne dépend de mon accès, y compris si on arrête de travailler ensemble.',
      },
      {
        q: 'Combien d’utilisateurs ?',
        a: 'Il n’y a pas de licence par personne : vous payez la construction et l’hébergement, pas le nombre de comptes. C’est souvent ce qui rend l’outil sur mesure moins cher qu’un abonnement au bout de deux ans.',
      },
      {
        q: 'Et si on veut le faire évoluer plus tard ?',
        a: 'Le code est standard et documenté, votre développeur ou un autre prestataire peut reprendre. Je reste disponible au forfait pour les évolutions, sans que ce soit une dépendance.',
      },
      {
        q: 'Vous travaillez seul ?',
        a: 'Oui, et c’est assumé : vous parlez à la personne qui construit. Pour un chantier qui dépasse ce que je peux tenir, je vous le dis au cadrage plutôt que d’étirer les délais.',
      },
    ],
    ctaTitre: 'Décrivez-moi la décision que vous n’arrivez pas à prendre',
    ctaTexte: '30 minutes, gratuit. On regarde vos fichiers actuels, et je vous dis si un outil se justifie ou si un tableau de bord suffit.',
  },
  {
    slug: 'automatisation',
    univers: 'data',
    nom: 'Automatisation',
    navTitre: 'Automatisation',
    accroche: 'Les tâches du lundi matin, faites sans vous.',
    metaTitre: 'Automatisation des tâches data',
    metaDescription: 'Exports, synchronisations, rapports et alertes automatisés sur Google Cloud et Apps Script, avec des contrôles qui bloquent les données fausses.',
    surtitre: 'Offre · Data, outils et IA',
    h1: 'Les tâches qui reviennent tous les lundis n’ont pas besoin de vous.',
    chapo:
      'Copier un export, recoller un tableau, vérifier que le rapport est parti : une heure par semaine, c’est près de cinquante heures par an, et autant d’occasions de se tromper. Je remplace ces gestes par des exécutions programmées, contrôlées, qui vous préviennent quand quelque chose cloche.',
    reperes: [
      { valeur: '1 à 3 semaines', libelle: 'Selon le nombre de tâches' },
      { valeur: 'Contrôlé', libelle: 'Alerte à la moindre anomalie' },
      { valeur: 'Documenté', libelle: 'Reprenable sans moi' },
    ],
    question: 'Combien d’heures par mois passez-vous à déplacer des données ?',
    symptomes: [
      {
        titre: 'Le rapport du lundi mobilise quelqu’un tout le matin',
        texte:
          'Un même enchaînement d’exports et de copies, refait chaque semaine, avec le risque d’erreur qui va avec.',
      },
      {
        titre: 'Vos outils ne se parlent pas',
        texte:
          'Les mêmes informations sont ressaisies d’un logiciel à l’autre, et les écarts apparaissent au pire moment.',
      },
      {
        titre: 'Personne ne voit passer les erreurs',
        texte:
          'Un fichier vide, une synchronisation en échec, une source muette : ça se découvre en réunion, plusieurs jours trop tard.',
      },
    ],
    livrables: [
      {
        titre: 'Inventaire des tâches',
        resume: 'On chiffre avant d’automatiser.',
        points: [
          'Liste des tâches répétitives, avec leur fréquence et le temps réellement passé',
          'Tri par gain : ce qui vaut d’être automatisé, ce qui coûterait plus cher à maintenir qu’à faire à la main',
          'Ce qui doit d’abord être simplifié plutôt qu’automatisé en l’état',
        ],
      },
      {
        titre: 'Automatisation des flux',
        resume: 'Les données circulent toutes seules, à heure fixe.',
        points: [
          'Exports et synchronisations programmés entre vos outils et votre entrepôt',
          'Traitements en Python sur Cloud Run ou en Apps Script quand un entrepôt serait surdimensionné',
          'Reprise sur erreur : une exécution ratée se rejoue sans tout casser',
        ],
      },
      {
        titre: 'Rapports et envois',
        resume: 'Le bon document, au bon moment, sans intervention.',
        points: [
          'Rapports générés et déposés là où vos équipes les cherchent déjà',
          'Diffusion programmée par e-mail ou messagerie d’équipe',
          'Mise en forme figée : plus de fichier retouché à la main avant envoi',
        ],
      },
      {
        titre: 'Contrôles et alertes',
        resume: 'Une automatisation silencieuse qui échoue est pire que pas d’automatisation.',
        points: [
          'Vérifications à chaque exécution : volumes, doublons, champs obligatoires',
          'Blocage de l’écriture en cas d’anomalie, plutôt qu’une donnée fausse publiée',
          'Alerte immédiate, avec le message d’erreur en clair',
        ],
      },
      {
        titre: 'Documentation et reprise',
        resume: 'Vous n’êtes pas dépendant de moi pour la suite.',
        points: [
          'Code dans votre dépôt, secrets dans un coffre, rien en clair',
          'Notice courte : à quoi sert chaque automatisation, quand elle tourne, qui prévenir',
          'Transfert à votre équipe technique si vous en avez une',
        ],
      },
    ],
    etapes: [
      { titre: 'Inventaire', texte: 'On liste les tâches, on mesure le temps passé, on garde celles qui valent le coup.', delai: '2 à 3 jours' },
      { titre: 'Première automatisation', texte: 'On commence par la plus coûteuse en temps, pour que le gain soit visible tout de suite.', delai: '3 à 5 jours' },
      { titre: 'Les suivantes', texte: 'Une par une, avec contrôle et alerte à chaque fois.', delai: '1 à 2 semaines' },
      { titre: 'Passation', texte: 'Documentation, accès, et essai à blanc devant vous.', delai: 'Inclus' },
    ],
    preuves: [
      {
        probleme: 'L’historique d’une régie publicitaire ne se chargeait plus, avec des erreurs serveur à répétition.',
        cause: 'Les limites de débit de l’API sur les longues périodes demandées.',
        correctif: 'Ingestion découpée en fenêtres de 30 jours, avec reprise par compte et par niveau de détail.',
      },
      {
        probleme: 'Les noms de campagnes ne respectaient pas la convention interne, ce qui faussait tous les regroupements.',
        cause: 'Contrôle fait à l’œil, quand quelqu’un y pensait.',
        correctif: 'Vérificateur automatique de nomenclature, qui signale les écarts avant qu’ils ne polluent le reporting.',
      },
      {
        probleme: 'Un fichier client mal exporté faisait entrer des montants transformés en dates.',
        cause: 'Un tableur en langue française réinterprétait les valeurs à l’ouverture.',
        correctif: 'Validation du format à l’entrée du pipeline, rejet du fichier et alerte plutôt qu’un chiffre faux publié.',
      },
    ],
    limites: [
      'Automatiser un processus bancal le rend seulement plus rapide. Quand c’est le cas, on le simplifie d’abord.',
      'Une automatisation a un coût de maintenance : les API changent, les fichiers évoluent. Si le gain annuel ne couvre pas ce coût, je vous le dis.',
      'Je n’automatise pas ce qui exige un jugement humain : un arbitrage reste un arbitrage.',
      'Je n’utilise aucune méthode contraire aux conditions d’utilisation de vos outils, même quand c’est techniquement possible.',
    ],
    etapesStack: ['01', '05'],
    prix: [
      { titre: 'Inventaire', texte: 'Forfait court : la liste des tâches, le temps qu’elles coûtent, et le gain attendu. Déduit si vous poursuivez.' },
      { titre: 'Par automatisation', texte: 'Prix fixe par tâche, annoncé avant de commencer. Vous pouvez n’en faire qu’une.' },
      { titre: 'Fonctionnement', texte: 'Quelques euros par mois d’exécution chez Google Cloud dans la plupart des cas (estimation, chiffrée dans le devis).' },
    ],
    faqs: [
      {
        q: 'Comment savoir si une tâche vaut d’être automatisée ?',
        a: 'Un calcul simple : temps passé par an, multiplié par le coût horaire, comparé au coût de mise en place et de maintenance. Une heure par semaine représente près de cinquante heures par an, ce qui rend rentables beaucoup d’automatisations. Des tâches plus rares, presque jamais.',
      },
      {
        q: 'Vous utilisez des outils comme Zapier ou Make ?',
        a: 'Je peux, mais je préfère du code court et documenté, exécuté chez vous : pas d’abonnement par déclenchement, pas de limite arbitraire, et vous gardez la main. Pour un besoin simple et ponctuel, un outil du marché reste parfois le bon choix, et je le dirai.',
      },
      {
        q: 'Que se passe-t-il si l’automatisation tombe en panne ?',
        a: 'Vous êtes prévenu tout de suite, avec l’erreur en clair, et rien de faux n’est publié : en cas d’anomalie, l’écriture est bloquée. La procédure de reprise manuelle est décrite dans la notice.',
      },
      {
        q: 'Faut-il déjà avoir un entrepôt de données ?',
        a: 'Non. Beaucoup d’automatisations utiles tiennent dans un Apps Script et un tableur. L’entrepôt devient utile quand le volume ou le croisement de sources le justifie.',
      },
      {
        q: 'Et nos données sensibles ?',
        a: 'Elles restent dans vos environnements. Les identifiants vont dans un coffre à secrets, jamais dans le code, et je n’emporte aucune copie de vos données.',
      },
    ],
    ctaTitre: 'Quelle tâche vous coûte le plus de temps ?',
    ctaTexte: '30 minutes, gratuit. Décrivez-moi votre lundi matin, je vous dis ce qui peut disparaître.',
  },
  {
    slug: 'ia-sur-vos-donnees',
    univers: 'data',
    nom: 'IA branchée sur vos données',
    navTitre: 'IA sur vos données',
    accroche: 'Un assistant qui répond sur vos chiffres, pas sur Internet.',
    metaTitre: 'IA branchée sur vos données',
    metaDescription: 'Un assistant connecté à votre entrepôt : réponses sourcées, périmètre maîtrisé, coûts plafonnés. Mise en place encadrée, sans décision automatique.',
    surtitre: 'Offre · Data, outils et IA',
    h1: 'Un assistant qui répond sur vos chiffres, pas sur Internet.',
    chapo:
      'L’intérêt de l’IA en entreprise n’est pas de rédiger des textes : c’est de répondre à « pourquoi les ventes ont baissé la semaine dernière » en interrogeant vos propres données, et de citer les lignes sur lesquelles elle s’appuie. Ça suppose un socle de données propre et des garde-fous. C’est ce que je mets en place.',
    reperes: [
      { valeur: '3 à 6 semaines', libelle: 'Du cas d’usage à la mise en service' },
      { valeur: 'Sourcé', libelle: 'Chaque réponse renvoie aux données' },
      { valeur: 'Périmètre fermé', libelle: 'L’assistant ne voit que ce qu’on lui ouvre' },
    ],
    question: 'Vos équipes attendent-elles un chiffre, ou une réponse ?',
    symptomes: [
      {
        titre: 'Les questions simples prennent des jours',
        texte:
          'Savoir quel produit a décroché le mois dernier suppose une demande, une requête, un export. La plupart des questions ne sont donc jamais posées.',
      },
      {
        titre: 'L’IA est testée sans jamais servir',
        texte:
          'Un abonnement, quelques essais, puis l’abandon : sans accès aux données de l’entreprise, l’assistant reste une curiosité.',
      },
      {
        titre: 'Vous n’osez pas y mettre vos données',
        texte:
          'Confidentialité, hallucinations, coûts imprévisibles : les craintes sont légitimes, et elles se traitent par la technique, pas par la promesse.',
      },
    ],
    livrables: [
      {
        titre: 'Cas d’usage cadrés',
        resume: 'Deux ou trois questions récurrentes, pas un assistant qui saurait tout faire.',
        points: [
          'Les questions que vos équipes posent vraiment, recueillies auprès d’elles',
          'Pour chacune : la donnée nécessaire, la forme de la réponse attendue, et comment on saura que c’est juste',
          'Ce qu’on écarte volontairement, notamment tout ce qui relève d’une décision humaine',
        ],
      },
      {
        titre: 'Socle de données',
        resume: 'Une IA branchée sur des données fausses produit des réponses fausses, en plus convaincantes.',
        points: [
          'Tables métier propres et documentées dans votre entrepôt, avec des définitions écrites',
          'Périmètre de données explicitement ouvert à l’assistant, le reste lui est inaccessible',
          'Données personnelles exclues par défaut du périmètre',
        ],
      },
      {
        titre: 'Assistant connecté',
        resume: 'Le modèle ne devine pas : il interroge vos tables et montre son travail.',
        points: [
          'Interrogation de votre entrepôt par des outils dédiés, avec requêtes tracées',
          'Réponses accompagnées des chiffres et de la source, vérifiables en un clic',
          'Intégration là où vos équipes travaillent : messagerie interne, outil existant ou interface dédiée',
        ],
      },
      {
        titre: 'Garde-fous',
        resume: 'Ce qui rend le dispositif acceptable en entreprise.',
        points: [
          'Droits d’accès respectés : chacun n’obtient que ce qu’il a le droit de voir',
          'Plafond de dépense et suivi du coût par question',
          'Refus explicite quand la donnée manque, plutôt qu’une réponse inventée',
        ],
      },
      {
        titre: 'Adoption',
        resume: 'Un outil que personne n’utilise ne vaut rien.',
        points: [
          'Formation courte, avec les bonnes et les mauvaises façons de poser une question',
          'Mesure de l’usage réel après un mois, et ajustement des cas d’usage',
          'Documentation et code livrés chez vous',
        ],
      },
    ],
    etapes: [
      { titre: 'Cadrage des cas d’usage', texte: 'Entretiens avec les équipes, choix de deux ou trois questions à fort volume.', delai: '3 à 5 jours' },
      { titre: 'Préparation des données', texte: 'Tables métier, définitions, périmètre ouvert à l’assistant.', delai: '1 à 2 semaines' },
      { titre: 'Mise en place de l’assistant', texte: 'Connexion aux données, traçabilité, garde-fous, tests sur des questions réelles.', delai: '1 à 2 semaines' },
      { titre: 'Essai encadré', texte: 'Un groupe restreint l’utilise pendant deux semaines, on corrige à partir des vraies questions.', delai: '2 semaines' },
      { titre: 'Ouverture et suivi', texte: 'Déploiement, formation, puis mesure d’usage à un mois.', delai: 'Inclus' },
    ],
    preuves: [
      {
        probleme: 'Chaque question sur les ventes passait par une demande à la personne qui savait écrire des requêtes.',
        cause: 'Les données étaient dans un entrepôt, mais accessibles seulement à qui maîtrisait le langage de requête.',
        correctif: 'Assistant connecté à l’entrepôt par des outils dédiés, capable d’aller chercher lui-même la donnée et de montrer d’où vient sa réponse.',
      },
      {
        probleme: 'Les analyses publicitaires étaient refaites de zéro à chaque fois, avec des résultats inégaux.',
        cause: 'Aucune méthode écrite : chacun regardait ce qu’il jugeait pertinent.',
        correctif: 'Trames d’analyse standardisées et réutilisables, appliquées au même jeu de données à chaque cycle.',
      },
      {
        probleme: 'La production de documents de restitution mobilisait des heures de mise en forme.',
        cause: 'Assemblage manuel de tableaux et de graphiques à chaque échéance.',
        correctif: 'Génération automatique de la partie répétitive, l’humain gardant l’analyse et les recommandations.',
      },
    ],
    limites: [
      'L’IA ne répare pas des données fausses : si le socle est bancal, on le corrige avant, sinon l’assistant accélère la propagation des erreurs.',
      'Elle ne décide pas à votre place. Elle répond, cite ses sources, et laisse l’arbitrage à un humain.',
      'Chaque question a un coût. Il est faible à l’échelle d’une équipe, mais il est réel, et il est plafonné dès la mise en place.',
      'Je n’ouvre pas de données personnelles à un modèle sans base légale claire, et je ne monte pas de dispositif de surveillance des salariés.',
    ],
    etapesStack: ['05', '06'],
    prix: [
      { titre: 'Cadrage', texte: 'Forfait court : cas d’usage retenus, données nécessaires, faisabilité. Déduit si vous poursuivez.' },
      { titre: 'Mise en place', texte: 'Sur devis, selon le nombre de cas d’usage et l’état de vos données. Les deux premiers cas coûtent plus cher que les suivants : c’est le socle qui se paie.' },
      { titre: 'Fonctionnement', texte: 'Vous payez directement le fournisseur du modèle, à l’usage, avec un plafond que l’on fixe ensemble.' },
    ],
    faqs: [
      {
        q: 'Nos données servent-elles à entraîner le modèle ?',
        a: 'Non, et c’est un point à vérifier contractuellement avec le fournisseur retenu, pas à supposer. Je configure le dispositif pour que seules les données strictement nécessaires à la question soient transmises, et je vous remets la liste de ce qui sort de chez vous.',
      },
      {
        q: 'Comment éviter les réponses inventées ?',
        a: 'En ne laissant pas le modèle répondre de mémoire : il interroge vos tables, et la réponse affiche les chiffres obtenus et la requête utilisée. Quand la donnée n’existe pas, il doit le dire plutôt que de combler le vide. C’est ce qu’on teste pendant l’essai encadré.',
      },
      {
        q: 'Quel modèle utilisez-vous ?',
        a: 'Celui qui convient à votre contrainte principale : coût, hébergement, ou qualité de raisonnement. Le dispositif est construit pour qu’on puisse en changer sans tout refaire, parce que ce marché bouge tous les trimestres.',
      },
      {
        q: 'Faut-il un entrepôt de données pour commencer ?',
        a: 'Pour un assistant qui répond sur vos chiffres, oui : il faut des tables fiables et documentées. Si vous n’en avez pas, on commence par là, et c’est utile même sans IA.',
      },
      {
        q: 'Est-ce que ça remplace un analyste ?',
        a: 'Non. Ça supprime les allers-retours pour des questions simples et répétitives, ce qui libère l’analyste pour ce qui demande du jugement. Présenter ça comme un remplacement serait vous mentir.',
      },
    ],
    ctaTitre: 'Quelles questions revient-on vous poser chaque semaine ?',
    ctaTexte: '30 minutes, gratuit. On regarde si vos données permettent déjà d’y répondre automatiquement.',
  },
  {
    slug: 'accompagnement-data',
    univers: 'data',
    nom: 'Accompagnement data',
    navTitre: 'Accompagnement data',
    accroche: 'Quelques jours par mois, la compétence que vous n’avez pas en interne.',
    metaTitre: 'Accompagnement data, quelques jours par mois',
    metaDescription: 'Priorisation, exécution et montée en compétence de votre équipe, 2 à 4 jours par mois, sans recruter un profil data à temps plein.',
    surtitre: 'Offre · Data, outils et IA',
    h1: 'Quelques jours par mois, la compétence data que vous n’avez pas en interne.',
    chapo:
      'Recruter un profil data coûte cher et se justifie rarement en dessous d’une certaine taille. Rester sans personne coûte autrement : chantiers repoussés, chiffres discutés, outils sous-utilisés. Entre les deux, quelques jours par mois, avec quelqu’un qui connaît vos données et qui exécute.',
    reperes: [
      { valeur: '2 à 4 jours', libelle: 'Par mois, ajustables' },
      { valeur: '3 mois', libelle: 'Engagement minimum, pour que ça serve' },
      { valeur: 'Votre équipe', libelle: 'Formée au passage, pas dépendante' },
    ],
    question: 'Qui s’occupe de vos données, aujourd’hui, en vrai ?',
    symptomes: [
      {
        titre: 'Le sujet data revient à celui qui a le temps',
        texte:
          'Souvent un profil marketing ou finance, compétent mais déjà chargé. Les chantiers avancent par à-coups, entre deux urgences.',
      },
      {
        titre: 'Vous hésitez à recruter',
        texte:
          'Un poste à temps plein représente un engagement lourd, difficile à justifier tant que le besoin n’est pas cadré, et difficile à évaluer sans compétence data en interne.',
      },
      {
        titre: 'Les outils sont là, mais mal utilisés',
        texte:
          'Vous payez des licences et un cloud, et les équipes retournent quand même à leurs fichiers, faute de quelqu’un pour faire le lien.',
      },
    ],
    livrables: [
      {
        titre: 'Un point mensuel qui tranche',
        resume: 'Une heure pour décider, pas pour faire le tour de la table.',
        points: [
          'Ce qui a avancé, ce qui bloque, ce qui passe devant ce mois-ci',
          'Chaque chantier chiffré en jours, pour arbitrer en connaissance de cause',
          'Compte rendu écrit, court, qui sert de mémoire au fil des mois',
        ],
      },
      {
        titre: 'De l’exécution, pas seulement du conseil',
        resume: 'Les jours passés servent à livrer.',
        points: [
          'Correctifs de mesure, flux de données, tableaux de bord, automatisations',
          'Reprise des chantiers en cours plutôt que tout refaire',
          'Priorité donnée à ce qui débloque quelqu’un dans l’équipe',
        ],
      },
      {
        titre: 'Montée en compétence de l’équipe',
        resume: 'L’objectif est que vous ayez de moins en moins besoin de moi.',
        points: [
          'Sessions courtes sur vos propres cas, pas de formation générique',
          'Documentation laissée dans votre espace, pas dans ma tête',
          'Un interlocuteur formé chez vous sur chaque chantier livré',
        ],
      },
      {
        titre: 'Définitions partagées',
        resume: 'La gouvernance utile, sans le vocabulaire de cabinet.',
        points: [
          'Un endroit unique où sont écrits vos indicateurs et leur mode de calcul',
          'Conventions de nommage et qualité des données, contrôlées automatiquement quand c’est possible',
          'Traçabilité : qui produit quoi, à partir de quelle source',
        ],
      },
      {
        titre: 'Disponibilité',
        resume: 'Un interlocuteur joignable, avec des règles claires.',
        points: [
          'Réponse sous 24 h ouvrées sur les questions courantes',
          'Fenêtres d’intervention convenues à l’avance',
          'Pas d’astreinte : ce qui est urgent la nuit relève d’un autre contrat, et je vous le dirai plutôt que de faire semblant',
        ],
      },
    ],
    etapes: [
      { titre: 'Cadrage initial', texte: 'État des lieux de vos données, de vos outils et de vos chantiers en cours.', delai: '2 à 3 jours' },
      { titre: 'Feuille de route à 3 mois', texte: 'Ce qu’on traite, dans quel ordre, avec le gain attendu pour chaque point.', delai: 'Inclus' },
      { titre: 'Rythme mensuel', texte: 'Jours planifiés à l’avance, exécution, point mensuel de pilotage.', delai: 'Chaque mois' },
      { titre: 'Bilan trimestriel', texte: 'Ce qui a été livré, ce que ça a changé, et si l’accompagnement doit continuer, changer de format ou s’arrêter.', delai: 'Tous les 3 mois' },
    ],
    preuves: [
      {
        probleme: 'Les chiffres d’une direction et ceux d’une autre ne tombaient jamais pareil.',
        cause: 'Des définitions implicites, différentes d’un service à l’autre, et aucun endroit où trancher.',
        correctif: 'Entrepôt organisé en couches, des données brutes aux tables métier, avec définitions écrites et contrôles de qualité.',
      },
      {
        probleme: 'Chaque nouveau projet repartait de zéro, avec des semaines de mise en place.',
        cause: 'Aucun socle réutilisable : infrastructure, accès et connexions refaits à la main à chaque fois.',
        correctif: 'Kit d’installation reproductible : infrastructure décrite en code, procédure d’accueil standardisée, mise en route en quelques heures.',
      },
      {
        probleme: 'Un tableau de bord livré n’était plus utilisé six mois plus tard.',
        cause: 'Personne n’avait été formé, et aucune documentation n’avait survécu au départ de l’interlocuteur.',
        correctif: 'Documentation dans l’espace du client, formation d’un référent interne, et vérification de l’usage réel après quelques semaines.',
      },
    ],
    limites: [
      'Ce n’est pas un directeur data à temps partiel. Je livre et je forme ; la stratégie d’entreprise reste la vôtre.',
      'En dessous de deux jours par mois, l’effet se dilue : on passe le temps à se remettre dans le contexte.',
      'Pas d’astreinte ni d’engagement de disponibilité en dehors des fenêtres convenues.',
      'Au-delà d’un certain volume, un recrutement devient plus pertinent. Je vous le dirai, et je peux aider à cadrer le poste et à évaluer les candidats.',
    ],
    etapesStack: ['05', '06'],
    prix: [
      { titre: 'Cadrage initial', texte: 'Forfait court, avec la feuille de route à 3 mois. Déduit du premier mois si vous poursuivez.' },
      { titre: 'Forfait mensuel', texte: 'Sur devis, selon le nombre de jours. Engagement de 3 mois, puis reconductible au mois. Les jours non utilisés dans le mois ne sont pas reportés : c’est ce qui garantit la régularité.' },
      { titre: 'Hors forfait', texte: 'Un chantier lourd sort du forfait et fait l’objet d’un devis séparé, pour ne pas dévorer les jours du mois.' },
    ],
    faqs: [
      {
        q: 'Combien de jours faut-il prévoir ?',
        a: 'Deux jours par mois suffisent pour maintenir et faire avancer un sujet à la fois. Quatre permettent de mener un chantier de front tout en assurant le courant. On ajuste au trimestre, dans un sens comme dans l’autre.',
      },
      {
        q: 'Vous travaillez sur site ou à distance ?',
        a: 'À distance par défaut, depuis Lyon, ce qui garde le coût bas. Des journées sur site sont possibles pour un lancement ou un atelier, avec les frais de déplacement annoncés à l’avance.',
      },
      {
        q: 'Et si on finit par recruter ?',
        a: 'C’est souvent l’issue souhaitable, et elle n’est pas un échec. Je peux aider à définir le poste, faire passer la partie technique des entretiens, puis accompagner la prise de fonction avant de m’effacer.',
      },
      {
        q: 'Peut-on commencer petit ?',
        a: 'Oui : le cadrage initial existe pour ça. Il vous donne une feuille de route utilisable, même si vous décidez ensuite de ne pas prendre l’accompagnement.',
      },
      {
        q: 'Travaillez-vous avec nos prestataires existants ?',
        a: 'Oui, agence média, développeurs ou intégrateur compris. Mon rôle est souvent de faire le lien technique entre eux, avec des spécifications écrites plutôt que des échanges qui se perdent.',
      },
    ],
    ctaTitre: 'Parlons de vos chantiers en attente',
    ctaTexte: '30 minutes, gratuit. On regarde ce qui bloque, et je vous dis si quelques jours par mois suffisent.',
  },
]

export const getOffrePage = (slug: string) => OFFRES_PAGES.find((o) => o.slug === slug)

// Les pages d'offre, par univers. `pret: false` tant que la page n'est pas écrite.
export const PLAN_OFFRES: { slug: string; nom: string; accroche: string; univers: Univers; pret: boolean }[] = [
  { slug: 'audit-tracking', nom: 'Audit tracking', accroche: 'L’état des lieux chiffré, avant toute décision.', univers: 'mesure', pret: true },
  { slug: 'tracking-server-side', nom: 'Tracking server-side', accroche: 'Vos conversions arrivent aux régies, sans doublons.', univers: 'mesure', pret: true },
  { slug: 'conversions-offline', nom: 'Conversions offline', accroche: 'Enchérir sur les leads qui signent, pas sur les formulaires.', univers: 'mesure', pret: true },
  { slug: 'dashboard-roas-reel', nom: 'Dashboard et ROAS réel', accroche: 'Piloter sur la marge, pas sur le revenu déclaré.', univers: 'data', pret: true },
  { slug: 'outils-sur-mesure', nom: 'Outils et dashboards sur mesure', accroche: 'L’outil que votre équipe ouvre tous les matins.', univers: 'data', pret: true },
  { slug: 'automatisation', nom: 'Automatisation', accroche: 'Les tâches du lundi matin, faites sans vous.', univers: 'data', pret: true },
  { slug: 'ia-sur-vos-donnees', nom: 'IA branchée sur vos données', accroche: 'Un assistant qui répond sur vos chiffres, pas sur Internet.', univers: 'data', pret: true },
  { slug: 'accompagnement-data', nom: 'Accompagnement data', accroche: 'Quelques jours par mois, la compétence que vous n’avez pas en interne.', univers: 'data', pret: true },
]

export const offresParUnivers = (u: Univers) => PLAN_OFFRES.filter((p) => p.univers === u)
