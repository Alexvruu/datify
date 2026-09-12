// ─────────────────────────────────────────────────────────────────────────────
// Contenu de la landing page d'accueil.
//
// RÈGLE ABSOLUE : rien d'inventé ici. Tout champ marqué « À REMPLIR » doit être
// complété par Alexandre avec du vérifiable avant toute mise en ligne.
// Aucun témoignage, aucun logo client, aucun chiffre client non sourçable.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Accroche de la page d'accueil.
 *
 * Choix du 12/09/2026 : accroche ramenée à deux lignes, formulée comme une
 * promesse plutôt que comme un constat. « Banque » sortait du vocabulaire du
 * lecteur et laissait entendre une fraude des régies, alors que l'offre traite
 * d'abord des ventes qui ne remontent pas.
 *
 * Choix du 10/09/2026 : ne nommer aucune plateforme dans le titre.
 * Nommer Meta y enfermait le positionnement dans la partie la plus banalisée
 * de l'offre (app Meta native de Shopify, CAPI Gateway) et laissait dehors
 * deux des trois personas. Les plateformes descendent dans le sous-titre,
 * où elles font la reconnaissance et le référencement sans définir l'identité.
 *
 * Pour changer d'accroche, ne modifier que ce bloc.
 */
export const HERO = {
  surtitre: 'Tracking · BigQuery · Automatisation',
  /** Choix du 12/09/2026 : registre « expertise sobre » — un groupe nominal qui nomme
   *  la discipline, puis une maxime qui requalifie le chiffre. « Fiabilisation du
   *  tracking » est une formule descriptive commune au métier ; la seconde ligne, elle,
   *  doit rester propre à Datify : ne jamais reprendre la signature d'un concurrent.
   *  Variantes prêtes à coller pour la seconde ligne :
   *  B. ['Fiabilisation du tracking.', 'Vos chiffres ne dépendent plus de qui les affiche.']
   *  C. ['Fiabilisation du tracking.', 'Le déclaré d’un côté, l’encaissé de l’autre.']
   *  D. ['Fiabilisation du tracking.', 'Une seule version de vos ventes.']
   *  Vérifier au navigateur : au-delà de ~30 signes, la ligne se replie. */
  titre: ['Fiabilisation du tracking.', 'Un chiffre déclaré n’est pas un chiffre constaté.'],
  /** Index de la ligne mise en couleur : on accentue la chute. */
  ligneAccentuee: 1,
  sousTitre:
    'Meta et Google Ads déclarent des ventes, votre caisse en enregistre d’autres. Je mesure l’écart, je vous dis d’où il vient, et je le corrige — avec un avant / après. Ensuite vos données servent à décider : BigQuery, tableaux de bord, automatisations.',
  ctaNote: ['Gratuit, sans engagement.', 'On regarde votre site en direct.'],
  chiffres: [
    { v: '72 h', l: 'pour une intervention express' },
    { v: '5 j', l: 'pour rendre un audit' },
    { v: '< 24h', l: 'délai de réponse' },
  ],
}

/** Personas visés, dans l'ordre de priorité. Sert de garde-fou éditorial. */
export const PERSONAS = [
  {
    nom: 'Le dirigeant e-commerce',
    contexte: 'Shopify ou WooCommerce, dépense en Meta et Google Ads, pas d’équipe data.',
    douleur: 'Meta annonce des ventes que la banque ne voit pas. Impossible de savoir quoi couper.',
  },
  {
    nom: 'Le responsable acquisition',
    contexte: 'Scale-up ou PME, pilote un budget média, rend des comptes chaque mois.',
    douleur: 'Chaque source donne un chiffre différent. Le reporting prend deux jours par mois.',
  },
  {
    nom: 'L’agence sans profil tracking',
    contexte: 'Agence média ou Shopify, bonne en création et en achat, pas en mesure.',
    douleur: 'Les clients demandent du server-side. Personne en interne ne sait le poser.',
  },
]

/** Le problème, exprimé comme le prospect le vit. */
export const SYMPTOMES = [
  {
    probleme: 'Meta annonce plus de ventes que votre back-office',
    cause: 'Pixel navigateur bloqué, ou événements web et CAPI non dédupliqués : les achats sont comptés deux fois, ou pas du tout.',
    geste: 'Envoi server-side avec event_id partagé, puis contrôle du taux de correspondance et de la déduplication.',
  },
  {
    probleme: 'GA4 et votre plateforme e-commerce ne tombent jamais d’accord',
    cause: 'Achats manqués sur la page de confirmation, double configuration GA4, ou consentement mal câblé qui coupe la mesure.',
    geste: 'Recette événement par événement, puis réconciliation contre les commandes réelles sur trente jours.',
  },
  {
    probleme: 'Vos campagnes optimisent sur des signaux incomplets',
    cause: 'Enhanced Conversions absentes, remontée partielle vers Google Ads et Meta : les algorithmes apprennent sur une fraction de la vérité.',
    geste: 'Remontée server-side des conversions, avec mesure de l’écart avant et après sur un cycle complet.',
  },
]

/** Stack réellement maîtrisée. Remplace les logos clients : vérifiable, et n'engage personne. */
export const STACK = [
  { groupe: 'Collecte', outils: ['Google Tag Manager', 'GTM Server-Side', 'Stape', 'Cloud Run'] },
  { groupe: 'Mesure', outils: ['GA4', 'Consent Mode v2', 'Enhanced Conversions'] },
  { groupe: 'Publicité', outils: ['Meta CAPI', 'Google Ads', 'Déduplication'] },
  { groupe: 'Données · Google Cloud', outils: ['BigQuery', 'Cloud Functions', 'Cloud Scheduler', 'Looker Studio', 'Python', 'Apps Script'] },
  { groupe: 'Plateformes', outils: ['Shopify', 'WooCommerce', 'PrestaShop'] },
]

/** Les expertises, montrées en profondeur sous une promesse unique. */
export const EXPERTISES = [
  {
    cle: 'fiabilisation',
    titre: 'Fiabilisation du tracking',
    accroche: 'Retrouver l’accord entre ce que vous mesurez et ce que vous encaissez.',
    pourQui: 'Vous avez déjà un tracking, mais vous ne lui faites plus confiance.',
    contenu: [
      'Audit complet de la collecte existante, page par page et événement par événement',
      'Réconciliation des conversions contre vos commandes réelles',
      'Correction du plan de marquage et de la couche de données',
      'Mise en conformité du consentement, sans perdre la mesure autorisée',
    ],
    livrables: ['Rapport d’audit chiffré', 'Plan de marquage corrigé', 'Recette documentée'],
  },
  {
    cle: 'server-side',
    titre: 'Server-side et Meta CAPI',
    accroche: 'Récupérer les conversions perdues par les bloqueurs et les navigateurs.',
    pourQui: 'Vous dépensez en publicité et vous perdez du signal sans savoir combien.',
    contenu: [
      'Conteneur GTM server-side sur Stape ou Cloud Run, avec sous-domaine first-party',
      'Meta CAPI avec déduplication par event_id et suivi du taux de correspondance',
      'Google Ads : Enhanced Conversions et remontée server-side',
      'Mesure de l’écart avant et après, sur un cycle publicitaire complet',
    ],
    livrables: ['Infrastructure livrée et documentée', 'Comparatif avant / après', 'Accès et transfert de propriété'],
  },
  {
    cle: 'data',
    titre: 'Données et reporting',
    accroche: 'Un seul chiffre par question, au lieu de trois réponses contradictoires.',
    pourQui: 'Votre reporting mensuel se fabrique à la main et personne ne le croit vraiment.',
    contenu: [
      'Centralisation des sources dans BigQuery',
      'Modélisation orientée marge et ROAS réel, pas seulement revenu brut',
      'Tableaux de bord Looker Studio pensés pour la décision',
      'Alertes automatiques quand la collecte décroche',
    ],
    livrables: ['Entrepôt BigQuery', 'Tableaux de bord', 'Alertes de qualité de données'],
  },
  {
    cle: 'express',
    titre: 'Interventions express',
    accroche: 'Une tâche précise, un prix fixe, livrée sous 72 h.',
    pourQui: 'Vous savez ce qu’il vous faut et vous voulez que ce soit fait vite, et bien.',
    contenu: [
      'Export GA4 vers BigQuery, configuré et documenté',
      'Connecteur Meta Ads ou Google Ads vers BigQuery (Cloud Functions, Cloud Scheduler)',
      'Alerte automatique quand le tracking décroche',
      'Correctif ciblé sur un conteneur GTM web ou server-side',
    ],
    livrables: ['Prix fixe annoncé avant de commencer', 'Livraison sous 72 h (jours ouvrés)', 'Note de documentation'],
  },
]

/** La méthode. La transparence du process remplace une partie de la preuve sociale. */
export const METHODE = [
  {
    n: '01',
    titre: 'Appel de cadrage',
    duree: '30 minutes, gratuit',
    contenu: 'On regarde votre site ensemble, en direct. Je vous dis ce que je vois et si le sujet vaut une intervention. Si ce n’est pas le cas, je vous le dis aussi.',
  },
  {
    n: '02',
    titre: 'Audit',
    duree: 'Sous 5 jours ouvrés',
    contenu: 'J’inspecte la collecte, je réconcilie contre vos commandes réelles et je chiffre la perte. Vous recevez un rapport écrit, lisible sans être technique, avec les correctifs classés par impact.',
  },
  {
    n: '03',
    titre: 'Correction',
    duree: 'Périmètre et délai fixés au devis',
    contenu: 'Je pose ce qui a été validé : server-side, CAPI dédupliqué, conformité du consentement, remontée des conversions. Tout est recetté et documenté avant livraison.',
  },
  {
    n: '04',
    titre: 'Vérification',
    duree: '30 jours après la mise en ligne',
    contenu: 'On remesure l’écart sur un cycle complet et on compare au point de départ. C’est ce chiffre qui dit si la mission a servi à quelque chose.',
  },
]

/** Engagements tenables sans exagération. */
export const ENGAGEMENTS = [
  {
    titre: 'Vous restez propriétaire de tout',
    detail: 'Comptes, conteneurs, projet Cloud, code. Tout est à votre nom dès le premier jour. Vous pouvez partir sans rien perdre.',
  },
  {
    titre: 'L’écart est mesuré, pas affirmé',
    detail: 'Chiffre de départ relevé avant l’intervention, chiffre d’arrivée relevé 30 jours après. Vous voyez la différence, ou vous voyez qu’il n’y en a pas.',
  },
  {
    titre: 'Rien n’est promis sur le consentement',
    detail: 'Le server-side récupère les pertes techniques : bloqueurs, limitations navigateur, pages quittées trop vite. Il ne contourne jamais un refus de cookies, et je ne vous vendrai pas le contraire.',
  },
  {
    titre: 'Tout est documenté',
    detail: 'Vous repartez avec un document que votre prochain prestataire ou votre futur salarié peut reprendre sans moi.',
  },
]

/**
 * Cas clients anonymisés.
 *
 * ⚠️ CONTENU NON PUBLIABLE EN L'ÉTAT ⚠️
 * Les trois entrées ci-dessous sont des GABARITS VIDES, pas des cas réels.
 * Alexandre doit les remplir avec des missions qu'il a réellement menées,
 * après relecture de sa clause de confidentialité, et sans jamais rendre
 * un client identifiable. Tant que les champs commencent par « À REMPLIR »,
 * la section ne s'affiche pas sur le site (voir index.astro).
 */
export const CAS = [
  {
    secteur: 'À REMPLIR — secteur et ordre de grandeur, ex. « E-commerce mode · ~1,2 M€ de CA »',
    symptome: 'À REMPLIR — ce que le client constatait et qui l’a poussé à appeler',
    trouve: 'À REMPLIR — ce que l’audit a révélé, précisément',
    fait: 'À REMPLIR — le geste technique posé',
    resultat: 'À REMPLIR — le chiffre avant et le chiffre après',
    duree: 'À REMPLIR — durée de la mission',
  },
  {
    secteur: 'À REMPLIR',
    symptome: 'À REMPLIR',
    trouve: 'À REMPLIR',
    fait: 'À REMPLIR',
    resultat: 'À REMPLIR',
    duree: 'À REMPLIR',
  },
  {
    secteur: 'À REMPLIR',
    symptome: 'À REMPLIR',
    trouve: 'À REMPLIR',
    fait: 'À REMPLIR',
    resultat: 'À REMPLIR',
    duree: 'À REMPLIR',
  },
]

/** Un cas est considéré publiable seulement si aucun champ n'est resté un gabarit. */
export const CAS_PUBLIABLES = CAS.filter(
  (c) => !Object.values(c).some((v) => typeof v === 'string' && v.startsWith('À REMPLIR'))
)

/**
 * Problèmes de tracking traités. Démonstration de compétence, pas de clientèle :
 * n'engage personne et se vérifie en appel. Sert aussi la longue traîne SEO.
 */
export const PROBLEMES = [
  { cat: 'Meta', items: ['Écart entre Meta et le back-office', 'Événements doublés faute d’event_id', 'Taux de correspondance CAPI trop bas', 'Pixel bloqué par les extensions'] },
  { cat: 'GA4', items: ['Achats absents de la page de confirmation', 'Double configuration GA4', 'Sessions attribuées à « direct »', 'Écart GA4 vs plateforme e-commerce'] },
  { cat: 'Google Ads', items: ['Conversions importées incomplètes', 'Enhanced Conversions non posées', 'Doublons entre GA4 et Ads', 'GCLID perdu à la redirection'] },
  { cat: 'Server-side', items: ['Conteneur serveur qui ne reçoit rien', 'Erreurs 404 sur le sous-domaine', 'Checkout Shopify non tracké côté serveur', 'Coûts Cloud Run qui dérapent'] },
  { cat: 'Consentement', items: ['Balises qui partent avant le consentement', 'Consent Mode v2 mal câblé', 'Perte totale de mesure après pose du bandeau', 'Bandeau non conforme CNIL'] },
  { cat: 'Données', items: ['Reporting fabriqué à la main chaque mois', 'Sources qui donnent trois chiffres différents', 'ROAS calculé sur le revenu brut, pas sur la marge', 'Aucune alerte quand la collecte décroche'] },
]

/** Objections réelles, traitées franchement. */
export const FAQ = [
  {
    q: 'Combien ça coûte ?',
    a: 'L’audit est à 290 €, déduit du setup si vous poursuivez. Le reste est chiffré dans un devis écrit, avec périmètre et délai. L’appel de 30 minutes sert à choisir la bonne offre, ou à conclure qu’il ne vous en faut aucune. Pas de facturation à l’heure qui dérape.',
  },
  {
    q: 'Et si vous ne trouvez rien ?',
    a: 'Cela arrive, et c’est une bonne nouvelle pour vous. Je vous le dis pendant l’appel, avant tout engagement. Je préfère perdre une mission que facturer un audit dont je connais déjà la conclusion.',
  },
  {
    q: 'Je n’ai pas de développeur, c’est bloquant ?',
    a: 'Non. Sur Shopify et WooCommerce, l’essentiel se pose sans toucher au code. Quand une intervention développeur est nécessaire, je fournis les instructions précises et je recette moi-même le résultat.',
  },
  {
    q: 'Le server-side, ce n’est pas contourner le RGPD ?',
    a: 'Non, et il faut se méfier de ceux qui le laissent entendre. Un refus de cookies reste un refus, côté serveur comme côté navigateur. Le server-side récupère les pertes techniques : bloqueurs de publicité, limitations Safari, pages quittées avant le chargement des balises. C’est déjà beaucoup.',
  },
  {
    q: 'Combien de temps avant de voir un effet ?',
    a: 'L’audit est rendu sous cinq jours ouvrés. Une correction courante se pose en une à deux semaines. L’effet sur vos campagnes se lit sur un cycle publicitaire complet, soit environ trente jours après la mise en ligne.',
  },
  {
    q: 'Que se passe-t-il si on arrête de travailler ensemble ?',
    a: 'Tout est à votre nom depuis le début et tout est documenté. Vous gardez l’infrastructure, les accès et le document de reprise. Aucune dépendance n’est créée volontairement.',
  },
]

/**
 * Preuves publiables : missions menées en agence, anonymisées.
 * RÈGLE : aucun nom de client, aucun chiffre qui permettrait d'en identifier un,
 * aucune revendication de mission Datify. C'est la réponse honnête aux murs de
 * logos des concurrents, tant qu'il n'y a pas de cas client Datify validé par écrit.
 */
export const PREUVES = [
  {
    symptome: 'Une régie annonçait un retour sur dépense d’environ 190.',
    cause: 'Elle s’attribuait des ventes réalisées autrement.',
    correctif: 'Attribution des commandes réelles de la boutique : le chiffre tombait autour de 36.',
  },
  {
    symptome: 'Un canal payant n’affichait presque aucune vente malgré plusieurs milliers d’euros dépensés.',
    cause: 'Les pixels étaient bloqués pour une grande partie des visiteurs.',
    correctif: 'Passage en server-side, puis comparaison avec les commandes réelles.',
  },
  {
    symptome: 'Toutes les conversions importées affichaient « aucune conversion récente ».',
    cause: 'Elles reposaient sur des pages de remerciement dont l’adresse avait changé.',
    correctif: 'Plan de marquage refait en 13 événements, avec une recette écrite pour les développeurs.',
  },
  {
    symptome: 'Une campagne automatique générait des leads jugés inexploitables.',
    cause: 'Elle optimisait sur douze objectifs, dont une majorité de simples formulaires.',
    correctif: 'Enchère recentrée sur les leads qualifiés remontés du CRM.',
  },
  {
    symptome: 'Des cookies étaient déposés avant tout consentement.',
    cause: 'Douze balises tierces se déclenchaient sans condition, dont six sur toutes les pages.',
    correctif: 'Consentement câblé, outils en doublon retirés.',
  },
  {
    symptome: 'Le chiffre d’affaires remonté dépassait la réalité.',
    cause: 'Les commandes annulées après coup restaient comptées comme des ventes.',
    correctif: 'Relecture glissante des dernières 48 heures et rapprochement automatique avec l’ERP.',
  },
]

/**
 * Chiffres de marché. RÈGLE : uniquement des données publiques, sourcées et datées.
 * Vérifier chaque source au moins une fois par trimestre : ces chiffres bougent,
 * et une donnée périmée sur un site de consultant en mesure, c'est rédhibitoire.
 */
export const CHIFFRES_MARCHE = [
  {
    valeur: '55 à 65 %',
    libelle: 'des visiteurs acceptent la mesure sur un site e-commerce français',
    consequence: 'Le reste échappe à la mesure classique, et aucun server-side ne récupère un refus.',
    source: 'Didomi, State of Data Privacy 2026',
    url: 'https://www.donneespersonnelles.fr/taux-consentement-cookies',
  },
  {
    valeur: '7 jours',
    libelle: 'd’usage du navigateur sans interaction, et Safari efface ce que le site a écrit en JavaScript',
    consequence: 'Un visiteur qui revient plus tard est compté comme nouveau, et le parcours d’achat se casse en deux.',
    source: 'WebKit, analysé par Simo Ahava (2022)',
    url: 'https://www.simoahava.com/privacy/first-party-cookies-webkit-revisited/',
  },
  {
    valeur: '15 juin 2026',
    libelle: 'depuis cette date, l’API Google Ads n’accepte plus de nouveaux arrivants sur l’import de conversions hors ligne',
    consequence: 'Les intégrations à monter aujourd’hui passent par une autre voie. Beaucoup de prestataires l’ignorent encore.',
    source: 'Google Ads Developer Blog, mai 2026',
    url: 'https://ads-developers.googleblog.com/2026/05/changes-to-offline-click-conversion.html',
  },
]
