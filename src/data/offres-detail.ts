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

export interface OffreDetail {
  slug: string
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
  ctaTitre: string
  ctaTexte: string
}

export const OFFRES_PAGES: OffreDetail[] = [
  {
    slug: 'tracking-server-side',
    nom: 'Tracking server-side',
    navTitre: 'Tracking server-side',
    accroche: 'GTM server-side, API Conversions Meta et Enhanced Conversions : vos conversions arrivent aux régies.',
    metaTitre: 'Tracking server-side : GTM server-side, Meta CAPI, Enhanced Conversions',
    metaDescription:
      'Mise en place d’un tracking server-side complet : conteneur GTM server-side, API Conversions Meta dédupliquée, Enhanced Conversions, Consent Mode v2. Mesuré avant et après, documenté.',
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
]

export const getOffrePage = (slug: string) => OFFRES_PAGES.find((o) => o.slug === slug)

// Les 4 pages d'offre prévues. `pret: false` tant que la page n'est pas écrite :
// le lien pointe alors vers l'ancre correspondante sur /offres.
export const PLAN_OFFRES: { slug: string; nom: string; accroche: string; pret: boolean; ancre: string }[] = [
  { slug: 'audit-tracking', nom: 'Audit tracking', accroche: 'L’état des lieux chiffré, avant toute décision.', pret: false, ancre: 'audit' },
  { slug: 'tracking-server-side', nom: 'Tracking server-side', accroche: 'Vos conversions arrivent aux régies, sans doublons.', pret: true, ancre: 'setup' },
  { slug: 'conversions-offline', nom: 'Conversions offline', accroche: 'Enchérir sur les leads qui signent, pas sur les formulaires.', pret: false, ancre: 'setup' },
  { slug: 'dashboard-roas-reel', nom: 'Dashboard et ROAS réel', accroche: 'Piloter sur la marge, pas sur le revenu déclaré.', pret: false, ancre: 'dashboard' },
]
