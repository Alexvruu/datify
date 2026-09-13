// ─────────────────────────────────────────────────────────────────────────────
// Guides permanents publiés sous /ressources.
// Gabarit unique : src/components/RessourcePage.astro
//
// RÈGLES
// - Une page = une question que se pose l'acheteur, pas un outil à décrire.
// - La section « Quand ça ne sert à rien » est obligatoire : c'est elle qui distingue
//   ces pages de celles des concurrents.
// - Les pannes viennent de missions réelles, anonymisées : aucun nom de client,
//   aucun chiffre permettant d'en identifier un.
// - Tout chiffre de marché est sourcé et daté. En cas de doute, on n'écrit rien.
// - « Vérifié le » à revoir chaque trimestre : une page non datée est une page morte.
// ─────────────────────────────────────────────────────────────────────────────

export interface Panne { probleme: string; cause: string; correctif: string }
export interface Cout { poste: string; montant: string; note?: string }
export interface FaqR { q: string; a: string }

export interface Ressource {
  slug: string
  titre: string
  chapo: string
  metaTitre: string
  metaDescription: string
  famille: 'Plateformes' | 'Server-side' | 'Régies' | 'Consentement' | 'Data'
  reponseCourte: string
  aQuoiCaSert: string[]
  quandCaNeSertPas: string[]
  pannes: Panne[]
  checklist: string[]
  couts?: Cout[]
  faqs: FaqR[]
  offre: { slug: string; nom: string; phrase: string }
  sources?: { label: string; url: string }[]
  verifieLe: string
}

export const RESSOURCES: Ressource[] = [
  {
    slug: 'gtm-server-side-stape-addingwell-cloud-run',
    titre: 'GTM server-side : Stape, Addingwell ou votre propre Cloud Run ?',
    chapo: 'Les trois hébergent le même conteneur. Ce qui change, c’est le coût, la durée de vie de vos cookies et ce que vous pouvez encore faire le jour où ça casse.',
    metaTitre: 'GTM server-side : Stape, Addingwell ou Cloud Run ?',
    metaDescription: 'Trois façons d’héberger un conteneur GTM server-side : coûts réels, durée de vie des cookies, maintenance, et laquelle choisir selon votre trafic.',
    famille: 'Server-side',
    reponseCourte: 'Stape pour démarrer vite et sans infrastructure à gérer. Addingwell si vous voulez un acteur européen avec un accompagnement en français. Votre propre projet Google Cloud si vous tenez à la maîtrise complète et que le trafic est élevé. Dans les trois cas, le sous-domaine doit être le vôtre : c’est lui qui fait la différence sur la durée de vie des cookies, pas le fournisseur.',
    aQuoiCaSert: [
      'Un conteneur GTM server-side est un serveur qui reçoit les événements de votre site, puis les renvoie aux régies. Le navigateur ne parle plus directement à Meta ou à Google : il parle à votre sous-domaine.',
      'Ce déplacement récupère ce que le navigateur bloque ou raccourcit : extensions de blocage, restrictions des navigateurs sur les données écrites en JavaScript, pages quittées avant le chargement des balises.',
      'Il vous rend aussi maître de ce qui part : vous voyez, et vous filtrez, les données envoyées à chaque plateforme.',
    ],
    quandCaNeSertPas: [
      'Si votre budget publicitaire mensuel se compte en centaines d’euros, le coût d’hébergement et de mise en place dépassera le gain. L’intégration native de votre plateforme suffit.',
      'Si votre tracking côté navigateur est déjà faux (mauvais événements, valeurs en centimes, achats manqués), le server-side enverra les mêmes erreurs, plus vite.',
      'Le server-side ne contourne pas un refus de consentement. Si l’essentiel de votre perte vient des refus, le chantier ne changera presque rien, et il faut le savoir avant de payer.',
    ],
    pannes: [
      {
        probleme: 'Le conteneur serveur ne reçoit rien, alors que la configuration paraît correcte.',
        cause: 'L’adresse du serveur n’est pas transmise côté navigateur, ou un second script réinitialise la mesure sans elle.',
        correctif: 'Vérifier la variable de transport sur chaque page, puis contrôler qu’aucun autre script ne recharge la configuration.',
      },
      {
        probleme: 'Les cookies expirent bien plus vite que prévu.',
        cause: 'Un sous-domaine mal configuré, ou un mécanisme d’aliasing qui fait passer la réponse pour un tiers.',
        correctif: 'Poser le serveur sur un vrai sous-domaine du site, et vérifier la durée réelle des cookies dans l’inspecteur, pas dans la documentation.',
      },
      {
        probleme: 'Tout fonctionne en prévisualisation, rien ne remonte en production.',
        cause: 'Une politique de sécurité du site bloque les appels vers le nouveau sous-domaine.',
        correctif: 'Lire la console du navigateur : une violation de politique de sécurité s’y affiche en toutes lettres, et s’ajoute en une ligne de configuration.',
      },
    ],
    checklist: [
      'Sous-domaine du site, jamais un domaine fourni par l’hébergeur',
      'Certificat valide et journalisation activée',
      'Adresse du serveur transmise sur toutes les pages, y compris le tunnel de commande',
      'Durée de vie réelle des cookies vérifiée dans le navigateur',
      'Politique de sécurité du site mise à jour pour le nouveau sous-domaine',
      'Coût d’hébergement annoncé au client avant la mise en place',
      'Comptes et facturation au nom du client',
      'Comparatif avant / après sur les ventes réelles',
    ],
    couts: [
      { poste: 'Stape', montant: 'à partir d’environ 17 $ par mois', note: 'formule annuelle, 500 000 requêtes (juin 2026)' },
      { poste: 'Addingwell', montant: 'à partir d’environ 90 € par mois', note: '1 million de requêtes (juin 2026)' },
      { poste: 'Google Cloud Run', montant: 'environ 45 $ par mois et par instance', note: 'compter deux instances pour la résilience' },
    ],
    faqs: [
      {
        q: 'Est-ce que le server-side accélère mon site ?',
        a: 'Un peu, parce que le navigateur charge moins de scripts tiers. Mais ce n’est pas la raison de le faire : le gain de vitesse se mesure en dizaines de millisecondes, le gain de mesure se compte en ventes.',
      },
      {
        q: 'Puis-je migrer de Stape vers mon propre Cloud Run plus tard ?',
        a: 'Oui. Le conteneur est le même, c’est l’hébergement qui change. La migration se prépare en gardant le même sous-domaine, pour ne pas repartir de zéro sur les cookies.',
      },
      {
        q: 'Combien de temps pour une mise en place complète ?',
        a: 'Deux à trois semaines pour un site standard, recette comprise. L’essentiel du temps ne passe pas dans l’installation, mais dans la vérification événement par événement.',
      },
    ],
    offre: { slug: 'tracking-server-side', nom: 'Tracking server-side', phrase: 'Mise en place complète, mesurée avant et après.' },
    sources: [
      { label: 'Comparatif des coûts d’hébergement GTM server-side, juin 2026', url: 'https://alexisvantal.com/articles/server-side-gtm-cost/' },
    ],
    verifieLe: '12/09/2026',
  },
  {
    slug: 'tracking-shopify',
    titre: 'Tracking Shopify : le tunnel de commande, les doublons et le multi-pays',
    chapo: 'Trois pièges expliquent la majorité des écarts constatés sur Shopify, et aucun ne se voit dans l’interface.',
    metaTitre: 'Tracking Shopify : checkout, doublons et multi-pays',
    metaDescription: 'Pourquoi vos ventes Shopify ne correspondent pas à Meta et Google Ads : tunnel de commande, événements comptés deux fois, boutiques multi-pays.',
    famille: 'Plateformes',
    reponseCourte: 'Sur Shopify, la majorité des écarts vient de trois endroits : le tunnel de commande, où les scripts tiers sont limités ; la double collecte, quand l’application native et votre propre balise envoient le même achat ; et les boutiques multi-pays, où plusieurs conteneurs finissent par attribuer les ventes au mauvais marché.',
    aQuoiCaSert: [
      'Shopify propose des intégrations natives avec Meta et Google. Elles fonctionnent, et pour une petite boutique elles suffisent souvent.',
      'Elles atteignent leur limite dès que vous voulez maîtriser ce qui est envoyé, dédupliquer proprement, ou réconcilier vos ventes avec un entrepôt de données.',
      'Une mise en place propre consiste à décider qui envoie quoi : l’intégration native, votre conteneur, ou les deux avec une déduplication explicite.',
    ],
    quandCaNeSertPas: [
      'Sur une boutique mono-pays qui dépense peu, l’intégration native bien configurée fait le travail. Ajouter un conteneur server-side par-dessus ne fera que doubler les événements si personne ne gère la déduplication.',
      'Si vous ne regardez jamais vos chiffres au-delà du tableau de bord de la régie, un chantier de mesure ne changera pas vos décisions.',
    ],
    pannes: [
      {
        probleme: 'Les ventes réalisées dans un pays sont attribuées à un autre.',
        cause: 'Une boutique multi-pays avec plusieurs conteneurs mal cloisonnés.',
        correctif: 'Un conteneur par marché, avec des identifiants distincts, et vérification sur des commandes réelles de chaque pays.',
      },
      {
        probleme: 'Les achats sont comptés deux fois côté régie.',
        cause: 'L’intégration native et la balise du site envoient le même événement sans identifiant partagé.',
        correctif: 'Choisir une source unique, ou dédupliquer avec un identifiant d’événement commun, puis contrôler sur une semaine complète.',
      },
      {
        probleme: 'Les achats manquent alors que les autres événements remontent.',
        cause: 'Les restrictions du tunnel de commande empêchent le script de s’exécuter au bon moment.',
        correctif: 'Envoyer l’achat depuis le serveur, à partir de la commande réelle, plutôt que depuis la page de confirmation.',
      },
    ],
    checklist: [
      'Inventaire de ce qui envoie déjà des événements : application native, applications tierces, conteneur',
      'Identifiant d’événement partagé entre navigateur et serveur',
      'Achat testé sur une commande réelle, pas seulement en prévisualisation',
      'Valeurs envoyées dans la bonne unité et la bonne devise',
      'Boutiques multi-pays : un test par marché',
      'Remboursements et annulations : décidés et documentés',
      'Réconciliation avec l’export des commandes sur 30 jours',
    ],
    faqs: [
      {
        q: 'L’application Meta pour Shopify ne suffit-elle pas ?',
        a: 'Pour une boutique simple, souvent si. Elle atteint ses limites quand vous voulez contrôler les paramètres envoyés, gérer la déduplication avec vos propres événements, ou croiser vos ventes avec vos coûts dans un entrepôt.',
      },
      {
        q: 'Faut-il Shopify Plus pour tracker le tunnel de commande ?',
        a: 'Cela facilite les choses, mais l’approche recommandée aujourd’hui est d’envoyer l’achat depuis le serveur à partir de la commande. Elle fonctionne quelle que soit l’offre Shopify et résiste aux changements de la plateforme.',
      },
      {
        q: 'Combien de temps prend une remise à plat sur Shopify ?',
        a: 'Comptez une semaine pour l’audit et la réconciliation, puis deux à trois semaines pour la mise en place et la recette si un server-side est nécessaire.',
      },
    ],
    offre: { slug: 'audit-tracking', nom: 'Audit tracking', phrase: 'L’état des lieux chiffré avant de toucher à quoi que ce soit.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'conversions-offline-google-ads-2026',
    titre: 'Conversions offline Google Ads en 2026 : ce qui a changé',
    chapo: 'Depuis le 15 juin 2026, l’API Google Ads n’accepte plus de nouveaux arrivants sur l’import de conversions hors ligne. Voici les voies qui restent.',
    metaTitre: 'Conversions offline Google Ads 2026 : ce qui a changé',
    metaDescription: 'Google n’accepte plus de nouveaux intégrateurs sur l’import de conversions hors ligne depuis juin 2026. Les voies possibles, la fenêtre de 90 jours, les pièges.',
    famille: 'Régies',
    reponseCourte: 'Si vous démarrez aujourd’hui, l’API Google Ads vous refusera l’import de conversions hors ligne : depuis le 15 juin 2026, elle n’accepte plus de nouveaux adoptants, et la Data Manager API devient la voie principale. L’import de fichier programmé, lui, reste disponible et suffit dans la plupart des cas.',
    aQuoiCaSert: [
      'Remonter vers Google Ads ce qui se passe après le formulaire : lead qualifié, rendez-vous honoré, devis signé, avec la valeur correspondante.',
      'L’enchère automatique cesse alors d’optimiser sur le volume de formulaires et se concentre sur les profils qui ressemblent à vos clients.',
      'C’est le seul moyen, en lead gen, de faire comprendre à l’algorithme qu’un lead à 15 € qui ne signe jamais coûte plus cher qu’un lead à 60 € qui signe.',
    ],
    quandCaNeSertPas: [
      'Si votre CRM ne conserve pas l’identifiant de clic, rien ne peut remonter. On commence par ça, et ce n’est pas le même chantier.',
      'Si votre cycle de vente dépasse largement la fenêtre de prise en compte, la signature arrivera trop tard : il faut alors remonter un jalon intermédiaire.',
      'En dessous d’une trentaine de leads par mois, l’algorithme n’aura pas de quoi apprendre. La remontée sert alors à arbitrer à la main, ce qui est déjà utile, mais ne justifie pas un gros chantier.',
    ],
    pannes: [
      {
        probleme: 'Google Ads refuse les conversions envoyées.',
        cause: 'Un CRM en temps universel face à un compte en heure de Paris, avec un comportement différent l’été et l’hiver.',
        correctif: 'Décalage horaire explicite, horodatages stockés à la source et jamais recalculés.',
      },
      {
        probleme: 'Une partie des lignes est rejetée sans explication claire.',
        cause: 'Des identifiants de clic invalides, des doublons, ou des champs restés à l’état de gabarit.',
        correctif: 'Filtrage avant envoi, déduplication, et journal des rejets consultable par le client.',
      },
      {
        probleme: 'La valeur envoyée gonfle les performances affichées.',
        cause: 'Le montant natif du CRM mélange plusieurs types de revenus.',
        correctif: 'Champ de valeur dédié, fondé sur la marge, et vérification sur un échantillon d’affaires signées.',
      },
    ],
    checklist: [
      'Part des leads portant un identifiant de clic exploitable, mesurée avant de commencer',
      'Champ dédié dans le CRM, conservé jusqu’à la signature',
      'Jalons choisis : lead qualifié, rendez-vous, devis, signature',
      'Valeur par jalon fondée sur vos taux réels',
      'Fuseau horaire explicite et horodatages non recalculés',
      'Journal des envois et des rejets',
      'Base légale et politique de confidentialité à jour',
      'Bascule de l’enchère seulement après 30 jours de données',
    ],
    faqs: [
      {
        q: 'L’import par fichier est-il moins bien qu’une API ?',
        a: 'Non, il est simplement moins immédiat. Un dépôt quotidien couvre les besoins de la quasi-totalité des activités en lead gen, et il ne dépend pas d’un jeton d’accès qui peut être refusé.',
      },
      {
        q: 'Est-ce compatible avec le RGPD ?',
        a: 'Ce qui part n’est pas un dossier client : un identifiant de clic, un jalon, une date, une valeur. Cela doit s’inscrire dans la base légale que vous avez déjà pour vos leads et figurer dans votre politique de confidentialité. Faites relire par votre conseil : je ne suis pas juriste.',
      },
      {
        q: 'Faut-il arrêter les conversions de formulaire ?',
        a: 'Non. On les garde en observation, on laisse les jalons valorisés accumuler de la donnée, puis on bascule l’enchère quand le volume le permet.',
      },
    ],
    offre: { slug: 'conversions-offline', nom: 'Conversions offline', phrase: 'La remontée complète, du formulaire à la signature.' },
    sources: [
      { label: 'Google Ads Developer Blog, mai 2026', url: 'https://ads-developers.googleblog.com/2026/05/changes-to-offline-click-conversion.html' },
    ],
    verifieLe: '12/09/2026',
  },
  {
    slug: 'meta-capi-deduplication',
    titre: 'API Conversions Meta : déduplication et qualité de correspondance',
    chapo: 'Envoyer les événements deux fois, c’est facile. Les faire reconnaître comme un seul, c’est tout le sujet.',
    metaTitre: 'Meta CAPI : déduplication et qualité de correspondance',
    metaDescription: 'Envoyer vos conversions à Meta depuis le serveur sans les compter deux fois : identifiant d’événement partagé, correspondance, vérification sur des achats.',
    famille: 'Régies',
    reponseCourte: 'Le pixel et l’API doivent envoyer le même achat avec le même identifiant d’événement : Meta garde alors une seule conversion, et complète l’une par l’autre. Sans cet identifiant, vos ventes sont comptées deux fois. Ensuite vient la qualité de correspondance, qui détermine combien de ces conversions Meta arrive vraiment à rattacher à une personne.',
    aQuoiCaSert: [
      'Récupérer les événements que le navigateur ne peut plus envoyer : extensions de blocage, restrictions des navigateurs, onglets fermés trop tôt.',
      'Envoyer des paramètres de correspondance plus complets que ce que le navigateur seul peut fournir, ce qui augmente la part des conversions rattachées.',
      'Reprendre le contrôle : vous décidez ce qui part, et vous pouvez le montrer.',
    ],
    quandCaNeSertPas: [
      'Si votre plateforme propose déjà une intégration native correctement configurée et que vous dépensez peu, le gain sera marginal.',
      'Si vos événements sont faux au départ (mauvaise valeur, mauvais moment, achat manqué), la déduplication ne réparera rien.',
      'Aucun envoi serveur ne rattrape un refus de consentement, et ce n’est pas l’objectif.',
    ],
    pannes: [
      {
        probleme: 'Les ventes affichées par Meta doublent du jour au lendemain.',
        cause: 'Pixel et API envoient le même achat sans identifiant d’événement partagé.',
        correctif: 'Identifiant commun généré côté site, transmis aux deux canaux, puis contrôle sur sept jours.',
      },
      {
        probleme: 'Le chiffre d’affaires attribué reste très inférieur à la réalité.',
        cause: 'Les pixels sont bloqués pour une grande partie des visiteurs.',
        correctif: 'Envoi depuis le serveur, puis comparaison avec les commandes réelles plutôt qu’avec l’ancien chiffre.',
      },
      {
        probleme: 'La qualité de correspondance reste basse malgré le server-side.',
        cause: 'Paramètres de correspondance incomplets ou mal normalisés avant hachage.',
        correctif: 'Normaliser puis hacher e-mail et téléphone, ajouter les identifiants de clic et l’agent utilisateur, et vérifier l’effet dans le gestionnaire Meta.',
      },
    ],
    checklist: [
      'Identifiant d’événement partagé entre pixel et API',
      'Paramètres de correspondance normalisés puis hachés',
      'Identifiants de clic et agent utilisateur transmis',
      'Événements de test retirés avant livraison',
      'Qualité de correspondance relevée avant et après',
      'Achat vérifié sur une commande réelle',
      'Consentement respecté : rien ne part sur un refus',
    ],
    faqs: [
      {
        q: 'Faut-il garder le pixel si l’API envoie déjà tout ?',
        a: 'Oui. Les deux canaux se complètent : le navigateur apporte des signaux que le serveur n’a pas, et inversement. C’est la déduplication qui permet de les garder tous les deux.',
      },
      {
        q: 'Quelle qualité de correspondance viser ?',
        a: 'Plutôt que viser un chiffre absolu, comparez votre score avant et après. Ce qui compte est la progression et sa stabilité dans le temps.',
      },
      {
        q: 'Peut-on envoyer les conversions sans consentement ?',
        a: 'Non. Un refus reste un refus, quel que soit le canal d’envoi. Toute promesse contraire vous expose, et je ne la ferai pas.',
      },
    ],
    offre: { slug: 'tracking-server-side', nom: 'Tracking server-side', phrase: 'API Conversions posée, dédupliquée et vérifiée.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'consent-mode-v2-basique-avance',
    titre: 'Consent Mode v2 : basique ou avancé, et ce qui part vraiment',
    chapo: 'Les deux modes sont conformes. Ils ne donnent pas les mêmes chiffres, ni la même quantité de données envoyées à Google.',
    metaTitre: 'Consent Mode v2 : mode basique ou avancé, que choisir ?',
    metaDescription: 'Consent Mode basique ou avancé : ce qui part quand un visiteur refuse, l’effet sur vos chiffres, et comment vérifier votre installation refus par refus.',
    famille: 'Consentement',
    reponseCourte: 'En mode basique, rien ne part tant que le visiteur n’a pas accepté. En mode avancé, les balises se déclenchent quand même, sans cookie ni identifiant, et Google utilise ces signaux pour estimer ce qu’il ne voit plus. Le basique est le plus protecteur, l’avancé donne des rapports plus complets. Dans les deux cas, un refus reste un refus : aucune donnée personnelle ne doit être envoyée.',
    aQuoiCaSert: [
      'Faire cohabiter deux exigences : respecter le choix du visiteur, et garder une mesure exploitable pour piloter vos campagnes.',
      'Donner à Google l’état du consentement, de façon qu’il adapte son comportement au lieu de perdre l’information en silence.',
      'Documenter, pour vous et pour un contrôle éventuel, ce qui est envoyé selon le choix fait par l’internaute.',
    ],
    quandCaNeSertPas: [
      'Ce n’est pas un moyen de récupérer les refus. Si vous cherchez ça, la réponse est non, et aucun dispositif technique ne le fera légalement.',
      'Sur un site sans publicité ni mesure d’audience, le sujet ne se pose pas.',
      'Un bandeau mal conçu, où refuser demande trois clics, vous expose bien plus qu’un réglage technique imparfait.',
    ],
    pannes: [
      {
        probleme: 'Des cookies sont déposés avant tout choix du visiteur.',
        cause: 'Des balises tierces se déclenchent sans condition, parfois ajoutées par le CMS ou un prestataire précédent.',
        correctif: 'Inventaire complet, conditionnement au consentement, et retrait des outils en doublon.',
      },
      {
        probleme: 'Le taux de refus paraît anormalement haut, sans explication.',
        cause: 'Le bandeau se recharge à chaque page, ou le choix n’est pas mémorisé.',
        correctif: 'Vérifier la persistance du choix, puis mesurer le taux réel plutôt que de l’estimer.',
      },
      {
        probleme: 'Les chiffres de deux outils de mesure ne correspondent pas du tout.',
        cause: 'Un outil respecte le signal de refus du navigateur, l’autre non.',
        correctif: 'Aligner les réglages, ou retirer l’un des deux : deux mesures contradictoires ne valent pas mieux qu’une seule.',
      },
    ],
    checklist: [
      'État par défaut en refus, avant tout chargement de balise',
      'Délai d’attente configuré pour laisser le bandeau répondre',
      'Mise à jour du consentement transmise dès le choix',
      'Onglet Consentement réglé sur chaque balise',
      'Test refus : aucun cookie de mesure dans l’inspecteur',
      'Test acceptation : les balises se déclenchent',
      'Choix mémorisé et révocable depuis le pied de page',
      'Document remis : ce qui part, vers qui, sur quelle base',
    ],
    faqs: [
      {
        q: 'Le mode avancé est-il conforme ?',
        a: 'Il est utilisé largement et conçu pour l’être, à condition que rien d’identifiant ne parte sans consentement. Le mode basique reste le plus protecteur. La décision vous appartient, et elle se documente : je ne suis pas juriste.',
      },
      {
        q: 'Quel taux d’acceptation attendre en France ?',
        a: 'Les études de marché situent l’acceptation autour de 55 à 65 % sur les sites e-commerce français. Mesurez le vôtre plutôt que de vous fier à une moyenne.',
      },
      {
        q: 'Une balise qui mesure le choix de consentement doit-elle attendre le consentement ?',
        a: 'Si elle l’exige, elle ne se déclenchera jamais sur un refus, et vous ne saurez jamais combien de gens refusent. C’est le piège classique : cette balise se traite à part, sans identifiant.',
      },
    ],
    offre: { slug: 'audit-tracking', nom: 'Audit tracking', phrase: 'Test refus par refus, et inventaire de ce qui se déclenche.' },
    sources: [
      { label: 'Taux de consentement en France, d’après Didomi (2026)', url: 'https://www.donneespersonnelles.fr/taux-consentement-cookies' },
    ],
    verifieLe: '12/09/2026',
  },
  {
    slug: 'tracking-woocommerce-wordpress',
    titre: 'Tracking WooCommerce et WordPress : les formulaires et les extensions',
    chapo: 'Sur WordPress, le problème vient rarement de la boutique. Il vient des extensions qui envoient, ou n’envoient pas, ce que vous croyez.',
    metaTitre: 'Tracking WooCommerce et WordPress : ce qui casse',
    metaDescription: 'Pourquoi vos conversions WordPress ne remontent pas : formulaires en AJAX, extensions qui doublent les événements, achats WooCommerce manqués.',
    famille: 'Plateformes',
    reponseCourte: 'Deux causes expliquent la majorité des cas : les formulaires envoyés sans rechargement de page, que les déclencheurs natifs ne voient pas, et l’empilement d’extensions qui posent chacune leur propre mesure. On commence par inventorier ce qui envoie déjà des événements, avant d’ajouter quoi que ce soit.',
    aQuoiCaSert: [
      'Savoir enfin combien de contacts et de ventes votre site génère, et d’où ils viennent.',
      'Arrêter de payer des extensions qui font trois fois le même travail, en se contredisant.',
      'Envoyer aux régies des conversions propres, sans doublon, même quand le site est fait de briques hétérogènes.',
    ],
    quandCaNeSertPas: [
      'Sur un site vitrine sans publicité, une mesure d’audience simple suffit largement.',
      'Si votre extension de formulaire et votre extension de mesure font déjà correctement le travail, ne changez rien : vérifiez, puis passez à autre chose.',
    ],
    pannes: [
      {
        probleme: 'Aucun formulaire ne remonte comme conversion.',
        cause: 'L’envoi se fait sans rechargement de page, donc le déclencheur natif ne se déclenche jamais.',
        correctif: 'Écouter l’événement de succès émis par l’extension de formulaire, puis vérifier sur un envoi réel.',
      },
      {
        probleme: 'Les conversions sont comptées plusieurs fois.',
        cause: 'Plusieurs extensions posent chacune leur propre mesure, en plus du conteneur.',
        correctif: 'Inventaire, puis une seule source d’envoi par plateforme.',
      },
      {
        probleme: 'Les achats WooCommerce manquent à l’appel.',
        cause: 'La page de confirmation est contournée, ou l’extension n’expose pas les données de commande.',
        correctif: 'Envoyer l’achat depuis le serveur à partir de la commande enregistrée.',
      },
    ],
    checklist: [
      'Liste des extensions qui posent des balises, y compris celles installées par un ancien prestataire',
      'Un seul émetteur par plateforme publicitaire',
      'Formulaires testés un par un, envoi réel',
      'Achat testé sur une commande réelle',
      'Valeurs dans la bonne unité et la bonne devise',
      'Consentement respecté par toutes les extensions',
      'Vitesse du site contrôlée après nettoyage',
    ],
    faqs: [
      {
        q: 'Faut-il une extension de tracking ou un conteneur ?',
        a: 'Un conteneur, dans presque tous les cas : il centralise, il se documente, et il ne dépend pas de la mise à jour d’une extension. Les extensions restent utiles pour exposer les données de commande.',
      },
      {
        q: 'Elementor, Gravity Forms, Contact Form 7 : est-ce différent ?',
        a: 'Le principe est le même, seul le nom de l’événement de succès change. C’est justement ce qu’on vérifie pendant la recette.',
      },
      {
        q: 'Le nettoyage peut-il casser mon site ?',
        a: 'Retirer des balises ne casse pas un site, mais ça peut interrompre une mesure dont quelqu’un dépend. D’où l’inventaire écrit avant toute suppression.',
      },
    ],
    offre: { slug: 'audit-tracking', nom: 'Audit tracking', phrase: 'Inventaire complet avant toute modification.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'enhanced-conversions-google-ads',
    titre: 'Enhanced Conversions : ce que ça change, et ce que ça ne change pas',
    chapo: 'C’est l’un des réglages les plus rentables de Google Ads, et l’un des plus souvent déclarés actifs sans l’être.',
    metaTitre: 'Enhanced Conversions Google Ads : ce que ça change vraiment',
    metaDescription: 'À quoi servent les Enhanced Conversions, comment vérifier qu’elles fonctionnent, et pourquoi elles ne remplacent ni un tracking propre ni l’offline.',
    famille: 'Régies',
    reponseCourte: 'Les Enhanced Conversions renvoient à Google des données de contact hachées, collectées au moment de la conversion, pour rattacher des conversions que le navigateur seul ne permet plus d’attribuer. C’est un réglage à fort rendement quand la collecte est propre, et strictement inutile quand elle ne l’est pas.',
    aQuoiCaSert: [
      'Récupérer des conversions perdues faute de cookie, en s’appuyant sur une donnée que vous détenez déjà : l’e-mail ou le téléphone saisi au moment de l’achat ou du formulaire.',
      'Améliorer la précision de l’attribution, donc la qualité des décisions d’enchère.',
      'Préparer le terrain pour les conversions hors ligne, qui reposent sur la même logique de rattachement.',
    ],
    quandCaNeSertPas: [
      'Si vos conversions elles-mêmes sont mal définies, améliorer leur rattachement ne fait qu’améliorer la précision d’un mauvais signal.',
      'Sur un site où aucune donnée de contact n’est saisie, il n’y a rien à envoyer.',
      'Ce n’est pas un substitut au consentement : les données ne partent que si le visiteur a accepté.',
    ],
    pannes: [
      {
        probleme: 'Le réglage est déclaré actif, mais Google indique qu’aucune donnée n’est reçue.',
        cause: 'Les champs ne sont pas trouvés sur la page de confirmation, ou la valeur est envoyée après le départ du visiteur.',
        correctif: 'Vérifier sur une conversion réelle, puis envoyer la donnée depuis le serveur si la page ne s’y prête pas.',
      },
      {
        probleme: 'Les conversions augmentent brutalement après activation.',
        cause: 'Doublon avec une autre source de conversion, souvent une importation depuis la mesure d’audience.',
        correctif: 'Une seule source par action de conversion, et contrôle sur une période complète.',
      },
    ],
    checklist: [
      'Consentement vérifié avant tout envoi',
      'Données normalisées puis hachées',
      'Test sur une conversion réelle, pas en prévisualisation',
      'État de réception vérifié dans l’interface Google Ads',
      'Une seule source par action de conversion',
      'Effet mesuré sur une période comparable',
    ],
    faqs: [
      {
        q: 'Est-ce que j’envoie des données personnelles à Google ?',
        a: 'Vous envoyez des empreintes non réversibles, calculées sur des données que le visiteur vous a fournies, et seulement s’il a consenti. Cela doit figurer dans votre politique de confidentialité.',
      },
      {
        q: 'Faut-il le server-side pour en profiter ?',
        a: 'Non, mais le serveur rend l’envoi beaucoup plus fiable, notamment quand la page de confirmation est contrainte.',
      },
      {
        q: 'Quel gain attendre ?',
        a: 'Cela dépend entièrement de votre taux de perte actuel. C’est précisément ce que l’audit mesure avant de promettre quoi que ce soit.',
      },
    ],
    offre: { slug: 'tracking-server-side', nom: 'Tracking server-side', phrase: 'Activées, vérifiées sur des conversions réelles.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'ga4-vers-bigquery',
    titre: 'GA4 vers BigQuery : par où commencer sans surdimensionner',
    chapo: 'L’export est gratuit à activer et n’est jamais rétroactif. C’est la seule décision de mesure qu’il faut prendre aujourd’hui, même sans projet.',
    metaTitre: 'GA4 vers BigQuery : par où commencer',
    metaDescription: 'Pourquoi activer l’export GA4 vers BigQuery dès maintenant, ce qu’il apporte vraiment, ce qu’il coûte à l’usage, et à quel moment un entrepôt devient surdimensionné.',
    famille: 'Data',
    reponseCourte: 'Activez l’export dès aujourd’hui : il n’est jamais rétroactif, donc chaque semaine d’attente est une semaine de données perdues. Ensuite seulement, demandez-vous si vous avez besoin d’un entrepôt complet : pour beaucoup d’activités, quelques tables et un tableau de bord suffisent.',
    aQuoiCaSert: [
      'Conserver vos données brutes au-delà des limites de conservation de l’interface, et pouvoir recalculer un chiffre au lieu de le croire.',
      'Croiser vos ventes, vos coûts publicitaires et vos données CRM, ce qu’aucune interface de régie ne fera pour vous.',
      'Servir de socle à un tableau de bord, à une automatisation ou à un assistant qui interroge vos chiffres.',
    ],
    quandCaNeSertPas: [
      'Si personne ne pose jamais de question au-delà de ce que montre l’interface, l’entrepôt restera inutilisé.',
      'Si votre collecte est fausse, vous stockerez des données fausses, avec plus de précision.',
      'Un entrepôt demande un minimum d’entretien. Sans personne pour s’en occuper, un tableur bien tenu vaut mieux.',
    ],
    pannes: [
      {
        probleme: 'Les chiffres de l’entrepôt ne correspondent pas à ceux de l’interface.',
        cause: 'Les deux ne comptent pas la même chose : périodes, fuseaux, modèles d’attribution et sessions diffèrent.',
        correctif: 'Écrire les définitions, puis comparer sur un périmètre restreint avant de conclure à une erreur.',
      },
      {
        probleme: 'Le chiffre d’affaires remonté dépasse la réalité.',
        cause: 'Les commandes annulées après coup ne sont jamais relues.',
        correctif: 'Relecture glissante des dernières 48 heures et rapprochement automatique avec la source.',
      },
      {
        probleme: 'Les coûts d’entrepôt dérapent.',
        cause: 'Des requêtes qui balaient toute la table à chaque exécution.',
        correctif: 'Partitionnement, filtrage par date, et tables métier préparées plutôt que requêtes brutes.',
      },
    ],
    checklist: [
      'Export GA4 activé, même sans projet immédiat',
      'Fuseau horaire et devise vérifiés sur la propriété',
      'Définitions des indicateurs écrites avant toute requête',
      'Tables partitionnées et filtrées par date',
      'Contrôles de cohérence à chaque exécution',
      'Rapprochement régulier avec le back-office',
      'Budget et alertes de coût configurés',
    ],
    faqs: [
      {
        q: 'Combien coûte BigQuery pour un site e-commerce ?',
        a: 'À ces volumes, cela reste généralement de l’ordre de quelques euros à quelques dizaines d’euros par mois. C’est une estimation : le montant dépend du trafic et des requêtes, et il est chiffré dans le devis.',
      },
      {
        q: 'Faut-il savoir écrire des requêtes pour en profiter ?',
        a: 'Non, si le socle est préparé : les tables métier sont pensées pour être lues par un tableau de bord, pas par un analyste.',
      },
      {
        q: 'Puis-je activer l’export et ne rien en faire pendant six mois ?',
        a: 'Oui, et c’est souvent le bon choix. Le jour où le besoin arrive, vous aurez six mois d’historique au lieu de zéro.',
      },
    ],
    offre: { slug: 'dashboard-roas-reel', nom: 'Dashboard et ROAS réel', phrase: 'Le socle, puis le tableau de bord qui s’appuie dessus.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'tracking-prestashop',
    titre: 'Tracking PrestaShop : la couche de données et les modules',
    chapo: 'PrestaShop laisse plus de liberté que Shopify, donc plus de place à l’erreur. Ce qui se répare, à condition de savoir où regarder.',
    metaTitre: 'Tracking PrestaShop : couche de données et modules',
    metaDescription: 'Mettre en place une mesure fiable sur PrestaShop : couche de données propre, modules qui se marchent dessus, achats manqués et valeurs mal transmises.',
    famille: 'Plateformes',
    reponseCourte: 'Sur PrestaShop, tout repose sur la couche de données : si elle est incomplète ou incohérente entre les pages, aucune balise ne rattrapera le problème. La deuxième cause d’écart vient des modules de mesure installés au fil des ans, qui envoient les mêmes événements en parallèle.',
    aQuoiCaSert: [
      'Disposer d’événements e-commerce complets, de la vue produit à la commande, avec les bonnes valeurs.',
      'Envoyer aux régies des conversions propres, sans dépendre d’un module qui peut casser à la prochaine mise à jour.',
      'Réconcilier vos ventes réelles avec ce que déclarent les plateformes.',
    ],
    quandCaNeSertPas: [
      'Sur une boutique à faible volume sans publicité payante, une mesure d’audience simple suffit.',
      'Si votre boutique doit migrer dans six mois, faites le strict minimum et gardez le chantier pour la nouvelle plateforme.',
    ],
    pannes: [
      {
        probleme: 'Les valeurs d’achat sont absurdes, cent fois trop grandes ou trop petites.',
        cause: 'Confusion entre unités, ou conversion appliquée deux fois.',
        correctif: 'Fixer l’unité et la devise dans la couche de données, puis vérifier sur trois commandes réelles.',
      },
      {
        probleme: 'Certains achats ne remontent jamais.',
        cause: 'Le retour du paiement contourne la page de confirmation.',
        correctif: 'Envoyer l’achat depuis le serveur à partir de la commande enregistrée.',
      },
      {
        probleme: 'Deux modules envoient le même événement.',
        cause: 'Empilement de solutions installées par différents prestataires.',
        correctif: 'Inventaire, suppression, et une seule source d’envoi par plateforme.',
      },
    ],
    checklist: [
      'Couche de données identique sur toutes les pages produit et panier',
      'Unité et devise vérifiées',
      'Achat testé sur une commande réelle, moyen de paiement inclus',
      'Modules de mesure inventoriés et dédoublonnés',
      'Consentement respecté par tous les modules',
      'Réconciliation sur 30 jours avec l’export des commandes',
    ],
    faqs: [
      {
        q: 'Faut-il un module payant pour bien tracker PrestaShop ?',
        a: 'Pas nécessairement. Une couche de données propre plus un conteneur couvrent l’essentiel, et vous ne dépendez plus du calendrier de mise à jour d’un module.',
      },
      {
        q: 'Le server-side fonctionne-t-il sur PrestaShop ?',
        a: 'Oui, exactement comme ailleurs. L’envoi de l’achat depuis le serveur y est même particulièrement utile, vu la variété des retours de paiement.',
      },
      {
        q: 'Et si mon thème est très personnalisé ?',
        a: 'C’est fréquent, et c’est précisément pour cela que la recette se fait sur des commandes réelles plutôt que sur une page de démonstration.',
      },
    ],
    offre: { slug: 'audit-tracking', nom: 'Audit tracking', phrase: 'Réconciliation et inventaire avant tout chantier.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'looker-studio-ou-dashboard-sur-mesure',
    titre: 'Looker Studio ou tableau de bord sur mesure : comment trancher',
    chapo: 'La question n’est pas l’outil, mais ce que vos équipes doivent pouvoir faire devant l’écran.',
    metaTitre: 'Looker Studio ou dashboard sur mesure : comment choisir',
    metaDescription: 'Quand Looker Studio suffit, quand un tableau de bord sur mesure se justifie : accès par utilisateur, alertes, actions dans l’outil, coûts et maintenance comparés.',
    famille: 'Data',
    reponseCourte: 'Looker Studio suffit dans la majorité des cas, et coûte moins cher à maintenir. On passe à une application sur mesure quand il faut des accès cloisonnés par utilisateur, des alertes, ou des actions dans l’outil. Le socle de données, lui, ne change pas : c’est lui qui fait la qualité du résultat.',
    aQuoiCaSert: [
      'Donner à chaque personne la vue dont elle a besoin, sans lui demander d’écrire une requête ni d’attendre un export.',
      'Fixer des définitions communes, pour que la réunion du lundi ne commence plus par un débat sur la source.',
      'Déclencher une alerte quand un chiffre dérape, au lieu de le découvrir en fin de mois.',
    ],
    quandCaNeSertPas: [
      'Si le tracking est faux, un tableau de bord ne fait qu’afficher plus vite des chiffres faux. On corrige la collecte d’abord.',
      'Si une seule personne consulte les chiffres une fois par mois, un export bien fait suffit.',
      'Un outil sur mesure se maintient. Sans budget d’entretien, il vieillit mal.',
    ],
    pannes: [
      {
        probleme: 'Un indicateur ne se recalcule pas correctement par jour, semaine et mois.',
        cause: 'Des données pré-agrégées combinées entre elles, impossibles à ré-agréger.',
        correctif: 'Une table au jour comme source unique, et les agrégations calculées à la demande.',
      },
      {
        probleme: 'Un canal affiche zéro euro de chiffre d’affaires.',
        cause: 'Filtre de connecteur qui vide les colonnes, ou jointure sans correspondance.',
        correctif: 'Revoir la jointure, corriger la configuration, et ajouter un contrôle de cohérence automatique.',
      },
      {
        probleme: 'Le tableau de bord n’est plus utilisé six mois après.',
        cause: 'Personne n’a été formé et la documentation a disparu avec l’interlocuteur.',
        correctif: 'Former un référent interne, laisser la documentation chez le client, vérifier l’usage après quelques semaines.',
      },
    ],
    checklist: [
      'Décisions à éclairer écrites avant la première maquette',
      'Définitions des indicateurs figées et documentées',
      'Une table au jour comme source unique',
      'Vues quotidienne, hebdomadaire et mensuelle cohérentes entre elles',
      'Contrôles automatiques et alertes en cas d’anomalie',
      'Formation d’un référent interne',
      'Accès et propriété au nom du client',
    ],
    faqs: [
      {
        q: 'Looker Studio est-il vraiment gratuit ?',
        a: 'L’outil oui. Ce qui coûte, c’est ce qui l’alimente : connecteurs payants, entrepôt, et le temps de maintenance.',
      },
      {
        q: 'Peut-on commencer par Looker Studio puis basculer ?',
        a: 'Oui, et c’est même recommandé : si le socle de données est propre, changer d’interface ne remet pas en cause le travail fait.',
      },
      {
        q: 'Qui possède le tableau de bord ?',
        a: 'Vous, dans tous les cas : projet, accès et documentation sont à votre nom.',
      },
    ],
    offre: { slug: 'outils-sur-mesure', nom: 'Outils et dashboards sur mesure', phrase: 'Du socle de données à l’écran que votre équipe ouvre.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'supermetrics-ou-etl-maison',
    titre: 'Supermetrics ou ETL maison : quand payer un connecteur',
    chapo: 'Un abonnement, c’est du temps acheté. À partir d’un certain volume, le calcul s’inverse.',
    metaTitre: 'Supermetrics ou ETL maison : quand payer un connecteur',
    metaDescription: 'Comparer un connecteur payant et des flux d’ingestion écrits sur mesure : coût annuel, maintenance, limites d’API et critères de décision concrets.',
    famille: 'Data',
    reponseCourte: 'Un connecteur payant se justifie quand vous avez peu de sources, pas d’équipe technique et besoin d’aller vite. Des flux écrits sur mesure se justifient quand les sources se multiplient, que l’abonnement grimpe, ou que vous avez besoin de données que le connecteur n’expose pas. Le bon critère n’est pas le prix affiché, c’est le coût total avec la maintenance.',
    aQuoiCaSert: [
      'Rapatrier automatiquement les données de vos régies, de votre boutique et de votre CRM au même endroit.',
      'Historiser, pour comparer d’une année sur l’autre au lieu de dépendre des fenêtres de conservation des plateformes.',
      'Arrêter les exports manuels du lundi matin, et les erreurs qui vont avec.',
    ],
    quandCaNeSertPas: [
      'Avec une seule régie et un tableau de bord simple, l’interface native suffit.',
      'Si personne ne consulte les données rapatriées, le coût est pur.',
      'Écrire ses propres flux sans personne pour les maintenir, c’est déplacer le problème.',
    ],
    pannes: [
      {
        probleme: 'L’historique d’une régie ne se charge plus, avec des erreurs répétées.',
        cause: 'Les limites de débit de l’API sur les longues périodes demandées.',
        correctif: 'Ingestion découpée en fenêtres, avec reprise par compte et par niveau de détail.',
      },
      {
        probleme: 'Des colonnes de conversion arrivent vides.',
        cause: 'Un filtre appliqué par le connecteur, ou des colonnes qui n’existent pas pour ce type de compte.',
        correctif: 'Vérifier la configuration source par source, et contrôler les volumes à chaque exécution.',
      },
      {
        probleme: 'Les coûts d’abonnement doublent en un an.',
        cause: 'Ajout de sources et de comptes, facturés à l’unité.',
        correctif: 'Comparer le coût annuel au temps de développement d’un flux équivalent, source par source.',
      },
    ],
    checklist: [
      'Liste des sources et des comptes réellement nécessaires',
      'Coût annuel du connecteur, tous comptes inclus',
      'Estimation du temps de développement et de maintenance d’un flux équivalent',
      'Historique disponible et profondeur de reprise',
      'Contrôles de volume à chaque exécution',
      'Alerte quand une source cesse de répondre',
      'Documentation du flux, quel que soit le choix',
    ],
    faqs: [
      {
        q: 'Quel est le seuil de bascule ?',
        a: 'Il n’y a pas de seuil universel. Le calcul se fait en comparant l’abonnement annuel au coût de développement et d’entretien, sur trois ans.',
      },
      {
        q: 'Les flux maison sont-ils fragiles ?',
        a: 'Pas s’ils sont écrits avec des garde-fous : reprise sur erreur, contrôles de volume, et blocage de l’écriture en cas d’anomalie.',
      },
      {
        q: 'Peut-on mélanger les deux ?',
        a: 'C’est fréquent et souvent le plus rationnel : connecteur pour les sources standard, flux sur mesure pour les sources critiques ou exotiques.',
      },
    ],
    offre: { slug: 'automatisation', nom: 'Automatisation', phrase: 'Des flux qui tournent seuls, avec alerte en cas d’anomalie.' },
    verifieLe: '12/09/2026',
  },
  {
    slug: 'savoir-si-un-site-a-du-server-side',
    titre: 'Comment savoir si un site utilise du tracking server-side',
    chapo: 'Tout se voit depuis l’extérieur, sans aucun accès. C’est la méthode que j’utilise avant un premier rendez-vous.',
    metaTitre: 'Comment savoir si un site a du tracking server-side',
    metaDescription: 'Détecter depuis l’extérieur si un site utilise un conteneur server-side : sous-domaine de collecte, requêtes réseau, cookies posés, signaux de consentement.',
    famille: 'Server-side',
    reponseCourte: 'Ouvrez l’onglet réseau du navigateur et regardez où partent les requêtes de mesure. Si elles vont vers un sous-domaine du site, il y a un conteneur server-side. Si elles partent directement vers les domaines des régies, la collecte est entièrement côté navigateur.',
    aQuoiCaSert: [
      'Qualifier un prospect ou un concurrent en deux minutes, sans demander d’accès.',
      'Vérifier qu’un prestataire a réellement livré ce qui est facturé.',
      'Comprendre, avant un rendez-vous, à quel type de chantier on a affaire.',
    ],
    quandCaNeSertPas: [
      'Cela ne dit rien de la qualité de la mise en place : un conteneur server-side mal configuré perd autant qu’une collecte classique.',
      'Cela ne dit rien de la déduplication, de la correspondance ni des conversions hors ligne, qui ne se voient pas de l’extérieur.',
      'On observe des pages publiques, sans contourner aucune protection : le reste ne se fait pas.',
    ],
    pannes: [
      {
        probleme: 'Le site semble avoir un server-side, mais les données n’arrivent pas.',
        cause: 'Sous-domaine en place, mais adresse de transport absente sur certaines pages.',
        correctif: 'Vérifier page par page, tunnel de commande compris.',
      },
      {
        probleme: 'Un sous-domaine de collecte existe, et les cookies expirent quand même vite.',
        cause: 'Configuration qui fait passer la réponse pour un tiers.',
        correctif: 'Contrôler la durée réelle des cookies dans l’inspecteur, pas dans la documentation du fournisseur.',
      },
    ],
    checklist: [
      'Onglet réseau filtré sur les requêtes de mesure',
      'Destination : sous-domaine du site ou domaine de régie',
      'Cookies posés, et leur durée réelle',
      'Présence d’un bandeau de consentement et comportement sur refus',
      'Comportement avant et après acceptation',
      'Pages testées : accueil, fiche produit, panier, confirmation',
    ],
    faqs: [
      {
        q: 'Peut-on automatiser ce diagnostic ?',
        a: 'Oui, c’est exactement ce que fait un scanner de tracking : il visite des pages publiques et relève ces signaux. Il ne remplace pas un audit, il dit seulement ce qui se voit de l’extérieur.',
      },
      {
        q: 'Est-ce légal de regarder le tracking d’un autre site ?',
        a: 'Observer des pages publiques avec les outils du navigateur, oui. Contourner une protection ou aspirer un site en violation de ses conditions, non, et ce n’est pas ce que je fais.',
      },
      {
        q: 'Que faire du résultat ?',
        a: 'S’en servir pour poser de meilleures questions au premier rendez-vous, jamais pour affirmer un diagnostic qu’on n’a pas vérifié avec les accès.',
      },
    ],
    offre: { slug: 'audit-tracking', nom: 'Audit tracking', phrase: 'Ce que l’extérieur ne dit pas, l’audit le mesure.' },
    verifieLe: '12/09/2026',
  },
]

export const getRessource = (slug: string) => RESSOURCES.find((r) => r.slug === slug)
export const NB_RESSOURCES = RESSOURCES.length
