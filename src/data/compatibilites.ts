// ─────────────────────────────────────────────────────────────────────────────
// Plateformes sur lesquelles je sais me brancher.
//
// RÈGLE IMPORTANTE, à ne pas contourner :
// cette liste n'est PAS une liste de références ni d'expériences.
// Les outils réellement utilisés en mission ou en projet sont dans src/data/stack.ts.
// Ici on affirme uniquement une chose vérifiable : ces plateformes exposent une
// couche de données, une API ou des webhooks, et le travail de mesure y est le même.
// Ne jamais présenter cette section comme un portfolio.
// ─────────────────────────────────────────────────────────────────────────────

export interface FamilleCompat {
  cle: string
  nom: string
  intro: string
  commentJeMeBranche: string
  plateformes: string[]
}

export const COMPATIBILITES: FamilleCompat[] = [
  {
    cle: 'cms',
    nom: 'Boutiques et CMS',
    intro: 'Le point de départ du trajet de la donnée : c’est là que naissent les commandes et les formulaires.',
    commentJeMeBranche:
      'Couche de données écrite par le site quand la plateforme le permet, sinon par extension ou par thème enfant. Les événements du tunnel partent ensuite vers un conteneur serveur, avec un identifiant de commande stable pour la déduplication.',
    plateformes: [
      'Shopify', 'Shopify Plus', 'WooCommerce', 'PrestaShop', 'Magento', 'Adobe Commerce',
      'BigCommerce', 'Salesforce Commerce Cloud', 'Shopware', 'Sylius', 'Wix', 'Squarespace',
      'Webflow', 'WordPress', 'Drupal', 'Joomla', 'Ghost', 'Framer', 'Craft CMS', 'Contentful',
      'Strapi', 'Sanity', 'Prismic', 'Directus', 'Storyblok', 'Odoo eCommerce', 'Ecwid',
      'OpenCart', 'Oxatis', 'Wizishop', 'Next.js', 'Nuxt', 'Astro',
    ],
  },
  {
    cle: 'crm',
    nom: 'CRM et outils commerciaux',
    intro: 'C’est le CRM qui sait quel formulaire est devenu un client, et pour quel montant. Sans lui, la génération de leads se pilote à l’aveugle.',
    commentJeMeBranche:
      'Capture de l’identifiant de clic publicitaire à l’arrivée sur le site, stockage sur la fiche à la création, puis remontée périodique des affaires gagnées vers les régies avec leur montant réel. Extraction du pipeline vers l’entrepôt pour mesurer un taux de transformation par campagne.',
    plateformes: [
      'Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics 365', 'Odoo',
      'Sellsy', 'Axonaut', 'noCRM.io', 'Monday CRM', 'Attio', 'Close', 'Copper', 'Freshsales',
      'SugarCRM', 'Teamleader', 'Zendesk Sell',
    ],
  },
  {
    cle: 'automation',
    nom: 'Marketing automation et emailing',
    intro: 'Le canal le moins cher et le plus mal mesuré. Rangé en trafic direct, il disparaît des rapports et perd ses budgets.',
    commentJeMeBranche:
      'Marquage cohérent de tous les liens sortants pour que le canal existe dans les rapports, rapprochement des envois avec les ventes réelles côté boutique, et remontée des événements de cycle de vie vers l’entrepôt pour sortir un chiffre d’affaires par scénario plutôt qu’un taux d’ouverture.',
    plateformes: [
      'Brevo', 'Klaviyo', 'Mailchimp', 'ActiveCampaign', 'HubSpot Marketing Hub', 'Customer.io',
      'Iterable', 'Braze', 'Marketo', 'Salesforce Marketing Cloud', 'Omnisend', 'Sarbacane',
      'Mailjet', 'Plezi', 'Webmecanik', 'Drip', 'MailerLite', 'Sendgrid',
      'Splio', 'Actito', 'Dartagnan',
    ],
  },
]

export const NB_PLATEFORMES = COMPATIBILITES.reduce((n, f) => n + f.plateformes.length, 0)
